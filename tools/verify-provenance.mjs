#!/usr/bin/env node
// Provenance regression gate for the public Codex projection.
//
// Guards the invariant that every PUBLISHED public entry resolves to a real
// on-disk source (receipt- or source-backed) with a fingerprint that actually
// matches that source — i.e. NONE may publish as `asserted`. This is the gate
// that would have caught the symlink/opsRoot bug that silently regressed all
// 25 entries to `asserted` (see tools/project.mjs).
//
// What it checks (against the live projection it regenerates):
//   1. leak_check === 'pass'           (no internal fields in the public graph)
//   2. public_entries > 0              (the projection actually produced output)
//   3. zero `asserted` entries         (every entry has a resolved source)
//   4. each evidence_sha256 matches sha256(source file) on disk  (genuine, not stale)
//
// Exit: 0 = pass, 1 = regression. SKIPS (exit 0) when the akalynth-ops
// workspace / sibling source repos are absent — provenance cannot be verified
// from an isolated checkout, so this gate only enforces where sources exist
// (the ops-side CI runner, same as the drop-index / studio-verify suites).
//
//   node tools/verify-provenance.mjs            human report
//   node tools/verify-provenance.mjs --json      machine JSON to stdout

import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { resolveOpsRoot } from './resolve-ops-root.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const opsRoot = resolveOpsRoot(codexRoot);
const asJson = process.argv.includes('--json');

function out(result) {
  if (asJson) { process.stdout.write(JSON.stringify(result, null, 2) + '\n'); return; }
  const tag = result.status === 'SKIP' ? '○ SKIP' : result.ok ? '● PASS' : '● FAIL';
  console.log(`\nCodex provenance gate — ${tag}`);
  for (const c of result.checks) {
    const dot = c.ok === null ? '○' : c.ok ? '✓' : '✗';
    console.log(`  ${dot} ${c.name.padEnd(28)} ${c.detail}`);
  }
  if (result.violations?.length) {
    console.log(`\n  ${result.violations.length} violation(s):`);
    for (const v of result.violations.slice(0, 40)) console.log(`    - ${v}`);
  }
  console.log('');
}

// --- skip cleanly when sources aren't in the workspace ---
const dropRoot = join(opsRoot, 'repos', 'akalynth', 'drop');
if (!existsSync(dropRoot)) {
  out({
    status: 'SKIP', ok: true, checks: [
      { name: 'workspace sources', ok: null, detail: `absent (${dropRoot}) — cannot verify in isolation` },
    ],
  });
  process.exit(0);
}

// --- regenerate the projection through the real pipeline (reuses the gate) ---
// project.mjs itself exits non-zero on a leak-check failure; surface that as a fail.
try {
  execFileSync(process.execPath, [join(codexRoot, 'tools', 'project.mjs')], { stdio: 'pipe' });
} catch (e) {
  out({ status: 'RUN', ok: false, checks: [{ name: 'project.mjs', ok: false, detail: 'pipeline exited non-zero (leak-check or error)' }],
        violations: [String(e.stderr || e.message).trim().split('\n').slice(-3).join(' / ')] });
  process.exit(1);
}

const receipt = JSON.parse(readFileSync(join(codexRoot, 'out', 'codex-publication.receipt.json'), 'utf8'));
const prov = receipt.source_provenance || [];
const violations = [];

// 1. leak-check
const leakOk = receipt.leak_check === 'pass';
if (!leakOk) violations.push(`leak_check = ${receipt.leak_check}`);

// 2. produced output
const hasEntries = receipt.public_entries > 0;
if (!hasEntries) violations.push('public_entries = 0 (projection produced nothing)');

// 3. zero asserted
const asserted = receipt.asserted_only || [];
if (asserted.length) violations.push(`asserted (no resolved source): ${asserted.join(', ')}`);

// 4. each fingerprint matches its source file on disk
let hashChecked = 0, hashBad = 0;
for (const p of prov) {
  if (p.source_kind === 'asserted') continue;        // already counted in (3)
  if (!p.source_ref || !p.evidence_sha256) { violations.push(`${p.id}: backed but missing source_ref/sha`); hashBad++; continue; }
  const abs = join(opsRoot, p.source_ref);
  if (!existsSync(abs)) { violations.push(`${p.id}: source_ref missing on disk (${p.source_ref})`); hashBad++; continue; }
  const actual = createHash('sha256').update(readFileSync(abs)).digest('hex');
  hashChecked++;
  if (actual !== p.evidence_sha256) { violations.push(`${p.id}: sha mismatch (live ${p.evidence_sha256.slice(0,12)} != disk ${actual.slice(0,12)})`); hashBad++; }
}

const ok = violations.length === 0;
out({
  status: 'RUN', ok, checks: [
    { name: 'leak_check',            ok: leakOk,        detail: receipt.leak_check },
    { name: 'public_entries',        ok: hasEntries,    detail: String(receipt.public_entries) },
    { name: 'zero asserted',         ok: asserted.length === 0, detail: `${asserted.length} asserted · ${receipt.receipt_backed} receipt + ${receipt.source_backed} source` },
    { name: 'fingerprints match src', ok: hashBad === 0, detail: `${hashChecked} verified, ${hashBad} bad` },
  ],
  violations,
});
process.exit(ok ? 0 : 1);
