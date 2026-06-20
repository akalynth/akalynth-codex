# CLAUDE_CODE_AKALYNTH_MOONSPIRE_DREAM_GATE_PROTOTYPE_DATA

**Slice:** `AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1` · **Codex object:** `moonspire`

This prompt is a codex-delegated prototype data task. It does not authorize runtime
promotion. All output is design-surface prototype data only — no live game state,
no server behavior change, no protocol or economy authority.

---

## Task

Generate structured prototype data for the Moonspire Dream Gate Slice (Liminal Web /
Unchosen Self) from the reviewed design page at `codex/design/moonspire.md`.

Prototype data is used for: codex builder/agent surface rendering, offline design
review, animation prototypes, and early client shell wiring. It is not runtime-
authoritative and must not be imported directly into `apps/` or `packages/`.

---

## Scope

Generate the following prototype data structures (TypeScript or JSON):

### 1. Supported Origins (5 entries)

Fields per origin: `id`, `title`, `role`, `advantage`.

Source: `codex/design/moonspire.md` § Player Starting State — Supported Origins table.

### 2. Dream Gate States (7 entries)

Fields per state: `id`, `state`, `meaning`.

Source: `codex/design/moonspire.md` § Dream Gate System — Gate states table.

### 3. Dreamwalker Abilities (4 entries)

Fields per ability: `id`, `name`, `description`, `effect`.

Source: `codex/design/moonspire.md` § Dream Gate System — Dreamwalker gameplay.

### 4. Dream Symbols (8 entries)

Fields per symbol: `id`, `symbol`, `possibleMeanings`.

Source: `codex/design/moonspire.md` § Symbolic Puzzles — symbol table.

### 5. Dream Fragments (3 entries)

Fields per fragment: `id`, `name`, `location`, `gameplay`, `threat`, `usedFor`.

Source: `codex/design/moonspire.md` § Symbolic Puzzles — Three recovered fragments table.

### 6. Dungeon Rooms (5 entries — Liminal Web Outer Strand)

Fields per room: `roomNumber`, `title`, `mechanic`, `purpose`.

Source: `codex/design/moonspire.md` § Key Locations — Dungeon — The Liminal Web — Outer Strand.

### 7. Boss Mechanics (5 entries — Unchosen Self)

Fields per mechanic: `id`, `name`, `description`.

Source: `codex/design/moonspire.md` § Boss — The Unchosen Self — Mechanics.

### 8. Final Choices (3 entries)

Fields per choice: `id`, `label`, `meaning`, `supportedBy`, `consequences`,
`reward`, `theme`.

Source: `codex/design/moonspire.md` § Boss — Integrate / Banish / Bind table.

### 9. Release Gates (8 entries)

Fields per gate: `id`, `gate`, `requirement`.

Source: `codex/design/moonspire.md` § Release Gates / Success Criteria.

---

## Authority Boundary

- Use ONLY content from `codex/design/moonspire.md` as source.
- Do NOT invent ids, names, mechanics, or faction names not present in the design doc.
- Do NOT add runtime keys (`server`, `client`, `socket`, `db`), economy values,
  anti-cheat rules, or Chronicle schema.
- Label all output: `// PROTOTYPE — not runtime-authoritative`.
- Output as a single TypeScript file: `akalynthMoonspireDreamGateSlicePrototype.ts`.
