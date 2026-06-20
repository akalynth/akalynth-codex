#!/usr/bin/env node
// Akalynth Codex — AGENT projection (PRIVATE, the engineering-brain view).
// What an AI worker reads: the WORK QUEUE (open packets) + the SOURCE-TRUTH index
// (every object's status, so the agent knows what is accepted/safe to build on vs
// draft/blocked) + dependencies. Never deploy.
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const entriesDir = join(codexRoot, 'entries');
const outDir = join(codexRoot, 'out');
const aDir = join(codexRoot, 'agent');

const entries = readdirSync(entriesDir).filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(entriesDir, f), 'utf8')))
  .filter((e) => e.visibility?.agent !== false);

const objects = entries.map((e) => ({
  id: e.id, title: e.title, type: e.type,
  category: e.public_projection?.category || e.type,
  status: e.status,
  accepted: e.status === 'accepted',
  related: (e.related || []).map((r) => ({ rel: r.rel, target: r.target })),
  packet_count: (e.packets || []).length,
})).sort((a, b) => a.title.localeCompare(b.title));

const objById = Object.fromEntries(objects.map((o) => [o.id, o]));

// flatten packets into the queue, with source-object context
const packets = [];
for (const e of entries) for (const p of (e.packets || [])) {
  packets.push({
    object_id: e.id, object_title: e.title, object_status: e.status,
    kind: p.kind, ref: p.ref, ref_name: String(p.ref).split('/').pop(),
    status: p.status, assignee: p.assignee || null,
    // ready = packet open AND its source object is accepted (safe to act on)
    ready: p.status === 'open' && e.status === 'accepted',
  });
}

const stats = {
  objects: objects.length,
  open_packets: packets.filter((p) => p.status === 'open').length,
  ready: packets.filter((p) => p.ready).length,
  by_packet_status: {}, by_packet_kind: {}, by_object_status: {},
};
for (const p of packets) { stats.by_packet_status[p.status] = (stats.by_packet_status[p.status] || 0) + 1; stats.by_packet_kind[p.kind] = (stats.by_packet_kind[p.kind] || 0) + 1; }
for (const o of objects) stats.by_object_status[o.status] = (stats.by_object_status[o.status] || 0) + 1;

mkdirSync(outDir, { recursive: true });
mkdirSync(aDir, { recursive: true });
const payload = { objects, packets, stats };
writeFileSync(join(outDir, 'codex-agent.graph.json'), JSON.stringify(payload, null, 2));
writeFileSync(join(aDir, 'agent-data.js'), '// PRIVATE — agent work-queue + source-truth index. Generated; do not deploy.\nwindow.CODEX_AGENT = ' + JSON.stringify(payload, null, 2) + ';\n');

console.log('Agent projection (PRIVATE — do not deploy)');
console.log('  objects        :', stats.objects, '· by status', stats.by_object_status);
console.log('  packets        :', packets.length, '· open', stats.open_packets, '· ready', stats.ready);
console.log('  by packet kind :', stats.by_packet_kind);
