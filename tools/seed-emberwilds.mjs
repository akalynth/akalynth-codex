#!/usr/bin/env node
// Grow the graph: make Forgehold's ext: edges into real nodes
// (emberwilds region, ember-road route, flamebound faction, soulsteel material,
// heartforge landmark). Public-safe entries; the dungeon/boss stay internal.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const entriesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'entries');
mkdirSync(entriesDir, { recursive: true });
const STAMP = '2026-06-12T00:00:00Z';

// [id, type, title, category, origin, summary, body, related[]]
const NODES = [
  ['emberwilds', 'region', 'The Emberwilds', 'Places', 'AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1',
    'The living-volcano frontier.',
    'A volcanic frontier region anchored by Forgehold Citadel and watched from the ash-edge by Cindervale. Crossed by the Ember Road.',
    ['forgehold', 'cindervale', 'ember-road']],
  ['ember-road', 'route', 'The Ember Road', 'Places', 'AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1',
    'High City to the Forgehold Outer Gate.',
    'The first route expansion of Akalynth: regional travel from High City through the Emberwilds to the Forgehold Outer Gate.',
    ['high-city', 'forgehold', 'emberwilds']],
  ['flamebound', 'faction', 'The Flamebound', 'Factions', 'AKALYNTH_FACTIONS_CODEX_V1',
    'Forge-sworn of the Emberwilds.',
    'The faction of Forgehold — forge-sworn keepers of Soulsteel and the Heartforge. Their domain is Strength; their origin role is the Flamekeeper.',
    ['forgehold', 'soulsteel', 'heartforge']],
  ['soulsteel', 'material', 'Soulsteel', 'Materials', 'AKALYNTH_SOULSTEEL_STABILIZATION_V1',
    'The signature alloy of Forgehold.',
    'A material forged and stabilized at the Heartforge of Forgehold; the core of the Forgehold crafting systems.',
    ['forgehold', 'flamebound', 'heartforge']],
  ['heartforge', 'place', 'The Heartforge', 'Places', 'AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1',
    'The great forge at the heart of Forgehold.',
    'The Heartforge burns at the centre of Forgehold Citadel — where Soulsteel is made. (Its Trial Chamber is a separate, unreleased dungeon.)',
    ['forgehold', 'soulsteel']],
];

let n = 0;
for (const [id, type, title, category, origin, summary, body, related] of NODES) {
  const e = {
    schema_version: 'codex-entry/v1', id, type, title,
    authority: 'Akalynth', author: 'guardian@vaultmesh.org', created: STAMP, updated: STAMP,
    status: 'accepted',
    visibility: { builder: true, operator: true, agent: true, public: true },
    summary,
    lineage: { origin, accepted: true, accepted_at: STAMP, last_accepted_change: origin },
    world: { description: body },
    related: related.map((t) => ({ rel: 'references', target: t })),
    public_projection: { published: true, reviewed_by: 'guardian@vaultmesh.org', title, category, summary, body, assets: [], related, source_ref: id },
    tags: ['emberwilds', type],
  };
  writeFileSync(join(entriesDir, `${id}.json`), JSON.stringify(e, null, 2) + '\n');
  n++;
}
console.log(`seeded ${n} Emberwilds graph nodes (Places/Factions/Materials)`);
