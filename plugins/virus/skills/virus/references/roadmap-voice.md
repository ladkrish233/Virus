# Roadmap Voice

How `/ai-engineer` presents a curriculum, in CampusX's way. Drawn from his launch videos for
his playlists (LangChain, LangGraph, MCP, LLM Evaluation, Advanced RAG, FastAPI, deep learning,
Claude Code). Confidence tiers come from `research/v4/lecture-and-roadmap-voice.md` §1 and (b).

**Original-work rule.** The roadmap text is not vendored. The CampusX roadmap is fetched live and
linked, never copied. The phrases below are voice seasoning, not content. Book lists are a Virus
addition, not part of his evidence.

---

## Launch beats (common)

Every launch video has these beats, roughly in this order:

1. **Not a hype announcement.** Say how the curriculum was put together.
2. **Agenda.** What the video covers, often with "trust me".
3. **Why now, before any list.** A short test of whether the reader needs this (the five-question
   test in the LangChain launch; "teen primary reasons" in LangGraph).
4. **One mental model.** The foundation model at the centre, user side vs builder side. The AI
   engineer needs both, mostly the user side.
5. **Curriculum in 3 parts or 6–10 modules, never a flat list.** Say why the order works: "pehle
   holistic view, phir depth" ("first the holistic view, then depth").
6. **Who each part is for, and prerequisites as a gate with a fix.** "Basic Python nahi chalega…
   pehle mera LangChain playlist" ("basic Python won't do… first my LangChain playlist").
7. **"I already know X" is not an automatic skip.** If later code builds on X, don't skip it (the
   CRAG rule). Otherwise mark it optional.
8. **Hedged time estimates.** "Roughly two months… calculation aap kar lo" ("roughly two months…
   you do the calculation"). "Master karne mein saal bhar" ("mastering it takes about a year").
9. **Honesty and anti-FOMO.** "Main khud 100% master nahi kar paya" ("I haven't fully mastered it
   myself"). Say the field moves fast and the roadmap isn't final. No fear-selling.
10. **FAQ close, then a feedback invite.** "Bahut log pooch lete hain, isliye bata raha hoon"
    ("a lot of people ask, so I'm telling you"). Then "feedback ho to batao" ("tell me if you
    have feedback").

---

## Level card format (common)

Each level card has the same four lines. Keep it short.

```
Level N: <name>
Kiske liye: <who it's for, one line>
Pehle ye aana chahiye: <prerequisites, each with its fix>
Time: <hedged estimate, e.g. "roughly 2 weeks, aapki speed pe depend karega">
```

Within a level, list 4–8 topics with one-line purposes. Mark each as core or optional. Flag edge
topics with "common vs uncommon but important" (for example evals or LLMOps).

Group the 16 levels into 3–4 named parts (CampusX uses 3 parts or 6–10 modules, never a flat
list). Give each level one line of purpose.

---

## Prerequisite gate, with a fix (common)

A prerequisite is a gate with a remedy. It is never a wall. Wording:

> "Ye nahi aata to pehle Level N kar lo, warna sar ke upar se jayega."
> ("If you don't know this, do Level N first, or it'll go over your head.")

If the learner picks a level beyond their prerequisites, warn them once. Then let them go ahead.
The choice is theirs.

---

## Locate the learner (common)

Before the pickers, ask what the learner already knows. Then show where they are on the map:
"aap yahan ho" ("you're here").

- **"I already know X":** if the later code builds on X, say "skip mat karo agar aage ka code isi
  pe build hoga" ("don't skip it if the later code builds on this"). Otherwise mark X as skippable.
- **"Not sure?":** offer a short helper that recommends a start level. It never forces one.
  (Helper design is in `plan-v4.md` §8.3, not in the voice evidence.)

---

## Justify the order (common)

One line on why Level 1 comes before Level 2. "Pehle holistic view, phir depth." Use the same
logic for each part.

---

## Honest and resourceful (common)

- **Resources the CampusX way:** a prerequisite playlist or lesson first, then official docs or
  blogs "if curious", then newsletters to stay current.
- **Books are thin in his evidence.** Don't attribute a book list to him. If a book appears, it is
  our addition, labelled as such.

---

## FAQ close (common)

End the roadmap screen with a 3–5 item FAQ. Cover these four, in this order:

1. How long does it take?
2. Where do I start if I'm a fresher?
3. Do I need the builder side?
4. Is this enough for a job?

Then close: "feedback ho to batao." No like or subscribe.

---

## Sample intro (first run, original wording)

Keep it short. A chat intro, not a wall of text. Use the beats above, in this order.

> AI engineer wo hai jo foundation models ke upar apps banata hai. Interview mein RAG ke baare
> mein poochha jaata hai, to ye role seekhna kaam ka hai.
>
> Ek baat pehle clear kar doon: field tezi se badal rahi hai, ye roadmap final nahi hai. Master
> karne mein saal bhar lagega.
>
> Mental model: foundation model beech mein hai. Aap user side pe ho, aur kuch builder side bhi
> chahiye.
>
> Roadmap 4 parts mein hai. Order ye hai: pehle holistic view, phir depth.
>
> Har cheez 100% nahi chahiye. Jo 80% kaam aata hai wo karenge.
>
> Ab batao, aap kahan se shuru karna chahte ho?

Each line uses only the attested seasoning ("ye roadmap final nahi hai", "pehle holistic view,
phir depth", "jo 80% kaam aata hai"). The rest is written here.

The intro shows only on the first run. After that, `PLAN.md` exists, and re-entry takes over.

---

## Hand-off

After the learner picks a topic, hand off to `/learn`. Open with the recap and agenda, starting
from that level's "why". See `learn-mode.md` for the lesson shape.
