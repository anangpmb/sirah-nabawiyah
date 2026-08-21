'use strict';
/* Glossary — annotates unfamiliar terms in narrative HTML
   Glossary.annotate(html)  → returns HTML with <span class="gls"> wrappers
   Glossary.initTooltip()   → sets up the floating tooltip behaviour */

var Glossary = (function(){

  /* term → [definisi Indonesia, English definition]
     Keys are matched case-insensitively, word-boundary-aware.
     Sort by length desc so longer matches (e.g. "ahlul kitab") win over sub-terms. */
  var TERMS = {
    /* ── Kata Ganti & Gelar ── */
    'beliau'       : ['Kata ganti orang ketiga penghormatan dalam Sirah ini selalu merujuk kepada Rasulullah ﷺ, kecuali disebutkan nama tokoh lain sebelumnya', 'In this Sirah, the honorific third-person pronoun always refers to the Prophet ﷺ unless another person was explicitly named before it'],

    /* ── Sosial & Suku ── */
    'kabilah'      : ['Klan atau suku Arab yang diikat oleh garis keturunan bersama; unit sosial terkecil sebelum negara', 'An Arab tribe or clan bound by common lineage — the primary social unit of pre-Islamic Arabia'],
    'kafilah'      : ['Rombongan pedagang atau musafir yang bepergian bersama melintasi gurun untuk keamanan', 'A merchant or travel caravan crossing the desert together for mutual safety'],
    'badui'        : ['Suku-suku Arab nomaden yang hidup di padang pasir, berpindah mengikuti sumber air dan padang rumput', 'Nomadic Arab tribes living in the desert, moving seasonally to follow water and pasture'],
    'mawla'        : ['Bekas budak yang telah dimerdekakan dan kini menjadi anggota suku pelindungnya dengan hak-hak tertentu', 'A freed slave who became a client member of their patron\'s tribe with certain rights and obligations'],
    'syaikh'       : ['Pemimpin kabilah atau tokoh yang dihormati karena usia dan kebijaksanaannya', 'Elder or respected leader of a tribe, honoured for age and wisdom'],
    'Quraysh'      : ['Suku Arab paling berpengaruh di Makkah, penjaga Ka\'bah, dan nenek moyang Rasulullah ﷺ', 'The most powerful Arab tribe of Makkah, custodians of the Ka\'bah, and the Prophet\'s lineage'],
    'Banu Hasyim'  : ['Klan dalam suku Quraysh — klan Rasulullah ﷺ, terkenal dengan kedermawanan dan martabatnya', 'The Hāshimite clan within Quraysh — the Prophet\'s own clan, renowned for generosity and honour'],
    'Aws'          : ['Salah satu dari dua suku utama Madinah (bersama Khazraj) yang menyambut kaum Muhajirin', 'One of the two main Madinan tribes (with Khazraj) who welcomed the Muslim emigrants'],
    'Khazraj'      : ['Suku utama Madinah yang bersama Aws membentuk kelompok Anshar', 'The other main Madinan tribe who, together with Aws, formed the Ansar community'],

    /* ── Kelompok Muslim & Non-Muslim ── */
    'muhajirin'    : ['Kaum Muslim yang berhijrah meninggalkan Makkah menuju Madinah demi mempertahankan iman mereka', 'Muslims who emigrated from Makkah to Madinah, leaving their homes and wealth to preserve their faith'],
    'anshar'       : ['Penduduk Madinah yang memeluk Islam dan menyambut serta menolong kaum Muhajirin', 'Madinan Muslims who embraced Islam and gave refuge and support to the emigrant Muhajirin'],
    'munafikun'    : ['Orang-orang yang berpura-pura beriman di hadapan Muslim namun menyembunyikan penolakan di dalam hati', 'Those who outwardly professed Islam but secretly opposed it — the "hypocrites"'],
    'musyrik'      : ['Penyembah berhala; orang yang menyekutukan Allah dengan sesembahan lain', 'A polytheist or idol-worshipper; one who associates partners with Allah'],
    'kafir'        : ['Orang yang secara sadar menolak keimanan; secara harfiah berarti "yang menutup (kebenaran)"', 'One who consciously rejects faith; literally "one who covers (the truth)"'],
    'ahlul kitab'  : ['Yahudi dan Nasrani — penganut kitab suci yang diturunkan sebelum Al-Qur\'an', 'Jews and Christians — followers of earlier revealed scriptures (the Torah and Gospel)'],
    'muallaf'      : ['Orang yang baru memeluk Islam, atau yang hatinya sedang dijinakkan menuju Islam', 'A new convert to Islam, or one whose heart is being drawn towards it'],

    /* ── Ibadah & Ritual ── */
    'tawaf'        : ['Ritual mengelilingi Ka\'bah sebanyak tujuh kali berlawanan arah jarum jam sebagai bagian dari haji atau umrah', 'The ritual of circumambulating the Ka\'bah seven times counter-clockwise during hajj or umrah'],
    'ihram'        : ['Keadaan suci yang wajib dimasuki sebelum haji atau umrah, ditandai pakaian putih tanpa jahitan untuk laki-laki', 'The sacred state entered before hajj or umrah, marked by simple white unsewn garments for men'],
    'sa\'i'        : ['Ritual berlari-lari kecil tujuh kali antara bukit Safa dan Marwa, mengenang perjuangan Hajar mencari air', 'The ritual of walking seven times between the hills of Safa and Marwa, commemorating Hajar\'s search for water'],
    'wukuf'        : ['Berdiam diri di padang Arafah pada 9 Dzulhijjah — inti dan puncak ibadah haji', 'Standing in the plain of Arafah on 9 Dhul-Hijjah — the central pillar of the hajj'],
    'umrah'        : ['Haji kecil yang dapat dilakukan kapan saja, tidak terikat waktu tertentu seperti haji besar', 'The lesser pilgrimage, performable at any time of year (unlike the annual hajj)'],
    'wudu'         : ['Bersuci dengan air sebelum shalat: membasuh wajah, tangan, kepala, dan kaki', 'Ritual purification with water before prayer — washing the face, arms, head, and feet'],
    'kiblat'       : ['Arah menghadap Ka\'bah di Makkah, yang diwajibkan dalam shalat', 'The direction of the Ka\'bah in Makkah, towards which Muslims face during prayer'],
    'khutbah'      : ['Ceramah atau pidato keagamaan, terutama yang disampaikan pada shalat Jumat', 'A religious sermon or address, especially the address given during Friday prayers'],
    'bay\'at'      : ['Sumpah setia kepada pemimpin; ikrar yang mengikat secara moral dan spiritual', 'A pledge of allegiance to a leader — morally and spiritually binding oath of loyalty'],

    /* ── Perang & Ekspedisi ── */
    'ghazwah'      : ['Ekspedisi militer yang secara langsung dipimpin atau diikuti oleh Rasulullah ﷺ', 'A military expedition directly led by or participated in by the Prophet ﷺ himself'],
    'sariyah'      : ['Ekspedisi militer yang dikirim Rasulullah ﷺ tetapi beliau tidak ikut serta langsung', 'A military expedition dispatched by the Prophet ﷺ without his direct participation'],
    'ghanimah'     : ['Harta rampasan perang yang pembagiannya diatur oleh hukum Islam', 'War spoils whose distribution is regulated by Islamic law'],
    'jizyah'       : ['Pajak perlindungan yang dibayar warga non-Muslim di bawah pemerintahan Islam sebagai pengganti kewajiban militer', 'A protection tax paid by non-Muslim subjects under Islamic governance in lieu of military service'],
    'fidyah'       : ['Tebusan atau kompensasi finansial untuk tidak mampu melaksanakan kewajiban tertentu', 'Financial compensation or ransom paid when unable to fulfil a certain religious obligation'],

    /* ── Tempat Suci ── */
    'hajar aswad'  : ['Batu hitam yang tertanam di sudut Ka\'bah; titik awal dan akhir setiap putaran tawaf', 'The Black Stone set into the corner of the Ka\'bah; the starting and ending point of each tawaf circuit'],
    'maqam ibrahim': ['Batu tempat Nabi Ibrahim as berpijak saat membangun Ka\'bah, kini di dalam Masjidil Haram', 'The stone where Prophet Ibrahim stood while building the Ka\'bah, now preserved inside the Grand Mosque'],
    'zamzam'       : ['Mata air suci di dalam Masjidil Haram yang memancar sejak zaman Hajar, tak pernah kering selama ribuan tahun', 'The sacred well inside the Grand Mosque that sprang up in the time of Hajar and has never run dry'],
    'Masjidil Haram': ['Masjid Agung di Makkah yang mengelilingi Ka\'bah; tempat ibadah terbesar dan tersuci dalam Islam', 'The Grand Mosque in Makkah surrounding the Ka\'bah; the largest and holiest mosque in Islam'],

    /* ── Isra Mi\'raj ── */
    'isra'         : ['Perjalanan malam Rasulullah ﷺ dari Masjidil Haram di Makkah ke Masjidil Aqsha di Yerusalem', 'The Prophet\'s miraculous night journey from the Grand Mosque in Makkah to Al-Aqsa Mosque in Jerusalem'],
    'mi\'raj'      : ['Perjalanan naik Rasulullah ﷺ menembus tujuh lapis langit hingga hadirat Allah, malam yang sama dengan Isra', 'The Prophet\'s miraculous ascent through the seven heavens to the Divine Presence, the same night as the Isra'],
    'buraq'        : ['Makhluk berupa kuda bersayap yang membawa Rasulullah ﷺ dalam perjalanan Isra Mi\'raj', 'The celestial winged creature that carried the Prophet ﷺ during the Isra Mi\'raj journey'],

    /* ── Ilmu Hadis ── */
    'sanad'        : ['Rantai para perawi yang meneruskan hadis dari generasi ke generasi hingga Rasulullah ﷺ', 'The chain of narrators who transmitted a hadith from person to person back to the Prophet ﷺ'],
    'isnad'        : ['Sama dengan sanad — rantai perawi yang menjadi sandaran keaslian sebuah hadis', 'Same as sanad — the chain of transmitters that establishes a hadith\'s authenticity'],
    'shahih'       : ['Hadis yang sanadnya sambung, perawinya adil dan kuat hafalan, tidak janggal, dan tidak tercela', 'A hadith whose chain is unbroken, whose narrators are upright and precise, free from irregularity and defect'],
    'dhaif'        : ['Hadis yang memiliki kelemahan pada sanad atau matan-nya, tidak memenuhi syarat shahih atau hasan', 'A weak hadith — one with a defect in its chain or content that prevents it from meeting authentic standards'],
    'matan'        : ['Isi atau teks dari sebuah hadis, berbeda dari sanad yang merupakan rantai perawinya', 'The content or text body of a hadith, as distinguished from its sanad (chain of narrators)'],
    'rawi'         : ['Perawi atau orang yang meriwayatkan dan meneruskan hadis dari gurunya kepada orang lain', 'A narrator who transmitted and passed on a hadith from their teacher to others'],
    'mutawatir'    : ['Hadis yang diriwayatkan oleh sejumlah besar perawi sehingga mustahil mereka bersepakat untuk berbohong', 'A hadith reported by so many independent narrators that collusion to fabricate it is inconceivable'],

    /* ── Hukum & Kepemimpinan ── */
    'khalifah'     : ['Pemimpin umat Islam setelah wafatnya Rasulullah ﷺ; pengganti beliau dalam urusan pemerintahan (bukan kenabian)', 'The leader of the Muslim community after the Prophet\'s death — successor in governance, not in prophethood'],
    'syura'        : ['Musyawarah; prinsip pemerintahan Islam yang mengharuskan pemimpin berunding dengan para ahli', 'Consultation — the Islamic governance principle requiring leaders to seek counsel from qualified advisors'],
    'ijtihad'      : ['Upaya bersungguh-sungguh seorang ahli hukum Islam untuk menyimpulkan hukum dari Al-Qur\'an dan Sunnah', 'A qualified jurist\'s rigorous effort to derive a legal ruling from the Quran and Sunnah'],
    'fatwa'        : ['Pendapat hukum resmi yang dikeluarkan oleh seorang ulama yang berkompeten', 'An official legal opinion issued by a qualified Islamic scholar'],
    'qisas'        : ['Hukum balas setimpal dalam Islam; hak korban atau keluarganya atas pembalasan yang setara', 'The principle of equal retaliation in Islamic law; the victim\'s or family\'s right to equivalent redress'],
    'diyat'        : ['Denda atau kompensasi finansial yang dibayarkan kepada korban atau keluarganya sebagai pengganti qisas', 'Blood money — financial compensation paid to the victim or family as an alternative to qisas'],

    /* ── Konsep Teologi & Umum ── */
    'wahyu'        : ['Firman Allah yang diturunkan kepada Nabi-Nya; proses penyampaian pesan ilahi', 'Divine revelation — the transmission of God\'s words and guidance to His Prophet'],
    'nubuwah'      : ['Kenabian; jabatan atau kondisi menjadi nabi yang diutus oleh Allah', 'Prophethood — the office or condition of being a prophet chosen and sent by Allah'],
    'risalah'      : ['Kerasulan; misi seorang rasul untuk menyampaikan wahyu kepada manusia', 'The mission of a messenger — the task of conveying divine revelation to humanity'],
    'hijrah'       : ['Perpindahan dari satu tempat ke tempat lain karena Allah; secara khusus perpindahan Nabi ﷺ ke Madinah (622 M)', 'Migration for the sake of Allah; specifically the Prophet\'s emigration to Madinah in 622 CE, which marks the start of the Islamic calendar'],
    'iqra'         : ['Kata pertama wahyu: "Bacalah!" — perintah yang mengawali seluruh misi kenabian', 'The first revealed word: "Read!" or "Recite!" — the command that opened the entire prophetic mission'],
    'sirah'        : ['Biografi atau sejarah hidup Rasulullah ﷺ; juga nama bagi genre sastra sejarah Islam ini', 'The biography of the Prophet ﷺ; also the name of this genre of Islamic historical literature'],
    'ummah'        : ['Komunitas Muslim; seluruh penganut Islam yang dipersatukan oleh iman tanpa batas geografis', 'The Muslim community — all believers united by faith, transcending national and geographic boundaries'],
    'mahar'        : ['Pemberian wajib dari mempelai pria kepada mempelai wanita sebagai hak milik pribadi sang istri', 'The mandatory gift from the groom to the bride that becomes her personal property — a pillar of Islamic marriage'],
    'walimah'      : ['Pesta atau jamuan yang diselenggarakan untuk merayakan pernikahan', 'The wedding feast or celebration held to mark a marriage'],
    'wali'         : ['Wali nikah — pihak yang mewakili mempelai wanita dalam akad nikah (biasanya ayah atau kerabat laki-laki)', 'A marriage guardian — the person (usually the father or male relative) who represents the bride in the marriage contract'],
    'iddah'        : ['Masa tunggu yang wajib dijalani seorang wanita setelah cerai atau kematian suami sebelum boleh menikah lagi', 'The waiting period a woman must observe after divorce or widowhood before she may remarry'],
    'fitrah'       : ['Sifat asali manusia yang suci dan cenderung mengenal Allah; juga berarti zakat fitrah di akhir Ramadan', 'The innate pure nature of every human being — the inborn inclination to recognise the Divine'],
    'tauhid'       : ['Keesaan Allah — inti akidah Islam bahwa Allah itu Satu, tidak bersekutu, tidak beranak, dan tidak dilahirkan', 'The oneness of Allah — the central Islamic creed that God is absolutely One, without partner, child, or equal'],
    'ridda'        : ['Kemurtadan; tindakan meninggalkan Islam setelah memeluknya', 'Apostasy — the act of leaving Islam after having embraced it'],
  };

  /* build case-insensitive regex once (longest first to avoid partial matches) */
  var _re = null;
  function _buildRegex(){
    if(_re) return _re;
    var escaped = Object.keys(TERMS)
      .sort(function(a,b){ return b.length - a.length; })
      .map(function(t){ return t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); });
    _re = new RegExp('(?<![\\w؀-ۿ])(' + escaped.join('|') + ')(?![\\w؀-ۿ])', 'gi');
    return _re;
  }

  /* key lookup — find canonical key ignoring case */
  var _keyMap = null;
  function _getKeyMap(){
    if(_keyMap) return _keyMap;
    _keyMap = {};
    Object.keys(TERMS).forEach(function(k){ _keyMap[k.toLowerCase()] = k; });
    return _keyMap;
  }

  /* wrap glossary terms in the text portions of an HTML string */
  function annotate(html){
    if(!html) return html;
    var re = _buildRegex();
    var km = _getKeyMap();
    /* split on HTML tags so we never modify attribute values */
    var parts = html.split(/(<[^>]+>)/);
    return parts.map(function(part){
      if(part.charAt(0) === '<') return part;
      return part.replace(re, function(match){
        var key = km[match.toLowerCase()];
        if(!key) return match;
        return '<span class="gls" data-t="' + key + '" tabindex="0" role="definition">' + match + '</span>';
      });
    }).join('');
  }

  /* ── tooltip UI ── */
  var _tip = null, _open = null;

  function _pos(glsEl){
    var rect = glsEl.getBoundingClientRect();
    var tw   = _tip.offsetWidth  || 240;
    var th   = _tip.offsetHeight || 72;
    var x = Math.max(8, Math.min(rect.left + rect.width/2 - tw/2, window.innerWidth - tw - 8));
    var y = rect.top - th - 10;
    if(y < 8) y = rect.bottom + 10;
    _tip.style.left = x + 'px';
    _tip.style.top  = y + 'px';
  }

  function _show(glsEl){
    var key = glsEl.dataset.t;
    var def = TERMS[key];
    if(!def) return;
    /* currentLang is a global in engine.js */
    var lang = (typeof currentLang !== 'undefined') ? currentLang : 'id';
    var text = lang === 'en' ? def[1] : def[0];
    _tip.innerHTML = '<b class="gls-key">' + key + '</b><span class="gls-def">' + text + '</span>';
    _tip.classList.add('on');
    _open = glsEl;
    /* wait one frame so offsetWidth is correct */
    requestAnimationFrame(function(){ _pos(glsEl); });
  }

  function _hide(){
    _tip.classList.remove('on');
    _open = null;
  }

  function initTooltip(){
    _tip = document.createElement('div');
    _tip.id = 'gls-tip';
    _tip.setAttribute('role','tooltip');
    _tip.setAttribute('aria-live','polite');
    document.body.appendChild(_tip);

    /* desktop hover */
    document.addEventListener('mouseover', function(e){
      var t = e.target.closest ? e.target.closest('.gls') : null;
      if(t){ _show(t); }
    });
    document.addEventListener('mouseout', function(e){
      if(e.target.closest && e.target.closest('.gls')){ _hide(); }
    });

    /* mobile tap: first tap shows, second tap or tap elsewhere hides */
    document.addEventListener('touchend', function(e){
      var t = e.target.closest ? e.target.closest('.gls') : null;
      if(t){
        if(_open === t){ _hide(); return; }
        e.preventDefault();
        _show(t);
      } else {
        _hide();
      }
    }, {passive:false});

    /* keyboard */
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){ _hide(); return; }
      if((e.key === 'Enter' || e.key === ' ') && document.activeElement
         && document.activeElement.classList.contains('gls')){
        e.preventDefault();
        if(_open === document.activeElement) _hide();
        else _show(document.activeElement);
      }
    });
    document.addEventListener('focusin', function(e){
      var t = e.target.closest ? e.target.closest('.gls') : null;
      if(t) _show(t); else _hide();
    });
  }

  return { annotate: annotate, initTooltip: initTooltip };

}());
