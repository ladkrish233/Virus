# Curated books for /ai-engineer (DRAFT)

Status: draft from research ticket #37, verified 2026-10-12. Plan reference: `docs/plan-v4.md` section 8.5.

Rules for this file: titles, authors, publishers and years are facts. Every "why it fits" line is Virus's own wording. No PDFs, no download links, no copies of book text. Links go only to the publisher, the author, or an official free-reading page.

Levels refer to the CampusX roadmap (fetched live, never vendored): L0 Software Fundamentals, L1 LLM 101, L2 LLM APIs/Orchestration, L3 Prompt Engineering, L4 RAG, L5 AI Agents, L6 Context Engineering, L7 LLM Evals, L8 AI Security, L9 AI System Design, L10 LLMOps, L11 Managed AI Platforms, L12 Multimodal 101, L13 Fine-Tuning, L14 Projects, L15 Interview Prep.

Verification legend: **Verified** = read on the official page named in the Source column. **Partly** = some fields could not be read from an official page (noted). Prices change, so the file records only free vs paid, never a price.

## What CampusX himself mentions

- The roadmap repo (`campusx-official/ai-engineering-roadmap-2016`) lists exactly one book: Chip Huyen, *AI Engineering*, at L9. This is the only book tied to him in our evidence.
- The lecture evidence (`research/v4/lecture-and-roadmap-voice.md`, section 1.7) shows only a general "maine bahut books refer ki" remark while he built a curriculum, and no direct "read this book" recommendations. So everything below except *AI Engineering* is a Virus addition, not a CampusX recommendation. Do not present them as his picks.
- Resource order stays CampusX-style: his playlist or lesson first, then official docs if curious, then a book.

## Part 1: Foundations (L0-L3)

### Build a Large Language Model (From Scratch)
- Author: Sebastian Raschka. Publisher: Manning, September 2024 (368 pages).
- Serves: L1 (primary), L3 (background on how the model reads a prompt).
- Why it fits: you write a small GPT-style model yourself, so tokens, attention and next-word prediction stop being black boxes. Good for the learner who wants to understand before using, which matches the "pehle samjho, phir use karo" register.
- Cost: paid (Manning sells eBook/print, or via subscription).
- Source (Verified): https://www.manning.com/books/build-a-large-language-model-from-scratch

### Hands-On Large Language Models
- Authors: Jay Alammar and Maarten Grootendorst. Publisher: O'Reilly, 2024.
- Serves: L1, L2, L3 (the Prompt Engineering chapter), and L4 (the Semantic Search and RAG chapter).
- Why it fits: picture-first explanations with a runnable notebook per chapter, so it suits the whiteboard-plus-code flow of `/learn`. A gentler entry than building a model from scratch.
- Cost: paid book. The companion code repo is free (Apache-2.0).
- Source (Partly): author site https://www.llm-book.com/ and the book repo https://github.com/HandsOnLLM/Hands-On-Large-Language-Models (chapter list read there). The O'Reilly product page returned 403 to our fetcher, so the publisher name rests on the repo citation block.

## Part 2: Building with LLMs (L4-L7)

### AI Engineering: Building Applications with Foundation Models
- Author: Chip Huyen. Publisher: O'Reilly, 2025.
- Serves: L4 (RAG), L5 (agents), L6 (context), L7 (evals), and L9 (system design, where the CampusX roadmap itself places it).
- Why it fits: the closest thing to a full map of the job. It treats evaluation and application patterns as first-class topics, which lines up with L7 and is the book CampusX already points to.
- Cost: paid.
- Source (Partly): author page https://huyenchip.com/books/ and repo https://github.com/chiphuyen/aie-book. Publisher, year and topics read there. Open issue: the chapter-by-chapter table of contents was not read (it sits in the repo's ToC file), so the level-to-chapter mapping must be filled from that ToC before `/ai-engineer` cites chapter numbers. The repo's BibTeX ISBN looked copied from another entry, so no ISBN is recorded here.

