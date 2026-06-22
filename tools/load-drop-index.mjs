#!/usr/bin/env node
// Multiagent entry: optional unzip-if-needed, then emit full drop/ index JSON.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveOpsRoot } from './resolve-ops-root.mjs';
import { buildDropIndex } from '../lib/drop-index.mjs';
import { ensureUnzippedIfNeeded } from '../lib/drop-unzip.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const opsRoot = resolveOpsRoot(codexRoot);
const dropRoot = join(opsRoot, 'repos', 'akalynth', 'drop');

const args = process.argv.slice(2);
const doUnzip = args.includes('--unzip-if-needed');
const outIdx = args.indexOf('--out');
const outPath = outIdx >= 0 ? args[outIdx + 1] : null;

if (doUnzip) {
  const unzip = ensureUnzippedIfNeeded(dropRoot);
  if (!unzip.all_ok) {
    console.error('unzip-if-needed failed:', unzip.bundles.filter((b) => b.action === 'failed'));
    process.exit(1);
  }
  console.error(`unzip-if-needed: ${unzip.bundles.filter((b) => b.action === 'extracted').length} extracted, ${unzip.bundles.filter((b) => b.action === 'skipped').length} skipped`);
}

const index = buildDropIndex(dropRoot, opsRoot);
const json = JSON.stringify(index, null, 2);

if (outPath) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, json);
  console.error(`wrote ${outPath}`);
}

console.log(json);