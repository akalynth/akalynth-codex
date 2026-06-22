// Read MANIFEST / CHECKSUMS from a bundle without reimplementing full parsing.
import { createHash } from 'node:crypto';
import { readFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const MANIFEST_NAMES = ['MANIFEST.md', 'MANIFEST.csv', 'CHECKSUMS_SHA256.txt', 'SHA256SUMS.txt', 'SUMMARY.json'];

function findManifestFile(bundleDir, name) {
  const root = join(bundleDir, name);
  if (existsSync(root)) return root;
  const nested = join(bundleDir, 'manifests', name);
  if (existsSync(nested)) return nested;
  return null;
}

function relInBundle(bundleDir, absPath) {
  return relative(bundleDir, absPath).replace(/\\/g, '/');
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

export function parseChecksumEntries(bundleDir) {
  const checksumPath = findManifestFile(bundleDir, 'CHECKSUMS_SHA256.txt')
    || findManifestFile(bundleDir, 'SHA256SUMS.txt');
  if (!checksumPath) return { path: null, entries: [] };
  const entries = [];
  for (const line of readFileSync(checksumPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const m = trimmed.match(/^([a-f0-9]{64})\s{1,2}(.+)$/);
    if (!m) continue;
    entries.push({ sha256: m[1], rel_path: m[2] });
  }
  return { path: relInBundle(bundleDir, checksumPath), entries };
}

export function verifyBundleChecksums(bundleDir) {
  const { path: checksumRel, entries } = parseChecksumEntries(bundleDir);
  if (!entries.length) {
    return { ok: false, reason: 'no_checksum_entries', checksum_file: checksumRel };
  }
  const mismatches = [];
  let verified = 0;
  for (const { sha256: expected, rel_path: relPath } of entries) {
    const fp = join(bundleDir, relPath);
    if (!existsSync(fp)) {
      mismatches.push({ path: relPath, reason: 'missing_file' });
      continue;
    }
    const actual = createHash('sha256').update(readFileSync(fp)).digest('hex');
    if (actual !== expected) {
      mismatches.push({ path: relPath, reason: 'hash_mismatch', expected, actual });
    } else {
      verified++;
    }
  }
  return {
    ok: mismatches.length === 0,
    checksum_file: checksumRel,
    verified,
    total: entries.length,
    mismatches,
  };
}

export function readBundleManifest(bundleDir) {
  const files = {};
  for (const name of MANIFEST_NAMES) {
    const absPath = findManifestFile(bundleDir, name);
    if (!absPath) continue;
    let entry_count = 0;
    if (name.endsWith('.md') && name === 'MANIFEST.md') entry_count = countManifestMdRows(absPath);
    else if (name.endsWith('.csv')) entry_count = countManifestCsvRows(absPath);
    else if (name.includes('SHA256') || name.includes('CHECKSUMS')) entry_count = countChecksumLines(absPath);
    else if (name === 'SUMMARY.json') entry_count = 1;
    files[name] = { rel_path: relInBundle(bundleDir, absPath), entry_count };
  }
  return {
    files,
    has_manifest: Boolean(files['MANIFEST.md'] || files['MANIFEST.csv']),
    has_checksums: Boolean(files['CHECKSUMS_SHA256.txt'] || files['SHA256SUMS.txt']),
    entry_count: Object.values(files).reduce((n, f) => Math.max(n, f.entry_count), 0),
  };
}