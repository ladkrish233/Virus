# Virus v4 — Plan (rev 2, not yet implemented)

> **Status: plan only.** Nothing under `plugins/` has changed for v4. Once the open decisions
> in §12 are settled, this plan becomes a wayfinder map (GitHub issue), and the tickets in §13
> become child issues. This is the same process as maps #1, #10 and #19.
>
> **Rev 2 changes.** The plan is rebuilt around CampusX style DNA. Two new evidence passes back it:
> notes↔narration pairings and lecture/roadmap voice. Errors in rev 1 are corrected (§16).
> Every "how CampusX does it" claim cites a file under `research/v4/`.

> **Grilling outcome (decisions locked).** `/learn` is the unified command, and **`/doubt` stays a
> separate command** (it is NOT folded in; this overrides Q2 and rev 2's routing table). Roadmap is
> fetched live, never copied. Excalimate is an optional helper; tutor-mcp and DeepTutor are ideas only.
> Boards click to step, on a light card inside the dark theme. Interactive blocks wait for the
> learner. Books: curated plus bring-your-own. Progress lives in `./virus-progress/`. Vocabulary
> (lesson, course, block, scene, board, step, part, level, module) is defined in `CONTEXT.md`.
> `/teach`, `/code`, `/lecture` become deprecated aliases of `/learn`.

**Evidence files** (all in `research/v4/`)

| File | What it covers |
|---|---|
| [notes-visual-patterns.md](../research/v4/notes-visual-patterns.md) | What his OneNote notes look like (86 pages sampled) |
| [notes-narration-pairings.md](../research/v4/notes-narration-pairings.md) | What he *says* while drawing them (10 diagram↔transcript pairings, phrase counts over 31 transcripts) |
| [lecture-and-roadmap-voice.md](../research/v4/lecture-and-roadmap-voice.md) | How lectures, interaction and roadmaps sound (302 transcripts grepped, 9 launch videos read in full) |
| [external-repos.md](../research/v4/external-repos.md) | tutor-mcp, DeepTutor, Excalimate, and the CampusX roadmap repo |

---

## 1. Destination

v4 makes Virus feel less like "an AI that writes lecture pages" and more like **sitting in a
CampusX lecture**. Nitish's whiteboard builds up step by step while he talks. Your progress is
tracked like a course. The AI-engineer roadmap is presented the way he presents his own
roadmaps.

1. **One adaptive command: `/learn`.** It replaces `/teach`, `/code`, `/lecture` and `/doubt`,
   detects what was asked, and answers in the right form.
2. **Full-width interactive lesson pages** that follow a CampusX lecture's shape and timing,
   minute by minute (§4).
3. **An animated whiteboard** drawn in his notes style and narrated with his diagram phrases
   (§3.2–3.3, §5).
4. **Interactive blocks** voiced as his own classroom habits ("pause karke socho", "output kya
   aayega?", "khud ko samjhao"), never as generic quiz-app language (§3.4).
5. **Learner memory**, so every lesson opens with his ritual recap of *your* last session (§7).
6. **`/ai-engineer`**, which presents CampusX's AI Engineering roadmap in his launch-video
   voice. You pick a level, then a topic, and the lesson starts (§8).

The map is complete when v4.0.0 is tested against a **voice rubric** (§14) as well as a functional
one, documented, and released.

---

## 2. Principles that don't change

These carry over from v1–v3 unchanged, and every v4 feature must still pass them.

- **Evidence or it doesn't ship.** Every voice or structure rule cites a real transcript or notes
  page with a confidence tier. Nothing is promoted from "occasional" to "always".
- **Inspired by, never impersonating.** No channel intro, no like/subscribe, no claim to be
  Nitish or CampusX. The mascot "Virus" is the persona.
- **Original work.** No copying of transcript text, notes content, roadmap text or book text.
  Short attested phrases (≤12 words) are used as *voice seasoning*, not as content.
- **Hinglish by default** (Roman script, technical terms in English). English on request, with the
  same method.
- **Learner writes the code** in `/project` (v3 rule). This extends to `/learn` practice blocks:
  hints come before solutions.
- **Self-contained output.** Pages work offline from `file://`, with no CDN at runtime.

---

## 3. Style DNA for v4 (the core of this plan)

### 3.1 Voice rules that already exist (from `style-guide.md` and `teaching-framework.md`)

- Recap → agenda opening.
- Why → What → How.
- "guys"/"bhai" register.
- Tics: theek hai, dekho, basically, right?, maan lo, chalo, doubt, dhyaan se.
- Rhetorical question → self-answer.
- Errors are shown, named and root-caused before being fixed.
- Ground jargon with an everyday scenario (restaurant/waiter) before using it.
- For math: carry one numeric example through the whole derivation.
- Project order: demo → plan of attack.
- No AI-assistant openers. Never trail off at the end.

### 3.2 Refinements to the voice docs (new evidence, applied in ticket T4)

From [lecture-and-roadmap-voice.md](../research/v4/lecture-and-roadmap-voice.md) §6.

| # | Change | Evidence | Confidence |
|---|---|---|---|
| R1 | **Split the question rule by register.** Chat prose keeps the self-answer style. Interactive blocks may really wait for the learner, framed as "pause karke socho", then reveal with "The answer is…" | YouTube: "pause karke socho… the answer is" in ~30 files. Live sessions: "soch ke batao", "I will wait for your answers" in LLM Eval and DSMP | common |
| R2 | **Add tics:** "trust me" (before a value promise), and "don't worry / tension mat lo, aage samjhaunga" (deferral) | ~57 files and ~40 files | common |
| R3 | **Honest disclaimers are an explicit rule:** "thoda tricky hai", "it might be boring", "ye final nahi hai", "exact estimate possible nahi" | Benchmarks, Advanced RAG, LangGraph launch, 001 | occasional→common |
| R4 | **A one-line anchor definition may come first, if the why follows immediately** ("is single sentence se importance samajh nahi aayegi… pehle why") | 001, 002, 003, LLM Eval launch | common |
| R5 | **Revision moves from thin to occasional:** quick recap, rewatch complex parts, notes, explain-to-yourself, FAQ "as revision" | several files | occasional |
| R6 | **Homework is always "extend or re-implement what we just built"**, never recall questions | ~10 files (Vector Stores, Calculator GUI, Sequential Workflows…) | occasional |
| R7 | **The 80% approach:** teach the most useful 80%, name what was skipped, label optional parts | named once (002 plus the notes "My Focus" page); the pruning behaviour itself is common | thin as a name, common as behaviour |
| R8 | **Theory-then-code timing:** first code at ~15–50% of a lecture. If the theory was taught in an earlier lesson, open almost straight into code | 50 lectures with code markers | medium |
| R9 | **Analogy comes as a second pass**, *after* the formal explanation, signposted and mapped item by item. Not before it | 3 of 3 pairings (RAG student, Lego, waiter) | consistent, small sample |
| R10 | **Real products have two jobs.** ChatGPT is the foil: what an LLM alone can't do. Familiar apps (MakeMyTrip, Instagram, Zomato) are the mappers, matched node by node | 6 and 7 files | common |

### 3.3 Visual and narration DNA: how he teaches with a whiteboard

**What the boards look like** ([notes-visual-patterns.md](../research/v4/notes-visual-patterns.md)):

| # | Pattern | Cited pages | v4 use |
|---|---|---|---|
| V1 | One idea per page: title + small date + lots of whitespace | every page | Each whiteboard is a "page" card with a title and a date line |
| V2 | Pastel sketchy shapes with roles: yellow root/source, green steps, blue input/system, diamond decision, grey arrows | lc p4, 14, 101, 139; fa p1, 10 | Fixed role palette in the renderer |
| V3 | **One diagram persists and grows**; the newest node is ringed red | lc p110→111→113→116; fa p10→12; fa p1 ×3 | Step reveal plus scenes that carry across lessons |
| V4 | Pen layer: red circles and underlines, `[` around definitions, margin arrows, green ticks | fa p2, 6, 15, 19, 23; lc p48, 139 | Toggleable ✎ overlay |
| V5 | Definition → diagram → worked example with real numbers | ml p85, 93; lc p86, 104; fa p5, 13 | Block order inside a section |
| V6 | Compare by drawing the same diagram twice | fa p1; ml p321; lc p48, 104 | `compare-pair` block |
| V7 | A recap or plan-of-action map opens each lecture and grows over time | fa p10, 12, 18, 20, 22; lc p22, 99, 116 | Recap board plus the left-rail course map |
| V8 | Ladder lists (vertical spine with branches) | lc p21, 67; ml p125, 165 | `ladder` block |

**What he says while it builds** ([notes-narration-pairings.md](../research/v4/notes-narration-pairings.md) §3–5).
These become the per-step **captions** of every animated board:

| # | Narration rule | Evidence | Caption pattern (Roman Hinglish) |
|---|---|---|---|
| N1 | **Count first, then reveal.** Say how many parts before the first node | 9 of 10 pairings | "Isko maine teen parts mein divide kiya hai…" |
| N2 | **One ordinal caption per step**, bridged by "ek-ek karke" | "step number…" in 14 files; "ek-ek karke" in 18/31 | "Pehla… / Step number two…" |
| N3 | **Point, then read.** A definition node is introduced with a pointer phrase and gets the red `[` | 72 hits/24 files and 107/23; p86↔013, p111↔016 | "Yahan pe dekho, likha hua hai…" |
| N4 | **Question before the node, answered in the same step** (self-answered on boards) | 016 0:04:24; FastAPI 3 05:56 | "Aapko kya lagta hai…? The answer is…" |
| N5 | **Problem gap before the box that fills it.** Animate a broken arrow or "?" first | FastAPI 2 11:26 (SGI); 016 names "RAG" only after the example | "Python HTTP nahi samajhta… beech mein translator chahiye" |
| N6 | **The example's numbers go on the board** as handwritten labels | "5–25", "175B", "50K", c1–c5 in 4 pairings | Handwritten labels on nodes |
| N7 | **Progress counter** on multi-step flows, with finished nodes ticked or dimmed | 016 0:48:48, 0:52:38; FastAPI 7 | "Chaar mein se do steps ho gaye" |
| N8 | **Analogy layer comes after the build**, in green, renumbered to match | 3/3 pairings | "Agar isko ek analogy se samajhna chaho…" |
| N9 | **Recap replay:** walk yesterday's board node by node, then ring today's node | FastAPI videos 5, 6, 8 (P10) | "Hamesha ki tarah ek chhota sa recap…" |
| N10 | **Close with a full flow walk and a check line** | 016 0:54:16; "I hope" in 31/31 | "Toh flow ke hisaab se… I hope samajh aa gaya" |
| N11 | **What→how arrow into code**; the board's step names become the code section headers | 017 0:08:56; p67↔010 | "Now that you have the big picture, let's start coding" |
| N12 | **Never narrate the pen.** Narrate the content ("ye hamara chunk one ban gaya"), never "main arrow bana raha hoon" | 0 hits for drawing-act narration | — |

**Red ink is his default pen, not an "important" code** (narration §3i). So v4 uses red for
*live annotation* (the focus ring, the current step) and "bahut important hai" / "agar ek cheez
yaad rakhni hai" for spoken importance. Green is the second layer, used for analogies and
branches.

### 3.4 Interaction DNA: how blocks map to real CampusX habits

From [lecture-and-roadmap-voice.md](../research/v4/lecture-and-roadmap-voice.md) §3.
**Quizzes, flashcards and steppers are not CampusX devices by name.** They are Virus additions,
labelled honestly. What makes them feel like CampusX is that each one is voiced as a habit he
really has:

| v4 block | Real CampusX habit it voices | Attested phrasing | How often he does it | Virus addition? |
|---|---|---|---|---|
| `pause-socho` (predict / MCQ) | Pause, think, then he reveals | "Ek baar video pause karke socho… The answer is…" | common (~30 files, 0–3 per lecture) | The waiting is new; the voice is real |
| `output-kya-aayega` (code stepper) | Predict the output (live DSMP) | "output kya aayega?" | common in live sessions | Stepper UI is new |
| `khud-ko-samjhao` (explain back) | Explain it to yourself | "khud ko nahi samjha pa rahe to samajh nahi aaya" | occasional, across registers | Textarea + copy-to-Virus is new |
| `yahan-tak-clear` (checkpoint) | Doubt check-in | "aap log yahan tak clear hai?" / "let me know agar doubt hai" | common in live sessions | "Not clear" path → re-explain with a new analogy |
| `hint-ladder` (practice) | Hints over solutions | "poora solution mat khojo, hints khojo" | thin, but on point | yes |
| `revision-cards` (flashcards) | Quick revision / notes | "quick recap de deta hoon", "notes banao" | occasional | Cards are new; framed as revision |
| `homework` | Extend what was built | "ek chhota sa homework deta hoon" | occasional (~10 files) | — |
| `padh-ke-dekho` (expandable artifact) | Pause to read a dense prompt/code | "video pause karke padhna zaroor" | common | — |
| `kis-side-mein` (classify game) | Builder vs user side game (001) | "user wali side jayega ya builder wali?" | thin (001 only) | Optional block |
| `ask-virus` (copy a prompt) | — | — | — | yes: replaces "comment mein batao" |

**Banned microcopy:** "Quiz time!", "Great job!", "Correct! 🎉", "Level up", streaks, badges,
points, "Let's test your knowledge". These are generic tutor-app language, with no CampusX
evidence.
**Feedback tone:** name the missing link and point to the exact section ("Retriever ka role miss
ho gaya. Section 3 ka step 2 dobara dekho"). No praise inflation, no blame.

### 3.5 Roadmap DNA: how he presents a curriculum (for `/ai-engineer`)

From [lecture-and-roadmap-voice.md](../research/v4/lecture-and-roadmap-voice.md) §1. The same
beats appear in every launch video he made: 001, 002, LangGraph, MCP, LLM Eval, Claude Code,
Advanced RAG, FastAPI and DL.

1. **Not a hype announcement.** Say how it was put together.
2. **Agenda of the video.** Often with "trust me".
3. **Why learn this now, before any list** (001's five-question test; LangGraph's "teen primary
   reasons").
4. **One central mental model** (001: foundation model at the centre, builder side vs user side;
   the AI engineer needs both).
5. **Curriculum in 3 parts or 6–10 modules, never a flat long list.** The order is justified
   ("pehle holistic view, phir depth").
6. **Who each part is for. Prerequisites as a gate *with a fix*** ("basic Python nahi
   chalega… pehle mera LangChain playlist").
7. **"I already know X" is not an automatic skip.** If later code builds on it, don't skip it
   (CRAG); otherwise mark it optional.
8. **Hedged time estimates** ("roughly two months… calculation aap kar lo"; "master karne mein
   saal bhar").
9. **Honesty and anti-FOMO** ("main khud 100% master nahi kar paya"; FOMO and bubble talk; the
   ghost-movie analogy for fear).
10. **An FAQ close, then a feedback invite** ("bahut log pooch lete hain isliye bata raha hoon").

**Resources the CampusX way:**
- His own playlists first, as prerequisites.
- Official docs and blogs "if curious".
- Newsletters for staying current.
- **Books are thin in his evidence**, so the book list is a Virus addition (§8.5).

### 3.6 Lecture timing DNA

From [lecture-and-roadmap-voice.md](../research/v4/lecture-and-roadmap-voice.md) §4.

| Segment | Share of a lecture | Signposts |
|---|---|---|
| Recap + agenda (+ value promise) | ~0–5% | "hamesha ki tarah ek chhota sa recap", "trust me, aaj ka…" |
| Plan of action (long lessons only) | ~2–15% | "teen parts mein divide kar raha hoon… that's the plan of action" |
| Theory: why → what → how, with diagrams | ~20–45% | "ab baat karte hain…", "chalo aage badhte hain" |
| Code / demo | ~50–75% | "now that you have the big picture, let's start coding" |
| Close: recap, optional FAQ-as-revision, specific next-lesson hook | ~5% | "agle lesson mein…" tied to an open loop |

---

## 4. `/learn`: the unified command

### 4.1 Intent routing

`/learn <anything>` classifies the request first.

| Signal | Mode | Output | Voice source |
|---|---|---|---|
| "X kya hai", "samjhao", a concept name | **concept** | Chat explanation (recap → why → what → how) with an inline board only if the visualization router says so | teaching-framework default flow |
| Pasted code, "explain this code", "write code for…" | **code** | Line-by-line prose walkthrough. Long code also gets an `output-kya-aayega` stepper page | code-teaching pattern; R1 |
| "lecture", "page", "HTML", or a topic with ≥3 sections | **lesson** | Full interactive lesson page (§4.2) | §3.6 timing |
| "samajh nahi aaya", a specific confusion | **doubt** | Restate → root misconception → *new* analogy → check. Logged to memory | doubt-handling |
| `fix <what broke>` | **fix** | Regenerate only the broken block of the last page | DeepTutor fix path |
| Ambiguous | — | One short question with a recommended default | — |

- `/teach`, `/code`, `/lecture` and `/doubt` stay as **deprecated aliases** in v4, with the mode
  forced and a one-line note. They are removed in v5.
- `/course` and `/project` stay separate, because they span multiple sessions. `/course` builds
  each lecture page through `/learn`'s lesson path.

**Visualization router** (DeepTutor idea, CampusX-tuned). It picks the cheapest form that
teaches. Static is the default; animation is used only where the content *builds up* (V3):

| Content shape | Form |
|---|---|
| Single fact or definition | prose plus a `[` bracketed definition |
| Breakdown into parts | ladder list (V8) |
| Process or pipeline that grows | **animated whiteboard** (V3, N1–N11) |
| X vs Y | `compare-pair` (V6) |
| Hierarchy or curriculum | tree board (V7) |
| Parameter trade-off (chunk size, temperature) | `sandbox` slider board |
| Math or derivation | one numeric example carried through the steps (teaching-framework math rule) |

### 4.2 Anatomy of a lesson page (mirrors a CampusX lecture)

```
 ① OPEN            hero: mascot + title + "Aaj hum X dekhenge… end tak aapke paas Y hoga"
                   recap board: replay last lesson's board, ring today's node   (N9, V7)
 ② PLAN OF ACTION  "is lesson ko teen parts mein divide kar rahe hain"           (only if ≥3 parts)
 ③ WHY             situation one / two / three · ChatGPT-as-foil                 (R10)
                   [ pause-socho ] "Aapko kya lagta hai, LLM yahan kya karega?"   (R1)
 ④ WHAT            anchor definition, "yahan pe dekho, likha hua hai…" + red [    (R4, N3)
                   WHITEBOARD: count-first → ordinal steps → numbers on nodes     (N1–N7)
                   analogy as a green second-pass layer, mapped item by item     (N8, R9)
                   [ yahan-tak-clear ]  not clear → new analogy                   (doubt rule)
 ⑤ HOW             mechanism; the board's step names reused as headings          (N11)
                   "now that you have the big picture, let's start coding"
 ⑥ CODE            prose line-by-line + [ output-kya-aayega ] stepper
                   errors shown → named → root-caused → fixed
 ⑦ LIMITS          honest edge cases, "thoda tricky hai" labels, the 80% note    (R3, R7)
                   "ye abhi skip kar rahe hain, zarurat padi to aage"
 ⑧ SELF-CHECK      [ khud-ko-samjhao ] → [ revision-cards ]                       (R5)
 ⑨ CLOSE           "toh flow ke hisaab se…" full-board walk + "I hope samajh aa gaya" (N10)
                   recap in why → what → how order · [ homework: extend it ]     (R6)
                   "agle lesson mein…" naming the open loop it resolves
```

**Scaling.** A narrow question gets ③④ only. "Teach me X from scratch" gets the full page. If the
theory was covered in an earlier lesson, go ① → ⑥ almost directly (R8).

**Tic budget.** Use each tic family at most about 2–3 times per page. They are seasoning, not
scaffolding. Interactive prompts carry most of the voice; headings stay plain.

### 4.3 Sample: the opening of RAG lesson 1, as v4 would write it (original wording)

> **Hero:** *Aaj hum dekhenge ki LLM akele kahan fail hota hai, aur RAG us gap ko kaise bharta
> hai. End tak aapke paas poora RAG flow dimaag mein hoga, visually bhi.*
>
> **③ Why.** Dekho, ChatGPT se poocho "hamari company ki leave policy kya hai?" — wo confidently
> kuch bhi bol dega. Ab sawaal ye aata hai ki aisa kyun? Teen situations hain…
>
> **[ pause-socho ]** *Ek baar ruk ke socho: agar model ko aapka PDF kabhi dikha hi nahi, to wo
> sahi jawab kaise dega?* → (learner answers) → *The answer is: nahi de sakta. Isliye usko
> sahi context **dena** padega…*
>
> **④ Whiteboard captions, in step order:**
> 1. "Is poore flow ko maine chaar steps mein toda hai." *(the board is empty; four faint slots)*
> 2. "Pehla: **indexing**. Ye hamara 2 ghante ka lecture hai…" *(yellow document box; handwritten
>    "2 hr")*
> 3. "Step number two: **retrieval**. Aapke dimaag mein aa raha hoga, poora document kyun nahi
>    bhej dete? The answer is… context window." *(a red "?" on a broken arrow, then the green
>    retriever box)*
> 4. "Chaar mein se do steps ho gaye." *(the first two nodes get green ticks)*
> 5. … "Toh flow ke hisaab se: indexing → retrieval → augmentation → generation. I hope
>    visually aur conceptually dono samajh aa gaya."

### 4.4 Interactive block library

All blocks are self-contained, with no CDN.

| Block | Behaviour | Style anchor |
|---|---|---|
| `whiteboard` | Animated scene (§5); ◀ ▶ step controls with the caption beneath; ✎ pen toggle; ↺ replay | V1–V8, N1–N12 |
| `recap-board` | Replays the previous lesson's final board, then rings today's node | N9, V7 |
| `compare-pair` | The same diagram twice; only the differing node changes, ringed | V6 |
| `ladder` | Spine with branches, revealed branch by branch | V8 |
| `definition` | Anchor line in a red `[`, keywords underlined | N3, R4 |
| `worked-example` | Real numbers, revealed step by step; one example carried through | V5, math rule |
| `pause-socho` | MCQ or short answer; distractors are real misconceptions; reveal starts "The answer is…" plus the why | R1 |
| `output-kya-aayega` | Code stepper: highlight a line → variable panel → predict → reveal; errors narrated | code pattern |
| `yahan-tak-clear` | ✓ clear / ✗ not clear; ✗ opens a re-explanation with a *different* analogy, plus a "revisit section" link | doubt rule |
| `khud-ko-samjhao` | "Kal koi pooche X kya hai, 3–4 lines mein samjha paoge?" Textarea plus **copy to Virus** for grading in chat | explain-back |
| `hint-ladder` | Practice task; hint 1 → hint 2 → solution unlocks last | hints over solutions |
| `revision-cards` | Flip cards; fronts are learner-voice questions, backs are 1–2 lines plus an example | R5 |
| `sandbox` | A slider or toggle changes a board live (chunk size vs overlap) | "try changing this and see" |
| `padh-ke-dekho` | Expandable dense prompt or code: "pause karke padhna zaroor" | interaction table |
| `kis-side-mein` | Classify-the-term game (builder side / user side, or which level) | 001 (thin, optional) |
| `homework` | One extend-what-we-built task | R6 |
| `ask-virus` | Buttons that copy a ready follow-up prompt for Claude Code | Virus addition |

**HTML robustness checklist** (adapted from DeepTutor, rewritten):
- `DOMContentLoaded` plus `addEventListener`, never inline `onclick`.
- `data-target`/`id` patterns for steppers and tabs; a unique class prefix per block.
- No fixed pixel widths. At most 4 boxes per board row; 2–3 role fills plus pen colours.
- SVG coordinates checked against the viewBox.
- `prefers-reduced-motion` shows final states.
- Every `localStorage` access wrapped in try/catch.
- Clipboard falls back from `navigator.clipboard`, to `execCommand('copy')`, to select-and-show.

---

## 5. Whiteboard engine

```
 /learn ─▶ visualization router ─▶ scene spec ─────────────────────────────▶ Virus renderer
                                   (Excalidraw-compatible elements[]          (inline JS in page)
                                    + steps[] with Hinglish captions          rough.js sketch SVG
                                    + pen[] overlay + labels[] numbers        draw-on / fade / ring
                                    + analogy[] green layer)                  ◀ ▶ step, ✎ pen, ↺
                                          ▲
                     optional: Excalimate MCP (layout checks + timing), when installed
```

- **Scene spec** is embedded as `<script type="application/json">`. Each step is
  `{ids, action: draw|fade|ring|tick|dim|gap, caption, startMode, staggerMs}`. The caption is
  required; every step speaks, following N1–N11. Excalidraw-compatible, so a scene can be opened
  in excalidraw.com or Excalimate for hand-tweaking.
- **Board look.** A light "OneNote page" card (V1) sits inside the dark v3 mascot theme: title,
  small date line, whitespace, pastel role fills (V2). The pastels need a light surface to read
  correctly, which is why it's a card. The mascot sits beside the board in the right rail, like
  the teacher standing at the board.
- **Renderer.** One vendored `templates/whiteboard.js`, inlined, using rough.js (MIT, ~30 KB
  minified, ~9 KB gzipped; inlined means the raw size counts). Draw-on uses `stroke-dashoffset`,
  fades use opacity. `ring` draws the red focus circle; `tick` adds a green tick; `gap` draws a
  broken arrow with a "?" (N5).
- **Step control.** The learner clicks ▶ to advance, like pausing and playing a lecture. The
  caption sits under the board and the step counter reads "2 / 6". Optional autoplay.
- **Font.** A hand-drawn font as a base64 subset (Excalifont, OFL, if the subset is small;
  otherwise a Caveat or Kalam subset). Budget ≤60 KB.
- **Persistent boards.** `/course` saves each lesson's final scene to
  `virus-courses/<topic>/scenes/<lesson>.json`. The next lesson's `recap-board` loads it and
  extends it (V3, N9). This lets the RAG board grow from lesson 1 to lesson 5, exactly like
  lc p110 → 116.
- **Excalimate (optional).** Pinned in `.mcp.json` as `@excalimate/mcp-server@0.5.0 --stdio`. When
  present, Virus authors through `create_animated_scene` and checks `are_items_in_line` and
  `items_visible_in_camera`, then reads the JSON back. Without it, Virus writes the JSON directly.
  The output is the same either way; nothing depends on the hosted app.

---

## 6. Layout: use the whole screen

**Root cause** (v3 `lecture-page-skeleton.html:42`): `.wrap{max-width:920px}` plus `p{max-width:70ch}`.
At 1910px, about 60% of the screen is empty margin.

```
┌──────────────┬──────────────────────────────────────────────┬────────────────┐
│ LEFT RAIL    │ MAIN                                          │ RIGHT RAIL     │
│ (sticky)     │                                               │ (sticky)       │
│ Course map = │ Hero + agenda                                 │ Mascot "at the │
│ growing tree │ Prose column ≤72ch                            │ board"         │
│ (V7):        │ ┌──── full-bleed whiteboard (light card) ───┐ │ Key terms      │
│ ✓ L1 Why RAG │ │ title · date   ◀ 2/6 ▶  ✎  ↺             │ │ Pen notes      │
│ ◉ L2 Chunk   │ │ caption: "Chaar mein se do steps ho gaye" │ │ "dhyaan se"    │
│ ○ L3 Embed   │ └───────────────────────────────────────────┘ │ "don't worry,  │
│ Section TOC  │ pause-socho · stepper · cards …               │  aage aayega"  │
│ + scroll spy │                                               │ ask-virus      │
└──────────────┴──────────────────────────────────────────────┴────────────────┘
```

- **Breakpoints.** ≥1280px: three columns. 768–1279px: two (the right rail folds into inline
  callouts). <768px: one (the left rail becomes a top drawer). No horizontal scroll.
- **Course map = the FastAPI recap-tree pattern** (fa p10 → 12 → 18): covered ✓, today ◉ ringed
  red, pending ○.
- **Right rail = the margin of his notes page:** deferral notes ("don't worry, Lesson 3 mein"),
  honesty labels, key terms, and pen-style callouts.
- Keep the v3 mascot and its base64 embedding. Replace the hero's per-line highlight blocks (seen
  in your screenshot) with a single red pen underline.

---

## 7. Learner memory: `./virus-progress/learner.json`

A local file in the learner's folder. Virus writes it; it's never committed to the plugin repo.

```json
{
  "profile": { "language": "hinglish", "pref": "teach-first", "level": "L4", "hoursPerDay": 2 },
  "concepts": {
    "rag.chunking": { "mastery": 0.62, "attempts": 3, "lastSeen": "2026-10-12",
      "nextReview": "2026-10-15", "type": "procedure",
      "misconceptions": ["thinks overlap duplicates whole chunks"], "status": "practicing" }
  },
  "sessions": [ { "date": "2026-10-12", "topic": "RAG L1", "recap": "...",
                  "openLoop": "chunk size kaise choose karein", "homework": "..." } ]
}
```

- **Voiced recap.** Every `/learn` opens with his ritual, drawn from this file: "Hamesha ki tarah
  chhota sa recap: pichli baar humne indexing dekhi thi, aur chunk overlap pe thoda atke the…"
  The `openLoop` from the last close becomes today's hook (§3.6 close).
- **What next.** Simplified from tutor-mcp:
  1. Active misconception → fix it with a new analogy.
  2. Review overdue → `revision-cards`.
  3. Mastery <0.3 → new concept.
  4. Mastery <0.85 → `pause-socho` and practice.
  5. Three stable results → `khud-ko-samjhao`, then homework.
- **Mastery caps** (DeepTutor): at most 0.5 after one attempt and 0.8 after two. A lucky answer is
  never "mastered".
- **Review ladder:** 1 → 3 → 7 → 14 → 30 days. Simple and explainable, not FSRS.
- **Honesty.** Mastery numbers are never shown as a score. Virus says "lagta hai chunking pakka
  ho gaya; overlap thoda revise kar lena".

---

## 8. `/ai-engineer`: CampusX's roadmap, presented his way

### 8.1 First run: the roadmap intro (launch-video beats, §3.5)

A short chat intro, not a wall of text:

1. **Why the role.** "AI engineer wo hai jo foundation models ke upar apps banata hai" (the LLM
   Eval launch definition). Plus one concrete interview hook ("RAG evaluate kaise karte ho?"
   question pakka aata hai).
2. **Disclaimer.** "Field tezi se badal rahi hai, ye roadmap final nahi hai. Master karne mein
   saal bhar lagega." (R3)
3. **Mental model.** Foundation model at the centre, user side vs builder side; the AI engineer is
   mostly user side, with some builder side (001).
4. **The roadmap in 4 parts** (§8.2), with one line on why this order: "pehle holistic view, phir
   depth".
5. **The 80% line.** "Har cheez 100% nahi chahiye — jo 80% kaam aata hai wo karenge." (R7)
6. The pickers (§8.3).

The intro shows only on first run. After that, `PLAN.md` exists and re-entry (§8.6) takes over.

### 8.2 The 16 levels, grouped into 4 parts

The CampusX roadmap repo has 16 levels (L0–L15) in 7 phases. In his videos he presents
curricula as **3 parts or 6–10 modules, never a flat list of 16** (roadmap DNA, point 5). The
picker tool also allows only 4 options per question. So Virus groups the levels into **4 parts of
4**. The grouping is Virus's own, labelled as such; the level names come from the repo:

| Part | Levels | One-line purpose (Virus wording) |
|---|---|---|
| **Part 1 — Foundations** | L0 Software Fundamentals · L1 LLM 101 · L2 LLM APIs & Orchestration · L3 Prompt Engineering | Code you'll need, how LLMs work, calling them well |
| **Part 2 — Building with LLMs** | L4 RAG · L5 AI Agents · L6 Context Engineering · L7 LLM Evals | The core AI-engineer toolkit |
| **Part 3 — Production** | L8 AI Security · L9 AI System Design · L10 LLMOps · L11 Managed AI Platforms | Making it safe, scalable and operable |
| **Part 4 — Frontier & Career** | L12 Multimodal · L13 Fine-Tuning · L14 Projects · L15 Interview Prep | Builder-side depth, portfolio, getting hired |

Level names and module lists are fetched live (§8.4). If the repo reorganises, the grouping is
recomputed from the `phase` field, with a fallback to the table above.

### 8.3 The flow: pick a level → pick a topic → teach it

1. **Show the map** as one compact grouped list in chat, so the whole journey is visible.
2. **Pick a part** (`AskUserQuestion`, single choice, 4 options), **then the level** (a second call
   with the 4 levels in that part, each with its one-line purpose). Typing "level 4" skips both.
3. **Prerequisite gate, with a fix** (roadmap DNA, point 6). If the level's `prerequisites` aren't
   in `PLAN.md` as done:
   > "Is level ke liye L2 (LLM APIs) aana chahiye, warna thoda bhaari lagega. Phir bhi jaana hai?
   > Theek hai — main beech mein zaruri cheezein yaad dila dunga."
   The tool offers: *Go ahead (Recommended if you know it) / Do L2 first / Quick 2-min check*.
   The learner always decides.
4. **Pick the topic.** List the level's modules, each with a one-line why, marked **core** or
   **optional**:
   > "Is level mein 8 topics hain: 6 core, 2 optional. Core pehle karo; optional tab, jab zarurat
   > pade."
   Then "Kahan se shuru karein?": the first core module not yet done (Recommended), plus up to 3
   more. Any other module can be chosen by typing its number.
5. **"I already know this"** (roadmap DNA, point 7). If the learner says they know a module, Virus
   asks whether later modules build on it. If they do: "skip mat karo — 2 minute ka quick check
   kar lete hain" (one `pause-socho`). If not, mark it optional or skipped.
6. **Teach it.** The chosen module goes to `/learn` with the module's objectives, `Try:` and
   `Outcome:` as the lesson brief. It opens with the full lesson anatomy (§4.2). At the close:
   "Agla topic: 4.3 Embeddings — chalein?"
7. **Optional "Not sure which level?" helper.** Runs only if asked. It's one checkbox round
   (`multiSelect`) built from the levels' "By the end of this level…" outcomes. Virus predicts a
   level, explains why, and returns to step 4.
8. **Fallback without `AskUserQuestion`:** the same steps as numbered lists ("level ka number
   bhejo").

### 8.4 Data source and license

- Fetch `src/data/levels.json` live from raw.githubusercontent.com using plain WebFetch (one static
  file, so no Playwright).
- Use it for the session and the learner's local `PLAN.md` only; it's a personal copy with source
  links. **Never commit roadmap text to the Virus repo**, because it has no license.
- Worked examples in the repo use level names and links only.
- If the fetch fails, fall back to the §8.2 table and link to the repo.
- Optional: ask CampusX for permission or a license (Q4).

### 8.5 Books: curated titles plus bring-your-own

- **The roadmap repo lists only one book** (Chip Huyen, *AI Engineering*, at L9). CampusX's videos
  barely recommend books either (thin evidence).
- **`references/books.md` is a Virus-curated list:** 1–2 books per part (not per level), with
  title, author, year, the levels it serves, why it fits, and free or paid status. Each entry is
  verified by a research ticket (T11). Titles and authors are facts; summaries are in our own
  words. **No PDFs, no download links, nothing from piracy sites.**
- **Bring your own books.** If the learner owns books, `/ai-engineer books <folder>` maps chapters
  to levels so `/learn` can cite "apni book ka chapter 6 dekho" (the hinglish-tech-mentor
  `/ingest-book` precedent). It reads locally and is never uploaded or committed.
- The `AI_Learning_Roadmap_2026/pdfs` folder found in the transcripts directory includes files from
  piracy sites. Virus does not use or reference it.
- Resource order follows CampusX: prerequisite playlist or lesson first, then official docs "if
  curious", then the book.

### 8.6 PLAN.md and re-entry

`./virus-ai-engineer/PLAN.md` holds:
- the chosen level;
- modules with a core/optional and done/pending table (the v3 `PROJECT_PLAN.md` pattern);
- per-level hand-offs:
  - "seekho" → `/learn`
  - "banao" → `/project` at the matching difficulty
  - "deep jao" → `/course`
- CampusX course links, books, and the date of the last session.

**Re-entry.** `/ai-engineer` again gives the recap ritual ("pichli baar L4.2 Chunking khatam
kiya, overlap pe homework tha"), then one question: *continue with next module (Recommended) /
another topic in this level / switch level*.

**FAQ close** (roadmap DNA, point 10): on first run only, 3–5 questions ("kitna time?", "fresher
ho to kahan se?", "builder side chahiye?", "job ke liye kaafi hai?"), then "feedback ho to
batao".

---

## 9. Style docs to update (ticket T4)

| File | Change |
|---|---|
| `style-guide.md` | Add R1 (question rule split by register), R2 (two tics), R3 (honest-disclaimer rule), R4 (anchor definition), R5 (revision tier change), R6 (homework shape), R10 (ChatGPT foil vs app mappers), and the banned interactive microcopy (§3.4) |
| `teaching-framework.md` | Add R8 (timing) and R9 (analogy as second pass); new section "Teaching with a whiteboard" (N1–N12 summary pointing to `diagram-style.md`); new section "Interactive blocks voice" (the §3.4 table) |
| **new** `diagram-style.md` | V1–V8 and N1–N12 with citations and confidence; the role palette; caption phrase bank; anti-patterns (narrating the pen, redrawing summaries, red used as an "important" code) |
| **new** `roadmap-voice.md` | §3.5 beats, the level-card format, prerequisite-gate wording, the FAQ close, and the sample intro script |
| `hinglish-guide.md` | Add the spellings: "trust me", "tension mat lo", "pause karke socho", "output kya aayega", "khud ko samjhao", "yahan tak clear hai" |

---

## 10. Inputs: what each one contributed

| Input | Take | Don't take |
|---|---|---|
| Your RAG-lecture screenshot | The layout problem (§6) | — |
| CampusX notes PDFs (LangChain, 100 Days ML, FastAPI) | Visual DNA V1–V8 | Any page content |
| LangChain, FastAPI and other CampusX transcripts | Narration N1–N12, interaction, roadmap and timing DNA | Text beyond short attested phrases |
| tutor-mcp (MIT) | What-next table, misconception log, Feynman gate, session close | The server, 46 tools, persona |
| DeepTutor (Apache-2.0) | Visualization router, locate → page → Q&A → summary, block planner, HTML checklist, mastery caps | Server, RAG engines, Manim |
| Excalimate (MIT) | Scene schema, timing model, layout checks (optional MCP) | Relying on its hosted export |
| CampusX roadmap repo (no license) | Level structure, modules, `Try:`/`Outcome:`, prerequisites, course links (all live) | Vendoring any of it |

---

## 11. Risks

- **Voice dilution in the merge.** Four modes collapse into one, and rules could quietly drop. T9
  carries a checklist of every v1–v3 rule; T15 re-checks it with the voice rubric (§14).
- **"Tutor-app" drift.** Quizzes pull toward generic microcopy. The banned-microcopy list goes in
  the style guide, and T15 greps every generated page for it.
- **Over-animation.** Boards animate only where content builds up (V3). Everything else is a
  static board or prose.
- **Page weight.** rough.js ~30 KB + font ≤60 KB + mascot ~30 KB + scenes → ~150 KB per page. T6
  measures it.
- **`file://` quirks.** Clipboard and `localStorage` may be restricted, so both have fallbacks.
  Tested in Chrome, Edge and Firefox.
- **Roadmap churn or rename.** Live fetch, the phase-based regrouping, and the static fallback
  table all exist; the URL lives in one place.
- **Excalimate 0.x API churn.** It's pinned and optional; if it breaks, Virus falls back to
  writing the JSON by hand.
- **Thin-evidence creep.** Thin items (80% as a name, the classify game, hint ladders, books) stay
  labelled "thin / Virus addition" in the docs and are never hard rules.

---

## 12. Open decisions

| # | Question | Recommendation |
|---|---|---|
| Q1 | Name of the unified command | **`/learn`** (shows as `/virus:learn`). Alternatives: `/virus`, `/sikho` |
| Q2 | Fold `/doubt` in as well? | **Yes**, keeping an alias |
| Q3 | Old commands | **Deprecated aliases in v4**, removed in v5 |
| Q4 | Roadmap content | **Live fetch plus links, never vendored.** Optionally ask CampusX for a license |
| Q5 | Excalimate | **Optional MCP**; Virus's renderer produces the output |
| Q6 | tutor-mcp | **Ideas only** |
| Q7 | Progress file location | **`./virus-progress/`** in the learner's folder |
| Q8 | Board animation trigger | **Click-to-step by default** (◀ ▶, like pause/play on a lecture), with autoplay optional. Changed from rev 1's scroll-driven default: he builds one step per spoken beat, so the learner should control the pace |
| Q9 | Books | **1–2 curated, verified books per part**, plus bring-your-own local books |
| Q10 | `/ai-engineer` flow | **Decided:** part → level → topic → teach, with a prerequisite gate that has a fix; the "not sure?" helper runs only on request |
| Q11 | Board surface | **Light OneNote-style card inside the dark mascot theme** (pastels need a light surface). Alternative: a fully light page theme |
| Q12 | Interactive blocks that wait for an answer | **Yes**, voiced as "pause karke socho" (live-session evidence, R1). Boards themselves stay self-answered (N4) |

---

## 13. Tickets (wayfinder map → child issues)

Research is done and recorded in `research/v4/`.

| # | Type | Ticket | Blocked by |
|---|---|---|---|
| T1 | task | Commit `research/v4/` (4 files) plus this plan; link both from the map | — |
| T2 | grilling | Settle Q1–Q9, Q11 and Q12 | — |
| T3 | task | Scaffold v4: `commands/learn.md`, `commands/ai-engineer.md`; alias stubs for teach/code/lecture/doubt; `SKILL.md` routing (Learn, Course, Project, AI-Engineer); placeholder refs; optional Excalimate in `.mcp.json`; bump to 4.0.0 | T2 |
| T4 | task | **Style docs:** apply §9 (style-guide, teaching-framework, hinglish-guide, new `diagram-style.md`, new `roadmap-voice.md`), every line cited | T1 |
| T5 | task | Full-width skeleton v4: three-column shell, breakpoints, left-rail course map (V7), right-rail margin, light board card, hero fix | T3 |
| T6 | prototype | Whiteboard renderer: scene spec with required captions; rough.js; draw/fade/ring/tick/dim/gap; ◀ ▶ ✎ ↺; reduced motion; font subset. **Prototype on the RAG board, lc p110 → 116 progression, redrawn in our own words and narrated with N1–N11.** Measure size and `file://` behaviour | T4 |
| T7 | task | Interactive block library (§4.4) with voiced microcopy (§3.4), the robustness checklist, and the `fix` path | T5, T6 |
| T8 | task | `learner-memory.md` + `learner.json` schema, what-next table, mastery caps, review ladder, voiced recap and openLoop | T3 |
| T9 | task | `learn-mode.md`: intent router, visualization router, lesson anatomy (§4.2) with timing (§3.6) and tic budget; merge the teach/code/doubt/lecture rules **with a checklist of every v1–v3 voice rule** | T4, T7, T8 |
| T10 | task | `ai-engineer.md` + `roadmap-voice.md` usage: first-run intro (§8.1), 4-part grouping with phase-based recompute, pickers, prerequisite gate with fix, core/optional, "I already know" rule, "not sure?" helper, fallback, `PLAN.md`, re-entry, FAQ close | T4, T8, T11 |
| T11 | research | Curate and verify `books.md` (1–2 per part) plus the bring-your-own-books mapping design | — |
| T12 | task | Excalimate optional path, tested with and without the MCP installed | T6 |
| T13 | task | Worked examples: (a) **regenerate your screenshot's RAG lecture** as v4 lessons 1–3, with the board growing across them; (b) a scripted `/ai-engineer` first run plus re-entry for an L3 learner (names and links only, no roadmap text) | T9, T10 |
| T14 | task | Update `/course` to generate through `/learn`'s lesson path and save and extend scenes | T9 |
| T15 | task | **Test, self-critique, fix** against the §14 rubrics | T13, T14 |
| T16 | task | README (`/learn` and `/ai-engineer` comparisons with real screenshots, migration note, style-DNA section), release v4.0.0 | T15 |

Parallel lanes: {T1 → T4 → T6} ∥ {T2 → T3 → T5 / T8} ∥ {T11}. They join at T7 → T9.

---

## 14. Test rubrics (T15)

**Voice rubric.** Each item is checked on the two RAG lessons and the `/ai-engineer` run.

1. The page opens with a recap (when a previous lesson exists) and then the agenda. No assistant
   opener.
2. Why comes before mechanism. An anchor definition, if present, is followed immediately by the why.
3. Every board opens count-first and has an ordinal caption on every step (N1, N2).
4. At least one "problem gap before the box" step where a middle component exists (N5).
5. Example numbers appear on the board (N6). A progress counter appears on flows with ≥4 steps (N7).
6. The analogy, if used, comes after the build, as a green layer (N8).
7. The board closes with a "flow ke hisaab se" walk and a check line (N10). The what→how bridge
   reuses step names (N11).
8. Interactive blocks use only attested voice ("pause karke socho", "output kya aayega",
   "khud ko samjhao"). **Zero banned microcopy** (grep).
9. Tic density is within budget (no family more than about 3 times per page). The Hinglish
   code-mixing rule holds throughout. No Devanagari.
10. Honesty labels and the 80% "skipped" line are present where relevant. Homework is an
    extension, not recall.
11. The close names a specific open loop for the next lesson.
12. `/ai-engineer` runs the launch beats in order: why, disclaimer, mental model, 4 parts with
    order justified, pickers. The prerequisite gate offers a fix and lets the learner decide. FAQ
    on first run.
13. Every v1–v3 rule from the T9 checklist still holds (e.g. learner-writes-code in `/project`;
    error narration in code mode).

**Functional rubric**
- Layout at 1920, 1280, 768 and 375px.
- ◀ ▶ ✎ ↺ controls work, including with the keyboard.
- Reduced motion.
- Offline: the network is off and nothing breaks.
- Page size ≤ budget.
- Clipboard and `localStorage` fallbacks.
- Aliases route correctly.
- A failed `levels.json` fetch uses the fallback.
- `learner.json` round-trips across two sessions.
- Scenes persist across lessons.

---

## 15. Out of scope for v4

- Video, GIF, MP4 or Manim export.
- RAG over the learner's documents (DeepTutor's knowledge base). Bring-your-own-books does chapter
  mapping only.
- A backend, accounts or sync. Everything is local files.
- Redistributing roadmap, notes, transcript or book content.
- Changes to `/project`'s build loop, apart from receiving hand-offs.

---

## 16. Corrections from rev 1

- **"One call, two dependent questions" for the level picker was wrong.** Questions in one
  `AskUserQuestion` call display together, so part → level is two calls.
- **The 4 level groups are Virus's own grouping.** The repo has 7 phases. Rev 1 implied otherwise.
- **rough.js "~9 KB" was the gzipped size.** Inlined, the raw size of about 30 KB counts.
- **The rev 1 animation default (scroll-driven) is replaced by click-to-step** (Q8), based on the
  narration evidence.
- **Rev 1 had no "books" source issue.** Since then the local `AI_Learning_Roadmap_2026/pdfs` folder
  has been found, with files from piracy sites. That folder is now excluded explicitly (§8.5).
- **"He never waits for an answer" (narration pass) is refined by the voice pass.** On YouTube he
  pauses and then self-answers; in live sessions he really waits. Hence the register split (R1).
