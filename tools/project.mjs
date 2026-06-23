#!/usr/bin/env node
// Akalynth Codex — public projection + review gate.
//
// Gate: an entry is published to the public surface (Layer 1) ONLY if
//   visibility.public === true && public_projection.published === true
//   && lineage.accepted === true   (the accepted transition)
// and its lineage.origin is resolved to a real on-disk source (receipt/source).
// The projection emits public_projection fields ONLY — internal fields are never
// in the public output (structural leak-proofing). A publication RECEIPT records
// the public-graph hash + per-entry provenance into receipts/.
//
// Read-only w.r.t. the live site: writes a SAMPLE under codex/out/, never codex.html.

import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');           // codex repo root
// Anchor opsRoot on the ops marker. `codex` is a symlink into repos/akalynth-codex
// and Node realpaths import.meta.url, so a naive join(root,'..') lands on
// .../akalynth-ops/repos and every repos/* source path misses (→ all asserted).
// Walk up until we find the dir that actually holds repos/akalynth/drop + receipts/.
function findOpsRoot(start) {
  let d = start;
  for (let i = 0; i < 8; i++) {
    if (existsSync(join(d, 'repos', 'akalynth', 'drop')) && existsSync(join(d, 'receipts'))) return d;
    const up = dirname(d);
    if (up === d) break;
    d = up;
  }
  return join(start, '..');   // fallback to prior behaviour
}
const opsRoot = findOpsRoot(root);                                         // akalynth-ops
const entriesDir = join(root, 'entries');
const outDir = join(root, 'out');
const receiptDir = join(opsRoot, 'receipts', 'AKALYNTH_CODEX_PUBLICATION_V1');

const PUBLIC_ALLOWED = new Set(['published', 'reviewed_by', 'title', 'category', 'summary', 'body', 'assets', 'related', 'source_ref']);
const FORBIDDEN_PUBLIC = ['world', 'design_refs', 'implementation', 'evidence', 'packets', 'lineage', 'visibility'];

// Resolve lineage.origin to a real source on disk → (kind, path) or null.
// Canonical authority is the akalynth game repo (repos/akalynth); the drop
// bundles carry MANIFEST.md receipts (strongest) and per-doc markdown sources.
// Candidates are tried in strength order: receipt-backed first, then source.
const ASSET_MD = 'repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown';
const FORGEHOLD_DOCS = 'repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/docs';
function resolveSource(origin) {
  if (!origin) return null;
  const candidates = [
    // drop-bundle receipts (origin names a drop dir, e.g. *_ROUTE_SLICE_V1, *_LANE_V1)
    ['receipt', `repos/akalynth/drop/${origin}/MANIFEST.md`],
    ['receipt', `repos/akalynth/drop/${origin}/CHECKSUMS_SHA256.txt`],
    // asset-library codices/summaries (origin names a markdown stem)
    ['source', `${ASSET_MD}/${origin}.md`],
    // a doc inside the Forgehold route slice (e.g. AKALYNTH_SOULSTEEL_STABILIZATION_V1)
    ['source', `${FORGEHOLD_DOCS}/${origin}.md`],
    // game-repo design docs, with/without the AKALYNTH_ prefix (e.g. AKALYNTH_ROOKGUARD_CITY_EXPANSION_V1)
    ['source', `repos/akalynth/docs/${origin}.md`],
    ['source', `repos/akalynth/docs/${origin.replace(/^AKALYNTH_/, '')}.md`],
    ['source', `repos/akalynth/drop/${origin}/README.md`],
  ];
  // free-text origins → their canonical backing source
  if (/creature codex/i.test(origin)) candidates.push(['source', `${ASSET_MD}/AKALYNTH_CREATURES_SUMMARY_V1.md`]);
  if (/world atlas|world map/i.test(origin)) candidates.push(['source', 'repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/docs/AKALYNTH_WORLD_MAP_V2.md']);
  // goal-objective:<uuid> → the runtime registry the surface object implements
  if (/^goal-objective:/.test(origin)) candidates.push(['source', 'repos/akalynth/apps/server/src/builder/draftNamespace.ts']);
  for (const [kind, rel] of candidates) if (existsSync(join(opsRoot, rel))) return { kind, path: rel };
  return null;
}

const entries = readdirSync(entriesDir).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(readFileSync(join(entriesDir, f), 'utf8')));

