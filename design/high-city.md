# First Playable Slice (High City) — Design Page

Codex object: high-city · Source drop: AKALYNTH_FIRST_PLAYABLE_SLICE_V1

> "A world becomes real when the player can enter it, make a choice, and leave evidence behind." — Akalynth Design Notes

The foundational place/route vertical slice for Akalynth: the first 1–3 hours, set in and beneath High City. It is the smallest *complete* version of the game loop, not the full game.

---

## Purpose

Prove the core Akalynth experience in the smallest complete form. The slice must demonstrate, in one continuous play session:

- Origin selection
- first faction trust
- field recovery
- archive verification
- profession utility
- dungeon access
- world event participation
- a meaningful player choice
- Chronicle record outcome

Target experience: by the end the player should know who they are, who trusted them first, what kind of world they entered, why memory and truth matter, how factions disagree, how professions affect gameplay, why dungeons exist, and how world events become history. They should feel they participated in *the first recorded incident of a larger world* — not that they completed random quests.

---

## Player Starting State / Origins

The slice ships **three Origins** — enough to demonstrate identity, replayability, and faction trust without overloading scope. Each origin teaches movement, interaction, a first objective, faction identity, and basic world tone, then converges on the shared hub (Codexborn Field Station).

| Origin | Starting Contact | Starting Location | Theme | First Skill Flavor | Initial Faction Trust |
|---|---|---|---|---|---|
| **Archivist** | Codexborn Record Keeper | Lower Archive District | truth, records, memory, investigation | identify corrupted testimony | Codexborn |
| **Flamekeeper** | Forgehold Envoy | Forgehold Supply Yard | purpose, crafting, endurance, transformation | stabilize damaged forge material | Flamebound |
| **Ashwarden** | Frontier Captain | Ashwarden Watch Post | survival, protection, tracking, duty | track disturbed creature movement | Ashwardens |

First problems by origin:
- **Archivist** — a public record changed overnight; determine whether it is clerical error, forgery, or memory corruption. Reward: Codexborn reputation, partial record fragment, access to Codexborn Field Station.
- **Flamekeeper** — a shipment of Soulsteel lantern frames arrived cracked and unstable; recover usable material and stabilize one frame. Reward: Flamebound reputation, stabilized lantern frame, access to Codexborn Field Station.
- **Ashwarden** — creatures are fleeing the old road toward High City; track the source of the disturbance and mark the unsafe route. Reward: Ashwarden reputation, frontier route marker, access to Codexborn Field Station.

**First factions present:** Codexborn (investigate corrupted records, preserve memory fragments, verify testimony), Oathbound (protect civilians, control panic, enforce emergency restrictions), Flamebound (repair lantern frames, stabilize Soulsteel, forge support), Ashwardens (scout, track displaced creatures, escort witnesses), and Trinity Convergence (appears later as mediator; frames the major choice — truth vs. order vs. stability).

---

## Slice Flow

Six-act ordered state flow. All three origins converge into the same central event at the Codexborn Field Station after Act I.

```text
Act I:  Origin Arrival          → establish identity, trust, first problem; reach Codexborn Field Station (convergence)
  ↓
Act II: First Field Recovery    → recover 3 event fragments (Testimony Shard, Lantern Frame, Disturbed Track)
  ↓
Act III: Archive Verification   → compare projection / record / testimony / physical evidence; prove record was altered
  ↓
Act IV: Profession Utility      → one Origin-specific profession task (restore / repair / track)
  ↓
Act V:  First Archive Lower Vault → 5-room dungeon, unlocked because the record was proven altered
  ↓
Act VI: Witness Moth Bloom Resolution → defeat/stabilize Unindexed Truth; recommend city handling; first Chronicle entry
```

**Act II fragments:**
- *Testimony Shard* — Old Testimony Plaza; inspect projection sites; threat: unstable memory echoes; used for archive verification.
- *Lantern Frame* — Forgehold Supply Yard; gather damaged Soulsteel components; threat: unstable heat vents + minor forge creatures; used for the profession/crafting task.
- *Disturbed Track* — Broken Road; follow creature movement signs; threat: frightened ash-beasts; used to prove the Bloom is affecting the frontier.

**Act III puzzle:** the archive record says the trial ended peacefully; the Witness Moth projection shows violence; a living witness descendent claims the trial never happened. The player identifies the contradiction. They do not yet know the full truth, but they prove the archive record was altered — which unlocks the First Archive Lower Vault.

**Act IV profession tasks (one per Origin):** Archivist → *Restore Partial Record* (reconstruct missing testimony lines; reward Codexborn rep + archive key phrase + improved verification hint). Flamekeeper → *Repair Memory Lantern Frame* (stabilize a cracked frame with recovered Soulsteel; reward Flamebound rep + usable Memory Lantern + heat-resistant tool part). Ashwarden → *Track Bloom Disturbance* (identify creatures fleeing a soundless memory pulse; reward Ashwarden rep + safe route marker + creature-warning signal).

