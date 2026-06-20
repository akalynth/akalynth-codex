# AKALYNTH_SLICE_DESIGN_SURFACE_V1 — website_update redirect

## Why this exists

The original `*_WEBSITE_UPDATE.prompt.md` packets (one per drop slice) asked an agent
to publish a **public design page on `akalynth-site`** (e.g. `/akalynth/forgehold-route-slice`).

That target was **removed**: the public Codex and the `akalynth-site` `codex/` surfaces were
deleted in the dark reskin (`reskin-dark-remove-public-codex`). The public site is now
mobile-only (landing + APK). See memory `site-public-codex-removed`.

## Current site direction (where slice design lives now)

The Codex (`akalynth-ops/codex/`) is projected to the **builder / operator / agent** surfaces
and deployed to:

- **`codex.akalynth.com`** — public (currently ungated), serving operator+agent surfaces.
- **`beta.akalynth.com/operator` `/builder` `/agent`** — role-gated (admin/operator/builder/agent).

Each slice is a live Codex object; the builder/operator surface renders its
`world.description` + `world.design_refs`. So the "website update" for a slice is now an
**internal design page surfaced through the Codex**, not a public marketing page.

## What the reopened packets resolve to

For each of the 9 `website_update` packets, the current-direction deliverable is a structured
design page at **`codex/design/<object-id>.md`** (Purpose / player state / flow / systems /
release gates / provenance), added to that object's `world.design_refs` so the builder &
operator surfaces link it. The packet `ref` is repointed from the obsolete public-page brief
to this design page, and its status set to `in_review`.

| Codex object | Design page | Source drop |
|---|---|---|
| forgehold | codex/design/forgehold.md | AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1 |
| high-city | codex/design/high-city.md | AKALYNTH_FIRST_PLAYABLE_SLICE_V1 |
| moonspire | codex/design/moonspire.md | AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1 |
| cindervale | codex/design/cindervale.md | AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1 |
| campaign-act-i | codex/design/campaign-act-i.md | AKALYNTH_CAMPAIGN_ACT_I_V1 |
| gameplay-lane | codex/design/gameplay-lane.md | AKALYNTH_GAMEPLAY_LANE_V1 |
| game-loop-bible | codex/design/game-loop-bible.md | AKALYNTH_GAME_LOOP_BIBLE_V1 |
| systems-bible | codex/design/systems-bible.md | AKALYNTH_SYSTEMS_BIBLE_V1 |
| world-events-engine | codex/design/world-events-engine.md | AKALYNTH_WORLD_EVENTS_ENGINE_V1 |

## Not done here (out of scope)

No deploy. Publishing these to `codex.akalynth.com` / beta gated surfaces (via the codex
projection + site sync) is a separate, explicit step. This lane is additive + codex-side only.
