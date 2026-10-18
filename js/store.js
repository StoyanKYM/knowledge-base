// Small wrappers around localStorage (sidebar state, theme). Storage can be unavailable (private mode,
// blocked site data), so every access is guarded and the site still works without it.

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

// ---- Expanded folders in the sidebar ----
const openSet = new Set(load("kb-open", []));
export const isOpen = (id) => openSet.has(id);
export function setOpen(id, open) {
  open ? openSet.add(id) : openSet.delete(id);
  save("kb-open", [...openSet]);
}

// ---- Theme ----
export function currentTheme() {
  const t = document.documentElement.dataset.theme;
  if (t) return t;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("kb-theme", theme);
  } catch {
    /* ignore */
  }
}
