# Gameplay Lane — Design Page

Codex object: gameplay-lane · Source drop: AKALYNTH_GAMEPLAY_LANE_V1

> A cross-cutting system that binds Origins, Professions, Equipment, the World Map, the Campaign Book, and Raid Bosses into a single progression chain. Internal design surface — not a player-facing release.

---

## Purpose

The Gameplay Lane is the player-facing system layer. It exists to answer the questions a new player actually asks:

- **Who am I when I arrive?** → Origins define where you start, who first trusts you, and what you already know — without locking class, equipment, or profession.
- **What do I do here?** → Professions are progression lanes layered on origins (Apprentice → Practitioner → Master → Legendary).
- **What does my gear say about me?** → Equipment expresses origin, profession, faction access, survival capability, and custody over dangerous knowledge — not just combat power.
- **Where do I go, and why?** → World Map V2 is a gameplay map: cities, factions, travel lanes, dungeons, and raid threats with reasons attached.
- **What is the story I'm in?** → The Campaign Book frames the First Extraction era and the recovery-vs-containment tension.
- **What is the world's worst day made flesh?** → Raid Bosses are historical consequences that learned to fight back.

Design rule it enforces: *an origin is the first story, and the first story remains even when the mechanic changes.*

---

## What It Defines

### Origins (6)
Entry by identity instead of mechanics. Each names a start city, faction affinity, themes, starting knowledge, a first hook, and natural profession paths.

- **Archivist** — Child of the Codex · High City · Codexborn · truth / memory / investigation
- **Flamekeeper** — Forged in the Emberwilds · Forgehold Citadel · Flamebound · purpose / endurance / transformation
- **Dreamwalker** — Touched by the Liminal Web · Moonspire · Dream Sanctums · dreams / possibility / intuition
- **Ashwarden** — Defender of the Frontier · Cindervale · Ashwardens · survival / duty / protection
- **Tide Navigator** — Child of Veridium · Veridium Port · Navigator Guilds · exploration / trade / diplomacy
- **Convergence Adept** — Student of Balance · High City · Trinity Convergence · balance / ritual law / mediation

### Professions
Answer "What do you do?" across four tiers — **Apprentice** (tools + basic services), **Practitioner** (field use + faction contracts), **Master** (rare commissions, expedition authority, advanced crafting), **Legendary** (mythic creatures, lost dungeons, world-scale institutions). Grouped by domain:

- **Archive** — Codex Scribe, Memory Curator, Historical Investigator
- **Forge** — Blacksmith, Soulsteel Smith, Forge Engineer
- **Dream** — Dream Scholar, Memory Weaver, Vision Keeper
- **Frontier** — Beast Tracker, Ash Scout, Expedition Leader
- **Maritime** — Navigator, Cartographer, Merchant Captain
- **Convergence** — Mediator, Ley Architect, Accord Judge
- **Legendary** — Witness Keeper (Witness Moths), Vault Diver (VaultCore Ruins), Chronographer (Time Anomalies), Void Cartographer (Oblivion Zones), Accord Master (Governance)

Profession design rule: a profession must create at least one of — a new route, crafting option, social permission, way to interpret evidence, dungeon shortcut, or faction responsibility. Otherwise it's flavor.

### Equipment
Six-slot model, one signature set per origin family. Slots: **Tool** (profession identity / problem-solving), **Armor** (protection + environmental survival), **Focus** (magical / ley / dream / forge / memory / legal), **Charm** (passive identity / faction resonance), **Pack** (fieldwork + expedition utility), **Charter** (legal/faction permission to enter places or work).

- **Codexborn Investigator** — Archivist → highlights mismatched testimony, false records, memory tampering
- **Flamekeeper Tempered** — Flamekeeper → heat survival, field repair, purpose-bound crafting
- **Dreamwalker Liminal** — Dreamwalker → dream traversal, emotional resonance, false-future detection
- **Ashwarden Frontier** — Ashwarden → survival, tracking, hazard resistance, group endurance
- **Tide Navigator Stormglass** — Tide Navigator → route discovery, storm prediction, hidden-port access
- **Convergence Accord** — Convergence Adept → diplomacy, ley stabilization, lawful entry, dispute resolution

