# Play, Build, Govern Surface - Design Page

Codex object: play-build-govern-surface · Evidence: `codex/evidence/play-build-govern-surface/goal-objective.md`

> Akalynth should copy the shape of approachable creator tooling, not the product. The product is a persistent MMO world with creator tools and proof-backed operations.

## Purpose

This surface defines the product spine that connects player activity, builder creation, local testing, review, and live-world promotion.

The short positioning is:

```text
Akalynth
Play, build, and govern a living world.

Play the world.
Shape the world.
Prove what changed.
```

Gameeky is useful as a shape reference because its public story moves from playing to creating to learning and extending. Akalynth should translate that motion into MMO-native surfaces:

```text
Play -> Modify -> Build -> Script -> Operate -> Govern
```

Akalynth is not a no-code education tool. It is a top-down persistent MMO with world-building tools, server-authoritative play, receipt-backed changes, and operator review before live promotion.

## Surface Ladder

| Stage | User | What They Do | Akalynth Surface | Proof Boundary |
|---|---|---|---|---|
| Play | Player | Explore Rookguard and High City, move, chat, train, choose vocation, follow a first quest. | Live world / play client | Server owns state; action receipts for meaningful steps. |
| Modify | Builder | Adjust an existing room, sign, NPC line, object placement, or local encounter variant. | Builder Codex draft | No live mutation; draft stays private. |
| Build | Builder | Create maps, interiors, NPCs, quests, housing spaces, market stalls, and social rooms. | Builder tools plus codex entries | Work packet links to source object, assets, and review notes. |
| Script | Advanced builder | Add NPC behavior, quest steps, encounters, local triggers, or world-event phases. | Local/offline world tools | Script can be replayed locally before proposal. |
| Operate | Trusted operator | Review diffs, run validation, inspect receipts, approve or reject promotion. | Operator Codex | Human approval and promotion receipt required. |
| Govern | Council/operator layer | Decide what enters the living world, who may change it, and what evidence is permanent. | Council and receipt-chain surfaces | Execution permit, audit trail, and replayable evidence. |

## Player Action Loop

The player-facing loop stays small and live:

```text
Enter Rookguard
  -> complete a bounded proof task
  -> receive an identity or access change
  -> see a locked future path
  -> travel toward High City
  -> join a social or world-state objective
```

This reinforces the existing Game Loop Bible without adding economy values, mob tuning, or new protocol messages.

## Builder Action Loop

The builder loop makes creation approachable without weakening server authority:

```text
Select an accepted codex object
  -> fork a private draft
  -> place or edit maps, interiors, NPC lines, objects, and quest beats
  -> run an offline/local preview
  -> generate a manifest of changed objects
  -> submit a review packet
```

The key rule: builder tools create proposals, not live truth.

## Operator Action Loop

The operator loop is the Akalynth difference:

```text
Review packet
  -> inspect source object, changed files, screenshots, local replay, and receipts
  -> accept, reject, or request revision
  -> issue promotion permit
  -> publish into the target lane
  -> preserve promotion receipt and replay evidence
```

This is where Akalynth becomes more than a game engine. The live world changes because a trusted workflow proved what changed.

## Concrete First Work Packets

These are codex-side packets, not runtime claims. Each section below is the packet anchor referenced by `play-build-govern-surface.json`.

| Packet | Anchor | Assignee |
|---|---|---|
| Rookguard builder kit | `#rookguard-builder-kit` | codex-build-delegation |
| High City first-quest kit | `#high-city-first-quest-kit` | codex-build-delegation |
| Local preview contract | `#local-preview-contract` | codex-build-delegation |
| Promotion review contract | `#promotion-review-contract` | operator-review |
| Asset production backlog | `#asset-production-backlog` | asset-pipeline |

---

## Rookguard Builder Kit

Codex packet: map · Status: **open** · Target object: `rookguard`

### Scope

Define the smallest builder-facing Rookguard creation kit that extends the live Codex Path without mutating beta/staging runtime. The kit covers:

- two interior rooms (guild hall annex, gate overlook)
- three world signs (movement hint, Tem reminder, gate condition)
- training-yard object placements (runestone, training slime anchor, vocation lectern)
- NPC dialogue lines for the gate keeper and guild registrar
- one gated path transition into High City (locked until gate receipts are satisfied in live play)

Source inputs:

- `repos/akalynth/docs/ROOKGUARD_FIRST_30_MINUTES_V1.md`
- `codex/design/rookguard-first30-presentation-v1.md`
- `repos/akalynth/packages/shared/maps/rookguard.json`
- `codex/entries/rookguard.json`

Deliverable: a builder draft manifest listing map cells, object ids, sign text, and NPC line ids — all private until operator review.

### Server State

**Codex only.** No live map/object registry mutation.

Future runtime (after promotion) would touch:

- `rookguard` map tile/object registry
- NPC dialogue registry for gate keeper and guild registrar
- tutorial/gate state machine (read-only in builder draft; promotion must not bypass live gate receipts)

### Receipts

