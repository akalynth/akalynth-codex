# Rookguard First30 Presentation v1 — Ops Packet

Codex object: rookguard-first30-presentation · Status: **`codex:ready`**

Authority object: `AKALYNTH_ROOKGUARD_FIRST30_PRESENTATION_V1`

## Goal

Close the Rookguard **0–30 minute presentation proof gap** on `main`: a reproducible
presentation transcript that links the sim dashboard gameplan, deterministic sim
timeline frames, and the live WebSocket Codex Path verifier — without claiming
beta/staging polish or production launch.

## Proof Target

**`rookguard_first30_presentation_v1`**

Given the source contract in `docs/ROOKGUARD_FIRST_30_MINUTES_V1.md`:

1. `rookguard_0_30_gameplan` exposes six five-minute windows with receipt actions
2. Sim timeline frames for `sim:rookguard:newcomer:1` cover live and sim-lane beats
3. Presentation transcript schema validates window → receipt → lane mapping
4. Live path verifier (`verify-rookguard-codex-path`) proves movement/chat/Tem/training/vocation/gate receipts

## Window Contract

| Window | Lane | Receipt actions |
|--------|------|-----------------|
| 0–5 | Live | `presence_entered`, `tutorial_step_complete` |
| 5–10 | Live | `chat`, `tutorial_step_complete` |
| 10–15 | Live | `tem_challenge_issued`, `tem_challenge_passed`, `tutorial_step_complete` |
| 15–20 | Sim / debug | `runestone_cast`, `presence_lingered` |
| 20–25 | Sim / optional | `legend_sighted` |
| 25–30 | Live | `mob_kill`, `item_minted`, `vocation_declared`, `gate_unlock`, `tutorial_completed` |

## Source Inputs

- `repos/akalynth/docs/ROOKGUARD_FIRST_30_MINUTES_V1.md`
- `repos/akalynth/docs/SIM_LIFE_VIEWER_V1.md`
- `apps/server/src/simulation/simLifeSnapshot.ts`
- `apps/server/tools/verify-rookguard-codex-path.ts`
- `apps/server/tools/verify-rookguard-quest.ts`
- `apps/debug-client/src/components/SimLifeRookguardTimelapse.tsx`

## Packet Work

1. Land presentation transcript schema + sample in codex.
2. Add `apps/server/tools/verify-rookguard-first30-presentation.ts`.
3. Add `scripts/verify-rookguard-first30-presentation.sh` + runbook.
4. Engineering-loop receipt in `repos/akalynth`.

## Validation Gate

```bash
git diff --check
npm -w apps/server run verify:quick
npm -w apps/server run verify:rookguard-first30-presentation
npm -w apps/server run verify:rookguard-quest
npm -w apps/server run verify:rookguard-codex-path
bash scripts/verify-rookguard-first30-presentation.sh
```

## Non-Claims

- No beta/staging presentation polish claim
- No production launch or content-alpha claim
- No protocol change
- No runtime deploy
- Sim receipts remain `simulated_receipts_only`

## Follow-On

- `AKALYNTH_COUNCIL_DAO_V2` — treasury + reputation
- Live beta/staging screenshot proof (release lane)