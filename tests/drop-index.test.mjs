#!/usr/bin/env node
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { resolveOpsRoot } from '../tools/resolve-ops-root.mjs';
import {
  buildDropIndex,
  assertIndexStable,
  AUTHORITY_REF,
  CORE_BUNDLE_RE,
  compareIndexStructure,
  indexStructureSnapshot,
  DROP_ROOT_REL,
} from '../lib/drop-index.mjs';
import { ensureUnzippedIfNeeded, ensureBundleExtracted } from '../lib/drop-unzip.mjs';
import { verifyBundleChecksums } from '../lib/drop-manifest.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const opsRoot = resolveOpsRoot(codexRoot);
const dropRoot = join(opsRoot, 'repos', 'akalynth', 'drop');
const scratch = process.env.DROP_INDEX_TEST_SCRATCH || '/tmp/grok-goal-730088af580a/implementer';
const loader = join(codexRoot, 'tools', 'load-drop-index.mjs');
const node = process.execPath;

function zipOnlyTemp(name) {
  const tempDrop = join(scratch, name);
  rmSync(tempDrop, { recursive: true, force: true });
  mkdirSync(tempDrop, { recursive: true });
  for (const z of readdirSync(dropRoot).filter((f) => f.endsWith('.zip') && CORE_BUNDLE_RE.test(f.replace(/\.zip$/, '')))) {
    cpSync(join(dropRoot, z), join(tempDrop, z));
  }
  return tempDrop;
}

test('buildDropIndex on live drop: 10 core bundles, portable paths, sprite extra', () => {
  const index = buildDropIndex(dropRoot, opsRoot);
  assert.equal(index.authority_ref, AUTHORITY_REF);
  assert.equal(index.drop_root_rel, DROP_ROOT_REL);
  assert.ok(!('drop_root' in index), 'absolute drop_root must not appear');
  assert.equal(index.summary.core_bundles, 10);
  assert.equal(Object.keys(index.bundles).length, 10);
  for (const name of Object.keys(index.bundles)) {
    assert.match(name, CORE_BUNDLE_RE);
    assert.equal(index.bundles[name].kind, 'core');
    assert.equal(index.bundles[name].extracted, true);
    assert.match(index.bundles[name].zip_path, /^repos\/akalynth\/drop\//);
    for (const mf of Object.values(index.bundles[name].manifest.files || {})) {
      assert.ok(!mf.rel_path.startsWith('/'), `absolute manifest path: ${mf.rel_path}`);
    }
  }
  const gameplay = index.bundles['AKALYNTH_GAMEPLAY_LANE_V1'];
  assert.ok(gameplay.registry_files.includes('data/akalynthGameplayLaneRegistry.ts'));
  assert.equal(gameplay.counts.registries, 1);
  assert.ok(index.extras.sprite);
  assert.equal(index.extras.sprite.counts.prompts, 2);
  assert.equal(index.boundary.no_import_into_apps_packages, true);
});

test('buildDropIndex lists zip-only bundles before extraction', () => {
  const tempDrop = zipOnlyTemp('drop-zip-only-before');
  const before = buildDropIndex(tempDrop, opsRoot);
  assert.equal(before.summary.core_bundles, 10);
  assert.equal(before.summary.zip_only_core, 10);
  assert.equal(before.summary.extracted_core, 0);
  for (const b of Object.values(before.bundles)) {
    assert.equal(b.extracted, false);
    assert.equal(b.zip_present, true);
  }
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

test('ensureUnzippedIfNeeded extracts zip-only temp with checksum integrity', () => {
  const tempDrop = zipOnlyTemp('drop-zip-only');
  const preCapture = buildDropIndex(dropRoot, opsRoot);
  const before = buildDropIndex(tempDrop, opsRoot);
  writeFileSync(join(scratch, 'pre-unzip-capture.json'), JSON.stringify(indexStructureSnapshot(before), null, 2));

  const unzip = ensureUnzippedIfNeeded(tempDrop);
  assert.equal(unzip.all_ok, true);
  assert.ok(unzip.bundles.some((b) => b.action === 'extracted'));
  for (const r of unzip.bundles.filter((b) => b.action === 'extracted')) {
    assert.equal(r.checksum_ok, true, `${r.bundle} checksum failed`);
    assert.ok(r.checksum_verified > 0);
  }

  const after = buildDropIndex(tempDrop, opsRoot);
  assert.equal(after.summary.core_bundles, 10);
  assert.equal(after.summary.extracted_core, 10);

  const cmp = compareIndexStructure(preCapture, after);
  writeFileSync(join(scratch, 'structure-compare.json'), JSON.stringify(cmp, null, 2));
  assert.equal(cmp.equal, true, `structure diffs: ${JSON.stringify(cmp.diffs)}`);

  assert.ok(assertIndexStable(after, buildDropIndex(tempDrop, opsRoot)));
});

test('CLI --unzip-if-needed on zip-only temp produces matching structure', () => {
  const tempDrop = zipOnlyTemp('drop-cli-zip-only');
  const preCapture = buildDropIndex(dropRoot, opsRoot);
  const outPath = join(scratch, 'cli-unzip-index.json');

  execFileSync(node, [loader, '--drop-root', tempDrop, '--unzip-if-needed', '--out', outPath], {
    encoding: 'utf8',
    cwd: opsRoot,
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  const after = JSON.parse(readFileSync(outPath, 'utf8'));
  const cmp = compareIndexStructure(preCapture, after);
  assert.equal(cmp.equal, true, `CLI structure diffs: ${JSON.stringify(cmp.diffs)}`);
});

test('ensureBundleExtracted returns failed on corrupt zip', () => {
  const badDrop = join(scratch, 'bad-drop');
  rmSync(badDrop, { recursive: true, force: true });
  mkdirSync(badDrop, { recursive: true });
  writeFileSync(join(badDrop, 'AKALYNTH_GAME_LOOP_BIBLE_V1.zip'), 'not-a-valid-zip');
  const result = ensureBundleExtracted(badDrop, 'AKALYNTH_GAME_LOOP_BIBLE_V1');
  assert.equal(result.action, 'failed');
  assert.equal(result.reason, 'unzip_error');
  const batch = ensureUnzippedIfNeeded(badDrop, ['AKALYNTH_GAME_LOOP_BIBLE_V1']);
  assert.equal(batch.all_ok, false);
});

test('verifyBundleChecksums passes on all live extracted bundles', () => {
  for (const name of readdirSync(dropRoot).filter((f) => CORE_BUNDLE_RE.test(f))) {
    const bundleDir = join(dropRoot, name);
    const v = verifyBundleChecksums(bundleDir);
    assert.equal(v.ok, true, `${name}: ${JSON.stringify(v.mismatches)}`);
    assert.ok(v.verified > 0);
  }
});

test('load-drop-index.mjs CLI emits JSON on real drop', () => {
  const out = execFileSync(node, [loader], { encoding: 'utf8', cwd: opsRoot });
  const index = JSON.parse(out);
  assert.equal(index.summary.core_bundles, 10);
  assert.equal(index.drop_root_rel, DROP_ROOT_REL);
});