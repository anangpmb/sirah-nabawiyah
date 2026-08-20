/* UI · Logika i18n & tema. Butuh: I18N, CH_META_EN (data/strings.js) */

let currentLang = localStorage.getItem('sirah:lang') || 'id';
let t = () => I18N[currentLang];

function applyI18n(){
  const T = t();
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.dataset.i18n;
    if(T[k] !== undefined) el.innerHTML = T[k];
  });
  document.documentElement.lang = currentLang;
  const bLang = document.getElementById('bLang');
  if(bLang) bLang.textContent = currentLang.toUpperCase();
  const bHome = document.getElementById('bHome');
  if(bHome && T.mainMenu){ bHome.title = T.mainMenu; bHome.setAttribute('aria-label', T.mainMenu); }
}

function toggleLang(){
  currentLang = currentLang === 'id' ? 'en' : 'id';
  localStorage.setItem('sirah:lang', currentLang);
  applyI18n();
  // re-render current node with new lang strings
  if(typeof render === 'function') render();
  if(typeof buildRail === 'function') buildRail();
  if(typeof syncRail === 'function') syncRail();
}

function toggleTheme(){
  const html = document.documentElement;
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = next;
  localStorage.setItem('sirah:theme', next);
  const btn = document.getElementById('bTheme');
  if(btn) btn.textContent = next === 'dark' ? '◑' : '○';
}

/* restore saved theme */
(function(){
  const saved = localStorage.getItem('sirah:theme');
  if(saved) document.documentElement.dataset.theme = saved;
})();
