# Game Loop Bible — Design Page

Codex object: game-loop-bible · Source drop: AKALYNTH_GAME_LOOP_BIBLE_V1

> "A world is not complete when it has places, monsters, and legends. It becomes a game when players know why they return tomorrow." — Akalynth Design Notes

---

## Purpose

The Game Loop Bible is a cross-cutting **system** object: it defines the first
playable loop architecture for Akalynth and connects existing lore assets
(Origins, Professions, Factions, Cities, Dungeons, Artifacts, World events,
Reputation, long-term identity) into a single player-facing operating model.

It is not a class list, content dump, or lore encyclopedia. It answers the core
game question:

**What does the player do over time, and why does that action remain meaningful?**

### Core Player Fantasy

The player is a participant in the recovery, protection, and interpretation of a
broken world. Every major activity connects to one of four verbs:

| Verb | Meaning |
|---|---|
| Recover | Find lost knowledge, artifacts, routes, ruins, and memory fragments. |
| Prove | Establish what happened through evidence, witnesses, records, and trials. |
| Build | Improve professions, settlements, guilds, equipment, and faction standing. |
| Defend | Protect cities, archives, routes, and historical continuity from collapse. |

The strongest Akalynth loop is:

```text
Explore → Recover → Verify → Craft/Use → Influence World → Unlock Deeper Mystery
```

---

## Core Loops

### Minute-to-Minute (Primary Loop)

```text
Enter a location
  → Discover clue / creature / resource / contradiction
  → Resolve encounter or puzzle
  → Recover material, record, memory, or artifact fragment
  → Return to faction/city/profession authority
  → Gain reputation, progression, access, or crafting options
  → Unlock deeper location or world-event thread
```

**Core reward types:** Memory Fragments (lore unlocks, archive verification,
faction quests) · Ley Materials (crafting, upgrades, city infrastructure) ·
Reputation (faction access, privileges, story branches) · Artifact Shards
(legendary progression) · Profession Mastery (identity and economy) · Route
Knowledge (travel, exploration, trade) · City Influence (local privileges and
world-state participation).

### Session Loop

A normal session should produce at least one concrete outcome.

| Session | Player can |
|---|---|
| 20-minute | field contract · targeted gather · resolve a small memory anomaly · one profession order · escort one caravan/witness · contribute to a city/faction objective |
| 60-minute | dungeon wing · faction quest-chain segment · craft/upgrade meaningful equipment · recover a verified archive entry · minor world event |
| 2-hour | legendary dungeon · advance an artifact hunt · regional crisis · profession milestone · shift faction or city standing |

### The Six Named Loops

1. **Exploration Recovery** — field quests, ruin delves, route discovery, creature tracking, early profession supply.
2. **Verification** — Codexborn quests, archive puzzles, Witness Moth memory review, faction investigations.
3. **Profession Economy** — Soulsteel forging, mapping, memory curation, ward crafting, expedition supply.
4. **Dungeon Progression** — First Archive, Heartforge Core, Silent Vault, Liminal Web, Forgotten Kingdom.
5. **World Event** — Void Whale sighting, Witness Moth bloom, Forgehold crisis, Dream convergence, Frontier Ashfall.
6. **Social Institution** — guilds, archive houses, expedition companies, merchant leagues, forge orders.

### Long-Horizon (hour 1 / 10 / 50 / 200 / year 3)

| Milestone | Player state |
|---|---|
| Hour 1 — First Proof Run | Bounded recovery mission complete → first reputation gain, first profession material, first codex entry, first faction-emphasis choice, first visible locked path. |
| Hour 10 — First Dungeon Access | Earns a major dungeon entrance (First Archive lower vault, Heartforge Core outer ring, Silent Vault seal chamber, Liminal Web dream gate) → dungeon loop begins, party play relevant, artifact fragments visible, faction consequences explicit. |
| Hour 50 — Regional Identity | Known by at least one city/faction → one strong profession direction, one artifact thread, one city standing track, one dungeon chain, first world-event participation. World should feel living, not a checklist. |
| Hour 200 — World-State Participation | Can influence regional conditions (strengthen city defenses, open trade routes, stabilize archives, weaken memory corruption, unlock faction operations, assist Chronicle-linked events). Player actions affect access, economy, reputation, and event conditions. |
| Year 3 — Legacy Play | Built identity and continuity: guild archive houses, named expedition companies, city influence roles, legendary profession titles, artifact ownership histories, seasonal Chronicle events, player-made routes/markets/territories. The fantasy is becoming part of Akalynth's recorded history. |

