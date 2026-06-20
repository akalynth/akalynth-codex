# World Events Engine — Design Page

Codex object: world-events-engine · Source drop: AKALYNTH_WORLD_EVENTS_ENGINE_V1

A cross-cutting **system** — "The Living Chronicle System." World events turn Akalynth's
history into live gameplay: major events appear, escalate, involve factions, accept
player contributions, resolve, and become part of the Chronicle. The goal is not random
seasonal content — the goal is a world that remembers.

---

## Purpose

A repeatable live-world event layer. Every major event should create visible regional
change, faction response, player contribution paths, escalating stakes, success and
failure outcomes, a Chronicle record, and future consequences.

A good Akalynth event answers: What is happening? Who noticed first? Which factions
disagree? What can different player types contribute? What changes on success vs failure?
What does the Chronicle remember afterward?

World events are not temporary spectacle — they are **historical pressure systems**.
A dungeon can be cleared and a monster defeated, but an event becomes history, and history
is the true endgame.

---

## Event Lifecycle

The core loop runs **Signal → Investigation → Faction Response → Player Contribution →
Crisis Phase → Resolution → Chronicle Record → Aftermath**.

| Phase | What happens |
|---|---|
| 01 Signal | World gives a visible warning before any instructions (moths gather, records lose words, flames burn blue, shared dreams, ash on roads, an unremembered name on a monument). The world should feel like it noticed first. |
| 02 Investigation | Players discover what is happening — inspect records, question witnesses, recover samples, scout, analyze dream fragments, compare contradictory histories, track creatures. Different Origins read the same event differently. |
| 03 Faction Response | Factions propose competing solutions; player chooses who to support, creating reputation consequences. |
| 04 Player Contribution | Many playstyles contribute (Combat, Crafting, Exploration, Verification, Diplomacy, Logistics, Dungeon, Boss). No world event should be combat-only. |
| 05 Crisis | The event reaches its dangerous state: regional visuals change, routes shift, spawns change, prices may shift, dungeons may unlock temporary wings, leaders issue emergency contracts, thresholds become visible. |
| 06 Resolution | Outcome depends on player action; the best outcome is not always obvious. |
| 07 Chronicle Record | Every major event creates a permanent record. |
| 08 Aftermath | The world changes and leaves evidence behind — players can say "I was there." |

**Resolution outcomes (generic):** Stabilized · Contained · Partial Failure · Faction
Victory · Unstable Victory · Collapse.

---

## Event Types Catalog

Five families of world events:

| # | Family | Theme | Examples | Primary Factions |
|---|---|---|---|---|
| 01 | Memory | truth, records, witnesses, archive instability | Witness Moth Bloom, Archive Breach, Memory Fracture Echo, False Codex Emergence | Codexborn, Dream Sanctums, Trinity Convergence |
| 02 | Void | erasure, oblivion, lost names, collapsing history | Void Whale Sighting, Forgotten City Return, Namefall, Silent Horizon | Codexborn, Oathbound, Trinity Convergence |
| 03 | Forge | production, fire, corruption, war supply | Forgehold Crisis, Heartforge Overload, Soulsteel Contamination, Emberwild Ash Surge | Flamebound, Ashwardens, Oathbound |
| 04 | Dream | visions, nightmares, possibility, emotional reality | Dream Convergence, Nightmare Bloom, Liminal Gate Opening, Dreamweaver Silence | Dream Sanctums, Trinity Convergence, Codexborn |
| 05 | Frontier | survival, routes, settlement defense, creature movement | Frontier Ashfall, Beast Migration, Cindervale Siege, Route Collapse | Ashwardens, Oathbound, Navigator Guilds |

---

## Canon Event Cards

First six live events. Each card carries Signal, Investigation, Faction Conflict,
Contribution Paths, Crisis Phase, Resolution Outcomes, and Rewards.

- **Witness Moth Bloom** (Memory) — Moths gather over High City projecting a forgotten
  trial. Codexborn preserve / Oathbound prevent panic / Trinity decide release / Dream
  Sanctums read emotional residue. Outcomes: Full Preservation, Controlled Release,
  Suppression, Collapse. Rewards: Codexborn rep, Memory Fragments, Witness Moth materials,
  archive access, Chronicle inscription.
- **Void Whale Sighting** (Void) — Names vanish from monuments; maps blank out. Outcomes:
  Region Anchored, Partial Erasure, Historical Collapse, Forbidden Recovery. Rewards: Void
  Glass, Void Anchor fragments, rare Chronicle title, Forgotten Kingdom access, Trinity rep.
- **Forgehold Crisis** (Forge) — Forgehold flames turn blue-white; Soulsteel cracks; the
  Heartforge wakes an unfinished colossus. Outcomes: Forge Stabilized, Flame Trial Victory,
  Production Loss, Corruption Spread. Rewards: Soulsteel, Flamebound rep, forge recipes,
  Heartforge access, event-forged equipment marks.
- **Dream Convergence** (Dream) — Moonspire shares one dream; the Liminal Web overlaps the
  city. Outcomes: Vision Understood, Dream Stabilized, Nightmare Leak, False Future Chosen.
  Rewards: Dream Silk, Dream Sanctum rep, vision titles, Liminal Web access, rare recipes.
