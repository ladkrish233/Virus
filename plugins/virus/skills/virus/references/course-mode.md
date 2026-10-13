# Course mode

`/course <topic or docs URL>` builds a course: a roadmap first, then one lesson at a time.
Each lesson is taught through `/teach`'s lesson path (`teach-mode.md`, §3), rendered with the
block library. Each lesson saves its final board as a **scene**, and the next lesson loads and
extends it. This is the board-grows pattern from the RAG example.

Read this file, then `roadmap-generation.md` (or `docs-crawl.md` for a docs URL),
`teach-mode.md`, `style-guide.md`, `teaching-framework.md` and `hinglish-guide.md`.

---

## 1. Files in the learner's folder

```
virus-courses/<topic>/
  roadmap.md                  the roadmap (written once, first)
  lesson-01.html              one lesson page, self-contained
  lesson-02.html
  scenes/
    lesson-01.json            the board saved when lesson 1 closed
    lesson-02.json
```

- Lesson files are `lesson-NN.html`, zero-padded to two digits. This replaces the v3 name
  `lecture-NN.html` for courses. `/teach` lesson pages use the same name.
- Everything stays in the learner's folder. Nothing is written to the plugin repo.

## 2. Roadmap first

Build `roadmap.md` before any lesson, as in v3:
- From a topic: backward design (`roadmap-generation.md`).
- From a docs URL: the site's own navigation, crawled with the Playwright MCP server (`docs-crawl.md`).

Do not generate every lesson up front. Build lesson 1 only. Build each later lesson when the
learner reaches it.

## 3. Build a lesson page

Start from `references/templates/lesson-shell.html`. Fill its placeholders. Do not restructure it.

1. Read `templates/blocks/blocks.css` and `templates/blocks/blocks.js`. Paste them into the
   shell's `__BLOCKS_CSS__` and `__BLOCKS_JS__` slots. Inline only. Never link to them, and never
   fetch them from the network. The page must work from `file://`.
2. Follow the nine-beat lesson anatomy (`teach-mode.md`, §3). Write the prose in the Hinglish voice.
3. Use block props that match `templates/blocks/blocks-demo.html`. Each block is a `data-block`
   div with a JSON script.
4. Lessons 2 and up open with a `recap-board`, loaded from the previous scene (section 4).
5. Close with `yahan-tak-clear`, `khud-ko-samjhao`, a `homework` that extends the lesson, and a
   next-lesson hook.

Lesson 1 has no previous scene, so it skips the recap-board. Do not invent one.

## 4. Scenes: save, then load

### Save at close

When a lesson closes, write `scenes/lesson-NN.json`, from the lesson's final whiteboard.

- `nodes`: every node on the board at the end of the lesson.
- `arrows`: every arrow between those nodes. Keep `points` only where the arrow routes around a box.
- `viewBox`: the same value as the lesson's whiteboard.
- Shape: `references/scene.schema.json`.

**Validate before saving.** Stop and tell the learner if any check fails:
- The JSON parses, and it matches `scene.schema.json`.
- Every node id is unique. Every arrow's `from` and `to` is a node id.
- A board holds at most 12 nodes and 24 arrows. If the lesson needs more, start a new board in the
  next lesson, and say so in one line. Do not stretch the board past the cap.

### Load at the next lesson

When lesson N starts:
1. Read `scenes/lesson-(N-1).json`.
2. If the file is missing or does not validate, skip the recap-board. Say so in one line. Do not
   invent a board.
3. If it loads, put its `nodes`, `arrows` and `viewBox` into the lesson's `recap-board` (set
   `today` to the node this lesson starts from).
4. The lesson's `whiteboard` starts with those same nodes shown at step 0. New nodes and arrows
   are added in later steps, so the board grows across lessons.

## 5. Honesty and limits

- Illustrative data on a board (toy vectors, sample text, made-up scores) is labelled on the board.
- If a lesson's content may be out of date (a fast-moving API), say so in the lesson, as in v3.
- Tell the learner what was written. Name the lesson file and the scene file. Do not drop a file
  silently.

## 6. Handoffs

- `/teach` lesson pages use the same lesson shell. A `/teach` lesson saves no scene unless it is
  part of a course in `virus-courses/<topic>/`.
- `/ai-engineer` hands a module to `/teach`, not to `/course`. `/course` is for a topic the learner
  wants a whole course on.
- `/project` stays separate.
