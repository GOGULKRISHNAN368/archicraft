from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class SiteHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path in {"/index.html", "/index.html/"}:
            self.send_response(302)
            self.send_header("Location", "/index.htm")
            self.end_headers()
            return
        super().do_GET()


if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", 5500), SiteHandler).serve_forever()
