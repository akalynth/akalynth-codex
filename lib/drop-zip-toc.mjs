// Read-only zip TOC + in-zip manifest parsing (no extraction).
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const MANIFEST_FILE_RE = /^(MANIFEST\.(md|csv)|CHECKSUMS_SHA256\.txt|SHA256SUMS\.txt|SUMMARY\.json)$/;

export function zipListEntries(zipPath) {
  if (!existsSync(zipPath)) return [];
  const out = execFileSync('unzip', ['-Z1', zipPath], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
  return out.split('\n').filter(Boolean).map((p) => p.replace(/\\/g, '/'));
}

export function zipReadInner(zipPath, innerPath) {
  return execFileSync('unzip', ['-p', zipPath, innerPath], {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  });
}

function bundleRelPaths(entries, bundleName) {
  const prefix = `${bundleName}/`;
  return entries
    .filter((e) => e.startsWith(prefix))
    .map((e) => e.slice(prefix.length));
}

export function bundleCountsFromZipToc(zipPath, bundleName) {
  const relPaths = bundleRelPaths(zipListEntries(zipPath), bundleName);
  const isAssetLibrary = bundleName === 'AKALYNTH_ASSET_LIBRARY_V1';
  let docs = 0;
  let data = 0;
  let prompts = 0;
  let registries = 0;
  let images = 0;
  const manifestFiles = new Set();

  for (const rel of relPaths) {
    if (isAssetLibrary && rel.startsWith('markdown/') && rel.endsWith('.md')) docs++;
    else if (!isAssetLibrary && rel.startsWith('docs/') && rel.endsWith('.md')) docs++;
    else if (rel.startsWith('data/') && rel.endsWith('.json')) data++;
    else if (rel.startsWith('prompts/')) prompts++;
    else if (rel.startsWith('registry/')) registries++;
    else if (rel.startsWith('data/') && /Registry\.ts$/.test(rel)) registries++;
    else if (isAssetLibrary && rel.startsWith('images/')) images++;

    const base = rel.split('/').pop();
    if (MANIFEST_FILE_RE.test(base)) manifestFiles.add(rel);
  }

  const markdown = isAssetLibrary ? docs : 0;
  return {
    docs,
    data,
    prompts,
    registries,
    manifests: manifestFiles.size,
    images,
    markdown,
  };
}

export function listRegistryFilesFromZipToc(zipPath, bundleName) {
  const isAssetLibrary = bundleName === 'AKALYNTH_ASSET_LIBRARY_V1';
  const prefix = `${bundleName}/`;
  return zipListEntries(zipPath)
    .filter((e) => {
      if (!e.startsWith(prefix)) return false;
      const rel = e.slice(prefix.length);
      if (rel.startsWith('registry/')) return true;
      return !isAssetLibrary && rel.startsWith('data/') && /Registry\.ts$/.test(rel);
    })
    .map((e) => e.slice(prefix.length))
    .sort();
}

function findInnerManifestPaths(entries, bundleName) {
  const prefix = `${bundleName}/`;
  const found = {};
  for (const e of entries) {
    if (!e.startsWith(prefix)) continue;
    const rel = e.slice(prefix.length);
    const base = rel.split('/').pop();
    if (base === 'MANIFEST.md') found['MANIFEST.md'] = e;
    else if (base === 'MANIFEST.csv') found['MANIFEST.csv'] = e;
    else if (base === 'CHECKSUMS_SHA256.txt') found['CHECKSUMS_SHA256.txt'] = e;
    else if (base === 'SHA256SUMS.txt') found['SHA256SUMS.txt'] = e;
    else if (base === 'SUMMARY.json') found['SUMMARY.json'] = e;
  }
  return found;
}

function countManifestMdRows(text) {
  return text.split('\n').filter((l) => /^\|\s*`/.test(l)).length;
}

function countManifestCsvRows(text) {
  const lines = text.split('\n').filter((l) => l.trim());
  return Math.max(0, lines.length - 1);
}

function countChecksumLines(text) {
  return text.split('\n').filter((l) => l.trim()).length;
}

export function readBundleManifestFromZip(zipPath, bundleName) {
  const entries = zipListEntries(zipPath);
  const inner = findInnerManifestPaths(entries, bundleName);
  const files = {};
  const prefix = `${bundleName}/`;

  for (const [name, innerPath] of Object.entries(inner)) {
    const text = zipReadInner(zipPath, innerPath);
    let entry_count = 0;
    if (name === 'MANIFEST.md') entry_count = countManifestMdRows(text);
    else if (name.endsWith('.csv')) entry_count = countManifestCsvRows(text);
    else if (name.includes('SHA256') || name.includes('CHECKSUMS')) entry_count = countChecksumLines(text);
    else if (name === 'SUMMARY.json') entry_count = 1;
    files[name] = { rel_path: innerPath.slice(prefix.length), entry_count };
  }

  return {
    files,
    has_manifest: Boolean(files['MANIFEST.md'] || files['MANIFEST.csv']),
    has_checksums: Boolean(files['CHECKSUMS_SHA256.txt'] || files['SHA256SUMS.txt']),
    entry_count: Object.values(files).reduce((n, f) => Math.max(n, f.entry_count), 0),
  };
}

export function summarizeBundleFromZip(zipPath, bundleName) {
  const counts = bundleCountsFromZipToc(zipPath, bundleName);
  const manifest = readBundleManifestFromZip(zipPath, bundleName);
  const registry_files = listRegistryFilesFromZipToc(zipPath, bundleName);
  const entries = zipListEntries(zipPath);
  const readmeInner = `${bundleName}/README.md`;
  const readme = entries.includes(readmeInner)
    ? { present: true, bytes: Buffer.byteLength(zipReadInner(zipPath, readmeInner), 'utf8') }
    : { present: false, bytes: 0 };

  return { counts, manifest, registry_files, readme };
}