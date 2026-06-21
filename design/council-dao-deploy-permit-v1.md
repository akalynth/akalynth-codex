# Witness Council DAO — Deploy Permit v1

Codex object: council-dao · Status: **`codex:accepted`** (deploy permit packet)

Authority object: `AKALYNTH_COUNCIL_DAO_DEPLOY_PERMIT_V1`

Parent: `AKALYNTH_COUNCIL_DAO_V2` (accepted @ `06305cb`)

## Goal

Add **gated lane deploy** action classes to the Witness Council — the first
packet that permits runtime mutation through the council gate, with **explicit
human acknowledgment** before any `akalynth-lane-deploy.sh <lane> deploy` call.

Supported lanes: **beta** and **staging** only in v1.

## Why This Packet Now

- v1/v2 proved proposal → vote → permit → lane `check` with treasury/reputation.
- Engineering loops and `AGENTS.md` require explicit operator authorization
  before deploy; this packet machine-reads that authorization.
- Follow-on named since council DAO v1 design closure.

## Source Inputs

- `codex/design/council-dao-v2.md`
- `codex/schema/council-proposal.schema.json`
- `codex/schema/council-execution-permit.schema.json`
- `akalynth-ops/bin/council-execution-gate.sh`
- `akalynth-ops/bin/akalynth-lane-deploy.sh`

## v1 Scope (this packet)

### In scope

1. **Deploy action classes** on proposals and permits:
   - `lane:beta:deploy`
   - `lane:staging:deploy`

2. **Human ack gate** — deploy never runs unless operator provides ack via:
   - `AKALYNTH_COUNCIL_DEPLOY_ACK=1`, or
   - `council-execution-gate.sh --human-ack`

   Without ack: permit is emitted with `execution_status: ack_required` and
   **no deploy invocation**.

3. **Proposal `action_params`** extension:
   - `execution_ack_required: true` (required for deploy classes)
   - `dry_run: boolean` (passes `--dry-run` to lane deploy when ack present)

4. **Gate adapter** — extends `council-execution-gate.sh`:
   - `--human-ack` / env ack for deploy
   - `--skip-deploy` for verifier hosts (permit-only, no lane mutation)
   - Higher treasury debit (`-10 ops_credit`) for deploy permits
   - Records `human_ack` block on permit

5. **Verifier** — `akalynth-ops/scripts/verify-council-dao-deploy-permit-v1.sh`

6. **Codex entry** — `entries/council-dao.json` v3 packet hook

### Out of scope

- `lane:sim:deploy`
- Auto-deploy on vote approval without explicit gate invocation + ack
- `build` / `restart` as standalone council action classes
- `publish-account-play` council gating

## Recommended Proof Target

**`council_lane_deploy_permit_v1`**

Given an approved `lane:beta:deploy` proposal with quorum met:

1. Gate **without** ack → permit `execution_status: ack_required`, deploy not run
2. Gate **with** `--human-ack --skip-deploy` → permit `deploy_skipped`, ledger debit
3. Gate **with** ack on operator host → invokes only `akalynth-lane-deploy.sh beta deploy`
4. Permit records `human_ack` and updated `non_mutation_boundary`

## Branch Contract

- Branch: `codex/council-dao-deploy-permit-v1`

## Validation Gate

```bash
akalynth-ops/scripts/verify-council-dao-deploy-permit-v1.sh
npm -w apps/server run verify:council-dao-deploy-permit-v1
```

## Non-Claims

- Does not auto-deploy on vote approval
- Does not bypass human ack
- Does not gate sim deploy in v1
- Does not replace direct operator use of `akalynth-lane-deploy.sh` — adds permit layer

## Follow-On (not this packet)

- `lane:staging:publish-account-play` council gate
- Multi-member deploy ack (separate ack receipts per operator)

## Closure

Merged upstream:

- `akalynth-codex` PR #4 @ `2eeb5c8`
- `akalynth` PR #340 @ `df2fc34`
- Loop receipt: `docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_COUNCIL_DAO_DEPLOY_PERMIT_V1/receipt.json`