Materials (custody-bearing): Soulsteel, Memory Glass, Moon Silver, Ashhide, Veridium Pearl, Leythread, Void-Iron. Equipment rule: good gear answers what place you can now enter, hazard you can survive, truth you can detect, faction that recognizes you, or what you can safely carry.

### World Map V2
A gameplay atlas, not a poster. Major locations: **High City** (law/archives), **Forgehold Citadel** (soulsteel), **Cindervale** (frontier defense), **Veridium Port** (trade/routes), **Moonspire** (dreams/sanctums), **The Emberwilds** (forge culture), **The Silent Expanse** (Void Whale zone), **The Shattered Observatory** (Memory Fracture site).

Travel lanes (connection · primary risk · useful professions):

| Lane | Connects | Primary Risk | Useful Professions |
|---|---|---|---|
| Accord Road | High City → Cindervale | raiders, oath disputes | Mediator, Ash Scout, Expedition Leader |
| Ember Route | Cindervale → Forgehold | ash storms, magma fields | Ash Scout, Forge Engineer, Beast Tracker |
| Veridium Sea Lane | Veridium Port → distant ruins | storms, sea creatures, missing ports | Navigator, Cartographer, Merchant Captain |
| Moon Path | High City → Moonspire | dream bleed, false visions | Dream Scholar, Vision Keeper, Mediator |
| Silent Route | High City → Silent Expanse | erasure, no-sound zones | Historical Investigator, Void Cartographer, Witness Keeper |
| Fracture Trail | Shattered Observatory → Forgotten Kingdom | time splits, broken maps | Chronographer, Cartographer, Vault Diver |

Required map layers: political city, faction influence, origin start markers, dungeon markers, raid threat markers, travel routes, danger bands, forgotten/unstable regions, sea lanes, ley convergence lines.

### Campaign Book
Premise: the First Extraction has begun a new era; player characters are the first generation legally allowed to participate in recovery under faction supervision. Three acts:

- **Act I — The First Contract** · Primary dungeon: The First Archive · *Should truth be recovered when it may destabilize public trust?*
- **Act II — The Broken Routes** · Primary dungeons: Heartforge Core, Shattered Observatory, Liminal Web · *Who should control dangerous history?*
- **Act III — The Name Beneath the World** · Primary dungeons: Silent Vault, Forgotten Kingdom · *Is every truth owed a return?*

Faction reputation ladder: Trusted → Watched → Disputed → Denied → Hostile. Every major artifact forces a custody decision (return / keep under charter / seal / destroy / reveal / conceal), which changes reputation, later routes, and raid conditions.

### Raid Bosses
Each boss connects one dungeon, one historical event, one faction conflict, one artifact/material reward, and one moral/custody decision.

- **The Unindexed Truth** — The First Archive · Great Accord / Memory Fracture
- **The Unfinished Colossus** — The Heartforge Core · The Flame Schism
- **The Broken Astronomer** — The Shattered Observatory · The Memory Fracture
- **The Keeper Without a Name** — The Silent Vault · The Silent Century
- **The Dream That Chose You** — The Liminal Web · Dream Sanctums / Moonspire
- **The King Nobody Remembers** — The Forgotten Kingdom · Void Whale / Memory Fracture aftermath

World-boss extensions: Grand Witness Swarm, Void Whale Herald, Chronoshell Anomaly. Raid rule: victory decides what history becomes safe to remember — not only loot.

---

## Player Progression Matrix

| Origin | Start | Faction | Recommended Professions | Early Hook |
|---|---|---|---|---|
| Archivist | High City | Codexborn | codex_scribe, memory_curator, historical_investigator, witness_keeper | A contradiction appears inside a protected treaty ledger beneath High City. |
| Flamekeeper | Forgehold Citadel | Flamebound | blacksmith, soulsteel_smith, forge_engineer, vault_diver | A soulsteel ingot refuses every hammer except yours. |
| Dreamwalker | Moonspire | Dream Sanctums | dream_scholar, memory_weaver, vision_keeper, chronographer | The Dreamweaver shows you a future that vanishes when you wake. |
| Ashwarden | Cindervale | Ashwardens | beast_tracker, ash_scout, expedition_leader, vault_diver | An old warning beacon ignites along a road that should no longer exist. |
| Tide Navigator | Veridium Port | Navigator Guilds | navigator, cartographer, merchant_captain, void_cartographer | A route appears on your chart leading to a port no record remembers. |
| Convergence Adept | High City | Trinity Convergence | mediator, ley_architect, accord_judge, accord_master | Three factions ask you to witness the same oath, each with a different version of the truth. |

