# Diagram Style

How to draw and narrate a lesson diagram, drawn from CampusX's OneNote lecture notes and
the transcripts he narrates over them. Each rule cites its evidence and a confidence tier.
Don't promote an "occasional" or "thin" rule to a hard rule.

Sources:
- `research/v4/notes-visual-patterns.md` (V1–V8, the visual patterns)
- `research/v4/notes-narration-pairings.md` (N1–N12, what he says while drawing)
- Confidence scale: **common** = about 15 or more sampled pages or files; **occasional** = 5–15;
  **thin** = under 5, or one source.

Notes are not redistributed. These rules are our own, written in our own words. Page
references like "lc p110" point at the source notes, which stay local.

---

## Visual rules (V1–V8)

**V1. Sketchy pastel shapes, with roles.** Yellow = root, hub or source. Green = components or
steps. Blue = input or system. Diamond = a gate or decision. Plain grey arrows. (Common in the
2025 typed notes, none in the 2021 ML sample. The palette is consistent only in the typed
diagrams, so treat exact colours as occasional.)

**V2. One concept per diagram.** Keep about 3–7 nodes, with whitespace. Use only the top
30–40% of the space. Split anything bigger into pages. (Common, every sampled page.)

**V3. Reveal by extending one persistent diagram.** Redraw and extend, don't start over. Ring
the newest node in red. (Common, the strongest pattern. RAG goes lc p110 → p111 → p113 → p116.)

**V4. A toggleable annotation layer.** Black ink first, then a second colour: red circles on the
key node, red underlines on keywords, a hand-drawn `[` bracket grouping a definition, margin
arrows, green ticks on covered items. (Common, the most consistent trait of all the notes.)

**V5. Definition → picture → worked example with real values.** The example numbers sit on the
nodes. (Common: ml p85, 93, 109; lc p86, 104; fa p5, 7, 13.)

**V6. Compare by drawing the same diagram twice.** Change only the differing node. Or use a ✓/✗
table with the differences circled. (Occasional: fa p1, ml p321, lc p48.)

**V7. Bookend the lecture with a recap or plan-of-action map.** The recap tree grows across
lectures. The plan-of-action page opens the lecture. (Common: lc p22, 99, 116; fa p10–22.)

**V8. Ladder lists for breakdowns.** A vertical spine with tick branches, instead of bullets, for
a breakdown. (Common in handwritten pages: lc p21, 67; ml p125, 165; fa p18.)

---

## Narration rules (N1–N12)

**N1. Open with the count, then reveal.** "isko maine teen parts mein divide kiya hai" ("I've
divided this into three parts"). Before the first node, say how many there are. (Common: 9 of
10 pairings.)

**N2. One caption per step, in ordinal form.** "pehla …", "step number two …", "point number
three …". Close a group with "ek-ek karke detail mein dekhte hain" ("let's see each one in
detail"). (Common: "ek-ek karke" in 18 of 31 transcripts.)

**N3. Point first, then read.** "yahan pe dekho, likha hua hai …" ("look here, it's written …"),
then a one-line paraphrase. Put the red bracket on the definition at that moment. (Common.)

**N4. Pose the question before the node.** Show a question caption ("aapko kya lagta hai, kitne
types …?"), then reveal with "the answer is …". Never make the learner answer in prose. A
pause-socho block is different: it may really wait (R1). (Occasional. Found in 016 and FA-3. No
real waits in any YouTube transcript.)

**N5. Name the problem before the box that solves it.** Animate the gap first (a red "?", or a
broken arrow with "Python HTTP nahi samajh sakta" — "Python can't understand HTTP"). Then reveal
the box: "beech mein ek translator chahiye" ("we need a translator in between"). (Thin. One lecture,
FA-2 11:26–12:13. Also 016 names RAG only after the example.)

**N6. Example values go on the diagram as handwritten labels.** When the narration uses a
number, write that exact value next to its node. (Occasional. Five instances across pairings.)

**N7. Show progress on long flows.** After each finished stage, tick it or dim it: "chaar mein se
do steps ho gaye" ("two of four steps are done"). (Thin. Spoken in 016 and FA-7. The ticks on lc
p14 and p111 have no matching speech, so they are inferred.)

