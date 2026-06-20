# Codex posters — asset packets (credential-gated)

The 9 `asset` packets in the Codex (one per slice/system object) are **poster image
briefs**. They expand to **13 posters** (the `gameplay-lane` packet is a directory of 5
briefs). These are high-fantasy infographic posters — NOT 32×32 pixel art, so the
`classic-32-art-pipeline` does **not** apply.

## Status: BLOCKED on credentials

Image generation cannot run in this environment — no `OPENAI_API_KEY` (or other image-gen
key) is present. Everything except the actual API call is built and ready:

- `poster-specs.json` — consolidated specs (object → poster_id → brief → title/subtitle →
  output path), generated from the asset packets.
- `tools/generate-posters.mjs` — the generator. Reads each poster's **full** authoritative
  `.prompt.md` brief as the prompt; writes `out/<poster_id>.png`. Safe by default: with no
  key it does a **dry run** (lists work, exits 0) and never calls the API.

## To actually generate (one command, when a key is available)

```sh
export OPENAI_API_KEY=sk-...                 # or set AKALYNTH_IMAGE_MODEL to override gpt-image-1
node codex/tools/generate-posters.mjs        # generates all 13 → codex/assets/out/*.png
# options: --dry-run (force preview) · --force (regenerate existing) · --only <object|poster_id>
```

Outputs land in `codex/assets/out/`. Then attach each PNG to its Codex object's `assets[]`
(`{ "kind": "poster", "path": "codex/assets/out/<poster_id>.png" }`) and re-run the
projections. The asset packets can then move `open → in_review`.

## Provenance

- Specs: `poster-specs.json` (artifact `AKALYNTH_CODEX_POSTER_SPECS_V1`).
- Each spec's `brief` points at the authoritative image brief in the drop bundle.
- This lane is additive + codex-side; it does not deploy.
