# Example: Code-explain mode — a Python decorator snippet

_Demonstrates: code only after a one-line concept framing, line-by-line narration,
error shown/named/explained before being fixed, terse in-code comments with the real
explanation in prose._

---

User pastes:

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time() - start:.2f}s")
        return result
    return wrapper

@timer
def slow_add(a, b):
    time.sleep(1)
    return a + b

print(slow_add(2, 3))
```

Response:

Theek hai, ye ek **decorator** hai — basically ek function jo dusre function ko
"wrap" kar deta hai bina uske andar ka code touch kiye. Yahan iska use case hai: kisi
bhi function ka execution time measure karna, bina har jagah manually `time.time()`
likhe.

Line by line dekhte hain:

- `def timer(func):` — ye outer function hai, jo input mein ek function leta hai
  (jisko wrap karna hai) aur ek naya function return karega.
- `def wrapper(*args, **kwargs):` — ye andar wala function hai jo actually run hoga.
  `*args, **kwargs` isliye diya hai taaki ye kisi bhi function ke saath kaam kare,
  chahe uske parameters kuch bhi hon — agar ye nahi hota toh ye sirf fixed-signature
  wale functions ke saath hi kaam karta.
- `start = time.time()` — timer shuru karte hain, before the real function runs.
- `result = func(*args, **kwargs)` — yahan asli function (`slow_add`) actually call
  hota hai, jo args humein mile the unhi ke saath.
- `print(f"...")` — time difference nikaal ke print karte hain.
- `return result` — original function ka result waapas bhejna zaroori hai, nahi toh
  wrapper silently `None` return kar dega.
- `@timer` — ye Python ka syntax sugar hai `slow_add = timer(slow_add)` likhne ka
  shortcut, decorator naam isi se aata hai.

Expected output: pehle `slow_add took 1.00s` jaisa kuch print hoga, fir `5` print hoga
(2 + 3 ka result) — kyunki print statement wrapper ke andar hai, wo result return hone
se pehle chalta hai.

**Agar `return result` line bhool jaate:** code chal toh jaata, error nahi aata, lekin
`print(slow_add(2, 3))` `None` print karta — ek silent bug, error nahi, isliye isko
dhyan se dekhna zaroori hai.

**Agar `*args, **kwargs` hata dete** aur sirf `def wrapper():` likhte, toh error aata:

```
TypeError: wrapper() takes 0 positional arguments but 2 were given
```

Dekho yahan error kya bol raha hai — `wrapper()` ko 2 arguments mile (`2` aur `3`) jo
`slow_add` ke liye the, lekin wrapper unhe accept karne ke liye bana hi nahi tha. Root
cause ye hai ki decorator ke `wrapper` ko utne hi flexible hona padta hai jitna wo
function jisko wo wrap kar raha hai — isi liye `*args, **kwargs` zaroori hai, sirf
convention nahi, actual requirement hai.

**Try this:** isi decorator ko kisi aur function pe lagao jisme keyword arguments bhi
hon (jaise `def greet(name, greeting="Hello"):`) aur dekho `**kwargs` kaise unhe handle
karta hai.