**N8. Analogy is a second pass.** After the formal build, on a separate layer (his green layer).
Signpost it: "agar isko ek analogy se samajhna chaho" ("if you want to understand this via an
analogy"). Renumber the analogy to match the original nodes. (Occasional. Three of three pairings.
See also R9 in `teaching-framework.md`.)

**N9. Open a later lesson by replaying yesterday's diagram.** Walk the past nodes, each with the
concept it taught ("patient → path parameter"). Then circle today's node in red: "aaj hum ye wala
part cover karenge" ("today we'll cover this part"). (Common: lecture openings across the FastAPI
series. "hamesha ki tarah" appears in 009.)

**N10. Close the flow with one walk and a check line.** Animate one pass along all the arrows:
"toh flow ke hisaab se…" ("so going by the flow…"). Then a check: "I hope … visually aur
conceptually dono samajh aa gaya" ("I hope it's clear both visually and conceptually"). (Common:
"I hope" in 31 of 31 files.)

**N11. Foils and mappers.** ChatGPT shows what an LLM alone can't do, before the RAG box. Familiar
apps (Instagram, Zomato, MakeMyTrip) map node by node: Instagram post = C, scroll = R. (Common:
apps in 7 files, ChatGPT in 6. See R10 in `style-guide.md`.)

**N12. Bridge to code with what → how.** The last frame draws "what → how". Caption: "ab what se
how pe chalte hain" ("now we move from what to how"). Code sections reuse the step names. If the
code branches, bring the diagram back with a new colour: "ye ek chain hai aur ye ek chain hai →
parallel chain". (Occasional. Three sources: p67, 017, FA-3.)

---

## Role palette

| Role | Colour | Use |
|---|---|---|
| Root, hub, source | Yellow | The thing everything hangs off |
| Component, step | Green | Each part of a build or flow |
| Input, system | Blue | Where data enters, or the surrounding system |
| Gate or decision | Diamond | A yes/no or branch point |
| Focus | Red | The newest node, or the key one (annotation layer only) |

Colours are placeholders until the palette is set. Keep the roles fixed across a lesson, even
when the exact hue changes.

## Caption phrase bank (attested, ≤12 words each)

- Reveal: "sabse pehle main aapko ye diagram dikhana chahunga" ("first I'll show you this diagram")
- Count: "maine isko teen parts mein divide kar rakha hai" ("I've divided this into three parts")
- Point: "yahan pe dekho, likha hua hai …" ("look here, it's written …")
- Step: "ye ho gaya hamara step number three" ("that's our step number three")
- Question: "aapko kya lagta hai …?" ("what do you think …?") then "the answer is …"
- Objection: "aapke dimaag mein aa raha hoga ki …" ("you might be thinking …")
- Analogy: "agar isko aap ek analogy se samajhna chaho" ("if you want to understand this as an analogy")
- Surprise: "ek bahut mazedaar baat batata hoon" ("I'll tell you something very interesting")
- Importance: "agar aapko ek cheez yaad rakhni hai" ("if you remember one thing")
- Transition: "ab what se how pe chalte hain" ("now we move from what to how")
- Recap: "hamesha ki tarah ek chhota sa recap" ("a small recap, as always")

## Anti-patterns

- **Narrating the pen.** No transcript says "main yahan arrow bana raha hoon" ("I'm drawing an
  arrow here"). The narration follows the content, not the act of drawing.
- **Redrawing summaries.** Extend the persistent diagram (V3). Don't draw a new summary of it.
- **Red as "important code".** Red marks annotation on the diagram (V4). It doesn't mark code.
- **Fake audience waits in prose.** Only interactive blocks wait, and only through R1.
- **Stacked bullets in place of a diagram.** A diagram with a bullet list beside it is fine. A
  list alone, where a diagram was needed, is not.

## Gaps

- The drawn analogy has one clear case (lc p67).
- Colour roles hold only in the 2025 typed diagrams.
- The ML sample stops at p421.
