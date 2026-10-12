# Virus v4: what Nitish SAYS while he draws (notes diagram ↔ transcript pairings)

Research for the v4 animated whiteboard diagrams. Read-only on sources. All quotes are short (12 words or fewer), transliterated from Devanagari auto-captions into Roman Hinglish. Spellings are mine, and the captions themselves are noisy.

## 0. Sources, method, caveats

- **Notes**: `B/file.pdf` (LangChain, "lc pN") and `B/file (2).pdf` (FastAPI, "fa pN"), viewed as PNGs in `S/render/`. Pages viewed: lc p4, p14, p67, p86, p88, p95, p110, p111, p113, p116; fa p1, p4, p10, p12, p18, p20, p22.
- **LangChain transcripts**: the `.txt` files have no timestamps. I rebuilt timestamped versions from `B/Generative AI using LangChain/all_transcripts.json` into `S/ts/NNN.txt` (15-second buckets, `H:MM:SS`). Every LangChain timestamp below comes from those files. The JSON wording differs slightly from the `.txt` (another caption pass), but the content is the same.
- **FastAPI transcripts**: `B/fastapi_transcripts/*.txt` have native `MM:SS` timestamps.
- **Caveat, video 010 (Runnables)**: both the `.txt` and the JSON for 010 are an **English auto-translation**, not Hinglish. I could use its structure and order. I could not use its exact Hinglish phrasing. This affects the p67 pairing.
- **Phrase counts** (section 3) come from `S/scripts/phrases.py`. It ran over 31 Hinglish transcripts: LangChain 001–020 without 010, plus 12 FastAPI files, leaving out the long Docker crash course and the 3-hour Ollama video 021. FastAPI timestamps were stripped and lines joined before counting. Counts are regex hits, so expect some noise.
- **Helper outputs**: `S/kwic1.txt` (diagram/pause/comment/homework/analogy/rhetorical contexts) and `S/kwic2.txt` (yaad rakhna / trust me / product names).

---

## 1. The pairings (10)

### P1. lc p4 "Curriculum Structure" ↔ 002 *Generative AI using LangChain* (announcement)
**Page**: a yellow root "LangChain" with 3 green children: Fundamentals, RAG, Agents. Each child has a small hand-drawn ↓ hook underneath, a placeholder for its sub-list.
**Spoken sequence** (`S/ts/002.txt`):
1. 0:01:12 Recap of the previous video's map (builder side vs user side), then he places this playlist on it: "hum kahan se start kar rahe hain"; "locate kar pa rahe ho ... starting point" (0:02:45).
2. 0:08:19 Framing: "thoda sa is playlist ka curriculum batata hoon".
3. Reveal of the root plus the count: "mentally teen parts mein divide kar rakha hai".
4. Node 1: "fundamentals ... ye sabse important part hai". He gives the reason straight away: without it, the later parts "will not make sense".
5. Nodes 2 and 3 come in one breath ("second part ... RAG", "third part ... AI agents").
6. 0:08:38 Drill-down, which matches the ↓ hooks: "agar main aapko thoda aur details dikhaun". He then lists each branch's videos in order ("pehle video ... second video ... uske baad").
7. Closes with a total ("roughly 17 videos") and the timeline.
**Build steps**: root → 3 children (named in order) → per-child expansion. **Audience**: no question asked. He uses a comprehension check ("I hope aap ... locate kar pa rahe ho"). **Analogy**: none. He uses the word "flavour" ("baaki cheezon ka bhi flavour", 0:06:42). **Into code**: none (announcement video).

### P2. lc p14 "LangChain Components" hub ↔ 004 *LangChain Components*
**Page**: a yellow circle "LangChain" with 6 numbered green boxes (1 Models … 6 Agents) placed clockwise. There is a hand tick next to every box and a hand circle around "1. Models". The ticks look like progress marks added in later videos. That is my inference, since no transcript line mentions ticking.
**Spoken sequence** (`S/ts/004.txt`):
1. 0:02:11 "quick recap" of the previous video, then 0:04:28 "so this was the recap, ab move karte hain aaj ke topic ki taraf".
2. 0:04:47 Reveal: "sabse pehle I would like to show you this diagram". He reveals the whole pre-drawn diagram first, then states the count: "in total ... six different components".
3. Promise and importance: "ye chhah components padh liye, trust me ... majority ... samajh aa jayenge".
4. Rapid ordinal enumeration in number order: "pehla ... doosra ... teesra ... chautha ... paanchva ... chhatha".
5. Roadmap claim: "aage ... notice karoge ki hum inhi chhah components ke baare mein" (the diagram doubles as the playlist plan).
6. 0:05:25 "ek-ek karke" → "now let's start with our first component". Node 1 is flagged "sabse important component". Then comes a definition read from the page, and when he finds it too abstract, a back-story: "thoda sa aapko back story batata hoon" (0:06:03).
7. Each later node opens with the same template: "LangChain ka second component hota hai prompts" (0:16:41), and finally "ab baat karte hain ... last component ki" (0:43:51).
8. 0:52:41 Closure on the diagram: "saare components ke baare mein ek introduction le liya". It hands off to the next video, which takes node 1 in detail.
**Build steps**: 1 reveal (all 6) → 6 named pointers → 6 deep-dives (~45 min). **Audience**: no question at the reveal. Inside the nodes he uses "yahan par dhyan do" when comparing the OpenAI and Claude code side by side (0:09:59). **Examples**: OpenAI vs Claude API code, ChatGPT as the foil for indexes (≈62%), MakeMyTrip agent (≈87%). **Into code**: none. He announces this at the start: "aaj ke video mein bhi ... koi code nahi" (0:00:51).

