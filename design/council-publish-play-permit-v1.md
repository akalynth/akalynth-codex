# Witness Council DAO — Publish Play Permit v1

Codex object: council-dao · Status: **`codex:candidate`**

Authority object: `AKALYNTH_COUNCIL_PUBLISH_PLAY_PERMIT_V1`

Parent: `AKALYNTH_COUNCIL_DAO_DEPLOY_PERMIT_V1` (accepted @ `df2fc34`)

## Goal

Gate **`publish-account-play`** for beta and staging through the Witness Council
with the same explicit human ack contract as deploy-permit v1.

Formalizes the manual staging `/play/` publish used for live lane screenshot proof.

## Action Classes

- `lane:beta:publish-account-play`
- `lane:staging:publish-account-play`

Adapter invokes only: `akalynth-lane-deploy.sh <lane> publish-account-play`

## Human Ack

Same as deploy: `AKALYNTH_COUNCIL_DEPLOY_ACK=1` or `--human-ack`.
Without ack → `ack_required`, no publish.

## Proof Target

**`council_lane_publish_play_permit_v1`**

## Validation

```bash
akalynth-ops/scripts/verify-council-publish-play-permit-v1.sh
npm -w apps/server run verify:council-publish-play-permit-v1
```