### Building Applications with AI Agents
- Author: Michael Albada. Publisher: O'Reilly, 2025 (print listed September to October 2025 depending on retailer).
- Serves: L5 (primary), L6, L8 (agent safety angle).
- Why it fits: a second angle on agents that stays at design-pattern level (tool use, single vs multi-agent, moving a prototype to production) instead of tying to one framework.
- Cost: paid.
- Source (Partly): the O'Reilly Radar interview with the author, https://www.oreilly.com/radar/building-applications-with-ai-agents (title, author, topics). The O'Reilly product page returned 403, so exact publication month is unconfirmed.

## Part 3: Production (L8-L11)

### Designing Machine Learning Systems
- Author: Chip Huyen. Publisher: O'Reilly, 2022.
- Serves: L9 (system design), L10 (LLMOps: monitoring, retraining, data shift).
- Why it fits: it is pre-LLM, so it teaches the durable production habits (data, deployment, monitoring) that LLMOps still rests on. Read it for the thinking, then map to LLM specifics via *AI Engineering*.
- Cost: paid.
- Source (Partly): https://huyenchip.com/books/ and https://github.com/chiphuyen/dmls-book (publisher, year, topics). Chapter list sits in a linked ToC that was not read. The repo's BibTeX ISBN is inconsistent with its own Amazon link, so no ISBN recorded.

### LLMs in Production
- Authors: Christopher Brousseau and Matthew Sharp (foreword by Joe Reis). Publisher: Manning, December 2024.
- Serves: L10 (primary), L11 (deployment choices), L13 (training and LoRA overview).
- Why it fits: the hands-on deployment side: data prep, serving, running on small devices, agents and RAG in a production setting. Fills the gap between "demo works" and "service runs".
- Cost: paid (Manning, also via subscription).
- Source (Verified): https://manning.com/books/llms-in-production

### L8 AI Security: no verified book (gap)
No book with a verifiable official page was found for L8. Use the free OWASP Top 10 for LLM Applications 2025 instead (OWASP GenAI Security Project, CC BY-SA 4.0, free to read): https://genai.owasp.org/llm-top-10/ (Verified). This is a risk list, not a book, so label it "reference" in `/ai-engineer`, not "book".

## Part 4: Frontier and Career (L12-L15)

### Build a Reasoning Model (From Scratch)
- Author: Sebastian Raschka. Publisher: Manning, June 2026 (440 pages).
- Serves: L13 (primary: reinforcement learning with verifiable rewards, distillation), L7 (evaluating with verifiers), and L14 as a source of project ideas.
- Why it fits: the frontier topic of the moment, taught by building it in code, as a natural follow-on for a learner who did the Part 1 Raschka book. Not for beginners.
- Cost: paid (Manning).
- Source (Verified): https://www.manning.com/books/build-a-reasoning-model-from-scratch

