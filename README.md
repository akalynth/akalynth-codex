# Akalynth Codex — object model + projection (v1 seed)

The Codex is not a wiki. It is the **world graph**: every entity (place, faction,
creature, system, decision, route…) is a **live object** that aggregates its lore,
design status, graph edges, work packets, assets, and proof receipts — wherever
those fragments currently live across the repos.

## Akalynth positioning lane

```text
Akalynth
Play, build, and govern a living world.
```

The Codex now carries this as a private builder/operator object:
`play-build-govern-surface`. It translates the creator-tooling shape into the
Akalynth ladder:

```text
Play -> Modify -> Build -> Script -> Operate -> Govern
```

That lane is for source authority and review planning. It does not publish the
public site or claim runtime creator tools have shipped.

## Surfaces (views over one graph)

| Surface | Audience | Sees |
|---|---|---|
| **Public Codex** (L1) | players | `public_projection` only (~10–20%) |
| **Builder Codex** (L2) | studio | `world` design + related + status |
| **Operator Codex** (L3) | you | `lineage`, `evidence`, `packets`, everything |
| **Agent Codex** | AI workers | `status` + assigned `packets` (what is safe to act on) |

## Publication pipeline (leak-proof)

```
internal live object  →  review gate (accept + receipt)  →  publish
        →  projection build (codex/tools/project.mjs)  →  Public Codex (L1)
```

`project.mjs` reads **only** each object's `public_projection`. Internal fields
(`world`, `evidence`, `packets`, `lineage`, …) are never in the public build's
input, so they cannot leak — enforced by a structural leak-check that fails the
build if a forbidden key appears. The "~10–20% public" is what's *in the
projection*, not what's hidden.

## Files

- `schema/codex-entry.schema.json` — the live-object contract (JSON Schema 2020-12).
- `entries/forgehold.json` — first real object, assembled from existing files:
  lore (`AKALYNTH_CITIES_SUMMARY_V1`), design (`AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1`
  docs + registry), receipts (the slice MANIFEST + CHECKSUMS), open packets (the
  slice prompts), assets (the 5 `03-forgehold.*` webp). The public window exposes
  only spoiler-free lore.
- `tools/project.mjs` — public projection (writes a SAMPLE to `out/`, never the
  live `codex.html`).

## Boundary (v1)

Read-only / additive. This seed defines the contract and one object; it does not
mutate accepted state, does not deploy, and does not write the public site. The
next contract is the **review gate** (receipt-bound accept) and wiring the
reskinned `codex.html` to consume `out/codex-public.graph.json`.

## Run

```sh
node codex/tools/project.mjs
```
