# `/project url-shortener` — real GitHub shortlist

Demonstrates `github-search.md`'s search/shortlist step. Search run live
(via the built-in browser, standing in for Playwright in this demo session)
against `github.com/search?q=python+flask+url+shortener&type=repositories`,
shortlisted by README scope matching **Intermediate** level (multi-file,
Flask app structure, one storage/API concept — not raw stars):

1. **[xemeds/tiny0](https://github.com/xemeds/tiny0)** — "Custom URL shortener in
   Flask." SQLite-backed, base64 token generation, Heroku-deploy-ready
   (`Procfile` present). Clean, small package structure. 57 stars.
2. **[AcrobaticPanicc/ShortMe-URL-Shortener](https://github.com/AcrobaticPanicc/ShortMe-URL-Shortener)**
   — "A Flask web app and API used to shorten long URLs." Adds a REST API
   surface alongside the web form — a step up in scope. 38 stars.
3. **[GlowSquid/Flask-URL-Shortener](https://github.com/GlowSquid/Flask-URL-Shortener)**
   — MySQL-backed (not SQLite), adds redirect-tracking/analytics. More
   infrastructure (needs a real MySQL instance), better fit for Advanced. 31
   stars.

Note deliberately not sorted by star count — tiny0 (57 stars) and ShortMe (38
stars) are closer matches for "Intermediate" than GlowSquid's extra
MySQL/analytics scope, which is why GlowSquid is listed third despite having
fewer stars than neither — scope match drove the order, not popularity.

**Learner picks #1 (tiny0)** for this worked example.

## What was read (README + file tree only, per `github-search.md`)

README: SQLite-backed, generates a base64 token per submitted URL, stores
`{token: original_url}`, redirects `WEBSITE_DOMAIN/token` → original URL.
Deploy section lists required env vars (`WEBSITE_DOMAIN`, `SECRET_KEY`,
`DEBUG`, `SQLALCHEMY_DATABASE_URI`).

File tree (`tiny0/tiny0/`, browsed via GitHub's web file view — **source
code itself was not opened**, per the never-quote-real-code rule):
`__init__.py`, `config.py`, `forms.py`, `models.py`, `routes.py`,
`token.py`, plus `static/` and `templates/`.

This structure — not tiny0's actual code — is what `PROJECT_PLAN.md`'s
architecture section below is inspired by.
