# v4 test results

Ticket #41: run the voice rubric and the functional rubric from `docs/plan-v4.md` §14 on the
worked examples. Fix what's a real gap. Log the rest. Run in Chromium only, locally, on
2026-10-13.

Status key: **Pass** = checked and met. **Partial** = checked, some of it met. **Not run** = not
checked in this run. **Doc only** = the behaviour is written as a rule for the model to follow,
not code that can be run here.

---

## Voice rubric (plan §14)

| # | Item | Status | Evidence / note |
|---|---|---|---|
| 1 | Recap before agenda, no assistant opener | Pass (lessons 2–3). Lesson 1 has no recap, by design | Lessons 2 and 3 open with `recap-board`. No "Certainly" / "Great question" in examples or blocks (grep) |
| 2 | Why before mechanism | Partial | Lesson 1 opens with a `pause-socho` on why. Read by hand |
| 3 | Count first, ordinal captions | Pass (lesson 1) | Lesson 1 step 0: "Chaar steps". Ordinal captions in steps |
| 4 | "Problem before box" step | **Pass after fix** | Gap action added to the whiteboard block. Lesson 1 second step is a gap before the chunks box |
| 5 | Example numbers on the board | Partial | Numbers are in the worked-example block, not labelled on the board nodes |
| 6 | Analogy after the build, as a second pass | Not run | No analogy on any board in the three lessons |
| 7 | Flow walk and check line | **Pass after fix** | Lesson 3's last step has "I hope … samajh aa gaya" |
| 8 | Attested voice only; zero banned microcopy | Pass | Grep for quiz time / great job / level up / streak / badge / let's test / correct! across references, examples, blocks and commands: no hits outside the banned lists themselves |
| 9 | Tic density; Hinglish; no Devanagari | Pass after fix | Tic counts per lesson: "dekho" 1–2, "theek hai", "maan lo", "trust me" 0. **Fix:** Devanagari in two v1–v3 example files (`teach-docker-basics.md`, `doubt-overfitting-underfitting.md`), now Roman. Repo-wide grep: 0 hits |
| 10 | Honesty labels; 80% line | Not run | Not in the three lessons |
| 11 | Close names a specific open loop | Pass | Lessons 1 and 2 end with "Agla lesson: …" |
| 12 | `/ai-engineer` launch beats, gate, FAQ | Doc only | `ai-engineer.md` and the scripted session in `examples/` |
| 13 | v1–v3 rules still hold (checklist) | Partial | `teach-mode.md` §6 is a checklist. Items were marked from the source rules, not re-verified line by line in this run |

## Functional rubric (plan §14)

| Item | Status | Evidence / note |
|---|---|---|
| Layout at 1920 / 1280 / 768 / 375 | Partial | Lesson 2: all four widths, no horizontal scroll. Lesson 1 and lesson 3: 375 and 1920 checked, no horizontal scroll. Lesson 1 and 3 at 768 and 1280 **not run** |
| ◀ ▶ ✎ ↺ controls | Pass | Clicking ▶ and ◀ moves the step counter and the board. ✎ and ↺ are wired (not exercised in this run) |
| Keyboard | **Pass after fix** | Whiteboard added keyboard stepping (←/→ when the board has focus). `Enter` and `Space` work on `pause-socho` options and `revision-cards`. Verified 1/5 → 2/5 with the arrow key |
| Reduced motion | Pass | `prefers-reduced-motion: reduce` gives `transition: 0s` and `animation: 0s` on blocks |
| Offline | Partial | No `http` links or external scripts in lesson pages (grep). Not run with the network blocked |
| Page size | Pass | Lesson pages 5.9–8.4 KB before inlining. With the block CSS and JS inlined, about 24 KB. Under the plan's budget |
| Clipboard fallback | Partial | `navigator.clipboard` path verified ("Copy ho gaya."). The `execCommand` and select-and-show fallbacks are not exercised |
| localStorage / sessionStorage | Pass | No use in the block library (grep). The try/catch rule holds trivially |
| Alias routing | **Changed by #45** | `/learn`, `/code`, `/lecture` are removed. `commands/` lists only `teach`, `doubt`, `course`, `project`, `ai-engineer` |
| Failed `levels.json` fetch uses fallback | Doc only | `ai-engineer.md` §1 and §2, static table |
| `learner.json` round-trips across two sessions | Pass (file format) | A script wrote session 1, read it back, updated the concept and appended session 2, then read it back again. It validates against `learner.schema.json`. An out-of-range mastery is rejected. The procedure itself (caps, ladder) is doc only |
| Scenes persist across lessons | Pass | The sample scene in `examples/course-demo-rag/scenes/` validates against `scene.schema.json`. A lesson shell with the blocks inlined loads it into a `recap-board` (4 nodes shown) and a `whiteboard` (4 nodes visible) |

## Fixes made in this ticket

1. **Whiteboard: gap action.** The plan asks for a red "?" on a broken arrow before the next box (N5). The block had no gap action. Added, shown only on its own step.
2. **Whiteboard: keyboard stepping.** The plan asks for keyboard control. Added.
3. **Blocks script: closing-script text in the header comment.** Inlined into a page, it ended the script early and no block mounted. Fixed in #40 (commit `c72dd9c`). Re-checked here.
4. **Blocks: arrows can take a route** (`points`), so an arrow can avoid boxes. Added in #39.
5. **Lesson 1: gap step added.** Lesson 3: the "I hope … samajh aa gaya" check line added to the last step.
6. **Devanagari in two v1–v3 example files.** Replaced with Roman transliteration.

## Still open (not fixed here)

- Analogy as a second pass on the board (voice item 6). Lessons do not use one yet.
- Example numbers as labels on board nodes (item 5).
- Honesty labels and the 80% line in the RAG lessons (item 10).
- Layout at 768 and 1280 for lessons 1 and 3.
- Clipboard `execCommand` fallback, and the offline check with the network blocked.
- Doc-only items (`ai-engineer` flow, the levels fallback, learner caps and ladder) have no runnable test yet.
- The old `lecture-page-skeleton.html` and `lecture-page-generation.md` are still in the repo. Nothing uses them now. Clean-up.
- The README still lists the removed commands. Waits for #42.
