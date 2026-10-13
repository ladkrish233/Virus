---
description: Deprecated in v4 — use /virus:learn. Build a single dense HTML lecture page for one topic, Virus-style.
argument-hint: <topic>
---
Note: `/lecture` is deprecated in v4. Use `/virus:learn` instead. Removed in v5.
Build a single lecture page on `$ARGUMENTS` using the virus skill
(`skills/virus/SKILL.md`): read `references/lecture-page-generation.md` before
responding. Lesson mode is forced. No roadmap step — this is a standalone page for one topic, saved to
`./virus-courses/$ARGUMENTS/lecture-01.html`. Same behavior as the user asking for a
one-off deep-dive reference page on `$ARGUMENTS`.
