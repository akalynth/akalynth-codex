# Cinderwatch Frontier Slice — Design Page

Codex object: cindervale · Source drop: AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1

> "Reopening a road is not victory. Victory is keeping it open when the world pushes back."
> — Ashwarden Field Saying

Subtitle: **The Ashline Frontier**. This is a place/route playable slice — the dangerous
frontier corridor between the reopened Ember Road and the Cindervale outer approach. It is
**not** full Cindervale; the city remains visible but not fully opened.

---

## Purpose

The first true frontier gameplay lane for Akalynth — the survival pillar of the early game.

Earlier slices proved: truth recovery in High City, route reopening and Soulsteel choice on
the Ember Road, and dream-gate traversal in Moonspire. This slice proves: patrol contracts,
creature tracking, caravan escort, refugee protection, camp condition state, route pressure,
frontier fortification, survival decisions, Navigator Guild presence, and the Frontier Ashfall
event seed.

Civic question this region asks: **What are you willing to protect when the world pushes back?**

---

## Player Starting State

Assumes completion of (or equivalent access from) `AKALYNTH_FIRST_PLAYABLE_SLICE_V1` and
`AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1`. The player enters with:

- a first Chronicle record
- partial Ember Road access
- Cinderwatch Camp visibility
- early faction standing
- basic route awareness

The world now reacts to the reopened road: caravans move again, refugees travel, Ashwardens
reactivate old watch routes, Navigator Guilds issue route licenses — but the reopened route cuts
through an old Glassfang migration path, and ash storms push creatures toward Cinderwatch.

---

## Frontier Flow (ordered states)

Core frontier loop — the slice's survival pillar:

```text
Scout → Track → Escort → Defend → Recover → Fortify → Advance Frontier State
```

Six-act slice structure:

1. **Act I — Cinderwatch Arrival**: establish frontier pressure (the first problem is pressure, not a monster).
2. **Act II — Patrol The Ashen Mile**: introduce patrol contracts and frontier state.
3. **Act III — Track The Glassfang Migration**: introduce creature tracking and non-evil creature conflict.
4. **Act IV — Defend The Refugee Crossing**: introduce caravan and refugee escort.
5. **Act V — Broken Watchtower Recovery**: recover frontier records, activate the Old Signal Beacon, reveal coming Ashfall.
6. **Act VI — Frontier Decision**: resolve the crisis and set frontier policy after the Matriarch and beacon are handled.

---

## Ashwarden Gameplay

Primary identity for this slice. The Ashwarden reads danger before it becomes disaster; the best
moment is preventing disaster, not winning a fight after it arrives.

**Core verbs**: Scout (locate danger before civilians hit it), Track (read creature movement,
route damage, storm behavior), Escort (move people, records, supplies, witnesses), Defend (hold
roads, gates, camps, crossings), Fortify (improve survival odds before the next crisis), Report
(turn field knowledge into frontier intelligence).

**Core abilities**: Route Sense (reveals safer paths / dangerous terrain), Track Read (better
reads of claw marks, ash trails, migration signs), Field Ward (temporary area protection during
escort/defense), Rally Signal (boosts civilian morale and caravan movement under pressure), Last
Line (short defensive burst when camp/caravan/refugee health is critical).

### Patrol contracts (first repeatable open-world lane)

Short sessions that contribute to camp state and route safety. Types: Marker Inspection, Scout
Recovery, Creature Sign Survey, Refugee Escort, Beacon Maintenance, Supply Run, Ashfall Watch.
Contract fields: contract id · route · sponsor faction · objective · danger rating · time window ·
camp state effect · reward · failure consequence. Design rule: every patrol must affect camp
state, route safety, faction trust, or Ashfall warning.

### Creature tracking (makes the Creature Codex playable)

Read what creatures are doing and why, not only how to kill them. Flow:
`Find sign → Inspect → Determine type → Determine state → Predict movement → Choose response`.

- **Track types**: Claw Marks (direction/size), Ash Trails (recent passage/speed), Shed Plates
  (stress/injury/migration stage), Broken Nests (displacement/predator pressure), Silence Zones
  (fear/memory disturbance), Scraped Stone (territorial movement), Glass Shards (Glassfang activity).
- **Creature states**: Hunting, Fleeing, Nesting, Wounded, Migrating, Corrupted.
- **Player responses**: avoid, redirect, pacify, trap, defend against, cull, report, escort around.

### Caravan / refugee escort (movement under pressure)

Caravans carry civilization (refugees, archive records, Forgehold supplies, Memory Lantern parts,
medical kits, route maps, witnesses, faction messengers). Caravan state tracks: Condition, Morale,
Supply Integrity, Route Risk, Pace, Trust. Pressure events: wheel breaks in ash, refugees panic,
route marker disappears, Glassfang scouts appear, ash cloud cuts visibility, Navigator agent
demands speed, Ashwarden warns of danger, Oathbound orders halt. Escort choices trade off safety,
speed, and purpose: **Move Fast** / **Move Carefully** / **Reroute**.