Design constraint: no origin is mandatory for any dungeon. Every origin should create a *different* way to enter, understand, negotiate, survive, or profit from the same dungeon.

---

## Integration

The lane is a single chain, not six parallel systems. Primary flow (from the progression matrix and lane graph):

```text
ORIGIN → FACTION TRUST → PROFESSION ACCESS → EQUIPMENT SET
       → TRAVEL ROUTE → DUNGEON PERMISSION → ARTIFACT CUSTODY → RAID CONSEQUENCE
```

How it ties to the slices and loops:

- **Origin → Faction** seeds starting reputation, which gates charters, witnesses, and resources (the Campaign reputation ladder).
- **Faction → Profession → Equipment** turns trust into permissions: a profession unlock or a set's Charter slot is literally what lets a player onto a travel lane or into a dungeon.
- **Equipment → Route → Dungeon** is enforced by the travel-lane table — each lane lists the professions that make it survivable, so loadout choice is a routing decision.
- **Dungeon → Artifact Custody → Raid** closes the loop: a recovered artifact forces a custody decision that changes later reputation, routes, and raid conditions; raid victory in turn decides what history becomes safe to remember and feeds the Campaign's ending seeds.
- The lane graph (`AKALYNTH_GAMEPLAY_LANE_GRAPH.mmd`) is the canonical dependency edge set tying Origins → Factions → Professions → Equipment → Routes → Dungeons → Artifacts → Raids → Campaign.

---

## Release / Production Notes

- **Scope:** systems / content design layer (V1 codex). No invented mechanics beyond the source drop; numbers and balance are not specified here.
- **From data, not markup:** the obsolete website brief called for a typed registry (`data/akalynthGameplayLaneRegistry.ts`) with cards built from data and a responsive layout. Carry that posture forward on the codex surface — drive cards/tables from the structured entries, do not hand-duplicate markup.
- **Asset hooks pending:** World Map V2 specifies ten map layers and a defined palette (dark parchment, gold filigree, luminous blue memory lines, ember-red forge regions, moon-silver dream territories, void-black omission marks). Map art is a downstream production task, not part of this design page.
- **No deploy / no external calls:** additive internal design only. No analytics, paid services, or network calls. Do not claim deployment.
- **Open gaps:** profession tier numbers, equipment stat values, and raid encounter tuning are unspecified in the drop and remain to be designed.

---

## Source & Provenance

- **Source drop:** `AKALYNTH_GAMEPLAY_LANE_V1` (drop bundle landed as agent work-packet).
- **Authoritative docs** (`drop/AKALYNTH_GAMEPLAY_LANE_V1/docs/`):
  - `AKALYNTH_ORIGINS_CODEX_V1.md` — Origins
  - `AKALYNTH_PROFESSIONS_CODEX_V1.md` — Professions + tier model
  - `AKALYNTH_EQUIPMENT_CODEX_V1.md` — Slot model, sets, materials
  - `AKALYNTH_WORLD_MAP_V2.md` — Locations, travel lanes, map layers
  - `AKALYNTH_CAMPAIGN_BOOK_V1.md` — Acts, reputation, custody rule
  - `AKALYNTH_RAID_BOSSES_CODEX_V1.md` — Raid bosses + world bosses
  - `AKALYNTH_PLAYER_PROGRESSION_MATRIX_V1.md` — Progression matrix + primary flow
  - `AKALYNTH_GAMEPLAY_LANE_GRAPH.mmd` — Dependency graph
- **Structure reference (obsolete, structure only):** `prompts/CLAUDE_CODE_WEBSITE_GAMEPLAY_LANE_UPDATE_V1.md` — originally targeted an akalynth-site public route `/akalynth/gameplay`; that public-site target is superseded.

---

**Surface:** Served on the codex builder/operator surface (codex.akalynth.com + gated beta /operator); supersedes the removed akalynth-site public Codex page.
