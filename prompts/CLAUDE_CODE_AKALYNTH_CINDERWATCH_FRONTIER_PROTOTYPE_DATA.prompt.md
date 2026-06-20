# CLAUDE_CODE_AKALYNTH_CINDERWATCH_FRONTIER_PROTOTYPE_DATA

**Slice:** `AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1` · **Codex object:** `cindervale`

This prompt is a codex-delegated prototype data task. It does not authorize runtime
promotion. All output is design-surface prototype data only — no live game state,
no server behavior change, no protocol or economy authority.

---

## Task

Generate structured prototype data for the Cinderwatch Frontier Slice (Ashline
Frontier / Glassfang Brood / Frontier Ashfall seed) from the reviewed design page
at `codex/design/cindervale.md`.

Prototype data is used for: codex builder/agent surface rendering, offline design
review, animation prototypes, and early client shell wiring. It is not runtime-
authoritative and must not be imported directly into `apps/` or `packages/`.

---

## Scope

Generate the following prototype data structures (TypeScript or JSON):

### 1. Frontier Flow Acts (6 entries)

Fields per act: `actNumber`, `title`, `summary`, `prerequisites`, `outcome`.

Source: `codex/design/cindervale.md` § Frontier Flow (ordered states).

### 2. Ashwarden Abilities (5 entries)

Fields per ability: `id`, `name`, `description`, `effect`.

Source: `codex/design/cindervale.md` § Ashwarden Gameplay — Core abilities.

### 3. Patrol Contract Types (7 entries)

Fields per type: `id`, `title`, `description`, `campStateEffect`.

Source: `codex/design/cindervale.md` § Patrol contracts — Types.

### 4. Creature Track Types (7 entries)

Fields per type: `id`, `name`, `description`, `indicatesState`.

Source: `codex/design/cindervale.md` § Creature tracking — Track types.

### 5. Key Locations (8 entries)

Fields per location: `id`, `title`, `region`, `role`, `accessCondition`.

Source: `codex/design/cindervale.md` § Key Locations.

### 6. Boss Mechanics (5 entries — Glassfang Matriarch)

Fields per mechanic: `id`, `name`, `description`, `counterplay`.

Source: `codex/design/cindervale.md` § Boss — Glassfang Matriarch / Brood — Mechanics.

### 7. Boss Outcomes (3 entries)

Fields per outcome: `id`, `label`, `result`, `reward`.

Source: `codex/design/cindervale.md` § Boss — Outcomes table.

### 8. Frontier Policy Choices (3 entries)

Fields per choice: `id`, `label`, `theme`, `supportedBy`, `keyConsequences`, `reward`.

Source: `codex/design/cindervale.md` § Frontier policy choice (Act VI) table.

### 9. Release Gates (9 entries)

Fields per gate: `id`, `gate`, `requirement`.

Source: `codex/design/cindervale.md` § Release Gates / Success Criteria.

---

## Authority Boundary

- Use ONLY content from `codex/design/cindervale.md` as source.
- Do NOT invent ids, names, mechanics, or faction names not present in the design doc.
- Do NOT add runtime keys (`server`, `client`, `socket`, `db`), economy values,
  anti-cheat rules, or Chronicle schema.
- Label all output: `// PROTOTYPE — not runtime-authoritative`.
- Output as a single TypeScript file: `akalynthCinderwatchFrontierSlicePrototype.ts`.
