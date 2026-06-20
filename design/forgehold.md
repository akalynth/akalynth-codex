# Forgehold Route Slice — Design Page

Codex object: forgehold · Source drop: AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1

> *The Road of Fire.* The second playable slice — a controlled expansion corridor
> connecting High City to Forgehold, proving that recovered truth can reopen the world.

---

## Purpose

Expand beyond High City and introduce the first major travel route:

**High City → Ember Road → Forgehold Outer Gate**

This slice proves: route unlocking, regional travel, Flamebound progression,
Soulsteel crafting, forge-based hazards, dungeon trial design, faction
disagreement over power, the first major crafting consequence, and the Forgehold
Crisis event seed.

It is **not** a full new region — it is a controlled expansion corridor between
High City and Forgehold.

## Player Starting State

Assumes the player completed **AKALYNTH_FIRST_PLAYABLE_SLICE_V1**. The player has
already:

- chosen an Origin (Archivist / Flamekeeper / Ashwarden)
- completed Witness Moth Bloom
- entered the First Archive Lower Vault
- encountered The Unindexed Truth
- made a Preserve / Suppress / Release decision
- received their first Chronicle record

The world now reacts to that outcome. **Core premise:** a recovered memory
references an old Flamebound shipment of Soulsteel Lantern Frames that never
arrived. Flamebound deny negligence; Codexborn believe the record was altered;
Oathbound want the dispute contained. The player is sent to reopen the route and
determine what happened.

## Route / State Flow

Ordered six-act slice structure:

1. **Act I — The Missing Shipment** — connect the previous slice to the new route; the player is summoned after their Chronicle entry; a recovered ledger references the missing Flamebound shipment; the route must be reopened.
2. **Act II — Ember Road Recovery** — introduce route travel; recover three route objects: Broken Route Seal (Milepost), Charred Shipment Plate (Burned Caravan Site), Ashglass Shard (Ashglass Ravine).
3. **Act III — Burned Caravan Investigation** — teach route-based evidence; compare Codexborn ledger, Flamebound seal, caravan remains, Ashwarden report, surviving forge mark. Core contradiction: the ledger says the shipment *departed* Forgehold, the seal says it *never left* — proving records were manipulated (first Black Archive Cells hint).
4. **Act IV — Soulsteel Stabilization** — make crafting matter; the recovered Soulsteel is unstable and must be stabilized before the dungeon, via Origin-specific tasks (see Systems & UI).
5. **Act V — Heartforge Trial Chamber** — the second dungeon (see Dungeon & Boss).
6. **Act VI — Forgehold Outer Gate Decision** — the Final Tempering choice (Lantern / Shield / Blade) sets the slice resolution; the Outer Gate is reached but not fully opened.

## Key Locations

Region: **The Ember Road** — a dangerous trade route between High City and Forgehold.

- High City South Gate
- Ember Road Mileposts
- Burned Caravan Site
- Ashglass Ravine
- Cinderwatch Camp
- Old Flame Shrine
- Forgehold Outer Gate
- Heartforge Trial Chamber entrance

**Factions present:** Flamebound (primary), Codexborn, Oathbound, Ashwardens, and
the first hinted antagonist — Black Archive Cells (suspected of tampering with the
shipment record).

## Systems & UI Added

**Origin continuations** (all three continue; slice favors Flamekeeper identity):

- **Archivist** — reconstruct missing shipment records; compare Codexborn/Flamebound ledgers; identify forged seals. *Stabilization task:* Reconstruct Oath Record.
- **Flamekeeper** — stabilize Soulsteel fragments; interpret forge marks; complete Flamebound rite tasks. *Stabilization task:* Stabilize Cracked Soulsteel (ashglass + forge heat).
- **Ashwarden** — scout road danger; track caravan attackers; protect travelers. *Stabilization task:* Secure The Route.

**Required UI additions:**

- **Route Panel** — discovered routes, route danger level, route status, faction influence, open contracts.
- **Crafting Panel V1** — material input, forge quality, stabilizer used, result type, item lineage.
- **Choice Consequence Panel** — Lantern / Shield / Blade, supporting factions, immediate reward, future event seed.

**Minimum systems added** (beyond Slice I): route unlock state, environmental
hazards, basic material quality, simple crafting result variation, dungeon support
based on the earlier profession task, route danger state, repeatable route
contracts.

**Still NOT required:** full player market, full Forgehold city, full crafting
economy, advanced gear itemization, raids, guild halls.

## Dungeon & Boss

**Heartforge Trial Chamber** — the second dungeon. It introduces Flamebound trial
logic; where the First Archive asked *"What is true?"*, the Heartforge asks
*"What is the purpose of power?"* Target 30–45 min; solo-capable with optional
3-player tuning. Theme: fire, purpose, sacrifice, unstable craftsmanship, strength
under pressure. **Access requires** proving the missing-shipment contradiction and
stabilizing Soulsteel first.