**Core slice event — Witness Moth Bloom (phases):** Phase 1 Signal (moths appear above High City; blue-violet lights, plaza memory projections, glowing books, citizens repeating phrases from an unknown trial) → Phase 2 Investigation (recover the three fragments) → Phase 3 Faction Response (Codexborn: preserve full record; Oathbound: suppress dangerous fragments; Trinity Convergence: judge whether the city can carry the truth; Dream Sanctums: interpret emotional truth in the replay) → Phase 4 Crisis (a false memory spreads; NPCs remember an event that never happened) → Phase 5 Resolution (Preserve / Suppress / Release) → Phase 6 Chronicle Record.

---

## Key Locations

Region: **High City Outskirts** — a controlled zone outside and beneath High City.

- **Lower Archive District** — Archivist start.
- **Frontier Gate** — region boundary.
- **Broken Road** — Disturbed Track recovery (Ashwarden field).
- **Old Testimony Plaza** — Testimony Shard recovery; projection sites.
- **Codexborn Field Station** — shared investigation hub; all Origins converge here.
- **Forgehold Supply Yard** — Flamekeeper start; Lantern Frame recovery.
- **Ashwarden Watch Post** — Ashwarden start.
- **First Archive Lower Vault entrance** — sealed dungeon, opened only by proof that the record was altered.

### First Archive — Lower Vault

A sealed archive *wing*, not a random cave — a historical space opened because the player proved the public record was altered. Target duration **25–40 minutes**; solo-capable with optional **3-player** scaling. Theme: testimony, memory, restricted truth, archive mechanisms, living records.

| Room | Mechanic | Purpose |
|---|---|---|
| **1 — Sealed Index Hall** | use verified archive key phrase; avoid unstable memory projections | proof unlocks access |
| **2 — Witness Gallery** | replay three witness memories; identify which contradicts physical evidence | memory is evidence, not always truth |
| **3 — Living Shelves** | shifting shelves protect restricted records; retrieve the correct testimony scroll | light combat + investigation |
| **4 — Lantern Chamber** | use repaired Memory Lantern to reveal hidden text; Origin path modifies support | Origin/profession utility inside the dungeon |
| **5 — The Unindexed Door** | door asks which record should be trusted; player chooses based on gathered evidence | prepares final encounter |

Room 4 Origin paths: Archivist → clearer text interpretation; Flamekeeper → stronger lantern stability; Ashwarden → safer movement route.

---

## Systems & UI Surfaces

**Minimum systems required:** movement, interaction, dialogue, inventory, evidence collection, simple combat, basic crafting/profession task, reputation gain, dungeon entry, boss encounter, event phase tracking, final choice, Chronicle record.

**Not required yet:** full open world, full economy, all Origins, all factions, guilds, PvP, housing, raids, world-map completion, advanced crafting, player markets. (Build as a contained vertical slice — proof of loop, not content volume.)

**Required UI surfaces:**

- **Origin Panel** — Origin, first faction trust, first contact, starting theme, origin-specific task.
- **Evidence Panel** — recovered fragments, contradictions, verified items, unresolved gaps. Min fields: `evidence id`, `title`, `source`, `reliability state`, `connected contradiction`.
- **Reputation Panel** — Codexborn, Oathbound, Flamebound, Ashwardens. Min fields: `faction id`, `reputation value`, `trust label`, `recent change`, `next unlock`.
- **Event Panel** — Witness Moth Bloom phase, player contribution, faction response options, crisis status, active objective.
- **Chronicle Panel** — event name, final outcome, player contribution, faction trust changes, unlocked content, permanent record text.

Minimal runtime state (implementation notes): Player (selected Origin, inventory, evidence list, reputation values, profession task state, dungeon access state, event contribution state, final choice); World Event (current phase, recovered fragments, faction response availability, crisis state, final outcome, Chronicle entry); Dungeon (entry unlocked, rooms completed, evidence recovered, boss state, final classification). Core data models: Evidence, Reputation, Event, Chronicle Entry.

---

## Dungeon & Boss (Unindexed Truth)

**The Unindexed Truth** — a sentient record rejected by the archive because it contains a truth too dangerous to classify. It manifests as a shifting figure made of parchment, moth-light, broken seals, and spoken testimony. It does not attack because it is evil; it attacks because classification would destroy it.

Mechanics:

