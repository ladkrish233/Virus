# Project-Mentoring Evidence — `/project` build-loop research

Source: local transcript folders already committed at `research/transcripts-v3/`:
- `ai-coding-claude-code/` — 15 files, the "Learn AI Coding the Right Way (No Vibe Coding)" CampusX playlist
  (Claude Code setup, slash commands, CLAUDE.md, spec-driven development, plan mode, subagents, MCP, hooks, plugins).
- `python-projects/` — 18 files, CampusX mini-projects (Tkinter calculator, wallpaper viewer, news-app clone) plus
  Python-fundamentals videos bundled in the same zip. Fundamentals videos were skimmed but are not cited below
  since they contain no project-build-order evidence; only the three actual project walkthroughs are cited.

Both folders are auto-caption transcripts, one word/phrase per line, heavily Hindi/Devanagari with English
loanwords; several passages (especially in the Calculator transcript) have visible mis-transcription noise. Where
a quote below looks garbled, that reflects the source caption quality, not a transcription error introduced here.
All quotes are translated/paraphrased from the Hindi-English code-mixed original unless shown as literal English
captions (the Wallpaper Viewer and part of the News App files are captioned in English).

---

## 1. Vibe-coding vs. learning properly

Strong, direct, repeated evidence — this is the explicit premise of the whole playlist.

`Learn AI Coding the Right Way (No Vibe Coding)  New Playlist  CampusX.txt` (the playlist-intro video) defines vibe
coding explicitly as a 3-step loop — user writes a plain-English prompt ("create a to-do list website for me") →
the AI tool generates the entire code → user tests/points out problems → AI fixes → repeat until it works — and
states this is fine for prototypes/MVPs/hackathons but explicitly *not* a good approach once "stakes" are high
(scalable systems, banking/insurance software, "a lot of money on the line"). The creator states directly (line
~427-434): "यहां पे हम वाइब कोडिंग नहीं सीखेंगे। हम एक्चुअल प्रॉपर एआई असिस्टेड कोडिंग सीखेंगे" ("here we will not
learn vibe coding; we'll learn actual proper AI-assisted / agentic coding") — and explains the whole playlist will
rename the practice "AI-assisted coding" or "agentic coding" instead.

`Spec-Driven Development in Claude Code  CampusX.txt` gives the sharpest, most structured do/don't contrast
(an explicit comparison table across ~8 axes, lines 1370-1640): starting point (rough idea vs. written spec),
who decides requirements (AI decides vs. the programmer defines them), who holds control (AI has more control vs.
"you lead the whole process"), speed (vibe coding is fast vs. spec-driven is slower up front), code quality
(unpredictable vs. consistent/traceable), where it's appropriate (prototypes/side-projects vs. production
systems), failure mode (code volume you can't understand vs. the AI over-engineering against a correct spec), and
critically: "डू यू नीड टू अंडरस्टैंड द कोड? वाइब कोडिंग में एग्जैक्टली कोड अगर आपको नहीं भी आता तो भी आप एप्लीकेशन
बना लोगे। वेयर एज़ स्पेक्ट ड्रिवन डेवलपमेंट में आपको कोडिंग का आईडिया होना चाहिए... यू आर लीडिंग द एआई" ("do you
need to understand the code? In vibe coding you can build the app even without knowing to code. In spec-driven
development you need a good understanding of the programming language — because you are leading the AI").

This directly supports the `/project` design: the human must understand/write the code and lead the process; the
AI's job is executing against something the human has reviewed, not deciding unilaterally.

## 2. Mini-project structure: minimal-then-incremental vs. plan-then-build-linearly

Confirmed, with one useful nuance the ticket anticipated. Evidence from all three real project walkthroughs:

**`Calculator GUI Application using Python  Tkinter Tutorial  Python Mini Project.txt`** — build order is: create
file → import tkinter → create root window and run it (see a blank window) → set title → set geometry/size → run
→ set background color → run → add the single result `Label` (with placement, font, color) → run → *then*
"अब हम क्या करेंगे एक-एक करके हमारे बटंस बनाएंगे" ("now we'll build our buttons one at a time") — buttons are
added and run/checked individually rather than all 16 being coded in a block before the first run. The overall
*layout* (result label on top, 16-button grid below) is described upfront in plain language, but the *code* is
written and tested in small, runnable increments, not linearly start-to-finish.

**`Wallpaper Viewer Application using Python  Tkinter GUI Tutorial  Mini Project.txt`** (clean English captions,
clearest evidence of the three) — explicit minimal-first sequence, each step run before the next is added: (1)
create root + `mainloop()`, run → blank window; (2) add title/geometry/background, run; (3) `os.listdir` the
images folder and just `print()` the filenames to check it works, run; (4) load+resize+append images to an array
in a loop, still no display; (5) add a `Label` showing only the *first* image, run; (6) add the "Next" `Button`
with no behavior yet, run, just to see it placed; (7) only then wire up the `command=` handler and a `counter`
variable to actually rotate images, run and fix the wrap-around bug as a distinct next step. This is as clean a
"minimal working version first, one feature at a time" trace as exists in the corpus.

**`News Application in Python  Inshorts Clone using Python  GUI + OOP + API Tutorial in Python.txt`** — here the
pattern is slightly different and worth reporting honestly rather than forcing it into the same mold: the video
states upfront it will cover three things in order (how to fetch API data → how to build the GUI → how to wrap it
in OOP), and the *class skeleton* is created first — `class NewsApp` with a constructor whose first job is
explicitly "fetch data from the API" and whose second job is "load the GUI" — before either piece is implemented.
So for the OOP mini-project, the method/responsibility order is planned upfront as a skeleton (constructor steps
sketched in order, not just "write a script and refactor into a class later"), and then each method is filled in
and run in that sequence. This is still incremental build-and-run, but it is incremental *within a pre-planned
class/method skeleton*, not incremental in a purely ad hoc widget-by-widget way like the calculator/wallpaper
videos.

**Conclusion for `/project`:** "start minimal, add features incrementally, run after each step" is well-supported
and should remain the default build loop. For projects with any structural complexity (classes, multiple
responsibilities), it's honest to also plan a lightweight skeleton/order of responsibilities upfront (mirrors
`PROJECT_PLAN.md` itself) before filling it in step by step — this is a real, cited pattern, not an invented one.