### P3. lc p110 → p111 → p113 RAG build-up ↔ 016 *Retrieval Augmented Generation*
**Pages**:
- **p110**: handwriting "LLM → emergent pty", "GPT-1, GPT-2 → prompts", "GPT-3 (175B)", "context", an "LR" box with a gradient-descent bracket "5–25" and "transcript"; a prompt-template screenshot; the RAG definition; flow Query + Context → Prompt → LLM → Response.
- **p111**: header "RAG → information retrieval + text generation". The same flow is redrawn with "external knowledge base" hand-labelled under Context, and "LR → 2 hr → 5–25, 43–47". A ticked list: Indexing / Retrieval / Augmentation / Generation. The Indexing definition is red-bracketed, followed by Document Ingestion and Text Chunking with "2 hr transcript → [] [] []".
- **p113**: the loader→splitter→embedding→vector store pipeline, with the store boxed in red and labelled "External knowledge base". A retrieval diagram has handwritten "step1 → query → embedding vector, step2 → semantic search, step3 → ranking, step4 →".

**Spoken sequence** (`S/ts/016.txt`):
1. 0:01:14–0:02:51 Recap of the 4 component videos (loader, splitter, vector store, retriever), then the plan: "aaj ... conceptual part, next video ... scratch se".
2. 0:03:10 Teaching frame: "apna typical why, what, how wala flow". The why part is told "kahani ki tarah" (as a story).
3. 0:04:24 Rhetorical Q → self-answer: "what would you say? I guess aapko answer pata hai. The answer is ..." (knowledge lives in the parameters → "parametric knowledge").
4. 0:06:37 "teen situations batata hoon": numbered "situation number one / two / three" (private data, recent data, hallucination). Each one uses ChatGPT as the foil. He pre-empts an objection: "aapke dimaag mein aa raha hoga ki ChatGPT se toh ..." (0:08:33).
5. 0:10:29 Q again: "kya koi tarika hai ...?" → "the answer is yes": fine-tuning. Definition first, then the analogy "agar isko aap ek analogy se samajhna chaho" (engineering graduate → 2–3 months of company training = fine-tuning, 0:12:29). He maps the analogy back explicitly: student = LLM, degree = pre-training, company training = fine-tuning.
6. 0:22:47 "nau again hum same question par aa gaye" → in-context learning. Signposted surprise: "ek bahut mazedaar baat batata hoon" (0:26:25) → emergent property → GPT-1/2/3 with 175B. These are exactly the handwritten p110 notes.
7. 0:31:48 Bridge: "what if ... poora context hi send kar doon". He works a concrete example first (2-hr Linear Regression lecture, doubt on gradient descent, "5 minute se 25 minute tak"; this matches the handwritten "5–25"). Only then does the name come: "precisely isi cheez ko bola jaata hai RAG" (0:33:45).
8. 0:34:26 Points at the flow: "agar aap ye flow diagram dekho" → Query + Context → Prompt → LLM → Response, walked left to right. Then the prompt screenshot: "yahan pe dekho ... is tarike se aap prompt ko design karte ho".
9. 0:35:41 Verbal recap of the whole why-chain, then "why samjha diya, what samjha diya, ab how pe focus".
10. 0:36:56 New diagram header: "do concepts se milke bana hai" (retrieval + generation, matching the p111 header) → "four steps" listed → "ek baar ... summarized view ... phir har step detail mein block diagrams ki help se".
11. Per step, a fixed cycle: definition read ("yahan par dekho likha hua hai") → running example (the same 2-hr lecture: "5 se 25" and "1:43 se 47", the handwritten "5–25 / 43–47") → LangChain tools (PyPDFLoader, YouTubeLoader, RecursiveCharacterTextSplitter, FAISS/Chroma/Pinecone …).
12. Progress counters on the diagram: "chaar mein se humne first step padh liya" (0:48:48); "chaar mein se do steps humne kar liye" (0:52:38).
13. 0:50:46 Retriever sub-steps, said as "step one ... step two ... step three ..." (matches the handwritten step1–4 on p113).
14. 0:53:14 "yahan par aate hain is block diagram mein" (augmentation) → generation → 0:54:16 "flow diagram ke hisaab se this is the flow" → closing check: "is poore diagram ... visually aur conceptually dono".
15. 0:55:11 Return to the opening problems: "let's go back to those three problems". He closes each one with the diagram.
**Build steps**: flow v1 (5 nodes, after the example) → flow v2 with "external knowledge base" and the 4-step list → indexing pipeline (4 sub-steps) → retrieval (4 sub-steps) → augmentation → generation. **Audience**: rhetorical Qs; "I hope ... aap bore nahi ho rahe ho" (0:36:37). **Analogy**: engineering graduate (fine-tuning); humans learning from a few examples (GPT-3 paper). **Products**: ChatGPT, CampusX's own course site, Google Drive / S3. **Into code**: none. "next video mein scratch se code" (0:58:54).

