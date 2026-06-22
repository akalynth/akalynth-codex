// Idempotent unzip-if-needed for AKALYNTH_*_V1 drop bundles.
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { CORE_BUNDLE_RE, listCoreBundleNames } from './drop-index.mjs';
import { readBundleManifest, verifyBundleChecksums } from './drop-manifest.mjs';

function countBundleFiles(bundleDir) {
  let n = 0;
  const walk = (p) => {
    for (const ent of readdirSync(p, { withFileTypes: true })) {
      const fp = join(p, ent.name);
      if (ent.isDirectory()) walk(fp);
      else n++;
    }
  };
  if (existsSync(bundleDir)) walk(bundleDir);
  return n;
}

export function ensureBundleExtracted(dropRoot, bundleName) {
  if (!CORE_BUNDLE_RE.test(bundleName)) {
    return { bundle: bundleName, action: 'skipped', reason: 'not_core_bundle' };
  }
  const bundleDir = join(dropRoot, bundleName);
  const zipPath = join(dropRoot, `${bundleName}.zip`);

  if (existsSync(bundleDir) && statSync(bundleDir).isDirectory()) {
    const file_count = countBundleFiles(bundleDir);
    const manifest = readBundleManifest(bundleDir);
    const checksums = verifyBundleChecksums(bundleDir);
    return {
      bundle: bundleName,
      action: 'skipped',
      reason: 'already_extracted',
      file_count,
      has_manifest: manifest.has_manifest,
      has_checksums: manifest.has_checksums,
      checksum_ok: checksums.ok,
      checksum_verified: checksums.verified,
    };
  }

  if (!existsSync(zipPath)) {
    return { bundle: bundleName, action: 'failed', reason: 'missing_zip' };
  }

  try {
    execFileSync('unzip', ['-q', zipPath, '-d', dropRoot], { stdio: 'pipe' });
  } catch (err) {
    return {
      bundle: bundleName,
      action: 'failed',
      reason: 'unzip_error',
      error: err.message || String(err),
    };
  }

  if (!existsSync(bundleDir) || !statSync(bundleDir).isDirectory()) {
    return { bundle: bundleName, action: 'failed', reason: 'extract_produced_no_dir' };
  }

  const file_count = countBundleFiles(bundleDir);
  const manifest = readBundleManifest(bundleDir);
  if (file_count === 0) {
    return { bundle: bundleName, action: 'failed', reason: 'extract_empty', file_count };
  }
  if (!manifest.has_manifest && !manifest.has_checksums) {
    return {
      bundle: bundleName,
      action: 'failed',
      reason: 'missing_manifest_or_checksums',
      file_count,
    };
  }

  const checksums = verifyBundleChecksums(bundleDir);
  if (!checksums.ok) {
    return {
      bundle: bundleName,
      action: 'failed',
      reason: 'checksum_mismatch',
      file_count,
      checksum_verified: checksums.verified,
      checksum_total: checksums.total,
      mismatches: checksums.mismatches.slice(0, 5),
    };
  }

  return {
    bundle: bundleName,
    action: 'extracted',
    file_count,
    has_manifest: manifest.has_manifest,
    has_checksums: manifest.has_checksums,
    manifest_entry_count: manifest.entry_count,
    checksum_ok: true,
    checksum_verified: checksums.verified,
  };
}

export function ensureUnzippedIfNeeded(dropRoot, bundleNames = null) {
  const targets = bundleNames || listCoreBundleNames(dropRoot);
  const results = targets.map((b) => ensureBundleExtracted(dropRoot, b));
  return {
    drop_root: dropRoot,
    bundles: results,
    all_ok: results.every((r) => r.action === 'skipped' || r.action === 'extracted'),
  };
}