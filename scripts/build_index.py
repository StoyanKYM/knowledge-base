"""Scan content/ and write content/index.json (navigation tree) and content/search.json (search data).

Run:  python scripts/build_index.py
No third-party packages needed. The GitHub Action runs this on every push.
"""
import json
import re
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
WORDS_PER_MINUTE = 200


def parse_front_matter(text):
    """Split a Markdown file into (meta dict, body). Supports simple `key: value` lines."""
    meta = {}
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            for line in text[3:end].strip().splitlines():
                if ":" not in line:
                    continue
                key, value = line.split(":", 1)
                value = value.strip().strip('"').strip("'")
                if value.lower() in ("true", "false"):
                    value = value.lower() == "true"
                elif re.fullmatch(r"-?\d+", value):
                    value = int(value)
                meta[key.strip()] = value
            text = text[end + 4:]
    return meta, text.lstrip("\n")


def plain_text(md):
    """Rough Markdown -> plain text, used for word counts and search."""
    md = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", md)          # images
    md = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", md)        # links -> text
    md = re.sub(r"^```.*$", " ", md, flags=re.M)            # code fences
    md = re.sub(r"^\s*\|?\s*:?-{3,}.*$", " ", md, flags=re.M)  # table separators
    md = re.sub(r"[#*_>`|~]", " ", md)
    md = re.sub(r"^\s*[-+]\s+", " ", md, flags=re.M)        # list bullets
    return re.sub(r"\s+", " ", md).strip()


def title_from_name(name):
    name = re.sub(r"^\d+[-_.]\s*", "", name)
    return name.replace("-", " ").replace("_", " ").strip().title()


def sort_key(node):
    return (node.get("order", 9999), node["_name"])


def read_note(path):
    meta, body = parse_front_matter(path.read_text(encoding="utf-8"))
    text = plain_text(body)
    words = len(text.split())
    node_id = path.relative_to(CONTENT).with_suffix("").as_posix()
    note = {
        "type": "note",
        "id": node_id,
        "title": meta.get("title") or title_from_name(path.stem),
        "description": meta.get("description", ""),
        "updated": str(meta.get("updated", "")),
        "words": words,
        "minutes": max(1, round(words / WORDS_PER_MINUTE)),
        "_name": path.name,
    }
    for key in ("order", "placeholder"):
        if key in meta:
            note[key] = meta[key]
    return note, text


def read_folder(path, search, crumbs):
    index = path / "_index.md"
    meta = parse_front_matter(index.read_text(encoding="utf-8"))[0] if index.exists() else {}
    folder = {
        "type": "folder",
        "id": path.relative_to(CONTENT).as_posix(),
        "title": meta.get("title") or title_from_name(path.name),
        "_name": path.name,
    }
    for key in ("short", "description", "summary", "icon", "order", "homeExpand"):
        if key in meta:
            folder[key] = meta[key]

    children = []
    for child in path.iterdir():
        if child.is_dir() and child.name not in ("images", "media", "assets") and not child.name.startswith("."):
            sub = read_folder(child, search, crumbs + [folder["title"]])
            if sub["children"]:
                children.append(sub)
        elif child.suffix == ".md" and child.name != "_index.md":
            note, text = read_note(child)
            children.append(note)
            search.append({
                "id": note["id"],
                "title": note["title"],
                "path": " / ".join(crumbs + [folder["title"]]),
                "text": text,
            })
    folder["children"] = sorted(children, key=sort_key)
    return folder


def strip_private(node):
    node.pop("_name", None)
    for child in node.get("children", []):
        strip_private(child)
    return node


def main():
    search = []
    tree = []
    pages = {}
    for child in CONTENT.iterdir():
        if child.is_dir() and not child.name.startswith("."):
            folder = read_folder(child, search, [])
            if folder["children"]:
                tree.append(folder)
        elif child.suffix == ".md":
            # Top-level Markdown files (e.g. about.md) are standalone pages, not part of the tree.
            note, text = read_note(child)
            pages[note["id"]] = strip_private(note)
            search.append({"id": note["id"], "title": note["title"], "path": "Pages", "text": text})

    tree = [strip_private(f) for f in sorted(tree, key=sort_key)]
    index = {
        "generated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "tree": tree,
        "pages": pages,
    }
    (CONTENT / "index.json").write_text(json.dumps(index, ensure_ascii=False, indent=1), encoding="utf-8")
    (CONTENT / "search.json").write_text(json.dumps(search, ensure_ascii=False), encoding="utf-8")
    print(f"Indexed {len(search)} notes -> content/index.json, content/search.json")


if __name__ == "__main__":
    main()