### P4. lc p116 "Plan of Action" ↔ 017 *YouTube Chatbot (RAG in LangChain)*
**Page**: the reused RAG architecture image. Red layer: a circle around each stage (loader, chunks, embeddings, vector store, retriever, prompt→LLM), plus the handwritten chain "YT → transcript → langchain → YT loader → buggy / YT API". Green layer (added later): boxes "question → question" and "question → retriever → context", both feeding "prompt | llm | parser", labelled "parallel chain".
**Spoken sequence** (`S/ts/017.txt`):
1. 0:00:00 Recap of the theory video, then "plan yeh hai ki ek problem statement uthaunga".
2. 0:00:55 Problem statement with a real-product use case (long podcasts on YouTube; options Chrome plugin vs Streamlit).
3. 0:04:44 "next I will discuss the exact plan of action". Surprise framing: "mazay ki baat yeh hai ... exactly wahi flow". Callback: "agar aapko yaad hoga to yeh diagram maine bana ke dikhaya tha".
4. "main aapko ek baar step by step batata hoon": step 1, load the transcript. He gives the two options and his verdict "thoda sa buggy hai" (the handwritten "buggy"), then splitter → embeddings → vector store = "indexing wala kaam complete". Steps 2, 3, 4 = retrieval, augmentation, generation, named with numbers.
5. 0:08:17 Build strategy: "pehle ... step by step ... tod-tod ke", then one chain at the end.
6. 0:08:56 Handoff: "so now that you have the big picture, now let's start the coding part".
7. In code, every section is named by its diagram step: "sabse pehle ... indexing ... step one pe" (0:09:33).
8. 0:25:51–0:27:29 Second (green) diagram pass, drawn to fix a code problem: "is prompt ko do inputs chahiye" → "ye ek part hai ... ye ek chain hai aur ye ek chain hai" → "hum ise parallel chain bulayenge" → RunnableParallel code.
**Build steps**: red, ~6 circles following the old diagram; green, 3 boxes + label. **Audience**: "aap sab relate kar pa rahe honge" (0:02:29). He mentions viewer comments in the ending ("students mujhe comments mein likh ke bata rahe the", 0:45:05). **Into code**: the plan *is* the code outline, and the diagram comes back mid-code when the code gets non-linear.

### P5. lc p67 "The What" (Runnables / Lego) ↔ 010 *What are Runnables* (English translation only)
**Page**: a Lego photo labelled "Lego kit" / "Lego block". Then "(1) unit of work → input / process / output", "(2) common interface → invoke() / batch() / stream()", "(3) connect": R1↔R2→R3 inside a green "runnable" box, linked to an R4↔R5 box. Then "what → How →". Lower: "chains" boxes, chain↔chain, and joke-gen chain → joke → chain2 → explanation.
**Spoken sequence** (`S/ts/010.txt`, translated):
1. 0:33:27 Phase marker: "taken a lot of time to explain the 'why' ... now ... 'what'".
2. Numbered characteristics, one node each: unit of work (0:33:46), common interface invoke/batch/stream (0:34:45), "point number three" connect R1→R2→R3 (0:35:45), fourth point: a workflow is itself a runnable, R4/R5 (0:36:29).
3. 0:37:33 The analogy comes *after* the 4 principles and is signposted: "if you want to understand ... through an analogy ... visually ... imagine Lego blocks". He then re-maps each principle onto Lego, numbered again.
4. 0:39:10 Honest gap: "maybe you might not be getting the full feel" → "move from 'what' to 'how'" (matches the drawn "what → How →") → code from scratch (FakeLLM).
5. 1:07:16 Joke-chain diagram: he states chain 1 → joke → chain 2 → explanation in words before coding it ("connect two chains ... fourth principle ... just like these Lego blocks").
**Build steps**: 4 numbered nodes → analogy re-mapping (4 again) → what→how arrow. **Into code**: explicit what→how switch, and the diagram's 4th principle comes back as a code milestone. **Confidence on wording**: thin (translation). **Confidence on structure**: good.

### P6. lc p86 + p88 Text Splitting ↔ 013 *Text Splitters*
**Pages**: **p86** has a red-bracketed definition, a "Large text → chunks" image, and three reasons with handwriting "LLM → context length", "[50K] tokens → words", "pdf → summarize", "text → vectors", "RCB / MI / CSK" (IPL), then a 4-leaf tree: Length / Text-structure / Document-structure / Semantic. **p88** shows length-based splitting: a paragraph cut into 5 boxes, hand-labelled red c1…c5, plus "chunks → size → char / tokens", "chunk → 100 charac.".
**Spoken sequence** (`S/ts/013.txt`):
1. 0:00:36 "let's first discuss ki text splitting hota kya hai". Concrete first: "maan lo aapke paas ... hazaron pages ka PDF".
2. 0:01:12 Definition: "yahan par dekho ek definition maine likha hai" (the red bracket).
3. 0:02:08 "do-teen bade reasons". Reason 1: "maan lo ... context length ... 50000 tokens" (the handwritten 50K). He states a simplification out loud: "tokens aur words ko same maan ke chalenge".
4. Reason 2 has three sub-tasks (embedding, semantic search, summarization) plus the IPL example (CSK/MI/RCB paragraphs; "Virat Kohli kis team se khelta hai"). Reason 3 is compute.
5. 0:09:25 Tree reveal: "precisely chaar alag tarike ... pehla ... doosra ... teesra ... chautha", then "ek-ek karke".
6. 0:10:02 Length-based: "pehle se decide kar loonga ... 100 characters". Then a live walk: "ye hamara chunk one ban gaya" … "chunk five" (the red c1–c5 written as he speaks). Then a visualizer tool and pros/cons.
7. 0:14:48 "ab main aapko ek baar code mein dikhata hoon" → CharacterTextSplitter.
8. ≈83% (semantic section): try-yourself: "video pause karke ... padhne ki koshish karo ... soch ke batao".
9. End (0:58:23): a verdict over the 4 leaves ("chaar options mein se best ... recursive character") plus "documentation dekho".
**Build steps**: why (3 reasons) → 4-leaf tree → per-leaf: concept → live example labels → tool demo → code. **Analogy**: none (concrete examples instead).

