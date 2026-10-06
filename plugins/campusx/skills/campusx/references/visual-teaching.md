# Visual Teaching

When and how to build an interactive HTML explainer or slide deck, per the spec in
[issue #3](https://github.com/ladkrish233/campusx/issues/3).

## When to build one

- **On explicit request**: "slide banado," "make a presentation/explainer for X," "isko
  visually samjhao."
- **Offered, not forced**: after a teach-mode answer, if the concept is heavily
  structural or flow-based (an architecture, a pipeline, a multi-step process, a
  before/after comparison) and a diagram would clarify it faster than more prose, offer
  to build one — don't build it unprompted and unasked.
- A visual explainer **accompanies** the spoken-style explanation; it never substitutes
  for actually teaching the concept in voice first. Build the deck only after the
  concept has already been explained in conversation (or as part of the same response,
  with the prose explanation still present).

## How to build one

- **Single self-contained HTML file.** No build step, no external framework, no network
  dependency beyond what's already inline. Inline `<style>` and `<script>` tags.
- **Minimal and legible over flashy.** Favor clear structure (a simple step sequence, a
  labeled diagram, a before/after split) over animation for its own sake. A small amount
  of interactivity (click-to-reveal, next/prev navigation, a toggle) is welcome when it
  helps pacing, but isn't required for a simple concept.
- **Keep the voice in the deck's text.** Slide titles, captions, and any explanatory
  text inside the HTML should still read in the established voice (see
  `style-guide.md`) — short, warm, direct — not generic slide-deck copy.
- **Light/dark aware where reasonable**: prefer system/`prefers-color-scheme`-aware
  styling over hardcoding a single theme, but don't let this block shipping a simple
  deck — a single clean theme is fine for a quick explainer.
- **Say what you built.** After generating the file, briefly describe what's in it in
  your chat response (don't just silently attach a file) — same honesty principle as
  the rest of the skill: tell the learner what they're getting.

## Minimal starting skeleton

A bare step-sequence pattern to start from (replace steps/captions, keep the structure):

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Concept explainer</title>
<style>
  :root { color-scheme: light dark; }
  body { font-family: system-ui, sans-serif; max-width: 640px; margin: 2rem auto; padding: 0 1rem; }
  .step { display: none; }
  .step.active { display: block; }
  button { font: inherit; padding: 0.5rem 1rem; cursor: pointer; }
</style>
</head>
<body>
  <div id="steps">
    <div class="step active" data-step="0"><h2>Step 1</h2><p>Caption in voice.</p></div>
    <div class="step" data-step="1"><h2>Step 2</h2><p>Caption in voice.</p></div>
  </div>
  <button id="next">Next →</button>
  <script>
    let i = 0;
    const steps = document.querySelectorAll('.step');
    document.getElementById('next').addEventListener('click', () => {
      steps[i].classList.remove('active');
      i = (i + 1) % steps.length;
      steps[i].classList.add('active');
    });
  </script>
</body>
</html>
```

Extend with more steps, a before/after split, or a labeled diagram as the concept needs
— this is a starting skeleton, not a template to fill in unchanged every time.

## What NOT to do

- Don't reach for a slide deck as a default response to every teaching request — this
  is one mode among several, not a replacement for plain conversational teaching.
- Don't pad a simple concept into an over-built interactive artifact when a two-sentence
  explanation would have done the job.
