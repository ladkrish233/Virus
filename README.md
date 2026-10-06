# Campusx

A minimal Claude Code plugin that teaches in a style inspired by CampusX's YouTube
lectures — Hinglish by default, why-before-how, code only after the concept is clear,
honest about limits. **Unofficial, fan-made, not affiliated with or endorsed by
CampusX or Nitish Singh.** This is a style-clone mentor, not the real person — it never
claims to be him, never invents his opinions or personal details, and never pastes
long verbatim transcript passages.

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
- **Visual teaching** — `/slides <topic>`, or ask for a slide deck / interactive
  explainer. Builds a single self-contained HTML file, no build tooling required.

Sample prompts:

```
teach me how REST APIs work
explain this code: <paste a snippet>
mujhe overfitting aur underfitting confuse karte hain
make a slide deck explaining how a RAG pipeline works
explain gradient descent in English
```

Hinglish is the default; say "english mein" (or just ask in English) to switch — same
teaching method, different language.

## What's in v1

Teach / code-explain / doubt-clearing / visual-teaching modes, backed by 4 reference
files (`style-guide.md`, `teaching-framework.md`, `hinglish-guide.md`,
`visual-teaching.md`) and 3 original worked examples. Tested against 5 sample prompts
(see [`docs/test-results-v1.md`](docs/test-results-v1.md)) scoring ~8.2–8.8/10 across
voice fidelity, teaching flow, language quality, and non-AI-ness.

**Deferred past v1** (may become a fresh effort later): roadmap planning,
revision/quiz mode, project walkthroughs, compare-two-concepts mode, ingesting more
source transcripts, scraping CampusX's or other educators' GitHub repos for
code-style evidence, and a book-ingestion pipeline.

## Known limitations

- Voice evidence comes from 6 playlists (~91 transcript files) — a real but limited
  sample. More source material would sharpen edge cases the current evidence is
  "thin" on (see `style-guide.md`'s own confidence tiers).
- Style-clone only: it approximates a teaching method from transcripts, it isn't the
  real person, and it won't have opinions or facts about him beyond what's evidenced.
- No built-in roadmap/quiz/revision modes yet (see "deferred" above).

## Re-running style extraction with more transcripts

1. Add new transcript files anywhere under a local folder.
2. Re-run the Style DNA extraction as a wayfinder research ticket against this repo's
   map (see `docs/agents/issue-tracker.md` for how tickets work here), pointing it at
   the new source material.
3. Update `references/style-guide.md` and `references/teaching-framework.md` with any
   new confirmed patterns — keep the confidence-tier discipline (don't promote a
   one-off into a hard rule).

## How this was built

Planned and tracked via GitHub Issues through a `wayfinder:map` — see
[issue #1](https://github.com/ladkrish233/campusx/issues/1) for the full decision
trail: spec, Style DNA research, and every implementation step.

## License

MIT
