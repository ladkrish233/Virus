# Virus

A Claude Code plugin that teaches tech topics in a CampusX-inspired Hinglish voice, through chat
explanations, generated lesson pages, guided projects, and a stage-wise AI-engineer roadmap.

## Language

### Teaching outputs

**Lesson**:
One generated, self-contained HTML page that teaches a single module or topic, structured like a CampusX lecture.
_Avoid_: Lecture page, lecture (except as the deprecated `/lecture` alias)

**Course**:
An ordered series of lessons on one topic, produced by `/course`, sharing persistent boards across lessons.
_Avoid_: Playlist, curriculum

**Block**:
One typed unit inside a lesson (a board, a pause-and-think prompt, a code stepper, revision cards, homework, …).
_Avoid_: Widget, component, section

### Whiteboards

**Scene**:
The data describing a diagram: its shapes, steps, pen layer and labels.
_Avoid_: Diagram file, drawing

**Board**:
A scene rendered on a lesson as a hand-drawn whiteboard the learner steps through.
_Avoid_: Diagram, canvas, animation

**Step**:
One reveal on a board, always paired with a spoken-style caption.
_Avoid_: Frame, keyframe, slide

**Pen layer**:
The annotation overlay on a board: red focus rings and underlines, definition brackets, green ticks.
_Avoid_: Highlights, markup

### Roadmap

**Part**:
Virus's own grouping of four consecutive levels, used to present the roadmap in CampusX's few-parts style.
_Avoid_: Phase (the roadmap repo's own, different grouping), stage

**Level**:
One of the sixteen numbered stages (L0–L15) of the CampusX AI Engineering roadmap.
_Avoid_: Stage, tier

**Module**:
One unit of study inside a level; shown to the learner as a "topic".
_Avoid_: Lesson (a lesson is the page that teaches a module)

### Learner

**Learner memory**:
The local record of what the learner has covered, their misconceptions, review dates and open loops, read at the start of a session and written at the close.
_Avoid_: Progress tracker, profile, state

**Open loop**:
The specific unresolved question a lesson's close hands to the next lesson.
_Avoid_: Cliffhanger, teaser

**Doubt**:
A specific confusion the learner raises, handled by restating, finding the root misconception, and re-explaining with a new analogy.
_Avoid_: Question, query, confusion

## Relationships

- A **Course** contains ordered **Lessons**; each **Lesson** contains **Blocks**
- A **Board** is a **Block** that renders one **Scene**; a **Scene** has many **Steps** and one **Pen layer**
- A **Board** may carry over from one **Lesson** to the next, gaining new **Steps**
- A **Part** groups four **Levels**; a **Level** contains many **Modules**
- A **Module** is taught by one or more **Lessons**
- **Learner memory** records **Doubts** as misconceptions and each session's **Open loop**

## Example dialogue

> **Dev:** "When the learner picks a topic in `/ai-engineer`, do we generate a lecture?"
> **Domain expert:** "They pick a **Module**, and `/learn` produces a **Lesson** for it. If the lesson has a **Board** from an earlier lesson in the same **Course**, it opens by replaying that board and ringing today's step."

## Flagged ambiguities

- "topic" was used for both a **Module** and a whole subject like "RAG". Resolved: **Module** is the canonical term; "topic" is only the friendly label shown to learners.
- "lecture" (v1–v3) and "lesson" (v4) referred to the same page. Resolved: **Lesson**.
- "stage" was used for **Level**, **Part**, and the roadmap repo's phases. Resolved: use **Level** or **Part**; never "stage".