### P7. lc p95 "Vector Store Vs Vector Database" ↔ 014 *Vector Stores*
**Page**: typed bullets with underlines. The handwritten right column reads "vectorstore → System → Storage / Retrieval", then a bracket "→ Distributed, → Backup and restore, → ACID trans, → concurrency, → Authentic…", then a box "VD → VS". "FAISS" is circled, "Pinecone" is handwritten, and the takeaway sentence is red-bracketed.
**Spoken sequence** (`S/ts/014.txt` 0:28:40–0:33:32). The order matches the handwriting exactly:
1. Motivation from his own confusion: "dono terms interchangeably ... mujhe thoda confusing laga tha".
2. "vector store ko aap ek system maan sakte ho" → "do main kaam": storage, retrieval.
3. "agar aap kuch aur features add kar do" → distributed / backup and restore / ACID / concurrency / authentication (same order as the handwritten list).
4. Formula: "vector store plus database-like features = vector database".
5. Reads the typed text: "yahan pe dekho maine likha bhi hai". Examples: FAISS, then Milvus / Qdrant / Weaviate / Pinecone.
6. Red-bracket moment: "agar aapko ek cheez yaad rakhni hai" → the bracketed sentence.
7. Converse rule: "har vector database ... vector store ... ulta true nahi".
8. Handoff: "ab ... LangChain mein ... kaise implemented hai".
**Build steps**: 2 + 5 + 1 (the VD→VS box). **Ending of video**: homework, "ek chhota sa homework deta hoon" (re-implement the Chroma code for FAISS/Pinecone, 0:49:31).

### P8. fa p1 "Why FastAPI is fast to run?" ↔ FastAPI Video 2 *FastAPI Philosophy*
**Page**: Web Server (yellow) ↔ SGI (green diamond) ↔ API Code (blue). A raw HTTP POST /predict with red circles, a Python dict (method/url/json), an HTTP 200 response, and handwritten "ml model api → /predict endpoint → f1, f2 → prediction → AWS", "client". Row 2 is Flask: Gunicorn, WSGI → Werkzeug, a sync endpoint; "SGI → WSGI / ASGI", "protocol". Row 3: uvicorn, ASGI → Starlette, an async endpoint with async/await circled.
**Spoken sequence** (FastAPI Video 2):
1. 07:53 Scenario first: the "/predict" endpoint, "f1, f2" inputs, "AWS pe deploy".
2. 08:22 "yahan pe aapko ek cheez samajhni padegi" (what deploying means) → "do cheezein": API code + web server (09:27 "do important components").
3. 09:41 "ek baar samajhte hain ... poora flow". Client → HTTP request (POST, endpoint, host, content-type) → web server.
4. 11:26 Problem before the node: "Python HTTP nahi samajh sakta" → "beech mein ek translator ki zaroorat". *Then* the node name: SGI (12:07).
5. Forward path → prediction → reverse path ("phir se SGI beech mein aayega", 13:26) → "this is how the entire API information flow works".
6. 13:57 Chant-style recap of the 3 nodes: "web server, SGI, API code".
7. 14:08 Variant row: "ye exact flow Flask jaisi service kaise use karti hai" → WSGI, Werkzeug, Gunicorn, each backed by a live Google search ("agar aap ek baar Google karoge"). Verdict: "Flask ki burai bhi samajh mein aa gayi" (18:52).
8. 19:04 FastAPI row: "teen aspects mein ... different" → ASGI/Starlette, Uvicorn, async/await.
9. 24:31 Fallback analogy: "agar ... technical discussion samajh nahi aaya ... simple analogy". He reuses the restaurant/waiter analogy from video 1: the Flask waiter waits at the kitchen, the FastAPI waiter takes the next order.
**Build steps**: 3 nodes → request packet → reverse packet → Flask row → FastAPI row. **Into code**: installation and a code demo follow.

