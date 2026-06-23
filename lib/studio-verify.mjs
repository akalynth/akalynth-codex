// Akalynth Studio verifier — executable spine (G1–G15).
//
// Replaces the simulated browser-only spine with real, runnable checks against
// repository data. Each check returns a normalized guarantee result; checks not
// yet executable are reported as DECLARED with an honest reason rather than
// faked green. Pure library: no process.exit, no writes. The CLI
// (tools/studio-verify.mjs) drives these and emits the evidence report.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';
import vm from 'node:vm';

// ---------------------------------------------------------------------------
// The 15 civil guarantees, in spine order (mirrors studio GUARANTEES()).
// `key` ties a guarantee to its executable check below; guarantees without an
// executable check are reported DECLARED.
// ---------------------------------------------------------------------------
export const SPINE = [
  { g: 'G1', key: 'receipt_integrity', label: 'Receipt integrity' },
  { g: 'G2', key: 'chronicle_chain', label: 'Chronicle chain' },
  { g: 'G3', key: 'protocol_sync', label: 'Protocol sync' },
  { g: 'G4', key: 'treasury_conservation', label: 'Treasury conservation' },
  { g: 'G5', key: 'heat_determinism', label: 'Heat determinism' },
  { g: 'G6', key: 'protected_slots', label: 'Protected slots' },
  { g: 'G7', key: 'style_contract', label: 'Style contract' },
  { g: 'G8', key: 'schema_valid', label: 'Schema valid' },
  { g: 'G9', key: 'idempotent_apply', label: 'Idempotent apply' },
  { g: 'G10', key: 'no_prod_bypass', label: 'No prod bypass' },
  { g: 'G11', key: 'authority_scope', label: 'Authority scope' },
  { g: 'G12', key: 'spawn_bounds', label: 'Spawn bounds' },
  { g: 'G13', key: 'collision_sound', label: 'Collision sound' },
  { g: 'G14', key: 'asset_provenance', label: 'Asset provenance' },
  { g: 'G15', key: 'reversible_apply', label: 'Reversible apply' },
];

// Guarantees with no executable check yet — reported DECLARED, not green.
const DECLARED_REASON = {
  protocol_sync: 'Needs shared protocol/types diff vs apps/server; not modeled in codex.',
  treasury_conservation: 'Needs council treasury ledger replay; no live ledger in codex.',
  heat_determinism: 'Needs anti-cheat heat engine; lives in game runtime, not codex.',
  protected_slots: 'Needs runtime slot registry; not present in codex source.',
  authority_scope: 'Partially covered by no_prod_bypass; full scope check needs packet authority graph.',
  spawn_bounds: 'Needs map placement data with bounds; lanes not yet promoted (see Gap Ledger).',
  collision_sound: 'Needs collision metadata on tiles; not yet declared (Gap Ledger lane).',
  reversible_apply: 'Needs apply/rollback transcript; promotion path not wired.',
};

// ---------------------------------------------------------------------------
// small helpers
// ---------------------------------------------------------------------------
const PNG_SIG = [137, 80, 78, 71, 13, 10, 26, 10];

export function pngSize(buf) {
  if (!buf || buf.length < 24) return null;
  for (let i = 0; i < 8; i++) if (buf[i] !== PNG_SIG[i]) return null;
  // IHDR is the first chunk: [len(4)][\"IHDR\"(4)][width(4)][height(4)]...
  if (buf.toString('latin1', 12, 16) !== 'IHDR') return null;
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}

function listFilesRec(dir, pred) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) out.push(...listFilesRec(p, pred));
    else if (!pred || pred(p)) out.push(p);
  }
  return out;
}

