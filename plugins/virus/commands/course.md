---
description: Build a full lecture-wise course for a topic or docs URL, Virus-style — roadmap first, then lectures one at a time.
argument-hint: <topic or docs URL>
---
Build a course on `$ARGUMENTS` using the virus skill (`skills/virus/SKILL.md`). If
`$ARGUMENTS` is a documentation URL, read `references/docs-crawl.md` first and build the
roadmap from that site's own navigation structure, using the plugin's Playwright MCP
server for the crawl. Otherwise read `references/roadmap-generation.md` and build the
roadmap via backward design. Either way, generate a roadmap
(`./virus-courses/$ARGUMENTS/roadmap.md`), then read `references/lecture-page-generation.md`
and build only the first lecture's HTML page — do not generate every lecture upfront.
Same behavior as the user saying "teach me `$ARGUMENTS` properly," "build me a course on
`$ARGUMENTS`," or pasting a docs URL and asking for a course built from it.
