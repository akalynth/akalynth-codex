#!/usr/bin/env node
// Akalynth Studio verifier CLI — the runnable replacement for the simulated
// G1–G15 spine. Runs the executable checks, prints the 15-guarantee report,
// writes a bounded evidence artifact, and exits non-zero on any executable FAIL.
//
//   node tools/studio-verify.mjs            human report + evidence file
//   node tools/studio-verify.mjs --json     machine JSON to stdout
//   node tools/studio-verify.mjs --quiet    findings only, no evidence write
//   node tools/studio-verify.mjs --no-write  skip evidence artifact
//
// Boundary: reads codex source only; writes solely under codex evidence/.
// Does not touch the game runtime, run CI, or authorize deploy.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runSpine } from '../lib/studio-verify.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');

const argv = new Set(process.argv.slice(2));
const asJson = argv.has('--json');
const quiet = argv.has('--quiet');
const noWrite = argv.has('--no-write') || argv.has('--quiet');

const DOT = { PASS: '\x1b[32m●\x1b[0m', FAIL: '\x1b[31m●\x1b[0m', DECLARED: '\x1b[90m○\x1b[0m' };

function tsStamp() {
  // 20260623T094800Z — matches the evidence/ dir naming convention
  return new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

const report = await runSpine({ codexRoot });

if (asJson) {
  process.stdout.write(JSON.stringify(report, null, 2) + '\n');
  process.exit(report.ok ? 0 : 1);
}

if (!quiet) {
  console.log('\nAkalynth Studio — Verification spine · G1–G15  (executable)\n');
  for (const s of report.spine) {
    const dot = DOT[s.executable ? s.status : 'DECLARED'];
    const status = (s.executable ? s.status : 'DECLARED').padEnd(9);
    const detail = s.executable
      ? Object.entries(s.detail || {}).map(([k, v]) => `${k}=${v}`).join(' ')
      : (s.reason || '');
    console.log(`  ${dot} ${s.g.padEnd(3)} ${status} ${s.label.padEnd(22)} ${detail}`);
  }
}

// findings detail for any failing executable guarantee
const failing = report.spine.filter((s) => s.executable && s.status === 'FAIL');
for (const s of failing) {
  console.log(`\n  ${s.g} ${s.label} — ${s.findings.length} finding(s):`);
  for (const f of s.findings.slice(0, 25)) console.log(`    - ${f}`);
  if (s.findings.length > 25) console.log(`    ... (+${s.findings.length - 25} more)`);
}

const { summary } = report;
console.log(
  `\n  spine: ${summary.executable}/${summary.total} executable · ` +
  `${summary.passed} pass · ${summary.failed} fail · ${summary.declared} declared`
);

let evidenceRef = null;
if (!noWrite) {
  const dir = join(codexRoot, 'evidence', 'studio-verify');
  mkdirSync(dir, { recursive: true });
  const stamp = tsStamp();
  const out = join(dir, `${stamp}.json`);
  writeFileSync(out, JSON.stringify({ stamped_at: stamp, ...report }, null, 2));
  evidenceRef = join('evidence', 'studio-verify', `${stamp}.json`);
  console.log(`  evidence: ${evidenceRef}`);
}

console.log(report.ok ? '\n  RESULT: PASS — executable spine green.\n' : '\n  RESULT: FAIL — executable spine has findings above.\n');
process.exit(report.ok ? 0 : 1);
