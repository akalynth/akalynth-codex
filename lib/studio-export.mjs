// Akalynth Studio export — turn a verified browser-local ledger packet into a
// durable, schema-validated codex export packet with provenance.
//
// This is the boundary the Gap Ledger calls for (gap_studio_exports): Studio
// edits are browser-local until they are reconstructed, chain-verified, and
// emitted as a durable repo artifact. Export REFUSES to emit a packet whose
// source chain does not verify PASS — so a tampered or incomplete chain cannot
// become a durable claim. It does not establish external/production authority;
// promotion remains a separate review-gated step.

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { loadLedger, validateEntry } from './studio-verify.mjs';

export const EXPORT_SCHEMA_REL = join('schema', 'studio-export-packet.schema.json');

// Inject a raw event array (e.g. exported from the browser ledger) into a
// freshly-loaded ledger's storage so it can be reconstructed and verified.
export function importChain(storage, events) {
  if (!Array.isArray(events)) throw new Error('chain must be an array of events');
  storage._set(events);
}

function receiptOf(events) {
  // last signed receipt_event carries the signer + its event_digest is the receipt digest
  const r = [...events].reverse().find((e) => e.object_type === 'receipt_event');
  if (!r) return { receipt_digest: null, signer_key_id: null };
  return { receipt_digest: r.event_digest || null, signer_key_id: (r.signature && r.signature.signer_key_id) || null };
}

// Build (and structurally validate) a durable export packet from a packet_id
// whose events are already loaded in `ledger`'s storage.
export async function buildExportPacket(ledger, codexRoot, { packet_id, kind, exported_at }) {
  const verdict = await ledger.verifyChain(packet_id);
  if (verdict.result !== 'PASS')
    throw new Error(`refusing to export: chain ${packet_id} did not verify (${verdict.errors.join('; ')})`);

  const recon = await ledger.reconstruct(packet_id);
  if (!recon.binding && kind === 'behavior_binding')
    throw new Error(`no behavior_binding committed in ${packet_id}`);

  const { receipt_digest, signer_key_id } = receiptOf(recon.events);

  // payload carries its own output_digest (commitBinding stamps it). If absent
  // (non-binding kinds), derive it from the canonical payload so the packet is
  // always tied to a content hash.
  let payload = recon.binding;
  if (!payload) {
    const committed = [...recon.events].reverse().find((e) => /binding|placement|registration/.test(e.object_type));
    payload = committed ? committed.payload : {};
  }
  if (!payload.output_digest) {
    const { output_digest, ...rest } = payload;
    payload = { ...payload, output_digest: await ledger.sha256Hex(ledger.canonical(rest)) };
  }

  const packet = {
    schema_version: 'studio-export/v1',
    packet_id,
    kind,
    exported_at,
    provenance: {
      canonicalization: 'akalynth-canonical-json-v1',
      event_count: recon.event_count,
      first_event_at: recon.first_event_at,
      chain_verified: true,
      last_event_digest: recon.last_event_digest,
      receipt_digest,
      signer_key_id,
      external_authority: 'NOT ESTABLISHED',
    },
    payload,
  };

  const schema = JSON.parse(readFileSync(join(codexRoot, EXPORT_SCHEMA_REL), 'utf8'));
  const errors = validateEntry(packet, schema);
  if (errors.length) throw new Error(`export packet failed schema validation:\n  ${errors.join('\n  ')}`);
  return packet;
}

// Convenience: load a fresh ledger, import a raw chain, export it.
export async function exportFromChain(codexRoot, ledgerPath, events, { kind, exported_at }) {
  const { ledger, storage } = await loadLedger(ledgerPath);
  importChain(storage, events);
  const packet_id = events[0] && events[0].packet_id;
  if (!packet_id) throw new Error('chain has no packet_id');
  return buildExportPacket(ledger, codexRoot, { packet_id, kind, exported_at });
}
