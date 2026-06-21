# Live Lane Presentation Screenshot Proof v1 — Ops Packet

Codex object: live-lane-presentation-screenshot-proof · Status: **`codex:ready`**

Authority object: `AKALYNTH_LIVE_BETA_STAGING_SCREENSHOT_PROOF_V1`

## Goal

Close the **live beta/staging Rookguard presentation screenshot proof gap** after
`AKALYNTH_ROOKGUARD_FIRST30_PRESENTATION_V1`: reproducible Playwright captures on
`beta.akalynth.com` and `staging.akalynth.com` that show connected Rookguard play
without claiming production launch or content-alpha.

## Proof Target

**`live_lane_presentation_screenshot_v1`**

Given disposable-account smoke per lane:

1. Lane probes report `/play/` HTTP 200 when playable
2. Desktop `1440x900` and mobile landscape `932x430` screenshots are captured
3. Register records SHA prefixes, map hints, and lane status (`passed` | `blocked` | `failed`)
4. Parent presentation transcript remains `rookguard_first30_presentation_v1`

## Lane Contract

| Lane | Web base | API base | Required shots |
|------|----------|----------|----------------|
| beta | `https://beta.akalynth.com` | `https://beta-api.akalynth.com` | desktop + mobile |
| staging | `https://staging.akalynth.com` | `https://staging-api.akalynth.com` | desktop + mobile |

## Source Inputs

- `repos/akalynth-codex/design/rookguard-first30-presentation-v1.md`
- `akalynth-ops/tools/screenshots/live-lane-presentation-screenshots.mjs`
- `akalynth-ops/scripts/capture-live-lane-presentation-screenshots.sh`
- `akalynth-ops/evidence/live-lane-presentation-screenshot-proof/closure.json`

## Packet Work

1. Land screenshot register schema + canonical sample in codex.
2. Add `apps/server/tools/verify-live-lane-presentation-screenshot.ts`.
3. Add `scripts/verify-live-lane-presentation-screenshot.sh` + runbook.
4. Engineering-loop receipt in `repos/akalynth`.

## Validation Gate

```bash
git diff --check
npm -w apps/server run verify:quick
npm -w apps/server run verify:live-lane-presentation-screenshot
npm -w apps/server run verify:rookguard-first30-presentation
bash scripts/verify-live-lane-presentation-screenshot.sh
```

## Non-Claims

- No production launch or content-alpha claim
- No protocol change
- No automatic runtime deploy from CI
- Staging account portal (`account.html`) not required for screenshot proof

## Follow-On

- `AKALYNTH_COUNCIL_DAO_V2` — treasury + reputation
- Staging `publish-account-play` lane action in `akalynth-lane-deploy.sh`