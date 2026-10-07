# Docs-Driven Course Building

How to build a roadmap and course directly from an official documentation site,
when the learner pastes a docs URL instead of (or alongside) a bare topic name.
Read this before `roadmap-generation.md` when a URL is involved — it changes where
the roadmap's structure comes from.

## Trigger

The learner pastes a documentation URL and asks for a course, roadmap, or structured
teaching built from it — e.g. "make a course from https://ai.pydantic.dev/", "scrape
this and build a roadmap: <url>", or `/course <url>`.

## Force Playwright for this — not a plain fetch

`lecture-page-generation.md`'s doc-scraping policy prefers a plain fetch tool
(`WebFetch`) for reading a single static page, and that's still correct for a single
doc-accuracy check inside an already-running lecture. **This is different**: discovering
a full site's navigation structure and then visiting several of its pages is exactly
the "heavier multi-step automation" case that policy already sets aside for browser
tools — and specifically for this, prefer the plugin's bundled **Playwright MCP server**
over the built-in browser pane or Claude in Chrome, since a full crawl is the kind of
repeated, scripted multi-page job Playwright is built for. If Playwright isn't
connected in the session (not installed, or declined), fall back to whatever browser
tool is available — but say so plainly to the learner, and don't silently substitute a
single-page fetch for what was supposed to be a full-site crawl.

## How to crawl

1. **Navigate to the given URL.**
2. **Read the site's own navigation** — the sidebar/table-of-contents list of section
   links. This list *is* the roadmap's raw material: the site's own authors already
   organized it, so don't re-invent an ordering from scratch via backward design.
3. **Keep the site's own ordering as the default lecture sequence.** Only deviate when
   a section is clearly not a teaching step — a full API reference, a changelog,
   "Comparisons," "Project"/meta pages, or anything that's a lookup table rather than a
   concept to learn in sequence. Treat those as an appendix link from the relevant
   lecture instead of giving them their own lecture.
4. **For each lecture, visit its corresponding doc page(s)** and read the real content.
   Ground that lecture's teaching in what's actually there — but **rewrite it in
   Virus's own voice** (`style-guide.md`, `teaching-framework.md`); never paste the
   site's prose directly into the lecture page. Add a short "source: <url>" line in the
   lecture noting where the facts came from, since this content is directly derived
   from someone else's docs, not an original Virus example.
5. **Note the source in the roadmap file.** `roadmap.md`'s header gets an extra line:
   `**Source:** <the docs URL>`, alongside the usual end-state line from
   `roadmap-generation.md`.

## What NOT to do

- Don't turn a pure reference section (full API reference, a changelog, a "Project" or
  meta page) into its own lecture — link to it from whichever real lecture needs it.
- Don't copy the site's own wording into the lecture page — teach it, don't quote it.
- Don't crawl recursively beyond the top-level nav/sidebar the learner can see — visit
  the sections listed there, not every link found on every page.
- Don't silently fall back to a single-page fetch when a full crawl was asked for —
  say so if Playwright (or any browser tool) isn't available.