- **Frontier Ashfall** (Frontier) — Ash storms close Cindervale trade roads; the Ashfall
  Horde arrives. Outcomes: Frontier Held, Route Saved, Gate Damaged, Settlement Lost.
  Rewards: Ashwarden rep, route licenses, survival equipment, frontier titles, city influence.
- **Archive Breach** (Memory) — First Archive books rewrite themselves; a forbidden record
  turns sentient. Outcomes: Breach Contained, Forbidden Truth Saved, Records Destroyed,
  Black Archive Escape. Rewards: archive permits, Codexborn rep, rare records, living ink,
  First Archive dungeon progress.

---

## Contribution Scoring

Multi-path participation — Combat, Archivist, Crafter, Navigator, Dreamwalker, and guild
organizers all need useful roles. No major event is combat-only.

**Contribution types & score sources:** Combat Defense (enemies near objective) · Recovery
(fragments returned) · Crafting (event tools produced) · Verification (false records
identified) · Logistics (supplies delivered) · Exploration (anomaly sites discovered) ·
Diplomacy (disputes resolved) · Dungeon (event wing completed).

- **Individual contribution** sets personal reward tier, reputation gain, event
  currency/materials, title eligibility, profession progress, special event items.
- **Collective contribution** sets event phase progress, world-state outcome, route/dungeon
  unlocks, city condition, faction victory, the Chronicle record.

**Example thresholds (Witness Moth Bloom):** Verification 10,000 false fragments ·
Defense 500 archive encounters · Crafting 2,500 Memory Lantern frames · Exploration
120 replay sites · Dungeon 1,000 lower archive wings.

**Anti-exploit:** require meaningful proximity / objective completion; diminishing returns
on low-value spam; bounded interaction windows on event-critical objects; crafting requires
event-specific material lineage; group contribution must not erase individual contribution.

---

## Reward Structure

Rewards should unlock action, access, identity, or memory — not just bigger numbers.

- **Individual:** faction reputation, city standing, event currency/materials, profession
  progress, recipes, titles, dungeon keys, artifact fragments, outcome-tied cosmetics.
- **Group:** guild inscription, organization standing, shared hall decoration, trade rights,
  event banner, city recognition, archive room upgrade, forge contract rights, expedition charter.
- **World:** route opened, dungeon wing unlocked, city district restored, vendor unlocked,
  monument created, Chronicle entry added, future event seed activated.

| Tier | Condition | Reward Type |
|---|---|---|
| Participated | Minimum contribution | basic currency/materials |
| Proven | Meaningful objective completion | reputation + event item |
| Instrumental | High contribution or key objective | title + rare material |
| Remembered | Top/critical contribution | Chronicle mention eligibility |
| Institutional | Guild/group contribution | organization reward |

Rule: the best reward is not always a stronger weapon — sometimes it is permission to enter
a place that was closed before.

---

## Failure & Aftermath

Failure creates new story; it does not simply delete progress. Akalynth treats failure as
historical consequence.

| Failure | New Play Created |
|---|---|
| Archive records lost | Recovery expedition opens. |
| Void Anchor fails | Forgotten zone dungeon appears. |
| Forgehold unstable | Crafting crisis contracts appear. |
| Dream event unresolved | Nightmare creatures enter region. |
| Frontier gate falls | Siege recovery campaign begins. |

**Aftermath types:** Civic (damaged districts, memorials, standing changes, new contracts)
· Economic (price shifts, shortages, route change, emergency contracts) · Dungeon (new wing,
boss state change, access shifts, lingering event mechanics) · Faction (trust shifts, leader
dialogue, rival opportunity, new diplomacy) · Chronicle (public entry, mentions, outcome
record, future seed).

Worked example — failing to contain **Archive Breach**: the First Archive stays open but
unstable, living-text creatures spawn in lower vaults, Codexborn rep gains drop temporarily,
Black Archive Cells unlock a villain chain, a future recovery event becomes available, and
the Chronicle records the failure. Failure becomes playable history.

---

## Witness Moth Bloom (prototype event)

The first live-world event to prototype — chosen because it touches the strongest themes
(memory, truth, verification, archives, factions, contribution, Chronicle). It tests the
engine with **memory under pressure**, connecting Codexborn, Oathbound, Trinity Convergence,
Dream Sanctums, Witness Moths, High City, the First Archive, Memory Lantern crafting, archive
verification, and Chronicle records.