### Fortification (preparing before the storm)

Visible settlement preparation that improves survival odds before the full Ashfall event.
Projects: Reinforce Gate, Repair Signal Beacon, Build Ash Shelters, Mark Safe Routes, Set Glassfang
Detours, Stock Supply Cache, Forge Heat Stakes, Stabilize Watch Posts. Inputs: route materials,
ashglass, forge fittings, recovered watchtower parts, Navigator maps, Ashwarden field reports.
Quality levels: Temporary → Reliable → Reinforced → Named. Design rule: fortification must be
visible — barricades, beacons, shelters, and markers change as the player contributes.

> Supporting origins (each get role-specific reads/bonuses): Flamekeeper (fortification crafting,
> heat resistance, Flamebound supply), Archivist (report reconstruction, Codexborn evidence,
> pre-Ashfall patterns), Dreamwalker (panic-residue detection, calm frightened NPCs, Nightmare
> Weaver hints), Tide Navigator (route efficiency, caravan outcomes, Navigator Guild standing).

---

## Key Locations

Region: **Cinderwatch Frontier** (frontier zone before the city), 8 location nodes:

- Cinderwatch Camp
- Ember Road East
- Ashen Mile
- Broken Watchtower (combat-investigation micro-site, not a full dungeon)
- Glassfang Nest
- Refugee Crossing
- Old Signal Beacon
- Cindervale Outer Approach

**Factions present**: Ashwardens (primary — survival, patrol, route defense, frontier intel),
Navigator Guilds (introduced here — trade, route access, travel licenses; movement-first tension
with safety-first Ashwardens), Oathbound (protect refugee crossings, preserve law under pressure),
Flamebound (protect Forgehold supply lines), Codexborn (records on why earlier frontier logs went silent).

---

## Systems & UI Added

**UI panels**:

- **Camp State Panel**: Cinderwatch condition, defense level, refugee pressure, supply level, route pressure, Ashfall warning level.
- **Patrol Contract Panel**: patrol route, objective, danger rating, reward, faction sponsor, expiry window.
- **Tracking Panel**: track type, confidence, direction, creature state, migration pressure.
- **Caravan Escort Panel**: caravan condition, civilian morale, route risk, supply integrity, escort progress.
- **Frontier Policy Panel**: Fortify / Route / Storm Source, supporting factions, immediate result, future event seed.

**Camp State model** (first settlement with a pressure state) — tracks Defense, Supplies, Refugee
Pressure, Route Pressure, Ashfall Warning, Morale; states **Secure → Strained → Besieged →
Stabilized**, driven by completed/failed patrols, escorts, fortification, beacon repair, migration
redirection, and creature attacks.

**Minimum systems added**: patrol contract state, camp condition state, creature tracking state,
caravan escort state, refugee pressure, route pressure, fortification projects, migration behavior,
frontier policy choice, Ashfall event seed.

**Explicitly NOT in scope**: full Cindervale city, full trade economy, large-scale siege, mounted
travel, guild territory, raid-scale frontier defense.

---

## Boss — Glassfang Matriarch / Brood

**Glassfang Brood** — ash-glass frontier migratory predator-pack, dangerous but **not malicious**.
Lean ash-gray beasts with translucent crystalline jaw plates; when frightened their throat plates
vibrate a soundless pressure that unsettles mounts and civilians. They attack because the reopened
Ember Road cuts across an old migration path and the approaching Ashfall makes the brood unstable.
Signs: glass claw marks, shed crystal plates, ash-scraped stones, broken nests, soundless panic
zones, bitten route markers. They are "the wilderness answering a road that returned."

**The Glassfang Matriarch** — brood-mother, massive, ash-gray, armored in cracked volcanic glass
with heat glowing beneath her jaw plates.

> Boss theme: Civilization reopened a road. The wilderness answered.

Mechanics: **Shard Charge** (straight-line charge leaving movement-altering glass shards),
**Brood Call** (summons smaller Glassfangs unless nesting signals are disrupted), **Ashblind
Field** (ash/glass-dust cloud reducing visibility and route markers), **Migration Path Collapse**
(arena shifts as the old route breaks; Ashwarden tracking reveals safe paths), **Protective Fury**
(reckless attacks on broodlings make her more aggressive), **Final Frontier Handling** (at low
health the player chooses the outcome).

Outcomes — boss is resolved by survival judgment, not only damage:

| Outcome | Result |
|---|---|
| **Pacify** | Brood redirected; future creature conflict decreases, but route planning becomes more complex. Reward: Glassfang migration token. |
| **Drive Off** | Immediate route danger decreases; brood may return during Ashfall. Reward: frontier safety marker. |
| **Kill** | Route safer short-term; future ecosystem consequences increase. Reward: Glassfang shard trophy. |