### P9. fa p4 "HTTP Methods" ↔ FastAPI Video 3 *HTTP Methods*
**Page**: tree Software → Static / Dynamic (Static: "clock" + a calendar screenshot; Dynamic: an Excel screenshot) → C R U D in red (Create, Retrieve, Update, Delete). Then "Website → Software", client ↔ HTTP ↔ Website = server, Website → static (blogs, govt website) / dynamic → C R U D boxes. Then "profile → HTTP → verb → GET", POST, PUT, DELETE in a red bracket.
**Spoken sequence** (05:37–18:02):
1. 05:37 Why now: "ek bahut important discussion ... poore playlist mein dekhoge".
2. 05:56 Question before the first split: "main aapse ek sawal poochna chahta hoon ... kitni category" → "what would you say ... I guess aapko screen pe bhi dikh raha hai" (the diagram is already showing).
3. Static node: definition → "ek example deta hoon" → calendar ("khud soch ke dekho"), clock.
4. Dynamic node: Excel, Word, PPT.
5. 08:42 Second question before the next reveal: "what do you think hum kitne types of interactions ...?" → "I can tell you the answer" → CRUD → "I can bet ... inhi chaaron mein se" → Excel and Word mapped to C/R/U/D.
6. 10:45 Mini-summary: "summary yeh hai ki ... static ko hata dete hain".
7. 11:04 Same tree replayed for websites: client/server/HTTP; static (blog, govt site) / dynamic (Instagram, Zomato) → CRUD again, each letter mapped to a product action.
8. 15:12 Verbs: profile page → GET, form → POST, PUT, DELETE → "collectively HTTP methods". He flags importance by frequency: "GET aur POST zyada use hote hain".
9. 17:39 Demo: "jo maine abhi padhaya ... uska ek demo". At 18:02 he challenges the viewer: "khud soch ke dekho ye CRUD mein kaunsa operation hua".
**Build steps**: ~5 layers (2 classes → examples → CRUD → website replay → verbs). **Analogy**: none. Ordinary software stands in as the familiar case before websites.

### P10. FastAPI recap trees fa p10 / p12 / p18 / p20 / p22 ↔ Videos 5, 6, 8, 9, 10 (openings)
**Pages**:
- **p10**: "4 → 2 → API, FastAPI; Project PMS", tree Patient API → home / about / view / patient / sort, with handwritten "hello", "path param" (on patient), "query param" (on sort), "height/weight/bmi", and JSON samples.
- **p12**: "CRUD" with C and R marked; tree view / patient / sort / create; "delete", "update" written off the root.
- **p18**: "ml model → insurance premium → API /predict → frontend → streamlit", then a bracket: "improve" (red circle), "docker", "AWS deploy".
- **p20**: project → ml model → prediction API → user → html/ui → /predict → FastAPI → simple/flaws → improved API → Dockerize → Docker image, plus a Docker Crash Course thumbnail.
- **p22**: ml model → insurance premium pred → API /predict → FastAPI → Improve / Docker → DockerHub / AWS → account.

**Spoken**:
- **Video 5** (00:00–03:50): "chhota sa recap dena chahunga". It walks every node in tree order and names the concept each one taught: "path parameter ki help se", "concept padha tha ... query parameter". Then today's node: "aaj hum create wala part". Then the plan: "step by step samjhata hoon" (03:50).
- **Video 6** (00:00–01:52): "humara abhi tak ka progress yeh hai": CRUD, C and R done, the 4 endpoints walked, then "baaki do features update and delete".
- **Video 8** (00:00–02:34): "let's take a quick recap", model → API → Streamlit, then "teen cheezein aur karni hain" (= the bracket). Today's item is circled red: improve.
- **Video 9 / Docker** (00:00–04:24): recap chain, then today's 2 tasks. Prerequisite with a pause prompt: "is video ko abhi pause karo ... check out karo" (04:09, = the thumbnail).
- **Video 10 / AWS** (00:00–01:49): recap chain ending in "aaj ... final step".

**Pattern**: the recap tree is a **progress map**. Each later video redraws it shorter. Today's node gets circled, and each past node is narrated together with the concept it taught.

---

## 2. Per-pairing summary table

| # | Page ↔ video | Reveal style | Steps | Q before reveal? | Analogy | Into code |
|---|---|---|---|---|---|---|
| P1 | lc4 ↔ 002 | count-first ("teen parts") then named | 1+3+expand | no | none | none |
| P2 | lc14 ↔ 004 | whole pre-drawn, then ordinal list | 1+6 (+6 deep-dives) | no | backstory | none (theory) |
| P3 | lc110/111/113 ↔ 016 | example first, name later; then 4-step skeleton | 5 → 4 → 4×4 | yes (×3, self-answered) | engineering student | next video |
| P4 | lc116 ↔ 017 | reuse old diagram, step-numbered | ~6 red + 3 green | no | none | plan = code outline |
| P5 | lc67 ↔ 010 | numbered principles, analogy after | 4 + 4 + arrow | no | Lego (after) | what→how |
| P6 | lc86/88 ↔ 013 | why-reasons, then 4-leaf tree | 3 + 4 + c1–c5 | no (pause prompt later) | none | per-leaf code |
| P7 | lc95 ↔ 014 | spoken list = handwritten list | 2 + 5 + 1 | no | none | LangChain impl. |
| P8 | fa1 ↔ FA-2 | scenario → problem → node | 3 + packets + 2 rows | problem posed, then node | waiter (after) | install + demo |
| P9 | fa4 ↔ FA-3 | question → reveal, twice | ~5 layers | yes (×2) | none | demo + challenge |
| P10 | fa10–22 ↔ FA-5…10 | recap walk of yesterday's tree | n nodes, today circled | no | none | today's step plan |

---

## 3. Recurring narration patterns (counts over 31 Hinglish transcripts)

Confidence: **common** means 15 or more of 31 files, or present in most pairings. **Occasional** means 4–14 files. **Thin** means 3 files or fewer, or seen only once.

