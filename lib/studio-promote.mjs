// Akalynth Studio promotion gate — turn a verified durable export packet into
// durable in-repo receipts (review packet + human ack + promotion permit).
//
// This closes gap_external_authority: a browser-local ledger signature proves
// local replay, not repository authority. Promotion authority is established by
// committing review-gated receipts INTO the repo. The gate is strict:
//   * the input export must be chain_verified (durable, tamper-checked);
//   * a builder-promotion-permit is issued ONLY on decision=accept WITH an
//     explicit operator human-ack;
//   * lane_target is beta|staging — never production;
//   * the permit asserts a non-mutation boundary (no deploy, no runtime change).
// It writes receipts; it does not deploy, publish, or touch the game runtime.

import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { validateEntry } from './studio-verify.mjs';

export function sha256Hex(buf) {
  return createHash('sha256').update(buf).digest('hex');
}

function loadSchema(codexRoot, name) {
  return JSON.parse(readFileSync(join(codexRoot, 'schema', name), 'utf8'));
}

// source_object must match ^[a-z0-9][a-z0-9-]*$ ; id tokens must match [A-Z0-9_]+
export function toSourceObject(raw) {
  return String(raw).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'studio-object';
}
function idToken(sourceObject) {
  return sourceObject.toUpperCase().replace(/-/g, '_');
}
function stampToken(iso) {
  return iso.replace(/[^0-9]/g, '').slice(0, 14); // YYYYMMDDHHMMSS
}

const NON_CLAIMS = [
  'No production deployment performed.',
  'Repository-receipt authority only; not server receipt-chain or CA authority.',
  'Browser-local ECDSA proves local replay, not external authority.',
  'No game-runtime, lane-publish, or zone state was mutated.',
];

// Build the operator review packet (always produced, for any decision).
export function buildReviewPacket(codexRoot, opts) {
  const {
    exportPacket, exportPath, exportSha, reviewer, decision, note,
    lane = 'beta', abuseReview = 'pass', sourceObject, stamp, permitId = null,
  } = opts;
  const src = sourceObject || toSourceObject(exportPacket.payload?.subject_asset_id || exportPacket.packet_id);
  const packet = {
    schema_version: 'promotion-review-packet/v1',
    packet_id: `AKALYNTH_REVIEW_${idToken(src)}_${stampToken(stamp)}`,
    source_object: src,
    draft_manifest_ref: exportPath,
    preview_session_ref: `studio-export:${exportPacket.packet_id}`,
    changed_files: [{ path: exportPath, sha256: exportSha }],
    preview_evidence: [
      exportPath,
      `ledger_last_event_digest:${exportPacket.provenance.last_event_digest}`,
      'verification_spine:node tools/studio-verify.mjs',
    ],
    receipt_expectations: [
      { receipt_type: 'studio-export/v1', lane: 'preview_only', note: 'durable export, chain-verified' },
    ],
    abuse_review: abuseReview,
    lane_target: lane,
    reviewer,
    decision,
    decision_note: note,
    non_claims: NON_CLAIMS,
  };
  if (permitId) packet.promotion_permit_ref = permitId;
  const errs = validateEntry(packet, loadSchema(codexRoot, 'promotion-review-packet.schema.json'));
  if (errs.length) throw new Error(`review packet invalid:\n  ${errs.join('\n  ')}`);
  return packet;
}

export function buildHumanAck(codexRoot, { acked, reviewer, stamp, decision }) {
  // ack is only meaningful on accept; reject/revise => not_required
  let status, ack_required, source;
  if (decision !== 'accept') { status = 'not_required'; ack_required = false; source = 'not_applicable'; }
  else if (acked) { status = 'provided'; ack_required = true; source = 'gate_flag_human_ack'; }
  else { status = 'missing'; ack_required = true; source = 'not_applicable'; }
  const ack = { schema_version: 'council-human-ack/v1', status, ack_required };
  if (status === 'provided') { ack.provided_utc = stamp; ack.operator_id = reviewer; ack.source = source; }
  else if (status === 'not_required') { ack.source = source; }
  const errs = validateEntry(ack, loadSchema(codexRoot, 'council-human-ack.schema.json'));
  if (errs.length) throw new Error(`human ack invalid:\n  ${errs.join('\n  ')}`);
  return ack;
}

export function buildPermit(codexRoot, { reviewPacketId, sourceObject, lane, reviewer, exportSha, stamp }) {
  const permit = {
    schema_version: 'builder-promotion-permit/v1',
    permit_id: `AKALYNTH_BUILDER_PERMIT_${idToken(sourceObject)}_${stampToken(stamp)}`,
    review_packet_id: reviewPacketId,
    source_object: sourceObject,
    lane_target: lane,
    issued_utc: stamp,
    reviewer,
    draft_manifest_checksum: exportSha,
    execution_status: 'permit_issued',
    non_mutation_boundary: { deployment: 'not_performed', lane_publish: 'not_performed', runtime_state: 'unchanged' },
    non_claims: NON_CLAIMS,
  };
  const errs = validateEntry(permit, loadSchema(codexRoot, 'builder-promotion-permit.schema.json'));
  if (errs.length) throw new Error(`permit invalid:\n  ${errs.join('\n  ')}`);
  return permit;
}

// Orchestrate the gate. Returns { review, ack, permit|null }. Throws if the
// export is not durable/verified, or if accept is requested without an ack.
export function promote(codexRoot, opts) {
  const { exportPacket, decision, acked, reviewer, note } = opts;

  if (exportPacket?.schema_version !== 'studio-export/v1')
    throw new Error('input is not a studio-export/v1 packet');
  if (exportPacket.provenance?.chain_verified !== true)
    throw new Error('refusing to promote: export packet is not chain_verified');
  if (!reviewer) throw new Error('a reviewer is required');
  if (!note) throw new Error('a decision_note is required');

  const sourceObject = opts.sourceObject || toSourceObject(exportPacket.payload?.subject_asset_id || exportPacket.packet_id);
  const ack = buildHumanAck(codexRoot, { acked, reviewer, stamp: opts.stamp, decision });

  if (decision === 'accept' && ack.status !== 'provided')
    throw new Error('permit blocked: decision=accept requires an explicit operator human-ack (--ack)');

  const review = buildReviewPacket(codexRoot, { ...opts, sourceObject });

  let permit = null;
  if (decision === 'accept') {
    permit = buildPermit(codexRoot, {
      reviewPacketId: review.packet_id, sourceObject,
      lane: opts.lane || 'beta', reviewer, exportSha: opts.exportSha, stamp: opts.stamp,
    });
    // back-reference the permit from the review packet (re-validate)
    Object.assign(review, buildReviewPacket(codexRoot, { ...opts, sourceObject, permitId: permit.permit_id }));
  }

  return { review, ack, permit };
}
