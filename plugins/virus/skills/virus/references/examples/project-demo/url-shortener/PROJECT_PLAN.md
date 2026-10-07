# URL Shortener Plan

**Rebuilding:** [xemeds/tiny0](https://github.com/xemeds/tiny0) — picked because it's a
clean, small Flask app with exactly one feature (shorten + redirect), SQLite (no extra
infra to set up), and deploy-ready — a good Intermediate-level match.

**End state:** A Flask web app where a user submits a long URL, gets back a short token
URL, and visiting that short URL redirects to the original — running locally, with a
clear path to Heroku deployment.

## Architecture

(Inspired by tiny0's package layout, not copied — original structure, reimplemented)

```
urlshort/
  __init__.py     # Flask app factory
  config.py       # env-var-based config (domain, secret key, db uri)
  models.py       # the URL<->token database model
  routes.py       # the submit form route + the redirect route
  token.py        # short-token generation
  templates/      # the submit form + result page
run.py
requirements.txt
```

## Constraints

- Never copy tiny0's actual code — rebuild from this architecture and your own
  understanding of what each piece needs to do.
- SQLite for storage (matches tiny0's default, keeps local setup simple).
- Keep each iteration runnable — don't move to the next row until this one works.

## Iterations

| # | Status | What it adds | Concept taught |
|---|--------|--------------|----------------|
| 1 | done | Minimal Flask app, one route, runs and shows "it works" | What a web framework/route actually is (grounded via a concrete request/response scenario) |
| 2 | done | A form page where the user can submit a URL, and the app echoes it back (no storage yet) | HTML forms + reading submitted data in Flask (`request.form` vs `request.args`) |
| 3 | pending | Generate a short token for the submitted URL and store `{token: url}` in SQLite | Why a token/short-key is needed, and the model layer (Flask-SQLAlchemy basics) |
| 4 | pending | Add the redirect route: visiting `/<token>` looks up the stored URL and redirects | How Flask route parameters and redirects work |
| 5 | pending | Basic validation: reject empty input, auto-prefix `http://` if missing | Why validation matters before trusting user input |
| 6 | pending | Minimal styling on the form/result templates | (light touch — not a teaching-heavy step) |
| 7 | pending | Deploy-ready: `Procfile`, `requirements.txt`, env-var config | Deployment as its own checklist step, per the real evidence — not a why/what beat, just the mechanics |
