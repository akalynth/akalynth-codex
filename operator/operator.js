/* Akalynth Codex — PRIVATE operator console renderer.
   One graph, four surfaces. Operator/Builder/Agent see internal fields the public
   projection hides. This file + operator-data.js are operator-only; never deploy. */
(function () {
  'use strict';
  var DATA = window.CODEX_FULL || [];
  var STATS = window.CODEX_STATS || {};
  var byId = {}; DATA.forEach(function (e) { byId[e.id] = e; });
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  var hash = function (h) { return h ? '<span class="hash mono">' + h.slice(0, 10) + '…' + h.slice(-6) + '</span>' : '—'; };

  var surface = 'operator';
  var selId = (DATA[0] || {}).id;

  var SURFACES = {
    public: { label: 'Public', note: 'What players see — the public_projection only (~10–20%). Internal fields are absent by construction.', entries: function (e) { return e.public_projection && e.public_projection.published; } },
    builder: { label: 'Builder', note: 'Studio design view — world design, implementation, and the graph. Receipts/packets hidden.', entries: function () { return true; } },
    operator: { label: 'Operator', note: 'The full object — lineage, evidence, packets, visibility. The private operating record.', entries: function () { return true; } },
    agent: { label: 'Agent', note: 'What an AI worker reads — accepted status + assigned packets + dependencies.', entries: function (e) { return e.status === 'accepted'; } },
  };
  var visible = function () { return DATA.filter(SURFACES[surface].entries); };
  var srcBadge = function (e) { return '<span class="badge ' + e._source_kind + '">' + e._source_kind + '</span>'; };

  function relTargets(e) {
    if (surface === 'public') return (e.public_projection && e.public_projection.related) || [];
    return (e.related || []).map(function (r) { return r.target; });
  }
  function relLinks(e) {
    var r = relTargets(e);
    if (!r.length) return '—';
    return r.map(function (id) { return byId[id] ? '<a data-go="' + id + '">' + esc(byId[id].title) + '</a>' : '<span class="hash mono">' + esc(id) + '</span>'; }).join(', ');
  }
  function kv(pairs) { return '<dl class="kv">' + pairs.filter(Boolean).map(function (p) { return '<dt>' + esc(p[0]) + '</dt><dd>' + p[1] + '</dd>'; }).join('') + '</dl>'; }
  function list(items) { return '<ul class="lst">' + items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>'; }

  function renderTabs() {
    $('tabs').innerHTML = Object.keys(SURFACES).map(function (s) { return '<button data-s="' + s + '" class="' + (s === surface ? 'active' : '') + '">' + SURFACES[s].label + '</button>'; }).join('');
    Array.prototype.forEach.call($('tabs').children, function (b) { b.onclick = function () { surface = b.dataset.s; renderAll(); }; });
    $('note').textContent = SURFACES[surface].note;
  }
  function renderStats() {
    var sk = STATS.by_source_kind || {};
    $('stats').innerHTML = 'showing <b>' + visible().length + '</b>/' + DATA.length + ' · open packets <b>' + (STATS.open_packets || 0) + '</b> · receipt-backed <b>' + (sk.receipt || 0) + '</b>';
  }
  function rowSub(e) {
    if (surface === 'public') return esc(e.public_projection.summary || '');
    if (surface === 'agent') return (e.packets || []).length + ' packet(s) · ' + relTargets(e).length + ' deps';
    return esc((e.world && e.world.description) || e.summary || '');
  }
  function renderList() {
    var v = visible();
    $('list').innerHTML = v.map(function (e) {
      var right = surface === 'public' ? '<span class="badge">public</span>' : srcBadge(e);
      return '<div class="ent-row ' + (e.id === selId ? 'sel' : '') + '" data-id="' + e.id + '">' +
        '<div><div class="ent-title">' + esc(e.title) + '</div><div class="ent-sub">' + rowSub(e) + '</div></div>' +
        '<div class="k-type">' + esc(e.type) + '</div><div>' + right + '</div></div>';
    }).join('');
    Array.prototype.forEach.call($('list').children, function (r) { r.onclick = function () { selId = r.dataset.id; renderList(); renderDetail(); }; });
  }

  function detailPublic(e) {
    var pp = e.public_projection;
    var art = pp.assets && pp.assets[0] ? '<img class="art" src="../../repos/akalynth-site/' + pp.assets[0] + '" alt="">' : '';
    return art + '<p class="lede">' + esc(pp.body || pp.summary) + '</p>' +
      kv([['Object ID', '<span class="mono">' + e.id + '</span>'], ['Category', esc(pp.category)], ['Source ref', '<span class="mono">' + esc(e.lineage.origin) + '</span>'], ['Related', relLinks(e)]]) +
      '<p class="hidden-note">Builder/Operator fields are not part of this surface.</p>';
  }
  function detailBuilder(e) {
    var w = e.world || {}, im = w.implementation || {};
    return '<p class="lede">' + esc(w.description || e.summary) + '</p>' +
      '<div class="section"><h4>Design</h4>' + kv([['Type', esc(e.type)], ['Status', esc(e.status)], im.stage ? ['Stage', esc(im.stage)] : null, im.slice ? ['Slice', '<span class="mono">' + esc(im.slice) + '</span>'] : null, im.registry ? ['Registry', '<span class="mono">' + esc(im.registry) + '</span>'] : null]) +
      (w.design_refs ? list(w.design_refs.map(function (r) { return '<span class="mono">' + esc(r) + '</span>'; })) : '') + '</div>' +
      '<div class="section"><h4>Graph</h4><div class="kv"><dt>Related</dt><dd>' + relLinks(e) + '</dd></div></div>';
  }
  function detailOperator(e) {
    var w = e.world || {}, im = w.implementation || {}, l = e.lineage || {}, vis = e.visibility || {};
    var s = '';
    s += '<div class="section"><h4>Identity</h4>' + kv([['Object ID', '<span class="mono">' + e.id + '</span>'], ['Type', esc(e.type)], ['Authority', esc(e.authority)], ['Author', esc(e.author)], ['Updated', '<span class="mono">' + esc(e.updated) + '</span>'], ['Tags', (e.tags || []).join(', ')]]) + '</div>';
    s += '<div class="section"><h4>Status & Visibility</h4>' + kv([['Status', esc(e.status)], ['Visibility', Object.keys(vis).filter(function (k) { return vis[k]; }).join(' · ')], ['Source kind', srcBadge(e)]]) + '</div>';
    s += '<div class="section"><h4>Lineage</h4>' + kv([['Origin', '<span class="mono">' + esc(l.origin) + '</span>'], ['Accepted', String(l.accepted)], ['Accepted at', '<span class="mono">' + esc(l.accepted_at) + '</span>'], ['Last change', esc(l.last_accepted_change)]]) + '</div>';
    s += '<div class="section"><h4>World</h4><p class="lede">' + esc(w.description || '') + '</p>' + (w.design_refs ? list(w.design_refs.map(function (r) { return '<span class="mono">' + esc(r) + '</span>'; })) : '') + (im.slice ? kv([['Stage', esc(im.stage)], ['Slice', '<span class="mono">' + esc(im.slice) + '</span>']]) : '') + '</div>';
    if (e.evidence) s += '<div class="section"><h4>Evidence</h4>' + list(e.evidence.map(function (v) { return '<span class="badge ' + (v.kind === 'manifest' ? 'receipt' : '') + '">' + v.kind + '</span> <span class="mono">' + esc(v.ref) + '</span><br>' + hash(v.sha256); })) + '</div>';
    if (e.packets) s += '<div class="section"><h4>Packets (' + e.packets.length + ')</h4>' + e.packets.map(function (p) { return '<div class="pkt"><span class="mono">' + esc(p.kind) + ' · ' + esc(p.ref.split('/').pop()) + '</span><span class="st">' + esc(p.status) + '</span></div>'; }).join('') + '</div>';
    s += '<div class="section"><h4>Graph</h4><div class="kv"><dt>Related</dt><dd>' + relLinks(e) + '</dd></div></div>';
    s += '<div class="section"><h4>Public projection</h4>' + (e.public_projection && e.public_projection.published ? kv([['Published', 'true'], ['Category', esc(e.public_projection.category)], ['Summary', esc(e.public_projection.summary)]]) : '<p class="hidden-note">not published</p>') + '</div>';
    return s;
  }
  function detailAgent(e) {
    var pk = e.packets || [];
    return kv([['Object', '<span class="mono">' + e.id + '</span>'], ['Status', '<span class="badge">' + esc(e.status) + '</span>'], ['Source', srcBadge(e)]]) +
      '<div class="section"><h4>Actionable packets (' + pk.length + ')</h4>' + (pk.length ? pk.map(function (p) { return '<div class="pkt"><span class="mono">' + esc(p.kind) + '</span><span class="st">' + esc(p.status) + '</span></div>'; }).join('') : '<p class="hidden-note">none open</p>') + '</div>' +
      '<div class="section"><h4>Dependencies</h4><div class="kv"><dt>Related</dt><dd>' + relLinks(e) + '</dd></div></div>';
  }

  function renderDetail() {
    var e = byId[selId]; if (!e) { $('detail').innerHTML = ''; return; }
    var body = surface === 'public' ? detailPublic(e) : surface === 'builder' ? detailBuilder(e) : surface === 'agent' ? detailAgent(e) : detailOperator(e);
    $('detail').innerHTML = '<h3>' + esc(e.title) + '</h3>' + body;
    Array.prototype.forEach.call($('detail').querySelectorAll('[data-go]'), function (a) { a.onclick = function () { selId = a.dataset.go; renderList(); renderDetail(); window.scrollTo({ top: 0, behavior: 'smooth' }); }; });
  }

  function renderAll() { renderTabs(); renderStats(); renderList(); renderDetail(); }
  if (!DATA.length) { document.body.innerHTML += '<p style="padding:22px">No operator data. Run codex/tools/project-operator.mjs.</p>'; return; }
  renderAll();
})();
