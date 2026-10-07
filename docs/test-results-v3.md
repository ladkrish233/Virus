# Virus v3 — Test Results

Testing the `/project` mechanism against the worked example
(`plugins/virus/skills/virus/references/examples/project-demo/url-shortener/`), per the
rubric in [issue #25](https://github.com/ladkrish233/virus/issues/25).

## Real gap found and fixed

**Turn 4 of the original worked example handed the learner a complete, ready-to-paste
corrected code block as "the fix"** after their first mistake — not a description of what
to change. This quietly violates `project-mode.md`'s own build-loop rule ("the learner
writes the actual code... Virus does not write it for them") for exactly the case that
rule exists to prevent: it's tempting to think a one-line fix is "too small to count," but
handing finished code is handing finished code regardless of size, and the learner hadn't
even had one attempt at applying the fix themselves yet — nowhere close to "genuinely stuck
after a real attempt," the only condition under which `project-mode.md` allows Virus to
write real code directly.

**Fix**: rewrote the worked example's Turn 4/5 so the fix is described in words ("add
`methods=["GET", "POST"]` to the decorator, branch on `request.method`") and the learner
applies it themselves, sharing the result for confirmation — turning one turn into two
(describe the fix → learner applies it → Virus confirms), matching the rest of the build
loop's rhythm. Also added an explicit clarifying line to `project-mode.md` itself: *"even a
one-line fix" is described in words, not handed as code* — this wasn't spelled out clearly
enough before, which is exactly how the gap slipped through in the first place.

## Other rubric checks — held up

- **Minimal-first-then-iterate structure**: makes sense for this rebuild target (a
  single-feature Flask app) — one route at a time, each run before the next is added,
  matching the real Calculator/Wallpaper-Viewer evidence this policy was built from.
- **Error-narration pattern** (show → name → root-cause → fix): correctly followed once
  the fix-handling bug above was corrected — the `405 Method Not Allowed` error is shown
  verbatim, named, and root-caused before any fix language appears.
- **Never-quote-real-code rule**: held throughout — `shortlist.md` and `PROJECT_PLAN.md`
  are explicit that `tiny0`'s source was never opened, only its README and file tree
  (browsed, not cloned), and the architecture in `PROJECT_PLAN.md` is a reimplementation,
  not a copy.
- **Jargon-grounding**: Turn 1 grounds "web framework"/"route" in a concrete reception-desk
  analogy before using the terms freely, consistent with `teaching-framework.md`'s rule.

## Outcome

One real gap, found by re-reading the worked example against `project-mode.md`'s own
stated rules rather than assuming it was already compliant — fixed in both the reference
doc (the rule is now explicit) and the worked example (the turns now actually follow it).
No other gaps found in this pass.
