# Sirah Nabawiyah — Panduan Konteks untuk AI

Proyek ini adalah aplikasi naratif interaktif dwibahasa (ID/EN) tentang Sirah Nabawiyah dan Khulafa'ur Rasyidin. Setiap "layar" adalah satu node narasi dalam sebuah bab; pembaca melangkah maju satu node per ketukan, kadang dihadapkan pada percabangan pilihan.

---

## Struktur File

```
assets/js/data/
  content.id.js       ← narasi Sirah (Bahasa Indonesia)  →  global: CH
  content.en.js       ← terjemahan Sirah (English)       →  global: CH_TRANSLATIONS
  strings.js          ← teks UI + metadata bab EN         →  global: I18N, CH_META_EN
  scenes.js           ← suasana WebGL per bab             →  global: MOODS, CHAPTER_SCENES
  story-khulafa.js    ← kronik 4 Khalifah (ID+EN)        →  global: KHULAFA_TRACKS
  stories.js          ← daftar semua cerita               →  global: STORIES
```

---

## Struktur Bab (Chapter)

Setiap bab adalah objek dengan bentuk:

```js
{
  id:    1,                          // integer, unik per track
  glyph: 'أ',                        // huruf Arab (tampil di node peta & rail)
  yr:    '570',                      // tahun singkat (tampil di garis waktu)
  years: 'c. 570 M · Tahun Gajah',  // rentang tahun lengkap
  title: 'Sebelum Fajar',            // judul bab (Bahasa Indonesia)
  blurb: 'Lembah tanpa sungai …',   // ringkasan 1-2 kalimat (tampil di peta)
  nodes: [ /* array node */ ]
}
```

**Untuk Sirah:** `CH.push({ ... })` di `content.id.js`
**Untuk Khulafa:** tambahkan ke array bab tokoh yang sesuai (`AB_CH`, `UM_CH`, `UT_CH`, `AL_CH`) di `story-khulafa.js`

---

## Tipe Node

Setiap elemen dalam `nodes` adalah objek dengan **tepat satu** kunci utama berikut:

### `n` — Narasi (Narator)
```js
{ n: 'Teks narasi di sini.' }
```
Tipe paling umum. Suara narator orang ketiga.

---

### `a` — Suara Penziarah
```js
{ a: 'Kenapa ada kota di tempat yang bahkan tidak bisa menumbuhkan gandum?' }
```
Pertanyaan atau respons dari sudut pandang pembaca/penziarah. Tampil miring (*italic*).

---

### `r` — Riwayat Sahabat / Tokoh
```js
{
  r: 'Abu Bakar Ash-Shiddiq r.a.',   // nama pelapor (tampil sebagai label speaker)
  x: 'Teks ucapan atau riwayat.',    // isi riwayat
  s: 'HR. Al-Bukhari no. 3661',      // sumber
  g: 'shahih'                         // derajat: 'shahih'|'hasan'|'dhaif'|'sirah'
}
```

---

### `sb` — Sabda Nabi ﷺ (Hadits)
```js
{
  sb: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ',   // teks Arab
  m:  '"Sesungguhnya amal itu tergantung niatnya."',  // terjemahan
  s:  'HR. Al-Bukhari no. 1; Muslim no. 1907',
  g:  'shahih'
}
```
Tampil dengan latar khusus (plate-sabda). Memicu efek pulse pada partikel WebGL.

---

### `ay` — Ayat Al-Qur'an
```js
{
  ay:   'أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ',   // teks Arab
  m:    '"Bukankah Dia mendapatimu sebagai yatim, lalu Dia melindungimu?"',
  s:    'QS Ad-Duha: 6',
  qref: 1   // selalu 1 untuk ayat Qur'an
}
```
Tampil dengan latar khusus (plate-ayat).

---

### `c` — Catatan "Jarang Naik Mimbar"
```js
{
  c: 'Judul pendek catatan',      // label ringkas (tampil sebagai heading)
  x: 'Penjelasan panjang …',     // isi (boleh mengandung <em>, <strong>)
  s: 'Sumber opsional',           // opsional
  g: 'sirah'                      // opsional
}
```
Tampil dengan latar berbeda dan label "Jarang Naik Mimbar". Gunakan untuk konteks yang sering dihilangkan ceramah umum.

