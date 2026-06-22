// Pure read-only index builder for repos/akalynth/drop/ training corpus.
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parseDropRoles } from './drop-roles.mjs';
import { readBundleManifest } from './drop-manifest.mjs';

export const CORE_BUNDLE_RE = /^AKALYNTH_.*_V1$/;
export const AUTHORITY_REF = 'repos/akalynth/docs/DROP_SOURCE_INDEX.md';

function countFiles(dir, predicate) {
  if (!existsSync(dir)) return 0;
  let n = 0;
  const walk = (p) => {
    for (const ent of readdirSync(p, { withFileTypes: true })) {
      const fp = join(p, ent.name);
      if (ent.isDirectory()) walk(fp);
      else if (predicate(fp, ent.name)) n++;
    }
  };
  walk(dir);
  return n;
}

function listRelativeFiles(dir, base) {
  if (!existsSync(dir)) return [];
  const out = [];
  const walk = (p) => {
    for (const ent of readdirSync(p, { withFileTypes: true })) {
      const fp = join(p, ent.name);
      if (ent.isDirectory()) walk(fp);
      else out.push(relative(base, fp));
    }
  };
  walk(dir);
  return out.sort();
}

function bundleCounts(bundleDir, bundleName) {
  const isAssetLibrary = bundleName === 'AKALYNTH_ASSET_LIBRARY_V1';
  const docsDir = isAssetLibrary ? join(bundleDir, 'markdown') : join(bundleDir, 'docs');
  const docs = countFiles(docsDir, (p) => p.endsWith('.md'));
  const data = countFiles(join(bundleDir, 'data'), (p) => p.endsWith('.json'));
  const prompts = countFiles(join(bundleDir, 'prompts'), () => true);
  const registries = countFiles(join(bundleDir, 'registry'), () => true)
    + (isAssetLibrary ? 0 : countFiles(join(bundleDir, 'data'), (p) => /Registry\.ts$/.test(p)));
  const images = isAssetLibrary ? countFiles(join(bundleDir, 'images'), () => true) : 0;
  const markdown = isAssetLibrary ? docs : 0;
  const manifestRoot = existsSync(join(bundleDir, 'manifests'))
    ? join(bundleDir, 'manifests')
    : bundleDir;
  const manifests = readdirSync(manifestRoot).filter((f) =>
    /^(MANIFEST\.(md|csv)|CHECKSUMS_SHA256\.txt|SHA256SUMS\.txt|SUMMARY\.json)$/.test(f)
  ).length;
  return { docs, data, prompts, registries, manifests, images, markdown };
}

function summarizeBundle(bundleDir, bundleName, roles) {
  const extracted = existsSync(bundleDir) && statSync(bundleDir).isDirectory();
  const zipPath = join(bundleDir, '..', `${bundleName}.zip`);
  const zip_present = existsSync(zipPath);
  const counts = extracted ? bundleCounts(bundleDir, bundleName) : {
    docs: 0, data: 0, prompts: 0, registries: 0, manifests: 0, images: 0, markdown: 0,
  };
  const manifest = extracted ? readBundleManifest(bundleDir) : {
    files: {}, has_manifest: false, has_checksums: false, entry_count: 0,
  };
  const readmePath = join(bundleDir, 'README.md');
  const readme = extracted && existsSync(readmePath)
    ? { present: true, bytes: statSync(readmePath).size }
    : { present: false, bytes: 0 };
  const registryDir = join(bundleDir, 'registry');
  const registry_files = extracted ? listRelativeFiles(registryDir, bundleDir) : [];
  return {
    kind: 'core',
    role: roles[bundleName] || null,
    extracted,
    zip_present,
    zip_path: zip_present ? relative(join(bundleDir, '..', '..'), zipPath) : null,
    counts,
    manifest,
    readme,
    registry_files,
    intake_ref: `docs/asset-decisions/${bundleName.replace(/_V1$/, '_SOURCE_INTAKE_V1')}/`,
  };
}

function summarizeSprite(spriteDir, dropRoot) {
  const extracted = existsSync(spriteDir) && statSync(spriteDir).isDirectory();
  const zip_present = existsSync(join(dropRoot, 'sprite.zip'));
  const prompts = extracted ? countFiles(join(spriteDir, 'prompts'), () => true) : 0;
  return {
    kind: 'extra',
    unlanded: true,
    role: 'Classic-32 sprite prompt extras (2 txt files); not a core training bundle',
    extracted,
    zip_present,
    counts: { docs: 0, data: 0, prompts, registries: 0, manifests: 0, images: 0, markdown: 0 },
    note: 'Excluded from verify-drop-landing core bundle set',
  };
}

function summarizeFileExtra(dropRoot, name) {
  const path = join(dropRoot, name);
  if (!existsSync(path)) return null;
  const st = statSync(path);
  return {
    kind: 'extra',
    role: name.endsWith('.tar.gz') ? 'Ops artifact' : 'Visual reference',
    extracted: false,
    zip_present: false,
    bytes: st.size,
  };
}

function stableBody(index) {
  const { generated_at, index_sha256, ...rest } = index;
  return rest;
}

export function buildDropIndex(dropRoot, opsRoot) {
  const authorityPath = join(opsRoot, 'repos', 'akalynth', 'docs', 'DROP_SOURCE_INDEX.md');
  const roles = parseDropRoles(authorityPath);

  const bundleNames = readdirSync(dropRoot)
    .filter((f) => CORE_BUNDLE_RE.test(f) && statSync(join(dropRoot, f)).isDirectory())
    .sort();

  const bundles = {};
  for (const name of bundleNames) {
    bundles[name] = summarizeBundle(join(dropRoot, name), name, roles);
  }

  const extras = {};
  if (existsSync(join(dropRoot, 'sprite'))) {
    extras.sprite = summarizeSprite(join(dropRoot, 'sprite'), dropRoot);
  }
  for (const name of ['contact_sheet_named.png', 'wops-fleet-installer.tar.gz']) {
    const item = summarizeFileExtra(dropRoot, name);
    if (item) extras[name] = item;
  }

  const coreList = Object.values(bundles);
  const summary = {
    core_bundles: coreList.length,
    total_docs: coreList.reduce((n, b) => n + b.counts.docs, 0),
    total_data: coreList.reduce((n, b) => n + b.counts.data, 0),
    total_prompts: coreList.reduce((n, b) => n + b.counts.prompts, 0),
    total_registries: coreList.reduce((n, b) => n + b.counts.registries, 0),
    extracted_core: coreList.filter((b) => b.extracted).length,
    zip_only_core: coreList.filter((b) => !b.extracted && b.zip_present).length,
  };

  const body = {
    artifact: 'AKALYNTH_DROP_FULL_INDEX_V1',
    authority_ref: AUTHORITY_REF,
    drop_root: dropRoot,
    boundary: {
      runtime_authority: false,
      no_import_into_apps_packages: true,
      promotion_requires_reviewed_lane: true,
    },
    summary,
    bundles,
    extras,
  };

  body.index_sha256 = createHash('sha256').update(JSON.stringify(body)).digest('hex');
  return body;
}

export function assertIndexStable(a, b) {
  const sa = JSON.stringify(stableBody(a));
  const sb = JSON.stringify(stableBody(b));
  return sa === sb;
}