# Act I — The Four Proofs — Design Page

Codex object: campaign-act-i · Source drop: AKALYNTH_CAMPAIGN_ACT_I_V1

> "Akalynth becomes a game the moment four separate incidents turn out to be one question."
> — Akalynth Design Notes

---

## Purpose

Akalynth already has four strong, individually playable slices. What is missing is
the **campaign spine** — the connective arc that turns four isolated slices into one
coherent Act. This package is that spine. It does **not** add a fifth slice; it
connects the four that already exist.

The spine is the load-bearing idea of Act I: four proofs, four themes, one hidden
pattern. A single antagonist invites a single answer; four proofs force the player to
**triangulate** — no one slice reveals the truth, but the four together describe a
pressure that none of them could see alone.

The Act I mystery the four proofs reveal:

> Someone is not merely hiding history. They are changing the conditions under which
> history can be known.

Each proof closes one of the four ways a player could otherwise check the truth:
altered records corrupt what can be **remembered**, contradicted shipments corrupt
what can be **verified materially**, falsified dreams corrupt what can be **imagined
as possible**, and displaced frontier patterns corrupt what can be **observed in the
field**. The threat is dangerous because it does not lie about one fact — it attacks
the **method of knowing**.

---

## The Four Proofs

| Proof | Chapter | Slice | Codex object |
|---|---|---|---|
| Archive Proof — Truth | Chapter 1 — Witness Moth Bloom | High City / First Archive | `high-city` |
| Material Proof — Power | Chapter 2 — The Ember Road Reopened | Forgehold Route / Ember Road | `forgehold` |
| Dream Proof — Possibility | Chapter 3 — The First Dream Gate | Moonspire / Dream Gate | `moonspire` |
| Field Proof — Survival | Chapter 4 — The Ashline Frontier | Cinderwatch / Ashline Frontier | `cindervale` |

The question and boss for each proof:

| Proof | Question it answers | Boss |
|---|---|---|
| Archive | What really happened? | The Unindexed Truth |
| Material | What was made, moved, or broken? | The Oathless Forge |
| Dream | Which possibility is false? | The Unchosen Self |
| Field | What is happening in the world now? | The Glassfang Matriarch |

---

## Origin Paths

The Prologue lets the player choose an origin. Each origin opens on a different
**first trust path**, but all six converge on the same pressure:

> Something old has resurfaced, and the records cannot agree on what it is.

These six origins reuse the canonical origin vocabulary from the gameplay lane; this
spine states only how each origin **enters** Act I — it does not redefine origins,
affinities, or starting cities.

| Origin | Affinity | Starting city | First trust path | Enters as |
|---|---|---|---|---|
| Archivist | Codexborn | High City | A contradiction inside a protected treaty ledger beneath High City. | Archive Proof |
| Flamekeeper | Flamebound | Forgehold Citadel | A soulsteel ingot refuses every hammer except yours. | Material Proof |
| Ashwarden | Ashwardens | Cindervale | An old warning beacon ignites along a road that should no longer exist. | Field Proof |
| Dreamwalker | Dream Sanctums | Moonspire | The Dreamweaver shows you a future that vanishes when you wake. | Dream Proof |
| Tide Navigator | Navigator Guilds | Veridium Port | A route appears on your chart leading to a port no record remembers. | Displaced routes (Material ↔ Field bridge) |
| Convergence Adept | Trinity Convergence | High City | Three factions ask you to witness the same oath, each with a different version of the truth. | Method of knowing under attack |

No origin is locked out of any chapter. Origins shape the **first trust path**, not the
campaign route.

---

## Chapter Flow

```text
Prologue — Origin Arrival       (origin-specific starting city)
  v
Chapter 1 — Witness Moth Bloom  (High City / First Archive)      → Archive Proof
  v
Chapter 2 — The Ember Road      (High City → Ember Road →        → Material Proof
            Reopened             Forgehold Outer Gate)
  v
Chapter 3 — The First Dream     (Moonspire Outer Sanctum /       → Dream Proof
            Gate                 Liminal Web)
  v
Chapter 4 — The Ashline         (Cinderwatch Frontier)           → Field Proof
            Frontier
  v
Finale — The Convergence        (High City / Trinity Convergence)
         Warning
```

- **Prologue** — origin selection, first trust path, tutorial movement; no boss, no
  choice. Establishes identity and the shared campaign pressure.
- **Chapter 1** — evidence recovery, archive verification, first dungeon, first
  Chronicle record. Proves the archive record was altered: truth is unstable.
- **Chapter 2** — route unlock, missing-shipment investigation, Soulsteel
  stabilization, crafting consequence. Proves physical logistics were also
  manipulated.
- **Chapter 3** — Dreamwalker systems, symbolic puzzles, emotional evidence, dream-gate
  access, possibility verification. Proves the future may be contaminated by false
  possibility.
- **Chapter 4** — patrol contracts, creature tracking, caravan escort, camp state,
  frontier fortification. Proves the consequences are now physical and present-tense.
- **Finale** — proof comparison, convergence council, Act I final choice, Act I
  Chronicle entry. Reveals the *shape* of the threat, not the final villain.

Internal slice mechanics are owned by the prerequisite slices and are not restated
here.

---

## Major Choices

Act I has two layers of choice: one **per-chapter** choice (owned by each slice), and
one **final** choice at the finale (owned by the campaign).

**Per-chapter choices**

