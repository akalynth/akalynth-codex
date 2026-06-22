// Scope gate: goal delta must stay within .goal-deliverable-files.txt.
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

export function loadDeliverableFiles(codexRoot) {
  const path = join(codexRoot, '.goal-deliverable-files.txt');
  if (!existsSync(path)) return [];
  return readFileSync(path, 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));
}

export function gitPorcelain(repoPath) {
  try {
    const out = execFileSync('git', ['status', '--porcelain'], { cwd: repoPath, encoding: 'utf8' });
    return out.trim() ? out.trim().split('\n') : [];
  } catch {
    return [];
  }
}

function porcelainPath(line) {
  const trimmed = line.trim();
  if (trimmed.startsWith('?? ')) return trimmed.slice(3).trim();
  const spaceIdx = trimmed.indexOf(' ');
  if (spaceIdx >= 0) return trimmed.slice(spaceIdx + 1).trim();
  return null;
}

export function checkCodexWorkingTree(codexRoot, deliverableFiles) {
  const allowed = new Set(deliverableFiles);
  const violations = [];
  for (const line of gitPorcelain(codexRoot)) {
    const path = porcelainPath(line);
    if (!path) continue;
    if (line.trim().startsWith('??')) continue; // untracked noted separately
    if (!allowed.has(path)) {
      violations.push({ repo: 'akalynth-codex', line: line.trim(), path, reason: 'tracked_outside_deliverable' });
    }
  }
  return violations;
}

export function checkGoalCommits(codexRoot, deliverableFiles, sinceRef = '88402fd^') {
  const allowed = new Set(deliverableFiles);
  const violations = [];
  try {
    const out = execFileSync('git', ['diff', `${sinceRef}..HEAD`, '--name-only'], {
      cwd: codexRoot,
      encoding: 'utf8',
    });
    for (const path of out.trim().split('\n').filter(Boolean)) {
      if (!allowed.has(path)) {
        violations.push({ repo: 'akalynth-codex', path, reason: 'commit_outside_deliverable' });
      }
    }
  } catch (err) {
    violations.push({ repo: 'akalynth-codex', reason: 'git_diff_failed', error: String(err) });
  }
  return violations;
}

export function checkTrackedDirty(repoPath, repoName, pathPrefixes = null) {
  const violations = [];
  for (const line of gitPorcelain(repoPath)) {
    const trimmed = line.trim();
    if (trimmed.startsWith('??')) continue;
    const path = porcelainPath(line);
    if (!path) continue;
    if (pathPrefixes && !pathPrefixes.some((p) => path.startsWith(p))) continue;
    violations.push({ repo: repoName, line: trimmed, path, reason: 'tracked_modified' });
  }
  return violations;
}

export function auditGoalScope(codexRoot, opsRoot) {
  const deliverable = loadDeliverableFiles(codexRoot);
  const akalynthRoot = join(opsRoot, 'repos', 'akalynth');
  const agentSkillsRoot = join(opsRoot, 'repos', 'akalynth-agent-skills');

  const codexWt = checkCodexWorkingTree(codexRoot, deliverable);
  const codexCommits = checkGoalCommits(codexRoot, deliverable);
  const akalynthTracked = existsSync(akalynthRoot)
    ? checkTrackedDirty(akalynthRoot, 'akalynth', ['apps/', 'packages/'])
    : [];
  const agentSkillsTracked = existsSync(agentSkillsRoot)
    ? checkTrackedDirty(agentSkillsRoot, 'akalynth-agent-skills')
    : [];

  const untrackedOutside = {
    codex: gitPorcelain(codexRoot).filter((l) => l.trim().startsWith('??')).map((l) => l.trim()),
    akalynth: existsSync(akalynthRoot) ? gitPorcelain(akalynthRoot).filter((l) => l.trim().startsWith('??')).map((l) => l.trim()) : [],
    agent_skills: existsSync(agentSkillsRoot) ? gitPorcelain(agentSkillsRoot).filter((l) => l.trim().startsWith('??')).map((l) => l.trim()) : [],
  };

  const violations = [...codexWt, ...codexCommits, ...akalynthTracked, ...agentSkillsTracked];
  return {
    deliverable_files: deliverable,
    violations,
    untracked_outside_goal: untrackedOutside,
    ok: violations.length === 0,
  };
}