### 3a. Diagram-introduction phrases
- "yahan pe/par dekho" + "likha hua hai": **72 hits / 24 files** and **107 / 23**. **Common**. This is his main pointer and is almost always followed by reading the definition aloud.
- "(dikhata / samjhata / batata) hoon": **236 / 29**. **Common**. Typical forms: "main aapko dikhata hoon", "ek example deta hoon".
- "ye jo X hai" (deictic "this X"): **291 / 30**. **Common**, used constantly while pointing.
- The literal word "diagram": **29 / 9**. **Occasional**. Typical forms: "I would like to show you this diagram" (004), "agar aap ye flow diagram dekho" (016), "ek diagram ke through samajh lete hain" (FA-7 04:16), "ek bahut simple diagram ke through" (020).
- "screen pe/par": **19 / 11**. **Occasional**. Example: "jo screen par aapko dikhai de raha hai" (016 close).
- "you can see / aapko dikhai dega": **244 / 26**. **Common**.
- "bana ke dikhaya / banata hoon": **31 / 15**. **Occasional**. He rarely narrates the act of drawing itself. He narrates the content ("ye hamara chunk one ban gaya"). No instance of "main yahan diagram banata hoon" was found.

### 3b. Step-by-step build narration
- Ordinals and numbered items: "step number / step one / first step" **71 / 14**. "situation / scenario / reason / problem / point number X" **18 / 7**. Inside pairings: P2 (pehla…chhatha), P3 (situation 1–3, step 1–4, retriever steps 1–3+), P5 (point 1–4), P6 (reason 1–3, chunk 1–5), P8 ("do important components"), P9.
- **Count-first**: he announces how many before listing: "teen parts" (P1), "six different components" (P2), "teen situations" / "four steps" (P3), "do-teen bade reasons" / "chaar alag tarike" (P6), "do main kaam" (P7), "teen aspects" (P8), "chaar type ke interactions" (P9). Present in **9 of 10 pairings**. **Common**.
- "ek-ek karke": **29 / 18**. **Common** as the bridge from overview to per-node detail.
- Progress counters on a multi-step diagram: "chaar mein se humne first step padh liya" (016 0:48:48), "chaar mein se do steps" (016 0:52:38), "wapas is flow diagram pe chaloon to ... third step bhi complete" (FA-7 45:54), "ab second step complete kar liya" (FA-7 40:40). **Occasional (3 videos)**.

### 3c. Recap-with-diagram at lecture start
- The word recap: **20 / 16**. Plus "pichle video mein …" openings in nearly every video. He calls it a ritual: "hamesha ki tarah ek chhota sa recap" (009 0:00:39). **Common**.
- In FastAPI the recap is drawn: trees fa p10/p12 and chains p18/p20/p22, with today's node circled (P10). In LangChain the recap is mostly spoken over earlier slides; the diagram-reuse callback appears in 017 ("yeh diagram maine bana ke dikhaya tha") and 015 ("jo diagram maine aapko bataya ... isi ko use karenge"). **Common in FastAPI. Occasional as an explicit diagram callback in LangChain.**
- The recap closes with a fixed handoff: "so this was the recap, ab move karte hain" (004) or "I hope aapko ... progress ... samajh mein aa gaya" (FA-6). **Common**.

### 3d. "Plan of action" spoken form
- The literal phrase "plan of action": **4 files** (005, 006, 014, 017). The wider family ("plan yeh hai", "mera plan", "step by step"): **56 / 21**. **Common**.
- Shape (017): "next I will discuss the exact plan of action" → "mazay ki baat" → "step by step batata hoon" → numbered steps, each with an option and his verdict ("thoda buggy hai") → "pehle tod-tod ke, phir chain" → "now that you have the big picture, let's start the coding part".
- The why-what-how frame is said explicitly in 016 ("typical why, what, how wala flow") and at the 016 midpoint ("why samjha diya, what samjha diya, ab how"). 010 does the same ("why" → "what" → "how") and the arrow is drawn on p67. **Thin by regex (3 hits / 1 file), but structurally present in P3 and P5.**

### 3e. Rhetorical Q → self-answer during diagrams
- "what would you say / what do you think / aapko kya lagta": **9 / 5**. "the answer is": **23 / 12**. "kya karte ho/karoge" (asked, then answered): **88 / 26**. **Common** as a style. **Occasional** as an explicit pre-reveal quiz.
- Typical form: question → "I guess aapko pata hai" → "the answer is …". In P3 0:04:24 and P9 05:56/08:42 he poses the question **before** the node appears and answers it himself within a sentence or two. There is no real wait.
- Anticipated objection: "aapke dimaag mein aa raha hoga ki …" ("dimaag mein" **54 / 19**). **Common**.

### 3f. Audience engagement prompts
- Comprehension check "I hope / I really hope … samajh mein aa gaya": **207 / 31** and **148 / 28**. **Common**. This is the end-of-node marker.
- Pause-and-think / pause-and-read: **9 / 8**. Examples: "video pause karke ... soch ke batao" (013), "pause karke sochoge" (014), "pause karke padhoge" (015), "abhi pause karo" (Docker). **Occasional.** Always tied to something on screen (a text or a diagram).
- "khud soch ke dekho": **14 / 7**. **Occasional** (heavy in FA-3).
- Comment prompts: **4 / 4** ("comment mein batana", 006; "comment mein likho", 007). **Thin.**
- Homework: **2 / 2**, of which 1 is real (014 end). **Thin.**
- Try-yourself: **7 / 6**. **Occasional** (e.g. "khud se UI banao" in 017).
- No transcript shows him waiting for an answer. Every question is self-answered.

