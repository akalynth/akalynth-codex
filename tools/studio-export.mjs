#!/usr/bin/env node
// Akalynth Studio export CLI — emit a durable, schema-validated codex packet
// from a verified browser-local ledger chain.
//
//   node tools/studio-export.mjs --demo                 build+verify+export a sample behavior binding
//   node tools/studio-export.mjs --chain events.json    ingest a browser-exported ledger chain
//   node tools/studio-export.mjs ... --kind placement   override packet kind (default behavior_binding)
//   node tools/studio-export.mjs ... --stdout           print packet, do not write
//
// Refuses to export a chain that does not verify PASS. Writes durable packets to
// studio-exports/<packet_id>.json. Does not establish production authority.

import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadLedger, buildSignedPacket } from '../lib/studio-verify.mjs';
import { buildExportPacket, importChain } from '../lib/studio-export.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const ledgerPath = join(codexRoot, 'studio', 'akalynth-ledger.js');

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? (process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : true) : undefined;
}

const kind = (typeof arg('--kind') === 'string' && arg('--kind')) || 'behavior_binding';
const exported_at = new Date().toISOString();

const { ledger, storage } = await loadLedger(ledgerPath);

let packet_id;
const chainFile = arg('--chain');
if (typeof chainFile === 'string') {
  const events = JSON.parse(readFileSync(chainFile, 'utf8'));
  importChain(storage, events);
  packet_id = events[0] && events[0].packet_id;
  if (!packet_id) { console.error('chain has no packet_id'); process.exit(2); }
} else if (arg('--demo')) {
  packet_id = await buildSignedPacket(ledger);
} else {
  console.error('usage: studio-export.mjs (--demo | --chain <events.json>) [--kind k] [--stdout]');
  process.exit(2);
}

let packet;
try {
  packet = await buildExportPacket(ledger, codexRoot, { packet_id, kind, exported_at });
} catch (e) {
  console.error('EXPORT REFUSED:', e.message);
  process.exit(1);
}

if (arg('--stdout')) {
  process.stdout.write(JSON.stringify(packet, null, 2) + '\n');
  process.exit(0);
}

const dir = join(codexRoot, 'studio-exports');
mkdirSync(dir, { recursive: true });
const safe = packet_id.replace(/[^a-z0-9]+/gi, '-');
const out = join(dir, `${safe}.json`);
writeFileSync(out, JSON.stringify(packet, null, 2));

console.log(`durable export written: studio-exports/${safe}.json`);
console.log(`  kind=${packet.kind} events=${packet.provenance.event_count} signer=${packet.provenance.signer_key_id || '(unsigned)'}`);
console.log(`  chain_verified=${packet.provenance.chain_verified} external_authority=${packet.provenance.external_authority}`);
