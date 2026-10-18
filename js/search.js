// Full-text search dialog (Ctrl+K / ⌘K / "/").
// Loads content/search.json on first open and searches titles + note text in the browser.

const modal = document.getElementById("search-modal");
const input = document.getElementById("search-input");
const list = document.getElementById("search-results");

let docs = null;
let results = [];
let selected = 0;
let lastFocus = null;

const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

async function loadDocs() {
  if (docs) return docs;
  const res = await fetch("content/search.json", { cache: "no-cache" });
  docs = (await res.json()).map((d) => ({ ...d, _title: d.title.toLowerCase(), _text: d.text.toLowerCase() }));
  return docs;
}

function highlight(text, terms) {
  const re = new RegExp(`(${terms.map(escapeRe).join("|")})`, "gi");
  return escapeHtml(text).replace(re, "<mark>$1</mark>");
}

function snippet(doc, terms) {
  let pos = -1;
  for (const t of terms) {
    const i = doc._text.indexOf(t);
    if (i !== -1 && (pos === -1 || i < pos)) pos = i;
  }
  if (pos === -1) return doc.text.slice(0, 140);
  const start = Math.max(0, pos - 50);
  return (start > 0 ? "…" : "") + doc.text.slice(start, start + 160) + "…";
}

function search(query) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  const out = [];
  for (const doc of docs) {
    let score = 0;
    let ok = true;
    for (const t of terms) {
      const inTitle = doc._title.includes(t);
      const inText = doc._text.includes(t);
      if (!inTitle && !inText) { ok = false; break; }
      if (inTitle) score += doc._title.startsWith(t) ? 15 : 10;
      if (inText) score += Math.min(doc._text.split(t).length - 1, 10);
    }
    if (ok) out.push({ doc, score });
  }
  return out.sort((a, b) => b.score - a.score).slice(0, 30).map((r) => ({ ...r, terms }));
}

function render() {
  const q = input.value.trim();
  if (!q) {
    list.innerHTML = `<li class="sr-empty">Type to search across all notes — titles, terms and text.</li>`;
    return;
  }
  results = search(q);
  selected = 0;
  if (!results.length) {
    list.innerHTML = `<li class="sr-empty">No results for “${escapeHtml(q)}”</li>`;
    return;
  }
  list.innerHTML = results
    .map(({ doc, terms }, i) => `
      <li class="${i === selected ? "selected" : ""}" data-i="${i}">
        <a href="#/${doc.id}">
          <div class="sr-path">${escapeHtml(doc.path)}</div>
          <div class="sr-title">${highlight(doc.title, terms)}</div>
          <div class="sr-snippet">${highlight(snippet(doc, terms), terms)}</div>
        </a>
      </li>`)
    .join("");
}

function select(i) {
  const items = list.querySelectorAll("li[data-i]");
  if (!items.length) return;
  selected = (i + items.length) % items.length;
  items.forEach((li, j) => li.classList.toggle("selected", j === selected));
  items[selected].scrollIntoView({ block: "nearest" });
}

export async function openSearch() {
  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  input.focus();
  input.select();
  try {
    await loadDocs();
    render();
  } catch {
    list.innerHTML = `<li class="sr-empty">Search index not found. Run <code>python scripts/build_index.py</code>.</li>`;
  }
}

export function closeSearch() {
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.style.overflow = "";
  lastFocus?.focus?.();
}

export function initSearch() {
  input.addEventListener("input", () => docs && render());
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); select(selected + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); select(selected - 1); }
    else if (e.key === "Enter") {
      const r = results[selected];
      if (r) { location.hash = `#/${r.doc.id}`; closeSearch(); }
    }
  });
  list.addEventListener("click", (e) => { if (e.target.closest("a")) closeSearch(); });
  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close-search]")) closeSearch(); });
  document.querySelectorAll("[data-open-search]").forEach((b) => b.addEventListener("click", openSearch));

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      modal.hidden ? openSearch() : closeSearch();
    } else if (e.key === "/" && modal.hidden && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName)) {
      e.preventDefault();
      openSearch();
    } else if (e.key === "Escape") {
      closeSearch();
    }
  });
}
