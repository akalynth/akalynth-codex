# Systems Bible — Design Page

Codex object: systems-bible · Source drop: AKALYNTH_SYSTEMS_BIBLE_V1

> *"A world becomes playable when its rules make its themes unavoidable."*
> — Akalynth Design Notes

---

## Purpose

The Game Loop Bible defined **what players do over time**. The Systems Bible
turns that loop into the **implementable mechanical layer** that makes those
actions work: progression, combat, professions, crafting, economy, reputation,
world state, death and failure, social organizations, and first-playable-slice
rules.

The goal is not to copy a generic MMO structure. It is to make Akalynth's core
themes mechanically unavoidable:

- memory matters
- truth can be recovered
- trust unlocks authority
- professions create identity
- history changes through player action
- cities, factions, and institutions remember what players do

Akalynth is built on six **System Pillars**: Mastery Progression,
Reputation & Authority, Professions & Economy, Dungeons & Encounters,
World State & Events, and Social Institutions.

---

## Key Systems

### Combat (Conflict With Purpose)
Combat exists to **protect recovery, exploration, archives, cities, and
historical continuity** — not to replace investigation, reputation, crafting, or
profession identity. V1 direction: flexible third-person or isometric action-RPG;
solo field play, 3–5 player dungeons; **soft roles, not a rigid trinity**;
moderate time-to-kill; healing supportive but not mandatory. Soft role families:
Warden, Striker, Scholar, Keeper, Scout, Forgebinder. Encounter types span
Creature Threat, Guardian Trial, Crisis Defense, Escort Defense, Boss Ritual, and
Environmental Fight. **Boss design rule:** every boss represents a historical
wound (e.g. The Unindexed Truth, The King Nobody Remembers) and answers "why is
this place still dangerous?"

### Progression (Mastery, Trust, and Legacy)
No single vertical level number. Players advance across **parallel tracks**:
Combat Discipline, Origin Memory, Profession Mastery, Faction Reputation, City
Standing, Dungeon Clearance, Artifact Thread, Chronicle Participation, and
Organization Role. V1 mastery ranks: **Initiate → Adept → Proven → Trusted →
Master → Legendary** (Legendary enters the Chronicle). Progression unlocks
locations, recipes, contacts, contracts, tools, story branches, and event roles —
not only numerical stat growth. **Combat alone should not unlock every door.**

### Economy & Crafting (Professions That Matter)
A **hybrid player economy**: NPCs provide baseline goods and sinks; players supply
specialized goods, upgrades, rare tools, and regional supply. Crafting is a
**major pillar producing access and utility**, not only gear numbers (Memory
Lanterns reveal records; Soulsteel tools survive Heartforge pressure; Route Charts
open travel; Archive Wards, Void Anchors, Dream Silk). Crafted items carry
lineage: material source, maker, region, optional faction mark, durability, and
upgrade path. Required sinks (repairs, travel, guild halls, permits, dungeon keys,
route licenses) and anti-inflation rules (bounded rare inputs, listing fees,
legendary crafting needs both materials and access authority) keep value stable.
No player should master every profession quickly.

### Reputation & Authority (Trust as Access)
Reputation is **trust, authority, and access**, not a generic bar. Five layers:
Faction, City, Profession, Organization, and Chronicle standing. Standing levels —
**Recognized → Trusted → Honored → Authorized → Revered** — gate vendors,
contracts, dungeon access, sealed archives, council hearings, and leadership/
Chronicle roles. Many unlocks are **access-based, via named authority gates**
(e.g. Lower Archive Door = Codexborn Trusted; Heartforge Trial = Flamebound
Honored). V1: **no passive decay**; situational trust loss only for betrayal,
falsified evidence, abandoned crisis duties, or smuggling.

### Social Organizations (Guilds as Institutions)
A guild is a **chartered body with purpose, standing, and history**, not a chat
channel. Types: Archive House, Expedition Company, Forge Order, Merchant League,
Dream Circle, Frontier Company, Accord Council. Org progression: **Registered →
Chartered → Trusted → Honored → Authorized → Legendary**, earning halls, archive
rooms, forge stations, trade/route rights, banners, and shared vaults. The
strongest long-term reward is **recognition** — Chronicle entries, city plaques,
named routes, defended-district memorials.

### Death & Failure (Consequences Without Hostility)
Failure matters without being hostile. V1 death model: return to nearest safe
anchor, equipment durability loss, some unstable materials drop to a **recoverable
field cache**, temporary **Memory Instability**, possible contract-bonus
reduction — **no permanent XP loss**. Memory Instability blurs maps, reduces
archive hints, and complicates Witness Moth replays; it clears via rest, Memory
Lantern, Codexborn station, stabilization ritual, or time. Forbidden in V1:
permanent character loss, XP debt, random gear destruction, untelegraphed faction
lockout, invisible reputation damage. **Failure should create new play, not only
punishment.**

