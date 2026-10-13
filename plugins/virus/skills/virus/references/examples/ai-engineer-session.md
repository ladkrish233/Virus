# Example: /ai-engineer, first run and re-entry

A scripted session for a learner at level 3. It shows the first-run intro, the pickers, the
prerequisite gate, PLAN.md, and re-entry. The roadmap is referenced by level number, level title,
and module id only. Roadmap text is never copied here. Learner lines are in Hinglish, as the
learner would type them.

Source of the flow: `references/ai-engineer.md`.

---

## Part A: first run (learner has no PLAN.md)

**Virus:** AI engineer wo hai jo foundation models ke upar apps banata hai. Interview mein RAG
ke baare mein poochha jaata hai, to ye role seekhna kaam ka hai.

Ek baat pehle clear kar doon: field tezi se badal rahi hai, ye roadmap final nahi hai. Master
karne mein saal bhar lagega, aur ye pace pe depend karega.

Mental model: foundation model beech mein hai. Aap user side pe ho, aur kuch builder side bhi
chahiye.

Roadmap 4 parts mein hai. Order ye hai: pehle holistic view, phir depth.

Har cheez 100% nahi chahiye. Jo 80% kaam aata hai wo karenge.

```
Part 1 — Foundations: L0 · L1 · L2 · L3
Part 2 — Building with LLMs: L4 · L5 · L6 · L7
Part 3 — Production: L8 · L9 · L10 · L11
Part 4 — Frontier & Career: L12 · L13 · L14 · L15
```

**Picker 1 (part):** Kis part se shuru karein? Recommended: Part 1.

**Learner:** part 1

**Picker 2 (level):** Part 1 mein L0, L1, L2, L3. Kaunsa?

**Learner:** level 3

**Virus:** L3 ke liye L2 (LLM APIs) aana chahiye, warna thoda bhaari lagega. Phir bhi jaana
hai? Theek hai, main beech mein zaruri cheezein yaad dila dunga.

Options: Go ahead (Recommended if you know it) · Do L2 first · Quick 2-minute check · Show me the gap

**Learner:** quick check

**Virus:** Theek hai. Ek sawaal: ek API call mein message list kyun bheji jaati hai, aur ek
baar ki prompt se kya bachta nahi?

*(Learner answers. Virus checks the answer and marks L2 as "gap, practise" in PLAN.md. It does
not block.)*

**Picker 3 (module):** L3 mein 9 topics hain. Sab core hain. Kahan se shuru karein?
Recommended: M3.1. Ya number type karo.

**Learner:** M3.1

**Virus:** Chalo. M3.1 `/teach` mein khulega, aur wahan se lesson shuru hoga.

---

## Part B: PLAN.md after first run

```markdown
# AI Engineer plan

Last session: 2026-10-12 · Level: L3 Prompt Engineering · Part 1

## Level L3 — Prompt Engineering
Source: CampusX roadmap, fetched 2026-10-12 (link: campusx-official/ai-engineering-roadmap-2016)

| Module | Core/optional | Status | Notes |
|---|---|---|---|
| M3.1 | core | practising | |
| M3.2 | core | pending | |
| M3.3 | core | pending | |
| (…M3.4–M3.9 pending) | core | pending | |

Gap noted: L2 (LLM APIs) — message list pe ek quick check hua, practice karna hai.

## Hand-offs
- seekho → `/teach`
- banao → `/project` at the matching difficulty
- deep jao → `/course`
```

Mastery numbers are not written here. They go into `learner.json` (see `learner-memory.md`).

---

## Part C: re-entry (next day)

**Virus:** Hamesha ki tarah chhota sa recap: pichli baar humne M3.1 khatam kiya, aur
message list pe homework tha. Aaj wahi se shuru karte hain.

Continue with the next module (Recommended) · Another module in this level · Switch level

**Learner:** continue

**Virus:** M3.2 chalein?

*(The FAQ close is not shown again. It runs on first run only.)*

---

## What this example checks

- The intro follows the launch-video beats, with no roadmap text.
- Pickers offer four options each. Part and level are two calls. Modules are paged.
- The prerequisite gate offers a fix and lets the learner decide. It never blocks.
- PLAN.md holds statuses and hand-offs. Mastery stays in `learner.json`.
- Re-entry opens with a recap and skips the intro and the FAQ.
