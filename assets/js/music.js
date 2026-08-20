/* UI · Musik latar (loop, on/off, volume). Butuh: elemen #bg-audio/#bMusic/#musicVol */

/* ============================================================
   MUSIC — musik latar (loop, on/off, volume default 30%)
   ============================================================ */
const Music = (function(){
  const audio  = document.getElementById('bg-audio');
  const btn    = document.getElementById('bMusic');
  const slider = document.getElementById('musicVol');
  if (!audio) return { toggle(){return false;}, play(){}, pause(){}, arm(){}, isEnabled(){return false;}, updateBtn(){} };

  /* default ON; hormati preferensi tersimpan */
  let enabled = localStorage.getItem('sirah:music') !== '0';
  let vol = parseFloat(localStorage.getItem('sirah:musicVol'));
  if (isNaN(vol)) vol = 0.30;                 // volume default 30%
  vol = Math.max(0, Math.min(1, vol));

  audio.loop = true;
  audio.volume = vol;
  if (slider) slider.value = Math.round(vol * 100);

  function tryPlay(){
    if (!enabled) return;
    const p = audio.play();
    if (p && p.catch) p.catch(()=>{ /* diblokir autoplay — tunggu gestur */ });
  }

  /* mulai pada gestur pengguna pertama bila autoplay diblokir */
  function arm(){
    const kick = ()=>{ if (enabled && audio.paused) tryPlay(); };
    ['pointerdown','keydown','touchstart'].forEach(ev =>
      document.addEventListener(ev, kick, { passive:true }));
  }

  function play(){  enabled = true;  save(); tryPlay();      updateBtn(); }
  function pause(){ enabled = false; save(); audio.pause();  updateBtn(); }
  function toggle(){ enabled ? pause() : play(); return enabled; }

  function setVolume(v){
    vol = Math.max(0, Math.min(1, v));
    audio.volume = vol;
    localStorage.setItem('sirah:musicVol', vol.toFixed(2));
    if (slider) slider.value = Math.round(vol * 100);
    /* geser slider dari nol = anggap ingin mendengar musik */
    if (vol > 0 && !enabled) play();
  }

  function save(){ localStorage.setItem('sirah:music', enabled ? '1' : '0'); }

  function updateBtn(){
    if (!btn) return;
    btn.classList.toggle('off', !enabled);
    const label = enabled ? 'Matikan musik latar' : 'Hidupkan musik latar';
    btn.setAttribute('aria-label', label);
    btn.title = label;
  }

  return { toggle, play, pause, setVolume, isEnabled:()=>enabled, updateBtn, arm };
})();
