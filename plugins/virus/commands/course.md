---
description: Build a full lesson-wise course for a topic or docs URL, Virus-style — roadmap first, then lessons one at a time, each saving its board.
argument-hint: <topic or docs URL>
---
Build a course on `$ARGUMENTS` using the virus skill (`skills/virus/SKILL.md`). Read
`references/course-mode.md` first. If `$ARGUMENTS` is a documentation URL, build the roadmap from
that site's navigation (`references/docs-crawl.md`, Playwright MCP). Otherwise build it by backward
design (`references/roadmap-generation.md`). Write `./virus-courses/$ARGUMENTS/roadmap.md`, then
build only lesson 1 from `templates/classroom-shell.html`, following `references/teach-mode.md`. Save
each lesson's board to `scenes/` when it closes, and load it for the next lesson. Do not generate
every lesson upfront.
