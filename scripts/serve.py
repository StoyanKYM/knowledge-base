"""Local preview server.

Run:  python scripts/serve.py      then open http://localhost:8000

Rebuilds the notes index every time the page loads it, so new or edited
notes show up after a browser refresh — no need to rerun anything.
"""
import http.server
import sys
from functools import partial
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build_index  # noqa: E402

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
ROOT = Path(__file__).resolve().parent.parent


class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map,
                      ".md": "text/markdown; charset=utf-8", ".svg": "image/svg+xml",
                      ".webm": "video/webm", ".mp4": "video/mp4", ".js": "text/javascript"}

    def do_GET(self):
        if self.path.split("?")[0] == "/content/index.json":
            build_index.main()
        super().do_GET()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


with http.server.ThreadingHTTPServer(("", PORT), partial(Handler, directory=str(ROOT))) as httpd:
    print(f"Knowledge Base running at http://localhost:{PORT}  (Ctrl+C to stop)")
    httpd.serve_forever()
