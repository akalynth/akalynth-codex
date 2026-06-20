# CLAUDE_CODE_AKALYNTH_CAMPAIGN_ACT_I_PROTOTYPE_DATA

**Slice:** `AKALYNTH_CAMPAIGN_ACT_I_V1` · **Codex object:** `campaign-act-i`

This prompt is a codex-delegated prototype data task. It does not authorize runtime
promotion. All output is design-surface prototype data only — no live game state,
no server behavior change, no protocol or economy authority.

---

## Task

Generate structured prototype data for the Campaign Act I spine (The Four Proofs /
Convergence Warning) from the reviewed design page at `codex/design/campaign-act-i.md`.

Prototype data is used for: codex builder/agent surface rendering, offline design
review, and early campaign-shell wiring. It is not runtime-authoritative and must
not be imported directly into `apps/` or `packages/`.

---

## Scope

Generate the following prototype data structures (TypeScript or JSON):

### 1. The Four Proofs (4 entries)

Fields per proof: `id`, `label`, `chapter`, `sliceId`, `codexObjectId`,
`question`, `boss`.

Source: `codex/design/campaign-act-i.md` § The Four Proofs tables.

### 2. Origin Paths (6 entries)

Fields per origin: `id`, `title`, `affinity`, `startingCity`, `firstTrustPath`,
`entersAs`.

Source: `codex/design/campaign-act-i.md` § Origin Paths table.

### 3. Chapter Flow (6 entries — Prologue + 4 chapters + Finale)

Fields per chapter: `id`, `title`, `location`, `proofType`, `summary`.

Source: `codex/design/campaign-act-i.md` § Chapter Flow.

### 4. Per-Chapter Choices (4 entries)

Fields per choice: `chapterId`, `proofId`, `options`, `postureSet`.

Source: `codex/design/campaign-act-i.md` § Major Choices — Per-chapter choices table.

### 5. Act I Final Choices (3 entries)

Fields per choice: `id`, `label`, `meaning`, `theme`, `seeds`.

Source: `codex/design/campaign-act-i.md` § Finale & Convergence Warning — Option table.

### 6. Campaign Release Gates (6 entries)

Fields per gate: `id`, `gate`, `requirement`.

Source: `codex/design/campaign-act-i.md` § Release Gates.

---

## Authority Boundary

- Use ONLY content from `codex/design/campaign-act-i.md` as source.
- Do NOT restate or override mechanics from the four prerequisite slices; reference
  them by `sliceId` / `codexObjectId` only.
- Do NOT add runtime keys (`server`, `client`, `socket`, `db`), economy values,
  anti-cheat rules, chapter-gate logic, quest state, or Chronicle schema.
- Label all output: `// PROTOTYPE — not runtime-authoritative`.
- Output as a single TypeScript file: `akalynthCampaignActIPrototype.ts`.