No live receipts from this packet. Expected future receipt types after promotion:

- `builder_draft_manifest` (private draft checksum)
- `promotion_permit` (operator approval)
- `lane_publish_receipt` (beta/staging publish)
- existing live player receipts unchanged: `presence_entered`, `tutorial_step_complete`, `gate_unlock`, `tutorial_completed`

### Verification

1. Draft manifest references only `rookguard` object ids and accepted design refs.
2. Sign and dialogue text match Rookguard tone; no economy values or new protocol fields.
3. Gate path remains locked in draft preview until operator promotion.
4. Rebuild codex projections; confirm packet ref resolves to this anchor.

---

## High City First-Quest Kit

Codex packet: quest · Status: **open** · Target objects: `high-city`, `game-loop-bible`

### Scope

Define the first builder-authored quest beat for High City that reinforces the Game Loop Bible without shipping runtime quest state. The kit covers:

- one archive clue object (altered testimony shard placement)
- one witness NPC (descendant of a trial participant)
- one bounded proof task (compare projection vs. record vs. witness claim)
- one locked future path (First Archive Lower Vault entry — visible but gated)
- quest step outline aligned with Act III of the First Playable Slice

Source inputs:

- `codex/design/high-city.md`
- `codex/design/game-loop-bible.md`
- `repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/docs/AKALYNTH_FIRST_PLAYABLE_SLICE_V1.md`
- `codex/entries/high-city.json`

Deliverable: quest step table, NPC behavior notes, clue object spec, and proof-task acceptance criteria — codex-side only.

### Server State

**Codex only.** No live quest registry mutation.

Future runtime (after promotion) would touch:

- quest state for `high_city_first_archive_clue_v1` (proposed id)
- NPC behavior registry for witness NPC
- archive verification puzzle state (server-authoritative comparison)
- dungeon access gate (locked until proof task completes in live play)

### Receipts

No live receipts from this packet. Expected future receipt types:

- `quest_step_complete` (proof task accepted by server)
- `archive_verification_record` (contradiction identified)
- `dungeon_access_unlock` (First Archive Lower Vault)
- `builder_draft_manifest`, `review_decision`, `promotion_permit` (builder/operator workflow)

### Verification

1. Quest steps map to Game Loop Bible verbs: Recover, Prove, Build, Defend.
2. Proof task does not grant currency, XP, or reputation in draft preview.
3. Locked path remains visible in builder preview but cannot be entered without server gate.
4. Rebuild codex projections; confirm packet ref resolves to this anchor.

---

## Local Preview Contract

Codex packet: mechanic · Status: **open** · Applies to all builder drafts

### Scope

Define what a local/offline builder preview must prove before an operator review packet is valid. The contract is a checklist, not a runtime implementation claim.

Required preview artifacts:

| Artifact | Contents | Required |
|---|---|---|
| Draft manifest | Object ids, map deltas, dialogue ids, asset refs, parent codex object | yes |
| Local replay log | Deterministic replay of preview session (no live lane writes) | yes |
| Screenshot set | Before/after for each changed room, sign, or NPC line | yes |
| Receipt expectation table | Which receipts would fire in live play vs. preview-only stubs | yes |
| Abuse review note | Confirms draft grants no live inventory, currency, XP, or access | yes |

Preview rules:

- Preview runs against a forked draft namespace; live beta/staging state is read-only.
- Client-provided truth is rejected; preview server mirrors production authority rules.
- Simulated receipts are labeled `preview_only` and never enter the chronicle chain.

### Server State

**Codex only.** Defines the contract for future `apps/server` preview tooling.

Future runtime would add:

- draft namespace isolation in map/object/NPC registries
- preview receipt emitter (non-chronicle)
- manifest checksum generator

### Receipts

Preview session emits (future):

- `preview_session_start`
- `preview_manifest_checksum`
- `preview_session_end`

These receipts are explicitly non-authoritative and excluded from lane promotion evidence unless referenced in the operator review packet.

### Verification

1. Checklist is complete for every open packet on `play-build-govern-surface`.
2. No preview artifact path points at live `/var/lib/akalynth-*` state.
3. Manifest checksum is reproducible from draft files alone.
4. Operator review packet template references this contract by anchor.

---

## Promotion Review Contract

Codex packet: review · Status: **open** · Assignee: operator-review

### Scope

Define the operator review fields required before a builder draft may be promoted to beta or staging. This is a schema proposal for the operator Codex surface.

Review packet fields:

| Field | Type | Description |
|---|---|---|
| `packet_id` | string | Unique review packet id |
| `source_object` | codex id | Parent object (e.g. `rookguard`, `high-city`) |
| `draft_manifest_ref` | path | Checksum-addressed draft manifest |
| `changed_files` | list | Paths and sha256 for each changed spec/asset |
| `preview_evidence` | list | Replay log, screenshots, preview receipt ids |
| `receipt_expectations` | table | Live receipts expected after promotion |
| `abuse_review` | enum | `pass` / `fail` — draft must not grant live rewards |
| `lane_target` | enum | `beta` / `staging` (never production without separate permit) |
| `reviewer` | identity | Operator identity |
| `decision` | enum | `accept` / `reject` / `revise` |
| `decision_note` | text | Human rationale |
| `promotion_permit_ref` | path | Issued only on `accept` |

