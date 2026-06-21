# Witness Council DAO v2 — Treasury + Reputation

Codex object: council-dao · Status: **`codex:accepted`** (v2 packet)

Authority object: `AKALYNTH_COUNCIL_DAO_V2`

Parent: `AKALYNTH_COUNCIL_DAO_V1` (accepted @ `bcae5f5`)

## Goal

Extend the local Witness Council with **member reputation registry** and an
**append-only ops treasury ledger** — without changing v1 action classes or
introducing runtime auto-mutation.

v2 makes vote weighting machine-readable from `council/members/` instead of
static `1.0` on vote receipts, and records symbolic permit costs in
`council/ledger/entries.jsonl`.

This is **ops bookkeeping**, not in-game gold (`apps/server/src/world/treasury.ts`)
and not real-money custody.

## Why This Packet Now

- v1 shipped proposal → vote → permit → lane `check` with static weights.
- Follow-on named in `council-dao-v1.md`: treasury ledger + reputation weighting.
- Weighted quorum enables multi-member council posture before deploy-permit v1.

## Source Inputs

- `codex/design/council-dao-v1.md`
- `codex/schema/council-proposal.schema.json` (quorum extension)
- `codex/schema/council-execution-permit.schema.json` (ledger ref extension)
- `codex/schema/council-member-reputation.schema.json` (new)
- `codex/schema/council-treasury-ledger-entry.schema.json` (new)
- `akalynth-ops/bin/council-execution-gate.sh`
- `akalynth-ops/scripts/verify-council-dao-v2.sh`

## v2 Scope (this packet)

### In scope

1. **Member reputation registry** — `council-member-reputation/v1` JSON per member
   under `akalynth-ops/council/members/<member-id>.json`.

2. **Treasury ledger** — append-only JSONL at `akalynth-ops/council/ledger/entries.jsonl`
   with `council-treasury-ledger-entry/v1` rows chained by `prior_entry_hash`.

3. **Gate adapter extensions** — `council-execution-gate.sh`:
   - `--members-dir` (default `council/members/`)
   - `--ledger-file` (default `council/ledger/entries.jsonl`)
   - Resolves vote weights from member registry (fallback: vote receipt weight)
   - Honors optional `quorum.min_weighted_approvals` on proposals
   - Appends ledger debit on permit issuance (symbolic `ops_credit` unit)
   - Still invokes **only** `akalynth-lane-deploy.sh <lane> check`

4. **Verifier** — `akalynth-ops/scripts/verify-council-dao-v2.sh` (includes v1 checks).

5. **Codex entry update** — `entries/council-dao.json` adds v2 packet + schema refs.

6. **Engineering-loop receipt** (on execution branch in `repos/akalynth`):
   - `docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_COUNCIL_DAO_V2/receipt.json`

### Out of scope (follow-on packets)

- `AKALYNTH_COUNCIL_DAO_DEPLOY_PERMIT_V1` — gated deploy with human ack
- Reputation scoring engine (auto-adjust weights from behavior)
- Real-money treasury, custodial keys, or on-chain settlement
- Player-facing faction council or in-game reputation

## Packet Work

1. Land v2 schemas + samples in `akalynth-codex`.

2. Extend proposal quorum with optional `min_weighted_approvals`.

3. Extend permit schema with optional `treasury_ledger_entry_id` and
   `reputation_resolution`.

4. Implement gate `--members-dir` / `--ledger-file` in `akalynth-ops`.

5. Add `verify-council-dao-v2.sh` with weighted-quorum fixture.

6. Record worked example under `evidence/council/council-dao-v2/`.

7. Open GitHub PRs for `akalynth-codex` and `akalynth`.

## Recommended Proof Target

**`council_treasury_reputation_v2`**

Given an approved proposal with `quorum.min_weighted_approvals` and a member
registry where `sovereign` has `reputation_score: 2.0`:

1. Gate resolves vote weight from registry (not static receipt weight)
2. Weighted quorum is evaluated and recorded on permit
3. Ledger appends one `permit_execution` debit entry referencing the permit
4. Lane `check` adapter behavior unchanged from v1

## Branch Contract

- Branch: `codex/council-dao-v2`
- Labels: `packet:council-dao`, `codex:ready` → `codex:accepted`
- GitHub canonical for `repos/akalynth`; codex remote for `akalynth-codex`

## Validation Gate

```bash
test -f repos/akalynth-codex/schema/council-member-reputation.schema.json
test -f repos/akalynth-codex/schema/council-treasury-ledger-entry.schema.json
bash -n akalynth-ops/bin/council-execution-gate.sh
akalynth-ops/scripts/verify-council-dao-v2.sh
npm -w apps/server run verify:council-dao-v2   # from repos/akalynth
```

## Non-Claims

This packet does not:

- deploy, restart, build, or mutate runtime trees;
- move real money or custodial keys;
- auto-adjust reputation from gameplay or CI metrics;
- grant in-game governance or player reputation;
- replace v1 fixtures (v1 verifier must still pass).

## Acceptance Evidence

The packet is accepted only after:

1. Codex entry `council-dao` lists v2 schemas and packet in `packets` / `evidence`.
2. `verify-council-dao-v2.sh` passes (including v1 regression).
3. Gate emits permit with registry-resolved weights and ledger append.
4. Engineering-loop receipt records validation green.
5. GitHub PR(s) merged to `main`.

## Follow-On Loop (not this packet)

- `AKALYNTH_COUNCIL_DAO_DEPLOY_PERMIT_V1` — gated `lane:beta:deploy` with human ack (**next**)
- `AKALYNTH_FORGEHOLD_ASHGLASS_EVIDENCE_V1` — content evidence ordering (parallel)

## Closure

Merged upstream:

- `akalynth-codex` PR #3 @ `da8d2f6`
- `akalynth` PR #339 @ `06305cb`
- Loop receipt: `docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_COUNCIL_DAO_V2/receipt.json`