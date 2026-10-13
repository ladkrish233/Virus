# Learner memory

The learner's progress, kept locally in `./virus-progress/learner.json`, in the folder where they
run Virus. Virus writes it. It is never committed to the plugin repo. The schema is in
`learner.schema.json` next to this file.

Read this file at the start of every `/teach` and `/ai-engineer` session. Write it at the end.
If the file is missing, start a new one and say so in one line. Do not guess a learner's history.

Sources: `docs/plan-v4.md` §7. Mastery caps and the review ladder come from DeepTutor and tutor-mcp,
simplified (see the plan).

---

## File shape

```json
{
  "schemaVersion": 1,
  "profile": { "language": "hinglish", "pref": "teach-first", "level": "L4", "hoursPerDay": 2 },
  "concepts": {
    "rag.chunking": {
      "mastery": 0.62, "attempts": 3, "lastSeen": "2026-10-12", "nextReview": "2026-10-15",
      "reviewStep": 2, "type": "procedure", "status": "practicing",
      "misconceptions": [ { "text": "thinks overlap duplicates whole chunks", "open": true } ]
    }
  },
  "sessions": [
    { "date": "2026-10-12", "topic": "RAG L1", "recap": "indexing, chunk overlap",
      "openLoop": "chunk size kaise choose karein", "homework": "FAISS ke saath redo karo" }
  ]
}
```

Keys:
- `profile`: set once at the first `/ai-engineer` run. Change only when the learner asks.
- `concepts`: keyed by a dotted id (`rag.chunking`). `type` is `concept` or `procedure`.
- `sessions`: newest last. Keep the last 20. Older ones may be summarised into `recap`.

---

## Mastery

- A value from 0 to 1. Never shown to the learner as a score.
- **Caps:** after one attempt, mastery is at most **0.5**. After two attempts, at most **0.8**.
  A lucky first answer is never "mastered".
- Update after each attempt: move mastery toward the attempt's result, then apply the cap for
  the current `attempts` count.
- Wrong answer: lower mastery. Record the misconception in `misconceptions` with `open: true`.
- `status`: `new` (no attempts), `practicing` (mastery < 0.85), `stable` (mastery ≥ 0.85 with
  at least 3 attempts).

## Review ladder

- Steps: 1 → 3 → 7 → 14 → 30 days. `reviewStep` is the index into that list (0 to 4).
- After a correct review: `reviewStep` goes up by one, capped at 4. `nextReview` = `lastSeen` + the step's days.
- After a wrong review: `reviewStep` goes back to 0, and `nextReview` = today + 1 day.
- Plain and explainable. Not FSRS.

## Misconceptions

- Log each one with the learner's own wording where possible.
- `open: true` until the learner gets a question on it right. Then set `open: false`. Do not delete it.
- An open misconception outranks everything else in "What next" (rule 1).

## Sessions and open loops

- At the close of every lesson, write one `sessions` entry.
- `openLoop` is one specific question left open. It becomes the hook for the next session's opening.
- `homework` is a single extend-what-we-built task, never a recall question (R6).

---

## What next

Pick the first rule that matches. Use the block shown.

| # | Condition | Action | Block |
|---|---|---|---|
| 1 | An open misconception exists | Fix it with a new analogy, not a repeat | `yahan-tak-clear` (✗ path), then `pause-socho` |
| 2 | A concept is past its `nextReview` | Review it | `revision-cards` |
| 3 | Mastery < 0.3 | Teach the new concept | Normal `/teach` lesson |
| 4 | Mastery < 0.85 | Practise it | `pause-socho`, then `output-kya-aayega` or `hint-ladder` |
| 5 | Three stable results in a row | Explain it back, then extend | `khud-ko-samjhao`, then `homework` |

If nothing matches, ask the learner which topic they want, and offer the next concept from the roadmap.

---

## Voiced recap

Every `/teach` opens with a short recap drawn from the file, in Virus's classroom voice:

> Hamesha ki tarah chhota sa recap: pichli baar humne indexing dekhi thi, aur chunk overlap pe
> thoda atke the. Aaj wahi se shuru karte hain.

Rules:
- Use the last session's `topic` and `recap`. Start from its `openLoop` as today's hook.
- One recap line per session, not a list. No greeting, no channel intro.
- If there is no earlier session, skip the recap. Do not invent one.
- Use attested phrases only ("hamesha ki tarah", "pichli baar", "aaj wahi se").

---

## Honesty

- Never show mastery as a number, a percentage or a score.
- Say what it looks like, not what it is: "lagta hai chunking pakka ho gaya; overlap thoda revise
  kar lena".
- Never write "mastered", "perfect", or "great job". Banned microcopy applies here too (see
  `style-guide.md`).

## Privacy

- The file stays in the learner's folder. Nothing is uploaded, and nothing is committed to the plugin repo.
- If the learner's folder is a git repo, suggest adding `virus-progress/` to `.gitignore`. Do not edit it without asking.

## Reading and writing

- Read the whole file before any change. Update, then write the whole file back.
- If the file is not valid JSON, do not overwrite it. Tell the learner the file could not be read and
  name the path. Offer to start a fresh file only after they say so.
- Keep `schemaVersion` at 1 until the schema changes.
