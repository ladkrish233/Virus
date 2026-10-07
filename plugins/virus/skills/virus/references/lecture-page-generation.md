# Lecture Page Generation

How to build a single lecture's HTML page — for `/course`'s per-lecture step, or
`/lecture` for a standalone page. Read `style-guide.md` and `teaching-framework.md`
first; this file is about fitting that voice and structure into the HTML container.

## Start from the skeleton

Copy `references/templates/lecture-page-skeleton.html` as the base for every lecture
page — don't write HTML from scratch each time. It already carries the visual system
(dark theme, orange accent, card/callout/code-block styles) and the **mascot image
pre-embedded as an inline base64 data URI** (`--mascot-img-data`) — fully
self-contained, no external image file or network fetch needed. Fill in its
placeholder sections; don't restructure the skeleton's CSS or layout system
per-lecture, and never re-encode or re-fetch the mascot image — reuse the CSS
variable that's already there.

## The mascot is a character in the page, not a decoration

A generic docs-site look was the original (v2) design and it read as flavorless — the
page should feel like the mascot is actually presenting it, the way the plugin's own
persona ("the strict sir who explains everything") is sold everywhere else. The
skeleton wires this in three places; keep all three when filling a lecture:

- **`.mascot`** — a circular avatar in the hero header, next to the title, as if the
  teacher is standing there about to start the lecture. Don't remove it or shrink it
  out of the layout.
- **`.mascot-badge`** — a small version of the same image inside `.card.tip` and
  `.card.warn` labels (e.g. "Virus says:", "dhyan rakhna" — see the skeleton's label
  markup) — it's the same character pointing something out mid-lecture, not a random
  info icon.
- **Footer `.mascot-badge`** — present at the sign-off, same idea as the hero: the
  teacher closing the lecture, not a page just ending.

## Mapping teaching-framework.md's flow into the page's sections

The skeleton's structure (mascot hero header, table-of-contents nav, numbered
sections, tip/warn callout cards with the mascot badge, a "stage" flow diagram) is a
container for the same six-beat lesson flow in `teaching-framework.md` — translate,
not replace:

- **Hero header** — the lecture's title + a one-line "what we'll cover and why"
  (the recap+agenda beat, minus any literal spoken-greeting language — this is a
  written page, not a transcript) — displayed beside the mascot avatar.
- **A numbered section per major beat** — typically: the "why" (motivation/problem),
  the "what" (concept + example), one or more "how" sections (mechanism, then code),
  then a "common mistakes / edge cases" section. Use `<h2>` with a section number, same
  as the skeleton's existing pattern.
- **Stage-flow diagram** (the skeleton's `.stage` element) — use it when the lecture's
  core idea is a pipeline or sequence of steps (request→response, data flowing through
  stages, a build process) — skip it when the topic doesn't have a natural stage flow;
  don't force one in.
- **Tip cards** (`.card.tip`, mascot badge + a label like "virus says") — for a
  genuinely good practice or a "here's the right way to do X" callout. **Warn cards**
  (`.card.warn`, same badge + a label like "dhyan rakhna") — for a real gotcha, a
  common mistake, or something that silently breaks (matches the confirmed
  error-narration habit — call it out, don't bury it in prose).
- **Code blocks** — real, runnable code the lecture is actually about, narrated around
  it in prose (per `teaching-framework.md`'s code-teaching pattern), not just dumped in.
- **Footer** — a short close naming what's next (the lecture that follows in the
  roadmap), not a generic sign-off, with the mascot badge beside it.

## Voice inside HTML text

All prose inside the page (not just an accompanying chat message) should read in the
established Hinglish voice from `style-guide.md` and the code-mixing rules from
`hinglish-guide.md` — the lecture page *is* the lesson, not a supplement to a verbal
one. If the learner asked for English mode, the page's text follows
`hinglish-guide.md`'s English-switch rule too.

## Accuracy and doc-scraping

Best-effort, never mandatory — no comparable tool documents a scrape-vs-memory fallback
pattern (confirmed by `research/plugin-inspiration.md`), so this rule is original to
Virus, not adapted from precedent:

- **When to check live docs**: a topic whose API surface, syntax, or defaults change
  often (a fast-moving library, a framework mid-major-version, anything where "current
  version" materially changes the correct code) — check before writing that lecture's
  code examples. A stable, well-known, rarely-changing concept (core language syntax,
  a long-settled algorithm) doesn't need a live check every time.
- **How to check, cheapest first**: for a single static docs page, a plain fetch tool
  (Claude Code's built-in `WebFetch`, if available) is the right first choice — it's
  lighter than launching a browser and is usually sufficient. Reach for browser
  automation (the built-in browser pane, Claude in Chrome, or the plugin's own optional
  Playwright MCP server, declared in `plugins/virus/.mcp.json`) only when the page needs
  JS rendering, interaction, or multi-step navigation to reach the content — a plain
  fetch returning the real page is success, not a sign Playwright "didn't work." Confirmed
  in practice: a `/lecture` run against real framework docs used `WebFetch` and got a
  genuine 200 OK with real content, with Playwright never needing to fire — that's the
  system working as designed, not a fallback.
- **Exception: a full-site crawl driven by a pasted docs URL** (building a whole
  roadmap/course from a documentation site's own structure, not just checking one fact)
  is the multi-step case this section defers to browser automation for — see
  `docs-crawl.md`, which specifically prefers Playwright over a plain fetch for that job.
- **Never block on it.** If no browser tool is available, the scrape fails, or the docs
  site can't be reached, fall back to careful from-memory content — but say so plainly
  in the lecture's prose or your chat response (e.g. "yeh thoda purana syntax ho sakta
  hai, docs check nahi ho paya" / "couldn't verify against current docs, so double-check
  before running this in production") rather than presenting unverified content as
  equally certain. This matches `style-guide.md`'s honesty-about-limits anti-pattern
  rule — never fake certainty.
- **Never let scraping gate lecture generation.** A lecture is still built and delivered
  even when doc-scraping isn't possible; the only change is the confidence caveat above.

## File output

- `/course`: each lecture goes to `./virus-courses/<topic>/lecture-NN.html` (zero-padded
  two digits), one at a time, lazily, as the learner reaches it.
- `/lecture`: a single standalone page at `./virus-courses/<topic>/lecture-01.html`,
  no roadmap file alongside it.

After writing a lecture's file, briefly tell the learner what's in it (same honesty
principle as v1's visual-teaching convention) rather than silently dropping a file.
