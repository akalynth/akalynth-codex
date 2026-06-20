#!/usr/bin/env node
// Seed real public Codex entries (cities + creatures) from existing Akalynth lore.
// Writes schema-valid live objects with a published public_projection.
// Forgehold is authored by hand (full live object) and is NOT regenerated here.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const entriesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'entries');
mkdirSync(entriesDir, { recursive: true });

const STAMP = '2026-06-12T00:00:00Z';

// [id, title, category, type, domain/threat, summary, body, assetPath|null, related[]]
const CITIES = [
  ['high-city', 'High City', 'Cities', 'place', 'Order',
    'Crown of Convergence — capital of Akalynth and birthplace of the Great Accord.',
    'High City rises atop converging ley currents as the political, cultural, and intellectual heart of Akalynth. Known for the Trinity Nexus, the Great Archive Vaults, the Sky Spires, the Accord Chambers, and the Conclave Citadel.',
    'assets/akalynth/visuals/cards/01-high-city-dawn.card-800x1000.webp', ['forgehold', 'veridium-port', 'moonspire', 'cindervale']],
  ['veridium-port', 'Veridium Port', 'Cities', 'place', 'Prosperity',
    'Gateway of the Western Sea — the largest harbor in Akalynth.',
    'Veridium Port connects the great civilizations through trade, exploration, and information. Known for the Grand Harbor, the Merchant Guilds, the Sea Archives, the Explorer Houses, and the Crystal Lighthouse.',
    null, ['high-city']],
  ['moonspire', 'Moonspire', 'Cities', 'place', 'Wisdom',
    'City of Dreams — spiritual capital built around a great Dream Sanctum.',
    'Pilgrims come to Moonspire seeking visions, memory exploration, and dream rites. Known for the Dream Sanctums, the Reflection Pools, the Memory Gardens, the Moon Archives, and the Silent Observatory.',
    null, ['high-city', 'dreamweaver']],
  ['cindervale', 'Cindervale', 'Cities', 'place', 'Survival',
    'Frontier of Ash — a harsh stronghold at the edge of the Emberwilds.',
    'Cindervale protects trade routes and stands against volcanic threats. Known for the Watch Bastions, the Frontier Markets, the Ashwardens, the Expedition Guilds, and the Ember Gates.',
    'assets/akalynth/visuals/cards/09-cinderwatch-frontier.card-800x1000.webp', ['forgehold', 'high-city']],
];

const CREATURES = [
  ['witness-moth', 'The Witness Moth', 'Keeper of Seen Truths · Recorder of All That Is', 'High',
    'A luminous moth said to record everything it witnesses — memory, evidence, and omen made flesh.', 'witness-moth', ['high-city']],
  ['void-whale', 'The Void Whale', 'Skybound Leviathan · Herald of the Gap', 'Catastrophic',
    'Not a creature of the stars but of absence — a vast leviathan that drifts where the world thins.', 'void-whale', []],
  ['chronoshell-turtle', 'The Chronoshell Turtle', 'Keeper of Ages · Shell of Millennia', 'Unknown',
    'An ancient turtle whose shell is said to hold millennia; time moves differently in its wake.', 'chronoshell-turtle', []],
  ['dreamweaver', 'The Dreamweaver', 'Architect of Dreams · Weaver of Possibilities', 'High (Indirect)',
    'An architect of dreams that weaves possibility itself; its threat is subtle and indirect.', 'dreamweaver', ['moonspire']],
  ['memory-serpent', 'The Memory Serpent', 'Guardian of Forgotten Truths · Warden of the Deep Mind', 'Extreme',
    'A serpent that guards forgotten truths in the deep mind — warden of what the world tried to forget.', 'memory-serpent', []],
  ['echo-stalker', 'The Echo Stalker', 'Shadow Hunter of Forgotten Sounds', 'Extreme',
    'A shadow that hunts by forgotten sounds; it stalks the spaces between what was heard and what was meant.', 'echo-stalker', []],
];

const base = (id, type, title, summary, origin) => ({
  schema_version: 'codex-entry/v1', id, type, title,
  authority: 'Akalynth', author: 'guardian@vaultmesh.org',
  created: STAMP, updated: STAMP, status: 'accepted',
  visibility: { builder: true, operator: true, agent: true, public: true },
  summary,
  lineage: { origin, accepted: true, accepted_at: STAMP, last_accepted_change: origin },
});

let n = 0;
for (const [id, title, category, type, domain, summary, body, asset, related] of CITIES) {
  const e = base(id, type, title, summary, 'AKALYNTH_CITIES_SUMMARY_V1');
  e.world = { description: `${summary} Civic domain: ${domain}.` };
  e.related = related.map((t) => ({ rel: 'connects_to', target: t }));
  if (asset) e.assets = [{ kind: 'card', path: `repos/akalynth-site/${asset}` }];
  e.public_projection = { published: true, reviewed_by: 'guardian@vaultmesh.org', title, category, summary, body, assets: asset ? [asset] : [], related, source_ref: id };
  e.tags = ['city', domain.toLowerCase()];
  writeFileSync(join(entriesDir, `${id}.json`), JSON.stringify(e, null, 2) + '\n');
  n++;
}
for (const [id, title, epithet, threat, body, plate, related] of CREATURES) {
  const e = base(id, 'creature', title, epithet, 'codex.html creature codex');
  e.world = { description: `${epithet} · Threat: ${threat}.` };
  e.related = related.map((t) => ({ rel: 'references', target: t }));
  e.assets = [{ kind: 'plate', path: `repos/akalynth-site/assets/codex/${plate}.png` }];
  e.public_projection = { published: true, reviewed_by: 'guardian@vaultmesh.org', title, category: 'Creatures', summary: `${epithet} · Threat: ${threat}`, body, assets: [`assets/codex/${plate}.png`], related, source_ref: id };
  e.tags = ['creature', `threat-${threat.toLowerCase().replace(/[^a-z]+/g, '-')}`];
  writeFileSync(join(entriesDir, `${id}.json`), JSON.stringify(e, null, 2) + '\n');
  n++;
}
console.log(`seeded ${n} entries (${CITIES.length} cities + ${CREATURES.length} creatures) into codex/entries/`);
