#!/usr/bin/env node
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, mkdirSync, readdirSync, rmSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { resolveOpsRoot } from '../tools/resolve-ops-root.mjs';
import { buildDropIndex, assertIndexStable, AUTHORITY_REF, CORE_BUNDLE_RE } from '../lib/drop-index.mjs';
import { ensureUnzippedIfNeeded, ensureBundleExtracted } from '../lib/drop-unzip.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const opsRoot = resolveOpsRoot(codexRoot);
const dropRoot = join(opsRoot, 'repos', 'akalynth', 'drop');
const scratch = process.env.DROP_INDEX_TEST_SCRATCH || '/tmp/grok-goal-730088af580a/implementer';

test('buildDropIndex on live drop: 10 core bundles, authority ref, prompts, sprite extra', () => {
  const index = buildDropIndex(dropRoot, opsRoot);
  assert.equal(index.authority_ref, AUTHORITY_REF);
  assert.equal(index.summary.core_bundles, 10);
  assert.equal(Object.keys(index.bundles).length, 10);
  for (const name of Object.keys(index.bundles)) {
    assert.match(name, CORE_BUNDLE_RE);
    assert.equal(index.bundles[name].kind, 'core');
    assert.equal(index.bundles[name].extracted, true);
  }
  assert.ok(index.summary.total_prompts >= 25 && index.summary.total_prompts <= 32,
    `prompts=${index.summary.total_prompts}`);
  assert.ok(index.extras.sprite, 'sprite extra missing');
  assert.equal(index.extras.sprite.unlanded, true);
  assert.equal(index.extras.sprite.counts.prompts, 2);
  assert.equal(index.boundary.no_import_into_apps_packages, true);
  assert.ok(index.index_sha256);
});

test('buildDropIndex is stable across repeated loads', () => {
  const a = buildDropIndex(dropRoot, opsRoot);
  const b = buildDropIndex(dropRoot, opsRoot);
  assert.ok(assertIndexStable(a, b));
  assert.equal(a.index_sha256, b.index_sha256);
});

test('ensureUnzippedIfNeeded is no-op when dirs already present', () => {
  const result = ensureUnzippedIfNeeded(dropRoot);
  assert.equal(result.all_ok, true);
  assert.ok(result.bundles.every((b) => b.action === 'skipped'));
});

test('ensureUnzippedIfNeeded extracts from zip-only temp copy', () => {
  const tempDrop = join(scratch, 'drop-zip-only');
  rmSync(tempDrop, { recursive: true, force: true });
  mkdirSync(tempDrop, { recursive: true });

  const zips = readdirSync(dropRoot).filter((f) => CORE_BUNDLE_RE.test(f.replace(/\.zip$/, '')) && f.endsWith('.zip'));
  assert.ok(zips.length >= 10);
  for (const z of zips) {
    cpSync(join(dropRoot, z), join(tempDrop, z));
  }

  const before = buildDropIndex(tempDrop, opsRoot);
  assert.equal(before.summary.extracted_core, 0);

  const unzip = ensureUnzippedIfNeeded(tempDrop);
  assert.equal(unzip.all_ok, true);
  assert.ok(unzip.bundles.some((b) => b.action === 'extracted'));

  const after = buildDropIndex(tempDrop, opsRoot);
  assert.equal(after.summary.core_bundles, 10);
  assert.equal(after.summary.extracted_core, 10);
  for (const name of Object.keys(after.bundles)) {
    const m = after.bundles[name].manifest;
    assert.ok(m.has_manifest || m.has_checksums, `${name} missing manifest`);
  }

  assert.ok(assertIndexStable(after, buildDropIndex(tempDrop, opsRoot)));
  assert.deepEqual(Object.keys(after.bundles).sort(), Object.keys(buildDropIndex(dropRoot, opsRoot).bundles).sort());
  for (const name of Object.keys(after.bundles)) {
    const m = after.bundles[name].manifest;
    if (m.entry_count > 0) {
      assert.ok(m.entry_count >= after.bundles[name].counts.docs + after.bundles[name].counts.data - 2,
        `${name} manifest entry_count vs dir counts`);
    }
  }
});

test('load-drop-index.mjs CLI emits JSON on real drop', () => {
  const loader = join(codexRoot, 'tools', 'load-drop-index.mjs');
  const node = process.execPath;
  const out = execFileSync(node, [loader], { encoding: 'utf8', cwd: opsRoot });
  const index = JSON.parse(out);
  assert.equal(index.summary.core_bundles, 10);
  assert.ok(index.bundles['AKALYNTH_GAMEPLAY_LANE_V1']);
});