### World State & Events (Making the Chronicle Playable)
Regions move through phases: **Stable → Anomaly Detected → Investigation →
Faction Response → Crisis Phase → Resolution → Chronicle Record.** Each phase
alters routes, prices, contracts, spawns, and dungeon/event access. Event types
include Witness Moth Bloom, Void Whale Sighting, Forgehold Crisis, Dream
Convergence, Archive Breach, Route Collapse, and Artifact Awakening. Players
contribute via combat, delivery, verification, crafting, scouting, boss defeat,
diplomacy, and memory stabilization. **Persistence rule:** even when an event
recurs, prior outcomes stay visible through Chronicle records, monuments, faction
dialogue, seasonal titles, and player/guild inscriptions.

---

## Systems Decision Matrix

Open decisions and recommended V1 defaults:

| Decision | Default | Why |
|---|---|---|
| Progression | Hybrid mastery + reputation | Supports identity beyond combat |
| Combat Perspective | Third-person or isometric action-RPG | Works for field, dungeon, and MMO play |
| Party Size | Solo field, 3–5 dungeon, larger events | Keeps V1 manageable |
| Economy | Hybrid player economy | Professions without total volatility |
| Crafting Depth | Major pillar | Professions need real value |
| Death Penalty | Durability + Memory Instability | Thematic but not punishing |
| World State | Regional seasonal phases | Makes the Chronicle playable |
| PvP | Not V1 core | Avoids derailing cooperative recovery |
| Guilds | Chartered organizations | Fits Akalynth institutions |
| Housing | Organization halls first | Social identity before cosmetics |
| Fast Travel | Route-based unlocks | Makes navigation meaningful |

**Hard questions still open before production** include camera/combat feel,
shared-vs-instanced ratio, players-per-region, crafting-simulation depth, global
vs regional markets, faction-conflict ceiling, permanence of player-driven
world change, Chronicle-record scope (global / server / character), how much is
soloable, and the exact first 30-minute demo.

---

## Integration

The Systems Bible is the **mechanical spine** the Codex objects share:

- **First Playable Slice** demonstrates the full chain end-to-end — Choose Origin
  → Origin Mission → Field Evidence → Archive Verification → Faction Reputation →
  Profession Output → Lower Vault → Witness Moth Bloom → Recorded Outcome — in the
  High City Outskirts (lower archive district + frontier pass).
- **Forgehold Route Slice** extends the same systems into regional travel,
  Flamebound progression, Soulsteel crafting, and the Forgehold Crisis event seed.
- **Non-negotiable design rules** bind every other surface: each reward must
  unlock action/access/identity/influence; each faction must have gameplay
  consequences; each profession must produce useful outputs; each dungeon must
  connect to history; each world event must leave a record; each long-term path
  must support identity beyond combat.

These rules are why the Codex itself exists: the world must remember, so design,
progression, reputation, and events all resolve into Chronicle records.

---

## Release Notes

- **V1 (drop AKALYNTH_SYSTEMS_BIBLE_V1):** initial Systems Bible — Volume I,
  "Mechanics That Make the World Playable." Establishes the six System Pillars,
  the recommended core decisions, the progression stack, trust-as-access, and the
  per-system specs for Combat, Progression, Economy & Crafting, Reputation &
  Authority, Social Organizations, Death & Failure, and World State & Events,
  plus the Decision Matrix and First Playable Slice scope.
- **Scope guard:** all values above are *recommended V1 directions*, not shipped
  mechanics. No mechanics are invented beyond the source drop.

---

## Source & Provenance

Drop: `AKALYNTH_SYSTEMS_BIBLE_V1`. Authoritative docs:

- `AKALYNTH_SYSTEMS_BIBLE_V1.md` — pillars, core decisions, progression stack,
  trust-as-access, non-negotiable rules
- `AKALYNTH_SYSTEMS_DECISION_MATRIX_V1.md` — defaults + hard questions
- `AKALYNTH_COMBAT_SYSTEM_V1.md`
- `AKALYNTH_PROGRESSION_SYSTEM_V1.md`
- `AKALYNTH_ECONOMY_AND_CRAFTING_SYSTEM_V1.md`
- `AKALYNTH_REPUTATION_AND_AUTHORITY_SYSTEM_V1.md`
- `AKALYNTH_SOCIAL_ORGANIZATIONS_SYSTEM_V1.md`
- `AKALYNTH_DEATH_AND_FAILURE_STATES_V1.md`
- `AKALYNTH_WORLD_STATE_AND_EVENTS_SYSTEM_V1.md`
- `AKALYNTH_FIRST_PLAYABLE_SLICE_SPEC_V1.md`

Source path: `repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/docs/`. Section
structure adapted from the obsolete website-update brief
(`prompts/CLAUDE_CODE_AKALYNTH_SYSTEMS_WEBSITE_UPDATE.prompt.md`) — repurposed for
the internal codex surface, not for akalynth-site.

---

**Surface:** Served on the codex builder/operator surface (codex.akalynth.com +
gated beta /operator); supersedes the removed akalynth-site public Codex page.
