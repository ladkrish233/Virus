# See the difference (v3 comparison, kept for reference)

Moved here from the README when it was rewritten for v4. The outputs are from v3.

## Same prompt, three answers

Same prompt, asked two ways — and Virus answers in both languages it supports. No fabricated stats here, just read all three and judge for yourself.

**Prompt:** `teach me how REST APIs work`

<table>
<tr><th>Claude, no plugin</th><th>Claude, with Virus (Hinglish, default)</th><th>Claude, with Virus ("English")</th></tr>
<tr valign="top"><td>

REST (Representational State Transfer) is an architectural style for designing networked applications. A REST API exposes resources via URLs and uses standard HTTP methods to operate on them:

- **GET** – retrieve a resource
- **POST** – create a resource
- **PUT/PATCH** – update a resource
- **DELETE** – remove a resource

REST APIs are stateless, meaning each request contains all the information needed to process it, and responses are typically returned in JSON format. This design is widely used because it is simple, scalable, and works well with the HTTP protocol that already powers the web.

</td><td>

Chalo, REST API samajhte hain — pehle dekhte hain problem kya hai. Maan lo tumhare paas ek mobile app aur ek website hai, dono ko same user data chahiye. Agar dono apna alag logic likhein seedha database se baat karne ke liye, toh database ka structure badalte hi dono jagah code todna padega.

Ab sawaal ye aata hai: iska fix kya hai? Theek hai, answer hai — ek beech ka layer banao jise **API** bolte hain, jo request leta hai aur database se khud baat karta hai.

Isko restaurant se samjho: tum customer ho, waiter API hai, kitchen backend hai. Tum order (request) dete ho, waiter kitchen tak le jaata hai, khana (response) wapas le aata hai. Tumhe pata hi nahi chalta kitchen ke andar kya ho raha hai.

REST ek fixed tarika hai order dene ka — GET, POST, PUT, DELETE. Basically ek protocol, jaise menu card.

Ab bolo, agar tumhe ek user ka data *update* karna ho, konsa method use karoge — GET ya PUT?

</td><td>

Alright, let's get into REST APIs — first, what's the actual problem? Say you have a mobile app and a website, and both need the same user data. If each one talks straight to the database on its own, the moment the database's structure changes, you're fixing code in two places.

So the question becomes: what's the fix? You build a middle layer — an **API** — that takes requests and talks to the database on your behalf.

Here's the analogy that makes it click: you're the customer, the API is the waiter, the kitchen is the backend. You place an order (a request), the waiter carries it to the kitchen, and brings the food (the response) back. You never see what's happening in the kitchen.

REST is just a fixed way of placing that order — GET, POST, PUT, DELETE. Think of it like a menu card: a protocol everyone's agreed to follow.

Now tell me — if you wanted to *update* a user's data, which method would you reach for, GET or PUT?

</td></tr>
</table>

Same facts, same four HTTP methods, same teaching method in both languages — but the no-plugin answer assumes you already think like an engineer, while Virus builds the idea from a problem you'd actually recognize, then checks you got it before moving on. Say "english mein" any time to switch; nothing about *how* it teaches changes, only the language.

**Prompt:** `/teach` — explain this snippet:
```js
function getTotal(items) {
  let total;
  for (let item of items) {
    total += item.price;
  }
  return total;
}
```

<table>
<tr><th>Claude, no plugin</th><th>Claude, with Virus</th></tr>
<tr valign="top"><td>

This function takes an array of `items`, loops over each one, and adds up the `price` property into `total`, which it then returns. It's a straightforward summation using a `for...of` loop.

</td><td>

Theek hai, isme ek chhota sa bug hai jo turant pakad na aaye toh confusing lag sakta hai. Pehle samajhte hain code kya karna chahta hai — har item ka `price` add karke total nikalna.

Chalo run karke dekhte hain — expected output `30` hona chahiye agar prices `10` aur `20` hon, lekin actual output aayega: `NaN`.

Dekho kya ho raha hai — `total` declare toh hua but koi value nahi di, matlab `undefined`. Jab `undefined + 10` compute hota hai, result `NaN` aata hai — aur ek baar `NaN` ban jaaye, uske baad kuch bhi add karo, hamesha `NaN` hi rahega.

**Root cause:** `total` ko `0` se initialize nahi kiya gaya. Fix: `let total = 0;`

</td></tr>
</table>

The no-plugin answer is accurate about *what the code intends* — but doesn't run it mentally, so it never catches that this actually throws `NaN`, not the sum it describes. Virus predicts the output, shows the real bug, and root-causes it before fixing — matching the plugin's own rule that errors are never silently patched.

