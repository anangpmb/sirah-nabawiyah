'use strict';
/* Narrative silhouette illustrations — one per chapter (ci 0-12)
   Rendered as inline SVG inside #scene-art overlay.
   Uses abstract siluet (no facial features) per Islamic artistic tradition. */

const ILLUSTRATIONS = (() => {
  const S = 'rgba(4,6,12,0.84)';          // silhouette fill
  const G = 'rgba(200,160,60,0.52)';       // gold / moon glow
  const W = 'rgba(18,38,80,0.55)';         // water / lapis

  /* ── primitive builders ── */

  function ground(d){
    d = d || 'M0,558 Q250,538 500,550 Q750,538 1000,552 L1000,600 L0,600 Z';
    return '<path d="' + d + '" fill="' + S + '"/>';
  }

  function crescent(cx, cy, r, uid){
    return '<defs><mask id="' + uid + '">'
      + '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="white"/>'
      + '<circle cx="' + (cx + r*0.42) + '" cy="' + (cy - r*0.16) + '" r="' + (r*0.78) + '" fill="black"/>'
      + '</mask></defs>'
      + '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + G + '" mask="url(#' + uid + ')"/>';
  }

  function star(x, y, r){ r = r || 2.4; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + G + '" opacity="0.72"/>'; }

  function stars(/* [x,y,r], ... */){
    var out = '';
    for(var i=0; i<arguments.length; i++) out += star(arguments[i][0], arguments[i][1], arguments[i][2]);
    return out;
  }

  function person(x, y, h){
    h = h || 54;
    return '<circle cx="' + x + '" cy="' + (y-h+h*0.14) + '" r="' + (h*0.14) + '" fill="' + S + '"/>'
         + '<ellipse cx="' + x + '" cy="' + (y-h*0.44) + '" rx="' + (h*0.18) + '" ry="' + (h*0.44) + '" fill="' + S + '"/>';
  }

  function peeps(list, h){
    var out = '';
    for(var i=0; i<list.length; i++) out += person(list[i][0], list[i][1], h);
    return out;
  }

  function mountain(px, py, w, h){
    return '<polygon points="' + px + ',' + py + ' ' + (px-w/2) + ',' + (py+h) + ' ' + (px+w/2) + ',' + (py+h) + '" fill="' + S + '"/>';
  }

  function glow(cx, cy, rx, ry, color, uid){
    color = color || 'rgba(200,160,60,0.18)';
    return '<defs><radialGradient id="' + uid + '" cx="50%" cy="50%" r="50%">'
      + '<stop offset="0%" stop-color="' + color + '"/>'
      + '<stop offset="100%" stop-color="rgba(0,0,0,0)"/>'
      + '</radialGradient></defs>'
      + '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + (ry||rx*0.65) + '" fill="url(#' + uid + ')"/>';
  }

  function camel(cx, by, s){
    s = s || 1;
    /* dromedary, facing right: body + hump + neck/head + 4 legs */
    return '<g transform="translate(' + cx + ',' + by + ') scale(' + s + ')">'
      + '<ellipse cx="-5" cy="-27" rx="57" ry="22" fill="' + S + '"/>'   /* body */
      + '<ellipse cx="-4" cy="-50" rx="20" ry="17" fill="' + S + '"/>'   /* hump */
      + '<ellipse cx="46" cy="-43" rx="17" ry="13" fill="' + S + '"/>'   /* neck base */
      + '<ellipse cx="61" cy="-56" rx="12" ry="14" fill="' + S + '"/>'   /* head */
      + '<rect x="-40" y="-6" width="13" height="28" fill="' + S + '" rx="3"/>'
      + '<rect x="-20" y="-6" width="13" height="30" fill="' + S + '" rx="3"/>'
      + '<rect x="9" y="-6" width="13" height="28" fill="' + S + '" rx="3"/>'
      + '<rect x="29" y="-6" width="13" height="26" fill="' + S + '" rx="3"/>'
      + '</g>';
  }

  function elephant(cx, by, s){
    s = s || 1;
    /* african-style silhouette: body + head + trunk + 4 legs */
    return '<g transform="translate(' + cx + ',' + by + ') scale(' + s + ')">'
      + '<ellipse cx="-10" cy="-48" rx="88" ry="46" fill="' + S + '"/>'  /* body */
      + '<ellipse cx="70" cy="-76" rx="36" ry="32" fill="' + S + '"/>'   /* head */
      + '<path d="M87,-54 Q112,-20 102,26 Q98,38 87,34 Q78,30 85,16 Q93,-2 78,-18 Z" fill="' + S + '"/>' /* trunk */
      + '<rect x="-80" y="-3" width="20" height="35" fill="' + S + '" rx="4"/>'
      + '<rect x="-48" y="-3" width="20" height="38" fill="' + S + '" rx="4"/>'
      + '<rect x="0" y="-3" width="20" height="35" fill="' + S + '" rx="4"/>'
      + '<rect x="34" y="-3" width="18" height="30" fill="' + S + '" rx="4"/>'
      + '</g>';
  }

  function mosque(cx, by, w, h){
    /* cx = center, by = bottom y, w = width, h = height */
    var bx = cx - w/2, ty = by - h;
    return '<rect x="' + bx + '" y="' + ty + '" width="' + w + '" height="' + h + '" fill="' + S + '" rx="3"/>'
      + '<ellipse cx="' + cx + '" cy="' + ty + '" rx="' + (w*0.43) + '" ry="' + (h*0.21) + '" fill="' + S + '"/>'
      + '<rect x="' + (cx+w*0.44) + '" y="' + (ty-h*0.55) + '" width="' + (w*0.09) + '" height="' + (h*0.55) + '" fill="' + S + '" rx="2"/>'
      + '<circle cx="' + (cx+w*0.485) + '" cy="' + (ty-h*0.55) + '" r="' + (w*0.048) + '" fill="' + G + '" opacity="0.5"/>';
  }

  function kaaba(cx, by, size){
    return '<rect x="' + (cx-size/2) + '" y="' + (by-size) + '" width="' + size + '" height="' + size + '" fill="' + S + '" rx="3"/>'
      + '<rect x="' + (cx-size/2) + '" y="' + (by-size*0.32) + '" width="' + size + '" height="' + (size*0.06) + '" fill="' + G + '" opacity="0.25"/>';
  }

  function ship(cx, by, w, h){
    return '<path d="M' + (cx-w/2) + ',' + by + ' Q' + (cx-w/2+15) + ',' + (by+h*0.88) + ' ' + cx + ',' + (by+h)
      + ' Q' + (cx+w/2-15) + ',' + (by+h*0.88) + ' ' + (cx+w/2) + ',' + by + ' Z" fill="' + S + '"/>'
      + '<line x1="' + cx + '" y1="' + by + '" x2="' + cx + '" y2="' + (by-h*1.3) + '" stroke="' + S + '" stroke-width="5"/>'
      + '<path d="M' + cx + ',' + (by-h*1.3) + ' L' + (cx+w*0.38) + ',' + (by-h*0.42) + ' L' + cx + ',' + (by-h*0.18) + ' Z" fill="' + S + '"/>';
  }

  function waves(y){
    return '<path d="M0,' + y + ' Q125,' + (y-14) + ' 250,' + y + ' Q375,' + (y+14) + ' 500,' + y
      + ' Q625,' + (y-14) + ' 750,' + y + ' Q875,' + (y+14) + ' 1000,' + y + ' L1000,600 L0,600 Z" fill="' + W + '" opacity="0.65"/>';
  }

  function bird(x, y, s){
    s = s || 12;
    return '<path d="M' + x + ',' + y + ' Q' + (x-s) + ',' + (y-s*0.45) + ' ' + (x-s*2.2) + ',' + (y-s*0.2) + '"'
      + ' stroke="' + S + '" stroke-width="3" fill="none" stroke-linecap="round"/>'
      + '<path d="M' + x + ',' + y + ' Q' + (x+s) + ',' + (y-s*0.45) + ' ' + (x+s*2.2) + ',' + (y-s*0.2) + '"'
      + ' stroke="' + S + '" stroke-width="3" fill="none" stroke-linecap="round"/>';
  }

  /* ── 13 chapter SVG illustrations ── */
  var open = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">';
  var close = '</svg>';

  return [

    /* 0 · Tahun Gajah — elephant + Ababil birds */
    open
      + glow(380,480,280,180,'rgba(200,160,60,0.14)','g0')
      + crescent(820,78,36,'cr0')
      + bird(265,168,14) + bird(375,148,16) + bird(480,175,13) + bird(335,205,11)
      + elephant(355,498,0.95)
      + person(355,434,40)
      + ground('M0,545 Q250,525 500,540 Q750,525 1000,540 L1000,600 L0,600 Z')
    + close,

    /* 1 · Kelahiran & Masa Kecil — crescent, stars, palms, Makkah hills */
    open
      + crescent(500,68,42,'cr1')
      + stars([148,100,2],[268,58,2.5],[360,88,2],[620,52,2.5],[730,80,2],[840,110,2],[100,148,1.8],[960,68,2])
      + mountain(200,358,300,245) + mountain(782,338,240,262)
      + '<path d="M438,288 L428,432 L452,432 Z M428,308 Q408,320 404,342 Q430,354 452,342 Q468,320 452,308 Z" fill="' + S + '"/>'
      + '<path d="M600,314 L590,432 L614,432 Z M590,330 Q570,342 566,364 Q590,376 614,364 Q630,342 614,330 Z" fill="' + S + '"/>'
      + ground()
    + close,

    /* 2 · Masa Muda & Pernikahan — trade caravan */
    open
      + crescent(100,80,32,'cr2')
      + stars([258,58,2],[405,44,2.5],[562,72,2],[752,54,2.5],[882,82,2])
      + glow(900,340,200,130,'rgba(200,160,60,0.20)','g2')
      + camel(128,490,1.0) + person(178,472,44)
      + camel(318,490,1.0) + person(368,472,44)
      + camel(510,490,1.0) + person(558,472,44)
      + camel(700,488,1.0) + person(748,470,44)
      + ground('M0,535 Q250,515 500,528 Q750,515 1000,528 L1000,600 L0,600 Z')
    + close,

    /* 3 · Wahyu Pertama — mountain cave, divine light */
    open
      + glow(415,375,285,210,'rgba(200,160,60,0.26)','g3')
      + crescent(820,72,38,'cr3')
      + stars([132,80,2.5],[242,52,2],[382,66,2.5],[600,42,2],[722,88,2.5],[950,72,2])
      + mountain(552,78,620,542) + mountain(182,198,340,422)
      + '<path d="M388,292 Q346,328 326,384 Q346,428 410,438 Q458,432 476,384 Q478,328 448,292 Z" fill="' + S + '"/>'
      + '<ellipse cx="402" cy="378" rx="52" ry="62" fill="' + G + '" opacity="0.22"/>'
      + ground('M0,520 Q500,500 1000,520 L1000,600 L0,600 Z')
    + close,

    /* 4 · Dakwah Sirriyah — small group inside house */
    open
      + crescent(862,78,32,'cr4')
      + stars([100,60,2],[268,80,1.8],[422,52,2.2],[156,128,1.8])
      + '<rect x="328" y="308" width="324" height="202" fill="' + S + '" rx="4"/>'
      + '<path d="M328,308 L490,246 L652,308 Z" fill="' + S + '"/>'
      + glow(490,372,122,88,'rgba(200,160,60,0.22)','g4')
      + peeps([[388,322],[434,322],[490,322],[546,322],[596,322]],48)
      + ground('M0,548 Q500,528 1000,548 L1000,600 L0,600 Z')
    + close,

    /* 5 · Hijrah ke Habasyah — dhow at sea, crescent, refugees */
    open
      + crescent(162,88,32,'cr14')
      + stars([322,58,2],[502,40,1.8],[682,72,2.2],[842,54,2],[180,120,1.8],[760,110,1.8])
      + glow(700,380,200,130,'rgba(138,188,240,0.18)','g14')
      + waves(442)
      + ship(382,328,200,90)
      + ship(710,352,162,72)
      + peeps([[285,452],[318,456],[352,452],[385,456],[418,452]],42)
      + ground('M0,548 Q500,530 1000,548 L1000,600 L0,600 Z')
    + close,

    /* 6 · Dakwah Terbuka — figure on height, crowd below */
    open
      + crescent(842,68,35,'cr5')
      + glow(500,380,320,200,'rgba(200,160,60,0.13)','g5')
      + mountain(500,160,520,402)
      + person(500,318,62)
      + peeps([[118,508],[164,514],[210,508],[256,514],[300,508],[346,514],[392,508],[436,514],[468,508],[540,510],[574,514],[618,508],[662,514],[708,508],[752,514],[796,508]],48)
      + ground('M0,538 Q500,518 1000,538 L1000,600 L0,600 Z')
    + close,

    /* 6 · Hijrah ke Habasyah — ships at sea */
    open
      + crescent(162,88,32,'cr6')
      + stars([322,58,2],[502,40,1.8],[682,72,2.2],[842,54,2])
      + waves(440)
      + ship(382,324,200,88)
      + ship(712,346,162,72)
      + peeps([[302,452],[334,456],[366,452],[398,456]],42)
      + ground('M0,548 Q500,530 1000,548 L1000,600 L0,600 Z')
    + close,

    /* 7 · Isra Mi'raj — starlit sky, Masjid Al-Aqsa silhouette */
    open
      + glow(500,185,390,240,'rgba(200,160,60,0.22)','g7a')
      + glow(500,548,310,120,'rgba(36,69,126,0.18)','g7b')
      + crescent(500,74,52,'cr7')
      + stars([82,55,2.5],[202,82,2],[312,40,3],[458,58,2.5],[652,48,2.5],[772,32,2],[902,70,2.5],[142,130,2],[362,108,2],[742,110,2.5])
      + '<polygon points="498,46 502,40 506,46 502,57" fill="' + G + '" opacity="0.72"/>'
      + '<polygon points="298,148 302,142 306,148 302,159" fill="' + G + '" opacity="0.62"/>'
      + '<polygon points="702,118 706,112 710,118 706,130" fill="' + G + '" opacity="0.62"/>'
      + '<rect x="328" y="388" width="262" height="142" fill="' + S + '" rx="3"/>'
      + '<path d="M328,388 L459,332 L590,388 Z" fill="' + S + '"/>'
      + '<rect x="583" y="346" width="25" height="80" fill="' + S + '" rx="3"/>'
      + '<circle cx="595" cy="344" r="12" fill="' + G + '" opacity="0.42"/>'
      + ground('M0,490 Q500,470 1000,490 L1000,600 L0,600 Z')
    + close,

    /* 8 · Hijrah ke Madinah — long caravan crossing the desert */
    open
      + glow(928,380,224,160,'rgba(200,160,60,0.24)','g8')
      + crescent(902,70,30,'cr8')
      + stars([122,60,2],[282,40,2],[452,68,2],[642,45,2])
      + mountain(862,298,282,304)
      + camel(80,482,0.88)  + person(128,464,42)
      + camel(258,482,0.88) + person(306,464,42)
      + camel(438,480,0.88) + person(484,462,42)
      + camel(615,482,0.88) + person(662,464,42)
      + camel(790,480,0.88) + person(836,462,42)
      + ground('M0,522 Q250,505 500,518 Q750,505 1000,518 L1000,600 L0,600 Z')
    + close,

    /* 10 · Membangun Madinah — mosque under construction, workers */
    open
      + crescent(802,68,36,'cr15')
      + stars([102,62,2],[212,42,1.8],[548,50,2])
      + glow(490,380,280,180,'rgba(128,208,160,0.15)','g15')
      + mosque(490,480,340,230)
      + '<path d="M188,298 L178,452 L204,452 Z M178,316 Q156,328 150,352 Q178,364 204,352 Q222,328 204,316 Z" fill="' + S + '"/>'
      + '<path d="M790,318 L780,452 L806,452 Z M780,336 Q758,348 752,372 Q780,384 806,372 Q824,348 806,336 Z" fill="' + S + '"/>'
      + peeps([[228,492],[265,492],[302,492]],50)
      + peeps([[672,492],[709,492],[746,492]],50)
      + ground('M0,538 Q500,518 1000,538 L1000,600 L0,600 Z')
    + close,

    /* 11 · Membangun Madinah — mosque, workers, palms */
    open
      + crescent(802,68,36,'cr9')
      + stars([102,62,2],[212,42,1.8],[376,72,2.2],[622,50,2])
      + mosque(490,478,352,234)
      + '<path d="M198,298 L188,452 L214,452 Z M188,316 Q166,328 160,352 Q188,364 214,352 Q232,328 214,316 Z" fill="' + S + '"/>'
      + '<path d="M782,318 L772,452 L798,452 Z M772,336 Q750,348 744,372 Q772,384 798,372 Q816,348 798,336 Z" fill="' + S + '"/>'
      + peeps([[232,490],[270,490],[308,490]],50)
      + peeps([[662,490],[700,490],[738,490]],50)
      + ground('M0,538 Q500,518 1000,538 L1000,600 L0,600 Z')
    + close,

    /* 12 · Antara Perjanjian — caravans, emissaries, desert horizon */
    open
      + glow(900,340,220,140,'rgba(255,203,107,0.22)','g16')
      + crescent(110,78,30,'cr16')
      + stars([280,55,2],[450,38,2.2],[630,62,1.8],[800,48,2])
      + mountain(880,290,280,312)
      + camel(88,480,0.85)  + person(135,462,42)
      + camel(262,480,0.85) + person(308,462,42)
      + camel(438,480,0.85) + person(484,462,42)
      + camel(614,480,0.85) + person(660,462,42)
      + ground('M0,522 Q250,505 500,518 Q750,505 1000,518 L1000,600 L0,600 Z')
    + close,

    /* 13 · Perang Badr — two armies face each other */
    open
      + glow(500,552,380,120,'rgba(196,83,74,0.20)','g10')
      + stars([202,68,1.8],[402,45,2],[622,62,2])
      + peeps([[55,472],[100,478],[146,472],[192,478],[238,472],[284,478],[330,472],[376,478],[422,472]],54)
      + peeps([[578,472],[624,478],[670,472],[716,478],[762,472],[808,478],[854,472],[900,478],[946,472]],54)
      + '<line x1="65" y1="452" x2="65" y2="380" stroke="' + S + '" stroke-width="3.5" stroke-linecap="round"/>'
      + '<line x1="156" y1="452" x2="156" y2="388" stroke="' + S + '" stroke-width="3.5" stroke-linecap="round"/>'
      + '<line x1="248" y1="452" x2="248" y2="385" stroke="' + S + '" stroke-width="3.5" stroke-linecap="round"/>'
      + '<line x1="340" y1="452" x2="340" y2="390" stroke="' + S + '" stroke-width="3.5" stroke-linecap="round"/>'
      + '<line x1="634" y1="452" x2="634" y2="380" stroke="' + S + '" stroke-width="3.5" stroke-linecap="round"/>'
      + '<line x1="726" y1="452" x2="726" y2="388" stroke="' + S + '" stroke-width="3.5" stroke-linecap="round"/>'
      + '<line x1="818" y1="452" x2="818" y2="385" stroke="' + S + '" stroke-width="3.5" stroke-linecap="round"/>'
      + '<line x1="910" y1="452" x2="910" y2="390" stroke="' + S + '" stroke-width="3.5" stroke-linecap="round"/>'
      + ground('M0,512 Q500,492 1000,512 L1000,600 L0,600 Z')
    + close,

    /* 11 · Fath Makkah — Ka'bah, mountains, triumphant crowd */
    open
      + glow(500,340,310,200,'rgba(200,160,60,0.24)','g11')
      + crescent(500,52,34,'cr11')
      + mountain(132,290,302,322) + mountain(882,270,302,342)
      + kaaba(500,424,128)
      + peeps([[132,492],[174,496],[216,492],[258,496],[300,492],[342,496],[384,492],[426,496]],44)
      + peeps([[578,496],[620,492],[662,496],[704,492],[746,496],[788,492],[830,496],[872,492]],44)
      + ground('M0,538 Q500,520 1000,538 L1000,600 L0,600 Z')
    + close,

    /* 12 · Haji Wada & Wafat — Ka'bah, pilgrims in procession */
    open
      + crescent(500,58,42,'cr12')
      + stars([148,82,2],[302,52,2.5],[422,76,2],[602,56,2.5],[762,84,2],[902,58,2])
      + kaaba(500,400,124)
      + peeps([[222,475],[258,482],[294,476],[330,484],[366,476],[403,484],[440,476]],44)
      + peeps([[562,484],[600,476],[638,484],[676,476],[714,484],[752,476],[790,484]],44)
      + peeps([[322,440],[360,448],[400,440],[440,448],[500,442],[560,448],[600,440],[640,448],[680,440]],40)
      + ground('M0,542 Q500,522 1000,542 L1000,600 L0,600 Z')
    + close,

  ];
})();

/* ── IllusLayer: manages the #scene-art overlay ── */
var IllusLayer = (function(){
  var _el = null, _cur = -1;
  function init(){ if(!_el) _el = document.getElementById('scene-art'); return !!_el; }
  return {
    set: function(ci){
      if(!init() || ci === _cur) return;
      _cur = ci;
      var svg = ILLUSTRATIONS[ci] || '';
      _el.innerHTML = svg;
      _el.classList.toggle('on', !!svg);
    },
    hide: function(){
      if(!init()) return;
      _el.classList.remove('on');
      _cur = -1;
    }
  };
}());
