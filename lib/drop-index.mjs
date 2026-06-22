// Pure read-only index builder for repos/akalynth/drop/ training corpus.
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { parseDropRoles } from './drop-roles.mjs';
import { readBundleManifest } from './drop-manifest.mjs';

export const CORE_BUNDLE_RE = /^AKALYNTH_.*_V1$/;
export const AUTHORITY_REF = 'repos/akalynth/docs/DROP_SOURCE_INDEX.md';
export const DROP_ROOT_REL = 'repos/akalynth/drop';

export const KNOWN_ZIP_LIVE_DRIFT = {
  AKALYNTH_ASSET_LIBRARY_V1: { counts: ['docs', 'markdown'] },
};

export function listCoreBundleNames(dropRoot) {
  const names = new Set();
  for (const f of readdirSync(dropRoot)) {
    if (CORE_BUNDLE_RE.test(f)) {
      try {
        if (statSync(join(dropRoot, f)).isDirectory()) names.add(f);
      } catch { /* skip */ }
    }
    if (CORE_BUNDLE_RE.test(f.replace(/\.zip$/, '')) && f.endsWith('.zip')) {
      names.add(f.replace(/\.zip$/, ''));
    }
  }
  return [...names].sort();
}

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

function listRelativeFiles(dir, base, predicate = () => true) {
  if (!existsSync(dir)) return [];
  const out = [];
  const walk = (p) => {
    for (const ent of readdirSync(p, { withFileTypes: true })) {
      const fp = join(p, ent.name);
      if (ent.isDirectory()) walk(fp);
      else if (predicate(fp, ent.name)) {
        out.push(fp.slice(base.length + 1).replace(/\\/g, '/'));
      }
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
  const manifests = existsSync(manifestRoot)
    ? readdirSync(manifestRoot).filter((f) =>
      /^(MANIFEST\.(md|csv)|CHECKSUMS_SHA256\.txt|SHA256SUMS\.txt|SUMMARY\.json)$/.test(f)
    ).length
    : 0;
  return { docs, data, prompts, registries, manifests, images, markdown };
}

function listRegistryFiles(bundleDir, bundleName) {
  const isAssetLibrary = bundleName === 'AKALYNTH_ASSET_LIBRARY_V1';
  const fromRegistry = listRelativeFiles(join(bundleDir, 'registry'), bundleDir);
  const fromData = isAssetLibrary ? [] : listRelativeFiles(
    join(bundleDir, 'data'),
    bundleDir,
    (p) => /Registry\.ts$/.test(p),
  );
  return [...fromRegistry, ...fromData].sort();
}

function summarizeBundle(dropRoot, bundleName, roles) {
  const bundleDir = join(dropRoot, bundleName);
  const extracted = existsSync(bundleDir) && statSync(bundleDir).isDirectory();
  const zip_present = existsSync(join(dropRoot, `${bundleName}.zip`));
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
  const registry_files = extracted ? listRegistryFiles(bundleDir, bundleName) : [];
  return {
    kind: 'core',
    role: roles[bundleName] || null,
    extracted,
    zip_present,
    zip_path: zip_present ? `${DROP_ROOT_REL}/${bundleName}.zip` : null,
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
  const { index_sha256, ...rest } = index;
  return rest;
}

export function indexStructureSnapshot(index) {
  const bundles = {};
  for (const [name, b] of Object.entries(index.bundles || {})) {
    bundles[name] = {
      kind: b.kind,
      role: b.role,
      extracted: b.extracted,
      zip_present: b.zip_present,
      zip_path: b.zip_path,
      counts: { ...b.counts },
      manifest: {
        has_manifest: b.manifest?.has_manifest,
        has_checksums: b.manifest?.has_checksums,
        entry_count: b.manifest?.entry_count,
        files: b.manifest?.files,
      },
      registry_files: [...(b.registry_files || [])],
      readme: b.readme,
    };
  }
  return {
    authority_ref: index.authority_ref,
    drop_root_rel: index.drop_root_rel,
    summary: { ...index.summary },
    bundles,
    extras: Object.fromEntries(
      Object.entries(index.extras || {}).map(([k, v]) => [k, {
        kind: v.kind,
        unlanded: v.unlanded,
        role: v.role,
        extracted: v.extracted,
        zip_present: v.zip_present,
        counts: v.counts ? { ...v.counts } : undefined,
        bytes: v.bytes,
      }]),
    ),
  };
}

export function compareIndexStructure(reference, candidate, { drift = KNOWN_ZIP_LIVE_DRIFT } = {}) {
  const diffs = [];
  const refSnap = indexStructureSnapshot(reference);
  const candSnap = indexStructureSnapshot(candidate);

  if (refSnap.authority_ref !== candSnap.authority_ref) {
    diffs.push({ field: 'authority_ref', reference: refSnap.authority_ref, candidate: candSnap.authority_ref });
  }

  const refKeys = Object.keys(refSnap.bundles).sort();
  const candKeys = Object.keys(candSnap.bundles).sort();
  if (JSON.stringify(refKeys) !== JSON.stringify(candKeys)) {
    diffs.push({ field: 'bundle_keys', reference: refKeys, candidate: candKeys });
    return { equal: false, diffs };
  }

  for (const name of refKeys) {
    const r = refSnap.bundles[name];
    const c = candSnap.bundles[name];
    const allowedCountFields = new Set((drift[name] || {}).counts || []);

    for (const key of ['kind', 'role', 'zip_present', 'zip_path']) {
      if (r[key] !== c[key]) diffs.push({ bundle: name, field: key, reference: r[key], candidate: c[key] });
    }
    if (JSON.stringify(r.registry_files) !== JSON.stringify(c.registry_files)) {
      diffs.push({ bundle: name, field: 'registry_files', reference: r.registry_files, candidate: c.registry_files });
    }
    if (r.extracted && c.extracted && JSON.stringify(r.manifest.files) !== JSON.stringify(c.manifest.files)) {
      diffs.push({ bundle: name, field: 'manifest.files', reference: r.manifest.files, candidate: c.manifest.files });
    }
    for (const [ck, cv] of Object.entries(c.counts || {})) {
      const rv = r.counts?.[ck];
      if (rv !== cv && !allowedCountFields.has(ck)) {
        diffs.push({ bundle: name, field: `counts.${ck}`, reference: rv, candidate: cv });
      }
    }
    if (allowedCountFields.size) {
      for (const ck of allowedCountFields) {
        const rv = r.counts?.[ck];
        const cv = c.counts?.[ck];
        if (rv != null && cv != null && rv !== cv && Math.abs(rv - cv) > 1) {
          diffs.push({ bundle: name, field: `counts.${ck}`, reference: rv, candidate: cv, note: 'drift_exceeded' });
        }
      }
    }
  }

  return { equal: diffs.length === 0, diffs };
}

export function buildDropIndex(dropRoot, opsRoot) {
  const authorityPath = join(opsRoot, 'repos', 'akalynth', 'docs', 'DROP_SOURCE_INDEX.md');
  const roles = parseDropRoles(authorityPath);
  const bundleNames = listCoreBundleNames(dropRoot);

  const bundles = {};
  for (const name of bundleNames) {
    bundles[name] = summarizeBundle(dropRoot, name, roles);
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
    drop_root_rel: DROP_ROOT_REL,
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
  return JSON.stringify(stableBody(a)) === JSON.stringify(stableBody(b));
}