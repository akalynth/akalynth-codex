# Forgehold Ashglass Evidence v1 — Ops Packet

Codex object: forgehold-ashglass-evidence · Status: **`codex:ready`**

Authority object: `AKALYNTH_FORGEHOLD_ASHGLASS_EVIDENCE_V1`

## Goal

Close Forgehold **Act II — Ember Road Recovery** evidence ordering on `main`:

recover three server-owned route evidence objects in sequence — Broken Route Seal,
Charred Shipment Plate, Ashglass Shard — before Act III shipment contradiction
investigation. No travel unlock, economy promotion, or dungeon access.

## Act II Evidence Chain

| Order | Skill | Location | Evidence object | Receipt action |
|-------|-------|----------|-----------------|----------------|
| 1 | `route:evidence:milepost` | Ember Road Milepost | `broken_route_seal` | `forgehold_milepost_evidence_recovered` |
| 2 | `route:evidence:caravan` | Burned Caravan Site | `charred_shipment_plate` | `forgehold_caravan_evidence_recovered` |
| 3 | `route:evidence:ravine` | Ashglass Ravine | `ashglass_shard` | `forgehold_ashglass_ravine_evidence_recovered` |

Act III (`route:quest:shipment`) requires all three Act II receipts and records the
`departed / undeparted` contradiction without re-recovering objects.

Later `route:craft:ashglass` (Heartforge lab) remains a separate post-gate refinement
evidence step with `tempered_slag_trace`.

## Proof Target

**`forgehold_ashglass_evidence_v1`**

After Forgehold survey, the Act II chain:

1. Emits three ordered evidence receipts with `act_id: act_02_ember_road_recovery`
2. Rejects out-of-order / repeat recovery without side effects
3. Gates shipment investigation until ravine evidence is recovered
4. Never unlocks travel, mints items, or mutates wallet

## Source Inputs

- `codex/design/forgehold.md` (Act II — Ember Road Recovery)
- `repos/akalynth/docs/asset-decisions/AKALYNTH_FORGEHOLD_ROUTE_SOURCE_INTAKE_V1/`
- `apps/server/src/skills/handlers.ts`
- `apps/server/tools/verify-route-surveys.ts`
- `packages/shared/skills.ts`

## Packet Work

1. Land Act II evidence skills + receipt actions in `packages/shared` and server handlers.
2. Update onward-route projection and shipment gate.
3. Add `apps/server/tools/verify-forgehold-ashglass-evidence.ts` focused verifier.
4. Add `scripts/verify-forgehold-ashglass-evidence.sh` + runbook.
5. Engineering-loop receipt in `repos/akalynth`.

## Validation Gate

```bash
git diff --check
npm -w apps/server run verify:quick
npm -w apps/server run verify:forgehold-ashglass-evidence
npm -w apps/server run verify:route-surveys
```

## Non-Claims

- No route travel unlock or map transition promotion
- No Soulsteel crafting economy promotion beyond existing guards
- No Heartforge dungeon or boss promotion
- No runtime deploy

## Follow-On

- `AKALYNTH_ROOKGUARD_FIRST30_PRESENTATION_V1` — presentation transcript
- `AKALYNTH_COUNCIL_DAO_V2` — treasury + reputation