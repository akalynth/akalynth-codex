#!/usr/bin/env node
// Akalynth Codex — DROP LANDING verifier.
// Proves every drop bundle in repos/akalynth/drop/ has "landed" in the Codex:
// i.e. at least one Codex object names the bundle as its lineage.origin or
// world.implementation.slice (the PRIMARY object), and ideally carries the
// bundle's evidence (MANIFEST/CHECKSUMS) + design_refs. Writes a receipt with
// per-bundle provenance. Exits non-zero if any bundle is unlanded.
import { readFileSync, readdirSync, writeFileSync, mkdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const opsRoot = join(codexRoot, '..');
const dropDir = join(opsRoot, 'repos', 'akalynth', 'drop');
const entriesDir = join(codexRoot, 'entries');
const receiptDir = join(opsRoot, 'receipts', 'AKALYNTH_DROP_LANDING_V1');

const bundles = readdirSync(dropDir).filter((f) => {
  try { return statSync(join(dropDir, f)).isDirectory(); } catch { return false; }
}).sort();

const entries = readdirSync(entriesDir).filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(entriesDir, f), 'utf8')));

const report = [];
for (const b of bundles) {
  const needle = `repos/akalynth/drop/${b}/`;
  const primary = [], referencing = [];
  let evidence = false, designRefs = false;
  for (const e of entries) {
    const isPrimary = e.lineage?.origin === b || e.world?.implementation?.slice === b;
    const blob = JSON.stringify(e);
    const refs = blob.includes(needle);
    if (isPrimary) primary.push(e.id);
    if (refs && !isPrimary) referencing.push(e.id);
    if (isPrimary) {
      if ((e.evidence || []).some((v) => String(v.ref).includes(needle))) evidence = true;
      if ((e.world?.design_refs || []).some((r) => String(r).includes(needle))) designRefs = true;
    }
  }
  report.push({
    bundle: b,
    landed: primary.length > 0,
    primary_objects: primary,
    referencing_objects: referencing,
    has_evidence: evidence,
    has_design_refs: designRefs,
  });
}

const landed = report.filter((r) => r.landed).length;
const unlanded = report.filter((r) => !r.landed);

const receipt = {
  artifact: 'AKALYNTH_DROP_LANDING_V1',
  generated_by: 'codex/tools/verify-drop-landing.mjs',
  drop_dir: 'repos/akalynth/drop',
  bundles_total: bundles.length,
  bundles_landed: landed,
  all_landed: unlanded.length === 0,
  rule: 'a bundle is landed iff >=1 Codex object names it as lineage.origin or world.implementation.slice',
  report,
};
receipt.report_sha256 = createHash('sha256').update(JSON.stringify(receipt.report)).digest('hex');

mkdirSync(receiptDir, { recursive: true });
writeFileSync(join(receiptDir, 'receipt.json'), JSON.stringify(receipt, null, 2));

console.log('Akalynth Codex — drop landing verification');
console.log(`  drop bundles   : ${bundles.length}`);
console.log(`  landed         : ${landed}/${bundles.length}`);
for (const r of report) {
  console.log(`  ${r.landed ? '✓' : '✗'} ${r.bundle.padEnd(42)} primary=[${r.primary_objects.join(',') || 'NONE'}]` +
    `${r.has_evidence ? ' +evidence' : ''}${r.has_design_refs ? ' +design_refs' : ''}`);
}
console.log(`  receipt        : receipts/AKALYNTH_DROP_LANDING_V1/receipt.json`);
if (unlanded.length) { console.error('  UNLANDED:', unlanded.map((r) => r.bundle)); process.exit(1); }
console.log('  ALL 10 DROP BUNDLES LANDED ✓');