Example review flow:

```text
Builder submits packet
  → operator validates manifest + preview evidence
  → operator checks abuse_review = pass
  → operator issues promotion_permit
  → lane publish runs with permit attached
  → promotion receipt preserved in evidence/
```

### Server State

**Codex only.** Defines operator workflow fields.

Future runtime would add:

- review packet storage under operator evidence paths
- promotion permit signing (coordination-kernel)
- lane publish gate that requires valid permit

### Receipts

Operator workflow receipts (future):

- `review_submitted`
- `review_decision` (`accept` | `reject` | `revise`)
- `promotion_permit` (signed, lane-scoped)
- `lane_publish_receipt`

### Verification

1. Review packet schema validates against proposed JSON shape.
2. `lane_target` never defaults to production.
3. Rejected packets do not emit `promotion_permit`.
4. Public projection never exposes review packet contents or operator evidence paths.

---

## Asset Production Backlog

Codex packet: asset · Status: **open** · Assignee: asset-pipeline

### Scope

Identify visual assets needed for the creator surface UI and builder preview, without claiming generation is complete. Actual image generation remains credential-gated (`OPENAI_API_KEY`).

Backlog items:

| Asset | Kind | Use | Status |
|---|---|---|---|
| Builder surface hero plate | poster | Operator/builder Codex landing | open |
| Rookguard room tile set (32×32) | tile | Builder map editor preview | open |
| High City archive interior tiles | tile | First-quest kit preview | open |
| NPC portrait frames (gate keeper, witness) | sprite | Dialogue preview | open |
| Object icons (sign, runestone, clue shard) | icon | Builder object palette | open |
| Local preview workflow diagram | plate | Operator review onboarding | open |
| Promotion review packet thumbnail | thumb | Operator queue UI | open |

Existing assets to reuse:

- `repos/akalynth-site/assets/akalynth/visuals/` heroes, icons, banners for `rookguard` and `high-city`
- `repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/` collection posters and atlas plates
- Classic 32 art pipeline outputs when available

Generation rule: all new assets must follow Akalynth Classic 32 direction; do not import Gameeky art or identity.

### Server State

**Codex only.** Asset paths are proposals until accepted into `akalynth-site` or server asset bundles.

Future runtime would wire accepted assets into:

- builder object palette manifest
- debug-client preview renderer
- public site only after explicit `public_projection` review

### Receipts

Asset pipeline receipts (future):

- `asset_generation_request` (credential-gated)
- `asset_acceptance_record` (operator review)
- `asset_bundle_manifest` (lane publish attachment)

### Verification

1. Backlog items map to open packets on this surface.
2. No backlog path claims a file exists before generation and acceptance.
3. Reused site assets resolve under `repos/akalynth-site/assets/`.
4. Rebuild codex projections; confirm packet ref resolves to this anchor.

---

## Server State Touched

None in this codex entry. Runtime implementation would later touch:

- map/object registries
- NPC behavior registries
- quest state
- inventory or access state only if a quest reward is added
- receipt emission for accepted player and operator actions

Any future runtime work must route through the server, protocol, economy, anti-cheat, and receipt-chain stewards as appropriate.

## Receipts Emitted

No live receipts are emitted by this design object. Future implementation should emit:

- builder draft manifest
- local preview receipt
- review decision receipt
- promotion permit
- lane publish receipt
- player action receipts for meaningful live-world effects

## Anti-Cheat And Abuse Risks

- Builder drafts must not grant live inventory, currency, XP, access, or reputation.
- Local preview must not become an authority source.
- Scripted NPC behavior must not accept client-provided truth.
- Promotion packets must distinguish public text, builder-only design, and operator-only evidence.
- Asset generation must preserve original Akalynth art direction and avoid importing another project's identity.

## Verification Path

Codex verification for this surface:

1. Validate the entry JSON parses.
2. Rebuild builder, operator, agent, and public projections.
3. Confirm the object appears only on private builder/operator/agent surfaces unless reviewed for public projection.
4. Confirm no public projection leaks `world`, `packets`, `evidence`, `lineage`, or operator-only paths.

## Public Positioning Draft

If this is later reviewed for public release, the public copy should stay simple:

```text
Akalynth is a top-down fantasy MMO project with creator tooling, persistent world systems, and proof-backed operator workflows.

Players explore the world.
Builders create maps, quests, homes, NPCs, and events.
Operators promote changes through explicit review, receipts, and replayable evidence.
```

## Non-Goals

- Do not copy Gameeky code, art, data, identity, or education-first positioning.
- Do not turn Akalynth into a generic game engine.
- Do not bypass server authority or operator review.
- Do not publish builder/operator internals to the public site.
- Do not claim shipped creator tools until runtime, UI, and receipts are implemented and verified.
