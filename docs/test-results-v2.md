# Campusx v2 — Test Results

Testing the `/course` mechanism against the FastAPI worked example
(`references/examples/course-demo/fastapi/`), per the rubric in
[issue #16](https://github.com/ladkrish233/campusx/issues/16).

## Real gap found (via user testing) — fixed

The user tested lecture-01.html directly and flagged it: the page used terms like
"JSON," "request," and "routing" without ever defining them for someone who doesn't
already know what those are. The lecture jumped from "why FastAPI" straight into
`pip install` and code, assuming prior web/API knowledge it never actually taught.

**Root cause**: `teaching-framework.md` had a general "ground concepts in analogies"
rule, but nothing specific about foundational jargon that an entire topic depends on.

**Fix, grounded in real evidence**: the user also supplied a real CampusX FastAPI
playlist transcript zip (now saved at `research/transcripts-fastapi/`). Its first video,
"What is an API," confirmed a specific two-step pattern never defines jargon in the
abstract:

1. A maximally concrete, non-technical scenario first (a restaurant: customer orders
   food, a waiter carries the order to the kitchen, the chef cooks, the waiter brings
   it back).
2. Map new terms onto that scenario one at a time (waiter = API, order = request, food
   = response, menu card = protocol, how the food is plated = data format — JSON named
   here, in passing, never as a standalone definition).

Added this as a new "Grounding foundational jargon" section in `teaching-framework.md`,
and rewrote lecture-01.html's opening to add a proper foundations section (API/request/
response/JSON via the same restaurant-and-waiter pattern, independently structured
rather than copied) **before** the FastAPI-specific "why" section. Verified: the
restaurant/waiter analogy the fix converged on structurally matches the real
transcript's own analogy (customer/waiter/chef, menu=protocol, plating=data format) —
a good sign the pattern generalizes rather than being a one-off coincidence.

## Roadmap sensibility

The FastAPI roadmap's 8 lectures (hello-world → routing → Pydantic bodies →
dependency injection → error handling → auth → testing → deployment) still hold up as
a sensible backward-design chain toward the stated end-state. Lecture 1's scope grew
(now covers foundations + FastAPI basics) but didn't need to split into two lectures —
the foundations section is short relative to the rest.

## Lecture-page completeness against the skeleton

Both lecture-01.html (now 4 sections) and lecture-02.html (3 sections) use the hero/TOC/
numbered-section/tip-card/warn-card structure correctly. The stage-flow diagram is used
appropriately — the restaurant flow in lecture-01's new foundations section, the
URL-parsing flow in lecture-02 — and correctly omitted where a lecture's content isn't
pipeline-shaped (lecture-01's "why FastAPI" and "hello world" sections).

## Doc-scraping fallback check

Both lecture pages correctly include the honest "no live docs were scraped for this"
caveat from `lecture-page-generation.md`'s best-effort policy — confirms the fallback
language actually gets applied, not just specified in the reference file and ignored.

## Outcome

One real, user-found gap; fixed with evidence-backed guidance rather than a guess.
No other gaps found in this pass. The mechanism (roadmap → lazy lecture generation →
skeleton fill → scrape-fallback) holds up end to end.