### 3g. Analogy signposting
- "analogy": **11 / 5** (016, 019, FA-1, FA-2, plus 006 as a prompt word). Forms: "agar isko aap ek analogy se samajhna chaho" / "ek simple analogy ke through samjhata hoon" / "ek bahut achhi analogy hai". **Occasional.**
- **Placement**: in all 3 pairings that have one (P3 engineering student, P5 Lego, P8 waiter), the analogy comes **after** the formal explanation, as a second pass. It is mapped back item by item: "yahan student LLM ki tarah hai …"; Lego re-numbers principles 1–4. In P8 it is framed as a rescue: "agar … samajh nahi aaya". **Consistent within the sample (3/3).** Also, analogies **recur across videos**: the waiter from FA-1 is reused in FA-2.
- "maan lo" (hypothetical setup): **251 / 28**. **Common**. This is his everyday example opener, much more frequent than formal analogies.
- "imagine": **17 / 9**. **Occasional.**

### 3h. Real-product examples
- ChatGPT: **36 hits / 6 files**. Used as the **foil**: what ChatGPT cannot do (private data, recent news, 1 GB PDFs) in 004, 012, 016.
- Named apps (Instagram, Zomato, MakeMyTrip, Amazon, Uber …): **41 / 7**. MakeMyTrip is his go-to agent/API example (003, 004, 018, 020, FA-1 IRCTC story). Instagram and Zomato are mapped letter by letter to CRUD (FA-3).
- His own platform (CampusX site, lecture transcripts, 2-hr Linear Regression lecture) is the running example across the whole of 016 and 017. **Common** in RAG-related videos.

### 3i. Importance marking (red pen ↔ speech)
- "important": **149 / 31**. "trust me": **21 / 12**. "yaad rakhna / yaad rakhni hai": **16 / 12**. All **common** to occasional.
- **Red ink is his default live-annotation ink, not an importance code.** Red covers circles, arrows and labels on almost all LangChain RAG pages. Green appears as a second, later layer (p67, the p116 parallel chain).
- Where speech and ink line up:
  - Red bracket around a definition ↔ "yahan pe dekho likha hua hai" + reading it aloud: p86 ↔ 013 0:01:12; p111 ↔ 016 0:41:07. **Seen 3+ times.**
  - Red bracket around a takeaway ↔ "agar aapko ek cheez yaad rakhni hai": p95 ↔ 014 0:32:52. **Seen once. Thin but clean.**
  - Red labels c1–c5 ↔ "ye hamara chunk one ban gaya" (p88 ↔ 013 0:11:00).
  - Red circle on today's node ↔ "aaj ke video mein …" (fa p18 "improve").
- He also marks importance by **ranking** ("GET aur POST zyada use hote hain", FA-3; "sabse important component", P2; "sabse important part", P1).
- Handwritten numbers are the numbers he says in the example: "5–25", "43–47", "175B", "50K", "100 charac.". **Common in the sample (4 pairings).**

### 3j. How lectures end
- Fixed outro: "like karna … subscribe … milte hain next video mein": **31 / 31**. Next-video tease: **63 / 31**. **Common.**
- A closing summary over the diagram happens, but in words, not by redrawing:
  - 004: "saare components ke baare mein introduction le liya".
  - 016: "flow diagram ke hisaab se this is the flow" + "visually aur conceptually dono".
  - 013: a verdict over the 4 options.
  - FA-7: "wapas is flow diagram pe chaloon".
  - 005: "dimaag mein ek bahut badhiya visual diagram ban gaya".
  **Occasional to common (≈6 seen).** No page in the sample is a dedicated end-of-lecture summary diagram. The FastAPI *next* video's recap tree plays that role (P10).
- "nutshell": **28 / 13**. "basically / basic funda": **120 / 29**. **Common** one-line compressions.

---

## 4. Rules: narrating an animated diagram in CampusX voice