---

### `q` + `o` — Pilihan / Percabangan
```js
{
  q: 'Apa yang ingin kau pahami lebih dulu?',
  o: [
    { l: 'Label pilihan A', to: 'marker_a' },
    { l: 'Label pilihan B', to: 'marker_b' }
  ]
}
```
`to` adalah nama penanda (`k`) yang menjadi tujuan tiap cabang. **Maksimal 3 pilihan.** Lihat bagian [Percabangan](#percabangan--pilihan) di bawah.

---

### `k` — Penanda (Jump Target)
```js
{ k: 'marker_a', n: 'Narasi pertama di cabang ini.' }
```
Node biasa yang diberi label penanda. Penanda harus **unik per bab** (boleh sama antar-bab). Gunakan prefix tokoh untuk Khulafa: `ab1_ilmu`, `um2_siyasah`, dsb.

---

### `j` — Lompat ke Penanda
```js
{ j: 'penanda_tujuan' }
```
Mengakhiri sebuah cabang dan melompat ke node dengan `k: 'penanda_tujuan'`. Biasanya diletakkan sebelum titik konvergensi cabang.

---

### `null` — Pemisah Konvergensi
```js
null
```
Diletakkan di titik konvergensi (node setelah `{j:...}` dari semua cabang bertemu). Memberi tahu engine bahwa aliran kembali ke linear.

---

## Percabangan / Pilihan

Pola standar percabangan:

```js
// 1. Node pilihan
{ q: 'Pertanyaan?', o: [
    { l: 'Pilihan A', to: 'marker_a' },
    { l: 'Pilihan B', to: 'marker_b' }
]},

// 2. Cabang A
{ k: 'marker_a', n: 'Narasi cabang A …' },
{ j: 'gabung' },   // lompat ke titik konvergensi

// 3. Cabang B
{ k: 'marker_b', n: 'Narasi cabang B …' },
{ j: 'gabung' },

// 4. Titik konvergensi
null,              // pemisah wajib
{ k: 'gabung', n: 'Narasi setelah kedua cabang menyatu kembali.' },
```

**Aturan percabangan:**
- Semua cabang HARUS berakhir dengan `{j: 'penanda_sama'}` yang menuju ke titik konvergensi yang sama.
- Titik konvergensi HARUS dimulai dengan `null` lalu `{k: 'penanda', ...}`.
- Penanda wajib unik dalam satu bab.
- Jangan cabangkan lagi di dalam cabang (tidak didukung engine).
- "Peta Waktu" menampilkan cabang yang tidak dipilih sebagai satelit mini di node bab.

**Pola hub-and-spoke** (pembaca bisa kembali ke pilihan): tidak didukung untuk bab baru; hindari.

---

## Derajat Hadits (`g`)

| Nilai | Tampil | Keterangan |
|-------|--------|------------|
| `'shahih'` | SHAHIH (hijau) | Riwayat sahih |
| `'hasan'` | HASAN (biru) | Riwayat hasan |
| `'dhaif'` | DHAIF (merah) | Riwayat lemah |
| `'sirah'` | SIRAH (abu) | Dari kitab sejarah (Ibnu Hisyam, Ath-Thabari) |

Jika tidak ada `g`, node tidak menampilkan badge derajat.

---

## Terjemahan Inggris

### Metadata bab (`strings.js` → `CH_META_EN`)

Tambahkan entri parallel ke array `CH_META_EN` **pada posisi indeks yang sama** dengan bab di `CH`:

```js
{ title:'Before the Dawn', years:'c. 570 CE · Year of the Elephant', blurb:'A valley without a river …' }
```

### Narasi bab (`content.en.js` → `CH_TRANSLATIONS.en`)

Array paralel dengan `CH`. Setiap bab adalah sub-array. **Indeks harus sama persis** dengan `CH[i].nodes[j]`.

- Untuk `{n}`, `{a}`, `{r}`, `{c}`: objek dengan kunci yang sama, teks dalam Bahasa Inggris.
- Untuk `{sb}`, `{ay}`: hanya terjemahkan `m` (makna). Teks Arab tetap dari data ID.
- Untuk `{q}`, `{o}`: terjemahkan `q` dan `o` sebagai array string: `['Option A', 'Option B']`.
- Untuk `{k}`, `{j}`, `null`: tulis `null` di posisi yang sama.

Contoh struktur untuk satu bab:

```js
/* ── CH N · Title ── */
[
  { n: 'English narration …' },
  { a: 'English pilgrim voice …' },
  { m: '"English meaning of hadith."' },    // untuk {sb}
  { q: 'English question?', o: ['Option A', 'Option B'] },
  null,  // untuk {k} atau {j} (tidak perlu diterjemahkan)
  { n: 'Continuation …' },
  null,
]
```

---

## Suasana WebGL per Bab (`scenes.js`)

### `MOODS`
Objek keyed by `id` bab. Tambahkan entri jika menambah bab baru:

```js
14: {
  top:'#0a1024',    // warna atas gradien latar
  bot:'#05070f',    // warna bawah
  glow:'#22407a',   // warna cahaya ambient
  colA:'#C8A03C',   // warna partikel A
  colB:'#EBD08A',   // warna partikel B
  stars: 1.0,       // kepadatan bintang (0–2)
  turb:  0.00,      // turbulensi (0 = tenang, 0.2+ = badai)
  pat:   .30,       // kepadatan pola kaligrafi
  dust:  .45,       // kepadatan debu
  hz:    .10        // intensitas kabut (haze)
}
```

### `CHAPTER_SCENES`
Array string mapping indeks bab → latar 3D:

```js
let CHAPTER_SCENES = [
  'mecca','desert','mecca','cave','mecca',
  'mountains','ascent','migration','madinah',
  'battlefield','mecca','arafah','interior'
];
```

Nilai yang tersedia: `'mecca'`, `'desert'`, `'cave'`, `'mountains'`, `'ascent'`, `'migration'`, `'madinah'`, `'battlefield'`, `'arafah'`, `'interior'`.

---

## Menambah Bab Sirah

1. **`content.id.js`** — tambahkan `CH.push({...})` di akhir file.
2. **`content.en.js`** — tambahkan sub-array terjemahan ke `CH_TRANSLATIONS.en` (posisi terakhir).
3. **`strings.js`** — tambahkan entri ke `CH_META_EN` (posisi terakhir).
4. **`scenes.js`** — tambahkan `id` ke `MOODS` dan string ke `CHAPTER_SCENES`.

---

## Menambah Bab ke Tokoh Khulafa

Setiap tokoh punya array bab sendiri di `story-khulafa.js`:

| Tokoh | Array | Track key |
|-------|-------|-----------|
| Abu Bakar Ash-Shiddiq | `AB_CH` | `'abu-bakar'` |
| Umar bin Khattab | `UM_CH` | `'umar'` |
| Utsman bin Affan | `UT_CH` | `'utsman'` |
| Ali bin Abi Thalib | `AL_CH` | `'ali'` |

Setiap array bab tokoh **punya `id` sendiri mulai dari 1** (bukan lanjutan Sirah).

Untuk menambah bab:
1. Push objek bab baru ke array yang sesuai (`AB_CH.push({...})`).
2. Tambahkan terjemahan ke `AB_TRANS_EN` (atau `UM_TRANS_EN`, dst.) — array parallel.
3. Tambahkan metadata EN ke `AB_META_EN` (atau yang sesuai).
4. Tambahkan ke `AB_SCENES` (atau yang sesuai) dan `MOODS` jika `id` baru.

Suasana di Khulafa menggunakan **kunci `id` bab tokoh yang bersangkutan**, bukan `id` global. Jika dua tokoh berbeda punya `id:3`, mereka bisa berbagi MOODS yang sama (biasanya tidak masalah secara visual).

---

## Menambah Tokoh Khalifah Baru

Di `story-khulafa.js`, tambahkan:

```js
const XX_CH      = [ /* array bab */ ];
const XX_META_EN = [ /* metadata EN */ ];
const XX_TRANS_EN= [ /* terjemahan EN */ ];
const XX_SCENES  = [ /* array string latar */ ];
```

Lalu daftarkan di `KHULAFA_TRACKS`:

```js
{
  key:    'nama-key',
  name:   'Nama Tokoh',
  nameEn: 'Name in English',
  glyph:  'ع',   // huruf Arab
  blurb:  'Ringkasan singkat (ID).',
  blurbEn:'Short summary (EN).',
  chapters: XX_CH,
  metaEn:   XX_META_EN,
  transEn:  XX_TRANS_EN,
  scenes:   XX_SCENES
}
```

---

## Konvensi & Hal Penting

- **Penanda unik per bab**: `{k:'marker'}` harus unik di dalam satu `nodes` array. Gunakan prefix pendek: `ab3_`, `um2_`, `bab5_`.
- **`null` di terjemahan**: node `{k}`, `{j}`, dan `null` di ID **tidak** memerlukan entri dalam array terjemahan — tulis `null` di posisi yang sama agar indeks tetap sejajar.
- **Tidak ada `id` duplikat** dalam satu track: engine menggunakan `id` untuk memilih MOODS dan membuat aria-label.
- **`blurb`** dipakai engine untuk mengekstrak kata kunci di Peta Waktu (mindmap horizontal). Tulis dalam 1–2 kalimat, pisahkan dengan koma atau titik untuk menghasilkan label yang baik di mindmap.
- **Teks Arab** untuk `{ay}` dan `{sb}` tidak memerlukan harakat (tashkil) penuh, tapi disarankan untuk aksesibilitas pembaca.
- **`s`** (sumber) adalah string bebas — tulis persis seperti yang ingin tampil di panel Rujukan.
- File dieksekusi berurutan oleh `index.html`: `scenes.js` → `strings.js` → `content.id.js` → `content.en.js` → `story-khulafa.js` → `stories.js` → engine. Jangan pakai `import/export`; semua global.

---

## Contoh Bab Minimal (Sirah)

```js
CH.push({
  id:14, glyph:'ن', yr:'—', years:'Tematik',
  title:'Contoh Bab',
  blurb:'Satu kalimat pembuka, lalu kelanjutannya.',
  nodes:[
    { n:'Narasi pembuka.' },
    { a:'Suara penziarah.' },
    { sb:'نَصٌّ عَرَبِيٌّ', m:'"Terjemahan hadits."', s:'HR. Al-Bukhari no. 1', g:'shahih' },
    { ay:'نَصٌّ قُرْآنِيٌّ', m:'"Terjemahan ayat."', s:'QS Al-Fatihah: 1', qref:1 },
    { c:'Judul catatan', x:'Isi catatan panjang.' },
    { q:'Pilih satu:', o:[
        { l:'Jalur pertama', to:'cont_a' },
        { l:'Jalur kedua',  to:'cont_b' }
    ]},
    { k:'cont_a', n:'Narasi jalur A.' },
    { j:'cont_g' },
    { k:'cont_b', n:'Narasi jalur B.' },
    { j:'cont_g' },
    null,
    { k:'cont_g', n:'Narasi setelah dua jalur bertemu.' }
  ]
});
```

Pasangan terjemahan minimal di `CH_TRANSLATIONS.en` (indeks ke-13, sesuai posisi bab):

```js
/* ── CH 14 · Example Chapter ── */
[
  { n:'Opening narration.' },
  { a:'Pilgrim voice.' },
  { m:'"Hadith meaning in English."' },
  { m:'"Verse meaning in English."' },
  { c:'Note title', x:'Full note content.' },
  { q:'Choose one:', o:['First path', 'Second path'] },
  null,  // k:cont_a
  null,  // j:cont_g
  null,  // k:cont_b
  null,  // j:cont_g
  null,  // null (convergence)
  { n:'Continuation after both paths meet.' }
]
```
