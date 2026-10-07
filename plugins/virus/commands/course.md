---
description: Build a full lecture-wise course for a topic, Virus-style — roadmap first, then lectures one at a time.
argument-hint: <topic>
---
Build a course on `$ARGUMENTS` using the virus skill (`skills/virus/SKILL.md`): read
`references/roadmap-generation.md` first and generate a roadmap (`./virus-courses/$ARGUMENTS/roadmap.md`).
Then read `references/lecture-page-generation.md` and build only the first lecture's HTML
page — do not generate every lecture upfront. Same behavior as the user saying "teach me
`$ARGUMENTS` properly" or "build me a course on `$ARGUMENTS`".
