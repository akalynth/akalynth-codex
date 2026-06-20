#!/usr/bin/env node
// Seed the codex-volume entries (the reference plates) into the world graph.
// One entry per plate, category "Codices". Summaries are from the source markdown.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const entriesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'entries');
mkdirSync(entriesDir, { recursive: true });
const STAMP = '2026-06-12T00:00:00Z';

// [id, title, plate, origin, summary, body, related[]]
const CODICES = [
  ['factions-codex', 'Factions Codex', 'factions-codex', 'AKALYNTH_FACTIONS_CODEX_V1',
    'Powers That Shape the World.',
    'The institutions whose laws and beliefs shape Akalynth. Volume I opens with the Codexborn — keepers of order and guardians of recorded truth, founded by the First Archivist after the Great Accord.',
    ['high-city']],
  ['artifacts-codex', 'Artifacts Codex', 'artifacts-codex', 'AKALYNTH_ARTIFACTS_CODEX_V1',
    'Relics of Power.',
    'Heroes change history, villains corrupt it, artifacts preserve it. Volume I gathers the eight Relics of Power, beginning with the First Codex — the oldest written record, said to update itself whenever the world changes.',
    ['heroes-codex', 'chronicle-of-ages']],
  ['heroes-codex', 'Heroes Codex', 'heroes-codex', 'AKALYNTH_HEROES_CODEX_V1',
    'The First Legends.',
    'Civilizations are forged by those who dared leave their mark upon eternity. Volume I begins with the First Archivist — the One Who Refused Forgetting — whose recording of the Great Accord kept civilization from falling into ignorance.',
    ['factions-codex', 'chronicle-of-ages']],
  ['dungeon-codex', 'Dungeon Codex', 'dungeon-codex', 'AKALYNTH_DUNGEON_CODEX_V1',
    'Places Where History Still Breathes.',
    'A dungeon is a wound in history that has not yet closed. Volume I begins with the First Archive — the vault beneath High City that preserves the earliest laws, treaties, maps, and forbidden memory records.',
    ['high-city']],
  ['chronicle-of-ages', 'Chronicle of Ages', 'chronicle-of-ages', 'AKALYNTH_CHRONICLE_OF_AGES_V1',
    'Events That Changed The World.',
    'Cities rise, heroes die, kingdoms vanish; what remains are the moments that changed everything. Volume I opens with the First Binding — the dawn of remembered civilization.',
    ['high-city', 'heroes-codex']],
  ['emberwilds-atlas', 'Emberwilds Atlas', 'emberwilds-atlas', 'AKALYNTH world atlas',
    'The volcanic frontier, mapped.',
    'A regional atlas of the Emberwilds — the living-volcano frontier anchored by Forgehold Citadel and watched from the ash-edge by Cindervale.',
    ['forgehold', 'cindervale']],
];

let n = 0;
for (const [id, title, plate, origin, summary, body, related] of CODICES) {
  const e = {
    schema_version: 'codex-entry/v1', id, type: 'lore', title,
    authority: 'Akalynth', author: 'guardian@vaultmesh.org', created: STAMP, updated: STAMP,
    status: 'accepted',
    visibility: { builder: true, operator: true, agent: true, public: true },
    summary,
    lineage: { origin, accepted: true, accepted_at: STAMP, last_accepted_change: origin },
    world: { description: summary, design_refs: [`repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/${origin}.md`] },
    related: related.map((t) => ({ rel: 'references', target: t })),
    assets: [{ kind: 'plate', path: `repos/akalynth-site/assets/codex/${plate}.png` }],
    public_projection: {
      published: true, reviewed_by: 'guardian@vaultmesh.org', title, category: 'Codices',
      summary, body, assets: [`assets/codex/${plate}.png`], related, source_ref: id,
    },
    tags: ['codex', 'archive'],
  };
  writeFileSync(join(entriesDir, `${id}.json`), JSON.stringify(e, null, 2) + '\n');
  n++;
}
console.log(`seeded ${n} codex-volume entries (category: Codices)`);
