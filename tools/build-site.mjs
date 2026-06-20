#!/usr/bin/env node
// Wire the public projection into the akalynth-site codex page:
//   1. write js/codex-data.js (the data),
//   2. static-render the entry list + the lead (Forgehold) detail into codex.html
//      so the page is crawlable / readable without JS (progressive enhancement;
//      codex-os.js then re-renders the identical interactive version).
// Usage: node codex/tools/build-site.mjs <worktree-path>
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const WT = process.argv[2];
if (!WT) { console.error('usage: build-site.mjs <worktree-path>'); process.exit(1); }

const graph = JSON.parse(readFileSync(join(codexRoot, 'out', 'codex-public.graph.json'), 'utf8'));
const byId = Object.fromEntries(graph.map((e) => [e.id, e]));
const icon = (e) => (e.type === 'creature' ? '✦' : e.type === 'faction' ? '◈' : e.type === 'material' ? '◆' : e.type === 'lore' ? '▤' : '◇');
const shortHash = (h) => (h ? h.slice(0, 8) + '…' + h.slice(-6) : '—');

// 1) data
writeFileSync(join(WT, 'js', 'codex-data.js'),
  '// GENERATED from akalynth-ops/codex public projection (review-gated). Do not hand-edit.\nwindow.CODEX_PUBLIC = ' + JSON.stringify(graph, null, 2) + ';\n');

// 2) static entry rows
const row = (e) => {
  const label = (e.proof && e.proof.status_label) || 'accepted';
  return `      <article class="entry-row" data-id="${e.id}"><div class="entry-icon">${icon(e)}</div>` +
    `<div><div class="entry-title">${e.title}</div><div class="entry-summary">${e.summary || ''}</div></div>` +
    `<div class="pill"><span class="dot ${e.category}"></span>${e.category}</div><div class="time">${label}</div></article>`;
};
const rowsHtml = graph.map(row).join('\n');

// 3) lead detail (Forgehold) — proof visible without JS
const detail = (e) => {
  const p = e.proof || {};
  const art = (e.assets && e.assets[0]) ? `<img class="detail-art" src="${e.assets[0]}" alt="${e.title}" loading="lazy" />` : '';
  const ev = p.evidence_sha256
    ? `<dd class="mono hash" title="${p.evidence_sha256}">${shortHash(p.evidence_sha256)} <span class="badge">${p.source_kind || ''}</span></dd>`
    : '<dd class="mono">asserted (no source hash)</dd>';
  const rel = (e.related || []).filter((id) => byId[id]).map((id) => `<a data-go="${id}">${byId[id].title}</a>`).join(', ') || '—';
  return `<p class="panel-kicker">Selected Entry</p>\n        <h3>${e.title}</h3>${art}\n        <p>${e.body || e.summary || ''}</p>\n` +
    `        <dl class="meta">\n` +
    `          <div><dt>Object ID</dt><dd class="mono">${p.object_id || e.id}</dd></div>\n` +
    `          <div><dt>Status</dt><dd>${p.status_label || 'accepted'}</dd></div>\n` +
    `          <div><dt>Source</dt><dd class="mono">${p.source_ref || '—'}</dd></div>\n` +
    `          <div><dt>Evidence</dt>${ev}</div>\n` +
    `          <div><dt>Authority</dt><dd>Akalynth</dd></div>\n` +
    `          <div class="rel"><dt>Related</dt><dd>${rel}</dd></div>\n` +
    `        </dl>`;
};
const lead = byId['forgehold'] || graph[0];

// 4) inject
const htmlPath = join(WT, 'codex.html');
let html = readFileSync(htmlPath, 'utf8');
html = html.replace('<div id="codexList" class="entry-list"></div>', `<div id="codexList" class="entry-list">\n${rowsHtml}\n            </div>`);
html = html.replace(/<aside class="detail-panel" id="codexDetail">[\s\S]*?<\/aside>/,
  `<aside class="detail-panel" id="codexDetail">\n        ${detail(lead)}\n          </aside>`);
writeFileSync(htmlPath, html);

console.log('wired codex-data.js (', graph.length, 'entries ) + static-rendered', graph.length, 'rows + lead detail:', lead.id);
