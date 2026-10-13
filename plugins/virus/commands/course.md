---
description: Build a full lesson-wise course for a topic, docs URL or AI-engineer level, Virus-style — roadmap first, then lessons one at a time, each saving its board.
argument-hint: <topic, docs URL, or AI-engineer level such as "level 4">
---
Build a course on `$ARGUMENTS` using the virus skill (`skills/virus/SKILL.md`). Read
`references/course-mode.md` first. If `$ARGUMENTS` is a documentation URL, build the roadmap from
that site's navigation (`references/docs-crawl.md`, Playwright MCP). If it names an AI-engineer level
(`level 4`, `L4`, `RAG`, or a file in `references/ai-engineer-roadmap/`), build one lesson per module
from that level's file, as `references/ai-engineer.md` §4 says. Otherwise build it by backward design
(`references/roadmap-generation.md`). Write `./virus-courses/$ARGUMENTS/roadmap.md`, then build only
lesson 1 from `templates/classroom-shell.html`, following `references/teach-mode.md`. Save each
lesson's board to `scenes/` when it closes, and load it for the next lesson. Do not generate every
lesson upfront.
