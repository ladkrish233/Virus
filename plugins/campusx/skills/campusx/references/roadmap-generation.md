# Roadmap Generation

How `/course <topic>` builds its roadmap. Read this before generating any roadmap.
See [research/plugin-inspiration.md](https://github.com/ladkrish233/campusx/blob/research/plugin-inspiration/research/plugin-inspiration.md)
for where the backward-design approach below came from (adapted as an idea, not copied
as implementation — no comparable tool does this exact roadmap+lazy-HTML shape).

## Backward design: start from the end-state, not the beginning

Don't start sequencing by listing "things about X" in the order they occur to you.
Instead:

1. **State the end-state first**: what should the learner be able to *do* after
   finishing this roadmap? (e.g. for FastAPI: "build and deploy a production API with
   auth, validation, and tests.") This single sentence is the destination every lecture
   works toward.
2. **Work backward**: what does someone need to already understand right before they
   can do that end-state thing? Keep working backward until you hit "things a complete
   beginner already knows" (basic Python, basic HTTP concepts, etc. — don't re-teach
   prerequisites outside the topic's own domain).
3. **Chunk the backward chain into lectures**, forward order (beginner → advanced),
   each lecture covering one coherent unit of "new capability unlocked."

This produces a roadmap that's shaped by *what the learner needs to be able to do*,
not by a generic outline of "topics a tutorial covers."

## Lecture count and granularity

No fixed number — let the backward-design chain determine it naturally. As a sanity
check: a lecture should be narrow enough to teach in one sitting (same scope rule as
`teaching-framework.md`'s default flow) but not so narrow that the roadmap balloons
into dozens of trivial steps. For most library/framework topics, this tends to land
somewhere in the 6-12 lecture range, but never force a topic to fit that range —
a genuinely small topic might need 3 lectures, a genuinely deep one might need 20.

## "Production level" is topic-dependent — no universal checklist

Per the v2 map's decision, don't apply a fixed late-roadmap checklist (e.g. "always
end with deployment, testing, security" for every topic). Instead, ask what
"production-ready" actually means **for this specific topic** as part of the backward
design in step 1 — for a web framework that might mean deployment and auth; for a
data-processing library it might mean performance at scale and error handling; for a
CLI tool it might just mean packaging and distribution. Let the end-state sentence
drive what counts as advanced, not a template.

## The roadmap file

Write `./campusx-courses/<topic>/roadmap.md`:

```markdown
# <Topic> Roadmap

**End state:** <the one-sentence capability from step 1>

## Lectures

1. **<Lecture title>** — <one-line why this lecture exists / what it unlocks>
   - Prerequisites: <none, or "Lecture N">
2. **<Lecture title>** — ...
```

Keep each lecture's one-liner honest about *why it's positioned there* — this mirrors
the confirmed CampusX habit (see `teaching-framework.md`'s "multi-topic sequencing"
section) of narrating the roadmap logic out loud rather than leaving it implicit.

## Generation timing

The roadmap itself is generated **immediately and in full** — it's cheap (just an
outline, no HTML). Only the per-lecture HTML pages are lazy (see
`lecture-page-generation.md`): build lecture 1's page right after the roadmap, and
build each further lecture only when the learner reaches it ("next lecture", or asking
for it by name/number). Never generate every lecture's HTML upfront.
