# Witness Council DAO v1 — Ops Packet

Codex object: council-dao · Status: **`codex:ready`**

Authority object: `AKALYNTH_COUNCIL_DAO_V1`

Local forge issue authority: Gitea issue to be created from this packet.

## Goal

Seed a **local Witness Council** for Akalynth ops — proposals, vote receipts, member
reputation hooks, treasury ledger hooks, audit receipt chaining, and **execution gates**
that connect approved proposals to runtime work **only** through controlled admin/deploy
workflows.

v1 is intentionally minimal: one read-only execution adapter
(`akalynth-lane-deploy.sh <lane> check`). No build, restart, deploy, or auto-mutation.

This packet is task authority for Codex agents, not on-chain DAO theater and not
in-game governance.

## Why This Packet Now

- Engineering loops (Forgehold, chill-zone showcase) already behave like single-member
  council workflows with receipts — but lack a shared proposal/vote/permit shell.
- `AGENTS.md` and `CROSS_REPO_BOUNDARY.md` require explicit operator authorization
  before runtime mutation; a council permit layer makes that authorization machine-readable.
- `bin/akalynth-lane-deploy.sh` already exposes a safe read-only `check` action suitable
  as the first gated execution class.

## Source Inputs

- `akalynth-ops/AGENTS.md` — mutation rules and verification posture
- `akalynth-ops/CROSS_REPO_BOUNDARY.md` — source/runtime/proof boundaries
- `akalynth-ops/bin/akalynth-lane-deploy.sh` — lane `check` preflight adapter target
- `repos/akalynth/docs/engineering-loop/` — existing loop + receipt patterns
- `repos/akalynth-codex/schema/council-proposal.schema.json`
- `repos/akalynth-codex/schema/council-vote-receipt.schema.json`
- `repos/akalynth-codex/schema/council-execution-permit.schema.json`

## v1 Scope (this packet)

### In scope

1. **Local proposal schema** — `council-proposal/v1` with action classes limited to:
   - `lane:beta:check`
   - `lane:staging:check`
   - `lane:sim:check`

2. **Vote receipt schema** — `council-vote-receipt/v1` append-only votes with optional
   reputation weight (default `1.0`).

3. **Execution gate adapter** — `akalynth-ops/bin/council-execution-gate.sh`:
   - Validates proposal `status: approved` and quorum
   - Issues `council-execution-permit/v1`
   - Invokes **only** `./bin/akalynth-lane-deploy.sh <lane> check`
   - Records exit code + evidence path on the permit
   - Never calls `build`, `restart`, `deploy`, or `evidence` write paths that mutate runtime

4. **Council custody layout** under `akalynth-ops/council/`:
   - `proposals/` — proposal JSON
   - `votes/` — vote receipt JSON
   - `permits/` — execution permit JSON
   - `ledger/` — reserved for treasury v2 (stub only in v1)

5. **Codex entry** — `entries/council-dao.json` links lore-adjacent Witness Council
   concept to ops machinery without public projection.

6. **Engineering-loop receipt stub** (on execution branch in `repos/akalynth`):
   - `docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_COUNCIL_DAO_V1/receipt.json`

### Out of scope (follow-on packets)

- Token voting, chain settlement, or public DAO website
- Auto `build` / `restart` / `deploy` on approval
- Player-facing faction council mechanics (see `systems-bible` / `game-loop-bible`)
- Full treasury accounting (v1 records stub path only)
- Reputation scoring engine (v1 accepts static weight on vote receipts)

## Packet Work

1. Land schemas in `akalynth-codex/schema/` (seeded by this codex commit).

2. Land `entries/council-dao.json` with `status: candidate` and open `packets` hook.

3. Implement `bin/council-execution-gate.sh` in `akalynth-ops` with:
   ```bash
   council-execution-gate.sh \
     --proposal council/proposals/<proposal>.json \
     --votes council/votes/<proposal-id>/ \
     --emit-permit council/permits/<proposal-id>.json
   ```

