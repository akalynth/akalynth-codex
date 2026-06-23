#!/usr/bin/env node
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseTap, assembleReport } from '../lib/studio-report.mjs';

// Pure tests only — never invoke runSuites/runReport here (they spawn node
// --test, which would re-enter the suite set and is slow).

test('parseTap extracts counts and real failing test names (not file rollups)', () => {
  const out = [
    'not ok 1 - tests/studio-promote.test.mjs',   // file rollup — must be dropped
    'not ok 2 - reject writes a review but issues no permit',
    '# tests 22', '# pass 21', '# fail 1',
  ].join('\n');
  const r = parseTap(out);
  assert.equal(r.tests, 22);
  assert.equal(r.pass, 21);
  assert.equal(r.fail, 1);
  assert.deepEqual(r.failures, ['reject writes a review but issues no permit']);
});

const spineFixture = {
  spine: [
    { g: 'G7', key: 'style_contract', label: 'Style contract', executable: true, status: 'FAIL', findings: Array(17).fill('DIM_MISMATCH:x') },
    { g: 'G3', key: 'protocol_sync', label: 'Protocol sync', executable: false, status: 'DECLARED', findings: [] },
  ],
  summary: { total: 2, executable: 1, passed: 0, failed: 1, declared: 1 },
  ok: false,
};

test('assembleReport is BOUNDED — finding counts, never raw finding dumps', () => {
  const r = assembleReport({ suites: { files: ['a'], tests: 1, pass: 1, fail: 0, failures: [] }, spine: spineFixture, stamp: 's', nodeVersion: 'v20' });
  const g7 = r.spine.guarantees.find((g) => g.g === 'G7');
  assert.equal(g7.finding_count, 17);
  assert.equal('findings' in g7, false, 'raw findings must not cross into the report');
  // whole report serializes small regardless of finding volume
  assert.ok(JSON.stringify(r).length < 2000);
});

test('assembleReport caps the failure list and records truncation', () => {
  const failures = Array.from({ length: 50 }, (_, i) => `fail ${i}`);
  const r = assembleReport({ suites: { files: ['a'], tests: 50, pass: 0, fail: 50, failures }, spine: spineFixture, stamp: 's', nodeVersion: 'v20', maxFailures: 20 });
  assert.equal(r.suites.failures.length, 20);
  assert.equal(r.suites.failures_truncated, 30);
});

test('ok is true only when suites pass AND spine ok', () => {
  const passSpine = { ...spineFixture, ok: true, summary: { ...spineFixture.summary, failed: 0 } };
  assert.equal(assembleReport({ suites: { files: [], tests: 1, pass: 1, fail: 0, failures: [] }, spine: passSpine, stamp: 's', nodeVersion: 'v' }).ok, true);
  assert.equal(assembleReport({ suites: { files: [], tests: 1, pass: 0, fail: 1, failures: ['x'] }, spine: passSpine, stamp: 's', nodeVersion: 'v' }).ok, false);
  assert.equal(assembleReport({ suites: { files: [], tests: 1, pass: 1, fail: 0, failures: [] }, spine: spineFixture, stamp: 's', nodeVersion: 'v' }).ok, false);
});