// ---------------------------------------------------------------------------
// asset registry (studio/codex-data.js — ESM data module)
// ---------------------------------------------------------------------------
// codex-data.js uses ESM `export const ASSETS = [...]` in a .js file with no
// package "type":"module", so it cannot be dynamically imported under Node.
// The array value is strict JSON, so extract it by balanced-bracket scan.
export function extractAssetsArray(text) {
  const at = text.indexOf('ASSETS');
  if (at < 0) throw new Error('codex-data.js: ASSETS export not found');
  const start = text.indexOf('[', at);
  if (start < 0) throw new Error('codex-data.js: ASSETS array literal not found');
  let depth = 0, inStr = false, esc = false, end = -1;
  for (let j = start; j < text.length; j++) {
    const c = text[j];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
    } else if (c === '"') inStr = true;
    else if (c === '[') depth++;
    else if (c === ']') { if (--depth === 0) { end = j + 1; break; } }
  }
  if (end < 0) throw new Error('codex-data.js: unterminated ASSETS array');
  return JSON.parse(text.slice(start, end));
}

export async function loadAssets(studioDir) {
  const text = readFileSync(join(studioDir, 'codex-data.js'), 'utf8');
  const assets = extractAssetsArray(text);
  if (!Array.isArray(assets)) throw new Error('codex-data.js: ASSETS is not an array');
  return assets;
}

