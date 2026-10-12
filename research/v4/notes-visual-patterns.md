# Visual patterns in CampusX's OneNote lecture notes

Source: three PDF exports of Nitish Singh's OneNote notes (kept local, not committed —
not ours to redistribute):

- `file.pdf` — Generative AI using LangChain notes, 143 pages (2025) → cited as **lc pN**
- `file (1).pdf` — 100 Days of ML notes, 436 pages (2021–2024) → cited as **ml pN**
- `file (2).pdf` — FastAPI notes, 23 pages (2025) → cited as **fa pN**

**Sample.** 86 rendered pages:

- lc (32): p3, 4, 14, 18, 21, 22, 24, 30, 34, 44, 48, 57, 60, 63, 64, 67, 75, 86, 88, 93, 95, 99,
  101, 104, 110, 111, 113, 116, 126, 129, 130, 139
- ml (31): p1, 2, 3, 13, 21, 33, 49, 57, 65, 85, 93, 109, 125, 150, 165, 177, 181, 197, 217, 229,
  237, 277, 293, 297, 321, 337, 345, 365, 385, 405, 421
- fa: all 23 pages

**Confidence scale.** Common = about 15 or more sampled pages. Occasional = 5–15. Rare = under 5.

What he says while drawing these pages is covered in
[notes-narration-pairings.md](notes-narration-pairings.md).

## Patterns

1. **Page skeleton: title, timestamp, one idea** (common, every page). Each page has a title
   with a small grey date under it.
   - ML pages are strictly one sub-idea per page, with numbered titles (ml p1–3).
   - LC and FA pages hold one heading-level idea, sometimes spread over two pages.
   - Heavy whitespace: most pages use only the top 30–40% (ml p2, 21, 217; lc p4, 24, 75; fa p8).

2. **Pastel, hand-drawn-style box diagrams** (common in 2025 notes; none in the ML sample).
   Excalidraw/Whimsical look: sketchy outlines, pastel fills, grey arrows. Colours are loose
   but follow roles:
   - Yellow root with green children: lc p4, 14.
   - Blue root with green children: fa p10, 12.
   - Blue root with yellow children: lc p86.
   - Diamonds for a gate or decision: fa p1, fa p4, lc p139.
   - Yellow circles for sources or tools: lc p101, fa p15.
   - Teal/blue for query or context inputs: lc p101, 110, 113.
   - Red stacked pages for documents: lc p101.

3. **Concept trees and curriculum maps** (common). Top-down trees, typed (lc p4, 86; fa p10, 12)
   or handwritten (lc p24, 44, 99; ml p33, 125, 165; fa p7, 14). Radial hub variant: lc p14.
   Coloured-tile syllabus mosaic: lc p3 (rare).

4. **Left-to-right pipelines** (common). Boxes joined by arrows, often with a feedback arc
   underneath: ml p2, 3, 109, 337; lc p18, 57, 63, 110; fa p1, 15. Branching variants sit inside
   a bracket or red box: lc p18, 60.

5. **Progressive build-up across pages** (common; the strongest pattern). One diagram is
   redrawn and extended:
   - RAG: lc p110 → 111 (+ text splitter) → 113 (+ embedding, vector store, then + retriever,
     query, context) → 116 (mapped to code).
   - FastAPI endpoint tree: fa p10 → 12 (delete and update handwritten as pending).
   - Server diagram drawn three times on fa p1: generic → Flask/WSGI → uvicorn/ASGI.
   - ML batch learning: ml p2 → p3.

6. **Comparison layouts** (occasional). Three forms:
   - A ✓/✗ table with the differences circled (lc p48).
   - The same picture drawn twice side by side (fa p1; ml p321; lc p104).
   - Typed bullets on the left, a handwritten structure diagram on the right (lc p95, 34;
     ml p345).

7. **Annotation layer** (common; the most consistent trait). Black ink first, then a second
   colour:
   - Red underlines on keywords: fa p2, 6, 7, 9; lc p88, 104.
   - Red circles or boxes on the key node: lc p14, 57, 60, 139; fa p1, 4, 15; ml p125, 181.
   - Hand-drawn `[` bracket grouping a definition: lc p86, 95, 104, 126; fa p2, 5, 6, 7, 18.
   - Margin arrows: lc p113, 139; fa p1; ml p321.
   - Green ticks on covered items: fa p19, 23; lc p14; ml p125.
   - Multi-colour ink to separate concepts: ml p13, 297, 345.

8. **"Ladder" bullets** (common in handwritten pages). A vertical spine with tick branches instead
   of bullets: lc p21, 67; ml p125, 165, 385; fa p18.

9. **Numbered lists** (common). Typed `1. 2. 3.` (fa p2, 9, 19, 21, 23; lc p130), handwritten
   `1) 2) 3)` algorithm steps (ml p229, 237; fa p11), and numbered sub-page titles.

10. **Definition → picture → worked example with real numbers** (common): ml p85, 93, 109;
    lc p86, 104, 21; fa p5, 7, 13.

11. **Screenshots, code and data** (common in 2025 notes; rare in ML).
    - YouTube thumbnails as recap or prerequisite pointers: lc p22; fa p11, 20.
    - Product UIs as motivation: lc p129 MakeMyTrip; fa p3, 4.
    - Code and JSON wired into diagrams: fa p1; lc p110, 126, 139.
    - Dataframes: fa p16, 17.

12. **Analogies as pictures** (rare). One clear case: the Lego photo on lc p67.

13. **Hand-drawn plots and step-by-step derivations** (common in ML only): ml p13, 21, 177, 197,
    229, 237, 277, 293, 297.

14. **Recap and plan-of-action pages open lectures** (common).
    - Recap: lc p22, 99; fa p10, 18, 20, 22. Trees that grow across lectures.
    - Plan of action: lc p24, 116; fa p11, 14.

**Text vs drawing.** ML (2021) is about 90% handwriting and drawing. LangChain and FastAPI (2025)
are roughly half typed or pasted material, with handwriting layered on top.

## Rules derived for HTML lesson diagrams

1. Sketchy pastel shapes with roles: yellow = root/hub/source, green = components/steps,
   blue = input/system, diamond = decision; plain grey arrows.
2. One concept per diagram, with whitespace and about 3–7 nodes; split anything bigger.
3. Reveal by extending one persistent diagram, with the newest node ringed in red; reuse the
   diagram across lessons.
4. A toggleable pen layer: red circles, keyword underlines, `[` brackets, margin arrows, green
   ticks.
5. Definition → diagram → worked example with real values attached to nodes.
6. Compare by drawing the same diagram twice and changing only the differing node.
7. Bookend lectures with a growing recap or plan-of-action map.
8. Ladder lists for breakdowns.

## Thin areas

- Drawn analogies: one case only.
- Colour roles: consistent only in the 2025 typed diagrams.
- The ML sample stops at p421.
