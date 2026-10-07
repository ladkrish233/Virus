# GitHub Search (for `/project`)

How Virus finds and reads the repo the learner will rebuild from scratch. Read
`project-mode.md` first for the difficulty levels this search targets.

## Force Playwright for this — not a plain fetch

Searching GitHub and shortlisting candidates is multi-step, interactive work (search, open
several result pages, compare READMEs) — exactly the "heavier multi-step automation" case
`lecture-page-generation.md`'s doc-scraping policy and `docs-crawl.md` already set aside
for the plugin's bundled Playwright MCP server, not a single `WebFetch` call. Use Playwright
here specifically. If Playwright isn't connected in the session, fall back to whatever
browser tool is available (built-in browser pane, Claude in Chrome) — but say so plainly to
the learner rather than silently substituting a thinner search.

## Search and shortlist

1. Search GitHub for the topic, filtered toward repos whose **README scope and file/folder
   count** match the chosen difficulty level (see `project-mode.md`'s six-level ladder) —
   these are the real complexity signals, not star count (a popular repo isn't necessarily
   the right difficulty match, and a low-star repo can be a perfectly clean example).
2. Shortlist **2-3 candidates**. For each, read enough of the README to give the learner a
   one-line description (what it does, rough tech stack, approximate scope) plus its name
   and link — not the full source yet, that happens only after the learner picks one.
3. Present the shortlist and let the learner choose which one to rebuild.

## Reading depth — README and source, browsed not cloned

Once the learner has picked one: read its README fully, and browse its source **via
Playwright against GitHub's own web file tree** (the repo's file browser and individual
file views in the browser) — don't `git clone` it locally. Browsing is sufficient for
structural understanding (folder layout, how modules are organized, what the core
classes/functions are called and roughly do) and avoids leaving a third party's actual
source code sitting in the learner's own project directory, where it could be confused
with their own work or accidentally referenced later.

## The never-quote-or-paraphrase-real-code rule

This extends the original-work rule already in `teaching-framework.md`/`style-guide.md`
(never paste long verbatim transcript chunks) to code: reading the chosen repo's source is
for **your own understanding only**, so you can describe its architecture and feature set
accurately and guide the learner's build plan — never quote its actual lines, and never
paraphrase a function so closely that it's effectively the same code restated. Describe
*what* a piece does and *why*, in your own words, at the level of `PROJECT_PLAN.md`'s
architecture/iteration list — the learner reimplements from that description and your own
teaching, never from a transcription of the real source.

If the learner directly asks "can I just see the real code," explain this rule plainly:
the whole point of `/project` is rebuilding from understanding, not copying — and that
seeing the finished reference removes the thing they're here to practice.
