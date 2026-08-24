/* DATA · Cerita "Empat Khalifah" (Khulafa'ur Rasyidin).
   Struktur per tokoh sama dengan Sirah: chapters (ID) + metaEn + transEn + scenes.
   Global: KHULAFA_TRACKS  (dipakai stories.js). */

/* ============================================================
   ABU BAKAR ASH-SHIDDIQ — kronik lengkap (dwibahasa)
   ============================================================ */
const AB_CH = [
{id:1, glyph:'ب', yr:'573', years:'c. 573 M · Mekah', title:'Sebelum Cahaya',
blurb:'Seorang pedagang jujur, ahli silsilah, dan sahabat lama Al-Amin — jauh sebelum ada wahyu.',
nodes:[
{n:'Mekah, sekitar dua tahun setelah Tahun Gajah. Di lingkungan kabilah Bani Taym lahir seorang anak: Abdullah bin Abu Quhafah. Dunia kelak mengenalnya dengan nama lain — Abu Bakar.'},
{a:'Ia lahir di kota yang sama dengan Sang Nabi. Apa yang membuatnya berbeda dari ribuan orang Quraisy lain?'},
{n:'Bani Taym bukan kabilah paling berkuasa. Tapi Abu Bakar memegang satu keahlian yang di mata Arab setara emas: ilmu nasab — silsilah kabilah. Di masyarakat tanpa arsip tertulis, ingatannya adalah arsip.', s:'Ibnu Sa‘d, Ath-Thabaqat', g:'sirah'},
{n:'Ia pedagang kain yang makmur. Namun yang menarik orang datang bukan hartanya, melainkan wataknya: lembut, dipercaya, dan tak pernah tercatat berdusta.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{c:'Yang menolak mabuk sebelum ada larangan', x:'Sebelum Islam mengharamkan khamar, Abu Bakar sudah tidak menyentuhnya. Ketika ditanya, ia menjawab bahwa ia menjaga kehormatan dan akalnya.<br><br>Sebagian orang menemukan kebenaran karena fitrahnya sudah condong ke sana jauh sebelum wahyu memanggil.', s:'Riwayat sejarah', g:'sirah'},
{n:'Dan ada satu hal lagi. Jauh sebelum kenabian, ia telah bersahabat dekat dengan seorang pemuda Quraisy yang juga dijuluki Al-Amin — yang terpercaya. Persahabatan itu tumbuh di atas satu kesamaan: keduanya sama-sama tak tahan pada dusta.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{q:'Apa yang paling menentukan dari sosok ini sebelum Islam datang?', o:[
  {l:'Kedudukan dan ilmunya di tengah Quraisy', to:'ab1_ilmu'},
  {l:'Wataknya yang lurus sejak muda', to:'ab1_watak'}
]},
{k:'ab1_ilmu', n:'Sebagai ahli nasab dan pedagang lintas negeri, ia mengenal manusia — kekuatan sekaligus kelemahan mereka. Kelak, saat memimpin, kemampuan membaca orang ini menjadi salah satu alatnya yang paling tajam.'},
{j:'ab1_g'},
{k:'ab1_watak', n:'Orang menitipkan rahasia dan harta kepadanya. Reputasi seperti itu tidak dibeli; ia ditabung setetes demi setetes selama puluhan tahun tanpa mengkhianati. Ketika akhirnya ia harus bersaksi atas hal yang mustahil dipercaya, modal inilah yang ia pertaruhkan.'},
{j:'ab1_g'},
{k:'ab1_g', n:'Maka ketika cahaya turun di Gua Hira, ia turun ke sebuah kota yang telah menyimpan seorang lelaki yang siap — bukan karena ia tahu apa yang akan datang, melainkan karena seluruh hidupnya seakan melatihnya untuk satu kata: benar.'}
]},

{id:2, glyph:'ت', yr:'610', years:'610 M · Mekah', title:'Yang Pertama Membenarkan',
blurb:'Lelaki dewasa pertama yang beriman tanpa ragu — dan harta yang ia habiskan untuk menebus manusia dari rantai.',
nodes:[
{n:'Ketika Muhammad ﷺ pulang dari Gua Hira dengan gemetar membawa wahyu pertama, kabar itu ia sampaikan lebih dulu kepada orang-orang terdekat. Di antara lelaki dewasa, Abu Bakar yang pertama percaya — tanpa jeda.'},
{r:'Nabi Muhammad ﷺ', x:'Tidak ada seorang pun yang kuajak kepada Islam kecuali padanya ada keberatan dan keraguan — kecuali Abu Bakar. Ketika kusampaikan kepadanya, ia tidak tertahan dan tidak ragu.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{a:'Kenapa secepat itu? Bukankah kabar sebesar ini justru menuntut bukti?'},
{n:'Justru karena ia mengenal si pembawa kabar. Bertahun-tahun ia tahu lelaki itu tak pernah berdusta kepada manusia; mustahil ia tiba-tiba berdusta atas nama Tuhan. Iman Abu Bakar bukan lompatan buta — ia kesimpulan dari data puluhan tahun.'},
{n:'Setelah beriman, ia tak menyimpannya sendiri. Lewat ajakannya, sejumlah tokoh yang kelak menjadi tiang Islam ikut masuk: Utsman bin Affan, Az-Zubair bin Al-Awwam, Abdurrahman bin Auf, Sa‘d bin Abi Waqqash, dan Thalhah bin Ubaidillah.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{n:'Lalu hartanya mengalir ke tempat tak terduga. Budak-budak yang disiksa karena beriman ia tebus lalu ia merdekakan. Yang paling masyhur: Bilal bin Rabah, yang ditindih batu di terik padang, ditebus dan dibebaskannya.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{n:'Ayahnya menegur: mengapa membebaskan budak-budak lemah yang tak bisa melindunginya? Seandainya yang kuat, tentu jadi benteng. Abu Bakar menjawab bahwa ia tidak mengharap balasan siapa pun — hanya wajah Tuhannya.'},
{ay:'وَسَيُجَنَّبُهَا الْأَتْقَى ۝ الَّذِي يُؤْتِي مَالَهُ يَتَزَكَّىٰ ۝ وَمَا لِأَحَدٍ عِندَهُ مِن نِّعْمَةٍ تُجْزَىٰ ۝ إِلَّا ابْتِغَاءَ وَجْهِ رَبِّهِ الْأَعْلَىٰ',
 m:'“Dan akan dijauhkan darinya (neraka) orang yang paling bertakwa, yang menginfakkan hartanya untuk menyucikan diri; padahal tidak ada padanya budi seseorang yang harus dibalas, tetapi (ia memberi) semata mengharap wajah Tuhannya Yang Mahatinggi.”',
 s:'QS Al-Lail: 17-20', qref:1},
{c:'Ayat yang turun tentang seorang manusia', x:'Banyak ahli tafsir menghubungkan penutup Surah Al-Lail ini dengan Abu Bakar dan budak-budak yang ia bebaskan.<br><br>Perhatikan tolok ukurnya: <em>al-atqa</em> — yang paling bertakwa — tidak diukur dari ritual, melainkan dari memberi tanpa mengharap balasan dari siapa pun kecuali Tuhan.', s:'Jumhur mufassir', g:'sirah'},
{q:'Apa yang ingin kau dalami dari titik ini?', o:[
  {l:'Kenapa imannya bisa tanpa ragu', to:'ab2_iman'},
  {l:'Harga yang ia bayar untuk itu', to:'ab2_harga'}
]},
{k:'ab2_iman', n:'Iman yang lahir dari mengenal, bukan dari kagum sesaat, cenderung tahan guncangan. Itulah kenapa di ujian-ujian terberat nanti, ketika banyak orang goyah, Abu Bakar justru menjadi jangkar.'},
{j:'ab2_g'},
{k:'ab2_harga', n:'Kekayaannya menyusut karena terus dipakai menebus manusia. Statusnya di mata Quraisy jatuh karena berpihak pada yang lemah. Ia memilih kehilangan dunia yang sudah ia genggam demi sesuatu yang belum terlihat.'},
{j:'ab2_g'},
{k:'ab2_g', n:'Dari sinilah julukan itu mulai terbentuk. Bukan karena ia paling kuat atau paling kaya, tapi karena ia paling cepat membenarkan. Dan sebuah ujian besar akan segera menguji arti julukan itu sampai ke akarnya.'}
]},

{id:3, glyph:'ث', yr:'620', years:'c. 620 M · Mekah', title:'Ash-Shiddiq',
blurb:'Ketika yang lain berbalik pada malam Isra, ia mempertaruhkan namanya pada satu kata — dan berhak atasnya.',
nodes:[
{n:'Bertahun-tahun kemudian datang malam yang paling sulit dipercaya: Nabi ﷺ mengabarkan perjalanan malam dari Mekah ke Baitul Maqdis lalu naik menembus langit — semua dalam satu malam.'},
{n:'Sebagian orang yang sudah beriman berbalik. Sebagian Quraisy berlari kepada Abu Bakar, yakin kali ini ia pasti goyah: “Temanmu mengaku pergi ke Baitul Maqdis dan pulang dalam semalam!”'},
{r:'Abu Bakar Ash-Shiddiq r.a.', x:'Jika ia yang mengatakannya, maka itu benar. Aku bahkan membenarkannya dalam kabar dari langit yang datang pagi dan petang — apa yang lebih jauh dari sekadar ini?', s:'Sirah Ibnu Ishaq', g:'sirah'},
{n:'Sejak itu ia dijuluki Ash-Shiddiq — yang membenarkan dengan sungguh-sungguh. Bukan gelar yang ia minta; ia gelar yang ia bayar tunai justru di saat semua orang ragu.'},
{a:'Jadi inilah momen ketika seluruh watak yang dibangunnya sejak muda diuji dalam satu kalimat.'},
{c:'Membenarkan bukan berarti berhenti berpikir', x:'Perhatikan alasan Abu Bakar. Ia tidak berkata “percaya saja”. Ia bertumpu pada bukti yang sudah ia ketahui: rekam jejak si pembawa kabar yang tak pernah berdusta.<br><br>Membenarkan yang gaib dibangun di atas memercayai yang sudah teruji. Itu keimanan, bukan kelalaian nalar.'},
{n:'Membela Nabi di Mekah tak pernah tanpa harga. Suatu kali, ketika kaum musyrik mengeroyok Nabi di dekat Ka‘bah, Abu Bakar menerobos membela beliau sampai ia sendiri dipukuli hingga nyaris pingsan.', s:'Riwayat sejarah', g:'sirah'},
{n:'Ketika ia siuman, kalimat pertamanya bukan tentang lukanya sendiri. Ia bertanya: bagaimana keadaan Rasulullah?', s:'Riwayat sejarah', g:'sirah'},
{q:'Apa inti bab ini bagimu?', o:[
  {l:'Makna sejati gelar Ash-Shiddiq', to:'ab3_gelar'},
  {l:'Harga membela kebenaran di depan umum', to:'ab3_harga'}
]},
{k:'ab3_gelar', n:'Shiddiq adalah tingkat kejujuran yang begitu total sampai seseorang tak lagi menyaring kebenaran demi kenyamanan. Dalam Al-Qur’an, kedudukannya disebut sederet di bawah para nabi.'},
{ay:'وَمَن يُطِعِ اللَّهَ وَالرَّسُولَ فَأُولَٰئِكَ مَعَ الَّذِينَ أَنْعَمَ اللَّهُ عَلَيْهِم مِّنَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ وَالصَّالِحِينَ',
 m:'“Barang siapa menaati Allah dan Rasul, mereka akan bersama orang-orang yang diberi nikmat oleh Allah: para nabi, para shiddiq, para syuhada, dan orang-orang saleh.”',
 s:'QS An-Nisa: 69', qref:1},
{j:'ab3_g'},
{k:'ab3_harga', n:'Ia bisa saja diam. Kedudukannya masih cukup untuk melindunginya bila ia netral. Tapi netral di hadapan kezaliman, baginya, adalah bentuk lain dari dusta — dan dusta persis hal yang tak sanggup ia tanggung.'},
{j:'ab3_g'},
{k:'ab3_g', n:'Gelar itu kini melekat. Namun ujian terbesar dari “membenarkan” belum tiba: sebuah perjalanan di mana ia harus mempertaruhkan nyawanya, bukan sekadar reputasinya.'}
]},

{id:4, glyph:'ج', yr:'622', years:'622 M · Hijrah', title:'Kedua dari Dua',
blurb:'Sosok yang disebut Al-Qur’an sebagai "sahabatnya" di dalam gua — yang menangis gembira diajak ke bahaya.',
nodes:[
{n:'Tekanan di Mekah memuncak. Rencana pembunuhan terhadap Nabi disusun. Lalu datang izin hijrah — dan Nabi memilih satu orang untuk menemaninya menembus gurun yang diburu para pemburu: Abu Bakar.'},
{n:'Aisyah, putri Abu Bakar, kelak menceritakan bahwa ayahnya menangis ketika diberi tahu bahwa ia yang akan menemani. Ia menangis karena gembira.', s:'HR. Al-Bukhari', g:'shahih'},
{a:'Menangis karena gembira diajak ke dalam bahaya yang bisa merenggut nyawa. Betapa berbeda cara orang ini mengukur untung dan rugi.'},
{n:'Ia telah menyiapkan dua unta jauh-jauh hari, berharap saat itu tiba. Dan ketika mereka dikejar sampai mulut Gua Tsur, Abu Bakar gemetar — bukan takut mati, melainkan takut jika para pengejar menunduk sedikit saja, Nabi akan terlihat.'},
{n:'Nabi menenangkannya dengan kalimat yang kemudian diabadikan Al-Qur’an.'},
{ay:'ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
 m:'“…(dia) salah seorang dari dua orang ketika keduanya berada dalam gua, ketika ia berkata kepada sahabatnya: Jangan bersedih, sesungguhnya Allah bersama kita.”',
 s:'QS At-Taubah: 40', qref:1},
{c:'Disebut “sahabat” oleh Al-Qur’an sendiri', x:'Dalam ayat ini Abu Bakar disebut <em>shahib</em> — sahabat Nabi di dalam gua — dan dipersaksikan bahwa “Allah bersama kita”, mencakup keduanya.<br><br>Sebagian ulama menjadikan ayat ini salah satu keutamaan tertinggi Abu Bakar: kesahabatannya diabadikan langsung dalam Kitab.', s:'Tafsir', g:'sirah'},
{n:'Operasi rahasia itu ditopang keluarganya: Abdullah membawa kabar dari kota, Asma’ mengantar bekal, dan Amir bin Fuhairah menghapus jejak dengan menggiring kambing.', s:'HR. Al-Bukhari', g:'shahih'},
{q:'Apa yang paling menonjol dari peran Abu Bakar di sini?', o:[
  {l:'Kesetiaan yang mendahulukan Nabi di atas nyawanya', to:'ab4_setia'},
  {l:'Kesiapan yang sudah ia rancang jauh hari', to:'ab4_siap'}
]},
{k:'ab4_setia', n:'Sepanjang perjalanan, riwayat menyebut ia berjalan kadang di depan, kadang di belakang, kadang di kanan dan kiri Nabi — menjaga dari segala arah ancaman yang mungkin datang. Tubuhnya ia jadikan perisai.'},
{j:'ab4_g'},
{k:'ab4_siap', n:'Menyiapkan dua unta sebelum izin turun bukan kebetulan. Kesetiaannya bukan sekadar perasaan; ia terencana, praktis, dan siap membayar ongkosnya. Iman yang matang selalu menyiapkan diri sebelum diminta.'},
{j:'ab4_g'},
{k:'ab4_g', n:'Mereka tiba di Yatsrib — yang kelak bernama Madinah. Babak Mekah selesai. Dan di kota baru ini, Abu Bakar akan menempati posisi yang paling ia sukai: tepat di belakang Nabi, dalam bayangannya.'}
]},

{id:5, glyph:'ح', yr:'632', years:'622 – 632 M · Madinah', title:'Bayang di Belakang Nabi',
blurb:'Penasihat yang tenang, yang pada hari paling berat justru menjadi orang paling kokoh di kota.',
nodes:[
{n:'Di Madinah, Abu Bakar tak pernah mencari sorotan. Ia hadir di Badar, Uhud, dan hampir setiap peristiwa besar — tapi perannya lebih sering sebagai penasihat yang tenang daripada pahlawan yang mencolok.'},
{n:'Di Hudaibiyah, ketika banyak sahabat gusar oleh perjanjian yang terasa merugikan, Abu Bakar menenangkan dengan logika yang sama dengan Nabi: tunduk pada Allah dan Rasul-Nya, meski hati belum paham.', s:'HR. Al-Bukhari', g:'shahih'},
{n:'Kedekatannya diakui langsung. Nabi bersabda bahwa seandainya beliau boleh mengambil kekasih (khalil) selain Tuhannya, tentu Abu Bakar orangnya — tetapi persaudaraan Islam sudah lebih dari cukup.', s:'HR. Al-Bukhari', g:'shahih'},
{n:'Sebuah fitnah keji pernah menimpa putrinya, Aisyah — istri Nabi ﷺ — tuduhan dusta yang mengguncang Madinah sebulan lamanya. Salah satu penyebarnya adalah Misthah, kerabat miskin yang selama ini justru dibiayai Abu Bakar. Setelah Allah menurunkan ayat yang membersihkan nama Aisyah, Abu Bakar bersumpah tak akan lagi menafkahi Misthah.', s:'HR. Al-Bukhari', g:'shahih'},
{ay:'وَلَا يَأْتَلِ أُولُو الْفَضْلِ مِنكُمْ وَالسَّعَةِ أَن يُؤْتُوا أُولِي الْقُرْبَىٰ وَالْمَسَاكِينَ وَالْمُهَاجِرِينَ فِي سَبِيلِ اللَّهِ ۖ وَلْيَعْفُوا وَلْيَصْفَحُوا ۗ أَلَا تُحِبُّونَ أَن يَغْفِرَ اللَّهُ لَكُمْ ۗ وَاللَّهُ غَفُورٌ رَّحِيمٌ',
 m:'“Dan janganlah orang-orang yang mempunyai kelebihan dan kelapangan di antara kamu bersumpah bahwa mereka tidak akan memberi (bantuan) kepada kerabatnya, orang-orang miskin, dan orang-orang yang berhijrah di jalan Allah. Hendaklah mereka memaafkan dan berlapang dada. Tidakkah kamu ingin bahwa Allah mengampunimu? Dan Allah Maha Pengampun lagi Maha Penyayang.”',
 s:'QS An-Nur: 22', qref:1},
{n:'Mendengar ayat itu, Abu Bakar segera berkata, “Tentu, demi Allah, aku ingin Allah mengampuniku.” Ia pun kembali menafkahi Misthah seperti semula dan bertekad tak akan menghentikannya lagi. Ditegur untuk memaafkan, ia memaafkan seketika.', s:'HR. Al-Bukhari', g:'shahih'},
{n:'Lalu tiba sakit terakhir Nabi. Ketika beliau tak sanggup lagi mengimami shalat, beliau memerintahkan satu nama untuk menggantikannya di depan jamaah: Abu Bakar.', s:'HR. Al-Bukhari; Muslim', g:'shahih'},
{c:'Isyarat yang tak terucap', x:'Aisyah pernah berusaha agar tugas itu dialihkan, khawatir ayahnya — yang mudah menangis — tak kuat memimpin. Nabi tetap pada pilihannya, bahkan mengulanginya.<br><br>Banyak sahabat kelak membaca perintah ini sebagai isyarat: siapa yang layak memimpin shalat, layak pula dipertimbangkan memimpin umat.'},
{n:'Kemudian Nabi wafat. Kota berguncang. Umar berdiri dan mengancam siapa pun yang berani mengatakan beliau telah tiada; ia tak sanggup menerimanya.'},
{n:'Abu Bakar masuk, membuka kain wajah Nabi, menciumnya, lalu keluar menghadapi orang banyak — tenang di tengah tangisnya sendiri.'},
{r:'Abu Bakar Ash-Shiddiq r.a.', x:'Barang siapa menyembah Muhammad, sungguh Muhammad telah wafat. Dan barang siapa menyembah Allah, sungguh Allah Maha Hidup dan tidak akan mati.', s:'HR. Al-Bukhari', g:'shahih'},
{ay:'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ ۚ أَفَإِن مَّاتَ أَوْ قُتِلَ انقَلَبْتُمْ عَلَىٰ أَعْقَابِكُمْ',
 m:'“Muhammad hanyalah seorang rasul; sungguh telah berlalu rasul-rasul sebelumnya. Apakah jika ia wafat atau terbunuh, kamu berbalik ke belakang (murtad)?”',
 s:'QS Ali Imran: 144', qref:1},
{n:'Umar kelak berkata: ketika mendengar Abu Bakar membacakan ayat itu, kakinya seakan tak kuat menahan tubuhnya, dan barulah ia benar-benar sadar bahwa Nabi telah tiada.', s:'HR. Al-Bukhari', g:'shahih'},
{q:'Apa yang paling kau kagumi dari Abu Bakar di titik ini?', o:[
  {l:'Ketenangannya justru saat semua runtuh', to:'ab5_tenang'},
  {l:'Ia mengembalikan fokus umat kepada Allah, bukan sosok', to:'ab5_fokus'}
]},
{k:'ab5_tenang', n:'Sepanjang hidupnya ia dikenal lembut dan mudah menangis. Tapi pada hari paling berat, justru ia yang paling kokoh. Ternyata kelembutan bukan lawan dari keteguhan.'},
{j:'ab5_g'},
{k:'ab5_fokus', n:'Dalam satu kalimat ia memindahkan tumpuan umat dari manusia yang fana kepada Tuhan yang kekal. Itulah inti ajaran yang ia bela sejak hari pertama: yang disembah adalah Allah, bukan pembawa risalah-Nya.'},
{j:'ab5_g'},
{k:'ab5_g', n:'Nabi telah tiada. Umat kehilangan porosnya. Dan di ruang kosong yang menakutkan itu, orang-orang menoleh kepada lelaki yang sejak dulu selalu berdiri paling dekat dengan Nabi.'}
]},

{id:6, glyph:'خ', yr:'632', years:'632 M · 11 H', title:'Amanah yang Berat',
blurb:'Dipilih memimpin dengan enggan — lalu meletakkan prinsip bahwa ketaatan pada penguasa itu bersyarat, dan hidup sesederhana rakyatnya.',
nodes:[
{n:'Belum lagi jasad Nabi ﷺ dimakamkan, di Saqifah Bani Sa‘idah kaum Anshar dan Muhajirin nyaris berselisih soal siapa yang memimpin. Abu Bakar meredakannya bukan dengan mengklaim hak, melainkan dengan mengingatkan persatuan. Umat lalu membaiatnya sebagai khalifah pertama.', s:'Ath-Thabari', g:'sirah'},
{n:'Ia menerima amanah itu dengan berat, bukan dengan gembira. Pidato pertamanya sebagai pemimpin memutar arah gagasan kekuasaan pada zamannya.'},
{r:'Abu Bakar Ash-Shiddiq r.a.', x:'Aku telah dipilih memimpin kalian, padahal aku bukan yang terbaik di antara kalian. Jika aku berbuat baik, bantulah aku; jika aku menyimpang, luruskan aku. Taatilah aku selama aku menaati Allah dan Rasul-Nya; jika aku mendurhakai keduanya, tidak ada kewajiban taat kalian kepadaku.', s:'Ath-Thabari', g:'sirah'},
{c:'Kekuasaan yang boleh dikoreksi', x:'Perhatikan kalimatnya: pemimpin tertinggi umat justru membuka dirinya untuk diluruskan rakyat, dan menegaskan bahwa ketaatan itu bersyarat — hanya selama ia taat pada Tuhan.<br><br>Ini bukan sekadar kerendahan hati pribadi; ia menegaskan sebuah prinsip: tidak ada ketaatan mutlak kepada makhluk.'},
{n:'Kekuasaan tak mengubah hidupnya. Sebelum menjadi khalifah, ia biasa memerah susu kambing milik tetangga. Ketika ia diangkat, seorang gadis kecil menyangka kebiasaan itu akan berhenti — tetapi Abu Bakar tetap memerahkannya seperti biasa.', s:'Riwayat sejarah', g:'sirah'},
{n:'Ia mula-mula tetap berdagang untuk menafkahi keluarganya, sampai para sahabat memintanya mengambil tunjangan secukupnya dari kas negara agar bisa fokus mengurus umat.', s:'Riwayat sejarah', g:'sirah'},
{a:'Pemimpin sebuah negara yang sedang lahir, tetapi masih memerah susu kambing tetangga. Kekuasaan baginya beban yang diemban, bukan hadiah yang dinikmati.'},
{q:'Apa yang paling menonjol dari cara Abu Bakar memimpin?', o:[
  {l:'Prinsip ketaatan yang bersyarat', to:'ab6_prinsip'},
  {l:'Kesederhanaannya sebagai penguasa', to:'ab6_sederhana'}
]},
{k:'ab6_prinsip', n:'Dengan membuka dirinya untuk dikoreksi, Abu Bakar meletakkan fondasi bahwa pemimpin bukan penguasa mutlak, melainkan pelaksana amanah yang tunduk pada hukum yang sama. Gagasan ini jauh mendahului zamannya.'},
{j:'ab6_g'},
{k:'ab6_sederhana', n:'Ia menolak menjadikan jabatan sebagai tangga kekayaan. Hidupnya nyaris tak berubah — pakaian sederhana, rumah sederhana — karena ia menganggap harta umat sebagai titipan, bukan miliknya.'},
{j:'ab6_g'},
{k:'ab6_g', n:'Namun kepemimpinan yang tenang itu segera diuji. Belum genap negara ini berdiri, sebuah badai besar datang mengancam meruntuhkan segalanya dalam hitungan bulan.'}
]},

{id:7, glyph:'د', yr:'632', years:'632 – 633 M · 11 H', title:'Badai Kemurtadan',
blurb:'Sepeninggal Nabi, Jazirah nyaris berkeping — kabilah menolak zakat, nabi-nabi palsu bangkit. Yang paling lembut justru paling tegas.',
nodes:[
{n:'Wafatnya Nabi ﷺ mengguncang seluruh Jazirah. Banyak kabilah menolak membayar zakat, sebagian murtad total, dan beberapa orang bangkit mengaku sebagai nabi. Dalam hitungan bulan, seluruh bangunan bisa runtuh.', s:'Ath-Thabari', g:'sirah'},
{n:'Sebagian sahabat menyarankan bersikap lunak — terima shalat mereka, tunda soal zakat — demi menjaga persatuan yang rapuh. Abu Bakar menolak dengan tegas.'},
{r:'Abu Bakar Ash-Shiddiq r.a.', x:'Demi Allah, seandainya mereka menolak menyerahkan seekor anak kambing yang dulu mereka tunaikan kepada Rasulullah, sungguh akan kuperangi mereka karena penolakan itu.', s:'HR. Al-Bukhari', g:'shahih'},
{c:'Ketegasan dari orang yang paling lembut', x:'Umar sendiri semula tidak setuju, lalu mengakui bahwa Allah telah melapangkan dada Abu Bakar untuk keputusan itu — dan ia tahu itulah yang benar.<br><br>Ini bukan soal seekor kambing, melainkan soal keutuhan agama: memisahkan shalat dari zakat berarti membongkar Islam sepotong demi sepotong.'},
{n:'Nabi-nabi palsu bermunculan: Musailamah al-Kadzdzab di Yamamah, Thulaihah di kalangan Bani Asad, dan Sajah dari arah timur. Wilayah demi wilayah ikut memberontak.', s:'Ath-Thabari', g:'sirah'},
{n:'Abu Bakar menyusun sebelas pasukan dan mengirim mereka ke berbagai penjuru. Panglima andalannya, Khalid bin Al-Walid, memimpin pertempuran demi pertempuran. Puncaknya adalah Perang Yamamah melawan Musailamah — sangat sengit, dan banyak sahabat penghafal Al-Qur’an gugur di sana.', s:'Ath-Thabari', g:'sirah'},
{c:'Bulan-bulan yang menyelamatkan segalanya', x:'Andai Abu Bakar goyah di titik ini, Islam mungkin pecah menjadi serpihan kabilah yang saling lepas.<br><br>Ketegasannya selama Perang Riddah, kurang dari dua tahun, mengembalikan kesatuan Jazirah — dan menjadi fondasi bagi segala yang datang sesudahnya.'},
{q:'Apa yang ingin kau dalami dari badai ini?', o:[
  {l:'Mengapa ia begitu tegas soal zakat', to:'ab7_zakat'},
  {l:'Harga yang dibayar di Yamamah', to:'ab7_yamamah'}
]},
{k:'ab7_zakat', n:'Bagi Abu Bakar, zakat bukan sekadar pungutan, melainkan rukun yang tak terpisahkan dari shalat. Membiarkannya gugur berarti membuka pintu bagi runtuhnya rukun-rukun lain. Ia mempertahankan keutuhan agama, bukan sekadar kepatuhan administratif.'},
{ay:'فَإِن تَابُوا وَأَقَامُوا الصَّلَاةَ وَآتَوُا الزَّكَاةَ فَإِخْوَانُكُمْ فِي الدِّينِ',
 m:'“Maka jika mereka bertobat, mendirikan shalat, dan menunaikan zakat, maka mereka itu saudara-saudaramu seagama.”',
 s:'QS At-Taubah: 11', qref:1},
{c:'Mengapa memisahkan keduanya berarti merobohkan agama',
 x:'Di dalam Al-Qur’an, shalat dan zakat nyaris selalu disebut berpasangan — puluhan kali. Keduanya dua wajah dari satu penyerahan diri: <strong>shalat adalah hak Allah</strong> (hubungan ke atas), <strong>zakat adalah hak yang melekat pada harta</strong> untuk kaum lemah (hubungan ke samping). Menegakkan yang satu sambil menggugurkan yang lain berarti hanya tunduk kepada Allah dalam urusan yang tidak menyentuh dompet.<br><br>Kabilah-kabilah itu tidak menolak Tuhan; mereka menolak <em>satu perintah</em>-Nya, dengan dalih zakat hanyalah upeti pribadi kepada Muhammad yang gugur sepeninggal beliau. Di sinilah Abu Bakar melihat bahayanya: jika satu rukun yang qath’i boleh dibuang dengan tafsir, maka setiap kewajiban bisa ditawar, dan agama berubah menjadi menu pilihan. Ketaatan yang memilih-milih bukanlah Islam separuh — ia penolakan atas <strong>otoritas</strong> Sang Pembuat hukum itu sendiri.<br><br>Perhatikan kata-kata Abu Bakar: ia bersumpah memerangi siapa pun yang <em>memisahkan</em> shalat dari zakat. Yang ia lawan bukan keyakinan mereka, melainkan prinsip memilah-milah perintah Allah — sebab dari situlah sebuah agama runtuh sepotong demi sepotong.'},
{j:'ab7_g'},
{k:'ab7_yamamah', n:'Kemenangan di Yamamah mahal harganya: ratusan gugur, termasuk banyak yang hafal Al-Qur’an. Kepergian mereka menyalakan kecemasan baru — bagaimana menjaga Al-Qur’an bila para penjaganya berkurang? Dari luka inilah lahir gagasan besar berikutnya.'},
{j:'ab7_g'},
{k:'ab7_g', n:'Badai reda. Jazirah kembali satu. Tetapi Yamamah meninggalkan satu pertanyaan yang tak bisa ditunda: bagaimana memastikan Kalam yang mereka bela tetap terjaga utuh?'}
]},

{id:8, glyph:'ذ', yr:'633', years:'633 – 634 M · 12 – 13 H', title:'Menjaga Kalam & Membuka Cakrawala',
blurb:'Dua warisan dari dua tahun: Al-Qur’an dihimpun dalam satu naskah, dan pasukan dilepas menembus perbatasan dunia.',
nodes:[
{n:'Gugurnya banyak penghafal di Yamamah membuat Umar cemas. Ia mendesak Abu Bakar agar Al-Qur’an dikumpulkan dalam satu naskah sebelum semakin banyak penghafal yang wafat.', s:'HR. Al-Bukhari', g:'shahih'},
{n:'Abu Bakar mula-mula ragu: “Bagaimana aku melakukan sesuatu yang tidak dilakukan Rasulullah ﷺ?” Namun setelah berpikir, Allah melapangkan dadanya, dan ia melihat kebaikan besar dalam usulan itu.', s:'HR. Al-Bukhari', g:'shahih'},
{n:'Ia menugaskan Zaid bin Tsabit — penulis wahyu — untuk menghimpunnya dengan sangat hati-hati, mencocokkan hafalan dengan catatan tertulis. Naskah pertama itu lalu disimpan, diwariskan kepada Umar, kemudian kepada Hafshah.', s:'HR. Al-Bukhari', g:'shahih'},
{c:'Menyelamatkan teks demi menyelamatkan umat', x:'Naskah resmi pertama inilah yang kelak menjadi dasar ketika Utsman menyeragamkan mushaf ke seluruh penjuru.<br><br>Satu keputusan tenang di masa krisis menjaga agar Al-Qur’an tetap utuh sepanjang zaman — sebuah rantai penjagaan yang bermula dari keberanian Abu Bakar.'},
{n:'Di tengah kekacauan awal, ada satu perintah Nabi yang belum tuntas: pasukan pimpinan Usamah bin Zaid yang masih sangat muda, yang disiapkan menuju perbatasan Romawi. Banyak yang menyarankan menundanya karena Madinah sedang genting.'},
{r:'Abu Bakar Ash-Shiddiq r.a.', x:'Tidak akan kubiarkan pasukan yang telah diberangkatkan Rasulullah ﷺ untuk kutahan. Sekalipun aku diseret binatang buas, aku tetap akan mengirim Usamah.', s:'Ath-Thabari', g:'sirah'},
{n:'Ia pun melepas pasukan Usamah — menuntaskan perintah Nabi — lalu membuka front-front baru: mengirim Khalid ke arah Irak (Persia) dan pasukan ke Syam (Romawi). Penaklukan besar yang kelak diselesaikan para penggantinya, dimulai di tangannya.', s:'Ath-Thabari', g:'sirah'},
{q:'Warisan mana yang ingin kau telusuri?', o:[
  {l:'Penghimpunan Al-Qur’an', to:'ab8_quran'},
  {l:'Usamah dan pembukaan perbatasan', to:'ab8_futuh'}
]},
{k:'ab8_quran', n:'Ia menjaga yang paling berharga: Kalam Allah. Dari satu naskah yang dihimpun hati-hati di masanya, lahir kepastian bahwa yang dibaca umat hari ini adalah yang sama dengan yang diturunkan.'},
{j:'ab8_g'},
{k:'ab8_futuh', n:'Dengan bersikeras mengirim Usamah, ia menegaskan bahwa perintah Nabi tidak batal hanya karena keadaan sulit. Dan dengan membuka front Irak dan Syam, ia meletakkan batu pertama bagi perluasan yang mengubah wajah dunia.'},
{j:'ab8_g'},
{k:'ab8_g', n:'Dalam waktu sesingkat itu, ia menyelamatkan Kalam ke dalam dan melepas panji ke luar. Tugasnya hampir paripurna — dan tubuhnya mulai lelah.'}
]},

{id:9, glyph:'ر', yr:'634', years:'634 M · 13 H', title:'Pergi ke Sisi Sahabatnya',
blurb:'Setelah dua tahun yang menentukan, ia memilih pengganti terbaik, mengembalikan gajinya, dan pergi menyusul sahabatnya.',
nodes:[
{n:'Setelah sekitar dua tahun memimpin, Abu Bakar jatuh sakit. Ia merasa ajalnya dekat, dan pikirannya tertuju pada satu hal: jangan sampai umat kembali terpecah sepeninggalnya.'},
{n:'Ia bermusyawarah dengan para sahabat senior, lalu menunjuk Umar sebagai penggantinya. Sebagian khawatir Umar terlalu keras; Abu Bakar menenangkan mereka bahwa beban tanggung jawab akan melunakkan ketegasan Umar. Ia memilih yang paling mampu, bukan yang paling dekat.', s:'Ath-Thabari', g:'sirah'},
{n:'Ia teringat tunjangan yang pernah ia ambil dari kas negara, dan berpesan agar sebidang tanahnya dijual untuk mengembalikan seluruhnya — ia tak ingin menghadap Tuhannya dengan membawa sedikit pun harta umat.', s:'Riwayat sejarah', g:'sirah'},
{r:'Abu Bakar Ash-Shiddiq r.a.', x:'Aku berharap aku hanyalah sebatang pohon di pinggir jalan yang buahnya dimakan, lalu ia ditinggalkan.', s:'Atsar', g:'sirah'},
{c:'Takut yang menjaga', x:'Kalimat itu bukan basa-basi. Orang yang memegang kuasa terbesar di Jazirah justru berharap menjadi sesuatu yang tak dihisab.<br><br>Rasa takut akan pertanggungjawaban itulah yang menjaga kekuasaannya tetap bersih dari awal sampai akhir.'},
{n:'Ia wafat pada tahun 13 Hijriah, dalam usia sekitar enam puluh tiga tahun — sama dengan usia Nabi ﷺ ketika wafat — dan dimakamkan tepat di samping beliau.', s:'Riwayat sejarah', g:'sirah'},
{q:'Apa yang paling membekas darimu tentang akhir hayat Abu Bakar?', o:[
  {l:'Pilihannya menunjuk Umar', to:'ab9_umar'},
  {l:'Kerendahan hatinya sampai akhir', to:'ab9_tawadhu'}
]},
{k:'ab9_umar', n:'Dengan menunjuk pengganti melalui musyawarah, ia menyelamatkan umat dari kekosongan dan perebutan kekuasaan. Ia mendahulukan kemaslahatan umat di atas perasaan dan kedekatan — konsisten dengan seluruh hidupnya.'},
{j:'ab9_g'},
{k:'ab9_tawadhu', n:'Sampai napas terakhir, ia tak merasa berhak atas apa pun dari umat. Mengembalikan gaji, berandai menjadi pohon tak berarti, dimakamkan tanpa kemegahan — ia pergi seringan ia datang.'},
{j:'ab9_g'},
{k:'ab9_g', n:'Dua tahun yang menentukan nasib sebuah agama, dijalani oleh seorang yang tak pernah menginginkan kursinya. Ia dimakamkan di sisi sahabat yang paling ia cintai — persis seperti hidupnya: selalu di belakang Nabi, dalam bayangannya.'},
{a:'Dari pedagang jujur, menjadi sahabat di gua, menjadi orang yang menjaga umat tetap satu — dan menutup semuanya dengan satu kata yang ia pegang sejak awal: benar.'}
]}
];

const AB_META_EN = [
{title:'Before the Light', years:'c. 573 CE · Makkah', blurb:'An honest merchant, a master of genealogy, and an old friend of al-Amin — long before any revelation.'},
{title:'The First to Affirm', years:'610 CE · Makkah', blurb:'The first grown man to believe without hesitation — and the wealth he spent buying human beings out of chains.'},
{title:'Al-Siddiq', years:'c. 620 CE · Makkah', blurb:'When others turned back at the Night Journey, he staked his name on a single word — and earned it.'},
{title:'The Second of Two', years:'622 CE · The Hijra', blurb:'The one the Qur’an calls “his companion” in the cave — who wept with joy to be led into danger.'},
{title:'In the Prophet’s Shadow', years:'622–632 CE · Madinah', blurb:'The quiet counsellor who, on the hardest day, became the steadiest man in the city.'},
{title:'The Heavy Trust', years:'632 CE · 11 AH', blurb:'Chosen to lead against his will — he set the rule that obedience to a ruler is conditional, and lived as plainly as his people.'},
{title:'The Storm of Apostasy', years:'632–633 CE · 11 AH', blurb:'After the Prophet, Arabia nearly shattered — tribes withheld zakat, false prophets rose. The gentlest man was the firmest.'},
{title:'Guarding the Word, Opening Horizons', years:'633–634 CE · 12–13 AH', blurb:'Two legacies from two years: the Qur’an gathered into one manuscript, and armies released across the world’s frontiers.'},
{title:'Departing to His Friend’s Side', years:'634 CE · 13 AH', blurb:'After two decisive years, he chose the best successor, repaid his salary, and went to follow his friend.'}
];

const AB_TRANS_EN = [
/* ── Bab 1 ── */
[
{n:'Makkah, about two years after the Year of the Elephant. Among the clan of Banu Taym a child was born: ‘Abdullah ibn Abi Quhafah. The world would come to know him by another name — Abu Bakr.'},
{a:'He was born in the same city as the Prophet. What set him apart from the thousands of other Quraysh?'},
{n:'Banu Taym was not the most powerful clan. But Abu Bakr held a skill the Arabs prized like gold: ‘ilm al-nasab — the genealogy of the tribes. In a society without written archives, his memory was the archive.'},
{n:'He was a prosperous cloth merchant. Yet what drew people was not his wealth but his character: gentle, trusted, never once recorded to have lied.'},
{c:'The man who refused drink before it was forbidden', x:'Before Islam forbade wine, Abu Bakr already refused to touch it. Asked why, he answered that he was guarding his honour and his mind.<br><br>Some people find the truth because their nature already leans toward it, long before revelation calls them.'},
{n:'And there was one more thing. Long before the prophethood he was already a close friend of a young Qurayshi also nicknamed al-Amin — the trustworthy. Their friendship grew on one shared trait: neither could stomach a lie.'},
{q:'What matters most about this man before Islam arrived?', o:[
  'His standing and knowledge among Quraysh',
  'His upright character from his youth'
]},
{n:'As a genealogist and long-distance trader, he knew people — their strengths and their weaknesses alike. Later, in leadership, this ability to read others became one of his sharpest tools.'},
null,
{n:'People entrusted him with secrets and wealth. Such a reputation is not bought; it is saved drop by drop across decades of not betraying. When at last he had to testify to the impossible, this was the capital he staked.'},
null,
{n:'So when the light descended at the Cave of Hira, it descended upon a city that already held a man who was ready — not because he knew what was coming, but because his whole life seemed to have trained him for a single word: true.'}
],
/* ── Bab 2 ── */
[
{n:'When Muhammad ﷺ returned trembling from the Cave of Hira with the first revelation, he confided it first to those closest to him. Among grown men, Abu Bakr was the first to believe — without a pause.'},
{r:'The Prophet Muhammad ﷺ', x:'No one I invited to Islam failed to hold back with some hesitation and doubt — except Abu Bakr. When I told him, he neither held back nor doubted.', s:'Ibn Hisham’s Sira', g:'sirah'},
{a:'Why so quickly? Doesn’t news this enormous demand proof?'},
{n:'Precisely because he knew the messenger. For years he knew this man had never lied to people; it was impossible he would suddenly lie about God. Abu Bakr’s faith was no blind leap — it was a conclusion drawn from decades of data.'},
{n:'Once he believed, he did not keep it to himself. Through his call, several who would become pillars of Islam entered it: ‘Uthman ibn ‘Affan, al-Zubayr ibn al-‘Awwam, ‘Abd al-Rahman ibn ‘Awf, Sa‘d ibn Abi Waqqas, and Talhah ibn ‘Ubaydillah.', s:'Ibn Hisham’s Sira', g:'sirah'},
{n:'Then his wealth flowed to an unexpected place. Slaves tortured for believing, he bought and set free. The most famous: Bilal ibn Rabah, crushed under a rock in the desert heat, whom he ransomed and freed.', s:'Ibn Hisham’s Sira', g:'sirah'},
{n:'His father rebuked him: why free weak slaves who cannot protect you? Free the strong, and they become a fortress. Abu Bakr answered that he sought no return from anyone — only the Face of his Lord.'},
{ay:'وَسَيُجَنَّبُهَا الْأَتْقَى ۝ الَّذِي يُؤْتِي مَالَهُ يَتَزَكَّىٰ ۝ وَمَا لِأَحَدٍ عِندَهُ مِن نِّعْمَةٍ تُجْزَىٰ ۝ إِلَّا ابْتِغَاءَ وَجْهِ رَبِّهِ الْأَعْلَىٰ',
 m:'“And the most God-fearing shall be kept away from it — he who gives his wealth to purify himself, owing no one a favour to be repaid, seeking only the Face of his Lord, the Most High.”',
 s:'Qur’an, al-Layl: 17-20', qref:1},
{c:'Verses that came down about a human being', x:'Many exegetes connect the closing verses of Surah al-Layl to Abu Bakr and the slaves he freed.<br><br>Notice the measure: <em>al-atqa</em> — the most God-fearing — is gauged not by ritual, but by giving with no expectation of return from anyone but God.', s:'Majority of exegetes', g:'sirah'},
{q:'What do you want to explore from this point?', o:[
  'Why his faith could be free of doubt',
  'The price he paid for it'
]},
{n:'Faith born of knowing, not of a passing awe, tends to withstand shocks. That is why in the hardest trials to come, when many wavered, Abu Bakr became the anchor.'},
null,
{n:'His wealth shrank because it kept being spent ransoming people. His status among Quraysh fell because he stood with the weak. He chose to lose a world he already held for something not yet visible.'},
null,
{n:'From here the title began to take shape. Not because he was the strongest or richest, but because he was the quickest to affirm the truth. And a great trial would soon test that title to its root.'}
],
/* ── Bab 3 ── */
[
{n:'Years later came the night hardest to believe: the Prophet ﷺ reported a journey by night from Makkah to Jerusalem, then an ascent through the heavens — all in a single night.'},
{n:'Some who had already believed turned back. Some of Quraysh ran to Abu Bakr, certain that this time he would surely waver: “Your friend claims he went to Jerusalem and returned in one night!”'},
{r:'Abu Bakr al-Siddiq (r.a.)', x:'If he said it, then it is true. I affirm him even in news of the heavens that comes to him morning and evening — so what is farther than merely this?', s:'Ibn Ishaq’s Sira', g:'sirah'},
{n:'From then he was called al-Siddiq — the one who affirms utterly. Not a title he asked for; a title he paid for in cash precisely when everyone else doubted.'},
{a:'So this is the moment when everything he built in his character since youth was tested in a single sentence.'},
{c:'To affirm is not to stop thinking', x:'Notice Abu Bakr’s reasoning. He did not say “just believe.” He leaned on evidence he already knew: the record of a messenger who had never lied.<br><br>Affirming the unseen is built on trusting what is already proven. That is faith, not carelessness of thought.'},
{n:'Defending the Prophet in Makkah was never without cost. Once, when the polytheists set upon the Prophet near the Ka‘bah, Abu Bakr forced his way in to defend him until he himself was beaten nearly unconscious.', s:'Historical account', g:'sirah'},
{n:'When he came to, his first words were not about his own wounds. He asked: how is the Messenger of God?', s:'Historical account', g:'sirah'},
{q:'What is the core of this chapter for you?', o:[
  'The true meaning of the title al-Siddiq',
  'The price of defending truth in public'
]},
{n:'Siddiq is a truthfulness so total that a person no longer filters the truth for the sake of comfort. In the Qur’an, its rank is named just below the prophets.'},
{ay:'وَمَن يُطِعِ اللَّهَ وَالرَّسُولَ فَأُولَٰئِكَ مَعَ الَّذِينَ أَنْعَمَ اللَّهُ عَلَيْهِم مِّنَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ وَالصَّالِحِينَ',
 m:'“Whoever obeys God and the Messenger will be with those God has favoured: the prophets, the truthful (siddiqin), the martyrs, and the righteous.”',
 s:'Qur’an, al-Nisa: 69', qref:1},
null,
{n:'He could have stayed silent. His standing was still enough to protect him had he stayed neutral. But neutrality before injustice was, to him, another form of lying — and lying was exactly what he could not bear.'},
null,
{n:'The title was now his. Yet the greatest test of “affirming” had not yet come: a journey in which he would have to stake his life, not merely his reputation.'}
],
/* ── Bab 4 ── */
[
{n:'Pressure in Makkah peaked. A plot to kill the Prophet was laid. Then permission to migrate came — and the Prophet chose one man to accompany him across a desert hunted by trackers: Abu Bakr.'},
{n:'‘A’ishah, Abu Bakr’s daughter, later related that her father wept when told he would be the companion. He wept out of joy.', s:'al-Bukhari', g:'shahih'},
{a:'Weeping with joy at being led into danger that could take his life. How differently this man weighed profit and loss.'},
{n:'He had prepared two mounts well in advance, hoping the moment would come. And when they were pursued to the mouth of the Cave of Thawr, Abu Bakr trembled — not from fear of death, but that if the pursuers bent down even slightly, the Prophet would be seen.'},
{n:'The Prophet calmed him with words the Qur’an would later immortalise.'},
{ay:'ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
 m:'“…the second of two, when the two were in the cave, when he said to his companion: Do not grieve; indeed God is with us.”',
 s:'Qur’an, al-Tawbah: 40', qref:1},
{c:'Called “companion” by the Qur’an itself', x:'In this verse Abu Bakr is called <em>sahib</em> — the Prophet’s companion in the cave — and it is witnessed that “God is with us,” encompassing them both.<br><br>Some scholars count this among Abu Bakr’s highest virtues: his companionship recorded directly in the Book.', s:'Exegesis', g:'sirah'},
{n:'The secret operation was supported by his family: ‘Abdullah carried news from the city, Asma’ brought provisions, and ‘Amir ibn Fuhayrah erased their tracks by herding sheep behind them.', s:'al-Bukhari', g:'shahih'},
{q:'What stands out most about Abu Bakr’s role here?', o:[
  'A loyalty that placed the Prophet above his own life',
  'A readiness he had planned long in advance'
]},
{n:'Along the way, the accounts say he walked sometimes ahead, sometimes behind, sometimes to the Prophet’s right and left — guarding against any direction a threat might come from. He made his own body a shield.'},
null,
{n:'Preparing two mounts before permission came was no accident. His loyalty was not merely feeling; it was planned, practical, and ready to pay its cost. Mature faith always prepares itself before it is asked.'},
null,
{n:'They reached Yathrib — later named Madinah. The Makkan act was over. And in this new city, Abu Bakr would take the place he loved best: right behind the Prophet, in his shadow.'}
],
/* ── Bab 5 ── */
[
{n:'In Madinah, Abu Bakr never sought the spotlight. He was present at Badr, Uhud, and nearly every great event — but his role was more often the calm counsellor than the conspicuous hero.'},
{n:'At Hudaybiyyah, when many companions were troubled by a treaty that felt like a loss, Abu Bakr calmed them with the same logic as the Prophet: submit to God and His Messenger, even when the heart does not yet understand.', s:'al-Bukhari', g:'shahih'},
{n:'His closeness was acknowledged directly. The Prophet said that were he to take an intimate friend (khalil) other than his Lord, it would be Abu Bakr — but the brotherhood of Islam was already more than enough.', s:'al-Bukhari', g:'shahih'},
{n:'A vile slander once struck his daughter ‘A’ishah — the Prophet’s ﷺ wife — a false accusation that shook Madinah for a month. Among those who spread it was Mistah, a poor relative whom Abu Bakr had been supporting. After God revealed verses clearing ‘A’ishah’s name, Abu Bakr swore he would never again spend on Mistah.', s:'al-Bukhari', g:'shahih'},
{ay:'وَلَا يَأْتَلِ أُولُو الْفَضْلِ مِنكُمْ وَالسَّعَةِ أَن يُؤْتُوا أُولِي الْقُرْبَىٰ وَالْمَسَاكِينَ وَالْمُهَاجِرِينَ فِي سَبِيلِ اللَّهِ ۖ وَلْيَعْفُوا وَلْيَصْفَحُوا ۗ أَلَا تُحِبُّونَ أَن يَغْفِرَ اللَّهُ لَكُمْ ۗ وَاللَّهُ غَفُورٌ رَّحِيمٌ',
 m:'“And let not those of virtue and abundance among you swear not to give to their relatives, the needy, and the emigrants for the cause of God. Let them pardon and overlook. Would you not love that God should forgive you? And God is Forgiving, Merciful.”',
 s:'Qur’an, al-Nur: 22', qref:1},
{n:'Hearing the verse, Abu Bakr said at once, “Yes, by God, I love that God should forgive me.” He restored his support to Mistah as before, resolving never to cut it off again. Told to forgive, he forgave on the spot.', s:'al-Bukhari', g:'shahih'},
{n:'Then came the Prophet’s final illness. When he could no longer lead the prayer, he commanded one name to take his place before the congregation: Abu Bakr.', s:'al-Bukhari; Muslim', g:'shahih'},
{c:'An unspoken signal', x:'‘A’ishah tried to have the task shifted, fearing her father — who wept easily — could not hold up leading. The Prophet kept his choice, and even repeated it.<br><br>Many companions later read this command as a signal: whoever is fit to lead the prayer is fit to be considered to lead the community.'},
{n:'Then the Prophet died. The city shook. ‘Umar stood and threatened anyone who dared say he had passed; he could not accept it.'},
{n:'Abu Bakr entered, uncovered the Prophet’s face, kissed it, then went out to face the crowd — calm amid his own tears.'},
{r:'Abu Bakr al-Siddiq (r.a.)', x:'Whoever worshipped Muhammad — Muhammad has died. And whoever worships God — God is Ever-Living and does not die.', s:'al-Bukhari', g:'shahih'},
{ay:'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ ۚ أَفَإِن مَّاتَ أَوْ قُتِلَ انقَلَبْتُمْ عَلَىٰ أَعْقَابِكُمْ',
 m:'“Muhammad is but a messenger; messengers have passed away before him. If then he dies or is killed, will you turn back on your heels (into disbelief)?”',
 s:'Qur’an, Al ‘Imran: 144', qref:1},
{n:'‘Umar later said: when he heard Abu Bakr recite that verse, his legs could barely hold him, and only then did he truly realise the Prophet was gone.', s:'al-Bukhari', g:'shahih'},
{q:'What do you admire most about Abu Bakr at this point?', o:[
  'His calm precisely when everything collapsed',
  'He returned the community’s focus to God, not a person'
]},
{n:'All his life he was known as gentle and quick to weep. Yet on the hardest day, he was the firmest of all. Gentleness, it turned out, is no opposite of steadfastness.'},
null,
{n:'In one sentence he moved the community’s reliance from a mortal man to the eternal God. That was the heart of the message he had defended from day one: the One worshipped is God, not the bearer of His message.'},
null,
{n:'The Prophet was gone. The community had lost its axis. And in that terrifying empty space, people turned to the man who had always stood closest to the Prophet.'}
],
/* ── Bab 6 ── */
[
{n:'Before the Prophet’s ﷺ body was even buried, at Saqifah Bani Sa‘idah the Ansar and Muhajirun nearly split over who would lead. Abu Bakr defused it not by claiming a right, but by recalling unity. The community then pledged allegiance to him as the first caliph.', s:'al-Tabari', g:'sirah'},
{n:'He took the trust with reluctance, not joy. His first address as leader turned the very idea of power on its head for his age.'},
{r:'Abu Bakr al-Siddiq (r.a.)', x:'I have been placed over you, though I am not the best of you. If I do well, help me; if I go astray, set me straight. Obey me so long as I obey God and His Messenger; if I disobey them, you owe me no obedience.', s:'al-Tabari', g:'sirah'},
{c:'Power that may be corrected', x:'Notice his words: the community’s highest leader opens himself to correction by the people, and states that obedience is conditional — only so long as he obeys God.<br><br>This is not mere personal humility; it asserts a principle: there is no absolute obedience to any creature.'},
{n:'Power did not change his life. Before becoming caliph, he used to milk the goats of his neighbours. When he was appointed, a little girl feared the habit would stop — but Abu Bakr kept milking them just as before.', s:'Historical account', g:'sirah'},
{n:'At first he kept trading to support his family, until the companions asked him to take a modest stipend from the treasury so he could focus on the community.', s:'Historical account', g:'sirah'},
{a:'The leader of a state being born, still milking his neighbours’ goats. To him, power was a burden shouldered, not a prize enjoyed.'},
{q:'What stands out most about how Abu Bakr led?', o:[
  'The principle of conditional obedience',
  'His simplicity as a ruler'
]},
{n:'By opening himself to correction, Abu Bakr laid the foundation that a leader is no absolute ruler but a trustee bound by the same law. The idea was far ahead of its age.'},
null,
{n:'He refused to make office a ladder to wealth. His life barely changed — simple clothes, a simple home — because he regarded the community’s wealth as a deposit, not his own.'},
null,
{n:'Yet that calm leadership was soon tested. Before the state had even settled, a great storm came, threatening to bring it all down within months.'}
],
/* ── Bab 7 ── */
[
{n:'The Prophet’s ﷺ death shook the whole peninsula. Many tribes refused to pay zakat, some apostatised entirely, and several men rose claiming prophethood. Within months, the whole edifice could collapse.', s:'al-Tabari', g:'sirah'},
{n:'Some companions advised leniency — accept their prayer, defer the zakat question — to preserve a fragile unity. Abu Bakr firmly refused.'},
{r:'Abu Bakr al-Siddiq (r.a.)', x:'By God, if they withhold from me even a young she-goat they used to render to the Messenger of God, I will fight them for withholding it.', s:'al-Bukhari', g:'shahih'},
{c:'Firmness from the gentlest of men', x:'‘Umar himself first disagreed, then acknowledged that God had opened Abu Bakr’s heart to the decision — and he knew it was right.<br><br>This was not about a goat, but about the wholeness of the religion: to split prayer from zakat is to dismantle Islam piece by piece.'},
{n:'False prophets arose: Musaylimah the Liar in Yamamah, Tulayhah among Banu Asad, and Sajah from the east. Region after region joined the revolt.', s:'al-Tabari', g:'sirah'},
{n:'Abu Bakr organised eleven columns and sent them in every direction. His foremost general, Khalid ibn al-Walid, led battle after battle. The climax was the Battle of Yamamah against Musaylimah — ferocious, and many companions who had memorised the Qur’an fell there.', s:'al-Tabari', g:'sirah'},
{c:'The months that saved everything', x:'Had Abu Bakr wavered at this point, Islam might have fractured into loose, warring tribes.<br><br>His firmness during the Ridda wars — in under two years — restored the unity of Arabia, and became the foundation for all that came after.'},
{q:'What do you want to explore from this storm?', o:[
  'Why he was so firm about zakat',
  'The price paid at Yamamah'
]},
{n:'For Abu Bakr, zakat was no mere levy but a pillar inseparable from prayer. To let it fall was to open the door to the collapse of the other pillars. He was defending the integrity of the religion, not mere administrative compliance.'},
{m:'“But if they repent, establish prayer, and give zakat, then they are your brothers in religion.”'},
{c:'Why separating them means bringing the religion down', x:'In the Qur’an, prayer and zakat are named together almost every time — dozens of times. They are two faces of a single submission: <strong>prayer is the right of God</strong> (the vertical bond), <strong>zakat is a right attached to wealth</strong> for the weak (the horizontal bond). To uphold one while dropping the other is to submit to God only where it does not touch the purse.<br><br>Those tribes did not reject God; they rejected <em>one of His commands</em>, on the pretext that zakat was a personal tribute to Muhammad that lapsed at his death. This is where Abu Bakr saw the danger: if one definitive pillar may be discarded by reinterpretation, then every obligation becomes negotiable, and religion turns into an à-la-carte menu. Selective obedience is not half-Islam — it is a rejection of the <strong>authority</strong> of the Lawgiver Himself.<br><br>Note Abu Bakr’s exact words: he swore to fight whoever <em>separated</em> prayer from zakat. What he opposed was not their belief, but the principle of picking and choosing among God’s commands — for that is how a religion is dismantled piece by piece.'},
null,
{n:'Victory at Yamamah came at a heavy price: hundreds fell, including many who had memorised the Qur’an. Their loss lit a new anxiety — how to preserve the Qur’an as its guardians dwindled? From this wound the next great idea was born.'},
null,
{n:'The storm subsided. Arabia was one again. But Yamamah left a question that could not wait: how to ensure the Word they had defended stayed perfectly preserved?'}
],
/* ── Bab 8 ── */
[
{n:'The fall of so many memorisers at Yamamah alarmed ‘Umar. He urged Abu Bakr to gather the Qur’an into one manuscript before still more of its bearers passed away.', s:'al-Bukhari', g:'shahih'},
{n:'Abu Bakr at first hesitated: “How can I do something the Messenger of God ﷺ did not do?” But after reflection, God opened his heart, and he saw the great good in the proposal.', s:'al-Bukhari', g:'shahih'},
{n:'He entrusted Zayd ibn Thabit — a scribe of revelation — to gather it with utmost care, matching memorisation against written record. That first manuscript was then kept, passed to ‘Umar, and then to Hafsah.', s:'al-Bukhari', g:'shahih'},
{c:'Saving the text to save the ummah', x:'This first official manuscript would later become the basis when ‘Uthman standardised the codex across the lands.<br><br>One calm decision in a time of crisis kept the Qur’an intact for all time — a chain of preservation that began with Abu Bakr’s courage.'},
{n:'Amid the early chaos, one command of the Prophet remained unfinished: the army under the very young Usamah ibn Zayd, prepared for the Byzantine frontier. Many advised delaying it while Madinah was in danger.'},
{r:'Abu Bakr al-Siddiq (r.a.)', x:'I will not hold back an army the Messenger of God ﷺ had already sent forth. Even if the wild beasts were to drag me away, I would still send Usamah.', s:'al-Tabari', g:'sirah'},
{n:'So he dispatched Usamah’s army — completing the Prophet’s command — then opened new fronts: sending Khalid toward Iraq (Persia) and armies toward the Levant (Byzantium). The great conquests his successors would finish began in his hands.', s:'al-Tabari', g:'sirah'},
{q:'Which legacy do you want to trace?', o:[
  'The gathering of the Qur’an',
  'Usamah and the opening of the frontiers'
]},
{n:'He guarded the most precious thing: the Word of God. From one carefully gathered manuscript in his time came the certainty that what the ummah reads today is the same as what was revealed.'},
null,
{n:'By insisting on sending Usamah, he affirmed that the Prophet’s command is not annulled merely by hard circumstances. And by opening the fronts of Iraq and the Levant, he laid the first stone of an expansion that would change the face of the world.'},
null,
{n:'In so short a time, he saved the Word within and released the banners without. His task was nearly complete — and his body began to tire.'}
],
/* ── Bab 9 ── */
[
{n:'After about two years of leadership, Abu Bakr fell ill. He felt his end was near, and his mind turned to one thing: that the community must not split again after him.'},
{n:'He consulted the senior companions, then appointed ‘Umar as his successor. Some feared ‘Umar was too harsh; Abu Bakr reassured them that the weight of responsibility would soften ‘Umar’s severity. He chose the most capable, not the closest.', s:'al-Tabari', g:'sirah'},
{n:'He remembered the stipend he had taken from the treasury, and directed that a plot of his land be sold to repay all of it — he would not meet his Lord carrying even a little of the community’s wealth.', s:'Historical account', g:'sirah'},
{r:'Abu Bakr al-Siddiq (r.a.)', x:'I wish I were only a tree by the roadside, whose fruit is eaten and then it is left behind.', s:'Athar', g:'sirah'},
{c:'A fear that guards', x:'Those words were no jest. The man who held the greatest power in Arabia wished instead to be something never called to account.<br><br>It was that dread of the reckoning that kept his rule clean from beginning to end.'},
{n:'He died in the year 13 AH, at about sixty-three — the same age as the Prophet ﷺ at his death — and was buried right beside him.', s:'Historical account', g:'sirah'},
{q:'What stays with you most about the end of Abu Bakr’s life?', o:[
  'His choice of ‘Umar',
  'His humility to the very end'
]},
{n:'By appointing a successor through consultation, he saved the community from a vacuum and a struggle for power. He put the community’s welfare above feeling and closeness — consistent with his entire life.'},
null,
{n:'To his last breath, he felt entitled to nothing from the ummah. Repaying his stipend, wishing to be an unremembered tree, buried without pomp — he left as lightly as he came.'},
null,
{n:'Two years that decided the fate of a religion, carried by a man who never wanted its seat. He was buried beside the friend he loved most — exactly like his life: always behind the Prophet, in his shadow.'},
{a:'From an honest merchant, to the companion in the cave, to the man who held the community together — and he sealed it all with the single word he had held from the start: true.'}
]
];

const AB_SCENES = ['mecca','mecca','ascent','cave','madinah','madinah','battlefield','interior','interior'];

/* ============================================================
   UMAR BIN KHATTAB (AL-FARUQ) — kronik lengkap (dwibahasa)
   ============================================================ */
const UM_CH = [
{id:1, glyph:'د', yr:'583', years:'c. 583 M · Mekah', title:'Sebelum Islam',
blurb:'Bangsawan Bani Adi yang keras, melek huruf, dan ditakuti — sekaligus penentang paling garang bagi dakwah.',
nodes:[
{n:'Di Mekah, dari kabilah Bani Adi bin Ka‘b, lahir Umar bin Khattab — sekitar satu dekade lebih muda dari Nabi ﷺ. Kabilahnya memegang urusan kedutaan Quraisy: mewakili kota dalam perundingan dan sengketa.', s:'Ibnu Sa‘d, Ath-Thabaqat', g:'sirah'},
{a:'Seorang diplomat kabilah. Apa yang membuat sosok ini kelak begitu menentukan?'},
{n:'Ia salah satu dari segelintir orang Mekah yang bisa membaca dan menulis — kemampuan langka di kota yang mengandalkan hafalan. Tubuhnya tinggi tegap, suaranya menggetarkan, dan kehadirannya membuat orang menyingkir.', s:'Riwayat sejarah', g:'sirah'},
{n:'Tapi kekuatan itu berdiri di pihak yang salah. Umar adalah pembela paling keras berhala Quraisy dan musuh paling garang bagi para pengikut Muhammad ﷺ. Ia menyakiti kaum lemah yang beriman tanpa ragu.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{c:'Kekuatan yang belum menemukan arah', x:'Umar bukan orang jahat tanpa nurani. Ia punya rasa keadilan yang kuat — hanya saja ia mengira keadilan itu ada pada mempertahankan tatanan lama.<br><br>Kadang jarak antara musuh terbesar sebuah kebenaran dan pembelanya yang paling gigih hanya satu hal: ke mana kekuatan itu diarahkan.'},
{n:'Ia peminum di masa Jahiliah, keras terhadap keluarganya, dan tak segan menghukum. Orang menghormatinya, tapi lebih sering karena takut.'},
{q:'Apa yang paling menonjol dari Umar sebelum Islam?', o:[
  {l:'Kekuatan dan kedudukannya di Quraisy', to:'um1_kuat'},
  {l:'Perlawanannya yang garang pada Islam', to:'um1_lawan'}
]},
{k:'um1_kuat', n:'Sebagai wakil Quraisy dalam diplomasi dan sosok yang ditakuti, suaranya didengar. Kelak, ketika kekuatan yang sama berpindah membela Islam, umat yang tadinya sembunyi-sembunyi mulai berani terang-terangan.'},
{j:'um1_g'},
{k:'um1_lawan', n:'Justru karena ia musuh yang paling ditakuti, keislamannya nanti akan mengguncang seluruh Mekah. Ketika benteng terkuat lawan roboh dan berbalik arah, dampaknya jauh melampaui satu orang.'},
{j:'um1_g'},
{k:'um1_g', n:'Watak-watak yang membuatnya berbahaya bagi Islam — keras, berani, tak kenal takut — adalah persis watak yang kelak menjadikannya perisai Islam. Yang perlu berubah bukan wataknya, melainkan arahnya.'}
]},

{id:2, glyph:'ذ', yr:'616', years:'c. 616 M · Mekah', title:'Malam Perubahan',
blurb:'Ia keluar rumah untuk membunuh Nabi. Ia pulang sebagai muslim — dan kaum muslim untuk pertama kalinya berani shalat terang-terangan.',
nodes:[
{n:'Kaum muslim masih tertekan dan bersembunyi. Dalam situasi itu, Nabi ﷺ pernah memanjatkan sebuah doa yang tidak biasa.'},
{sb:'اللَّهُمَّ أَعِزَّ الإِسْلاَمَ بِأَحَبِّ هَذَيْنِ الرَّجُلَيْنِ إِلَيْكَ: بِأَبِي جَهْلٍ أَوْ بِعُمَرَ بْنِ الْخَطَّابِ', m:'“Ya Allah, muliakanlah Islam dengan salah satu dari dua orang yang lebih Engkau cintai ini: Abu Jahal atau Umar bin Khattab.”', s:'HR. At-Tirmidzi; Ahmad', g:'hasan'},
{n:'Suatu hari, Umar keluar dengan pedang terhunus — tujuannya membunuh Muhammad ﷺ dan mengakhiri persoalan ini sekali untuk selamanya.'},
{n:'Di jalan ia dicegat dan ditanya balik: urus dulu rumahmu sendiri. Adik perempuanmu, Fatimah, dan suaminya telah masuk Islam.'},
{n:'Umar berbalik menuju rumah adiknya. Dari luar ia mendengar lantunan Al-Qur’an. Ia masuk dengan marah dan sempat memukul hingga adiknya berdarah. Tetapi Fatimah berdiri tegak: “Lakukan apa maumu — kami tidak akan meninggalkan Islam.”', s:'Sirah Ibnu Ishaq', g:'sirah'},
{n:'Sesuatu retak dalam dirinya melihat darah dan keteguhan itu. Amarahnya luruh menjadi rasa ingin tahu. Ia meminta membaca lembaran yang tadi dibacakan; lembaran itu berisi awal Surah Thaha.', s:'Sirah Ibnu Ishaq', g:'sirah'},
{ay:'إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي', m:'“Sungguh, Akulah Allah, tidak ada tuhan selain Aku, maka sembahlah Aku dan tegakkanlah shalat untuk mengingat-Ku.”', s:'QS Thaha: 14', qref:1},
{n:'Kata-kata itu menembusnya. Ia yang bisa membaca, membaca sendiri — dan tak menemukan celah untuk mendustakannya. Hari itu juga ia pergi menemui Nabi ﷺ dan menyatakan diri masuk Islam.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{c:'Intensitas yang sama, arah yang berbalik', x:'Umar tidak berubah menjadi lembut dan ragu setelah beriman. Ia tetap Umar yang keras dan berani — hanya saja seluruh energi itu kini menghadap arah yang berlawanan.<br><br>Doa Nabi terkabul: Islam dimuliakan lewat orang yang tadinya hendak menghancurkannya.'},
{q:'Apa yang ingin kau dalami dari malam ini?', o:[
  {l:'Kenapa Al-Qur’an begitu menggoncangnya', to:'um2_quran'},
  {l:'Apa yang berubah setelah ia beriman', to:'um2_dampak'}
]},
{k:'um2_quran', n:'Ia melek huruf dan jujur pada dirinya. Ketika membaca sendiri, tanpa perantara, ia tak bisa berpura-pura tidak paham. Kejujuran pada kebenaran — begitu ia melihatnya — lebih kuat daripada kesombongan yang selama ini ia bela.'},
{j:'um2_g'},
{k:'um2_dampak', n:'Dengan masuknya Umar, kaum muslim berani shalat terang-terangan di dekat Ka‘bah untuk pertama kalinya. Kehadirannya adalah tameng. Sejak itu ia dijuluki Al-Faruq — pembeda antara yang benar dan yang batil.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{j:'um2_g'},
{k:'um2_g', n:'Al-Faruq. Gelar itu merangkum seluruh dirinya: seseorang yang, begitu melihat garis antara benar dan salah, tak sanggup lagi berdiri di sisi yang salah.'}
]},

{id:3, glyph:'ر', yr:'622', years:'622 – 632 M · Madinah', title:'Al-Faruq',
blurb:'Penasihat yang pendapatnya berkali-kali sejalan dengan wahyu — dan lelaki keras yang paling mudah menangis karena takut kepada Allah.',
nodes:[
{n:'Di Madinah, Umar menjadi salah satu penasihat terdekat Nabi ﷺ. Pandangannya tajam, dan beberapa kali usulannya justru mendahului atau bertepatan dengan turunnya wahyu.'},
{c:'Ketika pendapat manusia bertemu wahyu', x:'Para ulama menyebutnya <em>Muwafaqat Umar</em> — kesesuaian pendapat Umar dengan Al-Qur’an. Ia mengusulkan agar Maqam Ibrahim dijadikan tempat shalat, mengusulkan pengaturan hijab, dan bersikap tegas atas tawanan Badar — lalu ayat turun menguatkannya.', s:'HR. Al-Bukhari', g:'shahih'},
{ay:'وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى', m:'“Dan jadikanlah sebagian Maqam Ibrahim sebagai tempat shalat.”', s:'QS Al-Baqarah: 125', qref:1},
{n:'Maqam Ibrahim hanyalah salah satunya. Umar juga pernah mengusulkan agar istri-istri Nabi ﷺ ditutupi dari pandangan para tamu yang bermacam-macam — lalu turun ayat hijab.'},
{ay:'وَإِذَا سَأَلْتُمُوهُنَّ مَتَاعًا فَاسْأَلُوهُنَّ مِن وَرَاءِ حِجَابٍ ۚ ذَٰلِكُمْ أَطْهَرُ لِقُلُوبِكُمْ وَقُلُوبِهِنَّ', m:'“Dan apabila kamu meminta sesuatu kepada mereka (istri-istri Nabi), mintalah dari balik tabir. Cara itu lebih suci bagi hatimu dan hati mereka.”', s:'QS Al-Ahzab: 53; asbabun nuzul HR. Al-Bukhari no. 4790', g:'shahih', qref:1},
{n:'Tentang khamr, ia berulang kali berdoa: “Ya Allah, berilah kami penjelasan yang tegas tentang khamr.” Larangan itu turun bertahap, dan berhenti pada ayat yang paling terang.', s:'HR. Abu Dawud; At-Tirmidzi', g:'hasan'},
{ay:'إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنصَابُ وَالْأَزْلَامُ رِجْسٌ مِّنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ', m:'“Sesungguhnya khamr, judi, (berkurban untuk) berhala, dan mengundi nasib adalah kekejian dari perbuatan setan. Maka jauhilah.”', s:'QS Al-Ma’idah: 90', qref:1},
{n:'Kedekatan dan kewibawaannya diakui langsung oleh Nabi.'},
{sb:'وَالَّذِي نَفْسِي بِيَدِهِ مَا لَقِيَكَ الشَّيْطَانُ سَالِكًا فَجًّا قَطُّ إِلَّا سَلَكَ فَجًّا غَيْرَ فَجِّكَ', m:'“Demi Zat yang jiwaku ada di tangan-Nya, tidaklah setan menemuimu berjalan di suatu jalan, kecuali ia mengambil jalan lain selain jalanmu.”', s:'HR. Al-Bukhari; Muslim', g:'shahih'},
{sb:'لَوْ كَانَ بَعْدِي نَبِيٌّ لَكَانَ عُمَرَ بْنَ الْخَطَّابِ', m:'“Seandainya ada nabi setelahku, tentulah ia Umar bin Khattab.”', s:'HR. At-Tirmidzi', g:'hasan'},
{n:'Namun di balik ketegasan yang ditakuti itu, Umar adalah orang yang paling mudah menangis dalam shalat, dan paling gentar ketika mengingat hari perhitungan.'},
{q:'Sisi mana dari Al-Faruq yang ingin kau telusuri?', o:[
  {l:'Ketegasannya membela kebenaran', to:'um3_tegas'},
  {l:'Ketakwaan dan air matanya', to:'um3_takwa'}
]},
{k:'um3_tegas', n:'Ketegasan Umar bukan kekasaran tanpa isi. Ia berani mengatakan yang benar meski pahit, bertanya ketika ragu, dan tak takut berbeda — bahkan di hadapan orang-orang besar. Keberanian itulah yang membuat kebenaran punya penjaga.'},
{j:'um3_g'},
{k:'um3_takwa', n:'Orang yang paling ditakuti manusia justru paling takut kepada Allah. Ia pernah berandai menjadi sehelai jerami, bahkan berandai tak pernah dilahirkan, saking takutnya pada hisab. Kekuatan sejati, pada Umar, selalu tunduk pada rasa takut yang benar.'},
{j:'um3_g'},
{k:'um3_g', n:'Tegas kepada manusia, lembut kepada Tuhannya. Perpaduan itulah yang kelak dibawanya ke kursi yang tak pernah ia cari.'}
]},

/* id:10 dipilih agar mewarisi MOODS bernuansa medan perang (lihat data/scenes.js) */
{id:10, glyph:'ز', yr:'624', years:'622 – 628 M · Di Sisi Nabi', title:'Perisai di Sisi Nabi',
blurb:'Hijrah yang ia umumkan terang-terangan, pedang yang terhunus di Badar, jawaban untuk Abu Sufyan di Uhud, dan pelajaran tunduk di Hudaibiyah.',
nodes:[
{n:'Setelah malam yang membalik arah hidupnya, Umar tak lagi menjadi ancaman bagi Islam — ia menjadi salah satu tiang penopangnya. Dan perannya di sisi Nabi ﷺ tidak berhenti di majelis nasihat: ia hadir di jalanan Mekah, di medan perang, dan di meja perundingan.'},
{a:'Aku ingin tahu — apa yang ia lakukan ketika kata-kata tak lagi cukup, dan yang dibutuhkan justru tubuh yang berani berdiri di depan?'},
{n:'Ketika perintah hijrah ke Madinah turun, sebagian besar kaum muslim berangkat diam-diam, menyelinap di kegelapan agar tak dicegat Quraisy. Umar memilih jalan yang berbeda.'},
{r:'Ali bin Abi Thalib r.a.', x:'Aku tidak mengetahui seorang pun berhijrah kecuali dengan sembunyi-sembunyi, kecuali Umar. Ketika hendak berhijrah, ia menyandang pedangnya, memanggul busurnya, lalu mendatangi Ka‘bah dan bertawaf. Kemudian ia berkata kepada orang-orang Quraisy yang berkumpul: “Barang siapa ingin ibunya kehilangan dirinya, anaknya menjadi yatim, dan istrinya menjadi janda — temuilah aku di balik lembah ini.” Tak seorang pun berani mengikutinya.', s:'Riwayat dalam kitab sirah; sebagian jalur sanadnya diperbincangkan', g:'sirah'},
{c:'Dakwah yang berupa keberanian terbuka', x:'Tidak semua orang bisa — atau harus — berhijrah dengan cara Umar. Kaum lemah yang tak punya pelindung wajar menyelinap demi keselamatan. Tetapi keberanian Umar yang terang-terangan punya fungsi tersendiri: ia menunjukkan kepada yang gentar bahwa iman bisa ditegakkan tanpa menunduk. Kadang dakwah bukan kata-kata, melainkan satu orang yang berani berdiri di tempat terbuka.'},
{n:'Di Badar — pertempuran besar pertama — Umar bertempur di barisan terdepan. Riwayat menyebut ia menebas kerabatnya sendiri dari pihak musyrik; di medan itu, pedang tak lagi mengenal nasab ketika berhadapan dengan kebatilan.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{n:'Seusai kemenangan, muncul persoalan tawanan. Abu Bakar mengusulkan tebusan dan kelembutan — mereka kerabat, siapa tahu keturunannya kelak beriman. Umar mengusulkan yang berlawanan: pancung para pemuka kekufuran itu, agar tak ada lagi tulang punggung bagi kesyirikan. Nabi ﷺ condong pada pendapat Abu Bakar.'},
{ay:'مَا كَانَ لِنَبِيٍّ أَن يَكُونَ لَهُ أَسْرَىٰ حَتَّىٰ يُثْخِنَ فِي الْأَرْضِ ۚ تُرِيدُونَ عَرَضَ الدُّنْيَا وَاللَّهُ يُرِيدُ الْآخِرَةَ', m:'“Tidaklah pantas bagi seorang nabi mempunyai tawanan sebelum ia dapat melumpuhkan musuhnya di bumi. Kalian menghendaki harta benda duniawi, sedangkan Allah menghendaki (pahala) akhirat.”', s:'QS Al-Anfal: 67', qref:1},
{sb:'لَوْ نَزَلَ مِنَ السَّمَاءِ عَذَابٌ مَا نَجَا مِنْهُ إِلَّا عُمَرُ', m:'“Seandainya azab turun dari langit, niscaya tidak ada yang selamat darinya kecuali Umar.”', s:'HR. Muslim no. 1763', g:'shahih'},
{n:'Setahun kemudian di Uhud, keadaan berbalik. Kaum muslim terpukul, banyak yang gugur, dan Abu Sufyan berdiri di atas ketinggian membanggakan berhalanya: “Tinggikanlah Hubal!”'},
{n:'Nabi ﷺ menyuruh para sahabat menjawab. Ketika Abu Sufyan berseru, “Kami punya ‘Uzza, dan kalian tak punya ‘Uzza!” — Umar-lah yang menyahut dengan lantang atas perintah beliau: “اللَّهُ مَوْلَانَا وَلَا مَوْلَى لَكُمْ” — Allah pelindung kami, dan kalian tak punya pelindung.', s:'HR. Al-Bukhari no. 3039, 4043', g:'shahih'},
{n:'Enam tahun setelah hijrah, di Hudaibiyah, Nabi ﷺ menerima syarat perjanjian yang di mata banyak sahabat tampak merendahkan: kaum muslim harus pulang tahun itu tanpa umrah, dan siapa pun dari Quraisy yang datang kepada Nabi harus dikembalikan. Umar tak sanggup menahan gejolaknya.'},
{r:'Umar bin Khattab r.a.', x:'Aku mendatangi Nabi ﷺ dan berkata: “Bukankah engkau benar-benar Nabi Allah? Bukankah kita di atas kebenaran dan musuh kita di atas kebatilan? Lalu mengapa kita memberi kehinaan dalam agama kita?”', s:'HR. Al-Bukhari no. 2731-2732; Muslim no. 1785', g:'shahih'},
{sb:'إِنِّي رَسُولُ اللَّهِ وَلَسْتُ أَعْصِيهِ وَهُوَ نَاصِرِي', m:'“Aku adalah utusan Allah, aku tidak akan mendurhakai-Nya, dan Dia-lah penolongku.”', s:'HR. Al-Bukhari no. 2731; Muslim no. 1785', g:'shahih'},
{c:'Ketika yang terkuat pun harus tunduk', x:'Umar tidak salah karena marah membela agama; ia keliru karena mengira ukuran kebenaran adalah menang hari ini. Ketika Surah Al-Fath turun menyebut perjanjian itu sebagai <em>“kemenangan yang nyata”</em>, ia mengerti. Sepanjang sisa hidupnya ia bersedekah, berpuasa, dan memerdekakan budak sebagai penebus kata-katanya hari itu. Kekuatan sejati bukan tak pernah keliru, melainkan berani tunduk ketika keliru.'},
{q:'Dua sisi Umar di sisi Nabi — mana yang ingin kau dalami?', o:[
  {l:'Keberaniannya di medan perang', to:'umn_perang'},
  {l:'Ketundukannya di Hudaibiyah', to:'umn_tunduk'}
]},
{k:'umn_perang', n:'Umar hadir di Badar, Uhud, Khandaq, dan hampir setiap ekspedisi besar bersama Nabi ﷺ. Kehadirannya adalah jaminan: musuh tahu bahwa di barisan itu ada orang yang tak gentar mati. Keberanian yang dulu ditakuti kaum muslim kini menjadi tembok yang melindungi mereka.'},
{j:'umn_g'},
{k:'umn_tunduk', n:'Lelaki yang berani menantang seluruh Quraisy seorang diri, di Hudaibiyah justru menundukkan akalnya di hadapan satu kalimat Nabi ﷺ. Ia belajar bahwa keberanian tertinggi bukan melawan, melainkan tunduk kepada hikmah yang lebih besar dari penglihatannya sendiri.'},
{j:'umn_g'},
null,
{k:'umn_g', n:'Di majelis ia menasihati, di medan ia melindungi, di perundingan ia belajar menahan diri. Umar di masa Nabi bukan sekadar sahabat yang kuat — ia adalah pelajaran tentang bagaimana kekuatan yang besar berkhidmat kepada kebenaran yang jauh lebih besar.'},
{a:'Ternyata perisai paling kokoh pun tetap harus belajar kapan menghunus pedang, dan kapan menyarungkannya.'}
]},

{id:4, glyph:'ز', yr:'632', years:'632 M · Madinah', title:'Guncangan',
blurb:'Cintanya begitu besar hingga ia menolak percaya Nabi wafat — lalu menjadi orang yang menahan umat agar tak pecah.',
nodes:[
{n:'Ketika Nabi ﷺ wafat, Umar tak sanggup menerimanya. Ia berdiri dengan pedang, mengancam siapa pun yang mengatakan beliau telah tiada, dan bersikeras beliau hanya pergi sebentar seperti Musa.', s:'HR. Al-Bukhari', g:'shahih'},
{a:'Cinta yang begitu besar sampai menolak kenyataan. Kadang keteguhan pun bisa menjadi bentuk penyangkalan.'},
{n:'Abu Bakar masuk, lalu keluar menenangkan orang banyak. Ketika ia membacakan sebuah ayat, barulah kaki Umar seakan tak kuat menahannya.'},
{ay:'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ ۚ أَفَإِن مَّاتَ أَوْ قُتِلَ انقَلَبْتُمْ عَلَىٰ أَعْقَابِكُمْ', m:'“Muhammad hanyalah seorang rasul; sungguh telah berlalu rasul-rasul sebelumnya. Apakah jika ia wafat atau terbunuh, kamu berbalik ke belakang?”', s:'QS Ali Imran: 144', qref:1},
{n:'Di Saqifah, ketika kaum Anshar dan Muhajirin nyaris berselisih soal kepemimpinan, Umar bertindak cepat. Ia menepis ambisinya sendiri dan mengulurkan tangan lebih dulu membaiat Abu Bakar.', s:'HR. Al-Bukhari', g:'shahih'},
{c:'Menundukkan ego demi persatuan', x:'Umar adalah tokoh yang sangat mungkin diperebutkan untuk memimpin. Tapi ia melihat bahwa pada saat genting, yang dibutuhkan bukan siapa yang paling kuat, melainkan apa yang menjaga umat tetap satu.<br><br>Lelaki yang paling keras itu memilih menjadi pengikut — dan justru itulah kepemimpinan.'},
{n:'Sepanjang kekhalifahan Abu Bakar, Umar menjadi penopang terdekatnya, termasuk saat keputusan-keputusan sulit Perang Riddah.'},
{q:'Apa yang paling kau soroti dari Umar di sini?', o:[
  {l:'Kedukaan dan penyangkalannya', to:'um4_duka'},
  {l:'Perannya menyatukan umat', to:'um4_satu'}
]},
{k:'um4_duka', n:'Penyangkalan Umar bukan kelemahan iman, melainkan luapan cinta yang belum siap kehilangan. Ia butuh ayat Allah — bukan sekadar kabar — untuk menerima. Bahkan yang terkuat pun rapuh di hadapan perpisahan.'},
{j:'um4_g'},
{k:'um4_satu', n:'Di titik paling rawan dalam sejarah umat, satu tindakan Umar — mengulurkan tangan lebih dulu — menutup pintu perpecahan. Ia mengubah potensi keretakan menjadi kesepakatan hanya dengan mendahulukan yang benar di atas dirinya.'},
{j:'um4_g'},
{k:'um4_g', n:'Ketika Abu Bakar menjelang wafat, ia memandang ke sekeliling dan memilih orang yang paling mampu memikul beban itu: Umar. Sang penopang kini menjadi tiang.'}
]},

/* id:12 dipilih agar mewarisi MOODS malam yang tenang & reflektif (lihat data/scenes.js) */
{id:12, glyph:'ص', yr:'632', years:'632 – 634 M · Dua Sahabat', title:'Sahabat yang Tak Terkejar',
blurb:'Dua watak yang berlawanan, satu arah. Lomba sedekah yang tak pernah ia menangkan, seorang nenek buta yang dilayani diam-diam, dan permintaan terakhir untuk berbaring di sisi sahabatnya.',
nodes:[
{n:'Ketika Nabi ﷺ wafat, dua orang yang paling dekat dengan beliau kini berdiri paling dekat satu sama lain. Abu Bakar menjadi khalifah; Umar menjadi tangan kanannya. Tetapi persahabatan mereka jauh lebih tua dari kekhalifahan itu.'},
{a:'Aku penasaran pada ikatan ini. Umar yang keras, Abu Bakar yang lembut — apa yang membuat keduanya begitu terpaut?'},
{n:'Nabi ﷺ sendiri yang menautkan mereka. Ketika ‘Amr bin Al-‘Ash bertanya siapa manusia yang paling beliau cintai, beliau menjawab: “Aisyah.” “Dari kalangan lelaki?” “Ayahnya (Abu Bakar).” “Lalu siapa?” “Umar,” — dan beliau menyebut beberapa nama sesudahnya.', s:'HR. Al-Bukhari no. 3662; Muslim no. 2384', g:'shahih'},
{sb:'إِنَّ لِي وَزِيرَيْنِ مِنْ أَهْلِ السَّمَاءِ وَوَزِيرَيْنِ مِنْ أَهْلِ الْأَرْضِ؛ فَوَزِيرَايَ مِنْ أَهْلِ السَّمَاءِ جِبْرِيلُ وَمِيكَائِيلُ، وَوَزِيرَايَ مِنْ أَهْلِ الْأَرْضِ أَبُو بَكْرٍ وَعُمَرُ', m:'“Sesungguhnya aku memiliki dua menteri dari penghuni langit dan dua menteri dari penghuni bumi. Dua menteriku dari langit adalah Jibril dan Mikail, dan dua menteriku dari bumi adalah Abu Bakar dan Umar.”', s:'HR. At-Tirmidzi no. 3680', g:'hasan'},
{n:'Umar sering mengenang satu hari — hari ketika ia mengira, akhirnya, ia bisa mengungguli sahabatnya.'},
{r:'Umar bin Khattab r.a.', x:'Rasulullah ﷺ memerintahkan kami bersedekah, dan saat itu aku sedang punya harta. Aku berkata dalam hati: “Hari ini aku akan mengalahkan Abu Bakar, kalau memang pernah bisa.” Maka kubawa separuh hartaku. Nabi ﷺ bertanya, “Apa yang kau tinggalkan untuk keluargamu?” Kujawab, “Sebanyak ini juga.” Lalu Abu Bakar datang membawa <em>seluruh</em> yang ia miliki. Beliau bertanya, “Apa yang kau tinggalkan untuk keluargamu?” Abu Bakar menjawab, “Kutinggalkan untuk mereka Allah dan Rasul-Nya.” Aku pun berkata: “Aku tidak akan pernah bisa mengunggulimu dalam apa pun, selamanya.”', s:'HR. Abu Dawud no. 1678; At-Tirmidzi no. 3675', g:'hasan'},
{c:'Persaingan yang justru dalam memberi', x:'Perhatikan bentuk lombanya: bukan siapa yang menumpuk lebih banyak, melainkan siapa yang <em>melepas</em> lebih banyak. Umar mengukur dirinya bukan pada kekuasaan Abu Bakar, tapi pada kedermawanannya. Ada persahabatan yang seluruh rivalitasnya adalah tentang siapa yang lebih dulu berkorban — dan Umar, lelaki yang ditakuti dunia, dengan tulus mengakui ia kalah.'},
{n:'Kini Abu Bakar menjadi khalifah — dan ia tak berubah sedikit pun. Umar memperhatikan sesuatu: sebelum fajar, sahabatnya kerap menyelinap keluar ke pinggir kota, lalu kembali tanpa berkata apa-apa. Suatu subuh, Umar diam-diam mengikutinya.'},
{n:'Ia mendapati sebuah kemah reyot. Di dalamnya seorang nenek tua yang buta dan lumpuh. Abu Bakar masuk, membersihkan rumahnya, menyiapkan makanannya, mengurus keperluannya — dan perempuan itu sama sekali tidak tahu bahwa yang melayaninya adalah khalifah kaum muslim.', s:'Riwayat masyhur; sanadnya lemah', g:'dhaif'},
{r:'Umar bin Khattab r.a.', x:'Engkau telah membuat letih siapa pun yang menjadi khalifah sesudahmu, wahai Abu Bakar!', s:'Riwayat masyhur; sanadnya lemah', g:'dhaif'},
{c:'Sebuah kisah yang indah — dan jujur tentang derajatnya', x:'Riwayat nenek buta ini sangat masyhur, tetapi sanadnya lemah; kami menampilkannya bukan sebagai peristiwa yang pasti terjadi, melainkan sebagai gambaran atas watak Abu Bakar yang <em>memang</em> tsabit dari jalur lain: kebiasaannya bersedekah sembunyi-sembunyi dan melayani yang lemah tanpa ingin dilihat. Kadang sebuah cerita bertahan berabad-abad bukan karena sanadnya, melainkan karena ia jujur menggambarkan orangnya.'},
{n:'Dua tahun berlalu. Abu Bakar sakit, dan ajalnya mendekat. Ketika ia hendak menunjuk Umar sebagai penggantinya, sebagian orang mengkhawatirkan sifat keras Umar. Abu Bakar menjawab bahwa jika kelak Allah bertanya, ia akan berkata: “Aku angkat yang terbaik di antara mereka.”', s:'Riwayat sejarah — Ath-Thabari', g:'sirah'},
{n:'Lalu Abu Bakar wafat. Dan Umar — lelaki yang dulu menghunus pedang, yang menaklukkan hati orang dengan gentar — menangis untuk sahabatnya yang lembut. Sampai akhir hayatnya, permintaan terakhir Umar adalah dimakamkan di sisi Nabi ﷺ dan Abu Bakar: berbaring selamanya di samping sahabat yang tak pernah bisa ia kejar.'},
{q:'Sisi mana dari persahabatan ini yang ingin kau dalami?', o:[
  {l:'Lomba mereka dalam kebaikan', to:'uab_lomba'},
  {l:'Umar tunduk pada Abu Bakar', to:'uab_tunduk'}
]},
{k:'uab_lomba', n:'Persaingan mereka tak pernah tentang kuasa atau kedudukan — hanya tentang siapa yang lebih banyak memberi, siapa yang lebih dulu berkorban, siapa yang lebih rahasia sedekahnya. Yang keras dan yang lembut berlomba menuju cahaya yang sama.'},
{j:'uab_g'},
{k:'uab_tunduk', n:'Lelaki yang ditakuti dari Persia hingga Romawi menyebut Abu Bakar “tuan kami”. Ketika Abu Bakar terpilih, Umar-lah yang pertama mengulurkan tangan berbaiat. Ia paham bahwa kekuatan pun harus tunduk pada sesuatu yang lebih lembut dan lebih benar darinya.'},
{j:'uab_g'},
null,
{k:'uab_g', n:'Dua tabiat yang berlawanan, satu arah. Umar menghabiskan hidupnya mengejar seorang sahabat yang selalu selangkah lebih dulu dalam memberi — dan di ujung segalanya, ia hanya meminta satu hal: diizinkan beristirahat di sisinya.'},
{a:'Mungkin itulah ukuran persahabatan sejati: bukan siapa yang menang, melainkan kepada siapa kau ingin berbaring berdampingan ketika semua selesai.'}
]},

{id:5, glyph:'س', yr:'634', years:'634 – 644 M · 13 – 23 H', title:'Keadilan yang Menakutkan',
blurb:'Sepuluh tahun yang mengubah peta dunia — namun sang penakluk berjalan menuntun unta pelayannya dan gemetar di hadapan Allah.',
nodes:[
{n:'Umar menjadi khalifah kedua. Ia orang pertama yang dipanggil <em>Amirul Mukminin</em> — pemimpin orang-orang beriman.', s:'Riwayat sejarah', g:'sirah'},
{n:'Ia membangun negara: mendirikan diwan (daftar tunjangan rakyat), menetapkan penanggalan Hijriah, menata peradilan, dan memisahkan kas negara dari harta pribadi.', s:'Riwayat sejarah', g:'sirah'},
{n:'Pemerintahannya bukan sekadar menaklukkan, melainkan menata. Ia melembagakan ronda malam untuk keamanan, mengangkat dan menggaji para hakim seperti Syuraih dan Abu Musa al-Asy‘ari, menunjuk pengawas pasar (hisbah) yang memeriksa timbangan dan harga, mencatat rakyat dalam diwan untuk membagikan tunjangan, dan memanggil para gubernur agar diperiksa terbuka di musim haji.', s:'Riwayat sejarah', g:'sirah'},
{vid:'595', n:'Tetapi keadilan, baginya, bukan konsep di atas kertas — ia memeriksanya sendiri dengan kakinya. Di tahun paceklik, ia biasa berkeliling pinggiran Madinah pada malam hari bersama pelayannya, Aslam, memastikan tak ada satu perut pun yang terlewat.', s:'Riwayat sejarah', g:'sirah'},
{vid:'596', n:'Suatu malam ia melihat nyala api dari kejauhan. Seorang perempuan menjerang periuk di atas tungku, dikelilingi anak-anak yang menangis. Umar mendekat dan bertanya. Ternyata di dalam periuk hanya ada air dan batu — ia mengaduknya agar anak-anaknya mengira makanan sedang dimasak, sampai mereka lelah dan tertidur.'},
{vid:'597', n:'Perempuan itu — tak tahu kepada siapa ia sedang bicara — mengeluh lirih: “Biarlah Allah yang mengadili antara kami dan Umar. Bagaimana ia bisa tidur kenyang sementara kami kelaparan?”'},
{vid:'597', a:'Bayangkan menjadi penguasa, lalu mendengar rakyatmu mengadukanmu — kepada Tuhan, tepat di depanmu, tanpa tahu bahwa itu kau.'},
{vid:'599_600', n:'Umar bergegas kembali ke Baitul Mal dan memikul sendiri sekarung gandum serta sekantong lemak di punggungnya. Aslam menawarkan diri memanggulnya. Umar menolak.'},
{vid:'599_600', r:'Umar bin Khattab r.a.', x:'Apakah kau akan memikul dosaku untukku pada Hari Kiamat?', s:'Riwayat sejarah; derajatnya diperbincangkan', g:'sirah'},
{vid:'601', n:'Ia memasak sendiri untuk mereka, meniup api hingga asap menyelinap ke janggutnya, dan tidak beranjak sampai anak-anak itu makan kenyang lalu tertawa kembali. Baru setelah itu ia pulang.'},
{c:'Tanggung jawab yang dipikul sendiri, bukan didelegasikan', x:'Ia bisa saja menyuruh pelayannya membawa gandum itu. Ia justru memanggulnya sendiri — sebab beban itu, di matanya, adalah <em>dosanya</em> seandainya ada yang kelaparan di bawah kekuasaannya. Bukan urusan administrasi, melainkan pertanggungjawaban pribadi di hadapan Allah.<br><br>Inilah yang membuatnya berkata bahwa seekor keledai yang terperosok di jalan Irak pun bisa ditanyakan kepadanya.'},
{r:'Umar bin Khattab r.a.', x:'Seandainya seekor keledai terperosok di Irak, sungguh aku takut Allah akan menanyaiku: mengapa tidak kau ratakan jalan untuknya?', s:'Atsar', g:'sirah'},
{n:'Dan Irak yang ia sebut itu bukanlah negeri khayalan. Di bawah kepemimpinannya, wilayah Islam benar-benar membentang hingga ke sana dan jauh melampauinya — sehingga rasa tanggung jawabnya ikut merentang sampai ke jalan-jalan yang tak pernah ia injak sendiri.'},
{n:'Di masanya, kekuatan Persia dan Romawi di Syam runtuh. Ketika Baitul Maqdis menyerah, penduduknya meminta agar khalifah sendiri yang datang menerima kuncinya.'},
{n:'Umar datang nyaris tanpa pengawal, berbagi satu unta dengan pelayannya secara bergantian — dan ketika tiba, kebetulan giliran sang pelayan menunggang sementara Umar menuntun di depan. Jubahnya bertambal.', s:'Sirah — Ath-Thabari', g:'sirah'},
{c:'Penakluk yang menuntun unta pelayannya', x:'Penguasa yang namanya menggetarkan dari Persia hingga Romawi memasuki kota suci dengan pakaian bertambal, berjalan kaki. Ketika waktu shalat tiba di dekat sebuah gereja, ia menolak shalat di dalamnya — khawatir kelak kaum muslim menjadikannya alasan mengubah gereja itu menjadi masjid.', s:'Sirah', g:'sirah'},
{n:'Ia menjamin hak ibadah penduduk Baitul Maqdis lewat sebuah perjanjian keamanan. Kekuatan, di tangan Umar, dipakai untuk melindungi — bukan menindas.', s:'Sirah', g:'sirah'},
{q:'Warisan mana dari kekhalifahannya yang ingin kau telusuri?', o:[
  {l:'Keadilan dan tata pemerintahannya', to:'um5_adil'},
  {l:'Kerendahan hatinya dalam kuasa', to:'um5_tawadhu'}
]},
{k:'um5_adil', n:'Ia mengawasi para gubernur dengan ketat, menghitung harta mereka sebelum dan sesudah menjabat, serta membuka pintu pengaduan bagi rakyat terkecil sekalipun. Keadilan baginya bukan slogan, melainkan sistem yang ia rancang dan tegakkan.'},
{n:'Suatu ketika seorang Qibthi (Mesir) datang jauh-jauh mengadu: putra gubernur ‘Amr bin Al-‘Ash memukulnya dengan cambuk seraya menghardik, “Aku putra orang-orang mulia!” Umar memanggil ‘Amr dan putranya ke Madinah, lalu menyerahkan cambuk itu kepada si Qibthi untuk membalas.', s:'Riwayat sejarah; derajatnya diperbincangkan', g:'sirah'},
{r:'Umar bin Khattab r.a.', x:'Sejak kapan kalian memperbudak manusia, padahal ibu-ibu mereka melahirkan mereka dalam keadaan merdeka?', s:'Atsar masyhur', g:'sirah'},
{j:'um5_g'},
{k:'um5_tawadhu', n:'Semakin luas kekuasaannya, semakin sederhana hidupnya. Ia tidur di atas pelepah, memakai jubah bertambal, dan takut kemewahan akan menumpulkan rasa tanggung jawabnya kepada rakyat dan kepada Allah.'},
{n:'Di tahun paceklik Ramadah, ia bersumpah tidak menyentuh daging dan lemak sampai rakyat kenyang. Ketika perutnya berbunyi karena lapar, ia menghardiknya: “Berbunyilah sesukamu — engkau tak akan mendapat lemak sampai rakyat mendapatkannya lebih dulu.”', s:'Riwayat sejarah', g:'sirah'},
{n:'Ia pernah hendak membatasi jumlah mahar dari atas mimbar. Seorang perempuan menyanggahnya dengan mengutip Al-Qur’an — bahwa Allah membolehkan memberi mahar sebesar apa pun. Umar berhenti, mengakui kekeliruannya, dan berkata: “Seorang perempuan benar, dan Umar keliru.”', s:'Riwayat sejarah; sebagian jalurnya diperbincangkan', g:'sirah'},
{j:'um5_g'},
{k:'um5_g', n:'Satu dekade yang menata ulang peta dunia — namun orang yang memimpinnya justru semakin gemetar setiap kali mengingat bahwa semua ini akan dimintai pertanggungjawaban.'}
]},

{id:6, glyph:'ش', yr:'644', years:'644 M · 23 H', title:'Syahid',
blurb:'Gugur saat mengimami subuh — dan sampai napas terakhir, yang ia cemaskan hanyalah hisab dan nasib umat.',
nodes:[
{n:'Sepanjang memimpin, satu hal tak pernah lepas dari Umar: rasa takut akan pertanggungjawaban di hadapan Allah atas setiap jiwa di bawah kekuasaannya.'},
{r:'Umar bin Khattab r.a.', x:'Andai aku bisa keluar dari urusan ini (kekhalifahan) dalam keadaan impas — tidak berdosa dan tidak berpahala — sungguh itu sudah cukup bagiku.', s:'Atsar', g:'sirah'},
{n:'Pada suatu subuh, ketika ia mengimami shalat, seorang budak bernama Abu Lu’lu’ah menikamnya beberapa kali dengan belati. Umar roboh, tetapi memerintahkan agar shalat tetap diteruskan.', s:'HR. Al-Bukhari', g:'shahih'},
{n:'Dalam keadaan sekarat, kecemasannya bukan pada dirinya. Ia memerintahkan agar utang-utangnya dilunasi dari hartanya sendiri, dan gelisah memikirkan siapa yang akan menjaga umat sesudahnya.', s:'HR. Al-Bukhari', g:'shahih'},
{n:'Ia mengutus putranya meminta izin kepada Aisyah untuk dimakamkan di samping Nabi ﷺ dan Abu Bakar, berpesan: jika ditolak, makamkan aku di pekuburan kaum muslim biasa. Aisyah mengizinkan.', s:'HR. Al-Bukhari', g:'shahih'},
{c:'Meminta izin bahkan untuk kuburnya', x:'Penguasa yang ditakuti dari Persia hingga Romawi itu tidak merasa berhak atas sejengkal tanah pun tanpa izin. Kerendahan hati yang ia bawa sepanjang hidup, ia bawa pula sampai ke liang lahatnya.'},
{n:'Ia menolak menunjuk penggantinya secara langsung. Sebagai gantinya, ia membentuk majelis syura beranggotakan enam sahabat untuk bermusyawarah memilih khalifah berikutnya.', s:'HR. Al-Bukhari', g:'shahih'},
{q:'Apa yang paling membekas darimu tentang akhir hayat Umar?', o:[
  {l:'Ketakutannya pada pertanggungjawaban', to:'um6_takut'},
  {l:'Cara ia mengatur suksesi', to:'um6_shura'}
]},
{k:'um6_takut', n:'Orang yang menaklukkan imperium justru menangis memikirkan hisabnya sendiri. Ketakutan itu bukan kelemahan; justru itulah yang menjaga kekuasaannya tetap adil. Ia takut kepada Allah, maka rakyat aman darinya.'},
{j:'um6_g'},
{k:'um6_shura', n:'Dengan tidak menunjuk satu nama, Umar menegaskan bahwa kepemimpinan umat bukan warisan pribadi, melainkan amanah yang harus dimusyawarahkan. Bahkan dalam sakaratul maut, ia menjaga prinsip itu.'},
{j:'um6_g'},
{k:'um6_g', n:'Ia dimakamkan di samping Nabi ﷺ dan Abu Bakar. Dari seorang yang dulu menghunus pedang untuk membunuh Nabi, menjadi khalifah adil yang beristirahat selamanya di sisi beliau.'},
{a:'Arah sebuah kekuatan bisa berbalik total. Dan ketika ia berbalik ke kebenaran, ia tak hanya menyelamatkan pemiliknya — ia mengubah dunia.'}
]}
];

const UM_META_EN = [
{title:'Before Islam', years:'c. 583 CE · Makkah', blurb:'A harsh, literate, feared nobleman of Banu ‘Adi — and Islam’s fiercest opponent.'},
{title:'The Night of Change', years:'c. 616 CE · Makkah', blurb:'He left home to kill the Prophet. He returned a Muslim — and the believers prayed openly at last.'},
{title:'Al-Faruq', years:'622–632 CE · Madinah', blurb:'A counsellor whose views repeatedly matched revelation — and a hard man who wept most from fear of God.'},
{title:'A Shield at the Prophet’s Side', years:'622–628 CE · At the Prophet’s Side', blurb:'The hijrah he announced in the open, his sword drawn at Badr, his answer to Abu Sufyan at Uhud, and the lesson of submission at Hudaybiyyah.'},
{title:'The Earthquake', years:'632 CE · Madinah', blurb:'His love was so great he refused to believe the Prophet had died — then he held the community from splitting.'},
{title:'The Friend He Could Never Outrun', years:'632–634 CE · Two Companions', blurb:'Two opposite temperaments, one direction. A charity contest he never won, a blind old woman served in secret, and a last wish to lie beside his friend.'},
{title:'A Fearsome Justice', years:'634–644 CE · 13–23 AH', blurb:'A decade that reshaped the world — yet the conqueror led his servant’s camel on foot and trembled before God.'},
{title:'Martyrdom', years:'644 CE · 23 AH', blurb:'Struck down leading the dawn prayer — to his last breath, his only worry was the reckoning and the ummah.'}
];

const UM_TRANS_EN = [
/* ── Bab 1 ── */
[
{n:'In Makkah, into the clan of Banu ‘Adi ibn Ka‘b, ‘Umar ibn al-Khattab was born — about a decade younger than the Prophet ﷺ. His clan handled Quraysh’s diplomacy: representing the city in negotiations and disputes.', s:'Ibn Sa‘d, al-Tabaqat', g:'sirah'},
{a:'A tribal envoy. What would make this man so decisive one day?'},
{n:'He was among the few in Makkah who could read and write — a rare skill in a city that ran on memory. He was tall and powerfully built; his voice carried, and his presence made men step aside.', s:'Historical account', g:'sirah'},
{n:'But that strength stood on the wrong side. ‘Umar was the fiercest defender of Quraysh’s idols and the harshest enemy of the followers of Muhammad ﷺ, striking the weak believers without hesitation.', s:'Ibn Hisham’s Sira', g:'sirah'},
{c:'Strength that had not yet found its direction', x:'‘Umar was no conscienceless brute. He had a powerful sense of justice — he simply believed justice lay in defending the old order.<br><br>Sometimes the only difference between a truth’s greatest enemy and its fiercest defender is where that strength is aimed.'},
{n:'He drank in the days of Jahiliyyah, was hard on his own family, and did not hesitate to punish. People respected him — but more often out of fear.'},
{q:'What stands out most about ‘Umar before Islam?', o:[
  'His strength and standing in Quraysh',
  'His fierce opposition to Islam'
]},
{n:'As Quraysh’s envoy and a feared figure, his word was heard. Later, when that same strength crossed over to defend Islam, believers who had hidden began to stand in the open.'},
null,
{n:'Precisely because he was the most feared enemy, his conversion would shake all of Makkah. When the enemy’s strongest fortress falls and switches sides, the impact reaches far beyond one man.'},
null,
{n:'The very traits that made him dangerous to Islam — hard, brave, fearless — were exactly the traits that would later make him its shield. What needed to change was not his nature, but its direction.'}
],
/* ── Bab 2 ── */
[
{n:'The Muslims were still oppressed and in hiding. In that setting, the Prophet ﷺ once made an unusual supplication.'},
{sb:'اللَّهُمَّ أَعِزَّ الإِسْلاَمَ بِأَحَبِّ هَذَيْنِ الرَّجُلَيْنِ إِلَيْكَ: بِأَبِي جَهْلٍ أَوْ بِعُمَرَ بْنِ الْخَطَّابِ', m:'“O Allah, strengthen Islam with the dearer to You of these two men: Abu Jahl or ‘Umar ibn al-Khattab.”', s:'al-Tirmidhi; Ahmad', g:'hasan'},
{n:'One day ‘Umar went out with his sword drawn — meaning to kill Muhammad ﷺ and end the matter once and for all.'},
{n:'On the way he was stopped and challenged: set your own house in order first. Your sister Fatimah and her husband have embraced Islam.'},
{n:'‘Umar turned toward his sister’s house. From outside he heard the Qur’an being recited. He burst in furious and struck her until she bled. Yet Fatimah stood firm: “Do what you will — we will not leave Islam.”', s:'Ibn Ishaq’s Sira', g:'sirah'},
{n:'Something cracked in him at the sight of that blood and that resolve. His rage dissolved into curiosity. He asked to read the page that had been recited; it held the opening of Surah Ta-Ha.', s:'Ibn Ishaq’s Sira', g:'sirah'},
{ay:'إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي', m:'“Indeed, I am Allah. There is no god but Me, so worship Me and establish prayer for My remembrance.”', s:'Qur’an, Ta-Ha: 14', qref:1},
{n:'The words pierced him. He could read, so he read for himself — and found no gap through which to deny them. That very day he went to the Prophet ﷺ and declared his Islam.', s:'Ibn Hisham’s Sira', g:'sirah'},
{c:'The same intensity, the direction reversed', x:'‘Umar did not turn soft and hesitant after believing. He remained the same hard, brave ‘Umar — only now all that energy faced the opposite way.<br><br>The Prophet’s prayer was answered: Islam was honoured through the very man who had set out to destroy it.'},
{q:'What do you want to explore from this night?', o:[
  'Why the Qur’an shook him so deeply',
  'What changed once he believed'
]},
{n:'He was literate and honest with himself. Reading directly, with no intermediary, he could not pretend not to understand. Honesty toward the truth — once he saw it — proved stronger than the pride he had defended.'},
null,
{n:'With ‘Umar’s conversion, the Muslims prayed openly near the Ka‘bah for the first time. His presence was a shield. From then he was called al-Faruq — the one who separates truth from falsehood.', s:'Ibn Hisham’s Sira', g:'sirah'},
null,
{n:'Al-Faruq. The title summed him up: a man who, once he saw the line between right and wrong, could no longer stand on the wrong side of it.'}
],
/* ── Bab 3 ── */
[
{n:'In Madinah, ‘Umar became one of the Prophet’s ﷺ closest counsellors. His judgment was sharp, and several times his suggestions preceded or coincided with revelation.'},
{c:'When a man’s opinion meets revelation', x:'Scholars call it <em>Muwafaqat ‘Umar</em> — the agreement of ‘Umar’s views with the Qur’an. He proposed taking the Station of Ibrahim as a place of prayer, proposed the ruling of hijab, and took a firm stance on the prisoners of Badr — then verses came down confirming him.', s:'al-Bukhari', g:'shahih'},
{ay:'وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى', m:'“And take the Station of Ibrahim as a place of prayer.”', s:'Qur’an, al-Baqarah: 125', qref:1},
{n:'The Station of Ibrahim was only one of them. ‘Umar also proposed that the Prophet’s ﷺ wives be screened from the assorted visitors who came and went — and the verse of hijab was revealed.'},
{ay:'وَإِذَا سَأَلْتُمُوهُنَّ مَتَاعًا فَاسْأَلُوهُنَّ مِن وَرَاءِ حِجَابٍ ۚ ذَٰلِكُمْ أَطْهَرُ لِقُلُوبِكُمْ وَقُلُوبِهِنَّ', m:'“And when you ask them (the Prophet’s wives) for something, ask them from behind a screen. That is purer for your hearts and for theirs.”', s:'Qur’an, al-Ahzab: 53; occasion in al-Bukhari no. 4790', g:'shahih', qref:1},
{n:'On intoxicants, he prayed again and again: “O Allah, give us a decisive ruling on khamr.” The prohibition came in stages, ending in its clearest verse.', s:'Abu Dawud; al-Tirmidhi', g:'hasan'},
{ay:'إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنصَابُ وَالْأَزْلَامُ رِجْسٌ مِّنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ', m:'“Intoxicants, gambling, idols, and divining arrows are but defilement from the work of Satan, so avoid it.”', s:'Qur’an, al-Ma’idah: 90', qref:1},
{n:'His closeness and standing were acknowledged by the Prophet himself.'},
{sb:'وَالَّذِي نَفْسِي بِيَدِهِ مَا لَقِيَكَ الشَّيْطَانُ سَالِكًا فَجًّا قَطُّ إِلَّا سَلَكَ فَجًّا غَيْرَ فَجِّكَ', m:'“By the One in whose hand is my soul, Satan never meets you walking on a path but that he takes a path other than yours.”', s:'al-Bukhari; Muslim', g:'shahih'},
{sb:'لَوْ كَانَ بَعْدِي نَبِيٌّ لَكَانَ عُمَرَ بْنَ الْخَطَّابِ', m:'“If there were to be a prophet after me, it would be ‘Umar ibn al-Khattab.”', s:'al-Tirmidhi', g:'hasan'},
{n:'Yet behind that feared firmness, ‘Umar was the quickest to weep in prayer, and the most shaken whenever he remembered the Day of Reckoning.'},
{q:'Which side of al-Faruq do you want to trace?', o:[
  'His firmness in defending truth',
  'His God-consciousness and his tears'
]},
{n:'‘Umar’s firmness was not empty harshness. He dared to say what was true even when bitter, to ask when unsure, and to differ — even before the great. That courage is what gave the truth a guardian.'},
null,
{n:'The man most feared by people was the most fearful of God. He once wished he were a blade of straw, even that he had never been born, so great was his dread of the reckoning. In ‘Umar, true strength always bowed to a rightful fear.'},
null,
{n:'Firm with people, tender before his Lord. It was that blend he would carry to a seat he never sought.'}
],
/* ── Bab · A Shield at the Prophet’s Side (sisipan setelah Al-Faruq) ── */
[
{n:'After the night that reversed the direction of his life, ‘Umar was no longer a threat to Islam — he became one of its pillars. And his role at the Prophet’s ﷺ side did not stop at the council of advice: he was there in the streets of Makkah, on the battlefield, and at the negotiating table.'},
{a:'I want to know — what did he do when words were no longer enough, and what was needed was a body brave enough to stand out front?'},
{n:'When the command to emigrate to Madinah came, most Muslims left quietly, slipping away in the dark so Quraysh would not intercept them. ‘Umar chose a different way.'},
{r:'‘Umar ibn al-Khattab (r.a.)', x:'I know of no one who emigrated except in secret, save ‘Umar. When he meant to emigrate, he strapped on his sword, shouldered his bow, came to the Ka‘bah and made tawaf. Then he said to the Quraysh gathered there: “Whoever wishes his mother to be bereaved of him, his children orphaned, and his wife widowed — let him meet me behind this valley.” Not one of them dared follow him.', s:'Reported in the sira literature; some chains are discussed', g:'sirah'},
{c:'A da‘wah made of open courage', x:'Not everyone could — or should — emigrate ‘Umar’s way. The weak and unprotected were right to slip away for their safety. But ‘Umar’s open defiance had its own function: it showed the fearful that faith could be upheld without bowing. Sometimes da‘wah is not words, but one man brave enough to stand in the open.'},
{n:'At Badr — the first great battle — ‘Umar fought in the front ranks. Narrations mention that he cut down his own kinsman on the pagan side; on that field, the sword no longer recognised bloodline when it faced falsehood.', s:'Ibn Hisham’s Sira', g:'sirah'},
{n:'After the victory came the question of the captives. Abu Bakr advised ransom and mercy — they were kinsmen, and who knew, their offspring might one day believe. ‘Umar advised the opposite: strike the necks of these chiefs of disbelief, so idolatry would lose its backbone. The Prophet ﷺ inclined to Abu Bakr’s view.'},
{m:'“It is not for a prophet to have captives until he has thoroughly subdued the land. You desire the goods of this world, while Allah desires the Hereafter.”'},
{m:'“Had a punishment descended from the sky, none would have been saved from it but ‘Umar.”'},
{n:'A year later at Uhud the tide reversed. The Muslims were struck hard, many fell, and Abu Sufyan stood on the heights boasting of his idol: “Be exalted, Hubal!”'},
{n:'The Prophet ﷺ told the companions to answer. When Abu Sufyan cried, “We have al-‘Uzza, and you have none!” — it was ‘Umar who answered aloud, at the Prophet’s command: “Allah is our Protector, and you have no protector.”', s:'al-Bukhari no. 3039, 4043', g:'shahih'},
{n:'Six years after the hijrah, at Hudaybiyyah, the Prophet ﷺ accepted treaty terms that many companions found humiliating: the Muslims must return that year without ‘umrah, and anyone from Quraysh who came to the Prophet had to be sent back. ‘Umar could not contain his turmoil.'},
{r:'‘Umar ibn al-Khattab (r.a.)', x:'I came to the Prophet ﷺ and said: “Are you not truly the Prophet of Allah? Are we not upon the truth and our enemy upon falsehood? Then why should we grant a humiliation in our religion?”', s:'al-Bukhari no. 2731–2732; Muslim no. 1785', g:'shahih'},
{m:'“I am the Messenger of Allah, I will not disobey Him, and He is my Helper.”'},
{c:'When even the strongest must yield', x:'‘Umar was not wrong to burn for his religion; he erred in assuming the measure of truth was winning today. When Surah al-Fath came down naming that treaty a <em>“clear victory,”</em> he understood. For the rest of his life he gave charity, fasted, and freed slaves to atone for his words that day. True strength is not never erring — it is daring to yield once you are wrong.'},
{q:'Two sides of ‘Umar at the Prophet’s side — which do you want to explore?', o:['His courage on the battlefield','His submission at Hudaybiyyah']},
{n:'‘Umar was present at Badr, Uhud, Khandaq, and nearly every major expedition with the Prophet ﷺ. His presence was a guarantee: the enemy knew that in those ranks stood a man who did not fear death. The courage the Muslims once dreaded had become the wall that shielded them.'},
null,
{n:'The man who dared to challenge all of Quraysh alone bowed his own reasoning, at Hudaybiyyah, before a single sentence from the Prophet ﷺ. He learned that the highest courage is not to resist, but to yield to a wisdom greater than one’s own sight.'},
null,
null,
{n:'In the council he advised, on the field he protected, at the negotiation he learned restraint. ‘Umar in the Prophet’s era was not merely a strong companion — he was a lesson in how great strength serves a truth far greater than itself.'},
{a:'So even the sturdiest shield must still learn when to draw the sword, and when to sheathe it.'}
],
/* ── Bab 4 ── */
[
{n:'When the Prophet ﷺ died, ‘Umar could not accept it. He stood with his sword, threatening anyone who said he had passed, insisting he had only stepped away a while, as Musa did.', s:'al-Bukhari', g:'shahih'},
{a:'Love so great that it refused reality. Sometimes even steadfastness can become a form of denial.'},
{n:'Abu Bakr came in, then went out to calm the crowd. When he recited a certain verse, ‘Umar’s legs could barely hold him.'},
{ay:'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ ۚ أَفَإِن مَّاتَ أَوْ قُتِلَ انقَلَبْتُمْ عَلَىٰ أَعْقَابِكُمْ', m:'“Muhammad is but a messenger; messengers have passed away before him. If then he dies or is killed, will you turn back on your heels?”', s:'Qur’an, Al ‘Imran: 144', qref:1},
{n:'At Saqifah, when the Ansar and Muhajirun nearly clashed over leadership, ‘Umar acted swiftly. He set aside his own ambition and was the first to stretch out his hand in allegiance to Abu Bakr.', s:'al-Bukhari', g:'shahih'},
{c:'Subduing the ego for unity', x:'‘Umar was a figure many might have contended over for leadership. But he saw that at a critical moment, what mattered was not who was strongest, but what kept the community one.<br><br>The hardest of men chose to be a follower — and that, precisely, was leadership.'},
{n:'Throughout Abu Bakr’s caliphate, ‘Umar was his closest support, including in the hard decisions of the Ridda wars.'},
{q:'What do you highlight most about ‘Umar here?', o:[
  'His grief and denial',
  'His role in uniting the community'
]},
{n:'‘Umar’s denial was no weakness of faith, but an overflow of a love not ready to lose. He needed a verse from Allah — not merely news — to accept it. Even the strongest are fragile before a parting.'},
null,
{n:'At the most fragile point in the community’s history, one act by ‘Umar — extending his hand first — closed the door on division. He turned a potential rupture into a consensus, simply by placing what was right above himself.'},
null,
{n:'As Abu Bakr neared death, he looked around and chose the one most able to bear the weight: ‘Umar. The pillar’s support had become the pillar.'}
],
/* ── Bab · The Friend He Could Never Outrun (sisipan setelah Guncangan) ── */
[
{n:'When the Prophet ﷺ died, the two men who had stood closest to him now stood closest to each other. Abu Bakr became caliph; ‘Umar his right hand. But their friendship was far older than that caliphate.'},
{a:'I am curious about this bond. ‘Umar the hard, Abu Bakr the gentle — what tied the two of them so closely?'},
{n:'It was the Prophet ﷺ himself who bound them. When ‘Amr ibn al-‘As asked who was dearest to him, he answered: “‘A’ishah.” “Among men?” “Her father (Abu Bakr).” “Then who?” “‘Umar,” — and he named others after him.', s:'al-Bukhari no. 3662; Muslim no. 2384', g:'shahih'},
{m:'“I have two ministers among the people of heaven and two ministers among the people of earth. My two ministers of heaven are Jibril and Mika’il, and my two ministers of earth are Abu Bakr and ‘Umar.”'},
{n:'‘Umar often recalled one day — the day he thought that, at last, he might outdo his friend.'},
{r:'‘Umar ibn al-Khattab (r.a.)', x:'The Messenger of Allah ﷺ ordered us to give charity, and at the time I had wealth. I said to myself: “Today I will beat Abu Bakr, if ever.” So I brought half of my wealth. The Prophet ﷺ asked, “What did you leave for your family?” I said, “The same amount.” Then Abu Bakr came with <em>everything</em> he owned. The Prophet asked, “What did you leave for your family?” Abu Bakr said, “I left them Allah and His Messenger.” I said: “I will never surpass you in anything, ever.”', s:'Abu Dawud no. 1678; al-Tirmidhi no. 3675', g:'hasan'},
{c:'A rivalry that lay in giving', x:'Notice the shape of their contest: not who could hoard more, but who could <em>let go</em> of more. ‘Umar measured himself not against Abu Bakr’s power but against his generosity. Some friendships have a rivalry entirely about who sacrifices first — and ‘Umar, the man the world feared, sincerely admitted he had lost.'},
{n:'Now Abu Bakr was caliph — and he did not change in the least. ‘Umar noticed something: before dawn, his friend would slip out to the edge of the city and return saying nothing. One morning, ‘Umar quietly followed him.'},
{n:'He found a ramshackle tent. Inside was an old woman, blind and unable to move. Abu Bakr entered, cleaned her home, prepared her food, and saw to her needs — and she had no idea that the one serving her was the caliph of the Muslims.', s:'A well-known report; its chain is weak', g:'dhaif'},
{r:'‘Umar ibn al-Khattab (r.a.)', x:'You have worn out whoever becomes caliph after you, O Abu Bakr!', s:'A well-known report; its chain is weak', g:'dhaif'},
{c:'A beautiful story — told honestly about its grade', x:'This account of the blind woman is very famous, but its chain is weak; we show it not as a certain event, but as an image of a trait of Abu Bakr that <em>is</em> firmly established elsewhere: his habit of giving in secret and serving the weak without wishing to be seen. Sometimes a story survives for centuries not because of its chain, but because it is honest about the man.'},
{n:'Two years passed. Abu Bakr fell ill, and his death drew near. When he moved to appoint ‘Umar as his successor, some feared ‘Umar’s harshness. Abu Bakr answered that if Allah should ask him, he would say: “I appointed the best of them.”', s:'Historical account — al-Tabari', g:'sirah'},
{n:'Then Abu Bakr died. And ‘Umar — the man who once drew his sword, who subdued hearts through dread — wept for his gentle friend. To the very end of his life, ‘Umar’s last request was to be buried beside the Prophet ﷺ and Abu Bakr: to lie forever next to the friend he could never outrun.'},
{q:'Which side of this friendship do you want to explore?', o:['Their rivalry in doing good','‘Umar yielding to Abu Bakr']},
{n:'Their rivalry was never about power or rank — only about who gave more, who sacrificed first, whose charity was most hidden. The hard man and the gentle one raced toward the same light.'},
null,
{n:'The man feared from Persia to Rome called Abu Bakr “our master.” When Abu Bakr was chosen, it was ‘Umar who first stretched out his hand in allegiance. He understood that even strength must bow to something gentler and truer than itself.'},
null,
null,
{n:'Two opposite natures, one direction. ‘Umar spent his life chasing a friend always one step ahead of him in giving — and at the end of it all, he asked for only one thing: to be allowed to rest at his side.'},
{a:'Perhaps that is the measure of true friendship: not who wins, but beside whom you wish to lie down when everything is over.'}
],
/* ── Bab 5 ── */
[
{n:'‘Umar became the second caliph. He was the first to be called <em>Amir al-Mu’minin</em> — Commander of the Believers.', s:'Historical account', g:'sirah'},
{n:'He built a state: he founded the diwan (a register of public stipends), set the Hijri calendar, organised the judiciary, and separated the public treasury from personal wealth.', s:'Historical account', g:'sirah'},
{n:'His rule was not only conquest but organisation. He institutionalised the night watch, appointed and salaried judges such as Shurayh and Abu Musa al-Ash‘ari, assigned market inspectors (hisbah) to check weights and prices, registered the people in the diwan to distribute stipends, and summoned his governors to be audited openly during the Hajj season.', s:'Historical account', g:'sirah'},
{n:'But justice, to him, was no concept on paper — he checked it with his own feet. In the famine year he would walk the outskirts of Madinah by night with his servant Aslam, making sure not a single stomach was overlooked.', s:'Historical account', g:'sirah'},
{n:'One night he saw a fire in the distance. A woman had a pot on the hearth, ringed by crying children. ‘Umar drew near and asked. In the pot there was only water and stones — she was stirring it so her children would think food was cooking, until they tired and fell asleep.'},
{n:'The woman — not knowing to whom she spoke — murmured her complaint: “Let Allah judge between us and ‘Umar. How can he sleep full while we go hungry?”'},
{a:'Imagine being the ruler, and hearing your own subject file her complaint against you — to God, right in front of you, without knowing it is you.'},
{n:'‘Umar hurried back to the treasury and loaded a sack of flour and a skin of fat onto his own back. Aslam offered to carry it for him. ‘Umar refused.'},
{r:'‘Umar ibn al-Khattab (r.a.)', x:'Will you carry my burden for me on the Day of Resurrection?', s:'Historical account; its grade is discussed', g:'sirah'},
{n:'He cooked for them himself, blowing on the fire until the smoke curled into his beard, and did not leave until the children had eaten their fill and laughed again. Only then did he go home.'},
{c:'A responsibility carried in person, not delegated', x:'He could have sent his servant with the flour. Instead he carried it himself — because that burden, in his eyes, was <em>his sin</em> if anyone went hungry under his rule. Not a matter of administration, but of personal accountability before God.<br><br>This is what made him say that even a mule stumbling on a road in Iraq could be asked of him.'},
{r:'‘Umar ibn al-Khattab (r.a.)', x:'If a mule were to stumble in Iraq, I would fear that Allah will ask me: why did you not level the road for it?', s:'Athar', g:'sirah'},
{n:'And the Iraq he named was no imaginary land. Under his leadership, the realm of Islam truly reached that far and well beyond — so that his sense of responsibility stretched, too, to roads he had never walked himself.'},
{n:'In his time, Persian and Roman power in the Levant collapsed. When Jerusalem surrendered, its people asked that the caliph himself come to receive its keys.'},
{n:'‘Umar came almost without escort, sharing a single camel with his servant by turns — and when he arrived, it happened to be the servant’s turn to ride while ‘Umar led on foot. His robe was patched.', s:'al-Tabari', g:'sirah'},
{c:'A conqueror leading his servant’s camel', x:'The ruler whose name shook the world from Persia to Rome entered the holy city in a patched garment, on foot. When the prayer time came near a church, he refused to pray inside it — fearing Muslims would later use it as a pretext to turn the church into a mosque.', s:'Historical account', g:'sirah'},
{n:'He guaranteed the worship rights of Jerusalem’s people through a covenant of safety. Power, in ‘Umar’s hands, was used to protect — not to oppress.', s:'Historical account', g:'sirah'},
{q:'Which legacy of his caliphate do you want to trace?', o:[
  'His justice and administration',
  'His humility in power'
]},
{n:'He watched his governors closely, auditing their wealth before and after office, and kept the door of complaint open to the humblest citizen. Justice, to him, was not a slogan but a system he designed and enforced.'},
{n:'Once a Copt from Egypt travelled all the way to complain: the son of the governor ‘Amr ibn al-‘As had struck him with a whip, saying, “I am the son of nobles!” ‘Umar summoned ‘Amr and his son to Madinah, then handed the whip to the Copt to strike back.', s:'Historical account; its grade is discussed', g:'sirah'},
{r:'‘Umar ibn al-Khattab (r.a.)', x:'Since when have you enslaved people, when their mothers bore them free?', s:'A well-known athar', g:'sirah'},
null,
{n:'The wider his power grew, the simpler his life became. He slept on palm fibre, wore a patched robe, and feared that comfort would dull his sense of responsibility to the people and to God.'},
{n:'In the famine year of Ramadah, he swore not to touch meat or fat until the people were fed. When his belly rumbled from hunger, he rebuked it: “Rumble all you like — you will get no fat until the people get it first.”', s:'Historical account', g:'sirah'},
{n:'He once moved to cap the amount of dowry from the pulpit. A woman challenged him, citing the Qur’an — that God permits giving a dowry of any size. ‘Umar stopped, admitted his error, and said: “A woman is right, and ‘Umar is wrong.”', s:'Historical account; some chains are discussed', g:'sirah'},
null,
{n:'A decade that redrew the map of the world — yet the man leading it only trembled more each time he remembered that all of this would be called to account.'}
],
/* ── Bab 6 ── */
[
{n:'Throughout his rule, one thing never left ‘Umar: dread of being held to account before Allah for every soul under his authority.'},
{r:'‘Umar ibn al-Khattab (r.a.)', x:'If only I could come out of this affair (the caliphate) even — with neither sin nor reward — that would be enough for me.', s:'Athar', g:'sirah'},
{n:'One dawn, as he led the prayer, a slave named Abu Lu’lu’ah stabbed him several times with a dagger. ‘Umar collapsed, but ordered the prayer to be completed.', s:'al-Bukhari', g:'shahih'},
{n:'As he lay dying, his worry was not for himself. He ordered his debts paid from his own wealth, and agonised over who would guard the community after him.', s:'al-Bukhari', g:'shahih'},
{n:'He sent his son to ask ‘A’ishah’s permission to be buried beside the Prophet ﷺ and Abu Bakr, instructing: if refused, bury me in the common Muslim graveyard. ‘A’ishah granted it.', s:'al-Bukhari', g:'shahih'},
{c:'Asking permission even for his grave', x:'The ruler feared from Persia to Rome felt entitled to not a hand’s span of earth without permission. The humility he carried through life, he carried to his very grave.'},
{n:'He refused to name his successor directly. Instead he formed a consultative council (shura) of six companions to deliberate and choose the next caliph.', s:'al-Bukhari', g:'shahih'},
{q:'What stays with you most about the end of ‘Umar’s life?', o:[
  'His fear of the reckoning',
  'How he arranged the succession'
]},
{n:'The man who conquered empires wept over his own reckoning. That fear was no weakness; it was what kept his power just. He feared Allah, so the people were safe from him.'},
null,
{n:'By naming no single successor, ‘Umar affirmed that leadership of the community is not a personal inheritance but a trust to be decided by consultation. Even in his death throes, he guarded that principle.'},
null,
{n:'He was buried beside the Prophet ﷺ and Abu Bakr. From a man who once drew his sword to kill the Prophet, to a just caliph resting forever at his side.'},
{a:'The direction of a strength can reverse entirely. And when it turned toward the truth, it did not only save its owner — it changed the world.'}
]
];

const UM_SCENES = ['mecca','mecca','madinah','battlefield','madinah','interior','battlefield','interior'];

/* ============================================================
   UTSMAN BIN AFFAN (DZUN-NURAIN) — kronik lengkap (dwibahasa)
   ============================================================ */
const UT_CH = [
{id:1, glyph:'ص', yr:'576', years:'c. 576 M · Mekah', title:'Sebelum Islam',
blurb:'Saudagar Umayyah yang kaya raya — namun dikenal pemalu, lembut, dan menjauhi kebiasaan buruk bahkan sebelum Islam.',
nodes:[
{n:'Utsman bin Affan lahir di Mekah dari Bani Umayyah, salah satu cabang Quraisy yang terpandang. Ia saudagar kain yang sangat kaya, dengan jaringan dagang hingga Syam.', s:'Ibnu Sa‘d, Ath-Thabaqat', g:'sirah'},
{a:'Kaya, terpandang, dari klan berpengaruh. Apa yang membedakannya dari para bangsawan Quraisy lain?'},
{n:'Bahkan di masa Jahiliah, Utsman dikenal pemalu, lembut tutur katanya, dan menjauhi khamar serta perbuatan keji. Ia pun termasuk yang bisa membaca dan menulis.', s:'Riwayat sejarah', g:'sirah'},
{n:'Kekayaannya besar, tetapi tangannya ringan memberi. Orang menyukainya bukan karena hartanya, melainkan karena kehalusan budi dan rasa malunya yang tak biasa.'},
{c:'Kaya tanpa menjadi angkuh', x:'Perpaduan yang langka: harta melimpah tetapi rendah hati, berpengaruh tetapi pemalu.<br><br>Rasa malu (haya’) pada Utsman bukan kelemahan atau minder — ia semacam rem batin yang menjaganya dari keburukan bahkan ketika tak ada yang melihat.'},
{n:'Ketika sahabat karibnya, Abu Bakar, mengajaknya kepada sesuatu yang baru, Utsman tidak menutup diri. Wataknya yang bersih membuatnya siap menerima kebenaran.'},
{q:'Apa yang paling menonjol dari Utsman sebelum Islam?', o:[
  {l:'Kekayaan dan kedudukannya', to:'ut1_harta'},
  {l:'Rasa malu dan kehalusan budinya', to:'ut1_haya'}
]},
{k:'ut1_harta', n:'Hartanya bukan sekadar timbunan. Kelak, kekayaan yang sama akan mengalir membiayai sumur untuk umat, pasukan di masa sulit, dan perluasan masjid — harta yang berpindah dari brankas ke amal.'},
{j:'ut1_g'},
{k:'ut1_haya', n:'Rasa malunya kelak menjadi ciri paling khas. Bahkan para malaikat, kata Nabi, malu kepadanya. Sifat yang tampak kecil ini ternyata menjadi inti seluruh kepribadiannya.'},
{j:'ut1_g'},
{k:'ut1_g', n:'Seorang kaya yang rendah hati dan berhati bersih. Ketika cahaya Islam datang, tanah hatinya sudah subur untuk menerimanya.'}
]},

{id:2, glyph:'ض', yr:'610', years:'610 – 620 M · Mekah · Habasyah', title:'Dua Cahaya',
blurb:'Masuk Islam sejak awal, diikat pamannya, hijrah ke Habasyah — lalu menikahi dua putri Nabi, hingga digelari Pemilik Dua Cahaya.',
nodes:[
{n:'Utsman termasuk yang paling awal masuk Islam, lewat ajakan Abu Bakar. Ia meninggalkan kenyamanan status demi keyakinan baru yang saat itu ditindas.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{n:'Pamannya sendiri mengikatnya dan menyiksanya agar kembali ke agama nenek moyang. Tetapi Utsman menolak melepaskan Islam.', s:'Riwayat sejarah', g:'sirah'},
{n:'Ia menikahi Ruqayyah, putri Nabi ﷺ. Ketika tekanan Quraisy memuncak, keduanya termasuk rombongan pertama yang berhijrah ke Habasyah — meninggalkan tanah air demi menyelamatkan iman.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{a:'Meninggalkan harta, kampung halaman, dan kenyamanan — demi sesuatu yang belum kelihatan hasilnya.'},
{n:'Ruqayyah kemudian sakit dan wafat di masa Perang Badar. Setelah itu, Nabi ﷺ menikahkan Utsman dengan putri beliau yang lain, Ummu Kultsum.', s:'Riwayat sejarah', g:'sirah'},
{n:'Karena menikahi dua putri Rasulullah ﷺ, ia digelari <em>Dzun-Nurain</em> — Pemilik Dua Cahaya. Sebuah kehormatan yang tak pernah diberikan kepada siapa pun selainnya.', s:'Riwayat sejarah', g:'sirah'},
{c:'Apa arti sebuah gelar', x:'Menikahkan dua putri kepada satu orang adalah tanda kepercayaan yang luar biasa dari Nabi ﷺ terhadap akhlak Utsman.<br><br>Gelar “Dua Cahaya” bukan soal keberuntungan, melainkan pengakuan atas kelayakan: Nabi mempercayakan keluarganya kepada orang yang beliau kenal betul kesuciannya.'},
{q:'Apa yang ingin kau dalami dari babak ini?', o:[
  {l:'Harga yang ia bayar untuk imannya', to:'ut2_harga'},
  {l:'Makna gelar Dzun-Nurain', to:'ut2_nurain'}
]},
{k:'ut2_harga', n:'Ia kehilangan kenyamanan, disiksa keluarganya sendiri, dan dua kali meninggalkan tanah air. Kekayaan tidak membuatnya manja; ia justru termasuk yang paling berani menanggung ongkos iman.'},
{j:'ut2_g'},
{k:'ut2_nurain', n:'Kepercayaan Nabi kepadanya bukan tanpa dasar. Sepanjang hidup, Utsman membuktikan bahwa gelar itu pantas — lewat rasa malu, kedermawanan, dan kelembutannya yang tak pernah pudar.'},
{j:'ut2_g'},
{k:'ut2_g', n:'Dzun-Nurain. Di balik gelar indah itu ada seorang yang membayar mahal untuk imannya, dan tetap lembut meski diuji berkali-kali.'}
]},

{id:3, glyph:'ط', yr:'620', years:'620 – 632 M · Madinah', title:'Sang Pemalu',
blurb:'Rasa malunya begitu dalam hingga Nabi sendiri menyebut bahwa para malaikat pun malu kepadanya.',
nodes:[
{n:'Ciri paling melekat pada Utsman adalah rasa malunya (haya’) — begitu dalam sampai orang-orang di sekitarnya merasakannya, dan Nabi ﷺ sendiri menyebutnya.'},
{n:'Suatu ketika Nabi ﷺ sedang berbaring santai dengan betis tersingkap. Abu Bakar masuk, lalu Umar — keadaan beliau tetap. Namun ketika Utsman masuk, beliau menutup diri dan membetulkan duduknya.', s:'HR. Muslim', g:'shahih'},
{sb:'أَلَا أَسْتَحِي مِنْ رَجُلٍ تَسْتَحِي مِنْهُ الْمَلَائِكَةُ', m:'“Tidakkah aku malu terhadap seorang yang para malaikat pun malu kepadanya?”', s:'HR. Muslim', g:'shahih'},
{a:'Rasa malu yang membuat manusia paling mulia sekalipun menata dirinya. Malu di sini bukan minder — ia kehormatan.'},
{c:'Malu yang menjaga', x:'Dalam Islam, haya’ bukan sifat lemah. Ia adalah kepekaan batin yang membuat seseorang enggan melakukan keburukan — bahkan saat sendirian.<br><br>Rasa malu Utsman kepada Allah dan manusia adalah pagar yang menjaga seluruh perilakunya tetap halus dan bersih.'},
{n:'Ia telah berhijrah dua kali — ke Habasyah, lalu ke Madinah. Kesetiaannya kepada Nabi ﷺ tidak pernah goyah, meski sifatnya lembut dan pendiam.', s:'Riwayat sejarah', g:'sirah'},
{q:'Sisi mana dari Utsman yang ingin kau telusuri?', o:[
  {l:'Rasa malunya yang khas', to:'ut3_haya'},
  {l:'Pengorbanan dan hijrahnya', to:'ut3_hijrah'}
]},
{k:'ut3_haya', n:'Rasa malu Utsman menular menjadi kehormatan dalam bergaul. Ia tak pernah kasar, tak suka membalas keburukan, dan menjaga lisannya. Kelembutan ini kelak diuji hebat ketika ia memegang kekuasaan.'},
{j:'ut3_g'},
{k:'ut3_hijrah', n:'Di balik kelembutannya tersimpan keteguhan. Dua kali ia tinggalkan segalanya demi iman. Orang yang pemalu dan pendiam itu ternyata memiliki keberanian yang tidak berisik namun kokoh.'},
{j:'ut3_g'},
{k:'ut3_g', n:'Lembut namun teguh, pemalu namun berani. Perpaduan itulah yang membuat hartanya kelak mengalir tanpa banyak bicara — cukup dengan perbuatan.'}
]},

{id:4, glyph:'ظ', yr:'631', years:'622 – 631 M · Madinah', title:'Tangan yang Terbuka',
blurb:'Sumur untuk seluruh umat, pasukan di masa paling sulit, dan perluasan masjid — kekayaannya mengalir menjadi amal.',
nodes:[
{n:'Di Madinah, air bersih langka. Sebuah sumur bernama Rumah dikuasai seseorang yang menjualnya mahal. Nabi ﷺ menjanjikan surga bagi siapa yang membelinya lalu mewakafkannya untuk kaum muslim. Utsman membelinya dan menyerahkannya untuk umum.', s:'HR. At-Tirmidzi; An-Nasa’i', g:'hasan'},
{n:'Ketika Nabi ﷺ menyerukan dana untuk melengkapi Pasukan Kesulitan (Jaisyul ‘Usrah) menuju Tabuk, Utsman menyumbang luar biasa besar — ratusan unta lengkap dengan perbekalannya, dan emas.', s:'HR. At-Tirmidzi', g:'hasan'},
{sb:'مَا ضَرَّ عُثْمَانَ مَا عَمِلَ بَعْدَ الْيَوْمِ', m:'“Tidak akan membahayakan Utsman apa pun yang ia lakukan setelah hari ini.”', s:'HR. At-Tirmidzi', g:'hasan'},
{n:'Ketika Masjid Nabawi tak lagi cukup menampung jamaah yang terus bertambah, Utsman pula yang membiayai perluasannya.', s:'Riwayat sejarah', g:'sirah'},
{c:'Kekayaan sebagai alat, bukan tujuan', x:'Utsman tidak menimbun. Ia melihat hartanya sebagai titipan yang harus mengalir ke tempat yang tepat: air untuk yang haus, perbekalan untuk yang berjuang, ruang untuk yang beribadah.<br><br>Kedermawanan seperti ini hanya mungkin dari orang yang hatinya tidak terikat pada harta yang ia miliki.'},
{a:'Ia bisa saja menyimpan semuanya. Justru karena tidak, namanya dikenang bukan sebagai orang terkaya, melainkan sebagai tangan yang paling terbuka.'},
{q:'Amal mana yang ingin kau telusuri?', o:[
  {l:'Wakaf Sumur Rumah', to:'ut4_sumur'},
  {l:'Pasukan Kesulitan (Tabuk)', to:'ut4_tabuk'}
]},
{k:'ut4_sumur', n:'Dengan satu pembelian, ia mengubah sumber air yang diperjualbelikan menjadi milik bersama selamanya. Wakaf itu terus mengalirkan manfaat jauh setelah ia tiada — amal yang tak putus.'},
{j:'ut4_g'},
{k:'ut4_tabuk', n:'Di saat paling genting, ketika kas nyaris kosong dan cuaca terik, sumbangan Utsman menutup kebutuhan pasukan. Karena itulah Nabi ﷺ menjaminnya: apa pun setelah hari itu tak akan membahayakannya.'},
{j:'ut4_g'},
{k:'ut4_g', n:'Kedermawanannya bukan pamer, melainkan ibadah. Kelak, ketika ia memimpin, kekayaan pribadinya justru semakin banyak ia keluarkan untuk umat.'}
]},

{id:5, glyph:'ع', yr:'644', years:'644 – 656 M · 23 – 35 H', title:'Menyatukan Mushaf',
blurb:'Khalifah ketiga yang menyelamatkan umat dari perpecahan bacaan — dengan menyatukan Al-Qur’an dalam satu mushaf resmi.',
nodes:[
{n:'Sepeninggal Umar, majelis syura memilih Utsman sebagai khalifah ketiga. Ia mewarisi negara yang luas dan terus berkembang.'},
{n:'Di masanya, wilayah Islam meluas hingga Afrika Utara dan menembus lebih jauh ke Persia. Untuk pertama kalinya kaum muslim membangun armada laut.', s:'Riwayat sejarah', g:'sirah'},
{n:'Ketika Islam menyebar ke banyak bangsa, muncul perbedaan cara membaca Al-Qur’an di kalangan pendatang baru. Hudzaifah, yang menyaksikan perselisihan itu di medan perang, bergegas memperingatkan Utsman sebelum umat berselisih seperti umat-umat terdahulu.', s:'HR. Al-Bukhari', g:'shahih'},
{n:'Utsman bertindak. Ia menyalin satu mushaf baku — bersumber dari himpunan zaman Abu Bakar, lewat Zaid bin Tsabit dan sebuah panitia — lalu menyebarkan salinannya ke kota-kota besar dan menyeragamkan bacaan padanya.', s:'HR. Al-Bukhari', g:'shahih'},
{c:'Satu umat, satu mushaf', x:'Inilah warisan terbesar kekhalifahan Utsman. Tanpa langkah ini, perbedaan bacaan bisa berkembang menjadi perpecahan yang tak terpulihkan.<br><br>Mushaf yang kita baca hari ini di seluruh dunia disebut <em>Mushaf Utsmani</em> — dinisbahkan kepada keberaniannya menyatukan umat pada satu teks.'},
{ay:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ', m:'“Sesungguhnya Kamilah yang menurunkan Al-Qur’an, dan pasti Kami (pula) yang memeliharanya.”', s:'QS Al-Hijr: 9', qref:1},
{q:'Warisan mana yang ingin kau telusuri?', o:[
  {l:'Penyatuan mushaf', to:'ut5_mushaf'},
  {l:'Perluasan dan pemerintahan', to:'ut5_luas'}
]},
{k:'ut5_mushaf', n:'Utsman memahami bahwa menjaga keutuhan teks berarti menjaga keutuhan umat. Ia rela salinan-salinan lain diseragamkan demi satu rujukan yang disepakati — sebuah keputusan yang menyelamatkan Al-Qur’an dari perpecahan riwayat.'},
{j:'ut5_g'},
{k:'ut5_luas', n:'Di bawahnya, peta Islam meluas jauh dan armada laut lahir. Namun perluasan yang cepat juga membawa benih persoalan: wilayah yang jauh, penduduk yang beragam, dan ketidakpuasan yang mulai tumbuh di pinggiran.'},
{j:'ut5_g'},
{k:'ut5_g', n:'Ia menjaga umat tetap satu di atas satu Kitab. Tetapi justru di paruh akhir kekhalifahannya, ujian terbesar dalam hidupnya mulai mendekat.'}
]},

{id:6, glyph:'غ', yr:'656', years:'656 M · 35 H', title:'Fitnah & Syahid',
blurb:'Rumahnya dikepung pemberontak. Ia menolak menumpahkan darah umat demi dirinya — dan gugur saat membaca Al-Qur’an.',
nodes:[
{n:'Tahun-tahun akhir kekhalifahannya diguncang keresahan. Para penghasut menyebarkan tuduhan terhadap para gubernur, lalu segerombolan orang datang ke Madinah dan mengepung rumah Utsman.'},
{n:'Nabi ﷺ dahulu telah mengabarkan bahwa Utsman akan menghadapi ujian berat. Bahkan di atas Gunung Uhud, beliau pernah menyebut nama Abu Bakar, Umar, dan Utsman, dan mengabarkan dua yang terakhir akan gugur sebagai syuhada.', s:'HR. Al-Bukhari', g:'shahih'},
{sb:'إِنَّ اللَّهَ عَسَى أَنْ يُقَمِّصَكَ قَمِيصًا، فَإِنْ أَرَادُوكَ عَلَى خَلْعِهِ فَلَا تَخْلَعْهُ', m:'“Sesungguhnya Allah boleh jadi akan memakaikan kepadamu sebuah baju (kekhalifahan); maka jika mereka memaksamu menanggalkannya, janganlah kau tanggalkan.”', s:'HR. At-Tirmidzi', g:'hasan'},
{n:'Para sahabat dan anak-anak mereka menawarkan diri berperang membelanya. Utsman melarang mereka. Ia tak sudi darah kaum muslim tertumpah demi mempertahankan dirinya.', s:'Riwayat sejarah', g:'sirah'},
{r:'Utsman bin Affan r.a.', x:'Aku tidak ingin menjadi orang pertama yang mengganti (menumpahkan darah) di tengah umat Muhammad ﷺ sepeninggal beliau.', s:'Riwayat sejarah', g:'sirah'},
{n:'Dalam keadaan berpuasa dan sedang membaca Al-Qur’an, para pemberontak menerobos masuk dan membunuhnya. Darahnya menetes ke atas mushaf yang terbuka di hadapannya.', s:'Riwayat sejarah', g:'sirah'},
{ay:'فَسَيَكْفِيكَهُمُ اللَّهُ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ', m:'“Maka Allah akan mencukupkan engkau (menghadapi) mereka. Dan Dialah Yang Maha Mendengar lagi Maha Mengetahui.”', s:'QS Al-Baqarah: 137', qref:1},
{c:'Menolak menang dengan darah umat', x:'Utsman lebih memilih gugur daripada memicu perang saudara demi mempertahankan kursinya. Rasa malu, kelembutan, dan cintanya pada persatuan menyatu dalam satu keputusan terakhir yang berat.<br><br>Ia menutup hidup dengan cara yang sama seperti ia menjalaninya: mendahulukan umat di atas dirinya.'},
{q:'Apa yang paling membekas darimu tentang akhir hayat Utsman?', o:[
  {l:'Kesabaran dan penolakannya menumpahkan darah', to:'ut6_sabar'},
  {l:'Makna fitnah yang menimpanya', to:'ut6_fitnah'}
]},
{k:'ut6_sabar', n:'Ia memegang pesan Nabi untuk tidak menanggalkan amanah, sekaligus menolak mempertahankannya dengan pedang. Kesabarannya bukan kepasrahan buta, melainkan pilihan sadar: lebih baik ia yang menanggung, daripada umat yang terbelah.'},
{j:'ut6_g'},
{k:'ut6_fitnah', n:'Kematian Utsman membuka pintu fitnah besar dalam sejarah Islam — perpecahan yang dampaknya terasa berabad-abad. Justru karena itu, sikapnya yang menolak membalas menjadi teladan tentang bagaimana seharusnya menahan diri di tengah konflik.'},
{j:'ut6_g'},
{k:'ut6_g', n:'Ia dimakamkan di Baqi‘. Mushaf yang ia satukan tetap dibaca miliaran lidah hingga hari ini — warisan seorang pemalu yang dermawan, yang memilih gugur daripada memecah umat.'},
{a:'Kadang keberanian terbesar bukan menyerang, melainkan menahan diri. Utsman menutup hidupnya dengan keberanian jenis itu.'}
]}
];

const UT_META_EN = [
{title:'Before Islam', years:'c. 576 CE · Makkah', blurb:'A vastly wealthy Umayyad merchant — yet known for modesty, gentleness, and shunning vice even before Islam.'},
{title:'The Two Lights', years:'610–620 CE · Makkah · Abyssinia', blurb:'An early believer bound by his uncle, an emigrant to Abyssinia — who married two daughters of the Prophet.'},
{title:'The Modest One', years:'620–632 CE · Madinah', blurb:'His modesty ran so deep that the Prophet said even the angels felt shy before him.'},
{title:'An Open Hand', years:'622–631 CE · Madinah', blurb:'A well for the whole ummah, an army in the hardest hour, a mosque enlarged — his wealth flowed into charity.'},
{title:'Unifying the Mushaf', years:'644–656 CE · 23–35 AH', blurb:'The third caliph who saved the ummah from splitting over recitation — by unifying the Qur’an into one master codex.'},
{title:'Sedition & Martyrdom', years:'656 CE · 35 AH', blurb:'Rebels besieged his house. He refused to shed the ummah’s blood for himself — and fell while reading the Qur’an.'}
];

const UT_TRANS_EN = [
/* ── Bab 1 ── */
[
{n:'‘Uthman ibn ‘Affan was born in Makkah into Banu Umayyah, one of the eminent branches of Quraysh. He was an immensely wealthy cloth merchant, with trade reaching to the Levant.', s:'Ibn Sa‘d, al-Tabaqat', g:'sirah'},
{a:'Rich, eminent, from an influential clan. What set him apart from the other nobles of Quraysh?'},
{n:'Even in the days of Jahiliyyah, ‘Uthman was known for modesty, gentle speech, and shunning wine and vice. He was also among those who could read and write.', s:'Historical account', g:'sirah'},
{n:'His wealth was great, but his hand was quick to give. People loved him not for his money but for his refinement and his unusual sense of modesty.'},
{c:'Rich without becoming arrogant', x:'A rare combination: abundant wealth yet humble, influential yet shy.<br><br>Modesty (haya’) in ‘Uthman was no weakness or timidity — it was an inner brake that kept him from wrongdoing even when no one was watching.'},
{n:'When his close friend Abu Bakr invited him to something new, ‘Uthman did not shut himself off. His clean nature made him ready to receive the truth.'},
{q:'What stands out most about ‘Uthman before Islam?', o:[
  'His wealth and standing',
  'His modesty and refinement'
]},
{n:'His wealth was not mere hoarding. That same wealth would one day flow to fund a well for the ummah, an army in a hard hour, and the mosque’s expansion — riches that moved from vault to charity.'},
null,
{n:'His modesty would become his most defining trait. Even the angels, the Prophet said, felt shy before him. This seemingly small quality turned out to be the core of his whole character.'},
null,
{n:'A rich man, humble and pure of heart. When the light of Islam came, the soil of his heart was already fertile to receive it.'}
],
/* ── Bab 2 ── */
[
{n:'‘Uthman was among the earliest to accept Islam, through Abu Bakr’s call. He left the comfort of status for a new faith that was, at the time, oppressed.', s:'Ibn Hisham’s Sira', g:'sirah'},
{n:'His own uncle bound and tortured him to force him back to the religion of the forefathers. But ‘Uthman refused to abandon Islam.', s:'Historical account', g:'sirah'},
{n:'He married Ruqayyah, daughter of the Prophet ﷺ. When Quraysh’s pressure peaked, the two were among the first to emigrate to Abyssinia — leaving their homeland to save their faith.', s:'Ibn Hisham’s Sira', g:'sirah'},
{a:'Leaving wealth, homeland, and comfort — for something whose outcome was not yet visible.'},
{n:'Ruqayyah later fell ill and died around the time of Badr. Afterward, the Prophet ﷺ married ‘Uthman to another of his daughters, Umm Kulthum.', s:'Historical account', g:'sirah'},
{n:'For marrying two daughters of the Messenger ﷺ, he was called <em>Dhu al-Nurayn</em> — Possessor of the Two Lights. An honour given to no one else.', s:'Historical account', g:'sirah'},
{c:'What a title means', x:'To marry two daughters to one man was a sign of extraordinary trust from the Prophet ﷺ in ‘Uthman’s character.<br><br>The title “Two Lights” was not about luck but a recognition of worth: the Prophet entrusted his own family to a man whose purity he knew intimately.'},
{q:'What do you want to explore from this chapter?', o:[
  'The price he paid for his faith',
  'The meaning of the title Dhu al-Nurayn'
]},
{n:'He lost his comfort, was tortured by his own family, and left his homeland twice. Wealth had not made him soft; he was among the boldest in bearing the cost of faith.'},
null,
{n:'The Prophet’s trust in him was not baseless. All his life, ‘Uthman proved the title deserved — through his modesty, generosity, and gentleness that never faded.'},
null,
{n:'Dhu al-Nurayn. Behind that beautiful title stood a man who paid dearly for his faith, and stayed gentle though tested again and again.'}
],
/* ── Bab 3 ── */
[
{n:'The trait most attached to ‘Uthman was his modesty (haya’) — so deep that those around him felt it, and the Prophet ﷺ himself remarked on it.'},
{n:'Once the Prophet ﷺ was reclining at ease, his shins uncovered. Abu Bakr entered, then ‘Umar — his state unchanged. But when ‘Uthman entered, he covered himself and sat up.', s:'Muslim', g:'shahih'},
{sb:'أَلَا أَسْتَحِي مِنْ رَجُلٍ تَسْتَحِي مِنْهُ الْمَلَائِكَةُ', m:'“Should I not feel shy before a man before whom the angels feel shy?”', s:'Muslim', g:'shahih'},
{a:'A modesty that made even the noblest of men compose himself. Modesty here is not timidity — it is dignity.'},
{c:'A modesty that guards', x:'In Islam, haya’ is no weak trait. It is an inner sensitivity that makes a person reluctant to do wrong — even in solitude.<br><br>‘Uthman’s modesty before God and people was a fence that kept all his conduct refined and clean.'},
{n:'He had emigrated twice — to Abyssinia, then to Madinah. His loyalty to the Prophet ﷺ never wavered, gentle and quiet though his nature was.', s:'Historical account', g:'sirah'},
{q:'Which side of ‘Uthman do you want to trace?', o:[
  'His distinctive modesty',
  'His sacrifice and emigration'
]},
{n:'‘Uthman’s modesty spread into dignity in dealing with others. He was never coarse, never returned harm for harm, and guarded his tongue. This gentleness would be severely tested once he held power.'},
null,
{n:'Behind his gentleness lay firmness. Twice he left everything for his faith. That shy, quiet man in fact possessed a courage that made no noise yet held firm.'},
null,
{n:'Gentle yet firm, shy yet brave. It was that blend that would let his wealth flow later without much speech — through deeds alone.'}
],
/* ── Bab 4 ── */
[
{n:'In Madinah, clean water was scarce. A well called Rumah was owned by a man who sold its water dearly. The Prophet ﷺ promised Paradise to whoever would buy it and endow it for the Muslims. ‘Uthman bought it and gave it to the public.', s:'al-Tirmidhi; al-Nasa’i', g:'hasan'},
{n:'When the Prophet ﷺ called for funds to equip the Army of Hardship (Jaysh al-‘Usrah) bound for Tabuk, ‘Uthman gave enormously — hundreds of fully-equipped camels, and gold.', s:'al-Tirmidhi', g:'hasan'},
{sb:'مَا ضَرَّ عُثْمَانَ مَا عَمِلَ بَعْدَ الْيَوْمِ', m:'“Nothing ‘Uthman does after this day will harm him.”', s:'al-Tirmidhi', g:'hasan'},
{n:'When the Prophet’s Mosque could no longer hold the ever-growing congregation, it was ‘Uthman again who funded its expansion.', s:'Historical account', g:'sirah'},
{c:'Wealth as a tool, not a goal', x:'‘Uthman did not hoard. He saw his wealth as a trust that had to flow to the right places: water for the thirsty, supplies for those who strove, space for those who worshipped.<br><br>Generosity like this is only possible from a heart not attached to the wealth it holds.'},
{a:'He could have kept it all. Precisely because he did not, he is remembered not as the richest man, but as the most open hand.'},
{q:'Which act of charity do you want to trace?', o:[
  'The endowment of the Well of Rumah',
  'The Army of Hardship (Tabuk)'
]},
{n:'With a single purchase, he turned a bought-and-sold water source into a common possession forever. That endowment kept giving long after he was gone — a charity that never stops.'},
null,
{n:'At the most critical hour — treasury nearly empty, weather scorching — ‘Uthman’s gift covered the army’s needs. That is why the Prophet ﷺ guaranteed him: nothing after that day would harm him.'},
null,
{n:'His generosity was not display but worship. Later, when he led, he would spend from his own wealth for the ummah all the more.'}
],
/* ── Bab 5 ── */
[
{n:'After ‘Umar, the consultative council chose ‘Uthman as the third caliph. He inherited a vast and still-expanding state.'},
{n:'In his time, the realm of Islam spread into North Africa and pushed further into Persia. For the first time, the Muslims built a naval fleet.', s:'Historical account', g:'sirah'},
{n:'As Islam spread among many nations, differences appeared in how newcomers recited the Qur’an. Hudhayfah, witnessing disputes over it on campaign, hurried to warn ‘Uthman before the ummah differed like earlier nations.', s:'al-Bukhari', g:'shahih'},
{n:'‘Uthman acted. He had a definitive codex copied — drawn from the collection of Abu Bakr’s era, through Zayd ibn Thabit and a committee — then sent copies to the major cities and standardised recitation upon it.', s:'al-Bukhari', g:'shahih'},
{c:'One ummah, one codex', x:'This is the greatest legacy of ‘Uthman’s caliphate. Without this step, differences in recitation could have grown into an irreparable split.<br><br>The codex read across the world today is called the <em>‘Uthmanic Mushaf</em> — named for his courage in uniting the ummah on a single text.'},
{ay:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ', m:'“Indeed, it is We who sent down the Reminder, and indeed, it is We who will preserve it.”', s:'Qur’an, al-Hijr: 9', qref:1},
{q:'Which legacy do you want to trace?', o:[
  'The unification of the codex',
  'Expansion and administration'
]},
{n:'‘Uthman understood that preserving the integrity of the text meant preserving the integrity of the ummah. He was willing to have other copies standardised for one agreed reference — a decision that saved the Qur’an from a splintering of transmissions.'},
null,
{n:'Under him the map of Islam widened far and a navy was born. But rapid expansion also carried the seeds of trouble: distant provinces, diverse populations, and discontent beginning to grow at the edges.'},
null,
{n:'He kept the ummah one upon one Book. Yet it was in the latter half of his caliphate that the greatest trial of his life drew near.'}
],
/* ── Bab 6 ── */
[
{n:'The final years of his caliphate were shaken by unrest. Agitators spread accusations against the governors, then a mob came to Madinah and besieged ‘Uthman’s house.'},
{n:'The Prophet ﷺ had earlier foretold that ‘Uthman would face a severe trial. Even atop Mount Uhud, he once named Abu Bakr, ‘Umar, and ‘Uthman, and foretold that the latter two would fall as martyrs.', s:'al-Bukhari', g:'shahih'},
{sb:'إِنَّ اللَّهَ عَسَى أَنْ يُقَمِّصَكَ قَمِيصًا، فَإِنْ أَرَادُوكَ عَلَى خَلْعِهِ فَلَا تَخْلَعْهُ', m:'“Allah may clothe you in a garment (of authority); if they press you to take it off, do not take it off.”', s:'al-Tirmidhi', g:'hasan'},
{n:'Companions and their sons offered to fight in his defence. ‘Uthman forbade them. He would not have Muslim blood spilled to preserve himself.', s:'Historical account', g:'sirah'},
{r:'‘Uthman ibn ‘Affan (r.a.)', x:'I do not wish to be the first to replace (to shed blood) among the ummah of Muhammad ﷺ after him.', s:'Historical account', g:'sirah'},
{n:'While fasting and reading the Qur’an, the rebels broke in and killed him. His blood fell upon the codex open before him.', s:'Historical account', g:'sirah'},
{ay:'فَسَيَكْفِيكَهُمُ اللَّهُ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ', m:'“So Allah will suffice you against them, and He is the All-Hearing, the All-Knowing.”', s:'Qur’an, al-Baqarah: 137', qref:1},
{c:'Refusing to win by the ummah’s blood', x:'‘Uthman chose to fall rather than ignite a civil war to keep his seat. Modesty, gentleness, and love of unity fused into one heavy final decision.<br><br>He ended his life the way he lived it: placing the ummah above himself.'},
{q:'What stays with you most about the end of ‘Uthman’s life?', o:[
  'His patience and refusal to shed blood',
  'The meaning of the trial that befell him'
]},
{n:'He held to the Prophet’s counsel not to cast off the trust, while also refusing to defend it with the sword. His patience was no blind resignation but a conscious choice: better that he bear it than that the ummah be torn apart.'},
null,
{n:'‘Uthman’s death opened the door to the great fitnah in Islamic history — a rupture whose effects were felt for centuries. Precisely for that, his refusal to retaliate stands as a lesson in restraint amid conflict.'},
null,
{n:'He was buried in al-Baqi‘. The codex he unified is still recited by billions of tongues today — the legacy of a modest, generous man who chose to fall rather than split the ummah.'},
{a:'Sometimes the greatest courage is not to strike, but to hold back. ‘Uthman ended his life with that kind of courage.'}
]
];

const UT_SCENES = ['mecca','migration','madinah','desert','interior','interior'];

/* ============================================================
   ALI BIN ABI THALIB — kronik lengkap (dwibahasa)
   ============================================================ */
const AL_CH = [
{id:1, glyph:'ف', yr:'600', years:'c. 600 M · Mekah', title:'Anak yang Dibesarkan Nabi',
blurb:'Sepupu Nabi yang tumbuh langsung di dalam rumah beliau — menyaksikan akhlak sang manusia sebelum turunnya risalah.',
nodes:[
{n:'Ali bin Abi Thalib lahir di Mekah, sekitar sepuluh tahun sebelum kenabian. Ayahnya, Abu Thalib, adalah paman yang dahulu mengasuh dan melindungi Muhammad ﷺ sepeninggal kakek beliau.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{a:'Anak dari pelindung Nabi. Tapi kedekatannya ternyata jauh lebih dalam dari sekadar hubungan darah.'},
{n:'Ketika kesulitan ekonomi menekan Abu Thalib, Muhammad ﷺ — membalas kebaikan pamannya dahulu — mengambil Ali kecil ke dalam rumahnya sendiri untuk diasuh. Maka Ali tumbuh besar langsung di bawah didikan Nabi ﷺ.', s:'Sirah Ibnu Ishaq', g:'sirah'},
{n:'Ia menyaksikan akhlak beliau dari dekat, siang dan malam, bahkan sebelum wahyu turun. Keintiman itulah yang membentuk seluruh hidupnya.'},
{c:'Dibentuk sebelum diutus', x:'Ali mengenal <em>sang manusia</em> sebelum mengenal <em>sang risalah</em>. Ia melihat kejujuran, kelembutan, dan keteguhan Muhammad ﷺ di rumah, jauh sebelum ada satu ayat pun.<br><br>Maka ketika ia beriman, imannya bukan berdasar kabar dari jauh — melainkan kesaksian langsung atas seorang yang ia kenal luar dalam.'},
{n:'Sepupu, anak asuh, dan kelak menantu — sedikit orang yang sedekat Ali dengan Nabi ﷺ dari buaian hingga liang lahat.'},
{q:'Apa yang paling menentukan dari sosok Ali di awal ini?', o:[
  {l:'Nasab dan kedekatannya dengan Nabi', to:'al1_nasab'},
  {l:'Ia dibesarkan langsung di rumah Nabi', to:'al1_rumah'}
]},
{k:'al1_nasab', n:'Sebagai putra Abu Thalib dari Bani Hasyim, Ali berada di jantung keluarga yang menjaga Nabi. Kedekatan darah ini kelak berpadu dengan kedekatan iman, menjadikannya bagian dari Ahlul Bait yang dimuliakan.'},
{j:'al1_g'},
{k:'al1_rumah', n:'Tumbuh di rumah Nabi berarti Ali menyerap akhlak beliau sejak kecil — cara beliau berbicara, bersabar, dan beribadah. Ia dididik oleh guru terbaik umat manusia sebelum umat itu sendiri lahir.'},
{j:'al1_g'},
{k:'al1_g', n:'Sebelum risalah datang, Allah seolah telah menyiapkan seorang anak di sisi Nabi — yang akan menjadi salah satu yang pertama membenarkan, dan salah satu yang terakhir setia.'}
]},

{id:2, glyph:'ق', yr:'610', years:'610 M · Mekah', title:'Yang Pertama di Antara Anak Muda',
blurb:'Bocah sepuluh tahun yang beriman tanpa ragu — dan berdiri seorang diri ketika para tetua terdiam.',
nodes:[
{n:'Ketika wahyu pertama turun, Ali — bocah sekitar sepuluh tahun — ada di rumah Nabi ﷺ. Ia menjadi anak muda pertama yang beriman: Khadijah yang pertama dari kalangan wanita, Abu Bakar dari kalangan lelaki dewasa, dan Ali dari kalangan anak muda.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{n:'Ia beriman tanpa beban seumur hidup menyembah berhala. Hatinya masih muda dan jernih, sehingga kebenaran masuk tanpa penghalang.'},
{n:'Pada jamuan kerabat dekat, Nabi ﷺ mengumpulkan Bani Hasyim dan bertanya siapa yang akan berdiri bersamanya. Hanya Ali yang masih belia yang bangkit menyatakan dukungan, di tengah para tetua yang terdiam.', s:'Riwayat sejarah', g:'sirah'},
{a:'Keberanian seorang anak di hadapan para pembesar. Kadang yang paling muda justru paling jernih melihat.'},
{c:'Iman yang tak menunggu dewasa', x:'Usia bukan penghalang keyakinan. Ali membuktikan bahwa kejernihan hati bisa mendahului usia dan kedudukan.<br><br>Yang menahan banyak tetua bukan kurangnya bukti, melainkan beratnya melepaskan warisan dan gengsi. Ali belum memikul beban itu — maka ia bebas memilih kebenaran.'},
{n:'Sejak itu ia menjadi bayang-bayang Nabi di kalangan muda, belajar langsung dari sumbernya, menyerap ilmu dan akhlak setiap hari.'},
{q:'Apa yang ingin kau dalami dari babak ini?', o:[
  {l:'Kenapa yang muda justru lebih dulu beriman', to:'al2_muda'},
  {l:'Keberaniannya berdiri di antara para tetua', to:'al2_berani'}
]},
{k:'al2_muda', n:'Hati yang belum penuh oleh kesombongan dan kepentingan lebih mudah menerima kebenaran. Ali tak perlu meruntuhkan apa pun dulu dalam dirinya; ia tinggal berkata “ya”. Itulah keuntungan kejernihan.'},
{j:'al2_g'},
{k:'al2_berani', n:'Berdiri sendirian saat semua diam butuh keberanian yang langka — apalagi bagi seorang anak di hadapan para pemimpin kabilah. Keberanian itu akan menjadi ciri Ali sepanjang hidupnya, di medan perang maupun di kursi kekuasaan.'},
{j:'al2_g'},
{k:'al2_g', n:'Yang pertama di antara anak muda. Ia memulai perjalanannya dengan satu kata “ya” yang berani — dan tak pernah menariknya kembali.'}
]},

{id:3, glyph:'ك', yr:'622', years:'622 M · Hijrah', title:'Ranjang yang Ditinggalkan',
blurb:'Malam para pembunuh mengepung rumah Nabi, Ali tidur di ranjang beliau — mempertaruhkan nyawa agar sang Nabi selamat.',
nodes:[
{n:'Pada malam Hijrah, para algojo dari berbagai kabilah mengepung rumah Nabi ﷺ, bersiap membunuhnya begitu ia keluar.'},
{n:'Nabi ﷺ meminta Ali tidur di ranjang beliau, berselimut jubah beliau, agar para pengintai mengira beliau masih di dalam — sementara beliau diam-diam keluar. Ali menyanggupinya, menempatkan dirinya di ujung pedang.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{ay:'وَمِنَ النَّاسِ مَن يَشْرِي نَفْسَهُ ابْتِغَاءَ مَرْضَاتِ اللَّهِ ۗ وَاللَّهُ رَءُوفٌ بِالْعِبَادِ', m:'“Dan di antara manusia ada yang mengorbankan dirinya untuk mencari keridaan Allah. Dan Allah Maha Penyantun kepada hamba-hamba-(Nya).”', s:'QS Al-Baqarah: 207', qref:1},
{c:'Menjual diri demi ridha Allah', x:'Sebagian ahli tafsir menghubungkan ayat ini dengan Ali pada malam itu — orang yang “menjual” dirinya, siap mati, demi keselamatan orang lain karena mengharap ridha Allah.<br><br>Ada bentuk cinta yang hanya bisa dibuktikan dengan kesediaan menempati tempat bahaya menggantikan yang dicintai.'},
{n:'Ketika para pengepung menerobos, mereka mendapati Ali di ranjang itu — dan Nabi ﷺ telah jauh pergi.'},
{n:'Ali tinggal beberapa hari lebih lama, bukan untuk dirinya, melainkan untuk mengembalikan barang-barang titipan yang dulu dipercayakan orang kepada Nabi — bahkan titipan para musuh beliau — lalu ia menyusul hijrah dengan berjalan kaki.', s:'Sirah Ibnu Hisyam', g:'sirah'},
{a:'Bahkan saat mengungsi menyelamatkan nyawa, amanah musuh tetap dikembalikan. Ali yang menuntaskannya.'},
{q:'Apa yang paling menonjol dari peran Ali di sini?', o:[
  {l:'Kesediaannya mati di ranjang Nabi', to:'al3_ranjang'},
  {l:'Menuntaskan pengembalian amanah', to:'al3_amanah'}
]},
{k:'al3_ranjang', n:'Ali tahu ranjang itu bisa menjadi tempat kematiannya. Ia tetap berbaring di sana. Pengorbanan yang tenang, tanpa sorak, adalah bukti bahwa cintanya kepada Nabi melampaui rasa takutnya pada maut.'},
{j:'al3_g'},
{k:'al3_amanah', n:'Julukan Al-Amin melekat pada Nabi bahkan dari musuh-musuhnya; mereka tetap menitipkan harta kepadanya. Dengan menuntaskan pengembalian titipan itu, Ali meneruskan pelajaran besar: kepercayaan dijaga, sekalipun kepada yang memusuhimu.'},
{j:'al3_g'},
{k:'al3_g', n:'Ia menyusul ke Madinah — kota tempat perannya akan tumbuh: sebagai pahlawan medan perang, menantu Nabi, dan salah satu yang paling dalam ilmunya.'}
]},

{id:4, glyph:'ل', yr:'628', years:'623 – 632 M · Madinah', title:'Ilmu, Keberanian, dan Fatimah',
blurb:'Menantu Nabi lewat Fatimah, pahlawan Khaibar, dan rujukan para sahabat dalam perkara tersulit.',
nodes:[
{n:'Di Madinah, Nabi ﷺ menikahkan putrinya, Fatimah, dengan Ali. Pernikahan sederhana yang darinya lahir Hasan dan Husain — dua cucu kesayangan Nabi ﷺ.', s:'Riwayat sejarah', g:'sirah'},
{n:'Keberanian Ali melegenda: di Badar, Uhud, Perang Khandaq (duel melawan Amr bin Abdu Wud), dan Khaibar.'},
{sb:'لَأُعْطِيَنَّ الرَّايَةَ رَجُلًا يُحِبُّ اللَّهَ وَرَسُولَهُ وَيُحِبُّهُ اللَّهُ وَرَسُولُهُ', m:'“Sungguh akan kuberikan panji ini kepada seseorang yang mencintai Allah dan Rasul-Nya, dan yang dicintai Allah dan Rasul-Nya.”', s:'HR. Al-Bukhari; Muslim', g:'shahih'},
{n:'Panji itu diberikan kepada Ali, dan lewat tangannya benteng Khaibar ditaklukkan. Di Tabuk, Nabi ﷺ menugaskan Ali menjaga Madinah; ketika ada yang menyindirnya, beliau bersabda:'},
{sb:'أَنْتَ مِنِّي بِمَنْزِلَةِ هَارُونَ مِنْ مُوسَى إِلَّا أَنَّهُ لَا نَبِيَّ بَعْدِي', m:'“Engkau di sisiku seperti kedudukan Harun di sisi Musa, hanya saja tidak ada nabi setelahku.”', s:'HR. Al-Bukhari; Muslim', g:'shahih'},
{n:'Ilmu dan ketajaman putusannya tersohor. Nabi ﷺ mengutusnya menjadi hakim di Yaman dan mendoakan lisan serta hatinya. Kelak, para sahabat kerap merujuk kepadanya untuk perkara-perkara tersulit.', s:'HR. Ahmad', g:'hasan'},
{c:'Gerbang ilmu, tanpa perlu riwayat lemah', x:'Sebagian ucapan masyhur tentang keluasan ilmu Ali sebenarnya lemah sanadnya. Tetapi kita tak membutuhkannya: catatan yang sahih sudah lebih dari cukup — jabatan hakim di Yaman, doa Nabi untuknya, dan kebiasaan para sahabat besar merujuk kepadanya.<br><br>Menjaga kejujuran sumber justru menguatkan kedudukannya, bukan melemahkannya.'},
{q:'Sisi mana dari Ali yang ingin kau telusuri?', o:[
  {l:'Keluasan ilmunya', to:'al4_ilmu'},
  {l:'Keberaniannya di medan', to:'al4_berani'}
]},
{k:'al4_ilmu', n:'Ali memadukan hafalan, pemahaman, dan ketajaman menimbang. Bukan sekadar tahu banyak, tetapi tahu menerapkan pada perkara nyata — itulah kenapa Umar pun disebut berlindung dari perkara pelik yang tak dihadiri Ali.'},
{j:'al4_g'},
{k:'al4_berani', n:'Keberaniannya bukan kenekatan, melainkan keteguhan yang berpijak pada keyakinan. Di Khaibar dan Khandaq, ia maju ketika yang lain ragu — bukan untuk mencari nama, tetapi karena membela kebenaran memang menuntut ada yang berani berdiri paling depan.'},
{j:'al4_g'},
{k:'al4_g', n:'Ilmu yang dalam berpadu keberanian yang teguh, dibungkus kedekatan dengan Nabi. Perpaduan langka itu kelak diuji oleh beban terberat: memimpin umat yang sedang terbelah.'}
]},

{id:5, glyph:'م', yr:'656', years:'656 – 661 M · 35 – 40 H', title:'Khalifah di Tengah Badai',
blurb:'Ia mewarisi kekhalifahan di tengah fitnah yang bukan ia ciptakan — dan berjuang menegakkan keadilan sambil menahan perpecahan.',
nodes:[
{n:'Setelah terbunuhnya Utsman, umat berada dalam kekacauan. Ali diangkat menjadi khalifah keempat di tengah badai yang bukan ia timbulkan.', s:'Sirah — Ath-Thabari', g:'sirah'},
{n:'Perselisihan inti berkisar pada bagaimana dan kapan menegakkan hukum atas para pembunuh Utsman. Beda pandangan di antara orang-orang beriman yang tulus itu pecah menjadi dua konflik yang memilukan: Perang Jamal dan Perang Shiffin.', s:'Sirah — Ath-Thabari', g:'sirah'},
{c:'Menahan lidah tentang para sahabat', x:'Di sinilah para ulama Ahlus Sunnah mengajarkan sikap menahan diri. Yang berselisih adalah kaum muslim mujtahid yang umumnya berniat baik namun berbeda ijtihad; Ali adalah khalifah yang sah dan lebih dekat kepada kebenaran, sementara yang lain adalah sahabat yang keliru namun tetap dihormati.<br><br>Kita menuturkan apa yang terjadi tanpa mencaci siapa pun. Perinciannya berat, dan keputusan akhir ada pada Allah.'},
{n:'Ali berupaya menstabilkan umat, menegakkan keadilan, dan menghentikan pertumpahan darah — meski fitnah itu ternyata lebih besar daripada yang bisa diredam seorang manusia.'},
{n:'Sebagai khalifah, ia tetap hidup sangat sederhana — pakaian bertambal, makanan seadanya — dan masyhur dengan hikmah serta kefasihannya. Ia menuntut agar penguasa tunduk pada hukum yang sama dengan rakyatnya.', s:'Atsar', g:'sirah'},
{r:'Ali bin Abi Thalib r.a.', x:'Nilai setiap orang terletak pada kebaikan yang ia kuasai.', s:'Atsar', g:'sirah'},
{a:'Ia memimpin bukan di masa jaya yang tenang, melainkan di tengah reruntuhan — dan tetap berpegang pada keadilan.'},
{q:'Apa yang ingin kau telusuri dari kekhalifahannya?', o:[
  {l:'Beban fitnah yang ia pikul', to:'al5_fitnah'},
  {l:'Keadilan dan kesederhanaannya', to:'al5_adil'}
]},
{k:'al5_fitnah', n:'Ali mewarisi luka yang menganga, bukan lembaran kosong. Ia berusaha menegakkan otoritas yang sah dan menuntut keadilan atas darah Utsman, sambil menanggung beratnya perang saudara yang tak seorang pun benar-benar menginginkannya. Sejarah mencatatnya sebagai masa paling pilu.'},
{j:'al5_g'},
{k:'al5_adil', n:'Di tengah kuasa, ia menolak keistimewaan. Ia membagi harta negara dengan adil tanpa pandang kedekatan, hidup sesederhana rakyat jelata, dan berpegang bahwa hukum berlaku sama bagi penguasa dan yang dikuasai. Keadilan itu tak pernah ia tanggalkan bahkan di masa tersulit.'},
{j:'al5_g'},
{k:'al5_g', n:'Ia memegang amanah di masa yang nyaris mustahil. Dan seperti dua khalifah sebelumnya, hidupnya pun akan berakhir di ujung senjata — di tempat yang paling ia cintai: dalam shalat.'}
]},

{id:6, glyph:'ن', yr:'661', years:'661 M · 40 H', title:'Syahid di Mihrab',
blurb:'Ditikam seorang Khawarij saat menuju shalat subuh — dan sampai akhir, ia menuntut keadilan bahkan bagi pembunuhnya sendiri.',
nodes:[
{n:'Sekelompok yang memisahkan diri — kaum Khawarij — berbalik memusuhi Ali setelah menolak hasil tahkim (arbitrase). Mereka mengkafirkan berbagai pihak dan merancang pembunuhan.', s:'Sirah — Ath-Thabari', g:'sirah'},
{n:'Pada suatu subuh di Kufah, ketika Ali berangkat mengimami shalat, seorang Khawarij bernama Ibnu Muljam menikamnya dengan pedang beracun. Peristiwa itu terjadi pada tahun 40 Hijriah.', s:'Sirah', g:'sirah'},
{n:'Dalam keadaan sekarat, Ali berpesan tentang pembunuhnya: jika aku hidup, akulah yang memutuskan perkaranya; jika aku mati, balaslah dengan satu tikaman sebagaimana ia menikamku — dan jangan mencincangnya. Keadilan, bahkan terhadap pembunuhnya sendiri.', s:'Atsar', g:'sirah'},
{r:'Ali bin Abi Thalib r.a.', x:'Bertakwalah kepada Allah, jagalah shalat, dan peliharalah Al-Qur’an. Perhatikanlah anak-anak yatim dan orang-orang lemah di antara kalian.', s:'Atsar', g:'sirah'},
{c:'Keadilan sampai kepada pembunuhnya', x:'Bahkan di ambang kematian akibat pengkhianatan, Ali menolak melampaui batas. Satu tikaman dibalas satu, tanpa penyiksaan.<br><br>Menahan amarah pada saat paling berhak marah adalah puncak dari keadilan yang ia bela seumur hidup.'},
{n:'Dengan wafatnya Ali, berakhir pula masa Khulafa’ur Rasyidin — empat khalifah yang hidupnya telah kau susuri: Abu Bakar, Umar, Utsman, dan Ali.'},
{a:'Anak yang dibesarkan di rumah Nabi menutup hidupnya dengan memberikan nyawa di jalan Nabi. Lingkaran itu pun terkatup.'},
{q:'Apa yang paling membekas darimu tentang akhir hayat Ali?', o:[
  {l:'Keadilannya terhadap sang pembunuh', to:'al6_adil'},
  {l:'Berakhirnya sebuah era', to:'al6_akhir'}
]},
{k:'al6_adil', n:'Perintah untuk tidak membalas berlebihan menegaskan siapa Ali sesungguhnya: seorang yang keadilannya tidak dikendalikan oleh amarah, bahkan ketika darahnya sendiri yang tertumpah. Ia mati sebagaimana ia hidup — di atas prinsip.'},
{j:'al6_g'},
{k:'al6_akhir', n:'Empat khalifah, empat watak, satu benang merah: mereka memikul kuasa sebagai amanah yang menakutkan, bukan hadiah yang dinikmati. Bersama wafatnya Ali, sebuah generasi keteladanan menutup babaknya.'},
{j:'al6_g'},
{k:'al6_g', n:'Ali dimakamkan, dan zaman para khalifah yang lurus pun usai. Yang tersisa adalah teladan mereka: benar, adil, dermawan, dan berani — empat cahaya yang memantulkan satu sumber yang sama.'}
]}
];

const AL_META_EN = [
{title:'The Child Raised by the Prophet', years:'c. 600 CE · Makkah', blurb:'The Prophet’s cousin, raised in his very household — witnessing the man’s character before the message came.'},
{title:'First Among the Young', years:'610 CE · Makkah', blurb:'A ten-year-old who believed without a doubt — and stood alone when the elders fell silent.'},
{title:'The Bed Left Behind', years:'622 CE · The Hijra', blurb:'The night assassins ringed the Prophet’s house, Ali lay in his bed — risking his life so the Prophet could escape.'},
{title:'Knowledge, Courage, and Fatimah', years:'623–632 CE · Madinah', blurb:'The Prophet’s son-in-law through Fatimah, hero of Khaybar, and the companions’ reference in the hardest questions.'},
{title:'A Caliph Amid the Storm', years:'656–661 CE · 35–40 AH', blurb:'He inherited the caliphate amid a sedition he did not create — striving for justice while holding back the split.'},
{title:'Martyrdom at the Prayer Niche', years:'661 CE · 40 AH', blurb:'Stabbed by a Kharijite on his way to dawn prayer — and to the end, he demanded justice even for his own killer.'}
];

const AL_TRANS_EN = [
/* ── Bab 1 ── */
[
{n:'Ali ibn Abi Talib was born in Makkah about ten years before the prophethood. His father, Abu Talib, was the uncle who had once raised and protected Muhammad ﷺ after the death of his grandfather.', s:'Ibn Hisham’s Sira', g:'sirah'},
{a:'The son of the Prophet’s protector. But his closeness ran far deeper than blood.'},
{n:'When financial hardship pressed upon Abu Talib, Muhammad ﷺ — repaying his uncle’s past kindness — took young Ali into his own home to raise. So Ali grew up directly under the Prophet’s ﷺ care.', s:'Ibn Ishaq’s Sira', g:'sirah'},
{n:'He witnessed the Prophet’s character up close, day and night, even before revelation came. That intimacy shaped his entire life.'},
{c:'Formed before he was sent', x:'Ali knew <em>the man</em> before he knew <em>the message</em>. He saw Muhammad’s ﷺ honesty, gentleness, and steadfastness at home, long before a single verse.<br><br>So when he believed, his faith rested not on distant report — but on direct witness of a man he knew inside and out.'},
{n:'Cousin, foster-son, and later son-in-law — few were as close to the Prophet ﷺ as Ali, from cradle to grave.'},
{q:'What matters most about Ali at this beginning?', o:[
  'His lineage and closeness to the Prophet',
  'That he was raised in the Prophet’s own home'
]},
{n:'As the son of Abu Talib of Banu Hashim, Ali was at the heart of the family that guarded the Prophet. This closeness of blood would later fuse with closeness of faith, making him part of the honoured Ahl al-Bayt.'},
null,
{n:'To grow up in the Prophet’s home meant Ali absorbed his character from childhood — his speech, his patience, his worship. He was taught by the best teacher of mankind before that community was even born.'},
null,
{n:'Before the message came, it was as if God had prepared a child at the Prophet’s side — one who would be among the first to affirm him, and among the last to stay loyal.'}
],
/* ── Bab 2 ── */
[
{n:'When the first revelation came, Ali — a boy of about ten — was in the Prophet’s ﷺ house. He became the first youth to believe: Khadijah first among women, Abu Bakr among grown men, and Ali among the young.', s:'Ibn Hisham’s Sira', g:'sirah'},
{n:'He believed without a lifetime’s baggage of idol-worship. His heart was young and clear, so the truth entered unobstructed.'},
{n:'At the feast of close kin, the Prophet ﷺ gathered Banu Hashim and asked who would stand with him. Only the young Ali rose to pledge support, amid elders who stayed silent.', s:'Historical account', g:'sirah'},
{a:'The courage of a child before the great. Sometimes the youngest sees most clearly.'},
{c:'Faith that did not wait for adulthood', x:'Age is no barrier to conviction. Ali proved that clarity of heart can outrun years and rank.<br><br>What held many elders back was not lack of proof, but the weight of surrendering inheritance and pride. Ali carried no such burden yet — so he was free to choose the truth.'},
{n:'From then he was the Prophet’s shadow among the young, learning straight from the source, absorbing knowledge and character every day.'},
{q:'What do you want to explore from this chapter?', o:[
  'Why the young believed first',
  'His courage in standing among the elders'
]},
{n:'A heart not yet filled with pride and vested interest receives the truth more easily. Ali did not first have to tear anything down within himself; he simply said “yes.” That is the advantage of clarity.'},
null,
{n:'To stand alone when all are silent takes a rare courage — all the more for a child before tribal chiefs. That courage would mark Ali all his life, on the battlefield and on the seat of power alike.'},
null,
{n:'First among the young. He began his journey with a single brave “yes” — and never took it back.'}
],
/* ── Bab 3 ── */
[
{n:'On the night of the Hijra, executioners from various clans ringed the Prophet’s ﷺ house, ready to kill him the moment he stepped out.'},
{n:'The Prophet ﷺ asked Ali to sleep in his bed, wrapped in his cloak, so the watchers would think he was still inside — while he slipped away. Ali agreed, placing himself at the edge of the sword.', s:'Ibn Hisham’s Sira', g:'sirah'},
{ay:'وَمِنَ النَّاسِ مَن يَشْرِي نَفْسَهُ ابْتِغَاءَ مَرْضَاتِ اللَّهِ ۗ وَاللَّهُ رَءُوفٌ بِالْعِبَادِ', m:'“And among people is he who sells himself seeking the pleasure of Allah. And Allah is Most Kind to His servants.”', s:'Qur’an, al-Baqarah: 207', qref:1},
{c:'Selling oneself for God’s pleasure', x:'Some exegetes connect this verse to Ali that night — one who “sold” himself, ready to die, for another’s safety, seeking only God’s pleasure.<br><br>There is a kind of love that can only be proven by willingness to take the place of danger in the beloved’s stead.'},
{n:'When the besiegers broke in, they found Ali in the bed — and the Prophet ﷺ was already far away.'},
{n:'Ali stayed a few more days, not for himself, but to return the deposits people had entrusted to the Prophet — even his enemies’ trusts — then set out on the Hijra on foot.', s:'Ibn Hisham’s Sira', g:'sirah'},
{a:'Even while fleeing for his life, the enemies’ trusts were returned. It was Ali who saw it through.'},
{q:'What stands out most about Ali’s role here?', o:[
  'His willingness to die in the Prophet’s bed',
  'Completing the return of the deposits'
]},
{n:'Ali knew that bed could be the place of his death. He lay down there all the same. A quiet sacrifice, without fanfare, proving his love for the Prophet outweighed his fear of death.'},
null,
{n:'The title al-Amin clung to the Prophet even from his enemies; they still entrusted their wealth to him. By completing the return of those trusts, Ali carried on the great lesson: trust is kept, even toward those who fight you.'},
null,
{n:'He followed on to Madinah — the city where his role would grow: battlefield hero, the Prophet’s son-in-law, and one of the deepest in knowledge.'}
],
/* ── Bab 4 ── */
[
{n:'In Madinah, the Prophet ﷺ married his daughter Fatimah to Ali. A simple wedding, from which came Hasan and Husayn — the Prophet’s ﷺ beloved grandsons.', s:'Historical account', g:'sirah'},
{n:'Ali’s courage became legend: at Badr, Uhud, the Battle of the Trench (his duel with ‘Amr ibn ‘Abd Wudd), and Khaybar.'},
{sb:'لَأُعْطِيَنَّ الرَّايَةَ رَجُلًا يُحِبُّ اللَّهَ وَرَسُولَهُ وَيُحِبُّهُ اللَّهُ وَرَسُولُهُ', m:'“I will surely give the banner to a man who loves Allah and His Messenger, and whom Allah and His Messenger love.”', s:'al-Bukhari; Muslim', g:'shahih'},
{n:'The banner was given to Ali, and through him the fortress of Khaybar was taken. At Tabuk, the Prophet ﷺ left Ali in charge of Madinah; when some taunted him, the Prophet said:'},
{sb:'أَنْتَ مِنِّي بِمَنْزِلَةِ هَارُونَ مِنْ مُوسَى إِلَّا أَنَّهُ لَا نَبِيَّ بَعْدِي', m:'“You are to me as Harun was to Musa, except that there is no prophet after me.”', s:'al-Bukhari; Muslim', g:'shahih'},
{n:'His knowledge and sharpness of judgment were renowned. The Prophet ﷺ sent him as a judge to Yemen and prayed for his tongue and heart. Later, the companions would often turn to him for the hardest questions.', s:'Ahmad', g:'hasan'},
{c:'A gate of knowledge — without a weak narration', x:'Some famous sayings about Ali’s vast knowledge are in fact weak in chain. But we do not need them: the sound record is more than enough — the judgeship of Yemen, the Prophet’s prayer for him, and the great companions’ habit of consulting him.<br><br>Guarding the honesty of the sources strengthens his standing, not weakens it.'},
{q:'Which side of Ali do you want to trace?', o:[
  'The depth of his knowledge',
  'His courage in battle'
]},
{n:'Ali combined memory, understanding, and sharp discernment. Not merely knowing much, but knowing how to apply it to real cases — which is why even ‘Umar was said to seek refuge from a hard problem that Ali was not present for.'},
null,
{n:'His courage was no recklessness, but firmness rooted in conviction. At Khaybar and the Trench, he advanced when others hesitated — not to make a name, but because defending the truth demands that someone dare to stand at the very front.'},
null,
{n:'Deep knowledge fused with firm courage, wrapped in closeness to the Prophet. That rare combination would later be tested by the heaviest burden: leading a community that was tearing apart.'}
],
/* ── Bab 5 ── */
[
{n:'After the murder of ‘Uthman, the community was in turmoil. Ali was made the fourth caliph amid a storm he had not raised.', s:'al-Tabari', g:'sirah'},
{n:'The core dispute turned on how and when to bring ‘Uthman’s killers to justice. That difference — among sincere believers — erupted into two grievous conflicts: the Battle of the Camel and Siffin.', s:'al-Tabari', g:'sirah'},
{c:'Holding the tongue about the companions', x:'Here the scholars of Ahl al-Sunnah teach restraint. Those who differed were mujtahid Muslims who largely meant well but disagreed in judgment; Ali was the rightful caliph and closer to the truth, while the others were companions who erred yet remain honoured.<br><br>We recount what happened without reviling anyone. The details are heavy, and the final judgment belongs to God.'},
{n:'Ali strove to stabilise the community, uphold justice, and stop the bloodshed — though the sedition proved larger than any one man could contain.'},
{n:'As caliph, he still lived very simply — patched clothes, plain food — and was famed for wisdom and eloquence. He insisted that rulers submit to the same law as their subjects.', s:'Athar', g:'sirah'},
{r:'Ali ibn Abi Talib (r.a.)', x:'The worth of every person is in the good he masters.', s:'Athar', g:'sirah'},
{a:'He led not in a calm golden age, but amid the ruins — and still held fast to justice.'},
{q:'What do you want to trace about his caliphate?', o:[
  'The burden of sedition he carried',
  'His justice and simplicity'
]},
{n:'Ali inherited a gaping wound, not a blank page. He tried to establish legitimate authority and demand justice for ‘Uthman’s blood, while bearing the weight of a civil war no one truly wanted. History records it as a most sorrowful time.'},
null,
{n:'Amid power, he refused privilege. He divided the state’s wealth justly with no regard for closeness, lived as plainly as the common people, and held that the law applies equally to ruler and ruled. That justice he never took off, even in the hardest days.'},
null,
{n:'He held the trust in a nearly impossible time. And like the two caliphs before him, his life too would end at the edge of a weapon — in the place he loved most: in prayer.'}
],
/* ── Bab 6 ── */
[
{n:'A breakaway group — the Kharijites — turned against Ali after rejecting the arbitration. They declared various parties disbelievers and plotted assassinations.', s:'al-Tabari', g:'sirah'},
{n:'One dawn in Kufa, as Ali set out to lead the prayer, a Kharijite named Ibn Muljam stabbed him with a poisoned sword. It was the year 40 AH.', s:'Historical account', g:'sirah'},
{n:'As he lay dying, Ali gave instruction about his attacker: if I live, I will decide his case; if I die, strike him one blow as he struck me — and do not mutilate him. Justice, even toward his own killer.', s:'Athar', g:'sirah'},
{r:'Ali ibn Abi Talib (r.a.)', x:'Fear Allah, guard the prayer, and keep to the Qur’an. And look after the orphans and the weak among you.', s:'Athar', g:'sirah'},
{c:'Justice reaching even his killer', x:'Even on the brink of death by treachery, Ali refused to exceed the limit. One blow for one blow, with no torture.<br><br>Restraining one’s anger at the moment one is most entitled to it is the summit of the justice he defended all his life.'},
{n:'With Ali’s death ended the age of the Rightly-Guided Caliphs — the four whose lives you have walked: Abu Bakr, ‘Umar, ‘Uthman, and Ali.'},
{a:'The child raised in the Prophet’s home closed his life by giving it in the Prophet’s cause. The circle came full.'},
{q:'What stays with you most about the end of Ali’s life?', o:[
  'His justice toward his killer',
  'The end of an era'
]},
{n:'The command not to over-retaliate reveals who Ali truly was: a man whose justice was not governed by anger, even when it was his own blood that was spilled. He died as he lived — upon principle.'},
null,
{n:'Four caliphs, four temperaments, one common thread: they bore power as a fearsome trust, not a prize to enjoy. With Ali’s death, a generation of exemplars closed its chapter.'},
null,
{n:'Ali was buried, and the age of the rightly-guided caliphs ended. What remains is their example: truthful, just, generous, and brave — four lights reflecting one and the same source.'}
]
];

const AL_SCENES = ['mecca','mecca','migration','madinah','battlefield','interior'];

/* ============================================================
   STUB — tokoh yang kroniknya sedang disusun (dwibahasa ringkas)
   ============================================================ */
function khStub(nameId, nameEn){
  return {
    chapters:[{ id:1, glyph:'…', yr:'', years:'—', title:'Segera Hadir',
      blurb:'Kronik lengkap sedang disusun dengan format lini masa yang sama.',
      nodes:[
        {n:'Kronik <b>'+nameId+'</b> sedang disusun — dari sebelum Islam hingga akhir masa kekhalifahannya, lengkap dengan rujukan dan derajat sanadnya, seperti kisah Abu Bakar.'},
        {n:'Untuk saat ini, kamu bisa menjelajahi kisah <b>Abu Bakar Ash-Shiddiq</b> yang sudah lengkap, atau berpindah tokoh lewat menu <b>Ganti Tokoh</b> di Peta Waktu.'},
        {a:'Bagian ini akan segera hadir, insya Allah.'}
      ]
    }],
    metaEn:[{ title:'Coming Soon', years:'—', blurb:'The full timeline is being written.' }],
    transEn:[[
      {n:'The chronicle of <b>'+nameEn+'</b> is being written — from before Islam to the end of his caliphate, with its sources and chain grades, just like Abu Bakr’s story.'},
      {n:'For now, you can explore the complete story of <b>Abu Bakr al-Siddiq</b>, or switch figures via the <b>Change Figure</b> menu in the Timeline.'},
      {a:'This section is coming soon, God willing.'}
    ]],
    scenes:['desert']
  };
}

/* ============================================================
   REGISTRY TOKOH — dipakai stories.js
   ============================================================ */
const KHULAFA_TRACKS = [
  Object.assign({
    key:'abubakr', name:'Abu Bakar Ash-Shiddiq', nameEn:'Abu Bakr al-Siddiq', glyph:'ب',
    blurb:'Sahabat di gua, khalifah pertama, orang yang membenarkan tanpa ragu.',
    blurbEn:'The companion in the cave, the first caliph, the man who affirmed without a doubt.'
  }, { chapters:AB_CH, metaEn:AB_META_EN, transEn:AB_TRANS_EN, scenes:AB_SCENES }),

  Object.assign({
    key:'umar', name:'Umar bin Khattab', nameEn:'‘Umar ibn al-Khattab', glyph:'ف',
    blurb:'Al-Faruq — pembeda benar dan batil; dari penentang keras menjadi khalifah yang adil.',
    blurbEn:'Al-Faruq — from fierce opponent to the caliph of justice.'
  }, { chapters:UM_CH, metaEn:UM_META_EN, transEn:UM_TRANS_EN, scenes:UM_SCENES }),

  Object.assign({
    key:'utsman', name:'Utsman bin Affan', nameEn:'‘Uthman ibn ‘Affan', glyph:'ن',
    blurb:'Dzun-Nurain — pemilik dua cahaya; pemalu, dermawan, penyatu mushaf.',
    blurbEn:'Dhu al-Nurayn — the modest, generous caliph who unified the Qur’an’s text.'
  }, { chapters:UT_CH, metaEn:UT_META_EN, transEn:UT_TRANS_EN, scenes:UT_SCENES }),

  Object.assign({
    key:'ali', name:'Ali bin Abi Thalib', nameEn:'‘Ali ibn Abi Talib', glyph:'ع',
    blurb:'Anak yang dibesarkan Nabi; gerbang ilmu; khalifah keempat.',
    blurbEn:'Raised by the Prophet; the gate of knowledge; the fourth caliph.'
  }, { chapters:AL_CH, metaEn:AL_META_EN, transEn:AL_TRANS_EN, scenes:AL_SCENES })
];
