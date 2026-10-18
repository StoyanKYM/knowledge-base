// Markdown -> DOM, plus the extras the notes need:
//   - heading ids (for the table of contents)
//   - image/video paths relative to the note's folder
//   - ![caption](video.mp4 / .webm) renders as a <video>
//   - "> **Exam tip:** ..." blockquotes styled as callouts
//   - scrollable tables, copy buttons on code blocks

const VIDEO_RE = /\.(mp4|webm|mov|m4v)([?#].*)?$/i;
const ABSOLUTE_RE = /^([a-z][a-z0-9+.-]*:|\/|#)/i;
const CALLOUT_RE = /^(exam tip|tip|note|important|remember|warning)\b/i;

export function stripFrontMatter(text) {
  if (!text.startsWith("---")) return text;
  const end = text.indexOf("\n---", 3);
  return end === -1 ? text : text.slice(end + 4).replace(/^\s*\n/, "");
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

// baseDir: folder of the note, e.g. "content/linux/"
export function renderMarkdown(markdown, baseDir) {
  const tpl = document.createElement("template");
  tpl.innerHTML = window.marked.parse(stripFrontMatter(markdown), { gfm: true });
  const root = tpl.content;
  const resolve = (src) => (ABSOLUTE_RE.test(src) ? src : baseDir + src);

  // Heading ids
  const used = new Set();
  root.querySelectorAll("h2, h3, h4").forEach((h) => {
    const base = slugify(h.textContent) || "section";
    let id = base;
    for (let i = 2; used.has(id); i++) id = `${base}-${i}`;
    used.add(id);
    h.id = id;
  });

  // Images and videos
  root.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src") || "";
    const alt = img.getAttribute("alt") || "";
    let media = img;
    if (VIDEO_RE.test(src)) {
      media = document.createElement("video");
      media.src = resolve(src);
      media.controls = true;
      media.playsInline = true;
      media.preload = "metadata";
      if (alt) media.setAttribute("aria-label", alt);
      img.replaceWith(media);
    } else {
      img.src = resolve(src);
      img.loading = "lazy";
      img.decoding = "async";
    }
    // An image alone in its paragraph with alt text gets a caption.
    const p = media.parentElement;
    if (alt && p && p.tagName === "P" && p.childNodes.length === 1) {
      const fig = document.createElement("figure");
      const cap = document.createElement("figcaption");
      cap.textContent = alt;
      fig.append(media, cap);
      p.replaceWith(fig);
    }
  });

  // Links: other notes (*.md) become in-app routes, external links open in a new tab
  root.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (/^https?:/i.test(href)) {
      a.target = "_blank";
      a.rel = "noopener";
    } else if (!ABSOLUTE_RE.test(href) && /\.md(#.*)?$/i.test(href)) {
      const url = new URL(href, new URL(baseDir, location.href));
      const i = url.pathname.indexOf("/content/");
      if (i !== -1) a.setAttribute("href", "#/" + decodeURIComponent(url.pathname.slice(i + 9)).replace(/\.md$/i, ""));
    } else if (!ABSOLUTE_RE.test(href)) {
      a.setAttribute("href", resolve(href)); // e.g. a linked PDF next to the note
    }
  });

  // Tables
  root.querySelectorAll("table").forEach((t) => {
    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    t.replaceWith(wrap);
    wrap.append(t);
  });

  // Callouts
  root.querySelectorAll("blockquote").forEach((q) => {
    const strong = q.querySelector(":scope > p:first-child > strong:first-child");
    if (strong && CALLOUT_RE.test(strong.textContent)) q.classList.add("tip");
  });

  // Copy buttons
  root.querySelectorAll("pre").forEach((pre) => {
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.type = "button";
    btn.textContent = "Copy";
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(pre.querySelector("code")?.textContent ?? pre.textContent);
        btn.textContent = "Copied";
      } catch {
        btn.textContent = "Failed";
      }
      setTimeout(() => (btn.textContent = "Copy"), 1500);
    });
    pre.append(btn);
  });

  return root;
}
