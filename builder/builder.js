/* Akalynth Codex — PRIVATE Builder console (Layer 2, studio design).
   One graph, design view: descriptions, design docs, implementation stage, graph.
   Includes unreleased (builder-only) entries. No operator receipts/packets here —
   that data isn't even in builder-data.js. Never deploy. */
(function () {
  'use strict';
  var DATA = window.CODEX_BUILDER || [];
  var STATS = window.CODEX_BUILDER_STATS || {};
  var byId = {}; DATA.forEach(function (e) { byId[e.id] = e; });
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };

  var filter = { kind: 'all' };           // {kind:'all'} | {kind:'cat', cat} | {kind:'unreleased'}
  var selId = (DATA[0] || {}).id;

  var stage = function (e) { return (e.implementation && e.implementation.stage) || 'lore'; };
  var isUnreleased = function (e) { return !e.published; };

  function categories() { return Object.keys(STATS.by_category || {}).sort(); }
  function visible() {
    if (filter.kind === 'cat') return DATA.filter(function (e) { return e.category === filter.cat; });
    if (filter.kind === 'unreleased') return DATA.filter(isUnreleased);
    return DATA;
  }

  function renderChips() {
    var chips = [['all', 'All ' + DATA.length]];
    categories().forEach(function (c) { chips.push(['cat:' + c, c]); });
    chips.push(['unreleased', '⚑ Unreleased ' + (STATS.internal || 0)]);
    $('chips').innerHTML = chips.map(function (c) {
      var key = c[0];
      var active = (key === 'all' && filter.kind === 'all') || (key === 'unreleased' && filter.kind === 'unreleased') || (key === 'cat:' + filter.cat);
      return '<button data-k="' + key + '" class="' + (active ? 'active' : '') + '">' + esc(c[1]) + '</button>';
    }).join('');
    Array.prototype.forEach.call($('chips').children, function (b) {
      b.onclick = function () {
        var k = b.dataset.k;
        filter = k === 'all' ? { kind: 'all' } : k === 'unreleased' ? { kind: 'unreleased' } : { kind: 'cat', cat: k.slice(4) };
        renderChips(); renderList();
      };
    });
  }
  function renderStats() {
    var st = STATS.by_stage || {};
    $('stats').innerHTML = 'objects <b>' + STATS.objects + '</b> · unreleased <b>' + (STATS.internal || 0) + '</b> · spec <b>' + (st.spec || 0) + '</b> · lore <b>' + (st.lore || 0) + '</b>';
  }
  function renderList() {
    var v = visible();
    $('list').innerHTML = v.map(function (e) {
      var right = isUnreleased(e) ? '<span class="badge unreleased">unreleased</span>' : '<span class="badge public">public</span>';
      return '<div class="ent-row ' + (e.id === selId ? 'sel' : '') + (isUnreleased(e) ? ' unreleased' : '') + '" data-id="' + e.id + '">' +
        '<div><div class="ent-title">' + esc(e.title) + '</div><div class="ent-sub">' + esc(e.description.slice(0, 80)) + '</div></div>' +
        '<div class="k-cat">' + esc(e.category) + '</div>' +
        '<div class="pillbar"><span class="badge ' + stage(e) + '">' + stage(e) + '</span>' + right + '</div></div>';
    }).join('') || '<div style="padding:20px;color:var(--muted)">none</div>';
    Array.prototype.forEach.call($('list').children, function (r) { if (r.dataset.id) r.onclick = function () { selId = r.dataset.id; renderList(); renderDetail(); }; });
  }
  function relLinks(e) {
    if (!e.related || !e.related.length) return '—';
    return e.related.map(function (r) { var t = byId[r.target]; return t ? '<a data-go="' + r.target + '">' + esc(t.title) + '</a> <span class="k-cat">(' + r.rel + ')</span>' : '<span class="mono">' + esc(r.target) + '</span>'; }).join('<br>');
  }
  function renderDetail() {
    var e = byId[selId]; if (!e) { $('detail').innerHTML = ''; return; }
    var im = e.implementation || {};
    var pub = e.published
      ? '<span class="badge public">published</span>'
      : '<span class="badge unreleased">internal — not on public surface</span>';
    var docs = e.design_refs && e.design_refs.length
      ? '<ul class="docs">' + e.design_refs.map(function (d) { return '<li><span class="mono">' + esc(d) + '</span></li>'; }).join('') + '</ul>'
      : '<p class="k-cat">no design docs linked</p>';
    var s = '<h3>' + esc(e.title) + '</h3>';
    if (isUnreleased(e)) s += '<p class="unreleased-note">⚑ Builder-only — designed, not released; absent from the public Codex.</p>';
    s += '<p class="lede">' + esc(e.description) + '</p>';
    s += '<div class="section"><h4>Design</h4>' + '<dl class="kv">' +
      '<dt>Type</dt><dd>' + esc(e.type) + '</dd>' +
      '<dt>Category</dt><dd>' + esc(e.category) + '</dd>' +
      '<dt>Status</dt><dd>' + esc(e.status) + '</dd>' +
      '<dt>Stage</dt><dd><span class="badge ' + stage(e) + '">' + stage(e) + '</span>' + (im.slice ? ' · <span class="mono">' + esc(im.slice) + '</span>' : '') + '</dd>' +
      (im.registry ? '<dt>Registry</dt><dd><span class="mono">' + esc(im.registry) + '</span></dd>' : '') +
      '<dt>Design source</dt><dd><span class="mono">' + esc(e.design_source || '—') + '</span> <span class="badge ' + e.source_kind + '">' + e.source_kind + '</span></dd>' +
      '<dt>Public</dt><dd>' + pub + '</dd>' +
      '</dl></div>';
    s += '<div class="section"><h4>Design docs</h4>' + docs + '</div>';
    s += '<div class="section"><h4>Graph</h4><div>' + relLinks(e) + '</div></div>';
    if (e.tags && e.tags.length) s += '<div class="section"><h4>Tags</h4><div class="pillbar">' + e.tags.map(function (t) { return '<span class="badge">' + esc(t) + '</span>'; }).join('') + '</div></div>';
    $('detail').innerHTML = s;
    Array.prototype.forEach.call($('detail').querySelectorAll('[data-go]'), function (a) { a.onclick = function () { selId = a.dataset.go; renderList(); renderDetail(); window.scrollTo({ top: 0, behavior: 'smooth' }); }; });
  }

  if (!DATA.length) { document.body.innerHTML += '<p style="padding:22px">No builder data. Run codex/tools/project-builder.mjs.</p>'; return; }
  renderChips(); renderStats(); renderList(); renderDetail();
})();
