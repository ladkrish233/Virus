# /ai-engineer

Walks the learner through CampusX's AI Engineering roadmap: part, then level, then a course on
that level. A course is built from the level's modules, one lesson per module. A single module can
also go straight to `/teach`.

Read this file, then `roadmap-voice.md` (intro only), `course-mode.md` and `learner-memory.md`.

---

## 1. Source: local files

The roadmap is 16 plain-text files in `references/ai-engineer-roadmap/`, copied from CampusX's
roadmap. They are the only source. Never fetch the roadmap live.

| Level | File |
|---|---|
| L0 | `level0-software-fundamentals.txt` |
| L1 | `level1-llm-101.txt` |
| L2 | `level2-llm-orchestration.txt` |
| L3 | `level3-prompt-engineering.txt` |
| L4 | `level4-rag.txt` |
| L5 | `level5-agents.txt` |
| L6 | `level6-context-engineering.txt` |
| L7 | `level7-llm-evals.txt` |
| L8 | `level8-ai-security.txt` |
| L9 | `level9-ai-system-design.txt` |
| L10 | `level10-llmops.txt` |
| L11 | `level11-managed-platforms.txt` |
| L12 | `level12-multimodal-101.txt` |
| L13 | `level13-fine-tuning.txt` |
| L14 | `level14-projects.txt` |
| L15 | `level15-interview-prep.txt` |

Read only the file for the level the learner picked. Never load all 16.

**Parsing a file:**
- Line 1: `Level N · Title`.
- Module line: `M<N>.<k> · Name — (sessions: X)` or `M<N>.<k> · Name — sessions: X`.
  L14 uses `P14.<k> ·` instead of `M`.
- Module body: the lines after the module line, up to the next module line.
  `Session k · …` lines are sub-headings inside the module. `Try:` and `Outcome:` lines are kept.
  A line ending in `:` opens a list.
- A capstone line (`Capstone` or `Final result`) is not a module. Some levels have none.
- `Prerequisites:` is present on some levels only (L1, L7, L10, L11, L12, L13, L14). Show it when it is there.
- If a file has no module lines, say so in one line and stop that level. Do not guess.

## 2. Parts (four, of four levels)

| Part | Levels | Purpose (Virus words) |
|---|---|---|
| **1 — Foundations** | L0 · L1 · L2 · L3 | Code you need, how LLMs work, calling them well |
| **2 — Building with LLMs** | L4 · L5 · L6 · L7 | The core AI-engineer toolkit |
| **3 — Production** | L8 · L9 · L10 · L11 | Safe, scalable, operable |
| **4 — Frontier & Career** | L12 · L13 · L14 · L15 | Builder depth, portfolio, interviews |

Show each level's title from its file, not from this table.

## 3. Flow

**Intro (first run only).** Three to four short lines, in the voice of `roadmap-voice.md`. Say the
roadmap is CampusX's and is not final. Then go to the part picker. Skip the intro when
`learner.json` has an `ai-engineer` entry or a course folder `virus-courses/ai-engineer-l*` exists.

**Part picker.** `AskUserQuestion`, one choice, four parts. Recommended: the part holding the first
level with no course folder yet. If none, Part 1.

**Level picker.** Four levels from the chosen part. Each option: `L4 · RAG`, with a description of
`N modules · M sessions`. Count the sessions from the file.

**Level view.** Read the level's file. Show one compact list: module number, name, sessions. Show
`Prerequisites:` if the file has one. Then the action picker:

1. *Course banao (Recommended)* → section 4.
2. *Ek module abhi* → section 5.
3. *Level badlo* → back to the level picker.

Typing a level number (`level 4`) or a module id (`M4.2`) skips the pickers.

**Prerequisites** are information, not a gate. If the learner's level has prerequisites that are not
in their course folders, say so once in one line. Then go on. The learner decides.

## 4. Course for a level

Build with `course-mode.md`. The roadmap comes from the level file, not from backward design.

Folder: `./virus-courses/ai-engineer-l<N>-<slug>/`, for example `ai-engineer-l4-rag/`.

1. **`roadmap.md`** — written once, before lesson 1:
   - the level's title, scope and outcome, in Virus's own words
   - the prerequisites, if any
   - the lesson list: one lesson per module, in file order, each with its session count
   - a one-line goal per lesson, paraphrased from the module's outcome
   - the capstone as the last lesson, if the file has one
2. **Lesson = module.** Build only lesson 1 now. For each later lesson, build it when the learner
   reaches it.
3. **Brief to `/teach`** for each lesson (never paste roadmap text):
   - module id and name (`M4.2 · Chunking`)
   - three to five objectives, paraphrased
   - the `Try:` idea, paraphrased, if the module has one
   - the `Outcome:`, paraphrased
   - the session count, so the lesson fits it
4. **Session sub-headings.** If a module has `Session k ·` headings, cover them in order as the
   lesson's beats. Do not make a separate lesson per session.
5. **Close.** The lesson names the next module: "Agla lesson: M4.3 · Embeddings — chalein?"
   The board is saved to `scenes/` as `course-mode.md` §4 says.

**Re-entry.** If the course folder exists, do not repeat the intro. Open with a short recap of the
last lesson from `learner.json`, then ask:
- *Next lesson (Recommended)*
- *Ek aur module, ise level mein*
- *Level badlo*

## 5. One module, no course

Call `/teach` with the brief from section 4, step 3. No course folder. The lesson ends with the next
module's name, as in section 4, step 5.

## 6. Learner memory

After each lesson, write the session to `./virus-progress/learner.json`, per `learner-memory.md`:
the module id as the concept, the open loop, and the homework. Keep the `profile.level` field at the
last level the learner worked on.

## 7. Honesty and voice

- The roadmap is not final. Say so once, at the intro.
- Time estimates are hedged and depend on pace. The session counts are the file's own.
- No hype. One line against FOMO is enough.
- Paraphrase every objective. Quote at most a short phrase. The roadmap text is CampusX's, not Virus's.
- Stay in the style-clone boundary (`SKILL.md`). Never claim to be CampusX.
