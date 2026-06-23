#!/usr/bin/env node
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadLedger, buildSignedPacket, validateEntry } from '../lib/studio-verify.mjs';
import { buildExportPacket } from '../lib/studio-export.mjs';
import { promote, sha256Hex } from '../lib/studio-promote.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const ledgerPath = join(codexRoot, 'studio', 'akalynth-ledger.js');
const stamp = '2026-06-23T00:00:00.000Z';
const reviewSchema = JSON.parse(readFileSync(join(codexRoot, 'schema', 'promotion-review-packet.schema.json'), 'utf8'));
const permitSchema = JSON.parse(readFileSync(join(codexRoot, 'schema', 'builder-promotion-permit.schema.json'), 'utf8'));
const ackSchema = JSON.parse(readFileSync(join(codexRoot, 'schema', 'council-human-ack.schema.json'), 'utf8'));

async function freshExport() {
  const { ledger } = await loadLedger(ledgerPath);
  const packet_id = await buildSignedPacket(ledger);
  const exportPacket = await buildExportPacket(ledger, codexRoot, { packet_id, kind: 'behavior_binding', exported_at: stamp });
  const exportSha = sha256Hex(Buffer.from(JSON.stringify(exportPacket)));
  return { exportPacket, exportSha };
}

const base = async (over = {}) => {
  const { exportPacket, exportSha } = await freshExport();
  return {
    exportPacket, exportPath: 'studio-exports/test.json', exportSha,
    reviewer: 'guardian@vaultmesh.org', note: 'reviewed; safe for beta',
    decision: 'accept', lane: 'beta', acked: true, stamp, ...over,
  };
};

test('accept + ack issues a schema-valid review, ack, and permit', async () => {
  const { review, ack, permit } = promote(codexRoot, await base());
  assert.equal(validateEntry(review, reviewSchema).length, 0);
  assert.equal(validateEntry(ack, ackSchema).length, 0);
  assert.ok(permit && validateEntry(permit, permitSchema).length === 0);
  // cross-references wire up both directions
  assert.equal(permit.review_packet_id, review.packet_id);
  assert.equal(review.promotion_permit_ref, permit.permit_id);
  assert.equal(review.lane_target, 'beta');
  assert.equal(ack.status, 'provided');
  assert.equal(permit.non_mutation_boundary.runtime_state, 'unchanged');
});

test('accept WITHOUT ack is refused (no permit without operator ack)', async () => {
  const opts = await base({ acked: false });
  assert.throws(() => promote(codexRoot, opts), /requires an explicit operator human-ack/);
});

test('reject writes a review but issues no permit', async () => {
  const { review, ack, permit } = promote(codexRoot, await base({ decision: 'reject', acked: false, note: 'wrong idle pose' }));
  assert.equal(permit, null);
  assert.equal(review.decision, 'reject');
  assert.equal(ack.status, 'not_required');
  assert.equal(validateEntry(review, reviewSchema).length, 0);
});

test('refuses to promote an export that is not chain_verified', async () => {
  const opts = await base();
  opts.exportPacket = { ...opts.exportPacket, provenance: { ...opts.exportPacket.provenance, chain_verified: false } };
  assert.throws(() => promote(codexRoot, opts), /not chain_verified/);
});

test('lane never reaches production (schema enum blocks it)', async () => {
  const opts = await base({ lane: 'production' });
  assert.throws(() => promote(codexRoot, opts), /review packet invalid|lane_target/);
});

test('reviewer and decision_note are mandatory', async () => {
  const noReviewer = { ...(await base()), reviewer: undefined };
  assert.throws(() => promote(codexRoot, noReviewer), /reviewer is required/);
  const noNote = { ...(await base()), note: undefined };
  assert.throws(() => promote(codexRoot, noNote), /decision_note is required/);
});
