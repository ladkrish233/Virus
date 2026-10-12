# External repos reviewed for v4

All read-only research via `gh api` / raw GitHub, 2026-10-12. Nothing was cloned or run.

## ArnaudGuiovanna/tutor-mcp — intelligent-tutoring MCP server

**Basics**
- MIT license.
- Go 1.26, built on the official go-sdk, with a pure-Go SQLite store at `~/.tutor-mcp/local`.
- Runs over stdio with `--local`. Prebuilt binaries ship from v0.6.0.
- Alpha: 44 stars, last push 2026-10-10.
- Design line: "Generative teaching. Deterministic pedagogy."

**Surface**
- 46 tools and 1 long protocol prompt.
- Tools cover:
  - the session loop
  - domain concept graphs
  - metacognition
  - Feynman and transfer challenges
  - memory
  - an audit trail

**Pedagogical model**
- Bayesian knowledge tracing per concept (`algorithms/bkt.go`).
- FSRS-5 review scheduling (`algorithms/fsrs.go`).
- A Knowledge Space Theory prerequisite graph (`algorithms/kst.go`).

**How it picks the next activity** (`engine/action_selector.go`), in priority order:
1. Misconception → debug it.
2. Retention below 0.5 → recall.
3. Mastery below 0.3 → new concept.
4. Mastery below 0.85 → practice.
5. Stable mastery → challenge, then Feynman, then transfer.

**Assessment**
- Rubrics are frozen before the learner answers.
- Mastery is tracked separately as estimated, retained, demonstrated and transferred.

**Interface**
- No learner-facing HTML or visuals. All output is JSON for the LLM to phrase.

**Borrow**
- The rule-based "what next" table.
- Diagnose before teaching.
- A misconception log.
- A Feynman gate.
- A session-close recap plus a practice commitment.

**Don't adopt**
- The server, OAuth and multi-tenant machinery.
- The 46-tool surface.
- Its terse persona, which clashes with the Virus voice.
- Treating its parameters as precise. Its own `docs/algorithms.md` calls them uncalibrated.

**Verdict: inspiration only.**

## HKUDS/DeepTutor — learning workspace

**Basics**
- Apache-2.0 license.
- Stack: Python FastAPI, Next.js 16, and LLM/RAG engines.
- Heavy server product, about 41k stars, v1.6.14.

**Guided learning (v0.6.0, `src/agents/guide/`)**
- **LocateAgent:** picks 1–8 knowledge points, ordered from basic to advanced, with a difficulty
  inferred for the user.
- **InteractiveAgent:** one self-contained HTML page per point. Rules include `DOMContentLoaded`,
  `addEventListener`, `data-target` patterns, and a fix-on-bug-report path.
- **ChatAgent:** Q&A scoped to the current point.
- **SummaryAgent:** an evidence-based report that cites the learner's actual questions.

**Mastery Path (current main)**
- Intake: current ability, definition of done, time, teach-first vs probe-first.
- Knowledge types: memory, procedure, concept, design.
- Mastery capped at 0.5 after 1 attempt and 0.8 after 2.
- Distractors must encode real misconceptions.

**Visualize**
- Chooses the render type from the request's verb and prefers static output.
- Complexity limits: at most 4 boxes per row, 2–3 colours.
- Uses `sendPrompt` follow-ups.

**Book**
- 5–10 typed, interleaved blocks per page, each with a `transition_in`.

**Borrow (as skill rules)**
- The visualization router.
- The locate → page → scoped Q&A → summary flow.
- The block planner.
- The HTML robustness checklist.
- Intake questions.
- Mastery caps.

**Don't adopt**
- The server.
- The RAG engines.
- Manim as a default renderer.

**Verdict: inspiration, plus a few rewritten checklists.** The license permits adapting them with
attribution.

## excalimate/excalimate — Excalidraw animation + MCP

**Basics**
- MIT license.
- Package `@excalimate/mcp-server`: npm 0.5.0, repo at 0.5.1.
- `npx @excalimate/mcp-server --stdio`. No API keys.
- 87 stars, essentially one maintainer.
- Its README warns that the code was largely AI-built.

**Surface (35 tools)**
- Scene CRUD.
- `create_animated_scene`.
- Keyframes and sequences, including `create_sequence` with drawProgress or opacity.
- V2 actions with timing `{startMs, durationMs, staggerMs, startMode}`.
- Camera.
- Layout queries: `are_items_in_line`, `items_visible_in_camera`.
- Checkpoints.

**Critical limitation**
- The MCP only holds scene and timeline JSON.
- SVG, GIF and MP4 export needs the hosted browser app (app.excalimate.com) and a manual step.
- The export runtimes are private packages that need a DOM.
- So it cannot produce offline HTML on its own.

**Verdict:** an optional authoring and validation helper. Virus renders Excalidraw-style JSON
itself, using inline rough.js SVG with CSS draw-on animation.

## campusx-official/ai-engineering-roadmap-2016 — CampusX AI Engineering roadmap

**Basics**
- An Astro site. Created 2026-08-14, about 72 commits, many of them on 2026-10-12.
- **No license**, so all rights are reserved. Do not vendor or redistribute it. Linking to it and
  fetching it at runtime for a learner's personal session are fine.

**Content**
- 16 levels (L0–L15) in 7 phases: 165 modules and 285 sessions per `src/data/levels.json`.
- Canonical text files: `AI ENGINEER ROADMAP/level*.txt`.
- `src/data/levels.json` is the cleanest machine-readable source. Per-level fields: `number`,
  `slug`, `title`, `scope`, `prerequisites`, `phase`, `modules[]`, `project`, `totalSessions`,
  `completionOutcomes[]`.
- Each module has objectives, a `Try:` exercise and an `Outcome:` line.

**Levels**
- L0 Software Fundamentals
- L1 LLM 101
- L2 LLM APIs/Orchestration
- L3 Prompt Engineering
- L4 RAG
- L5 AI Agents
- L6 Context Engineering
- L7 LLM Evals
- L8 AI Security
- L9 AI System Design
- L10 LLMOps
- L11 Managed AI Platforms
- L12 Multimodal 101
- L13 Fine-Tuning
- L14 Projects
- L15 Interview Prep

**Resources**
- **Books:** only one, Chip Huyen's *AI Engineering*, at L9.
- **Courses:** CampusX course links in `src/data/courses.ts`, mostly to paid courses.
- **YouTube:** one playlist link, for the Claude Code module (L0 M0.6).

**Verdict:** live fetch plus links. Any book list has to be curated by Virus.

## hellonihar/AI_Learning_Roadmap_2026 — found locally, not used

A third-party roadmap repo cloned into the user's transcripts folder. Its `pdfs/` folder contains
copyrighted books, some from piracy sites. Virus will not use, link or bundle that folder.
Learners may point Virus at books they own (see plan §8.5).
