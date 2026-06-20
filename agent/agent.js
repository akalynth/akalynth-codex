/* Akalynth Codex — PRIVATE Agent console (the engineering-brain).
   Two views over the graph: the WORK QUEUE (open packets) and the SOURCE-TRUTH
   index (every object's status, so a worker knows what is accepted/safe to build
   on vs draft/blocked) + dependencies. Never deploy. */
(function () {
  'use strict';
  var G = window.CODEX_AGENT || { objects: [], packets: [], stats: {} };
  var OBJ = G.objects || [], PKT = G.packets || [], STATS = G.stats || {};
  var objById = {}; OBJ.forEach(function (o) { objById[o.id] = o; });
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  var STATUS_ORDER = ['accepted', 'candidate', 'draft', 'blocked', 'obsolete'];

  var tab = 'queue';
  var selPkt = 0;
  var selObj = (OBJ[0] || {}).id;

  function renderTabs() {
    $('tabs').innerHTML =
      '<button data-t="queue" class="' + (tab === 'queue' ? 'active' : '') + '">Work Queue</button>' +
      '<button data-t="truth" class="' + (tab === 'truth' ? 'active' : '') + '">Source Truth</button>';
    Array.prototype.forEach.call($('tabs').children, function (b) { b.onclick = function () { tab = b.dataset.t; renderAll(); }; });
    $('note').textContent = tab === 'queue'
      ? 'Open work packets the world graph has generated. "Ready" = the source object is accepted, so the work is safe to act on.'
      : 'Every object\'s accepted state — what a worker may treat as canonical (accepted) vs in-flight (candidate/draft) or unsafe (blocked).';
  }
  function renderStats() {
    var os = STATS.by_object_status || {};
    $('stats').innerHTML = 'packets <b>' + (STATS.open_packets || 0) + '</b> open · <b>' + (STATS.ready || 0) + '</b> ready · objects <b>' + os.accepted + '</b> accepted / <b>' + ((os.candidate || 0) + (os.draft || 0) + (os.blocked || 0)) + '</b> in-flight';
  }

  // ---- queue ----
  function renderQueue() {
    if (!PKT.length) { $('list').innerHTML = '<div style="padding:20px;color:var(--muted)">Queue empty.</div>'; return; }
    $('list').innerHTML = '<div class="group-h">open work packets · ' + PKT.length + '</div>' + PKT.map(function (p, i) {
      return '<div class="pkt-row ' + (i === selPkt ? 'sel' : '') + '" data-i="' + i + '">' +
        '<div><div class="pkt-title">' + esc(p.ref_name) + '</div><div class="pkt-src">from ' + esc(p.object_title) + '</div></div>' +
        '<div><span class="badge kind">' + esc(p.kind) + '</span></div>' +
        '<div>' + (p.ready ? '<span class="badge ready">ready</span>' : '<span class="badge open">' + esc(p.status) + '</span>') + '</div></div>';
    }).join('');
    Array.prototype.forEach.call($('list').querySelectorAll('.pkt-row'), function (r) { r.onclick = function () { selPkt = +r.dataset.i; renderQueue(); renderDetail(); }; });
  }
  function deps(o) {
    var r = (o.related || []);
    if (!r.length) return '<p class="k-cat">none</p>';
    return r.map(function (rel) {
      var t = objById[rel.target];
      var st = t ? '<span class="badge ' + t.status + '">' + t.status + '</span>' : '<span class="badge">external</span>';
      return '<div class="dep"><span>' + (t ? '<a data-obj="' + rel.target + '">' + esc(t.title) + '</a>' : esc(rel.target)) + ' <span class="k-cat">(' + esc(rel.rel) + ')</span></span>' + st + '</div>';
    }).join('');
  }
  function detailPacket() {
    var p = PKT[selPkt]; if (!p) { $('detail').innerHTML = ''; return; }
    var src = objById[p.object_id] || {};
    var v = p.ready
      ? '<div class="verdict ready">✓ Ready — source object <b>' + esc(p.object_title) + '</b> is accepted; this packet is safe to act on.</div>'
      : '<div class="verdict blocked">⚠ Not ready — source object status is <b>' + esc(p.object_status) + '</b>.</div>';
    $('detail').innerHTML = '<h3>' + esc(p.ref_name) + '</h3>' + v +
      '<div class="section"><h4>Packet</h4><dl class="kv">' +
        '<dt>Kind</dt><dd><span class="badge kind">' + esc(p.kind) + '</span></dd>' +
        '<dt>Status</dt><dd><span class="badge ' + (p.ready ? 'ready' : 'open') + '">' + esc(p.status) + '</span></dd>' +
        '<dt>Ref</dt><dd><span class="mono">' + esc(p.ref) + '</span></dd>' +
        '<dt>Assignee</dt><dd>' + (p.assignee ? esc(p.assignee) : 'unassigned') + '</dd>' +
      '</dl></div>' +
      '<div class="section"><h4>Source object</h4><dl class="kv">' +
        '<dt>Object</dt><dd><a data-obj="' + p.object_id + '">' + esc(p.object_title) + '</a></dd>' +
        '<dt>Status</dt><dd><span class="badge ' + esc(p.object_status) + '">' + esc(p.object_status) + '</span></dd>' +
      '</dl></div>' +
      '<div class="section"><h4>Dependencies</h4>' + deps(src) + '</div>';
    wireObjLinks();
  }

  // ---- source truth ----
  function renderTruth() {
    var groups = STATUS_ORDER.filter(function (s) { return OBJ.some(function (o) { return o.status === s; }); });
    $('list').innerHTML = groups.map(function (s) {
      var rows = OBJ.filter(function (o) { return o.status === s; }).map(function (o) {
        return '<div class="obj-row ' + (o.id === selObj ? 'sel' : '') + '" data-obj="' + o.id + '">' +
          '<div><div class="obj-title">' + esc(o.title) + '</div><div class="k-cat">' + esc(o.category) + '</div></div>' +
          '<div class="k-cat">' + (o.packet_count ? o.packet_count + ' packet(s)' : '—') + '</div>' +
          '<div><span class="badge ' + o.status + '">' + o.status + '</span></div></div>';
      }).join('');
      return '<div class="group-h">' + s + ' · ' + OBJ.filter(function (o) { return o.status === s; }).length + '</div>' + rows;
    }).join('');
    Array.prototype.forEach.call($('list').querySelectorAll('.obj-row'), function (r) { r.onclick = function () { selObj = r.dataset.obj; renderTruth(); renderDetail(); }; });
  }
  function detailObject() {
    var o = objById[selObj]; if (!o) { $('detail').innerHTML = ''; return; }
    var safe = o.accepted
      ? '<div class="verdict ready">✓ Accepted — canonical. Safe for a worker to build on.</div>'
      : '<div class="verdict blocked">⚠ ' + esc(o.status) + ' — in-flight; do not treat as shipped truth.</div>';
    $('detail').innerHTML = '<h3>' + esc(o.title) + '</h3>' + safe +
      '<div class="section"><h4>Object</h4><dl class="kv">' +
        '<dt>ID</dt><dd class="mono">' + esc(o.id) + '</dd>' +
        '<dt>Type</dt><dd>' + esc(o.type) + '</dd>' +
        '<dt>Category</dt><dd>' + esc(o.category) + '</dd>' +
        '<dt>Status</dt><dd><span class="badge ' + o.status + '">' + o.status + '</span></dd>' +
        '<dt>Packets</dt><dd>' + (o.packet_count || 0) + '</dd>' +
      '</dl></div>' +
      '<div class="section"><h4>Dependencies</h4>' + deps(o) + '</div>';
    wireObjLinks();
  }

  function wireObjLinks() {
    Array.prototype.forEach.call($('detail').querySelectorAll('[data-obj]'), function (a) {
      a.onclick = function () { tab = 'truth'; selObj = a.dataset.obj; renderAll(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
    });
  }

  function renderDetail() { if (tab === 'queue') detailPacket(); else detailObject(); }
  function renderAll() { renderTabs(); renderStats(); if (tab === 'queue') renderQueue(); else renderTruth(); renderDetail(); }
  if (!OBJ.length) { document.body.innerHTML += '<p style="padding:22px">No agent data. Run codex/tools/project-agent.mjs.</p>'; return; }
  renderAll();
})();