- **Contradictory Testimony** — the boss summons three versions of the same event; only one aligns with recovered evidence. The player stands near the true version to weaken the boss.
- **Record Burn** — the boss tries to destroy parts of the room; players interrupt by activating archive seals.
- **False Memory Pulse** — the boss projects a false memory that temporarily changes the arena; players use the Memory Lantern to reveal safe ground.
- **Final Classification** — at low health the player chooses how to classify the record: **Preserve / Suppress / Release**. This determines the event resolution.

The boss drops no random loot — it returns the recovered historical truth that determines the final city choice (Act VI).

**Preserve / Suppress / Release — the major choice:**

| Choice | Meaning | Supported by | Consequence | Choice reward |
|---|---|---|---|---|
| **Preserve** | full record kept inside the First Archive | Codexborn, some Dream Sanctum scholars | Codexborn trust rises; new archive wing opens; public does not immediately learn the truth; future investigation path opens | Codexborn archive permit |
| **Suppress** | dangerous memory sealed to prevent panic | Oathbound, some civic leaders | Oathbound trust rises; public stability improves; Codexborn trust suffers; Black Archive interest increases | Oathbound emergency seal |
| **Release** | memory publicly revealed | reformers, some Dream Sanctum voices, radical Codexborn | public unrest begins; hidden faction threads unlock; citizen dialogue changes; future political event seed activates | public testimony token |

The slice ends with the player's first **Chronicle entry** ("Witness Moth Bloom — High City Lower Archives"), recording the altered record, the recovery of the Unindexed Truth, the final handling (Preserved / Suppressed / Released), the recorded contributor, and faction trust changes. This is the first moment the player feels remembered by the world.

---

## Release Gates / Success Criteria

Do not expand the playable world until the slice proves all eight gates:

| Gate | Requirement |
|---|---|
| **Origin Gate** | each Origin creates a different first trust path |
| **Evidence Gate** | player can recover and compare evidence |
| **Verification Gate** | player can prove a contradiction |
| **Profession Gate** | profession task affects gameplay |
| **Dungeon Gate** | dungeon opens because of proof, not arbitrary level |
| **Boss Gate** | boss mechanics reinforce memory/truth theme |
| **Choice Gate** | final decision changes faction trust |
| **Chronicle Gate** | outcome is recorded in readable form |

**Success test** — the slice succeeds if a player can say: *I know who I am · I know who trusted me first · I recovered evidence · I proved a record was wrong · I used my Origin or profession meaningfully · I entered a dungeon for a reason · I made a choice with faction consequences · The world recorded what I did.* If the player only says "I killed enemies and got loot," the slice failed.

**Production checklist (target counts):** 3 Origin introductions · 4 faction representatives · 3 field recovery locations · 1 investigation hub · 1 profession task per Origin · 1 dungeon · 1 boss · 1 world event · 3 final outcomes.

---

## Source & Provenance

- **Codex object:** `high-city` (type: place) — see `codex/entries/high-city.json`.
- **Source drop:** `AKALYNTH_FIRST_PLAYABLE_SLICE_V1` (stage: spec).
- **Authoritative docs** (`repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/docs/`):
  - `AKALYNTH_FIRST_PLAYABLE_SLICE_V1.md` — full slice spec.
  - `AKALYNTH_ORIGIN_OPENINGS_V1.md` — origin first-trust paths.
  - `AKALYNTH_WITNESS_MOTH_BLOOM_SLICE_EVENT_V1.md` — world event phases.
  - `AKALYNTH_FIRST_ARCHIVE_LOWER_VAULT_DUNGEON_V1.md` — dungeon spec.
  - `AKALYNTH_UNINDEXED_TRUTH_BOSS_V1.md` — boss spec.
  - `AKALYNTH_FIRST_PLAYABLE_SLICE_UI_SURFACES_V1.md` — UI surfaces.
  - `AKALYNTH_FIRST_PLAYABLE_SLICE_RELEASE_GATES_V1.md` — release gates + success test.
  - `AKALYNTH_FIRST_PLAYABLE_SLICE_PRODUCTION_CHECKLIST_V1.md` — production checklist.
  - `AKALYNTH_FIRST_PLAYABLE_SLICE_IMPLEMENTATION_NOTES_V1.md` — minimal runtime state + data models.
- **Evidence (from codex object):** slice `MANIFEST.md` / `MANIFEST.csv` (sha256-anchored) and `CHECKSUMS_SHA256.txt`.
- **Registry:** `repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/registry/akalynthFirstPlayableSliceRegistry.ts`.
- **Section structure** adapted from the (obsolete) website-update brief `CLAUDE_CODE_AKALYNTH_FIRST_PLAYABLE_SLICE_WEBSITE_UPDATE.prompt.md`.

---

**Surface:** Served on the codex builder/operator surface (codex.akalynth.com + gated beta /operator); supersedes the removed akalynth-site public Codex page.
