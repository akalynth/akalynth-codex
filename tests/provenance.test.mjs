#!/usr/bin/env node
// Provenance regression gate, as a test. Enforces that the public projection
// never republishes an entry as `asserted` (the symlink/opsRoot bug that
// silently dropped all backing). Skips when the akalynth-ops workspace sources
// are absent, since provenance cannot be verified from an isolated checkout.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { resolveOpsRoot } from '../tools/resolve-ops-root.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const opsRoot = resolveOpsRoot(codexRoot);
const tool = join(codexRoot, 'tools', 'verify-provenance.mjs');
const sourcesPresent = existsSync(join(opsRoot, 'repos', 'akalynth', 'drop'));

test('public projection: no asserted-only provenance + fingerprints match source', { skip: !sourcesPresent && 'akalynth-ops workspace sources absent' }, () => {
  let json;
  try {
    const stdout = execFileSync(process.execPath, [tool, '--json'], { encoding: 'utf8' });
    json = JSON.parse(stdout);
  } catch (e) {
    // non-zero exit = regression; surface the tool's reported violations
    const parsed = (() => { try { return JSON.parse(e.stdout); } catch { return null; } })();
    assert.fail('provenance gate failed: ' + (parsed?.violations?.join('; ') || e.message));
  }
  assert.equal(json.ok, true, 'provenance gate not ok: ' + (json.violations || []).join('; '));
  assert.equal((json.violations || []).length, 0);
});
