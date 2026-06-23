#!/usr/bin/env node
// Akalynth Studio promotion gate CLI — wire a durable export packet into
// review-gated, durable in-repo receipts (gap_external_authority).
//
//   node tools/studio-promote.mjs --export studio-exports/<id>.json \
//        --reviewer guardian@vaultmesh.org --decision accept --lane beta --ack \
//        --note "reviewed binding; safe for beta"
//
//   --decision reject|revise   writes a review receipt, issues NO permit
//   --decision accept          requires --ack; issues a builder-promotion-permit
//   --lane beta|staging        never production
//   --stdout                   print receipts, do not write
//
// Writes receipts/<id>.json. Does not deploy, publish, or mutate the runtime.

import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promote, sha256Hex } from '../lib/studio-promote.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');

function arg(name) {
  const i = process.argv.indexOf(name);
  if (i < 0) return undefined;
  const v = process.argv[i + 1];
  return v && !v.startsWith('--') ? v : true;
}

const exportPath = arg('--export');
if (typeof exportPath !== 'string' || !existsSync(exportPath)) {
  console.error('usage: studio-promote.mjs --export <studio-export.json> --reviewer <id> --decision <accept|reject|revise> [--lane beta|staging] [--ack] --note <text>');
  process.exit(2);
}

const exportBytes = readFileSync(exportPath);
const exportPacket = JSON.parse(exportBytes.toString('utf8'));
const exportSha = sha256Hex(exportBytes);
const stamp = new Date().toISOString();

const opts = {
  exportPacket,
  exportPath,
  exportSha,
  reviewer: typeof arg('--reviewer') === 'string' ? arg('--reviewer') : undefined,
  decision: typeof arg('--decision') === 'string' ? arg('--decision') : 'revise',
  lane: typeof arg('--lane') === 'string' ? arg('--lane') : 'beta',
  abuseReview: typeof arg('--abuse-review') === 'string' ? arg('--abuse-review') : 'pass',
  acked: arg('--ack') === true,
  note: typeof arg('--note') === 'string' ? arg('--note') : undefined,
  sourceObject: typeof arg('--source-object') === 'string' ? arg('--source-object') : undefined,
  stamp,
};

let result;
try {
  result = promote(codexRoot, opts);
} catch (e) {
  console.error('PROMOTION REFUSED:', e.message);
  process.exit(1);
}

const { review, ack, permit } = result;

if (arg('--stdout')) {
  process.stdout.write(JSON.stringify({ review, ack, permit }, null, 2) + '\n');
  process.exit(0);
}

const dir = join(codexRoot, 'receipts');
mkdirSync(dir, { recursive: true });
const written = [];
function emit(name, obj) {
  const p = join(dir, `${name}.json`);
  writeFileSync(p, JSON.stringify(obj, null, 2));
  written.push(`receipts/${name}.json`);
}
emit(review.packet_id, review);
emit(`${review.packet_id}.human-ack`, ack);
if (permit) emit(permit.permit_id, permit);

console.log(`promotion gate: decision=${review.decision} lane=${review.lane_target} reviewer=${review.reviewer}`);
console.log(`  ack: ${ack.status}${permit ? `  permit: ${permit.execution_status}` : '  permit: (none — not accepted)'}`);
console.log(`  non-mutation: no deploy, no publish, runtime unchanged`);
for (const w of written) console.log(`  wrote ${w}`);
