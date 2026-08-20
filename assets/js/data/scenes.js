/* DATA · Konfigurasi suasana & pemetaan latar per bab. Global: MOODS, CHAPTER_SCENES */

/* ---------- suasana per bab ---------- */
const MOODS = {
  0:  {top:'#0a1024', bot:'#05070f', glow:'#22407a', colA:'#C8A03C', colB:'#EBD08A', stars:1.0, turb:0.00, pat:.30, dust:.45, hz:.10},
  1:  {top:'#0b1128', bot:'#05070f', glow:'#1d3a70', colA:'#8FB4E8', colB:'#C8A03C', stars:1.25, turb:0.02, pat:.34, dust:.40, hz:.16},
  2:  {top:'#141326', bot:'#080a14', glow:'#4a3a5e', colA:'#C9A9D8', colB:'#EBD08A', stars:.85, turb:0.03, pat:.22, dust:.55, hz:.26},
  3:  {top:'#161a2a', bot:'#0a0c16', glow:'#5a4a2c', colA:'#E2B25C', colB:'#F0DDB0', stars:.70, turb:0.01, pat:.40, dust:.60, hz:.30},
  4:  {top:'#06070f', bot:'#03040a', glow:'#8a6a1e', colA:'#FFE9AE', colB:'#FFFFFF', stars:.35, turb:0.02, pat:.16, dust:.28, hz:.04},
  5:  {top:'#1a1220', bot:'#0a0710', glow:'#7a2f2a', colA:'#D9705F', colB:'#E8C070', stars:.55, turb:0.09, pat:.20, dust:.85, hz:.22},
  6:  {top:'#12141c', bot:'#070810', glow:'#3a3a44', colA:'#9AA3B2', colB:'#C86A5E', stars:.40, turb:0.14, pat:.10, dust:1.00, hz:.30},
  7:  {top:'#0a1638', bot:'#040814', glow:'#3C6FD0', colA:'#9EC5FF', colB:'#FFF4D0', stars:1.60, turb:0.02, pat:.55, dust:.22, hz:.00, drift:1.7},
  8:  {top:'#0a1024', bot:'#05070f', glow:'#2a4a86', colA:'#A8C8F0', colB:'#EBD08A', stars:1.35, turb:0.05, pat:.24, dust:.55, hz:.20},
  9:  {top:'#0b1a1c', bot:'#050c0e', glow:'#2f7a62', colA:'#6FD0A8', colB:'#EBD08A', stars:.80, turb:0.01, pat:.48, dust:.42, hz:.24},
  10: {top:'#1a1416', bot:'#0a0708', glow:'#7a3a24', colA:'#D98A5C', colB:'#E8D2A0', stars:.60, turb:0.11, pat:.18, dust:.95, hz:.34},
  11: {top:'#1c1608', bot:'#0c0904', glow:'#B08020', colA:'#FFD98A', colB:'#FFFFFF', stars:.55, turb:0.02, pat:.62, dust:.55, hz:.28},
  12: {top:'#0d1220', bot:'#05070e', glow:'#3a5a8a', colA:'#CFE0F5', colB:'#EBD08A', stars:1.05, turb:0.01, pat:.26, dust:.38, hz:.14},
  13: {top:'#101526', bot:'#06080f', glow:'#4a5a3a', colA:'#C8D8A0', colB:'#EBD08A', stars:.95, turb:0.01, pat:.44, dust:.45, hz:.12}
};

/* pemetaan indeks bab → latar 3D (POINTER cerita aktif; di-swap oleh Story.load) */
let CHAPTER_SCENES = [
  'mecca','desert','mecca','cave','mecca',
  'mountains','ascent','migration','madinah',
  'battlefield','mecca','arafah','interior'
];