The boss outcome modifies the final frontier policy and future creature behavior.

### Frontier policy choice (Act VI)

| Choice | Theme | Supported by | Key consequences |
|---|---|---|---|
| **Fortify The Camp** | Survival first | Ashwardens, Oathbound | Camp defense improves, refugees safer, caravan capacity/trade decrease, future siege defense improves. Reward: Ashwarden fortification mark. |
| **Keep The Route Open** | Civilization survives by moving | Navigator Guilds, Flamebound | Trade and Forgehold supply improve, camp stays vulnerable, future Ashfall risk increases, Navigator standing rises. Reward: Navigator route license. |
| **Track The Storm Source** | Understand the threat before it arrives | Codexborn, frontier scouts | Deeper Ashfall investigation, fewer immediate defenses, better future event knowledge, highest risk / strongest truth reward. Reward: Ashfall scout report. |

**Frontier Ashfall event seed**: the restored Old Signal Beacon confirms ash storms moving against
known weather patterns, accelerating creature migration, and old Cindervale records matching the
signs — the full Frontier Ashfall is seeded but not yet active.

---

## Release Gates / Success Criteria

| Gate | Requirement |
|---|---|
| Patrol Gate | player can complete repeatable patrol contracts |
| Tracking Gate | player can read and act on creature evidence |
| Escort Gate | caravan/refugee state changes based on player action |
| Camp State Gate | Cinderwatch condition visibly changes |
| Creature Gate | Glassfang Brood conflict is understandable as migration pressure |
| Boss Gate | Glassfang Matriarch supports pacify / drive off / kill outcomes |
| Choice Gate | frontier policy changes faction and future event state |
| Chronicle Gate | Ashline Frontier outcome is recorded |
| Expansion Gate | Cindervale remains visible but not fully opened |

**Success test** — the slice succeeds if the player can say: I held a frontier line · I tracked a
creature migration · I protected people and supplies · I saw that routes create consequences · I
made a meaningful survival policy choice · I understood the Ashfall is coming · the world recorded
the frontier decision. If the player only says *"I killed some frontier monsters,"* the slice failed.

The outcome is written to a Chronicle entry ("The Ashline Frontier") recording final frontier
policy, Glassfang outcome, contributor, and faction trust changes. Next lane:
`AKALYNTH_CAMPAIGN_ACT_I_V1`.

---

## Source & Provenance

Authoritative source drop: `AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1`. Content on this page is drawn
only from that drop's docs (no invented mechanics):

- `repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/docs/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1.md` (master)
- `.../docs/AKALYNTH_ASHWARDEN_FRONTIER_GAMEPLAY_V1.md`
- `.../docs/AKALYNTH_FRONTIER_PATROL_CONTRACTS_V1.md`
- `.../docs/AKALYNTH_CREATURE_TRACKING_SYSTEM_V1.md`
- `.../docs/AKALYNTH_CARAVAN_ESCORT_SYSTEM_V1.md`
- `.../docs/AKALYNTH_FRONTIER_FORTIFICATION_SYSTEM_V1.md`
- `.../docs/AKALYNTH_CINDERWATCH_CAMP_STATE_V1.md`
- `.../docs/AKALYNTH_GLASSFANG_BROOD_V1.md`
- `.../docs/AKALYNTH_GLASSFANG_MATRIARCH_BOSS_V1.md`
- `.../docs/AKALYNTH_NAVIGATOR_GUILDS_INTRODUCTION_V1.md`
- `.../docs/AKALYNTH_CINDERWATCH_FRONTIER_UI_AND_SYSTEMS_V1.md`
- `.../docs/AKALYNTH_CINDERWATCH_FRONTIER_RELEASE_GATES_V1.md`
- `.../docs/AKALYNTH_CINDERWATCH_FRONTIER_PRODUCTION_CHECKLIST_V1.md`
- `.../docs/AKALYNTH_CINDERWATCH_FRONTIER_IMPLEMENTATION_NOTES_V1.md`
- `.../docs/AKALYNTH_FRONTIER_ASHFALL_EVENT_SEED_V1.md`
- `.../docs/AKALYNTH_CINDERWATCH_FRONTIER_CHRONICLE_ENTRY_V1.md`

Codex object: `cindervale` (`codex/entries/cindervale.json`, type `place`, status `accepted`).
Section structure adapted from the now-obsolete website-update prompt
(`.../prompts/CLAUDE_CODE_AKALYNTH_CINDERWATCH_FRONTIER_SLICE_WEBSITE_UPDATE.prompt.md`), retargeted
from akalynth-site to the codex design surface.

---

**Surface**: Served on the codex builder/operator surface (codex.akalynth.com + gated beta /operator); supersedes the removed akalynth-site public Codex page.