**Prompt:** `mujhe overfitting aur underfitting confuse karte hain`

<table>
<tr><th>Claude, no plugin</th><th>Claude, with Virus</th></tr>
<tr valign="top"><td>

**Underfitting** occurs when a model is too simple to capture the underlying pattern in the data, resulting in poor performance on both training and test data. **Overfitting** occurs when a model learns the training data too well, including its noise, resulting in excellent training performance but poor generalization to new data. The goal is to find a balance between the two, often through techniques like regularization, cross-validation, and choosing appropriate model complexity.

</td><td>

Theek hai, bilkul common doubt hai ye — restate kar leta hoon pehle: tumhe clear nahi hai konsa kab hota hai, sahi pakda?

Root cause usually ye hoti hai ki dono hi "model accha nahi hai" wali category mein lagte hain — par ye do **opposite** problems hain.

Socho ek student exam ki taiyari kar raha hai: **underfitting** — wo jisne sirf 2 din padha, kuch seekha hi nahi, training aur naye dono questions mein kharab karega. **Overfitting** — wo jisne saare practice papers ratta maar liye, training pe 100/100 par thoda alag question aaye toh fail.

Ab verify karte hain — agar ek model training pe 98%, test pe sirf 60% de raha hai, overfitting hai ya underfitting? Bolo.

</td></tr>
</table>

Both are factually correct. The no-plugin answer is a textbook definition; Virus restates the actual confusion first, uses a fresh analogy (not reused from an earlier answer), and ends by checking understanding instead of just stopping.

**Prompt:** `build me a course on FastAPI` / `make a lesson page on how Git branching works`

<table>
<tr><th>Claude, no plugin</th><th>Claude, with Virus</th></tr>
<tr valign="top"><td>

Sure! Here's a learning path for FastAPI:

1. Installation and setup
2. Routing and path operations
3. Request bodies with Pydantic
4. Dependency injection
5. Authentication
6. Testing
7. Deployment

Start with the official FastAPI docs and work through each topic in order.

</td><td>

Builds a real `roadmap.md` — an 8-lecture sequence planned *backward* from a stated end-state ("build and deploy a production API with auth, validation, and tests") — then generates an actual, dense, self-contained HTML lecture page for lecture 1, with the mascot presenting it, a worked restaurant analogy grounding "API/request/response" before any code, real runnable code, and a tip/warn card. Further lectures build lazily as you reach them, never all at once.

See a real one below — not a mockup, an actual generated file from this repo.

</td></tr>
</table>

<div align="center">
  <img src="assets/sample-lecture.jpg" width="100%" alt="A real /course lecture page, generated by Virus, for FastAPI lecture 1" />
  <br/>
  <sub>Lecture 1 of the real FastAPI example — <a href="plugins/virus/skills/virus/references/examples/course-demo/fastapi/lecture-01.html">view the full HTML source</a>, or open it locally in a browser after cloning.</sub>
</div>

**Prompt:** `/project url-shortener` — learn by rebuilding a real GitHub project from scratch

<table>
<tr><th>Claude, no plugin</th><th>Claude, with Virus</th></tr>
<tr valign="top"><td>

Sure! Here's a basic Flask URL shortener. Create a file called `app.py`:

```python
from flask import Flask, request, redirect
import sqlite3, hashlib

app = Flask(__name__)
# ... (full working app follows) ...
```

Run it with `python app.py` and you're done!

</td><td>

Searches GitHub live, shortlists 3 real repos by README scope (not stars), and has you pick one — [`xemeds/tiny0`](https://github.com/xemeds/tiny0) in the real worked example. Writes a `PROJECT_PLAN.md` modeled on CampusX's own CLAUDE.md pattern, then mentors you through rebuilding it **from scratch, one runnable step at a time** — you write the code, Virus reviews it. When your first attempt at handling a form submission throws a real `405 Method Not Allowed`, Virus shows the actual error, names it, root-causes it, and **describes the fix in words rather than handing you corrected code** — even for a one-line change, you make the edit.

See the real worked example: [shortlist](plugins/virus/skills/virus/references/examples/project-demo/url-shortener/shortlist.md) · [plan](plugins/virus/skills/virus/references/examples/project-demo/url-shortener/PROJECT_PLAN.md) · [session](plugins/virus/skills/virus/references/examples/project-demo/url-shortener/session-transcript.md).

</td></tr>
</table>

The no-plugin answer hands you a finished app to run — you'd learn nothing building it. Virus never writes your project for you; it reads a real repo for structural understanding only (never quoting its code) and mentors you to rebuild the same idea independently, bug-fixing included.