4. Add focused verifier `akalynth-ops/scripts/verify-council-dao-v1.sh` that:
   - Validates sample proposal + vote against schemas (via `ajv` or `python -m jsonschema` if available; else structural grep checks)
   - Runs gate adapter against a **fixture** proposal in dry documentation mode OR with `--skip-lane-check` for CI-less hosts
   - Asserts permit `non_mutation_boundary.auto_execution == not_performed` semantics

5. Record one worked example:
   - Proposal: lane beta check after chill-zone closure
   - One approve vote from `sovereign` member
   - Permit + `akalynth-lane-deploy.sh beta check` transcript in `evidence/council/`

6. Open local Gitea issue + PR, then GitHub upstream PR for canonical review.

## Recommended Proof Target

**`council_lane_check_permit_v1`**

Given an approved proposal with `action_class: lane:beta:check` and quorum met:

1. Council gate emits execution permit with `execution_status: pending`
2. Adapter runs `./bin/akalynth-lane-deploy.sh beta check` (read-only preflight)
3. Permit records `check_passed` or `check_failed` with exit code
4. No files under `/opt`, `/var/lib`, or `/etc` are modified by the council path itself

## Branch Contract

- Branch prefix: `codex/council-`
- Recommended branch: `codex/council-dao-v1`
- Local Gitea labels:
  - `codex:ready`
  - `codex:running`
  - `codex:needs-review`
  - `codex:accepted`
  - `codex:blocked`
  - `packet:council-dao`
- Local PR target: `main` (split across `akalynth-codex` and `akalynth-ops` as needed)
- GitHub remains the canonical public/source remote for `repos/akalynth`
- `akalynth-codex` publishes through its own review gate

## Validation Gate

Minimum focused validation for this packet:

```bash
# codex schemas present
test -f repos/akalynth-codex/schema/council-proposal.schema.json
test -f repos/akalynth-codex/schema/council-vote-receipt.schema.json
test -f repos/akalynth-codex/schema/council-execution-permit.schema.json

# ops adapter exists and refuses deploy actions
bash -n akalynth-ops/bin/council-execution-gate.sh
akalynth-ops/scripts/verify-council-dao-v1.sh

# optional live lane read-only check (operator host only)
akalynth-ops/bin/council-execution-gate.sh \
  --proposal akalynth-ops/council/proposals/sample-beta-check.json \
  --votes akalynth-ops/council/votes/sample-beta-check/ \
  --emit-permit akalynth-ops/council/permits/sample-beta-check.json
```

## Non-Claims

This packet does not:

- deploy, restart, build, or mutate beta/staging/sim runtime trees;
- enable automatic execution on vote approval;
- move real-money treasury or custodial keys;
- grant in-game governance, faction council powers, or player reputation;
- replace GitHub as canonical public/source remote for `repos/akalynth`;
- imply blockchain, token, or public DAO membership.

## Acceptance Evidence

The packet is accepted only after:

1. Codex entry `council-dao` is `accepted` with schema refs in `evidence`.
2. A local Gitea issue exists from this packet.
3. One Codex agent claims the issue (`codex:ready` → `codex:running`).
4. Proposal/vote/permit schemas validate sample fixtures.
5. `council-execution-gate.sh` issues a permit and runs `lane check` only.
6. Engineering-loop receipt records validation under
   `docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_COUNCIL_DAO_V1/receipt.json`.
7. Accepted branch(es) pushed to GitHub / codex remote for canonical review.

## Follow-On Loop (not this packet)

- `AKALYNTH_COUNCIL_DAO_V2` — treasury ledger + reputation weighting
- `AKALYNTH_COUNCIL_DAO_DEPLOY_PERMIT_V1` — gated `lane:beta:deploy` with human ack
- `AKALYNTH_FORGEHOLD_ASHGLASS_EVIDENCE_V1` — content evidence ordering (parallel track)