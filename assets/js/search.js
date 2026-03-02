/**
 * UbiSys Site Search — Modal UI + search engine
 * Builds a Bootstrap 5 modal via DOM API (no innerHTML).
 * Requires: search-data.js (window.UBISYS_SEARCH_INDEX), Bootstrap 5, Font Awesome.
 */
(function () {
  if (!window.UBISYS_SEARCH_INDEX) return;

  var INDEX = window.UBISYS_SEARCH_INDEX;
  var MAX_RESULTS = 30;

  // Category metadata
  var CAT_META = {
    publication: { label: 'Publications', icon: 'fa-file-lines', order: 0 },
    news:        { label: 'News',         icon: 'fa-newspaper',   order: 1 },
    team:        { label: 'Team',         icon: 'fa-users',       order: 2 },
    project:     { label: 'Projects',     icon: 'fa-diagram-project', order: 3 }
  };

  // ── Build modal DOM ──────────────────────────────────
  var modal = document.createElement('div');
  modal.className = 'modal fade';
  modal.id = 'searchModal';
  modal.tabIndex = -1;
  modal.setAttribute('aria-label', 'Search');

  var dialog = document.createElement('div');
  dialog.className = 'modal-dialog modal-dialog-scrollable modal-lg';

  var content = document.createElement('div');
  content.className = 'modal-content';

  // Header
  var header = document.createElement('div');
  header.className = 'modal-header search-modal-header';
  var inputWrap = document.createElement('div');
  inputWrap.className = 'search-input-wrap';
  var searchIcon = document.createElement('i');
  searchIcon.className = 'fas fa-search search-input-icon';
  var input = document.createElement('input');
  input.type = 'text';
  input.className = 'search-input';
  input.placeholder = 'Search publications, team, projects, news\u2026';
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('spellcheck', 'false');
  var kbdHint = document.createElement('span');
  kbdHint.className = 'search-kbd-hint';
  var kbdEsc = document.createElement('kbd');
  kbdEsc.textContent = 'ESC';
  kbdHint.appendChild(kbdEsc);
  inputWrap.appendChild(searchIcon);
  inputWrap.appendChild(input);
  inputWrap.appendChild(kbdHint);
  header.appendChild(inputWrap);

  // Body
  var body = document.createElement('div');
  body.className = 'modal-body search-results-body';

  // Empty state
  var emptyState = document.createElement('div');
  emptyState.className = 'search-empty text-center py-5 text-muted';
  var emptyIcon = document.createElement('i');
  emptyIcon.className = 'fas fa-search fa-2x mb-3 d-block';
  emptyIcon.style.opacity = '0.3';
  emptyState.appendChild(emptyIcon);
  var emptyText = document.createElement('p');
  emptyText.className = 'mb-0';
  emptyText.textContent = 'Start typing to search across all content';
  emptyState.appendChild(emptyText);
  body.appendChild(emptyState);

  content.appendChild(header);
  content.appendChild(body);
  dialog.appendChild(content);
  modal.appendChild(dialog);
  document.body.appendChild(modal);

  // ── Search logic ─────────────────────────────────────
  function search(query) {
    var terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];

    var results = [];
    for (var i = 0; i < INDEX.length && results.length < MAX_RESULTS; i++) {
      var entry = INDEX[i];
      var haystack = (entry.title + ' ' + entry.text).toLowerCase();
      var allMatch = true;
      for (var t = 0; t < terms.length; t++) {
        if (haystack.indexOf(terms[t]) === -1) { allMatch = false; break; }
      }
      if (allMatch) results.push(entry);
    }
    return results;
  }

  // ── Render results ───────────────────────────────────
  function renderResults(results, query) {
    // Clear body
    while (body.firstChild) body.removeChild(body.firstChild);

    if (!query || !query.trim()) {
      body.appendChild(emptyState);
      return;
    }

    if (!results.length) {
      var noResults = document.createElement('div');
      noResults.className = 'search-empty text-center py-5 text-muted';
      var noIcon = document.createElement('i');
      noIcon.className = 'fas fa-face-meh fa-2x mb-3 d-block';
      noIcon.style.opacity = '0.3';
      noResults.appendChild(noIcon);
      var noText = document.createElement('p');
      noText.className = 'mb-0';
      noText.textContent = 'No results found for "' + query + '"';
      noResults.appendChild(noText);
      body.appendChild(noResults);
      return;
    }

    // Group by category
    var groups = {};
    results.forEach(function (r) {
      if (!groups[r.category]) groups[r.category] = [];
      groups[r.category].push(r);
    });

    // Sort categories by predefined order
    var cats = Object.keys(groups).sort(function (a, b) {
      return (CAT_META[a] ? CAT_META[a].order : 99) - (CAT_META[b] ? CAT_META[b].order : 99);
    });

    var terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

    cats.forEach(function (cat) {
      var meta = CAT_META[cat] || { label: cat, icon: 'fa-circle', order: 99 };
      var groupHeader = document.createElement('div');
      groupHeader.className = 'search-group-header';
      var ghIcon = document.createElement('i');
      ghIcon.className = 'fas ' + meta.icon + ' me-2';
      groupHeader.appendChild(ghIcon);
      groupHeader.appendChild(document.createTextNode(meta.label + ' (' + groups[cat].length + ')'));
      body.appendChild(groupHeader);

      groups[cat].forEach(function (entry) {
        var item = document.createElement('a');
        item.href = entry.url;
        item.className = 'search-result-item';

        var titleEl = document.createElement('div');
        titleEl.className = 'search-result-title';
        highlightText(titleEl, entry.title, terms);

        var snippetEl = document.createElement('div');
        snippetEl.className = 'search-result-snippet';
        // Truncate text for snippet
        var snippet = entry.text.length > 160 ? entry.text.substring(0, 160) + '\u2026' : entry.text;
        highlightText(snippetEl, snippet, terms);

        // Year badge (if present)
        if (entry.year) {
          var badge = document.createElement('span');
          badge.className = 'search-year-badge';
          badge.textContent = entry.year;
          titleEl.appendChild(document.createTextNode(' '));
          titleEl.appendChild(badge);
        }

        item.appendChild(titleEl);
        item.appendChild(snippetEl);
        body.appendChild(item);
      });
    });
  }

  // Highlight matching terms in text using <mark>
  function highlightText(container, text, terms) {
    if (!terms.length) {
      container.appendChild(document.createTextNode(text));
      return;
    }
    var lower = text.toLowerCase();
    // Find all match ranges
    var ranges = [];
    terms.forEach(function (term) {
      var start = 0;
      var idx;
      while ((idx = lower.indexOf(term, start)) !== -1) {
        ranges.push([idx, idx + term.length]);
        start = idx + 1;
      }
    });
    if (!ranges.length) {
      container.appendChild(document.createTextNode(text));
      return;
    }
    // Merge overlapping ranges
    ranges.sort(function (a, b) { return a[0] - b[0]; });
    var merged = [ranges[0]];
    for (var i = 1; i < ranges.length; i++) {
      var last = merged[merged.length - 1];
      if (ranges[i][0] <= last[1]) {
        last[1] = Math.max(last[1], ranges[i][1]);
      } else {
        merged.push(ranges[i]);
      }
    }
    // Build nodes
    var pos = 0;
    merged.forEach(function (r) {
      if (r[0] > pos) container.appendChild(document.createTextNode(text.substring(pos, r[0])));
      var mark = document.createElement('mark');
      mark.textContent = text.substring(r[0], r[1]);
      container.appendChild(mark);
      pos = r[1];
    });
    if (pos < text.length) container.appendChild(document.createTextNode(text.substring(pos)));
  }

  // ── Debounced input handler ──────────────────────────
  var debounceTimer;
  input.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      var q = input.value;
      var results = search(q);
      renderResults(results, q);
    }, 200);
  });

  // ── Modal events ─────────────────────────────────────
  modal.addEventListener('shown.bs.modal', function () {
    input.value = '';
    renderResults([], '');
    input.focus();
  });

  // ── Keyboard shortcut: Ctrl+K / Cmd+K ────────────────
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      var bsModal = bootstrap.Modal.getOrCreateInstance(modal);
      bsModal.toggle();
    }
  });
})();
