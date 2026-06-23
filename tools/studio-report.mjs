#!/usr/bin/env node
// Akalynth Studio durable test report CLI — run the Studio suites + spine and
// emit a bounded, persistent artifact (gap_observability).
//
//   node tools/studio-report.mjs           write evidence/studio-report/<ts>.json (+ latest.json)
//   node tools/studio-report.mjs --stdout   print the report, do not write
//
// Exits non-zero if any suite fails or the executable spine has findings.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runReport } from '../lib/studio-report.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const stdout = process.argv.includes('--stdout');

// the studio suites — explicitly NOT studio-report.test.mjs (would recurse)
const suiteFiles = [
  'studio-verify.test.mjs',
  'studio-export.test.mjs',
  'studio-promote.test.mjs',
].map((f) => join(codexRoot, 'tests', f));

const stamp = new Date().toISOString();
const report = await runReport(codexRoot, {
  suiteFiles,
  nodeBin: process.execPath,
  stamp,
  nodeVersion: process.version,
});

if (stdout) {
  process.stdout.write(JSON.stringify(report, null, 2) + '\n');
  process.exit(report.ok ? 0 : 1);
}

const dir = join(codexRoot, 'evidence', 'studio-report');
mkdirSync(dir, { recursive: true });
const tsName = stamp.replace(/[-:]/g, '').replace(/\.\d{3}/, '');
writeFileSync(join(dir, `${tsName}.json`), JSON.stringify(report, null, 2));
writeFileSync(join(dir, 'latest.json'), JSON.stringify(report, null, 2));

const s = report.suites;
console.log(`Studio report — ${report.ok ? 'PASS' : 'FAIL'}`);
console.log(`  suites: ${s.pass}/${s.tests} pass, ${s.fail} fail${s.failures.length ? ` (${s.failures.slice(0, 5).join('; ')}${s.failures_truncated ? ` +${s.failures_truncated}` : ''})` : ''}`);
console.log(`  spine: ${report.spine.summary.passed}/${report.spine.summary.executable} executable pass, ${report.spine.summary.declared} declared`);
console.log(`  wrote evidence/studio-report/${tsName}.json (+ latest.json)`);
process.exit(report.ok ? 0 : 1);
