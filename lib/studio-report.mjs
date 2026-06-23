// Akalynth Studio durable test report — emit a BOUNDED, persistent report after
// the Studio test suites + verification spine run.
//
// Closes gap_observability: verification was terminal/browser-local and never
// emitted to a persistent surface. This consolidates the node:test suites and
// the executable spine into one fixed-shape, size-bounded JSON artifact — capped
// failure lists and per-guarantee finding COUNTS (never raw finding dumps) — so
// the artifact stays small regardless of how much drift exists. Read-only over
// the repo; writes only under evidence/.

import { execFileSync } from 'node:child_process';
import { runSpine } from './studio-verify.mjs';

// Parse the node:test TAP summary + failing test names from a run's output.
export function parseTap(out) {
  const num = (re) => { const m = out.match(re); return m ? Number(m[1]) : null; };
  const failures = [...out.matchAll(/^not ok \d+ - (.+)$/gm)]
    .map((m) => m[1].trim())
    // drop the per-file rollup lines (they duplicate the real subtest failures)
    .filter((n) => !/\.test\.mjs$/.test(n));
  return {
    tests: num(/^# tests (\d+)/m),
    pass: num(/^# pass (\d+)/m),
    fail: num(/^# fail (\d+)/m),
    failures,
  };
}

// Run the given test files in a child node process and parse the result.
// Uses the same node binary that runs this tool (process.execPath) so it works
// even when `node` is not on PATH.
export function runSuites(nodeBin, files) {
  let out;
  try {
    out = execFileSync(nodeBin, ['--test', ...files], { encoding: 'utf8' });
  } catch (e) {
    out = `${e.stdout || ''}${e.stderr || ''}`; // non-zero exit on failures
  }
  return { files: files.map((f) => f.replace(/.*\//, '')), ...parseTap(out) };
}

// Pure assembly of the bounded report. No raw finding strings cross this
// boundary — only counts — which is what keeps the artifact bounded.
export function assembleReport({ suites, spine, stamp, nodeVersion, maxFailures = 20 }) {
  const guarantees = spine.spine.map((s) => ({
    g: s.g, key: s.key, label: s.label,
    executable: !!s.executable, status: s.status,
    finding_count: Array.isArray(s.findings) ? s.findings.length : 0,
  }));
  const failures = suites.failures.slice(0, maxFailures);
  return {
    generated_by: 'studio-report-v1',
    stamped_at: stamp,
    node_version: nodeVersion,
    suites: {
      files: suites.files,
      tests: suites.tests,
      pass: suites.pass,
      fail: suites.fail,
      failures,
      failures_truncated: Math.max(0, suites.failures.length - failures.length),
    },
    spine: { summary: spine.summary, guarantees },
    ok: suites.fail === 0 && spine.ok === true,
  };
}

export async function runReport(codexRoot, { suiteFiles, nodeBin, stamp, nodeVersion }) {
  const suites = runSuites(nodeBin, suiteFiles);
  const spine = await runSpine({ codexRoot });
  return assembleReport({ suites, spine, stamp, nodeVersion });
}
