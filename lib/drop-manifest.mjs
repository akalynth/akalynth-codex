// Read MANIFEST / CHECKSUMS from a bundle without reimplementing full parsing.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const MANIFEST_NAMES = ['MANIFEST.md', 'MANIFEST.csv', 'CHECKSUMS_SHA256.txt', 'SHA256SUMS.txt', 'SUMMARY.json'];

function findManifestFile(bundleDir, name) {
  const root = join(bundleDir, name);
  if (existsSync(root)) return root;
  const nested = join(bundleDir, 'manifests', name);
  if (existsSync(nested)) return nested;
  return null;
}

function countChecksumLines(path) {
  const lines = readFileSync(path, 'utf8').split('\n').filter((l) => l.trim());
  return lines.length;
}

function countManifestMdRows(path) {
  return readFileSync(path, 'utf8').split('\n').filter((l) => /^\|\s*`/.test(l)).length;
}

function countManifestCsvRows(path) {
  const lines = readFileSync(path, 'utf8').split('\n').filter((l) => l.trim());
  return Math.max(0, lines.length - 1);
}

export function readBundleManifest(bundleDir) {
  const files = {};
  for (const name of MANIFEST_NAMES) {
    const path = findManifestFile(bundleDir, name);
    if (!path) continue;
    let entry_count = 0;
    if (name.endsWith('.md') && name === 'MANIFEST.md') entry_count = countManifestMdRows(path);
    else if (name.endsWith('.csv')) entry_count = countManifestCsvRows(path);
    else if (name.includes('SHA256') || name.includes('CHECKSUMS')) entry_count = countChecksumLines(path);
    else if (name === 'SUMMARY.json') entry_count = 1;
    files[name] = { path, entry_count };
  }
  return {
    files,
    has_manifest: Boolean(files['MANIFEST.md'] || files['MANIFEST.csv']),
    has_checksums: Boolean(files['CHECKSUMS_SHA256.txt'] || files['SHA256SUMS.txt']),
    entry_count: Object.values(files).reduce((n, f) => Math.max(n, f.entry_count), 0),
  };
}