/* DATA · Daftar cerita (registry). Dimuat SETELAH semua data cerita,
   SEBELUM engine. Menyimpan referensi tetap data Sirah lalu menyusun STORIES.
   Global: STORIES

   Catatan arsitektur: CH / CH_META_EN / CH_TRANSLATIONS / CHAPTER_SCENES adalah
   POINTER "cerita aktif" yang di-swap oleh Story.load() di engine. Nilai awalnya
   = data Sirah, jadi kita tangkap dulu referensinya di bawah ini. */

const SIRAH_CHAPTERS = CH;
const SIRAH_META_EN  = CH_META_EN;
const SIRAH_TRANS_EN = CH_TRANSLATIONS.en;
const SIRAH_SCENES   = CHAPTER_SCENES;

const STORIES = [
  {
    key:'sirah',
    title:'Sirah Nabawiyah', titleEn:'The Prophetic Biography',
    mark:'مُحَمَّد',
    tag:'Sirah · dengan aparatus sumbernya', tagEn:'Sira · with its source apparatus',
    lede:'Menyusuri hidup Rasulullah ﷺ dari Tahun Gajah hingga wafat — bukan dongeng heroik, melainkan rekaman keputusan yang tiap langkahnya bisa dilacak sumbernya.',
    ledeEn:'Tracing the life of the Messenger ﷺ from the Year of the Elephant to his passing — not a heroic tale, but a record whose every step can be traced to its sources.',
    single:true,   // langsung mulai, tanpa pemilih tokoh
    tracks:[
      { key:'main', name:'Sang Nabi ﷺ', nameEn:'The Messenger ﷺ', glyph:'مُحَمَّد',
        blurb:'Dua belas bab · 570 – 632 M · dan satu ruang tematik.',
        blurbEn:'Twelve chapters · 570–632 CE · and one thematic space.',
        chapters:SIRAH_CHAPTERS, metaEn:SIRAH_META_EN, transEn:SIRAH_TRANS_EN, scenes:SIRAH_SCENES }
    ]
  },
  {
    key:'khulafa',
    title:'Empat Khalifah', titleEn:'The Four Caliphs',
    mark:'الخلفاء',
    tag:'Khulafa’ur Rasyidin · dengan aparatus sumbernya', tagEn:'The Rightly-Guided Caliphs · with its source apparatus',
    lede:'Empat sahabat terdekat, empat lini masa: dari sebelum Islam, masuk Islam, sisi mereka dalam kisah Nabi, hingga akhir masa kekhalifahan masing-masing.',
    ledeEn:'Four closest companions, four timelines: from before Islam, to embracing it, to their side of the Prophet’s story, to the end of each caliphate.',
    single:false,  // tampilkan pemilih tokoh dulu
    tracks: KHULAFA_TRACKS
  }
];
