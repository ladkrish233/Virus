<div align="center">
  <img src="assets/icon.webp" width="220" alt="Campusx" />

  # Campusx

  **A Claude Code plugin that teaches in a style inspired by CampusX's YouTube lectures.**

  Hinglish by default · why-before-how · code only after the concept is clear · honest about limits

  [![Install](https://img.shields.io/badge/install-%2Fplugin%20marketplace%20add-blueviolet)](#install)
  [![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
  [![v2.0.0](https://img.shields.io/badge/release-v2.0.0-informational)](https://github.com/ladkrish233/campusx/releases/tag/v2.0.0)
</div>

---

**Unofficial, fan-made, not affiliated with or endorsed by CampusX or Nitish Singh.**
This is a style-clone mentor, not the real person — it never claims to be him, never
invents his opinions or personal details, and never pastes long verbatim transcript
passages.

The voice is evidence-backed, not guessed at: it's drawn from a measured analysis of
real CampusX lecture transcripts (see [`research/style-dna.md`](https://github.com/ladkrish233/campusx/tree/research/style-dna/research/style-dna.md)),
with confidence tiers preserved — confirmed high-frequency patterns are treated as
rules, one-off patterns are flagged and used sparingly.

## Install

**Claude Code (CLI/desktop):**

```bash
/plugin marketplace add ladkrish233/campusx
/plugin install campusx
```

## Modes

- **Teach a concept** — `/teach <topic>`, or just say "teach me X", "X kya hota hai",
  "samjhao". Works for any topic, including ones never covered in the source
  transcripts — the method generalizes, not just the topic list.
- **Explain or write code** — `/code`, or paste code and ask for an explanation. Code
  is always explained after the concept, line by line; errors are shown and explained
  before being fixed, never silently patched.
- **Doubt clearing** — `/doubt`, or describe what's confusing you ("I'm stuck on...").
  Restates the doubt, finds the root misconception, re-explains with a fresh analogy,
  then checks understanding.
- **Course** — `/course <topic>` (e.g. `/course FastAPI`), or "build me a course on X",
  "give me a roadmap for X and teach it lecture by lecture". Generates a roadmap first
  (beginner → advanced, via backward design from a stated end-state capability), then
  builds one dense, scrollable HTML lecture page at a time, lazily, as you reach each
  one — never the whole course upfront. Saved locally under
  `./campusx-courses/<topic>/roadmap.md` + `lecture-01.html`, `lecture-02.html`, etc.
- **Lecture** — `/lecture <topic>`, the same dense HTML page format for a single
  one-off deep-dive, no roadmap needed.

Sample prompts:

```
teach me how REST APIs work
explain this code: <paste a snippet>
mujhe overfitting aur underfitting confuse karte hain
explain gradient descent in English
build me a course on FastAPI
give me a roadmap for Docker, then teach it lecture by lecture
make a lecture page on how Git branching works
```

Hinglish is the default; say "english mein" (or just ask in English) to switch — same
teaching method, different language.

Course/lecture pages try to verify fast-changing facts (library APIs, current syntax)
against live documentation before writing code examples — using whatever browser tool
is available in your session, or the plugin's own optional bundled Playwright MCP
server (offered on install, never required). This is always best-effort: if no browser
tool is available or a check fails, the page still gets built, with an honest caveat in
its own text rather than presenting unverified content as certain.

## What's in v2

**v1** shipped teach / code-explain / doubt-clearing / visual-teaching modes, backed by
4 reference files and 3 worked examples, voice-evidenced from 6 real CampusX playlists
(~91 transcript files) — see [`docs/test-results-v1.md`](docs/test-results-v1.md)
(scored ~8.2–8.8/10) and [v1.0.0](https://github.com/ladkrish233/campusx/releases/tag/v1.0.0).

**v2** adds `/course` and `/lecture`, retiring v1's `/slides` click-through-deck mode
entirely in favor of the dense reference-page format. Backed by `roadmap-generation.md`
(backward-design sequencing) and `lecture-page-generation.md` (maps the established
teaching flow onto a reusable HTML skeleton), plus a bundled optional Playwright
dependency for doc-scraping. A full worked example — an 8-lecture FastAPI course — lives
at `references/examples/course-demo/fastapi/`. Tested against the mechanism end-to-end;
see [`docs/test-results-v2.md`](docs/test-results-v2.md). One real gap was found during
testing (foundational jargon like "API"/"JSON" used without being defined for a true
beginner) and fixed using a real CampusX FastAPI transcript as evidence — new lectures
now ground unfamiliar jargon in a concrete everyday scenario before using it, per
`teaching-framework.md`'s "Grounding foundational jargon" rule.

**Deferred** (may become a fresh effort later): revision/quiz mode, project
walkthroughs, compare-two-concepts mode, scraping CampusX's or other educators' GitHub
repos for code-style evidence, and a book-ingestion pipeline.

## Known limitations

- Voice evidence comes from 6 general playlists (~91 files) plus one topic-specific
  FastAPI playlist (13 files) — real but limited samples. More source material would
  sharpen edge cases the current evidence is "thin" on (see `style-guide.md`'s own
  confidence tiers).
- Style-clone only: it approximates a teaching method from transcripts, it isn't the
  real person, and it won't have opinions or facts about him beyond what's evidenced.
- `/course` lectures are generated lazily and locally — there's no resume/continue
  tracking beyond the files already on disk; re-running `/course` on the same topic
  will re-read `roadmap.md` if it exists rather than starting over, but this isn't a
  database-backed progress tracker.
- No built-in roadmap/quiz/revision modes yet beyond `/course`'s own roadmap step (see
  "deferred" above — a dedicated standalone revision/quiz mode is still missing).

## Re-running style extraction with more transcripts

1. Add new transcript files anywhere under a local folder.
2. Re-run the Style DNA extraction as a wayfinder research ticket against this repo's
   map (see `docs/agents/issue-tracker.md` for how tickets work here), pointing it at
   the new source material.
3. Update `references/style-guide.md` and `references/teaching-framework.md` with any
   new confirmed patterns — keep the confidence-tier discipline (don't promote a
   one-off into a hard rule).

## How this was built

Planned and tracked via GitHub Issues through `wayfinder:map` issues — see
[issue #1](https://github.com/ladkrish233/campusx/issues/1) (v1: spec, Style DNA
research, every implementation step) and [issue #10](https://github.com/ladkrish233/campusx/issues/10)
(v2: `/course`/`/lecture`, the FastAPI worked example, and the beginner-jargon fix).

## License

MIT
