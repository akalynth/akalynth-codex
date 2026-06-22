// Resolve akalynth-ops workspace root from the codex repo location.
// Paths in entries/specs are relative to akalynth-ops (e.g. repos/akalynth/drop/...).
// The codex repo may live at akalynth-ops/codex (symlink) or repos/akalynth-codex.
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export function resolveOpsRoot(codexRoot) {
  const candidates = [join(codexRoot, '..'), join(codexRoot, '../..')];
  for (const root of candidates) {
    if (existsSync(join(root, 'repos', 'akalynth'))) return root;
    if (existsSync(join(root, 'AGENTS.md')) && existsSync(join(root, 'repos'))) return root;
  }
  return join(codexRoot, '..');
}