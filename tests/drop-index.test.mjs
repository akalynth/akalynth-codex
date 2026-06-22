#!/usr/bin/env node
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { resolveOpsRoot } from '../tools/resolve-ops-root.mjs';
import {
  buildDropIndex,
  assertIndexStable,
  AUTHORITY_REF,
  CORE_BUNDLE_RE,
  DROP_ROOT_REL,
} from '../lib/drop-index.mjs';
import { ensureBundleExtracted } from '../lib/drop-unzip.mjs';
import { verifyBundleChecksums } from '../lib/drop-manifest.mjs';
import { zipListEntries, DropZipTocError } from '../lib/drop-zip-toc.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const opsRoot = resolveOpsRoot(codexRoot);
const dropRoot = join(opsRoot, 'repos', 'akalynth', 'drop');
const scratch = process.env.DROP_INDEX_TEST_SCRATCH || '/tmp/grok-goal-730088af580a/implementer';
const loader = join(codexRoot, 'tools', 'load-drop-index.mjs');
const node = process.execPath;

test('buildDropIndex on live drop: smoke summary', () => {
  const index = buildDropIndex(dropRoot, opsRoot);
  assert.equal(index.authority_ref, AUTHORITY_REF);
  assert.equal(index.drop_root_rel, DROP_ROOT_REL);
  assert.equal(index.summary.core_bundles, 10);
  assert.equal(index.summary.extracted_core, 10);
  assert.ok(index.extras.sprite);
  assert.equal(index.extras.sprite.counts.prompts, 2);
  assert.equal(index.boundary.no_import_into_apps_packages, true);
});

test('buildDropIndex is stable across repeated loads', () => {
  const a = buildDropIndex(dropRoot, opsRoot);
  const b = buildDropIndex(dropRoot, opsRoot);
  assert.ok(assertIndexStable(a, b));
});

test('ensureBundleExtracted returns failed on corrupt zip', () => {
  const badDrop = join(scratch, 'bad-drop');
  rmSync(badDrop, { recursive: true, force: true });
  mkdirSync(badDrop, { recursive: true });
  writeFileSync(join(badDrop, 'AKALYNTH_GAME_LOOP_BIBLE_V1.zip'), 'not-a-valid-zip');
  const result = ensureBundleExtracted(badDrop, 'AKALYNTH_GAME_LOOP_BIBLE_V1');
  assert.equal(result.action, 'failed');
  assert.equal(result.reason, 'unzip_error');
});

test('zipListEntries isolates corrupt zip errors', () => {
  const badZip = join(scratch, 'bad-toc.zip');
  writeFileSync(badZip, 'not-a-valid-zip');
  assert.throws(() => zipListEntries(badZip), DropZipTocError);
});

test('verifyBundleChecksums passes on all live extracted bundles', () => {
  for (const name of readdirSync(dropRoot).filter((f) => CORE_BUNDLE_RE.test(f))) {
    const v = verifyBundleChecksums(join(dropRoot, name));
    assert.equal(v.ok, true, `${name}: ${JSON.stringify(v.mismatches)}`);
  }
});

test('load-drop-index.mjs CLI emits JSON on real drop', () => {
  const out = execFileSync(node, [loader], { encoding: 'utf8', cwd: opsRoot });
  const index = JSON.parse(out);
  assert.equal(index.summary.core_bundles, 10);
});