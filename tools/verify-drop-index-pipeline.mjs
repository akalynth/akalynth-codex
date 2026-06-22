#!/usr/bin/env node
// Gating pipeline for drop full-index verification plan steps 1–2.
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { resolveOpsRoot } from './resolve-ops-root.mjs';
import {
  buildDropIndex,
  assertIndexStable,
  AUTHORITY_REF,
  CORE_BUNDLE_RE,
  compareIndexStructure,
} from '../lib/drop-index.mjs';
import { ensureUnzippedIfNeeded } from '../lib/drop-unzip.mjs';
import { auditGoalScope } from '../lib/drop-scope.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const opsRoot = resolveOpsRoot(codexRoot);
const dropRoot = join(opsRoot, 'repos', 'akalynth', 'drop');
const scratch = process.env.DROP_INDEX_SCRATCH || '/tmp/grok-goal-730088af580a/implementer';
const receipt = { artifact: 'AKALYNTH_DROP_INDEX_PIPELINE_V1', ok: true, steps: [] };

function fail(step, message, extra = {}) {
  receipt.ok = false;
  receipt.steps.push({ step, ok: false, message, ...extra });
  writeFileSync(join(scratch, 'pipeline-receipt.json'), JSON.stringify(receipt, null, 2));
  console.error(`FAIL [${step}]: ${message}`);
  process.exit(1);
}

function pass(step, message, extra = {}) {
  receipt.steps.push({ step, ok: true, message, ...extra });
  console.log(`OK   [${step}]: ${message}`);
}

mkdirSync(scratch, { recursive: true });

// Step 1 — live drop index
const live1 = buildDropIndex(dropRoot, opsRoot);
writeFileSync(join(scratch, 'drop-full-index.json'), JSON.stringify(live1, null, 2));
const live2 = buildDropIndex(dropRoot, opsRoot);
writeFileSync(join(scratch, 'drop-full-index-run2.json'), JSON.stringify(live2, null, 2));

if (live1.summary.core_bundles !== 10) fail('step1', `expected 10 bundles, got ${live1.summary.core_bundles}`);
if (live1.authority_ref !== AUTHORITY_REF) fail('step1', 'missing DROP_SOURCE_INDEX authority ref');
if (!live1.extras.sprite || live1.extras.sprite.counts.prompts !== 2) fail('step1', 'sprite extra not distinguished');
if (!assertIndexStable(live1, live2)) fail('step1', 'live index not stable across two loads');

pass('step1', 'live index captured', {
  bundles: live1.summary.core_bundles,
  prompts: live1.summary.total_prompts,
  docs: live1.summary.total_docs,
  index_sha256: live1.index_sha256,
});

// Informational: live tree may exceed zip archive (not a structure gate).
const zipOnlyProbe = join(scratch, 'drop-live-vs-zip-probe');
rmSync(zipOnlyProbe, { recursive: true, force: true });
mkdirSync(zipOnlyProbe, { recursive: true });
for (const z of readdirSync(dropRoot).filter((f) => f.endsWith('.zip') && CORE_BUNDLE_RE.test(f.replace(/\.zip$/, '')))) {
  cpSync(join(dropRoot, z), join(zipOnlyProbe, z));
}
const zipProbeIndex = buildDropIndex(zipOnlyProbe, opsRoot);
writeFileSync(join(scratch, 'live-vs-zip-note.json'), JSON.stringify({
  note: 'live tree may contain files beyond zip archive; zip-only pipeline is self-consistent',
  live_docs: live1.summary.total_docs,
  zip_toc_docs: zipProbeIndex.summary.total_docs,
  live_prompts: live1.summary.total_prompts,
  zip_toc_prompts: zipProbeIndex.summary.total_prompts,
}, null, 2));

// Step 2 — zip-only temp: pre-unzip zip_toc → unzip → post-extract compare
const tempDrop = join(scratch, 'drop-verify-zip-only');
rmSync(tempDrop, { recursive: true, force: true });
mkdirSync(tempDrop, { recursive: true });
for (const z of readdirSync(dropRoot).filter((f) => f.endsWith('.zip') && CORE_BUNDLE_RE.test(f.replace(/\.zip$/, '')))) {
  cpSync(join(dropRoot, z), join(tempDrop, z));
}

const preUnzip = buildDropIndex(tempDrop, opsRoot);
writeFileSync(join(scratch, 'pre-unzip-capture.json'), JSON.stringify(preUnzip, null, 2));

if (preUnzip.summary.zip_toc_core !== 10) fail('step2', `zip_toc_core expected 10, got ${preUnzip.summary.zip_toc_core}`);
if (preUnzip.summary.total_prompts < 1) fail('step2', 'zip_toc prompts empty');

const unzip = ensureUnzippedIfNeeded(tempDrop);
if (!unzip.all_ok) fail('step2', 'ensureUnzippedIfNeeded failed', { bundles: unzip.bundles.filter((b) => b.action === 'failed') });

const postUnzip = buildDropIndex(tempDrop, opsRoot);
writeFileSync(join(scratch, 'post-unzip-capture.json'), JSON.stringify(postUnzip, null, 2));

const cmp = compareIndexStructure(preUnzip, postUnzip);
writeFileSync(join(scratch, 'structure-compare.json'), JSON.stringify(cmp, null, 2));
if (!cmp.equal) fail('step2', 'pre/post structure mismatch', { diffs: cmp.diffs });

pass('step2', 'zip-only pre/post structure equal', {
  pre_prompts: preUnzip.summary.total_prompts,
  post_prompts: postUnzip.summary.total_prompts,
  extracted: unzip.bundles.filter((b) => b.action === 'extracted').length,
});

// Scope gate — goal commits + codex working tree must match .goal-deliverable-files.txt only
const scopeAudit = auditGoalScope(codexRoot, opsRoot);
writeFileSync(join(scratch, 'scope-evidence.json'), JSON.stringify(scopeAudit, null, 2));
writeFileSync(join(scratch, 'codex-git-porcelain.txt'), scopeAudit.untracked_outside_goal.codex.join('\n'));

if (!scopeAudit.ok) {
  fail('scope', 'goal scope violations', { violations: scopeAudit.violations });
}

pass('scope', 'goal delta confined to deliverable files', {
  deliverable_count: scopeAudit.deliverable_files.length,
  untracked_noted: scopeAudit.untracked_outside_goal,
});

writeFileSync(join(scratch, 'pipeline-receipt.json'), JSON.stringify(receipt, null, 2));
console.log(`receipt: ${join(scratch, 'pipeline-receipt.json')}`);