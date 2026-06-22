// Parse bundle roles from repos/akalynth/docs/DROP_SOURCE_INDEX.md (authority cross-check).
import { readFileSync, existsSync } from 'node:fs';

const ROLE_ROW = /^\|\s*`(AKALYNTH_[^`]+)`[^|]*\|\s*([^|]+)\s*\|/;

export function parseDropRoles(dropSourceIndexPath) {
  if (!existsSync(dropSourceIndexPath)) return {};
  const text = readFileSync(dropSourceIndexPath, 'utf8');
  const roles = {};
  for (const line of text.split('\n')) {
    const m = line.match(ROLE_ROW);
    if (!m) continue;
    const bundle = m[1].replace(/\/$/, '');
    roles[bundle] = m[2].trim();
  }
  return roles;
}