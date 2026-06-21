# Forgehold Missing Shipment v1

Codex object: forgehold · Status: **`codex:candidate`**

Authority object: `AKALYNTH_FORGEHOLD_NEXT_PACKET_V1`

Parent: `AKALYNTH_FORGEHOLD_ASHGLASS_EVIDENCE_V1` (closed)

## Goal

Close the **Act III missing-shipment contradiction** proof path on `main`:
player understands `departed / undeparted` after Act II evidence chain — without
travel unlock, rewards, heat, or economy mutation.

## Proof Target

**`forgehold_missing_shipment_v1`**

## Scope

- `route:quest:shipment` after Act II evidence receipts
- Receipt: `forgehold_shipment_investigated`
- Quest id: `forgehold_missing_shipment_v1`
- Contradiction: `departed / undeparted`

## Validation

```bash
npm -w apps/server run verify:forgehold-missing-shipment-v1
```