| Phase | Spec |
|---|---|
| 1 Signal | Witness Moths above High City — blue-violet moth lights over archive towers, memory projections flicker in plazas, lower-archive books glow, NPCs repeat phrases from an unknown trial. Prompt: "They are replaying something the city does not remember." |
| 2 Investigation | Collect three fragment types — Testimony Shard (public projection sites), Record Shard (lower archive shelves), Emotional Residue (Dream Sanctum meditation points). |
| 3 Faction Response | Codexborn preserve every fragment · Oathbound prevent panic & isolate dangerous projections · Trinity decide whether full release destabilizes the city · Dream Sanctums interpret emotional truth. |
| 4 Contribution | Verify testimony · defend archive scribes · craft Memory Lantern frames · escort shaken witnesses · enter replayed scenes · identify forged testimony. |
| 5 Crisis | A false memory spreads; NPCs believe an event that never happened. Players must determine the true memory before the false record stabilizes. |
| 6 Resolution | Full Preservation (new wing; Codexborn trust rises) · Controlled Release (stability holds; some records sealed) · Suppression (Oathbound trust rises; Codexborn suffers) · Collapse (false memories remain; future Archive Breach risk rises). |
| 7 Chronicle | Record of outcome, faction-response winner, contribution totals, guild mentions, unlocked content, damaged/preserved records. |

**Minimum prototype requirements:** one visible world signal · three fragment types · ≥2
faction response options · one crafting / one combat / one verification contribution · one
public progress threshold · four possible outcomes · one Chronicle entry.

---

## Integration Matrix

Every world event should connect multiple existing asset lanes: one historical pressure,
one region/city, ≥2 factions, ≥1 creature, ≥1 profession route, ≥1 dungeon or artifact
connection, one Chronicle outcome.

| Event | City/Region | Factions | Creatures | Dungeon | Artifact/Material |
|---|---|---|---|---|---|
| Witness Moth Bloom | High City | Codexborn, Oathbound, Dream Sanctums | Witness Moths | First Archive | Memory Lantern |
| Void Whale Sighting | Forgotten zones | Codexborn, Oathbound, Trinity | Void Whale Echoes | Forgotten Kingdom | Void Anchor |
| Forgehold Crisis | Forgehold | Flamebound, Ashwardens, Oathbound | Flamebound Colossi | Heartforge Core | Heartforge Hammer |
| Dream Convergence | Moonspire | Dream Sanctums, Trinity, Codexborn | Dreamweaver | Liminal Web | Crown of Moonspire |
| Frontier Ashfall | Cindervale | Ashwardens, Navigator Guilds, Oathbound | Ash creatures | Frontier recovery sites | Ashwarden Shield |
| Archive Breach | High City | Codexborn, Oathbound, Black Archive Cells | Living Texts, Witness Moths | First Archive | First Codex |

Design rule: an event that does not connect at least three codices is probably too small to
be a major world event — it may still be a local contract, but not a Chronicle event.

---

## Release Gates

The engine is not ready until one event can demonstrate every gate.

| Gate | Requirement |
|---|---|
| 1 Visible Signal | Region visibly altered before any quest prompt — environmental change, NPC reaction, faction notice, map/UI indicator. |
| 2 Investigation | Discovery gameplay — clues, fragments, scouting targets, records/witnesses, event-specific evidence. |
| 3 Faction Response | ≥2 faction interpretations — competing goals, reputation consequence, different reward emphasis, plausible disagreement. |
| 4 Multi-Path Contribution | ≥3 contribution paths; recommended minimum combat + verification + crafting/logistics. |
| 5 Trackable Progress | Individual contribution, collective phase progress, visible thresholds, outcome preview / risk language. |
| 6 Resolution | More than one outcome — success, partial success, failure/consequence, faction-shaped outcome. |
| 7 Chronicle Record | Persistent record — event name, region, outcome, major contributors/groups, unlocked/changed content. |
| 8 Aftermath | Leaves something behind — NPC dialogue, monument, altered dungeon, route change, faction standing change, or future event seed. |

---

## Source & Provenance

Authored from the authoritative source drop **AKALYNTH_WORLD_EVENTS_ENGINE_V1**. Source docs:

- `AKALYNTH_WORLD_EVENTS_ENGINE_V1.md` — engine overview, core loop, design principle, first-event rationale.
- `AKALYNTH_EVENT_LIFECYCLE_V1.md` — eight-phase lifecycle.
- `AKALYNTH_EVENT_TYPES_CATALOG_V1.md` — five event families.
- `AKALYNTH_CANON_EVENT_CARDS_V1.md` — first six live events.
- `AKALYNTH_EVENT_CONTRIBUTION_SCORING_V1.md` — multi-path scoring & anti-exploit rules.
- `AKALYNTH_EVENT_REWARD_STRUCTURE_V1.md` — reward philosophy & tiers.
- `AKALYNTH_EVENT_FAILURE_AND_AFTERMATH_V1.md` — failure-as-story & aftermath types.
- `AKALYNTH_WITNESS_MOTH_BLOOM_PROTOTYPE_V1.md` — prototype event spec.
- `AKALYNTH_WORLD_EVENTS_INTEGRATION_MATRIX_V1.md` — codex integration matrix.
- `AKALYNTH_WORLD_EVENTS_RELEASE_GATES_V1.md` — eight-gate readiness checklist.

No mechanics were invented; all systems, tables, and values trace to the docs above. This
page restructures the obsolete public-website brief (section structure only) into an internal
design page on the codex surface.

---

**Surface:** Served on the codex builder/operator surface (codex.akalynth.com + gated beta /operator); supersedes the removed akalynth-site public Codex page.