1. **Open with the count, then reveal.** Before the first node, say how many parts there are ("isko maine teen parts mein divide kiya hai", "total chhah components"). Evidence: 9 of 10 pairings (P1 0:08:19, P2 0:04:47, P3 0:37:32, P6 0:09:25, P7 0:29:40, P8 09:27, P9 09:25).
2. **One caption per step, in ordinal form.** Each reveal gets a short caption starting with its ordinal ("pehla … / step number two … / point number three …"). Close a group with "ek-ek karke detail mein dekhte hain". Evidence: P2 enumeration, P3 step 1–4 and retriever steps, P5 points 1–4; "ek-ek karke" in 18/31 files.
3. **Point first, then read.** When a node has a definition, the caption pattern is "yahan pe dekho, likha hua hai …" + a one-line paraphrase. Use the red bracket for the definition at that moment. Evidence: 72/24 and 107/23 hits; p86/p111 red brackets ↔ 013 0:01:12 and 016 0:41:07.
4. **Pose the question before the node, answer it within the same step.** For "how many / where / what kind" nodes, show a question caption first ("aapko kya lagta hai, kitne types …?"), then reveal with "the answer is …". Never require the learner to answer. Evidence: 016 0:04:24; FA-3 05:56 and 08:42; no real waits in any transcript.
5. **Name the problem before the box that solves it.** For a middle component, animate the gap first (a red "?" or a broken arrow with "Python HTTP nahi samajh sakta"), then reveal the box with "beech mein ek translator chahiye → SGI". Evidence: FA-2 11:26–12:13; 016 names "RAG" only after the example (0:33:45).
6. **Example values go on the diagram as handwritten labels.** When the narration uses a concrete number or case ("2 ghante ka lecture, 5 se 25 minute"), write that exact value next to the node in handwriting style. Evidence: "5–25 / 43–47" (p110/111 ↔ 016 0:32:27, 0:39:08), "175B" (0:28:02), "50K" (013 0:02:47), "100 charac." and c1–c5 (013 0:10:40–0:11:37).
7. **Show progress on multi-step diagrams.** After each completed stage, add a tick or dim the finished nodes, with a caption like "chaar mein se do steps ho gaye". Evidence: 016 0:48:48 and 0:52:38; FA-7 40:40 and 45:54; ticks on lc p14 and p111 (the ticks themselves are inferred, see P2).
8. **Analogy is a second pass, after the formal build, mapped item by item.** Use a separate layer or colour (his green layer), signposted with "agar isko ek analogy se samajhna chaho …". Re-number the analogy to match the original nodes. Evidence: P3 (0:12:29), P5 Lego (0:37:33), P8 waiter (24:31); 3 of 3.
9. **Open later lessons by replaying yesterday's diagram as a recap, then circle today's node.** The recap walk names each past node together with the concept it taught ("patient → path parameter"). Then circle the new node in red and say "aaj hum ye wala part cover karenge". Evidence: P10 (fa p10/p12/p18 ↔ FastAPI videos 5, 6, 8); "hamesha ki tarah recap" (009).
10. **End every step with a check line, and end the diagram with a "flow ke hisaab se" walk-through.** After the last node, animate a single pass along all arrows with "toh flow ke hisaab se, this is the flow …". Then add a comprehension check ("I hope … visually aur conceptually dono samajh aa gaya"). Evidence: 016 0:54:16–0:54:53; FA-2 13:57 ("web server, SGI, API code"); "I hope" in 31/31 files.
11. **Use ChatGPT, MakeMyTrip, Instagram and Zomato as foils and mappers.** ChatGPT shows "what an LLM alone can't do" before the RAG box. Familiar apps get mapped node by node (Instagram post = C, scroll = R …). Evidence: 016 0:07:13 and 0:08:33; FA-3 13:03–14:28; 7 files for apps and 6 for ChatGPT.
12. **Bridge to code with an explicit what→how arrow and keep the diagram as the code's table of contents.** The last frame draws "what → how", with the caption "ab what se how pe chalte hain" or "now that you have the big picture, let's start coding". Code sections then reuse the step names. If the code branches, bring the diagram back with a new colour layer ("ye ek chain hai aur ye ek chain hai → parallel chain"). Evidence: p67 arrow ↔ 010 0:39:28; 017 0:08:56 and 0:25:51–0:27:29; FA-3 17:39.

**Optional, thin-evidence touches**: a pause-and-think beat tied to an on-screen text ("video pause karke soch ke batao …", 8 files); "agar aapko ek cheez yaad rakhni hai" on the final red-bracketed takeaway (one clean instance, P7); a one-line homework at the end (1 real instance).

---

## 5. Short phrase bank (Roman Hinglish, ≤12 words each, attested)

- Reveal: "sabse pehle main aapko ye diagram dikhana chahunga" (004), "agar aap ye flow diagram dekho" (016), "is poore flow ko ek diagram ke through samajh lete hain" (FA-7)
- Count: "maine isko teen parts mein divide kar rakha hai" (002), "in total … six different components hote hain" (004)
- Point/read: "yahan pe dekho, likha hua hai …", "ye jo … hai"
- Step: "ye ho gaya hamara step number three" (016), "chaar mein se humne first step padh liya" (016)
- Question: "agar main aapse poochhun … to what would you say?" (016), "the answer is …"
- Objection: "aapke dimaag mein aa raha hoga ki …" (016)
- Analogy: "agar isko aap ek analogy se samajhna chaho" (016)
- Surprise: "ek bahut mazedaar baat batata hoon" (016), "mazay ki baat yeh hai" (017)
- Importance: "trust me …", "agar aapko ek cheez yaad rakhni hai" (014)
- Check: "I really hope aapko samajh mein aa gaya"
- Transition: "now that you have the big picture, let's start coding" (017), "ab what se how pe" (010, translated)
- Recap: "hamesha ki tarah ek chhota sa recap" (009)

## 6. Gaps / what I did NOT find

- No transcript line narrates the physical act of drawing ("main yahan arrow bana raha hoon"). His narration follows the content, not the pen.
- No real audience wait or poll. Every question is self-answered.
- Runnables (010) wording is from an English translation only. The Lego phrasing is not usable as Hinglish.
- The ticks on lc p14 and lc p111 have no matching speech. They are inferred as progress marks.
- I found no dedicated end-of-lecture summary page. Summaries are spoken, or appear as the next video's recap tree.
