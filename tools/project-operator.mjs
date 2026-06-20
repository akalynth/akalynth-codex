#!/usr/bin/env node
// Akalynth Codex — OPERATOR projection (PRIVATE).
// Emits the FULL world graph (every field of every object) for the private
// Builder/Operator/Agent surfaces. This output contains internal paths, design
// refs, evidence locations, and work packets — it MUST NOT be deployed to the
// public site. Bundles codex/operator/operator-data.js for the local console.
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const opsRoot = join(codexRoot, '..');
const entriesDir = join(codexRoot, 'entries');
const outDir = join(codexRoot, 'out');
const opDir = join(codexRoot, 'operator');

function resolveSource(origin) {
  if (!origin) return 'asserted';
  const cands = [
    `repos/akalynth/drop/${origin}/MANIFEST.md`,
    `repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/${origin}.md`,
    `repos/akalynth/drop/${origin}/README.md`,
  ];
  if (existsSync(join(opsRoot, cands[0]))) return 'receipt';
  if (cands.slice(1).some((c) => existsSync(join(opsRoot, c))) || /creature codex/i.test(origin) || origin === 'AKALYNTH_CITIES_SUMMARY_V1') return 'source';
  return 'asserted';
}

const full = readdirSync(entriesDir).filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(entriesDir, f), 'utf8')))
  .sort((a, b) => (a.id === 'forgehold' ? -1 : b.id === 'forgehold' ? 1 : a.title.localeCompare(b.title)))
  .map((e) => ({ ...e, _source_kind: resolveSource(e.lineage?.origin) }));

const stats = {
  objects: full.length,
  by_status: {}, by_category: {}, by_source_kind: {},
  open_packets: full.reduce((n, e) => n + (e.packets || []).filter((p) => p.status === 'open').length, 0),
  public: full.filter((e) => e.public_projection?.published).length,
};
for (const e of full) {
  stats.by_status[e.status] = (stats.by_status[e.status] || 0) + 1;
  const c = e.public_projection?.category || e.type;
  stats.by_category[c] = (stats.by_category[c] || 0) + 1;
  stats.by_source_kind[e._source_kind] = (stats.by_source_kind[e._source_kind] || 0) + 1;
}

mkdirSync(outDir, { recursive: true });
mkdirSync(opDir, { recursive: true });
writeFileSync(join(outDir, 'codex-operator.graph.json'), JSON.stringify(full, null, 2));
writeFileSync(join(opDir, 'operator-data.js'),
  '// PRIVATE — full Codex graph for the operator console. Generated; do not deploy.\nwindow.CODEX_FULL = ' + JSON.stringify(full, null, 2) + ';\nwindow.CODEX_STATS = ' + JSON.stringify(stats) + ';\n');

console.log('Operator projection (PRIVATE — do not deploy)');
console.log('  objects        :', stats.objects, '· public', stats.public, '· open packets', stats.open_packets);
console.log('  by status      :', stats.by_status);
console.log('  by source kind :', stats.by_source_kind);
console.log('  wrote          : codex/out/codex-operator.graph.json, codex/operator/operator-data.js');
