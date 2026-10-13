/* Virus block library runtime. No dependencies, no CDN, works from file://.
   Usage: <div class="vb" data-block="pause-socho"><script type="application/json">{...}</script></div>
   Mounts on DOMContentLoaded. Call VirusBlocks.mount(root) for blocks added later. */
(function () {
  'use strict';

  function h(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) {
      if (c == null || c === false) return;
      n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return n;
  }
  function btn(label, onClick, alt) {
    var b = h('button', {type: 'button', class: 'vb-btn' + (alt ? ' alt' : '')}, [label]);
    b.addEventListener('click', onClick);
    return b;
  }
  function title(t) { return t ? h('p', {class: 'vb-title'}, [t]) : null; }
  function takeaway(t) { return t ? h('div', {class: 'vb-takeaway'}, ['Yaad rakho: ' + t]) : null; }

  // Clipboard: navigator.clipboard, then execCommand, then select-and-show.
  function copyText(text, area, msg) {
    function fallback() {
      try {
        area.classList.remove('vb-hidden');
        area.focus(); area.select();
        var ok = document.execCommand && document.execCommand('copy');
        msg.textContent = ok ? 'Copy ho gaya.' : 'Select karke Ctrl+C dabao.';
      } catch (e) { msg.textContent = 'Select karke Ctrl+C dabao.'; }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { msg.textContent = 'Copy ho gaya.'; }, fallback);
    } else { fallback(); }
  }

  var SVGNS = 'http://www.w3.org/2000/svg';
  function svgEl(tag, attrs) {
    var n = document.createElementNS(SVGNS, tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
  var ROLE = {input: '#8ec5ff', component: '#9be59b', source: '#f5d76e'};

  // Diagram: nodes [{id,x,y,w,h,label,role}], arrows [{id,from,to}]. Every drawn part carries data-id.
  function drawGraph(nodes, arrows, vb) {
    var svg = svgEl('svg', {viewBox: vb || '0 0 960 300', class: 'vb-svg', role: 'img'});
    var byId = {};
    nodes.forEach(function (n) { byId[n.id] = n; });
    arrows.forEach(function (a) {
      var f = byId[a.from], t = byId[a.to];
      if (!f || !t) return;
      // Straight line by default. An arrow may give its own route as points [[x,y],...] to avoid boxes.
      var seg;
      if (a.points && a.points.length > 1) {
        seg = svgEl('polyline', {points: a.points.map(function (q) { return q.join(','); }).join(' '), fill: 'none', stroke: '#e9e9e2', 'stroke-width': 2});
      } else {
        seg = svgEl('line', {x1: f.x + f.w, y1: f.y + f.h / 2, x2: t.x, y2: t.y + t.h / 2, stroke: '#e9e9e2', 'stroke-width': 2});
      }
      seg.setAttribute('class', 'vb-n');
      seg.setAttribute('data-id', a.id);
      svg.appendChild(seg);
    });
    nodes.forEach(function (n) {
      var r = svgEl('rect', {x: n.x, y: n.y, width: n.w, height: n.h, rx: 10, fill: 'none', stroke: ROLE[n.role] || '#9be59b', 'stroke-width': 2.2});
      r.setAttribute('class', 'vb-n'); r.setAttribute('data-id', n.id);
      svg.appendChild(r);
      var t = svgEl('text', {x: n.x + n.w / 2, y: n.y + n.h / 2, 'text-anchor': 'middle', 'dominant-baseline': 'middle'});
      t.textContent = n.label;
      t.setAttribute('class', 'vb-n'); t.setAttribute('data-id', n.id);
      svg.appendChild(t);
      var ring = svgEl('rect', {x: n.x - 6, y: n.y - 6, width: n.w + 12, height: n.h + 12, rx: 14});
      ring.setAttribute('class', 'vb-ring off'); ring.setAttribute('data-ring', n.id);
      svg.appendChild(ring);
    });
    return svg;
  }
  function setIds(svg, ids, on) {
    svg.querySelectorAll('.vb-n[data-id]').forEach(function (e) {
      if (ids.indexOf(e.getAttribute('data-id')) > -1) e.classList.toggle('off', !on);
    });
  }
  function hideAll(svg) { svg.querySelectorAll('.vb-n').forEach(function (e) { e.classList.add('off'); }); }
  function ringOn(svg, id) {
    svg.querySelectorAll('[data-ring]').forEach(function (r) { r.classList.add('off'); });
    if (id) { var r = svg.querySelector('[data-ring="' + id + '"]'); if (r) r.classList.remove('off'); }
  }

  var BLOCKS = {};

  // whiteboard: animated scene. Props: nodes, arrows, steps [{caption, show[], ring}], title, takeaway.
  BLOCKS['whiteboard'] = function (root, p) {
    var svg = drawGraph(p.nodes, p.arrows || [], p.viewBox);
    var cap = h('p', {class: 'vb-say', 'aria-live': 'polite'});
    var counter = h('span', {class: 'vb-dim'});
    var pos = -1;
    function apply(i) {
      pos = Math.max(-1, Math.min(p.steps.length - 1, i));
      hideAll(svg);
      for (var k = 0; k <= pos; k++) setIds(svg, p.steps[k].show || [], true);
      var cur = p.steps[pos];
      ringOn(svg, cur && cur.ring);
      cap.textContent = cur ? cur.caption : (p.intro || 'Shuru karte hain.');
      counter.textContent = (pos + 1) + ' / ' + p.steps.length;
    }
    var penOn = true;
    var pen = btn('✎ Pen', function () {
      penOn = !penOn;
      svg.querySelectorAll('[data-ring]').forEach(function (r) { r.style.display = penOn ? '' : 'none'; });
    }, true);
    var prev = btn('◀', function () { apply(pos - 1); }, true);
    var next = btn('▶', function () { apply(pos + 1); });
    var again = btn('↺', function () { apply(0); }, true);
    root.append(title(p.title), svg, cap, h('div', {class: 'vb-row'}, [prev, next, pen, again, counter]), takeaway(p.takeaway));
    apply(0);
  };

  // recap-board: shows the previous board in full, then rings today's node on click.
  BLOCKS['recap-board'] = function (root, p) {
    var svg = drawGraph(p.nodes, p.arrows || [], p.viewBox);
    svg.querySelectorAll('.vb-n').forEach(function (e) { e.classList.remove('off'); });
    var go = btn('Aaj ka node dikhao', function () { ringOn(svg, p.today); });
    root.append(title(p.title), h('p', {class: 'vb-note'}, [p.previousLabel || 'Pichli baar ka board.']), svg,
      h('div', {class: 'vb-row'}, [go]), p.say ? h('p', {class: 'vb-say'}, [p.say]) : null);
  };

  // compare-pair: the same list twice. The changed item only lights up on "Dono dekho".
  BLOCKS['compare-pair'] = function (root, p) {
    function col(label, items, mark) {
      return h('div', {class: 'vb-card', style: 'flex:1 1 200px;cursor:default'}, [
        h('div', {class: 'vb-title'}, [label]),
        h('ul', {class: 'vb-list'}, items.map(function (t, i) {
          return h('li', {class: 'vb-li' + (mark && i === p.changed ? ' ' + mark : '')}, [t]);
        }))
      ]);
    }
    var left = col(p.left.label, p.left.items, '');
    var right = col(p.right.label, p.right.items, '');
    var grid = h('div', {class: 'vb-row', style: 'align-items:stretch'}, [left, right]);
    var toggle = btn('Dono dekho', function () {
      var li = right.querySelectorAll('li')[p.changed];
      if (li) li.classList.add('right');
      this.disabled = true;
    });
    root.append(title(p.title), grid, h('div', {class: 'vb-row'}, [toggle]),
      p.why ? h('p', {class: 'vb-note'}, [p.why]) : null, takeaway(p.takeaway));
  };

  // ladder: spine with branches, revealed one by one.
  BLOCKS['ladder'] = function (root, p) {
    var list = h('ul', {class: 'vb-list'});
    var items = p.branches.map(function (t) { return h('li', {class: 'vb-li vb-hidden'}, ['├─ ' + t]); });
    items.forEach(function (li) { list.append(li); });
    var shown = 0;
    var next = btn('Agla branch', function () {
      if (shown < items.length) items[shown++].classList.remove('vb-hidden');
      if (shown >= items.length) this.disabled = true;
    });
    root.append(title(p.title), list, h('div', {class: 'vb-row'}, [next]), takeaway(p.takeaway));
  };

  // definition: anchor line with a red bar, keywords underlined.
  BLOCKS['definition'] = function (root, p) {
    var body = h('p', {});
    var text = p.text || '';
    var keys = (p.keywords || []).filter(Boolean);
    var i = 0;
    while (i < text.length) {
      var hit = null;
      for (var k = 0; k < keys.length; k++) {
        if (text.substr(i, keys[k].length) === keys[k] && (!hit || keys[k].length > hit.length)) hit = keys[k];
      }
      if (hit) { body.append(h('u', {}, [hit])); i += hit.length; }
      else { body.append(text.charAt(i)); i++; }
    }
    root.append(title(p.title), h('div', {class: 'vb-def'}, [body]), p.why ? h('p', {class: 'vb-note'}, [p.why]) : null);
  };

  // worked-example: one example with real numbers, revealed step by step.
  BLOCKS['worked-example'] = function (root, p) {
    var list = h('ol', {class: 'vb-list'});
    var items = p.steps.map(function (s) {
      return h('li', {class: 'vb-li vb-hidden'}, [s.text + (s.value != null ? ' → ' + s.value : '')]);
    });
    items.forEach(function (li) { list.append(li); });
    var shown = 0;
    var next = btn('Agla step', function () {
      if (shown < items.length) items[shown++].classList.remove('vb-hidden');
      if (shown >= items.length) this.disabled = true;
    });
    root.append(title(p.title), h('p', {class: 'vb-note'}, ['Setup: ' + p.setup]), list, h('div', {class: 'vb-row'}, [next]), takeaway(p.takeaway));
  };

  // pause-socho: the learner picks first. Then "The answer is…" plus the why.
  BLOCKS['pause-socho'] = function (root, p) {
    var picked = false;
    var list = h('ul', {class: 'vb-list'});
    var reveal = h('div', {class: 'vb-say vb-hidden'});
    var items = [];
    function pick(i) {
      if (picked) return;
      picked = true;
      var o = p.options[i];
      items.forEach(function (x, j) {
        if (p.options[j].correct) x.classList.add('right');
        else if (j === i) x.classList.add('wrong');
      });
      reveal.classList.remove('vb-hidden');
      reveal.textContent = (o.correct ? 'Sahi. ' : 'Ruko, ye galat hai. ') + (o.why || '');
      reveal.append(h('p', {}, [h('b', {}, ['The answer is… ']), p.answer]));
    }
    p.options.forEach(function (o, i) {
      var li = h('li', {class: 'vb-li', role: 'button', tabindex: '0'}, [o.text]);
      li.addEventListener('click', function () { pick(i); });
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(i); }
      });
      items.push(li);
      list.append(li);
    });
    root.append(title(p.title), h('p', {class: 'vb-say'}, [h('b', {}, ['Ek baar ruk ke socho: ']), p.question]), list, reveal, takeaway(p.takeaway));
  };

  // output-kya-aayega: code stepper. Predict first, then reveal. Errors are narrated and fixed.
  BLOCKS['output-kya-aayega'] = function (root, p) {
    var i = 0;
    var codeBox = h('pre', {class: 'vb-code'});
    var predict = h('input', {type: 'text', placeholder: 'Tumhara andaza', 'aria-label': 'Predict the output'});
    var out = h('div', {class: 'vb-say vb-hidden'});
    function draw() {
      codeBox.textContent = '';
      p.code.forEach(function (line, n) {
        codeBox.append(h('span', {class: n === i ? 'hl' : ''}, [line + '\n']));
      });
      out.classList.add('vb-hidden');
      predict.value = '';
    }
    function reveal() {
      var s = p.steps[i] || {};
      out.classList.remove('vb-hidden');
      out.textContent = s.error
        ? 'Error aa raha hai, dekho kyun: ' + s.error + '\nFix: ' + s.fix
        : 'output: ' + (s.output != null ? s.output : '');
    }
    var prev = btn('◀', function () { i = Math.max(0, i - 1); draw(); }, true);
    var nxt = btn('▶', function () { i = Math.min(p.code.length - 1, i + 1); draw(); });
    var rv = btn('Output dikhao', reveal, true);
    draw();
    root.append(title(p.title), codeBox,
      h('p', {class: 'vb-say'}, [h('b', {}, ['output kya aayega? ']), 'Pehle andaza lagao.']),
      predict, h('div', {class: 'vb-row'}, [prev, nxt, rv]), out, takeaway(p.takeaway));
  };

  // yahan-tak-clear: ✓ clear, or ✗ opens a different analogy and a link back.
  BLOCKS['yahan-tak-clear'] = function (root, p) {
    var msg = h('div', {class: 'vb-say vb-hidden', 'aria-live': 'polite'});
    var yes = btn('✓ Clear hai', function () {
      msg.classList.remove('vb-hidden');
      msg.textContent = 'Theek hai. Agla part.';
    });
    var no = btn('✗ Clear nahi', function () {
      msg.classList.remove('vb-hidden');
      msg.textContent = p.explainAgain || 'Koi baat nahi. Is section ko ek baar aur dekho.';
      if (p.revisit && !msg.querySelector('a')) {
        msg.append(h('br'), h('a', {href: p.revisit}, ['Is section pe wapas jao']));
      }
    }, true);
    root.append(title(p.title || 'Yahan tak clear hai?'), h('div', {class: 'vb-row'}, [yes, no]), msg);
  };

  // khud-ko-samjhao: explain back in 3–4 lines, then copy to Virus for grading in chat.
  BLOCKS['khud-ko-samjhao'] = function (root, p) {
    var ta = h('textarea', {class: 'vb-ta', 'aria-label': 'Apne shabdon mein likho'});
    var msg = h('p', {class: 'vb-note', 'aria-live': 'polite'});
    var copy = btn('Virus ko copy karo', function () {
      copyText('Maine ye samjha:\n' + ta.value + '\n\nMujhe feedback do.', ta, msg);
    });
    root.append(title(p.title), h('p', {class: 'vb-say'}, [h('b', {}, ['khud ko samjhao: ']), p.prompt]),
      ta, h('div', {class: 'vb-row'}, [copy]), msg);
  };

  // hint-ladder: hint 1, then hint 2, then the solution unlocks last.
  BLOCKS['hint-ladder'] = function (root, p) {
    var shown = 0;
    var box = h('div', {class: 'vb-list'});
    var sol = btn('Solution dekho', function () {
      box.append(h('div', {class: 'vb-li vb-fade'}, ['Solution: ' + p.solution]));
      this.disabled = true;
    }, true);
    sol.disabled = true;
    var hintBtn = btn('Hint lo', function () {
      if (shown < p.hints.length) {
        box.append(h('div', {class: 'vb-li vb-fade'}, ['Hint ' + (shown + 1) + ': ' + p.hints[shown]]));
        shown++;
      }
      if (shown >= p.hints.length) { this.disabled = true; sol.disabled = false; }
    });
    root.append(title(p.title), h('p', {class: 'vb-say'}, [p.task]),
      h('p', {class: 'vb-note'}, ['Poora solution mat dekho, pehle hint lo.']),
      h('div', {class: 'vb-row'}, [hintBtn, sol]), box);
  };

  // revision-cards: flip on click or Enter. Fronts are learner-voice questions.
  BLOCKS['revision-cards'] = function (root, p) {
    var grid = h('div', {class: 'vb-row', style: 'align-items:stretch'});
    p.cards.forEach(function (c) {
      var card = h('div', {class: 'vb-card vb-flip', tabindex: '0', role: 'button', 'aria-label': 'Flip card', style: 'flex:1 1 220px'}, [
        h('div', {class: 'vb-face vb-front'}, [c.front]),
        h('div', {class: 'vb-face vb-back'}, [c.back, c.example ? h('p', {class: 'vb-note'}, ['Example: ' + c.example]) : null])
      ]);
      function flip() { card.classList.toggle('flipped'); }
      card.addEventListener('click', flip);
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
      });
      grid.append(card);
    });
    root.append(title(p.title || 'Quick revision'), grid);
  };

  // sandbox: a slider changes the board live. rows [{upto, text}]: first row where value <= upto wins.
  BLOCKS['sandbox'] = function (root, p) {
    var range = h('input', {type: 'range', class: 'vb-range', min: p.min, max: p.max, value: p.value, 'aria-label': p.label});
    var out = h('p', {class: 'vb-say', 'aria-live': 'polite'});
    function update() {
      var v = +range.value;
      var text = p.rows[p.rows.length - 1].text;
      for (var i = 0; i < p.rows.length; i++) {
        if (v <= p.rows[i].upto) { text = p.rows[i].text; break; }
      }
      out.textContent = p.label + ': ' + v + ' → ' + text;
    }
    range.addEventListener('input', update);
    update();
    root.append(title(p.title), range, out, p.try ? h('p', {class: 'vb-note'}, [p.try]) : null, takeaway(p.takeaway));
  };

  // padh-ke-dekho: dense prompt or code, expandable.
  BLOCKS['padh-ke-dekho'] = function (root, p) {
    var d = h('details', {class: 'vb-card', style: 'cursor:default'}, [
      h('summary', {}, [p.summary || 'Video pause karke padhna zaroor']),
      h('pre', {class: 'vb-code'}, [p.body])
    ]);
    root.append(title(p.title), d);
  };

  // kis-side-mein: classify each term. Wrong picks say why.
  BLOCKS['kis-side-mein'] = function (root, p) {
    var list = h('ul', {class: 'vb-list'});
    var msg = h('p', {class: 'vb-note', 'aria-live': 'polite'});
    p.items.forEach(function (it) {
      var li = h('li', {class: 'vb-li'}, [h('div', {}, [it.term])]);
      var row = h('div', {class: 'vb-row'});
      p.sides.forEach(function (side) {
        var b = btn(side, function () {
          var right = side === it.side;
          li.classList.add(right ? 'right' : 'wrong');
          msg.textContent = (right ? 'Sahi. ' : 'Galat side. ') + (it.why || '');
          row.querySelectorAll('button').forEach(function (x) { x.disabled = true; });
        }, true);
        row.append(b);
      });
      li.append(row);
      list.append(li);
    });
    root.append(title(p.title || 'Kis side mein aayega?'), list, msg);
  };

  // homework: one extend-what-we-built task. Hint on request.
  BLOCKS['homework'] = function (root, p) {
    var hint = h('p', {class: 'vb-note vb-hidden'}, [p.hint || '']);
    var hb = btn('Hint', function () { hint.classList.remove('vb-hidden'); }, true);
    root.append(title(p.title || 'Ek chhota sa homework'), h('p', {class: 'vb-say'}, [p.task]),
      h('div', {class: 'vb-row'}, [hb]), hint);
  };

  // ask-virus: copy a ready follow-up prompt for Claude Code.
  BLOCKS['ask-virus'] = function (root, p) {
    var msg = h('p', {class: 'vb-note', 'aria-live': 'polite'});
    var area = h('textarea', {class: 'vb-ta vb-hidden', readonly: 'readonly', 'aria-label': 'Prompt'});
    area.value = p.prompt;
    var b = btn(p.label || 'Prompt copy karo', function () { copyText(p.prompt, area, msg); });
    root.append(title(p.title), h('div', {class: 'vb-row'}, [b]), msg, area);
  };

  function mountOne(el) {
    if (el.getAttribute('data-mounted') === '1') return;
    var name = el.getAttribute('data-block');
    var fn = BLOCKS[name];
    if (!fn) { el.append(h('p', {class: 'vb-note'}, ['Block "' + name + '" abhi nahi hai.'])); return; }
    var script = el.querySelector('script[type="application/json"]');
    var props;
    try { props = script ? JSON.parse(script.textContent) : {}; }
    catch (e) { el.append(h('p', {class: 'vb-note'}, ['Block ka data theek nahi hai.'])); return; }
    el.classList.add('vb');
    if (script) script.remove();
    try { fn(el, props); el.setAttribute('data-mounted', '1'); }
    catch (e) { el.append(h('p', {class: 'vb-note'}, ['Block load nahi hua.'])); }
  }
  function mount(root) {
    (root || document).querySelectorAll('[data-block]').forEach(mountOne);
  }
  window.VirusBlocks = {mount: mount, names: Object.keys(BLOCKS)};
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { mount(); });
  else mount();
})();
