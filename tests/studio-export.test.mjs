#!/usr/bin/env node
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadLedger, buildSignedPacket, validateEntry } from '../lib/studio-verify.mjs';
import { buildExportPacket, importChain, exportFromChain } from '../lib/studio-export.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const ledgerPath = join(codexRoot, 'studio', 'akalynth-ledger.js');
const exportSchema = JSON.parse(readFileSync(join(codexRoot, 'schema', 'studio-export-packet.schema.json'), 'utf8'));
const opts = { kind: 'behavior_binding', exported_at: '2026-06-23T00:00:00.000Z' };

// capture a real signed chain from the ledger
async function captureChain() {
  const { ledger, storage } = await loadLedger(ledgerPath);
  const packet_id = await buildSignedPacket(ledger);
  return { events: storage._dump(), packet_id };
}

test('export of a verified chain yields a schema-valid durable packet', async () => {
  const { ledger, storage } = await loadLedger(ledgerPath);
  const packet_id = await buildSignedPacket(ledger);
  const packet = await buildExportPacket(ledger, codexRoot, { packet_id, ...opts });

  assert.equal(validateEntry(packet, exportSchema).length, 0);
  assert.equal(packet.schema_version, 'studio-export/v1');
  assert.equal(packet.provenance.chain_verified, true);
  assert.match(packet.provenance.last_event_digest, /^[0-9a-f]{64}$/);
  assert.match(packet.payload.output_digest, /^[0-9a-f]{64}$/);
  assert.ok(packet.provenance.signer_key_id, 'expected a signer key id from the signed receipt');
  assert.equal(packet.provenance.external_authority, 'NOT ESTABLISHED');
});

test('export REFUSES a tampered chain (cannot become durable)', async () => {
  const { events, packet_id } = await captureChain();
  // tamper a committed payload
  const target = events.find((e) => e.object_type === 'behavior_binding');
  target.payload = { ...target.payload, injected: 'evil' };

  const { ledger, storage } = await loadLedger(ledgerPath);
  importChain(storage, events);
  await assert.rejects(
    () => buildExportPacket(ledger, codexRoot, { packet_id, ...opts }),
    /refusing to export/,
  );
});

test('exportFromChain round-trips a captured browser chain', async () => {
  const { events } = await captureChain();
  const packet = await exportFromChain(codexRoot, ledgerPath, events, opts);
  assert.equal(validateEntry(packet, exportSchema).length, 0);
  assert.equal(packet.provenance.event_count, events.length);
});

test('schema rejects a packet claiming chain_verified=false (no durable-but-unverified)', () => {
  const bad = {
    schema_version: 'studio-export/v1', packet_id: 'wp:0123abcd', kind: 'behavior_binding',
    exported_at: '2026-06-23T00:00:00.000Z',
    provenance: {
      canonicalization: 'akalynth-canonical-json-v1', event_count: 1, chain_verified: false,
      last_event_digest: 'a'.repeat(64),
    },
    payload: { output_digest: 'b'.repeat(64) },
  };
  assert.ok(validateEntry(bad, exportSchema).some((e) => e.includes('chain_verified')));
});