// Resolve a registry asset's `file`/`thumb` to a real image under studio/.
// The registry uses a logical `sprites/` prefix that is not the on-disk layout,
// so we try a deliberate candidate ladder and report what actually resolved.
export function resolveAssetFile(studioDir, asset) {
  const cands = [];
  if (asset.file) { cands.push(asset.file); cands.push(asset.file.replace(/^sprites\//, '')); cands.push(basename(asset.file)); }
  if (asset.thumb) { cands.push(asset.thumb); cands.push(basename(asset.thumb)); }
  for (const c of cands) {
    const p = join(studioDir, c);
    if (existsSync(p) && statSync(p).isFile()) return p;
  }
  // last resort: unique basename match anywhere under studio/
  const want = basename(asset.file || asset.thumb || '');
  if (want) {
    const hits = listFilesRec(studioDir, (p) => basename(p) === want);
    if (hits.length === 1) return hits[0];
  }
  return null;
}

// ---------------------------------------------------------------------------
// G14 — Asset provenance: every registered asset resolves to a real file,
// carries a style contract id, and declares a source.
// ---------------------------------------------------------------------------
export function checkAssetProvenance(studioDir, assets) {
  const findings = [];
  let resolved = 0;
  for (const a of assets) {
    const file = resolveAssetFile(studioDir, a);
    if (!file) { findings.push(`MISSING_FILE:${a.id}:${a.file || a.thumb || '(none)'}`); continue; }
    resolved++;
    if (!a.contract) findings.push(`NO_CONTRACT:${a.id}`);
    if (!a.source) findings.push(`NO_SOURCE:${a.id}`);
  }
  return {
    status: findings.length === 0 ? 'PASS' : 'FAIL',
    detail: { registered: assets.length, resolved, missing: assets.length - resolved },
    findings,
  };
}

// ---------------------------------------------------------------------------
// G7 — Style contract: the on-disk PNG must be a valid PNG whose real pixel
// dimensions match the registry's declared w/h. This is the metadata lockstep
// the Classic-32 pipeline depends on (server/registry size must equal the
// shipped image). Non-square sprites and small UI fills are legitimate, so the
// contract is dims==declared, not a fixed grid.
// ---------------------------------------------------------------------------
export function checkStyleContract(studioDir, assets) {
  const findings = [];
  let checked = 0;
  for (const a of assets) {
    const file = resolveAssetFile(studioDir, a);
    if (!file) continue; // provenance owns missing-file reporting
    const size = pngSize(readFileSync(file));
    if (!size) { findings.push(`NOT_PNG:${a.id}`); continue; }
    checked++;
    if (typeof a.w === 'number' && typeof a.h === 'number' && (size.w !== a.w || size.h !== a.h))
      findings.push(`DIM_MISMATCH:${a.id}:file=${size.w}x${size.h}:declared=${a.w}x${a.h}`);
  }
  return {
    status: findings.length === 0 ? 'PASS' : 'FAIL',
    detail: { checked, contract: 'png-valid && dims==declared (metadata lockstep)' },
    findings,
  };
}

// ---------------------------------------------------------------------------
// G8 — Schema valid: each codex entry validates against codex-entry.schema.json.
// Minimal JSON-Schema subset validator (the dialect these entries use).
// ---------------------------------------------------------------------------
function validateNode(value, schema, path, errs) {
  if (schema.const !== undefined && value !== schema.const)
    errs.push(`${path}: const ${JSON.stringify(schema.const)} != ${JSON.stringify(value)}`);
  if (schema.enum && !schema.enum.includes(value))
    errs.push(`${path}: ${JSON.stringify(value)} not in enum`);
  const types = schema.type ? (Array.isArray(schema.type) ? schema.type : [schema.type]) : null;
  if (types) {
    const ok = types.some((t) => matchesType(value, t));
    if (!ok) { errs.push(`${path}: expected ${types.join('|')}, got ${jsType(value)}`); return; }
  }
  if (value === null) return;
  if (typeof value === 'string' && schema.pattern && !new RegExp(schema.pattern).test(value))
    errs.push(`${path}: \"${value}\" violates pattern ${schema.pattern}`);
  if (Array.isArray(value) && schema.items)
    value.forEach((it, i) => validateNode(it, schema.items, `${path}[${i}]`, errs));
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    for (const req of schema.required || [])
      if (!(req in value)) errs.push(`${path}: missing required \"${req}\"`);
    if (schema.additionalProperties === false && schema.properties)
      for (const k of Object.keys(value))
        if (!(k in schema.properties)) errs.push(`${path}: additional property \"${k}\"`);
    if (schema.properties)
      for (const [k, sub] of Object.entries(schema.properties))
        if (k in value) validateNode(value[k], sub, `${path}.${k}`, errs);
  }
}

function jsType(v) { return v === null ? 'null' : Array.isArray(v) ? 'array' : typeof v; }
function matchesType(v, t) {
  switch (t) {
    case 'object': return v !== null && typeof v === 'object' && !Array.isArray(v);
    case 'array': return Array.isArray(v);
    case 'string': return typeof v === 'string';
    case 'number': return typeof v === 'number';
    case 'integer': return typeof v === 'number' && Number.isInteger(v);
    case 'boolean': return typeof v === 'boolean';
    case 'null': return v === null;
    default: return true;
  }
}

export function validateEntry(entry, schema) {
  const errs = [];
  validateNode(entry, schema, '$', errs);
  return errs;
}

export function checkSchemaValid(entriesDir, schemaPath) {
  const schema = JSON.parse(readFileSync(schemaPath, 'utf8'));
  const findings = [];
  let valid = 0;
  const files = readdirSync(entriesDir).filter((f) => f.endsWith('.json'));
  for (const f of files) {
    let entry;
    try { entry = JSON.parse(readFileSync(join(entriesDir, f), 'utf8')); }
    catch (e) { findings.push(`PARSE_ERROR:${f}:${e.message}`); continue; }
    const errs = validateEntry(entry, schema);
    if (errs.length) findings.push(...errs.map((e) => `${f} ${e}`));
    else valid++;
  }
  return {
    status: findings.length === 0 ? 'PASS' : 'FAIL',
    detail: { entries: files.length, valid, invalid: files.length - valid },
    findings,
  };
}

// ---------------------------------------------------------------------------
// G10 — No prod bypass: codex source must not write into the game runtime tree
// (repos/akalynth/{apps,packages}) or absolute prod paths, and must not import
// from them. Structural guard, mirrors the drop-index boundary invariant.
// ---------------------------------------------------------------------------
const FORBIDDEN_WRITE = [
  /repos\/akalynth\/(apps|packages)\//,
  /\/opt\/akalynth(?:-beta)?\b/,
  /\/var\/lib\/akalynth(?:-beta)?\b/,
  /\/etc\/akalynth(?:-beta)?\b/,
];
const WRITE_CALLS = /\b(writeFileSync|writeFile|appendFileSync|appendFile|rmSync|rm|unlinkSync|mkdirSync|cpSync|renameSync|createWriteStream)\b/;
const IMPORT_RE = /(?:import\s[^'"]*from\s*|import\s*|require\s*\()\s*['"]([^'"]+)['"]/g;

export function checkNoProdBypass(files) {
  const findings = [];
  for (const f of files) {
    if (!existsSync(f)) continue;
    const src = readFileSync(f, 'utf8');
    const lines = src.split('\n');
    lines.forEach((line, i) => {
      const hasWrite = WRITE_CALLS.test(line);
      for (const re of FORBIDDEN_WRITE)
        if (re.test(line) && hasWrite)
          findings.push(`PROD_WRITE:${basename(f)}:${i + 1}:${line.trim().slice(0, 80)}`);
    });
    let m;
    while ((m = IMPORT_RE.exec(src))) {
      const spec = m[1];
      if (/(^|\/)apps\/|(^|\/)packages\/|repos\/akalynth\//.test(spec))
        findings.push(`RUNTIME_IMPORT:${basename(f)}:${spec}`);
    }
  }
  return {
    status: findings.length === 0 ? 'PASS' : 'FAIL',
    detail: { scanned: files.length },
    findings,
  };
}

// ---------------------------------------------------------------------------
// G1 + G2 — Receipt integrity & chronicle chain: actually run the studio
// browser-local ledger under Node and prove (a) a well-formed signed chain
// verifies PASS, and (b) a tampered chain is DETECTED as FAIL. Loading the
// IIFE needs a localStorage shim; crypto/TextEncoder are Node globals.
// ---------------------------------------------------------------------------
function makeLocalStorageShim() {
  const m = new Map();
  return {
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, String(v)),
    removeItem: (k) => m.delete(k),
    _dump: () => JSON.parse(m.get('akalynth-ledger-v1:events') || '[]'),
    _set: (arr) => m.set('akalynth-ledger-v1:events', JSON.stringify(arr)),
  };
}

export async function loadLedger(ledgerPath) {
  const code = readFileSync(ledgerPath, 'utf8');
  const ls = makeLocalStorageShim();
  const sandbox = {
    crypto: globalThis.crypto,
    TextEncoder,
    TextDecoder,
    Date,
    console,
    localStorage: ls,
    indexedDB: undefined,
    globalThis: undefined,
  };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: ledgerPath });
  return { ledger: sandbox.AkalynthLedger, storage: ls };
}

async function buildSignedPacket(ledger) {
  await ledger.init();
  const { packet_id } = await ledger.createWorkPacket({ title: 'spine self-test packet' });
  await ledger.routePacket(packet_id, 'ci-steward', 'studio-verify-selftest');
  const binding = {
    behavior_schema_version: 1, behavior_id: 'beh-spine', subject_asset_id: 'akalynth_creature_skeleton_001',
    archetype: 'guardian', initial_state: 'idle', states: ['idle', 'alert'],
    transitions: [{ from: 'idle', to: 'alert', condition: 'vision' }, { from: 'alert', to: 'idle', condition: 'lost' }],
    parameters: { aggro: 5, leash: 8, cooldown: 900, fleeHp: 0, patrolR: 4 },
  };
  await ledger.proposeBinding(packet_id, binding);
  await ledger.commitBinding(packet_id, binding);
  await ledger.emitReceipt(packet_id); // signed receipt event
  return packet_id;
}

export async function replayLedger(ledgerPath) {
  const findings = [];
  const { ledger, storage } = await loadLedger(ledgerPath);

  // (a) well-formed signed chain must verify PASS
  const packet_id = await buildSignedPacket(ledger);
  const good = await ledger.verifyChain(packet_id);
  if (good.result !== 'PASS') findings.push(`GOOD_CHAIN_NOT_PASS:${JSON.stringify(good.errors)}`);
  const signedCount = storage._dump().filter((e) => e.signature).length;
  if (signedCount < 1) findings.push('NO_SIGNED_RECEIPT');

  // (b) tamper a stored payload — the chain verifier MUST catch it
  const events = storage._dump();
  const target = events.find((e) => e.object_type === 'behavior_binding');
  if (!target) { findings.push('NO_BINDING_EVENT_TO_TAMPER'); }
  else {
    target.payload = Object.assign({}, target.payload, { aggro_injected: 999 });
    storage._set(events);
    const bad = await ledger.verifyChain(packet_id);
    if (bad.result !== 'FAIL') findings.push('TAMPER_NOT_DETECTED');
    else if (!bad.errors.some((e) => e.startsWith('PAYLOAD_DIGEST_MISMATCH') || e.startsWith('EVENT_DIGEST_MISMATCH')))
      findings.push(`TAMPER_WRONG_REASON:${JSON.stringify(bad.errors)}`);
  }

  return {
    good_chain: good.result,
    good_events: good.event_count,
    signed_receipts: signedCount,
    tamper_detected: findings.includes('TAMPER_NOT_DETECTED') ? false : !!target,
    findings,
  };
}

// ---------------------------------------------------------------------------
// orchestrator
// ---------------------------------------------------------------------------
export async function runSpine(opts) {
  const { codexRoot, extraScanFiles = [] } = opts;
  const studioDir = join(codexRoot, 'studio');
  const entriesDir = join(codexRoot, 'entries');
  const schemaPath = join(codexRoot, 'schema', 'codex-entry.schema.json');
  const ledgerPath = join(studioDir, 'akalynth-ledger.js');

  const assets = await loadAssets(studioDir);

  const results = {}; // key -> { status, detail, findings }

  // G1/G2 share the ledger replay
  const replay = await replayLedger(ledgerPath);
  const replayPass = replay.findings.length === 0 ? 'PASS' : 'FAIL';
  results.receipt_integrity = {
    status: replay.signed_receipts >= 1 && replay.good_chain === 'PASS' && replay.findings.length === 0 ? 'PASS' : 'FAIL',
    detail: { signed_receipts: replay.signed_receipts, good_chain: replay.good_chain },
    findings: replay.findings,
  };
  results.chronicle_chain = {
    status: replayPass,
    detail: { good_events: replay.good_events, tamper_detected: replay.tamper_detected },
    findings: replay.findings,
  };

  results.style_contract = checkStyleContract(studioDir, assets);
  results.schema_valid = checkSchemaValid(entriesDir, schemaPath);
  results.asset_provenance = checkAssetProvenance(studioDir, assets);

  const scanFiles = [
    join(codexRoot, 'lib', 'studio-verify.mjs'),
    join(codexRoot, 'tools', 'studio-verify.mjs'),
    ...listFilesRec(studioDir, (p) => p.endsWith('.js')),
    ...extraScanFiles,
  ];
  results.no_prod_bypass = checkNoProdBypass(scanFiles);

  // assemble the full 15-row spine
  const spine = SPINE.map((row) => {
    const r = results[row.key];
    if (r) return { ...row, executable: true, status: r.status, detail: r.detail, findings: r.findings };
    return { ...row, executable: false, status: 'DECLARED', reason: DECLARED_REASON[row.key] || 'Not yet executable.', findings: [] };
  });

  const executable = spine.filter((s) => s.executable);
  const failed = executable.filter((s) => s.status === 'FAIL');
  return {
    generated_by: 'studio-verify-v1',
    spine,
    summary: {
      total: spine.length,
      executable: executable.length,
      passed: executable.filter((s) => s.status === 'PASS').length,
      failed: failed.length,
      declared: spine.length - executable.length,
    },
    ok: failed.length === 0,
  };
}
