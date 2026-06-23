(function () {
  const TYPE_ICON = {
    place: '◎',
    mechanic: '▧',
    creature: '◉',
    asset: '✦',
    quest: '◇',
    system: '△',
    codex: '◌',
    city: '▣',
    default: '✥',
  };

  const entries = (window.CODEX_WORLD_GRAPH || []).map((e) => {
    const open = (e.packets || []).filter((p) => p.status === 'open');
    return {
      id: e.id,
      title: e.title,
      category: e.type || 'entry',
      summary: e.summary || '',
      authority: e.authority || e.author || '—',
      status: e.status || 'draft',
      icon: TYPE_ICON[e.type] || TYPE_ICON.default,
      packet: open.length
        ? open.map((p) => `${p.kind}: ${p.ref.split('/').pop()}`).join(' · ')
        : 'No open packet',
      related: e.related || [],
      assets: e.assets || [],
      packets: e.packets || [],
      tags: e.tags || [],
      raw: e,
    };
  });

  const categories = Object.entries(
    entries.reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count, icon: TYPE_ICON[name] || '▦' }));

  const stats = [
    { label: 'Entries', value: String(entries.length), delta: `${window.CODEX_WORLD_STATS?.open_packets || 0} open packets`, icon: '▣' },
    { label: 'Types', value: String(categories.length), delta: 'world graph', icon: '▦' },
    { label: 'Accepted', value: String(window.CODEX_WORLD_STATS?.by_status?.accepted || 0), delta: 'operator authority', icon: '◜' },
    { label: 'Azura', value: String(entries.filter((e) => (e.tags || []).includes('azura')).length), delta: 'chill-zone lane', icon: '✦' },
  ];

  let selectedCategory = null;
  let selectedId = 'azura-chill-zone';
  const $ = (id) => document.getElementById(id);

  function assetThumb(path) {
    if (!path) return null;
    const base = path.split('/').pop();
    if (path.includes('codex/studio/')) return base;
    return null;
  }

  function renderStats() {
    $('stats').innerHTML = stats
      .map(
        (s) => `
    <article class="stat-card">
      <div class="stat-icon">${s.icon}</div>
      <div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-value">${s.value}</div>
        <div class="stat-delta">${s.delta}</div>
      </div>
    </article>`
      )
      .join('');
  }

  function filtered() {
    const q = ($('searchInput').value || '').trim().toLowerCase();
    return entries.filter((e) => {
      if (selectedCategory && e.category !== selectedCategory) return false;
      if (!q) return true;
      const hay = [e.title, e.summary, e.id, ...(e.tags || [])].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }

  function renderEntries() {
    const list = filtered();
    $('entryList').innerHTML = list
      .map((e) => {
        const active = e.id === selectedId;
        return `
      <button class="entry-row${active ? ' active' : ''}" data-id="${e.id}" type="button">
        <div class="entry-icon">${e.icon}</div>
        <div class="entry-copy">
          <div class="entry-title">${e.title}</div>
          <div class="entry-meta">${e.category} · ${e.authority}</div>
        </div>
        <span class="status-pill status-${e.status}">${e.status}</span>
      </button>`;
      })
      .join('');
    $('entryList').querySelectorAll('[data-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedId = btn.dataset.id;
        renderEntries();
        renderDetail();
      });
    });
  }

  function renderDetail() {
    const e = entries.find((x) => x.id === selectedId) || entries[0];
    if (!e) return;
    selectedId = e.id;
    $('detailTitle').textContent = e.title;
    $('detailSummary').textContent = e.summary || 'No summary.';
    $('detailCategory').textContent = e.category;
    $('detailAuthority').textContent = e.authority;
    $('detailStatus').textContent = e.status;
    $('detailPacket').textContent = e.packet;

    const thumbs = (e.assets || [])
      .map((a) => assetThumb(a.path))
      .filter(Boolean)
      .slice(0, 4)
      .map((t) => `<img src="${t}" alt="" width="48" height="48" style="image-rendering:pixelated;border-radius:6px;border:1px solid rgba(255,255,255,.08)">`)
      .join('');
    const related = (e.related || [])
      .map((r) => `<button type="button" class="link-btn related-link" data-target="${r.target}">${r.rel} → ${r.target}</button>`)
      .join(' ');
    $('detailExtra').innerHTML = `
      ${thumbs ? `<div class="asset-thumbs">${thumbs}</div>` : ''}
      ${related ? `<div class="related-links">${related}</div>` : ''}
      <pre class="packet-pre">${JSON.stringify(e.packets, null, 2)}</pre>`;
    $('detailExtra').querySelectorAll('.related-link').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedId = btn.dataset.target;
        renderEntries();
        renderDetail();
      });
    });
  }

  function renderCategories() {
    $('categoryGrid').innerHTML = categories
      .map(
        (c) => `
      <button class="category-card${selectedCategory === c.name ? ' active' : ''}" data-cat="${c.name}" type="button">
        <div class="cat-icon">${c.icon}</div>
        <div>
          <div class="cat-name">${c.name}</div>
          <div class="cat-count">${c.count} entries</div>
        </div>
      </button>`
      )
      .join('');
    $('categoryGrid').querySelectorAll('[data-cat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedCategory = selectedCategory === btn.dataset.cat ? null : btn.dataset.cat;
        renderCategories();
        renderEntries();
      });
    });
  }

  $('searchInput').addEventListener('input', () => renderEntries());
  $('clearFilters').addEventListener('click', () => {
    selectedCategory = null;
    $('searchInput').value = '';
    renderCategories();
    renderEntries();
  });
  $('resetCategories').addEventListener('click', () => {
    selectedCategory = null;
    renderCategories();
    renderEntries();
  });
  $('focusSearch').addEventListener('click', () => $('searchInput').focus());
  document.addEventListener('keydown', (ev) => {
    if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === 'k') {
      ev.preventDefault();
      $('searchInput').focus();
    }
  });

  renderStats();
  renderCategories();
  renderEntries();
  renderDetail();
})();