/* UI · Narasi Web Speech API. Butuh: currentLang, t (i18n.js) */

/* ============================================================
   TTS — Web Speech API narasi otomatis
   Membaca terjemahan/makna; melewati teks Arab asli.
   ============================================================ */
const TTS = (function(){
  const synth = window.speechSynthesis;
  if (!synth) return { speak(){}, toggle(){return false;}, stop(){}, isEnabled(){return false;}, updateBtn(){} };

  let enabled = localStorage.getItem('sirah:tts') === '1';
  let voices = [];

  function loadVoices(){
    voices = synth.getVoices();
  }
  loadVoices();
  if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = loadVoices;

  function pickVoice(){
    return voices.find(v => v.lang === 'id-ID') ||
           voices.find(v => v.lang.startsWith('id')) ||
           voices.find(v => v.lang.startsWith('ms')) ||
           voices[0] || null;
  }

  function stripHTML(s){
    const d = document.createElement('div');
    d.innerHTML = String(s);
    return (d.textContent || d.innerText || '')
      .replace(/ﷺ/g, ', sallallahu alaihi wasallam,')
      .replace(/[^\S\n]+/g, ' ')
      .trim();
  }

  function getReadable(n, nt){
    const f = k => (nt && nt[k] !== undefined ? nt[k] : n[k]);
    if (n.j !== undefined) return null;
    if (n.n !== undefined) return stripHTML(f('n'));
    if (n.a !== undefined) return stripHTML(f('a'));
    if (n.r !== undefined) return stripHTML(f('x'));
    if (n.sb !== undefined) return stripHTML(f('m'));
    if (n.ay !== undefined) return stripHTML(f('m'));
    if (n.c !== undefined)  return stripHTML(f('c')) + '. ' + stripHTML(f('x'));
    if (n.q !== undefined)  return stripHTML(f('q'));
    return null;
  }

  function isChoiceNode(n){ return !!(n.q || n.o); }

  function speak(n, transNode, advanceFn){
    if (!enabled) return;
    synth.cancel();
    const text = getReadable(n, transNode);
    if (!text) {
      if (!isChoiceNode(n) && advanceFn) setTimeout(advanceFn, 300);
      return;
    }
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang  = (currentLang === 'en') ? 'en-US' : 'id-ID';
    utt.voice = pickVoice();
    utt.rate  = 0.88;
    utt.pitch = 1.0;
    utt.volume = 1.0;
    utt.onend = () => {
      if (enabled && !isChoiceNode(n) && advanceFn) setTimeout(advanceFn, 700);
    };
    utt.onerror = () => {
      if (enabled && !isChoiceNode(n) && advanceFn) setTimeout(advanceFn, 400);
    };
    synth.speak(utt);
  }

  function stop(){ synth.cancel(); }

  function toggle(){
    enabled = !enabled;
    localStorage.setItem('sirah:tts', enabled ? '1' : '0');
    if (!enabled) synth.cancel();
    updateBtn();
    return enabled;
  }

  function updateBtn(){
    const btn = document.getElementById('bTts');
    if (!btn) return;
    btn.textContent = enabled ? '⏸' : '▶';
    btn.setAttribute('aria-label', enabled ? 'Matikan narasi' : 'Aktifkan narasi');
    btn.title = enabled ? 'Matikan narasi' : 'Aktifkan narasi';
  }

  return { speak, toggle, stop, isEnabled:()=>enabled, updateBtn };
})();
