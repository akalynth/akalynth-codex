#!/usr/bin/env node
// Akalynth Codex — BUILDER projection (PRIVATE, Layer 2).
// Emits the design-layer view: world design, implementation stage, graph, status,
// and design-doc refs. EXCLUDES operator-layer data (evidence hashes, packets) —
// the layer boundary is enforced in the data file itself. Includes builder-only
// (unreleased) entries that never reach the public surface. Never deploy.
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const opsRoot = join(codexRoot, '..');
const entriesDir = join(codexRoot, 'entries');
const outDir = join(codexRoot, 'out');
const bDir = join(codexRoot, 'builder');

const TYPE_CAT = { place: 'Places', region: 'Places', route: 'Places', faction: 'Factions', creature: 'Creatures', material: 'Materials', boss: 'Bosses', lore: 'Codices', system: 'Systems', quest: 'Quests' };
function sourceKind(origin) {
  if (origin && existsSync(join(opsRoot, `repos/akalynth/drop/${origin}/MANIFEST.md`))) return 'receipt';
  if (origin && (existsSync(join(opsRoot, `repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/${origin}.md`)) || /creature codex/i.test(origin) || origin === 'AKALYNTH_CITIES_SUMMARY_V1')) return 'source';
  return 'asserted';
}

const builder = readdirSync(entriesDir).filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(entriesDir, f), 'utf8')))
  .filter((e) => e.visibility?.builder !== false)
  .map((e) => ({
    id: e.id, type: e.type, title: e.title,
    category: e.public_projection?.category || TYPE_CAT[e.type] || e.type,
    status: e.status,
    published: !!(e.public_projection && e.public_projection.published),
    source_kind: sourceKind(e.lineage?.origin),
    design_source: e.lineage?.origin || null,
    description: e.world?.description || e.summary || '',
    design_refs: e.world?.design_refs || [],
    implementation: e.world?.implementation || null,
    related: (e.related || []).map((r) => ({ rel: r.rel, target: r.target })),
    tags: e.tags || [],
  }))
  .sort((a, b) => (a.id === 'forgehold' ? -1 : b.id === 'forgehold' ? 1 : a.title.localeCompare(b.title)));

const stats = { objects: builder.length, public: builder.filter((e) => e.published).length, internal: builder.filter((e) => !e.published).length, by_category: {}, by_stage: {}, by_status: {} };
for (const e of builder) {
  stats.by_category[e.category] = (stats.by_category[e.category] || 0) + 1;
  const st = (e.implementation && e.implementation.stage) || 'lore';
  stats.by_stage[st] = (stats.by_stage[st] || 0) + 1;
  stats.by_status[e.status] = (stats.by_status[e.status] || 0) + 1;
}

mkdirSync(outDir, { recursive: true });
mkdirSync(bDir, { recursive: true });
writeFileSync(join(outDir, 'codex-builder.graph.json'), JSON.stringify(builder, null, 2));
writeFileSync(join(bDir, 'builder-data.js'), '// PRIVATE — design-layer graph for the Builder console. Generated; do not deploy.\nwindow.CODEX_BUILDER = ' + JSON.stringify(builder, null, 2) + ';\nwindow.CODEX_BUILDER_STATS = ' + JSON.stringify(stats) + ';\n');

console.log('Builder projection (PRIVATE — do not deploy)');
console.log('  objects   :', stats.objects, '(public', stats.public, '· internal/unreleased', stats.internal + ')');
console.log('  by stage  :', stats.by_stage);
console.log('  by category:', stats.by_category);
