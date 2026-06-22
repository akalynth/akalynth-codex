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
import { bundleCountsFromZipToc } from '../lib/drop-zip-toc.mjs';

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
  assert.ok(!('drop_root' in index));
  assert.equal(index.summary.core_bundles, 10);
  assert.equal(index.summary.extracted_core, 10);
  const gameplay = index.bundles['AKALYNTH_GAMEPLAY_LANE_V1'];
  assert.ok(gameplay.registry_files.includes('data/akalynthGameplayLaneRegistry.ts'));
  assert.equal(gameplay.counts_source, 'dir');
  assert.ok(index.extras.sprite);
  assert.equal(index.extras.sprite.counts.prompts, 2);
});

test('zip-only index uses zip_toc counts (non-zero) without extraction', () => {
  const tempDrop = zipOnlyTemp('drop-zip-only-before');
  const before = buildDropIndex(tempDrop, opsRoot);
  writeFileSync(join(scratch, 'pre-unzip-capture.json'), JSON.stringify(indexStructureSnapshot(before), null, 2));

  assert.equal(before.summary.core_bundles, 10);
  assert.equal(before.summary.zip_only_core, 10);
  assert.equal(before.summary.extracted_core, 0);
  assert.equal(before.summary.zip_toc_core, 10);
  assert.equal(before.summary.total_prompts, 27);
  assert.ok(before.summary.total_docs > 0);
  assert.ok(before.summary.total_data > 0);

  for (const b of Object.values(before.bundles)) {
    assert.equal(b.extracted, false);
    assert.equal(b.zip_present, true);
    assert.equal(b.counts_source, 'zip_toc');
    assert.ok(b.counts.prompts >= 0);
    assert.ok(b.manifest.has_manifest || b.manifest.has_checksums);
  }
});

test('buildDropIndex is stable across repeated loads', () => {
  const a = buildDropIndex(dropRoot, opsRoot);
  const b = buildDropIndex(dropRoot, opsRoot);
  assert.ok(assertIndexStable(a, b));
});

test('post-extract structure is identical to pre-unzip zip_toc capture', () => {
  const tempDrop = zipOnlyTemp('drop-zip-only');
  const preCapture = buildDropIndex(tempDrop, opsRoot);
  writeFileSync(join(scratch, 'pre-unzip-capture.json'), JSON.stringify(preCapture, null, 2));

  const unzip = ensureUnzippedIfNeeded(tempDrop);
  assert.equal(unzip.all_ok, true);
  for (const r of unzip.bundles.filter((b) => b.action === 'extracted')) {
    assert.equal(r.checksum_ok, true);
  }

  const postExtract = buildDropIndex(tempDrop, opsRoot);
  writeFileSync(join(scratch, 'post-unzip-capture.json'), JSON.stringify(postExtract, null, 2));

  const cmp = compareIndexStructure(preCapture, postExtract);
  writeFileSync(join(scratch, 'structure-compare.json'), JSON.stringify(cmp, null, 2));
  assert.equal(cmp.equal, true, `structure diffs: ${JSON.stringify(cmp.diffs)}`);
  assert.equal(postExtract.summary.extracted_core, 10);
  assert.equal(postExtract.summary.total_prompts, preCapture.summary.total_prompts);
});

test('CLI --unzip-if-needed on zip-only temp: pre capture matches post extract', () => {
  const tempDrop = zipOnlyTemp('drop-cli-zip-only');
  const preCapture = buildDropIndex(tempDrop, opsRoot);
  const outPath = join(scratch, 'cli-unzip-index.json');

  execFileSync(node, [loader, '--drop-root', tempDrop, '--unzip-if-needed', '--out', outPath], {
    encoding: 'utf8',
    cwd: opsRoot,
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  const postExtract = JSON.parse(readFileSync(outPath, 'utf8'));
  const cmp = compareIndexStructure(preCapture, postExtract);
  assert.equal(cmp.equal, true, `CLI structure diffs: ${JSON.stringify(cmp.diffs)}`);
});

test('zip_toc counts match post-extract dir counts for each bundle', () => {
  const tempDrop = zipOnlyTemp('drop-zip-toc-vs-dir');
  ensureUnzippedIfNeeded(tempDrop);
  const index = buildDropIndex(tempDrop, opsRoot);
  for (const name of Object.keys(index.bundles)) {
    const zipPath = join(tempDrop, `${name}.zip`);
    const zipCounts = bundleCountsFromZipToc(zipPath, name);
    assert.deepEqual(zipCounts, index.bundles[name].counts, `${name} zip_toc vs post-extract dir`);
  }
});

test('live tree may exceed zip archive (documented, not structure-equal)', () => {
  const live = buildDropIndex(dropRoot, opsRoot);
  const tempDrop = zipOnlyTemp('drop-live-vs-zip');
  const zipOnly = buildDropIndex(tempDrop, opsRoot);
  assert.ok(live.summary.total_docs >= zipOnly.summary.total_docs);
  const cmp = compareIndexStructure(live, zipOnly);
  writeFileSync(join(scratch, 'live-vs-zip-structure.json'), JSON.stringify({
    live_docs: live.summary.total_docs,
    zip_docs: zipOnly.summary.total_docs,
    structure_equal: cmp.equal,
    diffs: cmp.diffs,
  }, null, 2));
  // Live tree can diverge from zip archive; zip-only path is self-consistent.
  assert.equal(compareIndexStructure(zipOnly, buildDropIndex(tempDrop, opsRoot)).equal, true);
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