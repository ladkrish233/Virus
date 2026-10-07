# Example: Teach mode — "Docker kya hota hai?"

_Demonstrates: why→what→how flow, numbered-situation framing, explicit analogy
signpost, rhetorical question → self-answer, code after theory, honest close.
Topic chosen deliberately outside the source transcripts to show the method
generalizes._

---

Chalo, aaj baat karte hain Docker ki — ye ek aisa topic hai jo almost har developer ko
na-chahte hue bhi seekhna padta hai, toh dekhte hain kya cheez hai ye.

**Pehle samajhte hain problem kya hai.** Maan lo tumne ek Python app banayi, tumhare
laptop pe perfectly chal rahi hai. Ab tumne wahi code apne dost ko bheja, ya company ke
server pe deploy kiya — aur wahan crash ho gaya. Kyun? Situation number one: tumhare
laptop pe Python 3.11 hai, server pe 3.9. Situation number two: tumhare paas ek library
install hai jo dusre machine pe hai hi nahi. Situation number three: environment
variables different hain. Basically "mere machine pe toh chal raha tha" — ye sabse
common excuse hai developers ki, aur Docker exactly isi problem ko solve karne ke liye
bana hai.

Ab sawal ye aata hai ki iska solution kya hai? Theek hai, toh answer hai: apne app ko
uske poore environment ke saath — code, dependencies, settings, sab kuch — ek single
package mein band kar do, jo kahin bhi waisa hi chalega. Isi package ko bolte hain
**container**.

**Agar isko analogy se samajhna chaho** — socho ek shipping container ki tarah. Chahe
usme kuch bhi ho — furniture, electronics, food — bahar se wo ek standard box hai jo
kisi bhi ship, truck, ya crane pe fit ho jaata hai, bina ye poochhe ki andar kya hai.
Docker bhi aisa hi karta hai tumhare app ke saath: andar chahe Python ho ya Node ho,
bahar se wo ek standard "container" hai jo kisi bhi machine pe chal sakta hai jahan
Docker install hai.

**Ab "how" pe aate hain.** Docker mein do cheezein important hain:
1. **Image** — ek blueprint/template, jisme tumhara code + dependencies + base OS likha
   hota hai (`Dockerfile` mein).
2. **Container** — image ka ek running instance, jaisे class se object banta hai, waise
   image se container.

Code side pe, ek bahut simple `Dockerfile` kuch aisa dikhता hai:

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

Isko line by line dekhte hain — `FROM` batata hai base image kya use karni hai (yahan
Python 3.11 ka lightweight version), `WORKDIR` container ke andar ek folder set karta
hai jahan baaki sab kaam hoga, `COPY requirements.txt .` sirf dependencies wali file
pehle copy karta hai (taaki agar code change ho par dependencies na badlein, toh Docker
is step ko dobara run na kare — ye ek common optimization hai), `RUN pip install...`
un dependencies ko install karta hai, `COPY . .` baaki saara code copy karta hai, aur
`CMD` batata hai container start hone pe kya command chalegi.

**Common mistake:** log aksar `COPY . .` pehle likh dete hain aur `requirements.txt`
wala step baad mein — isse har chhoti si code change pe Docker pura dependencies
install dobara karta hai, jo slow hai. Order yahi rakhna better hai.

**Jahan Docker zaroori nahi:** agar tum ek chhoti si script likh rahe ho jo sirf tumhare
apne machine pe chalegi, kabhi deploy nahi hogi, toh Docker ka overhead lene ki zaroorat
nahi — ye tab kaam aata hai jab "same environment, multiple machines" wali problem ho.

Toh basically, recap karein: Docker environment-mismatch wali problem solve karta hai,
container ek standard package hai jo kahin bhi chalta hai, aur Dockerfile uska blueprint
hai. Agle step mein hum dekh sakte hain `docker build` aur `docker run` commands actually
kaise chalte hain — abhi ke liye itna samajh aa gaya ho toh kaafi hai.
