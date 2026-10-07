# Lecture Page Generation

How to build a single lecture's HTML page — for `/course`'s per-lecture step, or
`/lecture` for a standalone page. Read `style-guide.md` and `teaching-framework.md`
first; this file is about fitting that voice and structure into the HTML container.

## Start from the skeleton

Copy `references/templates/lecture-page-skeleton.html` as the base for every lecture
page — don't write HTML from scratch each time. It already carries the visual system
(colors, type, light/dark via `prefers-color-scheme`, card/callout/code-block styles)
matching the reference format the user supplied. Fill in its placeholder sections;
don't restructure the skeleton's CSS or layout system per-lecture.

## Mapping teaching-framework.md's flow into the page's sections

The skeleton's structure (hero header, table-of-contents nav, numbered sections, tip/
warn callout cards, a "stage" flow diagram) is a container for the same six-beat
lesson flow in `teaching-framework.md` — translate, don't replace:

- **Hero header** — the lecture's title + a one-line "what we'll cover and why"
  (the recap+agenda beat, minus any literal spoken-greeting language — this is a
  written page, not a transcript).
- **A numbered section per major beat** — typically: the "why" (motivation/problem),
  the "what" (concept + example), one or more "how" sections (mechanism, then code),
  then a "common mistakes / edge cases" section. Use `<h2>` with a section number, same
  as the skeleton's existing pattern.
- **Stage-flow diagram** (the skeleton's `.stage` element) — use it when the lecture's
  core idea is a pipeline or sequence of steps (request→response, data flowing through
  stages, a build process) — skip it when the topic doesn't have a natural stage flow;
  don't force one in.
- **Tip cards** (`.card.tip`) — for a genuinely good practice or a "here's the right
  way to do X" callout. **Warn cards** (`.card.warn`) — for a real gotcha, a common
  mistake, or something that silently breaks (matches the confirmed error-narration
  habit — call it out, don't bury it in prose).
- **Code blocks** — real, runnable code the lecture is actually about, narrated around
  it in prose (per `teaching-framework.md`'s code-teaching pattern), not just dumped in.
- **Footer** — a short close naming what's next (the lecture that follows in the
  roadmap), not a generic sign-off.

## Voice inside HTML text

All prose inside the page (not just an accompanying chat message) should read in the
established Hinglish voice from `style-guide.md` and the code-mixing rules from
`hinglish-guide.md` — the lecture page *is* the lesson, not a supplement to a verbal
one. If the learner asked for English mode, the page's text follows
`hinglish-guide.md`'s English-switch rule too.

## Accuracy and doc-scraping

See the doc-scraping guidance (added alongside the Playwright bundling work in
[issue #14](https://github.com/ladkrish233/campusx/issues/14)) for when to verify facts
against live documentation before writing a lecture's code examples.

## File output

- `/course`: each lecture goes to `./campusx-courses/<topic>/lecture-NN.html` (zero-padded
  two digits), one at a time, lazily, as the learner reaches it.
- `/lecture`: a single standalone page at `./campusx-courses/<topic>/lecture-01.html`,
  no roadmap file alongside it.

After writing a lecture's file, briefly tell the learner what's in it (same honesty
principle as v1's visual-teaching convention) rather than silently dropping a file.
