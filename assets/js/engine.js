/* APP · Mesin naratif: render, navigasi, panel, bootstrap. */
/* Butuh: CH, CH_TRANSLATIONS, CH_META_EN, I18N/t, Scene, TTS, Music, i18n funcs */

/* ============================================================
   ENGINE — alur naratif, percabangan, rujukan, navigasi
   ============================================================ */
(function(){
const $ = id => document.getElementById(id);
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

const el = {
  rail:$('rail'), kick:$('kick'), ttl:$('ttl'), yrs:$('yrs'),
  plate:$('plate'), sp:$('sp'), spn:$('spn'), body:$('body'),
  refs:$('refs'), choices:$('choices'), hint:$('hint'), prog:$('prog').firstElementChild,
  scroll:$('scroll'),
  map:$('shMap'), ref:$('shRef'), mapList:$('mapList'), refList:$('refList'), refSub:$('refSub'),
  select:$('shSelect'), selTitle:$('selTitle'), selSub:$('selSub'), selList:$('selList'),
  intro:$('intro')
};

let ci = 0, ni = 0, hist = [], seen = {}, progress = {}, choiceLog = {};
/* percabangan: hub yang sedang dijelajahi + catatan cabang yang sudah dibuka */
let branchHub = null;      // indeks node pilihan saat kita berada di dalam salah satu cabangnya
let explored = {};         // explored[ci][marker] = true

/* ---------- cerita aktif + penyimpanan per-jalur (localStorage) ---------- */
let activeStory = 'sirah', activeTrack = 'main';
const SAVE_NS = 'sirah:save:';
const slotKey = (s,tk)=> SAVE_NS + s + ':' + tk;
function saveState(){
  try{ localStorage.setItem(slotKey(activeStory,activeTrack),
       JSON.stringify({ci,ni,seen,progress,choiceLog,explored})); }catch(e){}
}
function loadState(s,tk){
  try{ const d=localStorage.getItem(slotKey(s,tk)); return d?JSON.parse(d):null; }catch(e){ return null; }
}
function hasState(s,tk){ const d=loadState(s,tk); return !!(d && (d.ci || d.ni)); }

/* keymap penanda→indeks; dibangun ulang tiap ganti cerita/jalur */
let keymap = [];
function rebuildKeymap(){
  keymap = CH.map(c => { const m = {}; c.nodes.forEach((n,i)=>{ if(n.k) m[n.k]=i; }); return m; });
}
rebuildKeymap();

/* Titik konvergensi sebuah node pilihan: bila SEMUA cabang berakhir dengan
   {j} menuju penanda yang sama SETELAH cabang (pola "converge"), kembalikan
   indeks node lanjutan itu. Kembalikan null bila:
   - cabang malah kembali ke pilihan itu sendiri (pola hub-and-spoke, mis. Bab 13),
   - cabang tidak konvergen, atau
   - cabang linear tanpa {j} (mis. pilihan satu-opsi Bab 11/12).
   Dipakai untuk: (a) mengalihkan ujung cabang kembali ke hub, dan
   (b) memunculkan tombol "Lanjutkan". */
function convergenceOf(ci, qIdx){
  const c = CH[ci]; const q = c.nodes[qIdx];
  if(!q || !q.o || !q.o.length) return null;
  let target = null;
  for(const op of q.o){
    let idx = keymap[ci][op.to];
    if(idx === undefined) return null;
    let guard = 0, found = false;
    while(idx < c.nodes.length && guard++ < 300){
      const nd = c.nodes[idx];
      if(nd.q !== undefined && idx !== qIdx) return null;   // cabang bercabang lagi → jangan intervensi
      if(nd.j !== undefined){
        const jt = keymap[ci][nd.j];
        if(jt === qIdx) return null;                        // sudah kembali ke hub (pola B)
        if(target === null) target = jt;
        else if(target !== jt) return null;                 // cabang tidak konvergen
        found = true; break;
      }
      idx++;
    }
    if(!found) return null;                                 // cabang linear tanpa {j}
  }
  return (target !== undefined) ? target : null;
}

/* ---------- pemuat cerita (multi-kisah) ---------- */
function trackOf(storyKey, trackKey){
  const s = STORIES.find(x=>x.key===storyKey) || STORIES[0];
  const tk = s.tracks.find(x=>x.key===trackKey) || s.tracks[0];
  return { s, tk };
}
/* Ganti dataset cerita aktif (chapters/meta/terjemahan/latar), bangun ulang
   keymap & rail, lalu muat progres tersimpan jalur ini. */
function loadTrack(storyKey, trackKey){
  const { s, tk } = trackOf(storyKey, trackKey);
  activeStory = s.key; activeTrack = tk.key;
  CH = tk.chapters;
  CH_META_EN = tk.metaEn || [];
  CH_TRANSLATIONS = { en: tk.transEn || [] };
  CHAPTER_SCENES = tk.scenes || [];
  rebuildKeymap();
  const saved = loadState(activeStory, activeTrack) || {};
  seen = saved.seen || {}; progress = saved.progress || {};
  choiceLog = saved.choiceLog || {}; explored = saved.explored || {};
  hist = []; branchHub = null;
  buildRail(); syncRail(); syncProgress();
  return saved;
}

/* ---------- rel waktu ---------- */
function buildRail(){
  el.rail.innerHTML = '';
  CH.forEach((c,i)=>{
    const b = document.createElement('button');
    b.className = 'rail-mark';
    b.innerHTML = `<span class="glyph">${c.glyph}</span><span class="yr">${c.yr}</span><span class="ch-prog"></span>`;
    b.title = c.title;
    b.setAttribute('aria-label', `${t().chapPrefix} ${i+1}: ${currentLang === 'en' && CH_META_EN[i] ? CH_META_EN[i].title : c.title}`);
    b.onclick = ()=> goto(i,0);
    el.rail.appendChild(b);
  });
}
function syncRail(){
  [...el.rail.children].forEach((b,i)=>{
    b.classList.toggle('now', i===ci);
    b.classList.toggle('seen', !!seen[i] && i!==ci);
  });
  const now = el.rail.children[ci];
  if(now && now.scrollIntoView) now.scrollIntoView({block:'nearest', behavior: RM?'auto':'smooth'});
}
function syncProgress(){
  [...el.rail.children].forEach((b,i)=>{
    const total = CH[i] ? CH[i].nodes.length : 1;
    const pct = Math.min(Math.round(((progress[i]||0)+1)/total*100), 100);
    const bar = b.querySelector('.ch-prog');
    if(bar) bar.style.width = (seen[i] ? pct : 0) + '%';
  });
}

/* ---------- pembungkus kata untuk animasi ---------- */
function stagger(html){
  let k = 0;
  return String(html).replace(/(<[^>]+>)|([^<\s]+)/g, (m,tag,word)=>{
    if(tag) return tag;
    const d = Math.min(k++ * 13, 620);
    return `<span class="w" style="animation-delay:${d}ms">${word}</span>`;
  });
}
function paint(target, html){
  target.innerHTML = RM ? html : stagger(html);
}

/* ---------- render satu node ---------- */
const ROMAN = ['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII'];

function render(){
  const c = CH[ci], n = c.nodes[ni];
  if(!n) return advanceChapter();

  el.kick.textContent = t().chapPrefix + ' ' + (ROMAN[c.id] || c.id);
  el.ttl.textContent = currentLang === 'en' && CH_META_EN[ci] ? CH_META_EN[ci].title : c.title;
  el.yrs.textContent = currentLang === 'en' && CH_META_EN[ci] ? CH_META_EN[ci].years : c.years;
  if(typeof IllusLayer !== 'undefined') IllusLayer.set(ci);

  el.plate.className = '';
  el.refs.innerHTML = '';
  el.choices.innerHTML = '';
  el.hint.innerHTML = t().hint;
  Scene.rosette(false);

  let speaker = t().spNar, cls = 'sp-nar', html = '';

  /* translation lookup helper */
  const _nt = (typeof CH_TRANSLATIONS!=='undefined' && currentLang==='en' && CH_TRANSLATIONS.en[ci]) ? CH_TRANSLATIONS.en[ci][ni] : null;
  const _e = k => (_nt && _nt[k] !== undefined ? _nt[k] : n[k]);

  if(n.n !== undefined){ html = _e('n'); }
  else if(n.a !== undefined){ speaker=t().spPilgrim; cls='sp-aku'; html = '<em>'+_e('a')+'</em>'; }
  else if(n.r !== undefined){
    speaker = t().spRiwayat + ' · ' + n.r; cls='sp-riw'; html = '”'+_e('x')+'”';
  }
  else if(n.sb !== undefined){
    speaker=t().spNabi; cls='sp-sab'; el.plate.className='plate-sabda';
    html = `<div class=”arabic”>${n.sb}</div><div class=”meaning”>${_e('m')}</div>`;
    Scene.pulse(0.55);
  }
  else if(n.ay !== undefined){
    speaker=t().spFirman; cls='sp-ayt'; el.plate.className='plate-ayat';
    html = `<div class=”arabic”>${n.ay}</div><div class=”meaning”>${_e('m')}</div>`;
    Scene.rosette(true); Scene.pulse(0.95);
  }
  else if(n.c !== undefined){
    speaker=t().spRare; cls='sp-cat'; el.plate.className='plate-catatan';
    html = `<div class=”note-h”>${_e('c')}</div>${_e('x')}`;
    Scene.pulse(0.4);
  }
  else if(n.q !== undefined){
    speaker=t().spChoice; cls='sp-aku'; html = _e('q');
  }
  else if(n.j !== undefined){ return step(); }

  el.spn.textContent = speaker;
  el.sp.className = 'speaker ' + cls;
  paint(el.body, typeof Glossary !== 'undefined' ? Glossary.annotate(html) : html);

  /* rujukan */
  const chips = [];
  if(n.s){
    const isQ = /^QS/.test(n.s);
    chips.push(`<span class="ref${isQ?' q':''}">${n.s}</span>`);
    if(n.g) chips.push(`<span class="grade g-${n.g}">${n.g}</span>`);
    if(n.note) chips.push(`<span class="ref" style="border-color:rgba(226,160,92,.35);color:#E2A05C">${n.note}</span>`);
  }
  el.refs.innerHTML = chips.join('');

  /* pilihan */
  if(n.o){
    el.hint.innerHTML = t().hintChoose;
    const done = m => !!(explored[ci] && m && explored[ci][m]);
    n.o.forEach((op,i)=>{
      const b = document.createElement('button');
      b.className = 'choice' + (done(op.to) ? ' done' : '');
      const lbl = (_nt && _nt.o && _nt.o[i]) ? _nt.o[i] : op.l;
      b.innerHTML = `<span class="q">${done(op.to) ? '✓' : (i+1)}</span><span class="lbl">${lbl}</span>`;
      b.onclick = ev => { ev.stopPropagation(); pick(op); };
      el.choices.appendChild(b);
    });
    /* tombol "Lanjutkan" — muncul setelah minimal satu cabang dijelajahi,
       hanya pada pilihan bertipe konvergen (bukan hub-and-spoke). */
    const conv = convergenceOf(ci, ni);
    if(conv !== null && n.o.some(op=>done(op.to))){
      const cont = document.createElement('button');
      cont.className = 'choice continue';
      cont.innerHTML = `<span class="q">→</span><span class="lbl">${t().continueStory}</span>`;
      cont.onclick = ev => { ev.stopPropagation(); hist.push([ci,ni]); branchHub = null; ni = conv; render(); };
      el.choices.appendChild(cont);
    }
  }

  if(el.scroll) el.scroll.scrollTop = 0;
  TTS.speak(n, _nt, step);
  el.prog.style.width = Math.round(((ni+1)/c.nodes.length)*100) + '%';
  progress[ci] = Math.max(progress[ci]||0, ni);
  seen[ci] = true; syncRail(); syncProgress(); saveState();
}

function pick(op){
  hist.push([ci,ni]);
  branchHub = ni;                                        // hub yang cabangnya sedang dibuka
  (explored[ci] = explored[ci] || {})[op.to] = true;    // tandai cabang ini sudah dijelajahi
  /* track choice for re-path UI */
  if(!choiceLog[ci]) choiceLog[ci]=[];
  if(!choiceLog[ci].some(e=>e.ni===ni)){
    const node = CH[ci].nodes[ni];
    choiceLog[ci].push({ni, chosen:op.to, chosenLabel:op.l, options:node?node.o:[]});
  }
  const to = keymap[ci][op.to];
  ni = (to===undefined) ? ni+1 : to;
  render();
}

function step(){
  const c = CH[ci], n = c.nodes[ni];
  if(n && n.o) return;
  if(n && n.j !== undefined){
    const jt = keymap[ci][n.j];
    hist.push([ci,ni]);
    /* Bila kita berada di dalam sebuah cabang dari pilihan konvergen, ujung
       cabang mengembalikan kita ke pilihannya (bukan melompat maju) agar
       cabang lain bisa dijelajahi lebih dulu. */
    if(branchHub !== null){
      const conv = convergenceOf(ci, branchHub);
      if(conv !== null && jt === conv){
        ni = branchHub;
        branchHub = null;
        return render();
      }
    }
    ni = (jt===undefined) ? ni+1 : jt;
    return render();
  }
  hist.push([ci,ni]);
  ni++;
  if(ni >= c.nodes.length) return advanceChapter();
  render();
}

function back(){
  TTS.stop();
  const h = hist.pop();
  if(!h) return;
  const chg = h[0] !== ci;
  ci = h[0]; ni = h[1];
  if(chg){ Scene.mood(CH[ci].id); Scene.setScene(ci); Scene.reform(); }
  render();
}

function advanceChapter(){
  if(ci >= CH.length-1){ ni = CH[ci].nodes.length-1; return render(); }
  goto(ci+1, 0);
}

function goto(i, j){
  hist.push([ci,ni]);
  branchHub = null;
  ci = i; ni = j||0;
  Scene.mood(CH[ci].id);
  Scene.setScene(ci);
  Scene.reform();
  closeSheets();
  render();
}

/* ---------- panel ---------- */
function closeSheets(){ el.map.classList.remove('on'); el.ref.classList.remove('on'); if(el.select) el.select.classList.remove('on'); }

function openMap(){
  el.mapList.innerHTML = '';

  /* ── nav bar ── */
  const nav = document.createElement('div');
  nav.className = 'map-nav';
  const home = document.createElement('button');
  home.className = 'map-nav-b';
  home.innerHTML = '↤ ' + t().mainMenu;
  home.onclick = () => showIntro();
  nav.appendChild(home);
  const st = STORIES.find(x => x.key === activeStory);
  if(st && st.tracks.length > 1){
    const lbl = document.createElement('span');
    lbl.className = 'map-nav-lbl';
    lbl.textContent = t().changeFigure;
    nav.appendChild(lbl);
    st.tracks.forEach(tk => {
      const b = document.createElement('button');
      b.className = 'map-nav-b' + (tk.key === activeTrack ? ' active' : '');
      b.textContent = currentLang === 'en' ? (tk.nameEn || tk.name) : tk.name;
      b.onclick = () => startStory(activeStory, tk.key);
      nav.appendChild(b);
    });
  }
  el.mapList.appendChild(nav);

  /* ── SVG Horizontal Timeline Mindmap ── */
  (function(){
    var NS   = 'http://www.w3.org/2000/svg';
    var N    = CH.length;
    var STEP = 132;
    var PAD  = 78;
    var TL_Y = 260;
    var AB_Y = 158;   // above-chapter node center Y
    var BL_Y = 362;   // below-chapter node center Y
    var NR   = 22;    // node fill-circle radius
    var RR   = 29;    // progress ring radius
    var VW   = PAD + (N-1)*STEP + PAD;
    var VH   = 520;

    function mk(tag, attrs, txt){
      var e = document.createElementNS(NS, tag);
      if(attrs) for(var k in attrs) e.setAttribute(k, attrs[k]);
      if(txt !== undefined) e.textContent = txt;
      return e;
    }

    /* extract up to `max` short keyword phrases from a blurb */
    function blurbKws(blurb, max){
      var parts = (blurb||'')
        .replace(/[—–]/g, ', ')
        .split(/[.;,]/)
        .map(function(s){ return s.trim(); })
        .filter(function(s){ return s.length >= 4; });
      var kws = [];
      for(var j = 0; j < parts.length && kws.length < max; j++){
        var p = parts[j];
        if(p.length > 24){
          p = p.split(' ').slice(0, 3).join(' ');
          if(p.length > 28) p = p.split(' ').slice(0, 2).join(' ');
        }
        if(p.length >= 4) kws.push(p);
      }
      return kws.slice(0, max);
    }

    var wrap = document.createElement('div');
    wrap.className = 'mm-horiz-wrap';

    var svg = mk('svg', {
      viewBox: '0 0 '+VW+' '+VH,
      class: 'mm-svg mm-horiz',
      width: VW, height: VH
    });

    var gBg    = mk('g');
    var gLines = mk('g');
    var gKws   = mk('g');
    var gSats  = mk('g');
    var gNodes = mk('g');
    svg.appendChild(gBg);
    svg.appendChild(gLines);
    svg.appendChild(gKws);
    svg.appendChild(gSats);
    svg.appendChild(gNodes);

    /* ── Timeline backbone ── */
    gBg.appendChild(mk('line', {
      class:'mm-tl-line',
      x1: PAD/2, y1: TL_Y,
      x2: VW - PAD/3, y2: TL_Y
    }));
    var ax = VW - PAD/3;
    gBg.appendChild(mk('polygon', {
      class:'mm-tl-arrow',
      points: ax+','+TL_Y+' '+(ax-10)+','+(TL_Y-5)+' '+(ax-10)+','+(TL_Y+5)
    }));

    CH.forEach(function(c, i){
      var x      = PAD + i * STEP;
      var isAbove = (i % 2 === 0);
      var ny     = isAbove ? AB_Y : BL_Y;
      var meta   = currentLang==='en' && CH_META_EN[i] ? CH_META_EN[i] : c;
      var isSeen = !!seen[i];
      var isCurr = (i === ci);
      var total  = c.nodes.length || 1;
      var done   = isSeen ? Math.min(((progress[i]||0)+1)/total, 1) : 0;

      /* tick on timeline */
      gLines.appendChild(mk('line', {
        class:'mm-tl-tick',
        x1:x, y1:TL_Y-6, x2:x, y2:TL_Y+6
      }));

      /* year label — on opposite side from node */
      gLines.appendChild(mk('text', {
        class:'mm-tl-yr',
        x:x, y: isAbove ? TL_Y+20 : TL_Y-12,
        'text-anchor':'middle'
      }, c.yr||'—'));

      /* spoke from timeline to node */
      gLines.appendChild(mk('line', {
        class:'mm-tl-spoke',
        x1:x, y1: isAbove ? TL_Y-4 : TL_Y+4,
        x2:x, y2: isAbove ? ny+NR+3 : ny-NR-3
      }));

      /* ── branch satellites (unchosen paths) ── */
      var log = choiceLog[i];
      if(log && log.length && isSeen){
        var satIdx = 0;
        log.forEach(function(entry){
          if(!entry.options) return;
          entry.options.forEach(function(op){
            if(op.to === entry.chosen) return;
            var phi = (isAbove ? -1 : 1) * (0.55 + satIdx * 0.5);
            var sR  = RR + 22;
            var sx  = x + sR * Math.cos(phi);
            var sy  = ny + sR * Math.sin(phi) * (isAbove ? -1 : 1);
            gLines.appendChild(mk('line',{
              class:'mm-sat-line',
              x1:x + (NR+3)*Math.cos(phi),
              y1:ny + (NR+3)*Math.sin(phi)*(isAbove?-1:1),
              x2:sx, y2:sy
            }));
            var gSat = mk('g', {class:'mm-sat', tabindex:'0'});
            gSat.appendChild(mk('circle', {cx:sx, cy:sy, r:9}));
            gSat.appendChild(mk('text',   {x:sx, y:sy}, '↳'));
            var tNi = keymap[i][op.to] !== undefined ? keymap[i][op.to] : entry.ni+1;
            (function(jumpNi){
              var doJump = function(){
                hist.push([ci,ni]); branchHub=null;
                ci=i; ni=jumpNi;
                Scene.mood(CH[ci].id); Scene.setScene(ci); Scene.reform();
                closeSheets(); render();
              };
              gSat.addEventListener('click',   function(e){ e.stopPropagation(); doJump(); });
              gSat.addEventListener('keydown', function(e){
                if(e.key==='Enter'||e.key===' '){ e.preventDefault(); doJump(); }
              });
            })(tNi);
            gSats.appendChild(gSat);
            satIdx++;
          });
        });
      }

      /* ── chapter node ── */
      var cls = 'mm-node'+(isSeen?' seen':'')+(isCurr?' current':'');
      var g = mk('g', {
        class: cls,
        transform: 'translate('+x+','+ny+')',
        role:'button', tabindex:'0',
        'aria-label':(ROMAN[c.id]||c.id)+' '+meta.title
      });

      g.appendChild(mk('circle', {class:'bg', r:NR}));

      if(done > 0){
        var RC2 = 2*Math.PI*RR;
        g.appendChild(mk('circle', {
          class:'ring', r:RR,
          stroke: isCurr ? 'var(--gold)' : 'rgba(200,160,60,.68)',
          'stroke-dasharray': RC2,
          'stroke-dashoffset': RC2*(1-done),
          transform:'rotate(-90)'
        }));
      }

      g.appendChild(mk('text', {class:'glyph', x:0, y:1}, c.glyph));

      /* title label — between node and edges */
      var title  = meta.title;
      var words  = title.split(' ');
      var line1  = '', line2 = '';
      words.forEach(function(w){
        if((line1+' '+w).trim().length <= 14) line1=(line1+' '+w).trim();
        else line2=(line2+' '+w).trim();
      });
      var lblBaseY = isAbove ? -(NR+9) : (NR+10);
      var lineH    = 11;
      if(!line2){
        g.appendChild(mk('text',{class:'lbl',x:0,y:lblBaseY,'text-anchor':'middle',
          'dominant-baseline': isAbove?'auto':'hanging'},line1));
      } else {
        g.appendChild(mk('text',{class:'lbl',x:0,y:isAbove?lblBaseY-lineH:lblBaseY,
          'text-anchor':'middle','dominant-baseline':isAbove?'auto':'hanging'},line1));
        g.appendChild(mk('text',{class:'lbl',x:0,y:isAbove?lblBaseY:lblBaseY+lineH,
          'text-anchor':'middle','dominant-baseline':isAbove?'auto':'hanging'},line2));
      }

      g.addEventListener('click',   function(){ goto(i, 0); });
      g.addEventListener('keydown', function(e){
        if(e.key==='Enter'||e.key===' '){ e.preventDefault(); goto(i, 0); }
      });
      gNodes.appendChild(g);

      /* ── keyword sub-branches from blurb ── */
      var kws = blurbKws(meta.blurb||c.blurb||'', 3);
      kws.forEach(function(kw, ki){
        var spread = ki - (kws.length - 1) / 2;
        var kwX = x + spread * 54;
        var kwY, ly1;
        if(isAbove){
          kwY = AB_Y - NR - 30 - ki * 16;
          ly1 = ny - NR;
        } else {
          kwY = BL_Y + NR + 26 + ki * 16;
          ly1 = ny + NR;
        }
        gLines.appendChild(mk('line',{
          class:'mm-kw-line',
          x1:x, y1:ly1, x2:kwX, y2:kwY+(isAbove?5:-5)
        }));
        gKws.appendChild(mk('text',{
          class:'mm-kw',
          x:kwX, y:kwY,
          'text-anchor':'middle',
          'dominant-baseline': isAbove?'auto':'hanging'
        }, kw));
      });
    });

    wrap.appendChild(svg);
    el.mapList.appendChild(wrap);
  })();

  /* ── alternate-path branch list below mindmap ── */
  var anyAlt = false;
  var bWrap  = document.createElement('div');
  bWrap.className = 'mm-branches';
  var bHead = document.createElement('h3');
  bHead.textContent = currentLang==='en' ? 'Alternate Paths' : 'Jalur Lain';
  bWrap.appendChild(bHead);

  CH.forEach(function(c, i){
    var log = choiceLog[i];
    if(!log || !log.length || !seen[i]) return;
    log.forEach(function(entry){
      if(!entry.options || !entry.options.length) return;
      var hasAlt = entry.options.some(function(op){ return op.to !== entry.chosen; });
      if(!hasAlt) return;
      anyAlt = true;
      var node = c.nodes[entry.ni];
      var transNode = (currentLang==='en' && typeof CH_TRANSLATIONS!=='undefined'
        && CH_TRANSLATIONS.en && CH_TRANSLATIONS.en[i]) ? CH_TRANSLATIONS.en[i][entry.ni] : null;
      var rawQ = (transNode && transNode.q) ? transNode.q : (node && node.q ? node.q : '');
      var qText = rawQ.replace(/<[^>]+>/g,'').slice(0,88);
      var meta = currentLang==='en' && CH_META_EN[i] ? CH_META_EN[i] : c;

      var qEl = document.createElement('div');
      qEl.className = 'ch-branch-q';
      qEl.textContent = (ROMAN[c.id]||c.id)+' · '+(meta.title||'').slice(0,18)+' — '+qText;
      bWrap.appendChild(qEl);

      var optsEl = document.createElement('div');
      optsEl.className = 'ch-branch-opts';
      entry.options.forEach(function(op, oi){
        var taken = op.to === entry.chosen;
        var lbl = (transNode && transNode.o && transNode.o[oi]) ? transNode.o[oi] : op.l;
        if(taken){
          var sp = document.createElement('span');
          sp.className = 'branch-opt taken';
          sp.innerHTML = '<span class="bfx">✓</span>' + lbl;
          optsEl.appendChild(sp);
        } else {
          var bt = document.createElement('button');
          bt.className = 'branch-opt alt';
          bt.innerHTML = '<span class="bfx">↳</span>' + lbl;
          var tNi = keymap[i][op.to] !== undefined ? keymap[i][op.to] : entry.ni+1;
          (function(jumpNi){
            bt.onclick = function(){
              hist.push([ci,ni]); branchHub=null;
              ci=i; ni=jumpNi;
              Scene.mood(CH[ci].id); Scene.setScene(ci); Scene.reform();
              closeSheets(); render();
            };
          })(tNi);
          optsEl.appendChild(bt);
        }
      });
      bWrap.appendChild(optsEl);
    });
  });

  if(anyAlt) el.mapList.appendChild(bWrap);

  el.map.classList.add('on');
}

function openRefs(){
  const c = CH[ci];
  el.refSub.textContent = `${t().chapPrefix} ${ROMAN[c.id]||c.id} · ${currentLang === 'en' && CH_META_EN[ci] ? CH_META_EN[ci].title : c.title} · ${currentLang === 'en' && CH_META_EN[ci] ? CH_META_EN[ci].years : c.years}`;
  const out = [], done = new Set();
  c.nodes.forEach(n=>{
    if(!n.s || done.has(n.s + (n.m||n.x||n.n||''))) return;
    done.add(n.s + (n.m||n.x||n.n||''));
    let ctx = n.m || n.x || (n.n||'').replace(/<[^>]+>/g,'');
    if(ctx.length > 190) ctx = ctx.slice(0,190) + '…';
    const gr = n.g ? ` <span class="grade g-${n.g}" style="margin-left:6px">${n.g}</span>` : '';
    out.push(`<div class="rf"><div class="src">${n.s}${gr}</div><div class="ctx">${ctx}</div></div>`);
  });
  el.refList.innerHTML = out.length ? out.join('') :
    '<p class="small">' + t().refEmpty + '</p>';
  el.ref.classList.add('on');
}

/* ---------- kendali ---------- */
el.plate.onclick = e => { if(e.target.closest('.ctl-b')) return; step(); };
$('bBack').onclick = e => { e.stopPropagation(); back(); };
$('bMap').onclick  = e => { e.stopPropagation(); openMap(); };
$('bRef').onclick  = e => { e.stopPropagation(); openRefs(); };
document.querySelectorAll('[data-close]').forEach(b => b.onclick = closeSheets);
[el.map, el.ref, el.select].forEach(s => s.onclick = e => { if(e.target===s) closeSheets(); });

addEventListener('keydown', e=>{
  if(el.intro && !el.intro.classList.contains('off')) {
    if(el.select.classList.contains('on')){        // pemilih tokoh terbuka di atas menu
      if(e.key==='Escape') closeSheets();
      return;
    }
    if(e.key===' '||e.key==='Enter'){ e.preventDefault(); startStory('sirah','main'); }
    return;
  }
  if(e.key==='Escape') return closeSheets();
  if(el.map.classList.contains('on') || el.ref.classList.contains('on') || el.select.classList.contains('on')) return;
  if(e.key===' '||e.key==='Enter'||e.key==='ArrowRight'){ e.preventDefault(); step(); }
  else if(e.key==='ArrowLeft'){ e.preventDefault(); back(); }
  else if(e.key==='m'||e.key==='M'){ openMap(); }
  else if(e.key==='r'||e.key==='R'){ openRefs(); }
  else if(/^[1-9]$/.test(e.key)){
    const b = el.choices.children[+e.key-1]; if(b) b.click();
  }
});

/* geser di layar sentuh untuk mundur */
let tx=0;
el.plate.addEventListener('touchstart', e=>{ tx = e.changedTouches[0].clientX; }, {passive:true});
el.plate.addEventListener('touchend', e=>{
  const d = e.changedTouches[0].clientX - tx;
  if(d > 70) back();
}, {passive:true});

/* ---------- mulai / menu ---------- */
function begin(chapter, node){
  el.intro.classList.add('off');
  setTimeout(()=>{ if(el.intro.classList.contains('off')) el.intro.style.display='none'; }, 950);
  branchHub = null;
  ci = chapter||0; ni = node||0;
  Scene.mood(CH[ci].id);
  Scene.setScene(ci);
  render();
}
function showIntro(){
  TTS.stop();
  closeSheets();
  el.intro.style.display = '';
  requestAnimationFrame(()=> el.intro.classList.remove('off'));
}
/* muat dataset jalur, lalu mulai (melanjutkan bila ada progres tersimpan) */
function startStory(storyKey, trackKey){
  const saved = loadTrack(storyKey, trackKey);
  closeSheets();
  begin(saved.ci || 0, saved.ni || 0);
}
/* pemilih tokoh untuk cerita berjalur banyak (mis. Empat Khalifah) */
function openStorySelect(storyKey){
  const s = STORIES.find(x => x.key === storyKey);
  if(!s) return;
  if(s.single) return startStory(storyKey, s.tracks[0].key);
  el.selTitle.textContent = currentLang === 'en' ? s.titleEn : s.title;
  el.selSub.innerHTML     = currentLang === 'en' ? s.ledeEn : s.lede;
  el.selList.innerHTML = '';
  s.tracks.forEach(tk => {
    const b = document.createElement('button');
    b.className = 'ch-row';
    const nm   = currentLang === 'en' ? (tk.nameEn || tk.name) : tk.name;
    const bl   = currentLang === 'en' ? (tk.blurbEn || tk.blurb || '') : (tk.blurb || '');
    const pill = hasState(storyKey, tk.key) ? ` <span class="pill">${t().resumePill}</span>` : '';
    b.innerHTML = `<span class="n gl">${tk.glyph||''}</span><span class="col"><span class="t">${nm}${pill}</span><div class="d">${bl}</div></span>`;
    b.onclick = () => startStory(storyKey, tk.key);
    el.selList.appendChild(b);
  });
  closeSheets();
  el.select.classList.add('on');
}

Scene.start();
if(typeof Glossary !== 'undefined') Glossary.initTooltip();

$('start').onclick        = ()=> startStory('sirah','main');
$('startKhulafa').onclick = ()=> openStorySelect('khulafa');

$('bHome').onclick                        = e => { e.stopPropagation(); showIntro(); };
document.getElementById('bLang').onclick  = e => { e.stopPropagation(); toggleLang(); };
document.getElementById('bTheme').onclick = e => { e.stopPropagation(); toggleTheme(); };
document.getElementById('bTts').onclick   = e => { e.stopPropagation(); TTS.toggle(); };
TTS.updateBtn();

/* ---------- musik latar ---------- */
document.getElementById('bMusic').onclick = e => { e.stopPropagation(); Music.toggle(); };
(function(){
  const slider = document.getElementById('musicVol');
  if (slider){
    slider.addEventListener('input',      e => { e.stopPropagation(); Music.setVolume(e.target.value / 100); });
    slider.addEventListener('pointerdown', e => e.stopPropagation());
    slider.addEventListener('click',       e => e.stopPropagation());
  }
})();
Music.updateBtn();
Music.arm();   // mulai pada gestur pengguna pertama bila autoplay diblokir

/* dataset default = Sirah (rail siap di belakang layar menu) */
loadTrack('sirah','main');
applyI18n();  // apply on first load
})();