Rooms:

1. **Ember Threshold** — pass controlled heat waves; activate forge seals in order (teach hazard rhythm).
2. **Hall of Tempering** — stabilize unstable Soulsteel nodes; failure spawns enemies (connect crafting to progress).
3. **Trial of Purpose** — choose which forge flame to strengthen: weapon / shield / lantern (preview final choice).
4. **Ash Tyrant Echo** — fight an echo of conquest-driven flame; avoid feeding it with reckless attacks (Flamebound ideology conflict).
5. **The Half-Forged Gate** — use the stabilized Soulsteel component to open the final chamber; better component quality changes boss support options (reward earlier profession work).

**Boss — The Oathless Forge:** a forge-spirit born from abandoned promises, failed
deliveries, and broken craft-oaths — the manifestation of work left unfinished and
truth left unclaimed. It does not drop random fire loot; it forces the player to
decide what recovered power should become. Mechanics:

- **Broken Oath** — restore the correct oath seal (of three) using route evidence.
- **Overheat** — vent forge pressure as arena heat rises; Flamekeeper path eases venting.
- **False Temper** — fake Soulsteel nodes spawn; Archivist path identifies forged nodes.
- **Road Collapse** — battlefield fractures; Ashwarden path reveals safe route markers.
- **Final Tempering** — at low health, the player chooses what the Soulsteel becomes: **Lantern**, **Shield**, or **Blade** (sets slice resolution).

**Final choice consequences:** Lantern (Codexborn / Dream Sanctums — *power should
illuminate truth*; better archive recovery, lower combat reward); Shield (Oathbound
/ Ashwardens — *power should protect civilization*; safer road, slowed Black Archive
investigation); Blade (Flamebound hardliners — *power should be prepared*; stronger
combat reward, Codexborn concern, awakens the Ash Tyrant echo thread). Outcomes are
written to the Chronicle and partially reopen the Ember Road (High City ↔ Cinderwatch
travel, Cinderwatch contracts, Forgehold Outer Gate access, Heartforge repeat access,
first Soulsteel recipes). Not yet unlocked: full Forgehold interior, Heartforge Core,
Flamebound council, Forgehold Crisis world event.

## Release Gates / Success Criteria

| Gate | Requirement |
|---|---|
| Route Gate | player can unlock and revisit Ember Road |
| Evidence Gate | missing shipment contradiction is understandable |
| Crafting Gate | Soulsteel stabilization affects dungeon or reward |
| Dungeon Gate | Heartforge Trial teaches purpose-of-power theme |
| Boss Gate | Oathless Forge uses evidence and crafting mechanics |
| Choice Gate | Lantern / Shield / Blade changes faction outcomes |
| Chronicle Gate | route reopening is recorded |
| Expansion Gate | Forgehold Outer Gate is visible but not fully opened |

**Success test** — the slice succeeds if the player can say: *I reopened a route. I
found proof of a missing shipment. I used crafting for more than gear. I entered a
dungeon because of route evidence. My Origin changed how I solved problems. I made a
meaningful choice about power. The world recorded the route reopening.* If the player
only says *"I went to a new zone and killed fire monsters,"* the slice failed.

## Source & Provenance

- **Drop bundle:** `repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/`
- **Codex object:** `codex/entries/forgehold.json` (id `forgehold`, type `place`, status `accepted`, lineage origin `AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1`)
- **Primary docs:** `docs/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1.md`, `docs/AKALYNTH_HEARTFORGE_TRIAL_CHAMBER_DUNGEON_V1.md`, `docs/AKALYNTH_OATHLESS_FORGE_BOSS_V1.md`, `docs/AKALYNTH_SOULSTEEL_STABILIZATION_V1.md`, `docs/AKALYNTH_FORGEHOLD_ROUTE_UI_AND_SYSTEMS_V1.md`, `docs/AKALYNTH_FORGEHOLD_ROUTE_RELEASE_GATES_V1.md`
- **Evidence (receipts):**
  - `MANIFEST.md` — sha256 `4d9eed25b50dba215da5061a72ddd5aec778ae917d588202289adebe6fd3c823`
  - `MANIFEST.csv` — sha256 `760039525c074727c89532572ef7fe41c9478f9f4f3f9f87ec3578cddd28ab52`
  - `CHECKSUMS_SHA256.txt` — per-file SHA256 manifest for the whole drop (e.g. `AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1.md` = `1b43a3c75e5e44707af5d9ca62cb221a6bfbf84f1f81f81b239ccbf6e5214e41`)

This page restructures the obsolete `CLAUDE_CODE_AKALYNTH_FORGEHOLD_ROUTE_SLICE_WEBSITE_UPDATE` brief (section structure only — its akalynth-site/public-page targeting is dropped) into the current codex design surface.

---

**Surface:** Served on the codex builder/operator surface (codex.akalynth.com + gated beta /operator); supersedes the removed akalynth-site public Codex page.
