#!/usr/bin/env node
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SPINE,
  pngSize,
  extractAssetsArray,
  resolveAssetFile,
  checkAssetProvenance,
  checkStyleContract,
  validateEntry,
  checkSchemaValid,
  checkNoProdBypass,
  replayLedger,
  loadAssets,
  runSpine,
} from '../lib/studio-verify.mjs';
import { readFileSync } from 'node:fs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const studioDir = join(codexRoot, 'studio');
const schemaPath = join(codexRoot, 'schema', 'codex-entry.schema.json');
const ledgerPath = join(studioDir, 'akalynth-ledger.js');

// ---- pngSize -------------------------------------------------------------
test('pngSize reads real PNG dimensions, rejects non-PNG', () => {
  const real = readFileSync(join(studioDir, 'swamp__bog_slime.png'));
  assert.deepEqual(pngSize(real), { w: 32, h: 32 });
  assert.equal(pngSize(Buffer.from('not a png at all 0123456789')), null);
});

// ---- registry extraction -------------------------------------------------
test('extractAssetsArray parses the ESM-in-.js registry as JSON', () => {
  const arr = extractAssetsArray(readFileSync(join(studioDir, 'codex-data.js'), 'utf8'));
  assert.ok(Array.isArray(arr) && arr.length > 100);
  assert.ok(arr.every((a) => typeof a.id === 'string'));
});

// ---- G14 provenance ------------------------------------------------------
test('checkAssetProvenance flags a missing file and passes a real one', () => {
  const bad = checkAssetProvenance(studioDir, [
    { id: 'ghost', file: 'does_not_exist_xyz.png', thumb: 'does_not_exist_xyz.png', source: 's', contract: 'c' },
  ]);
  assert.equal(bad.status, 'FAIL');
  assert.ok(bad.findings.some((f) => f.startsWith('MISSING_FILE:ghost')));

  const good = checkAssetProvenance(studioDir, [
    { id: 'slime', file: 'swamp__bog_slime.png', thumb: 'swamp__bog_slime.png', source: 'factory', contract: 'c' },
  ]);
  assert.equal(good.status, 'PASS');
});

test('resolveAssetFile resolves the logical sprites/ prefix to on-disk file', () => {
  const p = resolveAssetFile(studioDir, { file: 'sprites/swamp__bog_slime.png', thumb: 'swamp__bog_slime.png' });
  assert.ok(p && p.endsWith('swamp__bog_slime.png'));
});

// ---- G7 style contract ---------------------------------------------------
test('checkStyleContract catches a declared-vs-file dimension mismatch', () => {
  const bad = checkStyleContract(studioDir, [
    { id: 'wrongdim', file: 'swamp__bog_slime.png', thumb: 'swamp__bog_slime.png', w: 999, h: 999 },
  ]);
  assert.equal(bad.status, 'FAIL');
  assert.ok(bad.findings.some((f) => f.startsWith('DIM_MISMATCH:wrongdim')));

  const good = checkStyleContract(studioDir, [
    { id: 'okdim', file: 'swamp__bog_slime.png', thumb: 'swamp__bog_slime.png', w: 32, h: 32 },
  ]);
  assert.equal(good.status, 'PASS');
});

// ---- G8 schema valid -----------------------------------------------------
test('validateEntry enforces required, enum, const, and additionalProperties', () => {
  const schema = JSON.parse(readFileSync(schemaPath, 'utf8'));
  const valid = {
    schema_version: 'codex-entry/v1', id: 'ok-entry', type: 'place', title: 'T',
    authority: 'a', status: 'draft',
    visibility: { builder: true, operator: true, agent: true, public: false },
    lineage: { origin: 'test' },
  };
  assert.deepEqual(validateEntry(valid, schema), []);

  const badEnum = { ...valid, status: 'made-up-status' };
  assert.ok(validateEntry(badEnum, schema).some((e) => e.includes('enum')));

  const missing = { ...valid };
  delete missing.lineage;
  assert.ok(validateEntry(missing, schema).some((e) => e.includes('missing required "lineage"')));

  const extra = { ...valid, surprise: 1 };
  assert.ok(validateEntry(extra, schema).some((e) => e.includes('additional property "surprise"')));
});

test('checkSchemaValid runs over the live entries and returns a count', () => {
  const r = checkSchemaValid(join(codexRoot, 'entries'), schemaPath);
  assert.ok(r.detail.entries > 0);
  assert.equal(r.detail.entries, r.detail.valid + r.detail.invalid);
});

// ---- G10 no prod bypass --------------------------------------------------
test('checkNoProdBypass flags a forbidden prod write and a runtime import', () => {
  const dir = mkdtempSync(join(tmpdir(), 'studio-verify-'));
  try {
    const dirty = join(dir, 'dirty.mjs');
    writeFileSync(dirty, [
      "import x from '../apps/server/runtime.js';",
      "writeFileSync('/opt/akalynth/state.db', data);",
    ].join('\n'));
    const clean = join(dir, 'clean.mjs');
    writeFileSync(clean, "writeFileSync(join(codexRoot, 'evidence', 'ok.json'), '{}');\n");

    const bad = checkNoProdBypass([dirty]);
    assert.equal(bad.status, 'FAIL');
    assert.ok(bad.findings.some((f) => f.startsWith('PROD_WRITE')));
    assert.ok(bad.findings.some((f) => f.startsWith('RUNTIME_IMPORT')));

    assert.equal(checkNoProdBypass([clean]).status, 'PASS');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// ---- G1/G2 ledger replay (the headline: real, not simulated) -------------
test('replayLedger: a well-formed signed chain verifies PASS', async () => {
  const r = await replayLedger(ledgerPath);
  assert.equal(r.good_chain, 'PASS');
  assert.ok(r.signed_receipts >= 1, 'expected at least one signed receipt event');
});

test('replayLedger: a tampered chain is DETECTED (not simulated)', async () => {
  const r = await replayLedger(ledgerPath);
  assert.equal(r.tamper_detected, true);
  assert.deepEqual(r.findings, [], `unexpected replay findings: ${JSON.stringify(r.findings)}`);
});

// ---- orchestrator shape --------------------------------------------------
test('runSpine returns all 15 guarantees with 6 executable', async () => {
  const r = await runSpine({ codexRoot });
  assert.equal(r.spine.length, 15);
  assert.deepEqual(r.spine.map((s) => s.g), SPINE.map((s) => s.g));
  const exec = r.spine.filter((s) => s.executable).map((s) => s.key).sort();
  assert.deepEqual(exec, ['asset_provenance', 'chronicle_chain', 'no_prod_bypass', 'receipt_integrity', 'schema_valid', 'style_contract'].sort());
  // G1, G2, G10, G14 are data-independent invariants and must pass on the live repo
  const byKey = Object.fromEntries(r.spine.map((s) => [s.key, s.status]));
  assert.equal(byKey.receipt_integrity, 'PASS');
  assert.equal(byKey.chronicle_chain, 'PASS');
  assert.equal(byKey.no_prod_bypass, 'PASS');
  assert.equal(byKey.asset_provenance, 'PASS');
});

test('loadAssets resolves every registered asset to a real file (provenance invariant)', async () => {
  const assets = await loadAssets(studioDir);
  const r = checkAssetProvenance(studioDir, assets);
  assert.equal(r.detail.missing, 0, `unresolved assets: ${r.findings.filter((f) => f.startsWith('MISSING_FILE')).join(', ')}`);
});