(Minute 1 — Arrival: player begins with an Origin and receives a home city, a
first faction contact, a reason to leave safety, and a small mystery tied to the
Chronicle of Ages. Framing: *"Something from the past has resurfaced, and your
Origin determines who trusts you first."*)

---

## Activity Catalog

Five playable activity families:

- **Field Contracts** (15–30 min) — recover corrupted record shards, escort a witness, track a ley disturbance, identify a false memory, protect a frontier caravan.
- **Archive Cases** (proof / contradictions) — compare witness testimony, decode damaged treaty lines, reconstruct missing city records, resolve historical disputes, identify forged codex entries.
- **Profession Orders** (crafting/gathering with economic value) — forge oathsteel fittings, create route charts, refine memory crystals, prepare expedition kits, craft archive-safe lanterns.
- **Dungeon Delves** (group or solo-capable historical spaces) — First Archive lower vault, Heartforge trial wing, Silent Vault entry seal, Liminal Web dream chamber, Forgotten Kingdom outer ruins.
- **World Events** (timed/phase-based regional) — Witness Moth Bloom, Void Whale Sighting, Frontier Ashfall, Dream Convergence, Archive Breach, Forgehold Crisis.
- **Organization Contracts** (group progression) — establish archive house, open trade route, defend city district, sponsor expedition, win faction charter.

Activity families map to the verbs as Recovery / Verification / Crafting /
Defense / Influence sets.

---

## Player Time Horizons

From first login to long-term legacy. Required outcomes per horizon:

| Horizon | Player state | Required outcomes |
|---|---|---|
| Minute 1 | Chooses an Origin; enters via a concrete local problem ("Who trusts you first, and what problem did they bring you?"). | Origin established · home city introduced · first faction contact · first anomaly/mystery visible · recoverable objective. |
| Hour 1 | Has completed one proof-shaped mission. | First reputation gain · first profession material · first codex entry · first moral/factional choice · first visible locked path. |
| Hour 10 | Known locally; trusted enough to enter dangerous historical spaces. | First dungeon access · party-play option · first artifact fragment · meaningful profession progression · visible faction tradeoff. |
| Hour 50 | Has a regional identity. | One strong profession path · one artifact thread · one major dungeon chain · one city standing track · first world-event contribution. |
| Hour 200 | Participates in world-state outcomes. | Regional event participation · guild/org identity · advanced profession role · long-term faction consequences · meaningful economic/political influence. |
| Year 3 | Has legacy — a recorded place in the world. | Seasonal history records · veteran identity beyond gear · group reputation · player-made institutions · ongoing reason to return. |

---

## Retention Design

Layered return cadence — each tier produces a distinct kind of progress:

| Cadence | Return reasons | Should produce |
|---|---|---|
| Daily | field contracts, profession orders, faction requests, route opportunities, small anomaly events | tangible but bounded progress |
| Weekly | dungeon wings, regional contracts, faction reputation milestones, guild objectives, market cycles, rotating archive cases | social coordination |
| Monthly | world-event phases, artifact hunt chapters, city influence outcomes, new dungeon layers, seasonal profession recipes | changes to world state |
| Seasonal | Chronicle event arcs, new region access, faction council decisions, raid boss emergence, server/world memorial records | history |
| Long-term | player institutions, legendary artifacts, social reputation, profession mastery, city influence, Chronicle inscriptions | identity, not only power |

**Reward philosophy:** rewards should change what the player can *do*, not only
make numbers larger. Good rewards unlock a sealed route, prove an old claim, earn
faction trust, open a dungeon layer, change a city condition, improve a
profession's output, or reveal a new Chronicle contradiction. Avoid generic +1
damage, disconnected loot, consequence-free lore, and cosmetic-only reputation.
Cosmetics are allowed but should represent earned history.

---

## Systems Matrix / Integration

Recommended V1 system directions (this is the integration contract with every
other Codex system object):

| System | Recommended V1 Direction | Reason |
|---|---|---|
| Progression | Hybrid mastery + reputation | Identity beyond combat level |
| Combat | Party-capable action RPG/MMO combat | Enables dungeons, bosses, field play |
| Crafting | Deep functional crafting | Professions need economic weight |
| Economy | Hybrid player economy | Crafted goods matter while supply is controlled |
| Reputation | Faction + city + profession standing | Connects worldbuilding to unlocks |
| World Events | Seasonal/regional world-state phases | Makes Chronicle playable |
| Housing/Guilds | Organization halls before personal housing | Supports social memory and group identity |
| Death Penalty | Durability + temporary memory instability | Thematic without being too punishing |
| Travel | Routes, ships, ley gates, discovered paths | Makes Navigator/Cartographer roles valuable |
| PvP | Optional factional/contract-based later | Avoids derailing early world loop |

**Progression stack (no track invalidates another):** Origin · Profession ·
Faction Reputation · City Standing · Dungeon Progress · Artifact Thread ·
Chronicle Participation · Guild/Organization Role.

**Unlock surfaces:** Reputation (Codexborn grants archive access) · Profession
(Soulsteel Smith unlocks legendary forging) · Dungeon (Silent Vault opens after
silence rite) · Artifact (Void Anchor fragment stabilizes a zone) · City Standing
(High City grants Conclave audience) · Guild (Expedition Company receives regional
charter) · World Event (Witness Moth Bloom unlocks replayed battlefield).

**Endgame is plural:** Combat (raid bosses, dungeon mastery, crisis defense) ·
Economic (legendary crafting, trade-route control, market specialization) ·
Exploration (lost regions, hidden dungeons, Void-touched zones) · Political
(faction councils, city influence, Accord decisions) · Chronicle (world-event
outcomes, seasonal records, server history, permanent memorialization).

**First Playable Slice:** High City + frontier approach · Origins (Archivist,
Flamekeeper, Ashwarden) · Factions (Codexborn, Flamebound, Oathbound, Ashwardens)
· main dungeon The First Archive – Lower Vault · supporting Heartforge Trial
Chamber · first world event Witness Moth Bloom.

---

## Release Gates

Prototype readiness checklist — every gate must pass before the encyclopedia is
expanded further:

1. **First Session Loop** — new player can choose an Origin, meet a first faction contact, complete one recovery mission, receive a meaningful reward, see one locked future path.
2. **First Profession Loop** — player can gather a material, refine/process it, craft or deliver an output, gain profession progress, use or trade the output.
3. **First Reputation Loop** — reputation increases from a specific action, unlocks specific access, is visible in UI, has faction-specific meaning.
4. **First Dungeon Loop** — dungeon has reason to enter, lore connection, encounter mechanic, reward, next unlock.
5. **First World Event Loop** — event has visible signal, player contribution, phase progress, outcome, record of what happened.
6. **First Social Loop** — group can form an identity, complete a shared objective, earn shared progress, unlock a shared privilege.

**Open release blockers (decisions still needed):** progression model
(level/skill/mastery/hybrid) · combat perspective · party size · economy
(player/NPC/hybrid) · death penalty · world state (global/shard/seasonal/instanced)
· crafting depth · PvP scope.

---

## Source & Provenance

Authoritative source drop: **AKALYNTH_GAME_LOOP_BIBLE_V1**
(`repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/docs/`). This page synthesizes,
with no invented mechanics:

- `AKALYNTH_GAME_LOOP_BIBLE_V1.md` — fantasy, primary/session loops, time horizons, progression, activity families, reward philosophy, world-event loop, social loop, endgame, first playable slice, release blockers.
- `AKALYNTH_CORE_LOOPS_V1.md` — the six named loops.
- `AKALYNTH_ACTIVITY_CATALOG_V1.md` — playable activity families.
- `AKALYNTH_PLAYER_TIME_HORIZONS_V1.md` — per-horizon required outcomes.
- `AKALYNTH_RETENTION_DESIGN_V1.md` — daily/weekly/monthly/seasonal/long-term cadence.
- `AKALYNTH_SYSTEMS_MATRIX_V1.md` — system directions, unlock surfaces, design warnings.
- `AKALYNTH_GAME_LOOP_RELEASE_GATES_V1.md` — six prototype-readiness gates.

Theme this loop reinforces: **memory matters, proof matters, choices are
recorded, and history can be changed by those willing to recover it.** Players
should not feel they are consuming lore — they should feel they are entering a
world where their actions may one day become lore.

---

**Surface:** Served on the codex builder/operator surface (codex.akalynth.com + gated beta /operator); supersedes the removed akalynth-site public Codex page.