### Generative AI System Design Interview
- Authors: Ali Aminian and Hao Sheng. Publisher: ByteByteGo (Alex Xu's series), 2024.
- Serves: L15 (primary), L12 (multimodal case studies such as image captioning and text-to-image), L9.
- Why it fits: it frames ten GenAI design problems in an interview-answer format, so it supports L15 prep and the "can you explain the design" skill.
- Cost: paid book. The ByteByteGo course page shows the introduction chapter readable without a visible paywall, but the page did not state terms, so do not promise free access.
- Source (Partly): announcement https://blog.bytebytego.com/p/our-new-book-generative-ai-system (title, Alex Xu thanking the two authors, November 2024, "available on Amazon") and course page https://bytebytego.com/courses/genai-system-design-interview/introduction-and-overview (chapter list). Authorship and the publisher name come from search-result summaries and the announcement; the post itself does not name a publisher line, so treat "ByteByteGo" as likely not certain.

Multimodal (L12) is also covered by the multimodal chapter of *Hands-On Large Language Models* (Part 1).

## Optional free references (not counted in the 1-2 per part)

These are free to read from their own official sites. Offer them as "free option" next to a paid pick.

- *Deep Learning*, Ian Goodfellow, Yoshua Bengio, Aaron Courville, MIT Press, 2016. Complete online version "will remain available online for free" per the site. Math and theory background for L1 and L13. https://www.deeplearningbook.org/ (Verified)
- *Speech and Language Processing*, Dan Jurafsky and James H. Martin, 3rd edition (draft, in progress), free online manuscript. Reads like a university text; covers language models, transformers and RAG. For L1 and L4. https://web.stanford.edu/~jurafsky/slp3/ (Verified. The page states no formal license, so link only.)
- *Dive into Deep Learning* (d2l.ai), free interactive book with code. For the learner who needs PyTorch-level deep learning before L13. https://d2l.ai/ (page opens and is free; authors, publisher and year not read, so only link it.)

## Watch-list (do not recommend yet)

- *Evals for AI Engineers* (Shreya Shankar and Hamel Husain, O'Reilly, listed for October 2026 in search results). Could not be confirmed on an official page. Their free 17-part email course on application-centric evals is real and free: https://ai.hamel.dev/eval-course (Verified). It would suit L7 alongside *AI Engineering*; re-check before shipping.

## Coverage summary

| Level | Primary pick | Alternate |
|---|---|---|
| L0 | none (software basics are a CampusX playlist topic, not a book) | |
| L1 | Build a Large Language Model | Hands-On LLMs, SLP3 (free) |
| L2, L3 | Hands-On LLMs | |
| L4 | AI Engineering | Hands-On LLMs ch. on RAG |
| L5 | Building Applications with AI Agents | AI Engineering |
| L6 | AI Engineering | |
| L7 | AI Engineering | Evals email course (free) |
| L8 | OWASP LLM Top 10 (reference, free) | |
| L9 | AI Engineering (CampusX's own pick) | Designing ML Systems |
| L10 | LLMs in Production | Designing ML Systems |
| L11 | LLMs in Production | |
| L12 | Hands-On LLMs (multimodal chapter) | GenAI System Design Interview |
| L13 | Build a Reasoning Model | Hands-On LLMs (fine-tuning chapters) |
| L14 | none (projects come from the roadmap's own project spec) | |
| L15 | Generative AI System Design Interview | |

Gaps to disclose to learners: L0, L8, L14 have no book pick.

## Bring-your-own-books: local mapping design

Command: `/ai-engineer books <folder>`. Goal: let `/learn` say "apni book ka chapter 6 dekho" for books the learner already owns.

Principles
- Local only. The folder is read in place on the learner's machine. Nothing is uploaded, no book text is sent anywhere except into the current local Claude session, and nothing is committed to any repo.
- Store a map, not the book. The output is a small index file, never a copy or excerpt-heavy summary.
- The learner owns the books. Virus does not fetch, find or suggest copies, and refuses any request to download one.

Flow
1. Scan the folder for supported files (PDF, EPUB, Markdown, TXT). List them and ask the learner to confirm which to include.
2. For each book, read only the table of contents (or headings) and record: title, author if visible, chapter number and title, page range if known.
3. Map each chapter to roadmap level(s) using the level and module names fetched live from the roadmap. Matching is by topic names, with the learner confirming low-confidence matches ("ye chapter L4 RAG mein lagta hai, sahi?").
4. Write the result to `./virus-ai-engineer/books-map.md` in the learner's project (alongside `PLAN.md` and the learner memory), with a header noting it is local and personal.
5. `/learn` and `/ai-engineer` read `books-map.md` and add a pointer line such as "Isi topic pe tumhari book ka chapter N", with title and chapter only, never quoted text.
6. Re-running the command updates the map; removing the file forgets everything.

Safeguards
- Add `virus-ai-engineer/books-map.md` to the suggested `.gitignore` lines Virus prints on first run, so it is never committed by accident.
- Pointers carry no book text. If the learner asks for an explanation, Virus teaches in its own words rather than reproducing the chapter.
- Curated entries (above) and bring-your-own entries are kept apart in output: "recommended" vs "tumhari books".
- The precedent is the hinglish-tech-mentor `/ingest-book` flow; Virus keeps only the chapter-to-level mapping part, not note generation (RAG over documents is out of scope for v4).

Open questions for the build ticket
- Max size or page count to read for TOC extraction on scanned PDFs without a text layer (fallback: ask the learner to paste the TOC).
- Whether to store a content hash of each file so a changed edition triggers re-mapping.

## Method note

Facts here were read on 2026-10-12 from publisher, author or official project pages with WebFetch. O'Reilly product pages blocked automated fetches (403), so O'Reilly titles lean on the authors' own pages and repos. Nothing was taken from any local PDF folder or any piracy site.