| Chapter (proof) | Options | Posture set |
|---|---|---|
| Ch.1 — Witness Moth Bloom (Archive) | Preserve / Suppress / Release | Toward **truth** — keep it, hide it, or share it |
| Ch.2 — The Ember Road Reopened (Material) | Lantern / Shield / Blade | Toward **power** — illuminate, protect, or strike |
| Ch.3 — The First Dream Gate (Dream) | Integrate / Banish / Bind | Toward **possibility** — accept, reject, or hold |
| Ch.4 — The Ashline Frontier (Field) | Fortify Camp / Keep Route Open / Track Storm Source | Toward **survival** — defend, connect, or investigate |

The four postures do not unlock or lock the finale options; they **color** the
finale — a player who Suppressed, built a Blade, Banished, and Fortified arrives at the
Convergence with a very different reputation than one who Released, built a Lantern,
Integrated, and tracked the storm. The authoritative consequences of each per-chapter
choice remain with the owning slice.

**Act I final choice** — see Finale below.

---

## Finale & Convergence Warning

After all four proofs are collected, the Trinity Convergence calls the player to High
City and lays the proofs side by side:

| Proof | What it showed |
|---|---|
| Archive | records had been altered |
| Material | shipments had been contradicted |
| Dream | possibility had been falsified |
| Field | the frontier was already reacting |

The shared conclusion:

> These are not separate incidents. They form a coordinated pressure pattern.

The finale does **not** reveal the final villain — it reveals the **shape of the
threat**. The player then recommends how the Convergence responds (the Act I final
choice):

| Option | Meaning | Theme | Seeds |
|---|---|---|---|
| Public Disclosure | Tell the cities a coordinated manipulation is occurring. | Truth must be shared. | Awareness ↑, panic risk ↑, hidden factions react faster, Chronicle transparency improves. |
| Quiet Investigation | Keep the discovery restricted while gathering more proof. | Proof before proclamation. | Stability preserved, investigation deepens, later public-trust risk ↑, Black Archive trail stays active. |
| Emergency Mobilization | Prepare defenses before the full truth is known. | Survival cannot wait. | Cities prepare faster, military authority ↑, Sanctums/Codexborn fear overreaction, future-conflict risk ↑. |

None is "correct"; each seeds a different Act II. Whichever response is recommended, Act
I ends with the pattern confirmed and the source still hidden — the villain has a shape
but not yet a face.

**Act I Final Chronicle Entry** (capstone, narrative template text only — **not** a live
runtime Chronicle record; the live hash-chained signed log is owned by
`packages/shared/chronicleChain.ts`):

```text
CHRONICLE ENTRY:
The Four Proofs

Across High City, the Ember Road, Moonspire, and Cinderwatch,
four forms of evidence were recovered.

Archive proof showed that records had been altered.
Material proof showed that shipments had been contradicted.
Dream proof showed that possibility had been falsified.
Field proof showed that the frontier was already reacting.

Final Convergence Response:
[Public Disclosure / Quiet Investigation / Emergency Mobilization]

Recorded Contributor:
[Player Name]

Act I Status:
The hidden pattern has been confirmed.
```

---

## Release Gates

Do not call Act I a real playable campaign until the connected arc proves the
following. These are **campaign-level** gates; each slice keeps its own internal
release gates separately.

| Gate | Requirement |
|---|---|
| Spine Gate | The four slices connect into one arc with a shared mystery, not four isolated quests. |
| Proof Gate | Each chapter produces a distinct proof type (archive, material, dream, field). |
| Convergence Gate | The finale compares all four proofs and reveals one coordinated pattern. |
| Choice Gate | The Act I final choice changes faction posture and seeds Act II. |
| Chronicle Gate | The Four Proofs outcome is recorded in readable form. |
| Continuity Gate | Per-chapter choices carry forward from the owning slices without contradiction. |

These gates measure the **campaign design**, not runtime implementation. They assert no
campaign engine, quest state, save format, chapter gating, or Chronicle schema.

---

## Source & Provenance

- **Source drop:** `AKALYNTH_CAMPAIGN_ACT_I_V1` (source material, not runtime authority).
- **Authoritative docs** (`repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/docs/`):
  - `AKALYNTH_CAMPAIGN_ACT_I_V1.md` — overview, spine, structure, core mystery
  - `AKALYNTH_THE_FOUR_PROOFS_CAMPAIGN_SPINE_V1.md` — the four proofs, hidden pattern, spine→chapter mapping
  - `AKALYNTH_ACT_I_CHAPTER_FLOW_V1.md` — prologue, chapters 1–4, finale
  - `AKALYNTH_ACT_I_ORIGIN_PATHS_V1.md` — six origins, convergence design
  - `AKALYNTH_ACT_I_MAJOR_CHOICES_V1.md` — per-chapter choices
  - `AKALYNTH_ACT_I_FINAL_CONVERGENCE_WARNING_V1.md` — finale comparison and final choice
  - `AKALYNTH_ACT_I_CHRONICLE_RECORDS_V1.md` — Act I capstone Chronicle template (flavor only)
  - `AKALYNTH_ACT_I_RELEASE_GATES_V1.md` — campaign-level release gates
- **Authority boundary:** This spine is connective design. It reuses existing slice and
  origin vocabulary; it does not fork or restate slice internals, and adds no runtime
  campaign engine, quest state, chapter gating, Chronicle schema, protocol, economy, or
  anti-cheat rule. The four prerequisite slices remain the owners of their own bosses,
  dungeons, choices, and consequences.
- **Related codex objects:** `high-city`, `forgehold`, `moonspire`, `cindervale`.
- Player-facing first city is **High City** (legacy runtime id `Azura` remains the
  current runtime id).

---

**Surface:** Served on the codex builder/operator surface (codex.akalynth.com + gated beta /operator); supersedes the removed akalynth-site public Codex page.
