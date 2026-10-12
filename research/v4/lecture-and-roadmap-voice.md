# Virus v4 — CampusX voice evidence for `/learn` and `/ai-engineer`

Scope: new or refined evidence only. Anything already in `research/style-dna.md`, `style-dna-v3.md`,
`style-dna-v4-projects.md`, `references/style-guide.md` and `references/teaching-framework.md` is assumed and
not repeated unless it is refined or contradicted here.

## Method and caveats

- Sources: `transcripts/Generative AI using LangChain/001` and `002` (read in full), `003` (opening), plus the
  playlist-launch videos for Agentic AI/LangGraph, MCP ("Mini Playlist / trailer"), LLM Evaluation ("Stop Vibe
  Testing ... New Playlist"), Advanced RAG course launch (`RAG Playlist/010`), FastAPI playlist and course launch,
  "100 Days of Deep Learning — Course Announcement", and "Learn AI Coding the Right Way (No Vibe Coding)".
  All 302 transcript files across the listed folders (LangChain, RAG, LangGraph, MCP, Memory, LLM Evaluation,
  FastAPI, deep-learning, python-dsmp, feature-engineering, ai-coding-claude-code, python-projects,
  end-to-end-ml-projects) were flattened and grep-searched for the phrases below. `agentic-ai-secondary-reference/`
  (Krish Naik) was excluded.
- Counts are approximate and slightly inflated. The folders hold duplicates: RAG Playlist 002–006 copy LangChain
  012–017, the LangGraph folder copies the CRAG, Self-RAG and Memory videos, and python-projects copies a few DSMP
  files. Treat "N files" as about N minus 10–15%.
- Quotes are short Roman-Hinglish transliterations of Devanagari auto-captions, and all are 12 words or fewer.
  Locations are given as file plus a rough % position through the transcript.
- Confidence labels: **common** (many files or playlists), **occasional** (a handful, multiple playlists),
  **thin** (1–2 sources).
- Two registers matter here, as in v3. In the **YouTube register** he poses a question and then answers it
  himself. In the **live-class register** (LLM Evaluation sessions and DSMP) he asks, waits, and reads answers
  from chat. Interactive blocks map most naturally to the live-class register.

---

## 1. Roadmap voice (for `/ai-engineer`)

### 1.1 How he introduces a roadmap (common across all launch videos)

The opening beats are the same in every launch video: 001, 002, Agentic/LangGraph launch, MCP trailer, LLM Eval
launch, Claude Code launch, Advanced RAG launch, and Deep Learning announcement.

1. **This is not a hype announcement. He tells the backstory.** 001 @1%: "typical announcement video nahi hai"
   ("this isn't a typical announcement video"). He then describes three months of research and curriculum design.
   The LangGraph launch @2% describes "teen-chaar mahine" ("three-four months") of research and documentation
   study. The MCP trailer @2% says he likes to make videos only "kaafi research karke" ("after a lot of research").
2. **Explicit agenda listing what the video will cover.** LangGraph launch @5%: "poora curriculum bhi bataunga...
   prerequisites bhi bataunga" ("I'll share the full curriculum... and the prerequisites too"). The DL announcement
   @8% follows the same order: curriculum, prerequisites, features, extras.
3. **"Watch till the end" plus a value promise.** 001 @3%: "please make sure aap ye video end tak dekho"
   ("please watch this video to the end"). The phrase "end to end dekho" appears in about 21 files. "Trust me",
   usually in front of a value promise, appears in about 57 files. Example from 003 @4%: "trust me, jab ye
   discussion khatam hoga..." ("trust me, by the time this discussion ends...").
4. **Why learn this now, before any curriculum.** 001 @3%: "pehle thoda convince karna chahta hoon" ("first I want
   to convince you a little"). He then gives a definition, the history (AI ⊃ ML ⊃ DL ⊃ GenAI shown as a "famous
   diagram"), four impact areas, and a five-question test of "is this technology worth studying". The test asks
   whether it solves a real problem, whether it is useful daily, whether it moves the economy, whether it creates
   new jobs, and whether it is accessible. Each is compared against the internet and crypto. The LangGraph launch
   @8% gives "teen primary reasons: timing, demand, build-up" ("three primary reasons"). The Claude Code launch
   @6% says "kyunki this is the right time" ("because this is the right time").
5. **A central mental model that organises the whole field.** 001 @42–50% puts "foundation models" at the centre
   and splits all of GenAI into a **builder side** and a **user side**. He then turns it into a game (@51%): "koi
   bhi naya term... user wali side jayega ya builder wali?" ("any new term... does it go on the user side or the
   builder side?"). He plays it live on prompt engineering, RLHF, RAG, pre-training, quantization, agents and
   vector DBs, and notes that fine-tuning sits on both sides. **This classification game maps directly onto an
   interactive block.** (Confidence: thin as a game, since it is only in 001. Common as "give a mental model
   first": LLM Eval launch @84% says "koi bhi naya term suno to mentally place kar pao" ("hear any new term and be
   able to place it mentally").)

### 1.2 How he splits a curriculum into stages (common)

- **Numbered steps or modules, each with one line of purpose.** 001 builder side @60–71%: "ye hua step number one
  ... ye hai step number two". The builder steps run transformer architecture, then types of transformers, then
  pre-training (objectives, tokenization, training strategies, challenges, evaluation), then optimization
  (quantization, distillation, inference), then fine-tuning (task-specific, instruction, continual pre-training,
  RLHF, PEFT), then evaluation, then deployment ("last but very important step"). The user side @73–84% runs basic
  LLM apps (open vs closed source, API, Hugging Face, Ollama, LangChain), then improving responses (prompt
  engineering, RAG, fine-tuning), then agents, then LLMOps, then miscellaneous (multimodal, diffusion).
- **Playlists get 3 parts, courses get 6–10 modules.** 002 @51%: "teen parts mein divide kar rakha hai"
  ("divided into three parts"), namely fundamentals, then RAG, then agents. He adds that fundamentals is "sabse
  important part... nahi seekha to aage ki cheezein make sense nahi karengi" ("the most important part... skip it
  and the rest won't make sense"). The LangGraph launch @45–70% has 6 modules: foundations, LangGraph
  fundamentals, advanced LangGraph, AI agents (ReAct, reflection, self-ask, planning, multi-agent), agentic RAG,
  production. Advanced RAG has 10 modules. FastAPI has 3 parts, then the course has modules. The MCP mini-playlist
  is a three-video "Why / What / How" trilogy (MCP trailer @4%).
- **Modules, not topics, because the field moves.** LangGraph launch @42%: "ye curriculum final nahi hai" ("this
  curriculum isn't final"), and @45%: "exact topic by topic nahi bataunga, modules bataunga" ("I won't list exact
  topics, I'll give modules"). (Occasional.)
- **Order is justified, not just stated.** 002 @41–51% explains why LangChain comes first: "baaki cheezon ka bhi
  flavour le sakte ho" ("you also get a flavour of everything else"). The plan is a holistic view first, then
  depth: "ek-ek karke... separate playlists mein" ("one by one... in separate playlists"). The DL announcement
  @22% says to do ANN well first so later networks are less trouble. (Common.)
- **"Common vs uncommon but important" as level-up framing.** LLM Eval launch @10%: "bahut hi common cheezein
  hain... jo har banda padhega" ("these are very common things... everyone will study them"). By contrast, evals
  are "utni common nahi, bahut important" ("not that common, but very important") and give an "edge over
  competition" (@16%, @96%). (Thin to occasional. Useful for flagging advanced levels.)

### 1.3 Who each stage is for (occasional, but explicit when it appears)

- 001 @84–89%: the builder side is research-scientist or data-scientist work. On the user side, "thoda bhi
  software development aata hai to 80–85% kaam kar sakta hai" ("if you know a little software development you can
  do 80–85% of the work"). On the AI engineer: "dono fields pe parallelly kaam karna padega" ("you'll have to work
  on both fields in parallel"). Someone with both "hamesha better salary demand kar payega" ("can always demand a
  better salary").
- LLM Eval launch @0–2% defines an AI engineer as "someone who builds applications... on top of foundation
  models". CampusX has been "targeting" this role for 1.5 years. **This is the closest existing CampusX framing
  for an `/ai-engineer` command.**
- Advanced RAG launch @13–20% names two audiences. The first is students facing GenAI interviews soon, since a
  "major chunk of questions" are on RAG. The second is professionals tasked to build a RAG bot.
- Claude Code launch @82–86% names its target audience as software developers, data professionals, and graduating
  students. It adds: "pehle coding ke fundamentals seekho" ("first learn coding fundamentals"), and only then the
  tool.

### 1.4 "Where should I start / I already know X" (occasional)

- **He locates the learner on the map before starting.** 002 @15%: "aap locate kar pa rahe ho... starting point
  kya hai" ("can you locate... where our starting point is?"). He then shows the full user-side curriculum and
  highlights the slice this playlist covers.
- **Prerequisites are a gate, and each one comes with a fix.** LangGraph launch @76–84% says "for a change...
  basic Python nahi chalega" ("for a change... basic Python won't do"). The learner needs intermediate Python:
  OOP, typing, pydantic, asyncio. Without LangChain the playlist goes "sar ke upar se" ("over your head"), so "highly
  recommend... mera LangChain playlist" ("I highly recommend my LangChain playlist"), about 18 longish videos. The
  Claude Code launch @89–91% asks for Python/Flask, HTML/CSS and Git/GitHub and says to take "chhota sa crash course"
  ("a short crash course") first. Advanced RAG @34–40% wants Python and GenAI basics, with LangChain/LangGraph as a
  plus, and points to "hamara YouTube playlist" ("our YouTube playlist") if those are missing.
- **"I already know this" does not mean "skip".** CRAG video @10%: "please isko skip mat karna" ("please don't skip
  this"), and "even though... RAG ka concept already aata hai" ("even if you already know RAG"). The reason given is
  that the new code builds on this code. The opposite case is flagged too, as in YouTube Chatbot @68%: "this is
  truly optional".
- **"Not everything is needed" is said about depth, not order.** DSMP Session 15 @82%: "DSA in depth nahi chahiye"
  ("you don't need DSA in depth"). Arrays and strings done well are enough, because "80% companies usse zyada nahi
  poochti" ("80% of companies don't ask beyond that"). (Thin.)

### 1.5 Time expectations (common in launch videos, always hedged)

- 002 @88–93%: 17 videos at 2 per week comes to about 8 weeks, "roughly two months". "Isse fast nahi ho payega"
  ("it can't go faster than this"), and "aapko bhi practice ka time milega" ("you'll also get time to practise").
- LangGraph launch @87–93%: 35–50 videos, 3 per week, "baaki calculation aap kar lo" ("you can do the rest of the
  calculation yourself").
- 001 @95–98%: an exact estimate is "possible nahi" ("not possible"). Roughly "poora saal" ("the whole year"). Also
  "master karne mein at least ek saal to kisi ko bhi lagega" ("mastering it will take anyone at least a year").
- Claude Code launch @96%: 15–20 videos in about 1–1.5 months. DL announcement @50%: "3 se 4 mahine to minimum"
  ("three to four months at minimum"). Advanced RAG @75%: "45 hours... aapko complete karne mein time lagega"
  ("45 hours... it will take you time to finish").

### 1.6 Motivation and honesty (common)

- **Honest about his own limits.** 001 @94%: "main abhi khud 100% master nahi kar paya" ("I haven't fully mastered
  this myself yet"). He gives this as the reason for having no paid GenAI course. 001 @35–37% says he was "thoda
  darr" ("a bit scared") of the pace: "yaar kya padhe, kahan se padhe" ("what do I study, where do I start"). MCP
  trailer @13%: "mere liye bhi incredibly difficult to keep up" ("it's incredibly difficult for me too to keep
  up").
- **Calls out hype and FOMO while still motivating.** 001 @38–40%: some people create "FOMO ka environment"
  ("an atmosphere of FOMO"). 001 @35%: "ye ek bubble hai?" ("is this a bubble?"). The LangGraph launch @13%
  acknowledges hype but calls it "valid bhi hai" ("actually justified").
- **Fear of losing jobs is handled head-on.** Claude Code launch @77–82%: "kya sir job chali jayegi?" ("sir, will
  I lose my job?"). His answer is the ghost-movie analogy: fear is of the unknown, and it shrinks once you do the
  thing yourself. 001 @30% calls the jobs question "thoda controversial" ("a bit controversial"), keeps it
  "strictly technical", and says a new "AI engineer" role is emerging. He checks job sites for it.
- **Job-market hooks are concrete.** Interview certainty, LLM Eval launch @14%: "ek question hamesha poocha jayega"
  ("one question will always be asked"), namely how you evaluate your RAG or agent app. The resume line, Claude
  Code launch @75%: "resume mein is baat ko likh pao" ("so you can put this on your resume"). The LangGraph
  launch's last module is a project "resume mein add kar pao" ("you can add to your resume").
- **Difficulty and boringness are disclosed up front.** LLM Benchmarks @22%: "highly theoretical... it might be
  boring" is given as an explicit "disclaimer". Advanced RAG @3%: production RAG is "incredibly difficult". There
  is a "difficult/मुश्किल" family across about 160 files.
- **The teacher should inspire as well as teach** (thin, MCP trailer @6%): "teacher ki responsibility sirf padhana
  nahi, inspire karna bhi" ("a teacher's job isn't only to teach, but also to inspire"). That is why the trilogy
  opens with a demo project.

### 1.7 Pointing to resources (common for his own playlists, thin for books)

- Mostly **his own playlists** as prerequisites or follow-ups: 002, LangGraph launch, Advanced RAG, DL
  announcement. FastAPI @2% says "100 topics mein se shayad 50 hamare channel pe" ("of 100 topics, maybe 50 are on
  our channel").
- **Newsletters** to stay current (MCP trailer @13–16%): he reads "ek newsletter padh ke sota hoon" ("I read one
  newsletter before sleeping").
- **Official blogs and docs "if curious"**: LangChain vs LangGraph @20% says "Anthropic ke blog pe jao" ("go to
  Anthropic's blog"). DSMP Session 10 @22% says that if you're curious, check the docs. Books show up mainly as "maine
  bahut books refer ki" ("I referred to many books") while building a curriculum (DL announcement @13%). There are
  almost no direct "read this book" recommendations (thin).
- He **invites feedback on the curriculum** in comments: 001 @99%, LangGraph @75%, DL announcement @47%.

### 1.8 FAQ close (common in launch videos)

Every launch video ends with an anticipated-questions block before the sign-off. The usual questions cover the
number of videos, upload frequency, why there's no paid course, timeline, price and validity, and "doubt clearance
milega?" ("will doubts be cleared?"). Examples: 001 @92–98%, LangGraph @87–93%, Advanced RAG @68–92%, FastAPI course
@74–94%. Phrasing from LangGraph @87%: "bahut log pooch lete hain isliye bata raha hoon" ("lots of people ask, so I'm
telling you").

---

## 2. The four "My Focus" points: where and how he explains them

Notes PDF (`file.pdf.txt`, "0. Announcement Page 4") lists: 1. Updated information, 2. Clarity, 3. Conceptual
understanding, 4. The 80 percent approach. The matching spoken explanation is in **video 002** (`002 - Generative AI
using LangChain _ GENAI for Beginners`), @72–88%, introduced with "mera focus kya rehne wala hai" ("what my focus
will be"). Video 003 does not repeat them.

1. **Updated information (@72–77%).** He notes that LangChain has 0.1/0.2/0.3 and that "teeno versions ek dusre se
   kaafi alag" ("all three versions are quite different from each other"). The whole playlist is on the latest
   version, while "point two aur point one ke baare mein bhi guide karta jaunga" ("I'll guide you on 0.2 and 0.1 too
   along the way"). Echo in Advanced RAG @68%: obsolete topics were "eliminate kar diya" ("removed").
2. **Clarity (@77–83%).** Other content lets you "code copy kar lo, application chal jayegi" ("copy the code and the
   app will run"), "bat conceptual clarity nahi rehti" ("but you're left without conceptual clarity") about what
   happens "behind the scenes". The cost he accepts is longer videos: "har video 30–40 minutes ka" ("each video will
   be 30–40 minutes").
3. **Conceptual understanding (@83–86%).** Teach the framework's concepts (runnables, chains) "taaki kal ko 0.4 bhi
   aa jaye to pareshani na ho" ("so that even if 0.4 comes out tomorrow, you won't struggle"). The same idea is the
   LangGraph launch's vision #3 (@36–39%): even if LangGraph is replaced, "itna conceptual depth ho" ("you'll have
   enough conceptual depth") to pick up the new framework easily.
4. **The 80 percent approach (@86–88%).** "Around 80% of the LangChain cover karenge" ("we'll cover around 80% of
   LangChain"). "Poora 100% cover nahi kar raha... poora 100% useful hai nahi" ("not covering all 100%... not all of
   it is useful"). So "jo 80% sabse useful part hai" ("the 80% that is most useful") is taught, and "future mein...
   important ho gayi to playlist update karunga" ("if something becomes important in future, I'll update the
   playlist"). He restates it: "cover the most important 80% of LangChain".
   - Related echo (thin): DSMP Session 15 @82% says 80% of companies don't ask beyond arrays and strings, so don't go
     deep on DSA.
   - **Confidence: thin as a named principle**, since it is spoken once in 002 and written in the notes. The
     *behaviour* is common: he repeatedly prunes, defers, or labels content "optional", and says "har cheez yahan
     padh ke nahi bata raha" ("I'm not reading out everything here"), as in Custom Subagents @72% and Docker @21%.

---

## 3. Audience-interaction habits that map to interactive blocks

| Habit | Typical phrasing (Roman) | Where / how often | Maps to |
|---|---|---|---|
| **Pause and think, then he answers** | "ek baar video pause karke socho" ("pause the video once and think"); "pause karke batao... The answer is..." ("pause and tell me... the answer is...") | About 30 unique files across LangChain, RAG, LangGraph, CRAG/Self-RAG and LLM Eval. Example: Text Splitters @82% asks "kitne chunks banaoge?" ("how many chunks would you make?"). CRAG @53% asks the learner to label a doc correct/incorrect/ambiguous and then says "The answer is correct" ("the answer is: correct"). Chatbot @56% asks why the bot "Ghajini ka Aamir Khan ban gaya" ("turned into Aamir Khan from Ghajini", i.e. lost its memory). **Common.** | Predict / MCQ block with a reveal |
| **Pause to read a dense artefact** | "video pause karke padhna zaroor" ("pause the video and do read this") | Prompts in Output Parsers @91%, Self-RAG @47/72%, Long-term memory @46%, CRAG @46%. **Common.** | Expandable "read this prompt/code" panel |
| **Think and tell (live)** | "soch ke batao" ("think and tell me"); "jaldi se soch ke batao" ("quickly think and tell me"); "I will wait for your answers" | LLM Eval live sessions (about 10 files, often several times per session) and DSMP (about 12 files). Retriever-testing @36% says "I really want you to think". **Common in the live register.** | Free-text answer box, then model answer |
| **Predict the output of code** | "output kya aayega?" ("what will the output be?"); "chat mein likh kar batana" ("write it in the chat") | DSMP OOP Part 3, Decorators, File Handling, Session 1 and Strings (12 files, many times each). **Common in DSMP, rare on YouTube.** | Code-stepper "predict next output" |
| **Write your answer in comments** | "video pause karna, answer nikalna, comment mein" ("pause the video, work out the answer, put it in the comments") | DL: Comparing CNN vs ANN @61%, AdaGrad @64%. **Occasional.** | Optional reflection prompt |
| **Explain it to yourself** | "ek baar khud ko samjha dena" ("explain it to yourself once"); "khud ko nahi samjha pa rahe to samajh nahi aaya" ("if you can't explain it to yourself, you haven't understood it") | DSMP Decorators @55%; Iterators @28% ("pause karke khud ko samjha lo", i.e. "pause and explain it to yourself"). MCP Architecture @99%: "har component explain kar paoge kisi ke bhi saamne" ("you'll be able to explain every component to anyone"). Offline evals @6%: "koi pooch le... would you be able to answer?" ("if someone asks you... would you be able to answer?"). **Occasional, cross-register.** | **"Explain it back" block**, a strong direct match |
| **Homework** | "ek chhota sa homework deta hoon. Aapko kya karna hai?" ("I'll give you a small homework. What do you need to do?") | Vector Stores @98% (redo with FAISS/Pinecone), Sequential Workflows @97% (add a node and a score), Resume-chat @93% (improve the UI), DSMP OOP 2 (line-intersect method), Advanced NumPy (look up categorical cross-entropy), Calculator GUI (make it scientific, "ek hafte ka time", i.e. "take a week"), WhatsApp (handle the other date format). About 10 unique files. **Occasional.** The shape is always *extend or re-implement what was just built*, never recall questions. | "Try it yourself" extension task |
| **Practise by hand** | "ye saara code ek baar haath se khud se likho" ("write all this code once by hand, yourself"); "ye practice ki cheez hai" ("this is something you learn by practising") | FastAPI PUT/DELETE @97%, Backprop Part 2 @99%. DSMP Strings @31–33% says to run it in Python Tutor. **Occasional.** | Practice block with hints |
| **Hints over solutions** | "poora solution mat khojo, hints khojo" ("don't search for the full solution, search for hints"); "mat dekhna, khud se try karna" ("don't look, try it yourself first") | DSMP Strings @98%, OOP 3 @4% (assignment solutions). **Thin, but on point.** | Progressive-hint button |
| **Doubt check-ins** | "let me know agar yahan tak koi doubt hai" ("let me know if you have any doubt up to here"); "aap log yahan tak clear hai?" ("is everyone clear up to here?") | "let me know" appears in 16 of 26 DSMP files. LLM Eval Selecting-LLM @73% says "is point pe koi problem hai?" ("any problem at this point?"). **Common in the live register.** | Checkpoint "clear / not clear" toggle |
| **Re-watch suggestion** | "complex parts mein phir se jaake video dekhoge" ("if you go back and rewatch the complex parts"); "pichla 5–10 minute repeat" ("repeat the last 5–10 minutes") | Perceptron Loss @98%, DSMP OOP 1 @77%. **Occasional.** | "Revisit section" link on a wrong answer |
| **Make notes** | "if possible notes banao" ("if possible, make notes") | LangGraph Core Concepts @2%. Docker @21% says notes are provided "revision ke liye" ("for revision"). **Thin.** | Flashcards / notes export |
| **Quizzes by name** | None found. "Quiz" appears only as an LLM-generation example ("notes and quiz" chain in Chains @43–54%; 003 "true/false questions" for the PDF-chat idea) | **Not observed as a teaching device.** | Treat quizzes as a v4 addition. Voice them as "pause and think" / "soch ke batao", not "Quiz time!" |

Frequency summary: pause-and-think shows up roughly 0–3 times per lecture in YouTube videos and is absent from many.
"Soch ke batao" or "predict output" shows up several times per live session. Homework appears in roughly one in 25–30
lectures.

---

## 4. Lecture macro-structure and timing

Positions come from searching for the code-switch markers "chalo code", "Google Colab", "VS Code" and "practical"
across 50 lectures that have such markers. **Medium confidence.** These are signal positions, not timed segments.

- **Recap and agenda: about 0–5%.** He often adds a value promise ("trust me, aaj ka video..." — "trust me, today's
  video...") and a "watch to the end" ask. He even explains why he recaps (LLM Model Evals @0%): "har session ke
  pehle recap kyun... as a teacher main flow mein aa jata hoon" ("why recap before every session... as a teacher it
  gets me into the flow"). It also tells him how to connect today's topic to earlier ones. Confidence: common.
- **Plan of action at about 2–15% when the video is long.** RAG-using-LangGraph @11% says "poore video ko teen
  parts mein divide kar raha hoon" ("I'm splitting the whole video into three parts") and calls it "That's the plan
  of action". Long-term memory @15% says "coding wala part do parts mein" ("the coding part comes in two parts").
  Chains @49% says "do parts mein develop karenge" ("we'll build it in two parts").
- **Theory, then code.** In concept-plus-code lectures the first code marker falls at roughly 15–50%: Tool Calling
  14%, Structured Output 18%, Persistence 24%, Self-RAG 43%, RAG-in-LangGraph 49%. So the usual split is about
  20–45% theory, 50–75% code and demo, with recap and close at about 5% each. Lectures whose theory was covered in a
  previous video open almost straight into code (Sequential Workflows 3%, Advanced-RAG CRAG 9%). Pure-concept
  videos have little or no code (Components 76% is a code peek, Core Concepts, LLM Model Evals). "Pehle thodi
  theory, phir code" ("first a little theory, then code") is the pattern, but the literal phrase "pehle theory" was
  not found. He signposts with "ab baat karte hain..." ("now let's talk about...", about 50 files), "chalo aage badhte
  hain" ("let's move ahead", about 30 files, 112 occurrences), "move on" (about 35), and "ab main aapko dikhata hoon"
  ("now I'll show you").
- **He apologises for theory-heaviness.** MCP trailer @54%: "shayad mere upar gussa bhi aa raha hoga... bas theory
  theory" ("you might even be annoyed with me... only theory, theory"). LLM Eval Intro @32%: "kaafi theory padhi...
  don't worry... practical example ke through revisit" ("we've done a lot of theory... don't worry... we'll revisit it
  through a practical example").
- **Close (about 95–100%).** He summarises in why-then-what order (LLM Eval Intro @97%). He says "promise kiya tha...
  by the end" ("I'd promised... that by the end"; LangChain vs LangGraph @96%). Sometimes there is an FAQ that doubles
  as revision (same video @93%: "kuch questions ka answer karke... ye kind of revision hoga", i.e. "by answering a few
  questions... this will be a kind of revision"). Then the like/subscribe sign-off.
- **"Next video mein" previews (common, about 110 files).** These are specific and tied to an open loop. Chatbot
  @97%: threads and checkpointers are "abhi clear nahi hoga... agla video totally persistence pe" ("won't be clear
  yet... the next video is entirely on persistence"). FastAPI @97%: "next video mein... model serve... wahan se
  interesting part shuru hoga" ("in the next video... we'll serve a model... that's where the interesting part
  starts").
- **Long or multi-part videos (occasional).** LangChain vs LangGraph @4%: "shayad usse bhi thoda zyada lamba ho"
  ("this might be even a bit longer than that"). MCP Architecture @1% splits "What" into three parts because "video
  bahut bada ho jayega" ("the video would get too big"). 001 @90–92% prefers "chhote-chhote playlist" ("small
  playlists") over one big one, because a big one demands too much commitment.

---

## 5. Phrase bank (Roman Hinglish, short)

**Introducing a diagram or visual (common, about 48 files with "diagram"; "screen pe/par" about 120 files):**
- "ek simple diagram ke through main aapko samjhata hoon" ("let me explain through a simple diagram")
- "agar aap ye flow diagram dekho..." ("if you look at this flow diagram...")
- "is diagram par focus karo" ("focus on this diagram")
- "dimaag mein ek visual picture ban jayega" ("a visual picture will form in your mind"; Agent video @65%)
- "ye famous diagram aapne... dekha hoga" ("you'll have seen this famous diagram"; 001 @9%)
- "abhi aapke screen pe hai" ("it's on your screen right now")

**Encouraging and deferring (common, "don't worry" in about 30 files, "tension mat lo" / "tension lene ki zarurat
nahi" in about 15 files):**
- "agar abhi samajh nahi aaya to don't worry... example ke through samjhata hoon" ("if it isn't clear yet, don't
  worry... I'll explain with an example"; Runnables Part 2 @15%, Agent @65%)
- "thoda daravna lag raha hoga... but don't worry, agla video..." ("this might look a bit scary... but don't worry,
  the next video..."; Chatbot @97%)
- "bahut difficult lag raha hai? Don't worry, chhod do, aage detail mein" ("finding it very difficult? Don't worry,
  leave it, we'll go into detail later"; LC vs LG @93%)
- "tension lene ki zarurat nahi" ("no need to worry"; Components @53%)
- "bahut simple hai" ("it's very simple"; about 198 files, the single most frequent reassurance)
- "trust me, it's all very easy"

**Importance markers:** "bahut important hai" (about 95 files), "sabse important" (about 55), "very important topic"
(about 34), "super important" (about 6), "dhyaan se suno, bahut important hai, agla 5 minute" ("listen carefully,
this is very important, the next 5 minutes"; DSMP OOP 1 @61%).

**Honesty about difficulty:** "ye thoda tricky hai" ("this is a bit tricky"; about 23 files), "it might be boring...
disclaimer de raha hoon" ("it might be boring... I'm giving a disclaimer"; Benchmarks @22%), "incredibly difficult"
(Advanced RAG), "mere liye bhi difficult hai" ("it's difficult for me too"; MCP trailer), "main 100% master nahi kar
paya" ("I haven't fully mastered it"; 001).

**Revision:** "quick recap de deta hoon" ("let me give you a quick recap"; about 15 files), "ek baar quick revision"
("one quick revision"; Core Concepts @2%), "complex parts phir se dekhna" ("rewatch the complex parts"), "notes banao"
("make notes"), "khud ko samjha dena" ("explain it to yourself"), "ye kind of revision hoga" ("this will be a kind of
revision"; end-of-video FAQ).

---

## 6. Contradictions and refinements to the existing style-guide and teaching-framework

1. **The "not a real back-and-forth" rule needs a register split.** The style guide says the rhetorical question is
   narrated and to "don't wait for the user". That holds for the YouTube register. In the live register he really
   asks and waits: "I will wait for your answers", "type your answer in the chat", "soch ke batao" ("think and tell
   me"). Even on YouTube he asks for a pause before he reveals. **v4 refinement:** chat prose keeps the self-answer
   style. Interactive blocks may genuinely wait for input, framed as "pause karke socho" ("pause and think"), with the
   answer revealed afterwards in "The answer is..." form.
2. **Homework shape, refined.** The style guide is right that homework is occasional. The evidence adds that it is
   always an *extend or re-implement* task tied to what was just built, never recall questions.
3. **Revision is stronger than "thin".** Openings recap and he explains why. Some closings run an FAQ "as revision".
   He suggests rewatching complex parts, making notes, and explaining it to yourself. Promote "end-of-topic
   self-check / revision" from thin to **occasional**.
4. **Definition-first is allowed if he immediately undercuts it.** The style guide says "Never open with a formal
   definition before the motivation lands". In 001 @3%, 002 @20%, 003 @2% and LLM Eval launch @0% he reads a
   one-line definition early. In 003 he follows it straight away with "is single sentence se importance samajh nahi
   aayegi" ("this single sentence won't show you why it matters"), then "pehle why" ("why comes first"). **Refinement:**
   a one-line anchor definition may come first, but the why must follow immediately, before any mechanism.
5. **Two new reassurance tics belong in the tic list.** "Trust me" (about 57 files, before a promise of value or
   ease) and the "don't worry / tension mat lo, aage samjhaunga" deferral ("don't worry, I'll explain it later";
   about 40 files) are common and missing from the style guide.
6. **Honest disclaimers are a voice trait.** Examples are "it might be boring", "curriculum final nahi" ("the
   curriculum isn't final"), "exact estimate possible nahi" ("an exact estimate isn't possible") and "I haven't
   mastered it". They should be an explicit rule, not just implied by the anti-condescension stance.
7. **The code-after-theory rule is confirmed with a nuance.** When the theory was taught in an earlier lecture, he
   opens directly into code after a quick recap.
8. **Quizzes, flashcards and steppers are not CampusX devices by name.** Nothing contradicts adding them, but voice
   them with his phrases ("pause karke socho" — "pause and think", "output kya aayega?" — "what will the output be?",
   "khud ko samjha do" — "explain it to yourself"), not with gamified tutor language.

---

## (a) Rules for v4 `/learn` lesson pages and interactive blocks

1. **Page opens like a lecture.** Use a one-line recap of the previous lesson if there is one, then the agenda: "Aaj
   hum X dekhenge... aur end tak aapke paas Y hoga" ("Today we'll look at X... and by the end you'll have Y"). Add at
   most one value promise ("trust me..."). No channel intro.
2. **A plan-of-action strip for long lessons.** If the lesson has more than about 3 sections, state the parts up
   front: "is lesson ko teen parts mein divide kar rahe hain" ("we're splitting this lesson into three parts"). Show
   theory before code as the visible order.
3. **Why before mechanism. A definition may anchor first.** A one-line definition is allowed, but the next block must
   say why it is needed (situation 1/2/3) before any mechanism or code.
4. **"Pause & socho" predict blocks, 1–3 per lesson.** Ask before revealing, with the prompt "Ek baar ruk ke socho:
   ...?" ("stop for a moment and think: ...?"). After the attempt, the reveal starts "The answer is..." and gives the
   *why*. Never write "Quiz time!" or "Great job!".
5. **Code stepper = "output kya aayega?"** ("what will the output be?"). Each step asks for a prediction before
   showing the output. When the output is an error, the stepper shows the error text, says "error aa raha hai, dekho
   kyun" ("there's an error, let's see why"), traces the root cause, and only then fixes it.
6. **The "Khud ko samjhao" (explain-it-back) block closes each concept.** Prompt: "Kal koi aapse pooche ki X kya
   hai, to kya aap 3–4 lines mein samjha paoge? Likh ke dekho." ("If someone asked you tomorrow what X is, could you
   explain it in 3–4 lines? Try writing it.") Feedback names the missing link and points back to the exact section.
   Avoid generic praise.
7. **Hints before solutions.** Practice blocks offer progressive hints first ("poora solution mat dekho, pehle hint
   lo" — "don't look at the full solution, take a hint first"). The solution unlocks last.
8. **Flashcards are framed as revision.** "Quick revision" or "notes" cards at the end. Card fronts are
   learner-voice questions ("RAG mein retriever ka kaam kya hai?" — "what does the retriever do in RAG?"). Card backs
   are 1–2 plain lines plus one example.
9. **Deferral notes instead of overload.** When a block touches something taught later, add a "Don't worry, ye
   aage detail mein aayega" note ("don't worry, this comes up in detail later") naming the lesson. Content outside
   the core is marked "optional".
10. **The 80% rule for scope.** Teach the most useful 80%. List what was intentionally left out in one line: "ye
    abhi skip kar rahe hain, zarurat padi to aage" ("we're skipping this for now, we'll get to it later if needed").
    Don't try to be exhaustive.
11. **Honest difficulty labels.** Tag hard or dry sections honestly ("ye thoda tricky hai", "thoda theoretical
    hai, bear with me"). Pair each tag with reassurance ("bahut simple hai jab example dekhoge" — "it's very simple
    once you see the example").
12. **Checkpoint check-ins.** Mid-page, add a "Yahan tak clear hai?" toggle ("clear up to here?"). Choosing "not
    clear" offers a re-explanation with a *new* analogy, following teaching-framework doubt-handling, and a "revisit
    section" link.
13. **"Try it yourself" homework = extend, don't recall.** Close with one small extension of what was built: "isko
    FAISS ke saath redo karo" ("redo this with FAISS"), "ek node aur add karo" ("add one more node").
14. **Close the loop with a specific preview.** Finish with a short recap in why-then-what-then-how order, then
    "agle lesson mein..." ("in the next lesson...") naming the open loop it resolves. No like/subscribe.
15. **Seasoning, not scaffolding.** Each page uses only a few tics (theek hai, dekho, maan lo, trust me, don't
    worry). Interactive prompts carry the voice. Headings stay plain.

## (b) Rules for `/ai-engineer` roadmap presentation, plus a sample script

1. **Open with the why and a mental model, not the list.** First say why the AI-engineer role matters: an emerging
   role, interview demand, resume value. Then give one organising model before showing the 16 levels. CampusX's
   model is "foundation model at the centre: user side vs builder side, and the AI engineer needs both".
2. **Group the 16 levels into 3–4 named parts.** CampusX never presents 16 flat items; it uses 3 parts or 6–10
   modules. Present Part 1 Fundamentals, Part 2 Building LLM apps, Part 3 Improving and agents, Part 4
   Production/LLMOps (plus Builder side as needed). Give each level one line of purpose, numbered "Level 1... Level
   2...".
3. **Every level card states who it's for, its prerequisites with a fix, and an honest time estimate.** Prereqs
   read as a gate with a remedy ("ye nahi aata to pehle Level N kar lo, warna sar ke upar se jayega" — "if you don't
   know this, do Level N first, otherwise it'll go over your head"). Time is hedged ("roughly", "aapki speed pe
   depend" — "depends on your pace"). The whole path is honest: "master karne mein saal bhar lagega" ("mastering it
   will take about a year").
4. **Locate the learner before they pick.** Ask what they already know, then say "aap yahan ho" ("you're here") on
   the map. If they pick a level beyond their prerequisites, warn them, but let them proceed. If they say "I already
   know X", follow the CRAG rule: "skip mat karo agar aage ka code isi pe build hoga" ("don't skip it if the later
   code builds on this"). Otherwise mark it as skippable.
5. **Justify the order.** One line on why Level 1 comes before Level 2, e.g. "pehle holistic view, phir depth"
   ("first the holistic view, then depth"; the LangChain-first logic).
6. **The topic picker shows modules, plus a "kis side mein aayega?" game** ("which side does it go on?"). Within a
   level, list 4–8 topics with one-line purposes. Mark core vs optional. Include "common vs uncommon but important"
   flags for edge topics such as evals or LLMOps.
7. **Honesty and anti-FOMO line.** Include one line that the field changes fast and the roadmap isn't final, plus
   one line against FOMO and fear ("darr unknown ka hota hai, khud karke dekho" — "the fear is of the unknown, try
   it yourself"). Never hype.
8. **Point to resources the CampusX way.** Name a prerequisite playlist or lesson first, official docs or blogs "if
   curious", and newsletters for staying current. Don't fabricate book lists.
9. **End the roadmap screen with a 3–5 item FAQ, then a close.** Cover how long it takes, where to start if you're a
   fresher, whether you need the builder side, and whether this is enough for a job. Then: "feedback ho to batao"
   ("tell me if you have feedback").
10. **After a topic is picked, hand off to `/learn`.** Open with the recap-and-agenda lecture style, starting from
    the level's "why".

### Sample Hinglish script (`/ai-engineer` entry, Roman Hinglish, original wording)

> Chalo guys, aaj baat karte hain ek aise role ki jo pichhle ek-do saal mein sabse tezi se ubhra hai: **AI
> Engineer**. Simple definition: AI engineer wo banda hai jo foundation models (basically LLMs) ke upar
> applications aur products banata hai. Ab definition se importance samajh nahi aayegi, to pehle *why*. Aaj ki date
> mein GenAI interviews mein ek question almost pakka poocha jaata hai: "aap apne RAG app ko evaluate kaise karte
> ho?" Aur aise kaafi questions hain jo sirf wo log answer kar paate hain jinhone ye poora raasta step by step
> chala hai.
>
> Ek disclaimer pehle de deta hoon. Ye field bahut tezi se badal rahi hai, to ye roadmap final nahi hai. Kuch cheezein
> aage add hongi, kuch purani ho jayengi. Aur honestly, isko achhe se master karne mein saal bhar to lagega hi. Darne
> ki baat nahi hai, bas dhyaan se, order mein chalna hai.
>
> Ab mental model. Center mein hai **foundation model**. Iske around do kaam hote hain: ya to aap model **use** karke
> apps banate ho (user side), ya model **banate** ho (builder side). AI engineer ka main kaam user side hai, but
> builder side ka thoda idea ho to aap better decisions loge, aur trust me, better salary bhi.
>
> Is roadmap ko maine 16 levels mein toda hai, aur un 16 ko 4 parts mein:
> **Part 1: Fundamentals** (Levels 1–4): Python jo kaam aaye, ML/DL ka basic intuition, LLMs kaam kaise karte hain.
> **Part 2: LLM apps banana** (Levels 5–9): APIs, LangChain, prompts, structured output, RAG.
> **Part 3: Improve karna aur agents** (Levels 10–13): advanced RAG, tools, LangGraph agents, memory, MCP.
> **Part 4: Production** (Levels 14–16): evals, LLMOps/observability, deploy (FastAPI, Docker).
>
> Order kyun ye hai? Pehle holistic view, phir depth. Agar Level 6 skip karke seedha Level 12 pe gaye, to wo
> sar ke upar se jayega, aur wahan ka saara code yahin ke concepts pe build hota hai.
>
> Ek kaam karo: pehle mujhe batao aap abhi kahan ho. Python aati hai? Kabhi LLM API call ki hai? Uske hisaab se
> main aapko map pe dikhata hoon, "aap yahan ho", aur wahan se start karte hain. Level choose karo; phir main us
> level ke topics dikhaunga, kaunse core hain aur kaunse optional, har ek ki ek-line why ke saath. Topic choose karte
> hi hum seedha lesson shuru karenge: recap, why, what, how.
>
> Aur haan, poora roadmap 100% cover karne ki zarurat nahi hai. Hum wo 80% karenge jo sach mein kaam aata hai. Koi
> doubt ho, feedback ho, to batao. Chalo, shuru karte hain.

**Level-picker microcopy (in voice):**
- Header: "Aap yahan ho → Level N. Yahan se shuru karna sahi rahega." ("You're here → Level N. Starting from here
  makes sense.")
- Prereq warning: "Is level ke liye Level 6 (LangChain basics) aana chahiye, warna thoda bhaari lagega. Phir bhi
  jaana hai? Theek hai, main beech mein zaruri cheezein yaad dila dunga." ("This level needs Level 6 (LangChain
  basics), otherwise it'll feel heavy. Still want to go? Fine, I'll remind you of the essentials along the way.")
- Topic picker: "Is level mein 6 topics hain: 4 core, 2 optional. Core pehle karo; optional tab, jab zarurat pade."
  ("This level has 6 topics: 4 core, 2 optional. Do the core ones first, and the optional ones when you need them.")
- Classification game (from 001): "Naya term suna, 'reranking'. Batao: ye kis part/level mein aayega? Soch ke
  batao, phir main bataunga." ("New term: 'reranking'. Which part or level does it belong in? Think, then I'll tell
  you.")

## Confidence recap

- **Common:** launch-video beats (backstory, agenda, why-now, curriculum in parts/modules, prerequisites with remedy,
  hedged timeline, FAQ, feedback invite); pause-and-think; "trust me"; "don't worry, aage samjhaunga" ("don't worry,
  I'll explain it later"); "bahut simple / bahut important"; specific "next video" previews; theory-then-code with
  first code at about 15–50%.
- **Occasional:** homework (extend/re-implement), explain-it-to-yourself, rewatch advice, who-it's-for statements,
  "common vs uncommon but important", don't-skip / optional labels, honest "boring/tricky" disclaimers.
- **Thin:** the named "80 percent approach" (002 only plus notes; the DSA echo is in DSMP), the
  term-classification game (001 only), hints-over-solutions, "make notes", newsletters as a resource, book
  recommendations, quizzes or flashcards by name (not observed), any 16-level structure (CampusX uses 3 parts or
  6–10 modules; 16 levels is a v4 invention, so group them).