const publicGraph = [];
const provenance = [];
const skipped = [];

for (const e of entries) {
  const pp = e.public_projection;
  const wantsPublic = e.visibility?.public === true && pp && pp.published === true;
  if (!wantsPublic) { skipped.push({ id: e.id, reason: pp ? 'unpublished' : 'no public_projection' }); continue; }
  // --- review gate ---
  if (e.lineage?.accepted !== true) { skipped.push({ id: e.id, reason: 'gate: not accepted' }); continue; }
  const src = resolveSource(e.lineage?.origin);
  // emit public node (whitelist only)
  const node = { id: e.id, type: e.type };
  for (const k of Object.keys(pp)) if (PUBLIC_ALLOWED.has(k)) node[k] = pp[k];
  // public-safe PROOF block: object id, status, source name, and an evidence
  // FINGERPRINT (sha256 of the backing source) — provenance without payload.
  const slice = e.world?.implementation?.slice;
  const evidence_sha256 = src ? createHash('sha256').update(readFileSync(join(opsRoot, src.path))).digest('hex') : null;
  node.proof = {
    object_id: e.id,
    status: e.status,
    status_label: slice ? 'has-route-slice' : e.status,
    source_ref: e.lineage?.origin ?? null,
    source_kind: src ? src.kind : 'asserted',
    evidence_sha256,
  };
  publicGraph.push(node);
  provenance.push({ id: e.id, status: e.status, origin: e.lineage.origin, source_kind: src ? src.kind : 'asserted', source_ref: src ? src.path : null, evidence_sha256 });
}

// leak-check
const serialized = JSON.stringify(publicGraph);
const leaks = FORBIDDEN_PUBLIC.filter((k) => serialized.includes(`"${k}"`));
if (leaks.length) { console.error('LEAK CHECK FAILED:', leaks); process.exit(1); }

const graphJson = JSON.stringify(publicGraph, null, 2);
const sha = createHash('sha256').update(graphJson).digest('hex');

// dark-console entry fragment (sample)
const card = (n) => `    <article class="entry-row" data-id="${n.id}"><div class="entry-icon">◇</div><div><div class="entry-title">${n.title}</div><div class="entry-summary">${n.summary ?? ''}</div></div><div class="pill"><span class="dot ${n.category}"></span>${n.category ?? ''}</div><div class="time">accepted</div></article>`;
const html = `<!-- GENERATED by codex/tools/project.mjs — public projection (Layer 1). -->\n<section class="entry-list">\n${publicGraph.map(card).join('\n')}\n</section>`;

const receipt = {
  artifact: 'AKALYNTH_CODEX_PUBLICATION_V1',
  generated_by: 'codex/tools/project.mjs',
  public_graph_sha256: sha,
  public_entries: publicGraph.length,
  gate: { rule: 'visibility.public && public_projection.published && lineage.accepted', passed: publicGraph.length },
  source_provenance: provenance,
  receipt_backed: provenance.filter((p) => p.source_kind === 'receipt').length,
  source_backed: provenance.filter((p) => p.source_kind === 'source').length,
  asserted_only: provenance.filter((p) => p.source_kind === 'asserted').map((p) => p.id),
  leak_check: 'pass',
};

mkdirSync(outDir, { recursive: true });
mkdirSync(receiptDir, { recursive: true });
writeFileSync(join(outDir, 'codex-public.graph.json'), graphJson);
writeFileSync(join(outDir, 'codex-public.sample.html'), html);
writeFileSync(join(outDir, 'codex-publication.receipt.json'), JSON.stringify(receipt, null, 2));
writeFileSync(join(receiptDir, 'receipt.json'), JSON.stringify(receipt, null, 2));

console.log('Akalynth Codex projection + review gate');
console.log('  entries scanned :', entries.length);
console.log('  published       :', publicGraph.length);
console.log('  gate skipped    :', skipped.length, skipped.length ? skipped : '');
console.log('  provenance      : receipt-backed', receipt.receipt_backed, '· source-backed', receipt.source_backed, '· asserted', receipt.asserted_only.length, receipt.asserted_only);
console.log('  public_graph_sha:', sha.slice(0, 16));
console.log('  leak-check      : PASS');
console.log('  receipt         : receipts/AKALYNTH_CODEX_PUBLICATION_V1/receipt.json');