## 3. Claude Code plan mode / spec-driven development / slash commands — structural patterns worth adapting

Rich, directly transferable evidence, all from `ai-coding-claude-code/`:

- **Three-document pipeline with review gates at each stage** (`Spec-Driven Development in Claude Code  CampusX.txt`,
  lines ~950-1830): (1) a non-technical **spec document** (why/what, acceptance criteria) → human reviews it → (2)
  a **technical design plan** (how: tech stack, architecture diagram, data model, boilerplate/code decisions,
  functional flows) generated via Claude's **Plan Mode**, which is read-only (no file writes allowed while
  planning) → human reviews it manually → (3) a **task list** is auto-extracted from the technical plan (e.g.
  "database & models → backend/endpoints → frontend/UI → integration") and assigned/executed, optionally via
  parallel subagents → code is written → finally the code is **validated against the spec's acceptance criteria**.
  The video is explicit that document creation is delegated to AI but *review at every stage stays a human task*
  ("रिव्यू करने का काम अभी भी आपका ही रहेगा... मैनुअली हम इसको रिव्यू करेंगे").
- **Spec documents are kept technology-agnostic on purpose**, separate from the technical plan, specifically so
  the same spec can be re-targeted at a different tech stack without rewriting it (lines ~1159-1210) — a
  "why/what vs. how" separation worth mirroring if `/project` ever needs to re-target a different stack mid-build.
- **Spec docs live under `.claude/specs/<feature>.md`** (`Plan Mode in Claude Code  Ultraplan Mode in Claude Code
  CampusX.txt`, lines ~640-680) — a convention for where planning artifacts are stored, directly analogous to
  where `PROJECT_PLAN.md` would live.
- **CLAUDE.md structure, directly reusable for `PROJECT_PLAN.md`** (`Claude.md  Claude Code — The Most Important
  File  CampusX.txt`, lines ~1006-1120): project overview → architecture/folder structure and what belongs where →
  code style → tech constraints (explicit "don't do X" rules, e.g. "don't touch database.py unless necessary,"
  "don't generate patient IDs yourself") → available commands → **a development roadmap listing build order with
  a status column (done / not yet done) per item** → warnings/things-to-avoid at the end. The creator states this
  roadmap-with-status-column is what keeps Claude Code's behavior consistent "across all sessions" — i.e. it is
  the checkpointing mechanism for a multi-session build. This maps almost one-to-one onto what `PROJECT_PLAN.md`
  should contain for a multi-turn mentoring loop: a feature-by-feature roadmap with a done/pending status per
  step, checked and updated as each turn completes.

## 4. When should the AI write code directly vs. the human — explicit guidance

This is the single most load-bearing question and the evidence is real but indirect — there is no single line in
the corpus that says "the AI should write code only when the human is stuck." That specific framing was not found
anywhere in `ai-coding-claude-code/`, and should be reported as the mentoring design's own addition, not
attributed to CampusX. What *is* directly supported:

- The spec-driven-development comparison (Section 1/3 above) draws the control line explicitly along "who leads":
  in vibe coding the AI decides and controls; in the approach the playlist recommends, "यू आर लीडिंग द एआई" — the
  human leads, defines requirements, and must understand the code well enough to guide it, while the AI executes
  against a document the human reviewed. This supports a review-gate model (human approves spec → plan → tasks →
  code) rather than literally "human types every character," but it does not go as far as mandating the human
  write the code by hand.
- `Hooks in Claude Code — Full Theory + Practical Use  CampusX.txt` (lines ~1170-1215) makes a related but distinct
  point: the risk is a "coding harness" that **blindly, faithfully executes** whatever the LLM decides (e.g.
  deleting files, editing `.env`, writing unparameterized SQL) with no human checkpoint — this is presented as a
  reason to add hooks/guardrails, not as guidance on who should type the code.
- No evidence was found anywhere in this corpus (grepped across all 15 files for stuck/blocked/dependency/
  over-reliance framings) of explicit "let the human struggle a bit before helping" pedagogy — that habit is not
  sourced from this playlist and should be treated as the mentor-product's own design decision, clearly flagged
  as such rather than attributed to CampusX.

**Honest summary for Q4:** real evidence supports "human reviews and leads every stage, AI only acts within an
approved spec/plan," which is compatible with and motivates the `/project` rule, but the exact trigger condition
("write code only when the learner is genuinely stuck, and say so explicitly") is not itself evidence-backed —
flag it as a design choice, not a sourced pattern.

---

## What has no real evidence (flagged plainly)

- No CampusX statement anywhere in `ai-coding-claude-code/` about *when exactly* an AI mentor should take over
  and write code for a stuck learner, or about saying so explicitly when it does. Not invented here; genuinely
  absent from the source.
- The Python-fundamentals videos bundled into `python-projects/` (lists, tuples, sets, dicts, functions,
  recursion, OOP, threading, generators/iterators, 100-days-of-python topics) contain no project-build-order or
  AI-coding evidence relevant to these four questions and were not cited.
