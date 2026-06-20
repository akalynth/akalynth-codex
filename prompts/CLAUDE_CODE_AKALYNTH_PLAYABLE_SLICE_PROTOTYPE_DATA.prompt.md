# CLAUDE_CODE_AKALYNTH_PLAYABLE_SLICE_PROTOTYPE_DATA

**Slice:** `AKALYNTH_FIRST_PLAYABLE_SLICE_V1` · **Codex object:** `high-city`

This prompt is a codex-delegated prototype data task. It does not authorize runtime
promotion. All output is design-surface prototype data only — no live game state,
no server behavior change, no protocol or economy authority.

---

## Task

Generate structured prototype data for the First Playable Slice (High City /
Witness Moth Bloom) from the reviewed design page at `codex/design/high-city.md`.

Prototype data is used for: codex builder/agent surface rendering, offline design
review, animation prototypes, and early client shell wiring. It is not runtime-
authoritative and must not be imported directly into `apps/` or `packages/`.

---

## Scope

Generate the following prototype data structures (TypeScript or JSON):

### 1. Origins (3 entries)

Fields per origin: `id`, `title`, `affinity`, `startingCity`, `firstContact`,
`startingLocation`, `theme`, `firstSkillFlavor`, `initialFactionTrust`,
`firstProblem`, `firstReward`.

Source: `codex/design/high-city.md` § Player Starting State / Origins table.

### 2. Slice Acts (6 entries)

Fields per act: `actNumber`, `title`, `summary`, `prerequisites`, `outcome`.

Source: `codex/design/high-city.md` § Slice Flow.

### 3. Field Fragments (3 entries)

Fields per fragment: `id`, `title`, `location`, `gameplay`, `threat`, `usedFor`.

Source: `codex/design/high-city.md` § Slice Flow (Act II fragments).

### 4. Key Locations (8 entries)

Fields per location: `id`, `title`, `region`, `role`, `accessCondition`.

Source: `codex/design/high-city.md` § Key Locations.

### 5. Dungeon Rooms (5 entries)

Fields per room: `roomNumber`, `title`, `mechanic`, `purpose`, `originPath`.

Source: `codex/design/high-city.md` § Key Locations — First Archive — Lower Vault.

### 6. Final Choices (3 entries)

Fields per choice: `id`, `label`, `meaning`, `supportedBy`, `consequence`,
`choiceReward`.

Source: `codex/design/high-city.md` § Dungeon & Boss — Preserve / Suppress / Release.

### 7. Release Gates (8 entries)

Fields per gate: `id`, `gate`, `requirement`.

Source: `codex/design/high-city.md` § Release Gates / Success Criteria.

---

## Authority Boundary

- Use ONLY content from `codex/design/high-city.md` as source.
- Do NOT invent ids, names, mechanics, or faction names not present in the design doc.
- Do NOT add runtime keys (`server`, `client`, `socket`, `db`), economy values,
  anti-cheat rules, or Chronicle schema.
- Label all output: `// PROTOTYPE — not runtime-authoritative`.
- Output as a single TypeScript file: `akalynthFirstPlayableSlicePrototype.ts`.
