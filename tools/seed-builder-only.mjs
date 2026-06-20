#!/usr/bin/env node
// Builder-only entries: unreleased content that lives in the Builder/Operator
// Codex but is NEVER published to the public surface (visibility.public=false,
// no public_projection). Proves the layer boundary: Builder sees more than Public.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const entriesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'entries');
mkdirSync(entriesDir, { recursive: true });
const STAMP = '2026-06-12T00:00:00Z';
const ORIGIN = 'AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1';
const docs = (f) => `repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/docs/${f}`;

// [id, type, title, status, description, design_doc, related[]]
const NODES = [
  ['heartforge-trial-chamber', 'place', 'Heartforge Trial Chamber', 'candidate',
    'The trial dungeon beneath the Heartforge — Soulsteel-stabilization trials guarding the route\'s final tempering. Designed, not yet released.',
    'AKALYNTH_HEARTFORGE_TRIAL_CHAMBER_DUNGEON_V1.md', ['forgehold', 'heartforge', 'oathless-forge']],
  ['oathless-forge', 'boss', 'The Oathless Forge', 'draft',
    'The boss encounter at the heart of the Heartforge Trial Chamber. Mechanics designed; unreleased.',
    'AKALYNTH_OATHLESS_FORGE_BOSS_V1.md', ['heartforge-trial-chamber', 'forgehold']],
];

let n = 0;
for (const [id, type, title, status, description, doc, related] of NODES) {
  const e = {
    schema_version: 'codex-entry/v1', id, type, title,
    authority: 'Akalynth', author: 'guardian@vaultmesh.org', created: STAMP, updated: STAMP,
    status,
    visibility: { builder: true, operator: true, agent: true, public: false },
    summary: title + ' — builder-only (unreleased).',
    lineage: { origin: ORIGIN, accepted: true, accepted_at: STAMP, last_accepted_change: ORIGIN },
    world: { description, design_refs: [docs(doc)], implementation: { stage: 'spec', slice: ORIGIN } },
    related: related.map((t) => ({ rel: 'references', target: t })),
    public_projection: null,
    tags: ['unreleased', 'forgehold-slice', type],
  };
  writeFileSync(join(entriesDir, `${id}.json`), JSON.stringify(e, null, 2) + '\n');
  n++;
}
console.log(`seeded ${n} builder-only entries (visibility.public=false; not on the public surface)`);
