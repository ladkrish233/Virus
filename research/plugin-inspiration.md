# Research: existing plugins/tools for roadmap + lecture-generation inspiration

Resolves issue #11 (wayfinder map #10, "Campusx v2 — roadmap + lecture-page teaching mode").
Scope: structural inspiration only — **no code or content was copied**, same rule v1 followed
when extracting CampusX's voice from transcripts (ideas/patterns are fair game, verbatim
material is not).

## 1. Existing Claude Code plugins/skills generating structured multi-part learning content

Several comparable skill suites exist. None matches Campusx's exact "roadmap → lazily-built
dense HTML lecture page" shape, but the sequencing logic is genuinely useful prior art:

- **`yujxzjcn/teaching-skills`** (github.com/YujxZJCN/teaching-skills) — the closest conceptual
  match. A 14+ skill pipeline organized into pedagogy stages (1 DESIGN → 2 BUILD → 3 ASSESS →
  4 DELIVER → 5 REFLECT), orchestrated by a `teaching-pipeline` skill over a shared "Course
  Passport" document that threads state between skills. `course-designer` (Stage 1) explicitly
  does **backward design**: Bloom's-taxonomy-tagged learning outcomes → assessment plan →
  semester arc → syllabus, with a Socratic mode for blank-page starts. `lesson-builder` (Stage 2)
  turns that arc into lesson plans/lecture notes/slide outlines. This "outcomes-first, then
  sequence, then build lazily per lesson" flow is the strongest available analogy for how
  Campusx should decide lecture count/order for `/course`.
- **`Jellypod-Inc/school-skills`** — K-12-oriented (lesson plans, Socratic tutoring, rubrics,
  concept maps). Output format is plain Markdown lesson plans, not a rendered page; relevant
  mainly as another "topic → structured plan" pipeline, not for HTML output format.
- **`pedrohcgs/claude-code-my-workflow`** — academic/econ research workflow toolkit with a
  `/create-lecture` command ("full lecture creation workflow"), but it's one command inside a
  much larger paper-writing suite and its public docs don't expose the sequencing/format logic
  in enough detail to borrow from.
- **`tuan3w/obsidian-vault-agent`** — has `/course` and `/lecture` commands, but they're the
  *inverse* of what we need: they ingest existing courses/lecture recordings (via transcription)
  into Obsidian notes, rather than generating new curricula from a topic.
- No marketplace plugin was found that specifically names a "roadmap generator" skill producing
  a lecture-numbered curriculum the way ticket #13 will need to define. This is a gap worth
  flagging: the roadmap-sequencing logic will likely need to be designed mostly from scratch.

## 2. Scrape-vs-training-knowledge decisions and graceful scrape-failure fallback

This category turned up **no documented, reusable design pattern** specific to "when should an
AI course/tutorial generator scrape live docs vs. rely on trained knowledge." Search surfaced
only generic engineering usage of the term "best-effort" (e.g., audit/observability systems that
"fail silently and let the caller continue," API client retry/fallback idioms) — useful as a
general engineering stance but not a worked example from a comparable content-generation tool.
**Recommendation for ticket #14**: there isn't prior art to lean on here; the "best-effort, never
blocking" design will need to be specified from first principles (e.g., try a bounded-time
scrape, fall back to the model's own knowledge on timeout/error, and label freshness in the
output so neither path silently misleads the reader).

## 3. Course-generator / curriculum-builder tools more broadly

- **roadmap.sh** — the most recognizable prior art for "roadmap" as a UX concept: community-
  maintained, hand-curated beginner→advanced node graphs per topic (not AI-generated), now
  with an AI-assisted course-generation feature layered on top in their app. Sequencing itself
  is still curated/community-reviewed rather than algorithmic — worth noting as a contrast to
  Campusx's fully generative approach.
- **Coursebox.ai** — a commercial "idea/document → full course" generator producing
  module-based courses (modules, not numbered lectures) across many domains. Its public surface
  doesn't document sequencing logic; it's useful only as evidence that "topic → generated
  curriculum of N parts" is a validated product shape, not for borrowing mechanism details.
- **`yujxzjcn/teaching-skills`'s `course-designer`** (also listed above) is the most rigorously
  documented sequencing approach found anywhere in this research: backward design from
  Bloom's-tagged outcomes, which is a well-established instructional-design method worth
  citing explicitly when ticket #13 specifies how `/course` decides lecture count/order.

## 4. Dense single-page reference/explainer formats (layout inspiration)

- **learnxinyminutes.com** — single scrollable page per language, entirely comment-annotated
  code, no separate prose/code split. Good precedent for "information density via code-first
  narration," though it lacks the callout-card and stage-diagram elements the target template
  already has.
- **DevDocs.io / Zeal / Dash** — offline/searchable API doc browsers. Their relevant convention
  is a persistent sidebar table of contents next to a single scrollable content pane per topic,
  which the target template (`docs/templates/git-github-from-scratch.html`) already implements.
  They don't use tip/warning callout cards or stage-flow diagrams, so no new idea here beyond
  confirming the sidebar-TOC pattern is a safe, well-trodden convention.
- No distinct documentation-generator tool was found that combines numbered sections +
  callout/admonition cards + an embedded stage-flow diagram in one dense page the way the
  target template does — the closest real-world analogs (MkDocs Material "admonition" blocks,
  Docusaurus's note/tip/warning blocks) confirm callout-card styling is a common, safe pattern,
  but none of them pair it with a stage-flow diagram or lecture-numbered structure. This
  combination appears to be a genuinely original composition rather than one borrowed wholesale
  from an existing tool — nothing to flag as "no comparable result" beyond that specific
  combination.

## Summary of gaps (nothing comparable found)

- No Claude Code plugin exists today that generates a lecture-numbered roadmap *and* lazily
  builds matching dense HTML lecture pages in the Campusx shape — the closest is
  `teaching-skills`' staged pipeline, which is lesson-plan/Markdown output, not a single dense
  HTML page per lecture.
- No documented pattern was found anywhere for the specific "best-effort live-doc-scrape with
  silent fallback to trained knowledge" decision ticket #14 needs — this will need original
  design work, informed only by generic best-effort/fallback engineering idioms.
