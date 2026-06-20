# CLAUDE_CODE_AKALYNTH_FORGEHOLD_ROUTE_PROTOTYPE_DATA

**Slice:** `AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1` · **Codex object:** `forgehold`

This prompt is a codex-delegated prototype data task. It does not authorize runtime
promotion. All output is design-surface prototype data only — no live game state,
no server behavior change, no protocol or economy authority.

---

## Task

Generate structured prototype data for the Forgehold Route Slice (Ember Road /
Heartforge Trial Chamber / Oathless Forge) from the reviewed design page at
`codex/design/forgehold.md`.

Prototype data is used for: codex builder/agent surface rendering, offline design
review, animation prototypes, and early client shell wiring. It is not runtime-
authoritative and must not be imported directly into `apps/` or `packages/`.

---

## Scope

Generate the following prototype data structures (TypeScript or JSON):

### 1. Slice Acts (6 entries)

Fields per act: `actNumber`, `title`, `summary`, `prerequisites`, `outcome`.

Source: `codex/design/forgehold.md` § Route / State Flow.

### 2. Origin Continuations (3 entries)

Fields per origin: `id`, `title`, `role`, `stabilizationTask`, `professionBonus`.

Source: `codex/design/forgehold.md` § Systems & UI Added — Origin continuations.

### 3. Key Locations (8 entries)

Fields per location: `id`, `title`, `region`, `role`, `accessCondition`.

Source: `codex/design/forgehold.md` § Key Locations.

### 4. Dungeon Rooms (5 entries)

Fields per room: `roomNumber`, `title`, `mechanic`, `purpose`, `connectsTo`.

Source: `codex/design/forgehold.md` § Dungeon & Boss.

### 5. Boss Mechanics (5 entries for Oathless Forge)

Fields per mechanic: `id`, `name`, `description`, `originPath`.

Source: `codex/design/forgehold.md` § Dungeon & Boss — Boss — The Oathless Forge.

### 6. Final Choices (3 entries)

Fields per choice: `id`, `label`, `meaning`, `supportedBy`, `immediateConsequence`,
`futureEventSeed`.

Source: `codex/design/forgehold.md` § Dungeon & Boss — Final choice consequences.

### 7. Release Gates (8 entries)

Fields per gate: `id`, `gate`, `requirement`.

Source: `codex/design/forgehold.md` § Release Gates / Success Criteria.

---

## Authority Boundary

- Use ONLY content from `codex/design/forgehold.md` as source.
- Do NOT invent ids, names, mechanics, or faction names not present in the design doc.
- Do NOT add runtime keys (`server`, `client`, `socket`, `db`), economy values,
  anti-cheat rules, or Chronicle schema.
- Label all output: `// PROTOTYPE — not runtime-authoritative`.
- Output as a single TypeScript file: `akalynthForgeholdRouteSlicePrototype.ts`.
