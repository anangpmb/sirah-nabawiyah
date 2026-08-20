/* UI · Mesin WebGL (three.js). Butuh: THREE, MOODS, CHAPTER_SCENES (data/scenes.js) */

/* ============================================================
   SCENE — WebGL
   Satu-satunya "karakter" di layar adalah kaligrafi مُحَمَّد
   yang tersusun dari ribuan partikel. Tidak ada figur manusia.
   ============================================================ */
const Scene = (function(){

const cv = document.getElementById('gl');
let renderer, cam, scene, bgScene, bgCam;
let stars, dust, glyph, bgMesh;
let W = innerWidth, H = innerHeight;
const IS_SMALL = Math.min(innerWidth, innerHeight) < 700;
const N = IS_SMALL ? 5200 : 10000;
const clock = { t: 0, last: performance.now() };
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;


/* → DATA dipindah: MOODS & CHAPTER_SCENES ada di assets/js/data/scenes.js */


/* nilai yang dianimasikan */
const cur = {
  top:new THREE.Color('#0a1024'), bot:new THREE.Color('#05070f'), glow:new THREE.Color('#22407a'),
  colA:new THREE.Color('#C8A03C'), colB:new THREE.Color('#EBD08A'),
  stars:1, turb:0, pat:.3, dust:.5, hz:.1, drift:1
};
const tgt = JSON.parse(JSON.stringify({stars:1,turb:0,pat:.3,dust:.5,hz:.1,drift:1}));
tgt.top=new THREE.Color('#0a1024'); tgt.bot=new THREE.Color('#05070f'); tgt.glow=new THREE.Color('#22407a');
tgt.colA=new THREE.Color('#C8A03C'); tgt.colB=new THREE.Color('#EBD08A');

let morph = 0, morphT = 1;     // 0 = tersebar, 1 = membentuk kata
let rose  = 0, roseT  = 0;     // 0 = kaligrafi, 1 = rozet geometris
let bloom = 0;                 // kilatan sesaat
let pointer = {x:0,y:0,tx:0,ty:0};

/* ===== ENV SCENE — low-poly 3D environment ===== */
let envScene = null, envCam = null;
let envObjects = [];           // meshes cleared per scene change
let envAmbient = null, envDir = null;
let envActive = false;


/* ---- geometry helpers ---- */
function makeFlat(color){ return new THREE.MeshLambertMaterial({color, flatShading:true}); }

function randV(lo,hi){ return lo + Math.random()*(hi-lo); }

function buildTerrain(color, rough, w, segs){
  const g = new THREE.PlaneGeometry(w||200, w||200, segs||22, segs||22);
  const pos = g.attributes.position;
  for(let i=0;i<pos.count;i++){
    pos.setZ(i, pos.getZ(i) + (Math.random()-0.5)*rough);
  }
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, makeFlat(color));
  m.rotation.x = -Math.PI/2;
  m.position.y = -8;
  return m;
}

function buildMountain(x, z, h, color, segs){
  const g = new THREE.ConeGeometry(h*0.55, h, segs||7);
  const pos = g.attributes.position;
  for(let i=0;i<pos.count;i++){
    if(Math.abs(pos.getY(i) - g.parameters.height/2) > 0.5){
      pos.setX(i, pos.getX(i)+(Math.random()-0.5)*h*0.18);
      pos.setZ(i, pos.getZ(i)+(Math.random()-0.5)*h*0.18);
    }
  }
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, makeFlat(color));
  m.position.set(x, h/2-8, z);
  return m;
}

function buildKaabah(px, py, pz){
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(10,14,10), makeFlat(0x0E0A06));
  g.add(body);
  const band = new THREE.Mesh(new THREE.BoxGeometry(10.3,2.2,10.3), makeFlat(0xC8A03C));
  band.position.y = 2.5;
  g.add(band);
  const door = new THREE.Mesh(new THREE.BoxGeometry(2,4,0.3), makeFlat(0xC8A03C));
  door.position.set(0,-2,5.2);
  g.add(door);
  g.position.set(px||0, (py||0)-1, pz||-22);
  return g;
}

function buildSkyDome(zenith, horizon){
  const g = new THREE.SphereGeometry(280, 18, 9);
  g.scale(-1,1,1);
  const mat = new THREE.ShaderMaterial({
    vertexShader:`varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader:`precision mediump float; varying vec3 vP; uniform vec3 uZ,uH;
      void main(){ float t=clamp(normalize(vP).y*.7+.4,0.,1.); gl_FragColor=vec4(mix(uH,uZ,t),1.0); }`,
    uniforms:{ uZ:{value:new THREE.Color(zenith)}, uH:{value:new THREE.Color(horizon)} },
    side:THREE.BackSide, depthWrite:false
  });
  return new THREE.Mesh(g, mat);
}

function buildPalm(x,z){
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.35,0.5,9,6), makeFlat(0x5A4020));
  trunk.position.set(x,-3.5,z);
  g.add(trunk);
  const top = new THREE.Mesh(new THREE.ConeGeometry(3.5,6,8), makeFlat(0x2E4E18));
  top.position.set(x,3,z);
  g.add(top);
  return g;
}

function buildBox(x,y,z,w,h,d,color){
  const m = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), makeFlat(color));
  m.position.set(x,y,z);
  return m;
}

/* ---- scene builders ---- */
const SCENE_BUILDERS = {
  mecca(es, al, dl){
    al.color.set(0x302010); al.intensity=0.6;
    dl.color.set(0xFFDDA0); dl.intensity=0.8; dl.position.set(30,20,-10);
    es.fog = new THREE.Fog(0xC4A070, 80, 240);
    es.add(buildSkyDome('#0D1428','#5A3018'));
    es.add(buildTerrain(0xB8A870, 0.7));
    es.add(buildKaabah(0,-1,-22));
    [[-60,-80,28],[28,-70,22],[-28,-100,35],[10,-120,42]].forEach(([x,z,h])=>es.add(buildMountain(x,z,h,0x8A7050)));
    for(let i=0;i<14;i++) es.add(buildBox(randV(-50,50),-7.5,randV(-15,-70),randV(1.5,4),randV(1,3),randV(1.5,4),0x9A8860));
  },
  desert(es,al,dl){
    al.color.set(0x504030); al.intensity=0.6;
    dl.color.set(0xFFE0A0); dl.intensity=0.8; dl.position.set(0,40,20);
    es.fog = new THREE.Fog(0xD0B880, 100, 320);
    es.add(buildSkyDome('#2A3A50','#7A5030'));
    es.add(buildTerrain(0xC4AC78, 0.4));
    [[-70,-90,20],[60,-80,18]].forEach(([x,z,h])=>es.add(buildMountain(x,z,h,0xA08860,6)));
    for(let i=0;i<8;i++) es.add(buildBox(randV(-60,60),-7.5,randV(-20,-80),randV(1,2.5),randV(0.5,1.5),randV(1,2.5),0xB0906A));
  },
  cave(es,al,dl){
    al.color.set(0x050308); al.intensity=0.35;
    dl.color.set(0xC8A03C); dl.intensity=0.5; dl.position.set(8,18,5);
    es.fog = new THREE.Fog(0x050308, 12, 60);
    es.add(buildSkyDome('#020406','#0A0810'));
    const wc=0x1A1410;
    [[-8,-5,-8,14,22,6],[8,-5,-8,14,22,6],[-5,-5,-18,22,18,8],[0,-5,-24,18,14,6]].forEach(([x,y,z,w,h,d])=>es.add(buildBox(x,y,z,w,h,d,wc)));
    es.add(buildBox(0,-9,-12,14,1,16,0x2A2018));
    const spot = new THREE.PointLight(0xC8A03C, 0.8, 30);
    spot.position.set(3,2,2); es.add(spot);
    for(let i=0;i<20;i++){
      const pl=new THREE.PointLight(0xFFEE88,randV(0.05,0.15),8);
      pl.position.set(randV(-25,25),-6+Math.random()*4,-50-Math.random()*30);
      es.add(pl);
    }
  },
  mountains(es,al,dl){
    al.color.set(0x202835); al.intensity=0.45;
    dl.color.set(0xFFC080); dl.intensity=0.7; dl.position.set(-40,15,10);
    es.fog = new THREE.Fog(0xB0987A, 50, 180);
    es.add(buildSkyDome('#1A2A4A','#6A4020'));
    es.add(buildTerrain(0x907858, 1.2));
    [[-35,-40,40],[-10,-55,55],[25,-45,48],[-50,-60,35],[40,-70,42],[0,-80,60],[-20,-35,28],[15,-30,22]].forEach(([x,z,h])=>es.add(buildMountain(x,z,h,0x6A5840+Math.floor(Math.random()*0x101010),7)));
  },
  ascent(es,al,dl){
    al.color.set(0x050508); al.intensity=0.25;
    dl.color.set(0x8090D0); dl.intensity=0.4; dl.position.set(0,50,0);
    es.fog = new THREE.Fog(0x020408, 150, 400);
    es.add(buildSkyDome('#020308','#050A18'));
    const floor = buildTerrain(0x0A0C14, 0, 400, 4);
    floor.position.y = -45;
    es.add(floor);
    for(let i=0;i<40;i++){
      const pl=new THREE.PointLight(0xFFEEAA,randV(0.06,0.18),10);
      pl.position.set(randV(-80,80),-42,randV(-100,-200));
      es.add(pl);
    }
    const glow=new THREE.PointLight(0x8FA8D8,0.6,80);
    glow.position.set(0,30,0); es.add(glow);
  },
  migration(es,al,dl){
    al.color.set(0x181424); al.intensity=0.3;
    dl.color.set(0xC0A060); dl.intensity=0.45; dl.position.set(-20,10,30);
    es.fog = new THREE.Fog(0x1C2030, 60, 200);
    es.add(buildSkyDome('#040810','#2A3828'));
    es.add(buildTerrain(0x8A7860, 0.6));
    [[-60,-30,25],[-45,-50,20]].forEach(([x,z,h])=>es.add(buildMountain(x,z,h,0x706050,6)));
    es.add(buildPalm(40,-50)); es.add(buildPalm(55,-40));
    for(let i=0;i<6;i++) es.add(buildBox(randV(-40,30),-7.5,randV(-20,-70),randV(1,3),randV(0.5,2),randV(1,3),0x907860));
  },
  madinah(es,al,dl){
    al.color.set(0x607080); al.intensity=0.7;
    dl.color.set(0xFFF0D0); dl.intensity=0.9; dl.position.set(20,50,10);
    es.fog = new THREE.Fog(0xB0C8D0, 100, 300);
    es.add(buildSkyDome('#2A5A8A','#8AB0C0'));
    es.add(buildTerrain(0x6A8450, 0.3));
    [[-20,-30],[-5,-55],[18,-42],[30,-25],[-35,-48],[8,-70],[-15,-65],[25,-60]].forEach(([x,z])=>es.add(buildPalm(x,z)));
    [[0,-7,-60,18,10,14],[20,-7,-70,10,8,10],[-20,-7,-65,12,9,12]].forEach(([x,y,z,w,h,d])=>es.add(buildBox(x,y,z,w,h,d,0xC8B88A)));
    const dome=new THREE.Mesh(new THREE.SphereGeometry(4,8,5,0,Math.PI*2,0,Math.PI/2),makeFlat(0xD0C890));
    dome.position.set(-5,5,-58); es.add(dome);
  },
  battlefield(es,al,dl){
    al.color.set(0x3A3020); al.intensity=0.45;
    dl.color.set(0xFFC060); dl.intensity=1.0; dl.position.set(50,15,-30);
    es.fog = new THREE.Fog(0xC0A860, 70, 220);
    es.add(buildSkyDome('#2A3A4A','#8A6030'));
    es.add(buildTerrain(0xB0A080, 0.5));
    for(let i=0;i<16;i++) es.add(buildBox(randV(-80,80),-7.5,randV(-10,-100),randV(1.5,5),randV(0.8,2.5),randV(1.5,5),0x908060));
    [[-60,-60,18],[50,-70,22]].forEach(([x,z,h])=>es.add(buildMountain(x,z,h,0x7A6848,6)));
  },
  arafah(es,al,dl){
    al.color.set(0x506070); al.intensity=0.7;
    dl.color.set(0xFFF0E0); dl.intensity=1.0; dl.position.set(0,60,30);
    es.fog = new THREE.Fog(0xB0C0C8, 120, 380);
    es.add(buildSkyDome('#1A3A5A','#8AA0C0'));
    es.add(buildTerrain(0xB8B090, 0.2));
    es.add(buildMountain(0,-60,28,0x8A8060,9));
    for(let i=0;i<120;i++) es.add(buildBox(randV(-70,70),-7.2,randV(-15,-90),0.4,0.8,0.4,0xE0D0B0));
  },
  interior(es,al,dl){
    al.color.set(0x201808); al.intensity=0.35;
    dl.color.set(0xC08020); dl.intensity=0.0;
    es.fog = new THREE.Fog(0x100C06, 8, 30);
    es.add(buildSkyDome('#060402','#0C0804'));
    const wc=0x9A8A60, fc=0x7A6040;
    es.add(buildBox(0,-8.5,0,12,0.5,10,fc));
    es.add(buildBox(-6,-4,0,0.5,9,10,wc));
    es.add(buildBox(6,-4,0,0.5,9,10,wc));
    es.add(buildBox(0,-4,-5,12,9,0.5,wc));
    es.add(buildBox(0,-0.5,0,12,0.4,10,0x6A5030));
    es.add(buildBox(0,-8.1,0,8,0.12,6,0x4A3820));
    const lamp=new THREE.PointLight(0xC08020,0.5,14);
    lamp.position.set(2,-6,-2); es.add(lamp);
  }
};

function buildEnvScene(sceneId){
  if(envScene){
    envObjects.forEach(o=>envScene.remove(o));
    envObjects=[];
  } else {
    envScene = new THREE.Scene();
    envAmbient = new THREE.AmbientLight(0x302010, 0.6);
    envDir = new THREE.DirectionalLight(0xFFDDA0, 0.8);
    envDir.position.set(30,20,-10);
    envCam = new THREE.PerspectiveCamera(52, W/H, 0.1, 600);
    envCam.position.set(0, 2, 18);
  }
  envScene.add(envAmbient);
  envScene.add(envDir);
  envObjects.push(envAmbient, envDir);

  const builder = SCENE_BUILDERS[sceneId];
  if(builder){
    builder(envScene, envAmbient, envDir);
    envScene.children.forEach(c=>{ if(!envObjects.includes(c)) envObjects.push(c); });
  }

  if(bgMesh) bgMesh.material.uniforms.uBgAlpha.value = 0.68;
  envActive = true;
}
/* ===== END ENV SCENE ===== */

/* ---------- shader ---------- */
const BG_V = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy,0.0,1.0); }`;
const BG_F = `
precision mediump float;
varying vec2 vUv;
uniform vec3 uTop,uBot,uGlow;
uniform float uTime,uPat,uAsp,uHz,uBgAlpha;
void main(){
  vec3 col = mix(uBot, uTop, pow(vUv.y, 0.85));
  vec2 q = vUv - vec2(0.5,0.55); q.x *= uAsp;
  float r = length(q);
  col += uGlow * exp(-r*2.6) * 0.55;
  float a = atan(q.y,q.x);
  float petal = cos(a*8.0)*0.5+0.5;
  float ring = sin(r*44.0 - uTime*0.12 + petal*2.4);
  float pat = smoothstep(0.86,1.0,ring) * smoothstep(0.70,0.14,r) * smoothstep(0.02,0.13,r);
  float ring2 = sin(r*17.0 + uTime*0.06 - petal*3.1);
  pat += smoothstep(0.92,1.0,ring2) * smoothstep(0.78,0.20,r) * 0.7;
  col += uGlow * pat * uPat * 0.85;
  float hz = smoothstep(0.30,0.16,vUv.y);
  col = mix(col, uBot*0.35, hz*uHz);
  float hl = exp(-abs(vUv.y-0.20)*70.0);
  col += uGlow*hl*uHz*0.5;
  gl_FragColor = vec4(col, uBgAlpha);
}`;

const GL_V = `
attribute vec3 aTarget, aScatter, aRose;
attribute float aRand;
uniform float uTime,uMorph,uRose,uSize,uTurb,uPix,uBloom;
varying float vR;
void main(){
  vec3 p = mix(aScatter, aTarget, uMorph);
  p = mix(p, aRose, uRose);
  float t = uTime + aRand*6.2831;
  float amp = 0.055 + uTurb*1.15;
  p.x += sin(t*0.72 + p.y*0.42)*amp;
  p.y += cos(t*0.58 + p.x*0.36)*amp*0.9;
  p.z += sin(t*0.41 + aRand*11.0)*(0.55 + uTurb*2.2);
  p *= 1.0 + uBloom*0.09;
  vec4 mv = modelViewMatrix * vec4(p,1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize*(0.55 + aRand*0.85)*(260.0/max(-mv.z,1.0))*uPix*(1.0+uBloom*0.7);
  vR = aRand;
}`;

const GL_F = `
precision mediump float;
uniform vec3 uColA,uColB;
uniform float uOpacity,uTime,uBloom;
varying float vR;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = dot(d,d);
  if(r > 0.25) discard;
  float a = pow(1.0 - r*4.0, 2.1);
  float tw = 0.62 + 0.38*sin(uTime*1.7 + vR*37.0);
  vec3 c = mix(uColA, uColB, vR);
  c += vec3(uBloom*0.5);
  gl_FragColor = vec4(c, a*uOpacity*tw);
}`;

const ST_V = `
attribute float aR;
uniform float uTime,uPix,uAmt;
varying float vA;
void main(){
  vec4 mv = modelViewMatrix*vec4(position,1.0);
  gl_Position = projectionMatrix*mv;
  float tw = 0.35+0.65*sin(uTime*0.7 + aR*54.0);
  vA = tw*uAmt;
  gl_PointSize = (0.7+aR*2.1)*uPix*(300.0/max(-mv.z,1.0));
}`;
const ST_F = `
precision mediump float; varying float vA;
uniform vec3 uCol;
void main(){
  vec2 d=gl_PointCoord-0.5; float r=dot(d,d);
  if(r>0.25) discard;
  gl_FragColor = vec4(uCol, pow(1.0-r*4.0,2.0)*vA*0.9);
}`;

/* ---------- pengambilan bentuk kaligrafi ---------- */
function sampleWord(word, fontStack){
  const w = 1024, h = 384;
  const c = document.createElement('canvas'); c.width=w; c.height=h;
  const x = c.getContext('2d', {willReadFrequently:true});
  x.fillStyle='#000'; x.fillRect(0,0,w,h);
  x.fillStyle='#fff'; x.textAlign='center'; x.textBaseline='middle';
  try{ x.direction='rtl'; }catch(e){}
  x.font = '210px ' + fontStack;
  x.fillText(word, w/2, h/2 + 12);
  let d;
  try{ d = x.getImageData(0,0,w,h).data; }catch(e){ return null; }
  const pts=[]; const step=2;
  for(let y=0;y<h;y+=step) for(let px=0;px<w;px+=step){
    if(d[(y*w+px)*4] > 118) pts.push([px/w - 0.5, 0.5 - y/h]);
  }
  return pts.length > 400 ? pts : null;
}

/* cadangan: rozet 8 lipat bila font Arab gagal dimuat */
function fallbackShape(){
  const pts=[];
  for(let i=0;i<3000;i++){
    const a = Math.random()*Math.PI*2;
    const k = 0.5 + 0.5*Math.cos(a*8);
    const r = (0.16 + 0.20*k) * (0.85 + Math.random()*0.18);
    pts.push([Math.cos(a)*r*1.9, Math.sin(a)*r]);
  }
  return pts;
}

function rosettePoint(i, n){
  const a = (i/n)*Math.PI*2*7.0;
  const k = 0.5 + 0.5*Math.cos(a*8.0);
  const r = 5.0 + 5.5*k + (i%17)/17*1.4;
  return [Math.cos(a)*r*1.35, Math.sin(a)*r*0.78, (Math.random()-0.5)*3];
}

/* ---------- init ---------- */
function init(){
  renderer = new THREE.WebGLRenderer({canvas:cv, antialias:!IS_SMALL, alpha:false, powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio||1, IS_SMALL?1.6:2));
  renderer.setSize(W,H,false);
  renderer.autoClear = false;

  bgScene = new THREE.Scene();
  bgCam = new THREE.OrthographicCamera(-1,1,1,-1,0,1);
  bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2,2), new THREE.ShaderMaterial({
    vertexShader:BG_V, fragmentShader:BG_F, depthTest:false, depthWrite:false,
    uniforms:{
      uTop:{value:cur.top.clone()}, uBot:{value:cur.bot.clone()}, uGlow:{value:cur.glow.clone()},
      uTime:{value:0}, uPat:{value:.3}, uAsp:{value:W/H}, uHz:{value:.1}, uBgAlpha:{value:1.0}
    },
    transparent:true
  }));
  bgScene.add(bgMesh);

  scene = new THREE.Scene();
  cam = new THREE.PerspectiveCamera(48, W/H, 0.1, 900);
  cam.position.set(0,0, IS_SMALL ? 34 : 27);

  /* bintang */
  const sn = IS_SMALL ? 900 : 2000;
  const sp = new Float32Array(sn*3), sr = new Float32Array(sn);
  for(let i=0;i<sn;i++){
    const R = 130 + Math.random()*260;
    const th = Math.random()*Math.PI*2, ph = Math.acos(2*Math.random()-1);
    sp[i*3]   = R*Math.sin(ph)*Math.cos(th);
    sp[i*3+1] = R*Math.sin(ph)*Math.sin(th)*0.75;
    sp[i*3+2] = R*Math.cos(ph) - 120;
    sr[i] = Math.random();
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(sp,3));
  sg.setAttribute('aR', new THREE.BufferAttribute(sr,1));
  stars = new THREE.Points(sg, new THREE.ShaderMaterial({
    vertexShader:ST_V, fragmentShader:ST_F, transparent:true, depthWrite:false,
    blending:THREE.AdditiveBlending,
    uniforms:{uTime:{value:0},uPix:{value:renderer.getPixelRatio()},uAmt:{value:1},uCol:{value:new THREE.Color('#dbe6ff')}}
  }));
  scene.add(stars);

  /* debu / pasir */
  const dn = IS_SMALL ? 500 : 1100;
  const dp = new Float32Array(dn*3), dr = new Float32Array(dn);
  for(let i=0;i<dn;i++){
    dp[i*3]   = (Math.random()-0.5)*70;
    dp[i*3+1] = (Math.random()-0.5)*44;
    dp[i*3+2] = Math.random()*30 - 2;
    dr[i] = Math.random();
  }
  const dg = new THREE.BufferGeometry();
  dg.setAttribute('position', new THREE.BufferAttribute(dp,3));
  dg.setAttribute('aR', new THREE.BufferAttribute(dr,1));
  dust = new THREE.Points(dg, new THREE.ShaderMaterial({
    vertexShader:ST_V, fragmentShader:ST_F, transparent:true, depthWrite:false,
    blending:THREE.AdditiveBlending,
    uniforms:{uTime:{value:0},uPix:{value:renderer.getPixelRatio()},uAmt:{value:.5},uCol:{value:new THREE.Color('#e8d9b4')}}
  }));
  scene.add(dust);

  buildGlyph();
  addEventListener('resize', resize);
  addEventListener('pointermove', e=>{
    pointer.tx = (e.clientX/W - .5)*2; pointer.ty = (e.clientY/H - .5)*2;
  }, {passive:true});
  loop();
}

function buildGlyph(){
  let pts = sampleWord('مُحَمَّد', '"Amiri","Traditional Arabic","Scheherazade New","Noto Naskh Arabic","Geeza Pro",serif');
  if(!pts) pts = fallbackShape();

  const SX = IS_SMALL ? 30 : 34, SY = IS_SMALL ? 30 : 34;
  const pos = new Float32Array(N*3), tar = new Float32Array(N*3),
        sca = new Float32Array(N*3), ros = new Float32Array(N*3), rnd = new Float32Array(N);

  for(let i=0;i<N;i++){
    const p = pts[(Math.random()*pts.length)|0];
    const jx = (Math.random()-0.5)*0.010, jy = (Math.random()-0.5)*0.010;
    tar[i*3]   = (p[0]+jx)*SX;
    tar[i*3+1] = (p[1]+jy)*SY*0.62;
    tar[i*3+2] = (Math.random()-0.5)*1.7;

    const R = 16 + Math.random()*40, a = Math.random()*Math.PI*2, b = Math.acos(2*Math.random()-1);
    sca[i*3]   = R*Math.sin(b)*Math.cos(a)*1.3;
    sca[i*3+1] = R*Math.sin(b)*Math.sin(a)*0.85;
    sca[i*3+2] = R*Math.cos(b)*0.5 - 10;

    const rp = rosettePoint(i,N);
    ros[i*3]=rp[0]; ros[i*3+1]=rp[1]; ros[i*3+2]=rp[2];

    pos[i*3]=sca[i*3]; pos[i*3+1]=sca[i*3+1]; pos[i*3+2]=sca[i*3+2];
    rnd[i]=Math.random();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos,3));
  g.setAttribute('aTarget', new THREE.BufferAttribute(tar,3));
  g.setAttribute('aScatter', new THREE.BufferAttribute(sca,3));
  g.setAttribute('aRose', new THREE.BufferAttribute(ros,3));
  g.setAttribute('aRand', new THREE.BufferAttribute(rnd,1));

  glyph = new THREE.Points(g, new THREE.ShaderMaterial({
    vertexShader:GL_V, fragmentShader:GL_F, transparent:true, depthWrite:false,
    blending:THREE.AdditiveBlending,
    uniforms:{
      uTime:{value:0}, uMorph:{value:0}, uRose:{value:0}, uSize:{value:IS_SMALL?2.5:2.2},
      uTurb:{value:0}, uPix:{value:renderer.getPixelRatio()}, uBloom:{value:0},
      uColA:{value:cur.colA.clone()}, uColB:{value:cur.colB.clone()}, uOpacity:{value:0.9}
    }
  }));
  scene.add(glyph);
}

function resize(){
  W=innerWidth; H=innerHeight;
  renderer.setSize(W,H,false);
  cam.aspect=W/H; cam.updateProjectionMatrix();
  if(envCam){ envCam.aspect=W/H; envCam.updateProjectionMatrix(); }
  bgMesh.material.uniforms.uAsp.value = W/H;
}

function loop(){
  requestAnimationFrame(loop);
  const now = performance.now();
  const dt = Math.min((now-clock.last)/1000, .05); clock.last = now;
  clock.t += dt;
  const t = clock.t;
  const k = 1 - Math.pow(0.001, dt);   // faktor lerp stabil

  cur.top.lerp(tgt.top,k); cur.bot.lerp(tgt.bot,k); cur.glow.lerp(tgt.glow,k);
  cur.colA.lerp(tgt.colA,k); cur.colB.lerp(tgt.colB,k);
  ['stars','turb','pat','dust','hz','drift'].forEach(p => cur[p] += (tgt[p]-cur[p])*k);
  morph += (morphT - morph) * (1 - Math.pow(0.004, dt));
  rose  += (roseT  - rose ) * (1 - Math.pow(0.02,  dt));
  bloom += (0 - bloom) * (1 - Math.pow(0.02, dt));

  const bu = bgMesh.material.uniforms;
  bu.uTop.value.copy(cur.top); bu.uBot.value.copy(cur.bot); bu.uGlow.value.copy(cur.glow);
  bu.uTime.value = t; bu.uPat.value = cur.pat; bu.uHz.value = cur.hz;

  const gu = glyph.material.uniforms;
  gu.uTime.value = t; gu.uMorph.value = morph; gu.uRose.value = rose;
  gu.uTurb.value = cur.turb; gu.uBloom.value = bloom;
  gu.uColA.value.copy(cur.colA); gu.uColB.value.copy(cur.colB);

  stars.material.uniforms.uTime.value = t;
  stars.material.uniforms.uAmt.value = cur.stars;
  stars.rotation.y = t * 0.008 * cur.drift;
  stars.rotation.x = Math.sin(t*0.03)*0.05;

  dust.material.uniforms.uTime.value = t;
  dust.material.uniforms.uAmt.value = cur.dust;
  dust.rotation.z = t * 0.012;
  dust.position.x = Math.sin(t*0.09)*2.4;

  if(!RM){
    pointer.x += (pointer.tx - pointer.x)*0.045;
    pointer.y += (pointer.ty - pointer.y)*0.045;
  }
  cam.position.x = pointer.x*1.9 + Math.sin(t*0.16)*0.7;
  cam.position.y = -pointer.y*1.2 + Math.cos(t*0.13)*0.5 + 1.2;
  cam.lookAt(0, 0.6, 0);

  renderer.clear();
  if(envActive && envScene && envCam){
    envCam.position.x = Math.sin(t*0.04)*1.8 + pointer.x*0.6;
    envCam.position.y = 2 + Math.cos(t*0.03)*0.5 - pointer.y*0.4;
    envCam.lookAt(0, 0, -20);
    renderer.render(envScene, envCam);
  }
  renderer.render(bgScene, bgCam);
  renderer.render(scene, cam);
}

/* ---------- API publik ---------- */
return {
  start(){
    if(document.fonts && document.fonts.ready){
      document.fonts.ready.then(()=>{ init(); setTimeout(()=>{ morphT = 1; }, 260); });
    } else { init(); morphT = 1; }
  },
  setScene(chapterIndex){
    const id = CHAPTER_SCENES[chapterIndex] || 'mecca';
    if(!renderer){ setTimeout(()=>this.setScene(chapterIndex), 400); return; }
    buildEnvScene(id);
  },
  mood(id){
    const m = MOODS[id] || MOODS[0];
    tgt.top.set(m.top); tgt.bot.set(m.bot); tgt.glow.set(m.glow);
    tgt.colA.set(m.colA); tgt.colB.set(m.colB);
    tgt.stars=m.stars; tgt.turb=m.turb; tgt.pat=m.pat; tgt.dust=m.dust; tgt.hz=m.hz;
    tgt.drift = m.drift || 1;
  },
  /* kaligrafi buyar lalu terbentuk lagi — dipakai saat ganti bab */
  reform(){ morphT = 0; setTimeout(()=>{ morphT = 1; }, 620); },
  /* saat ayat dibacakan: partikel mekar jadi rozet iluminasi */
  rosette(on){ roseT = on ? 1 : 0; },
  pulse(v){ bloom = Math.max(bloom, v===undefined?0.85:v); },
  /* guncangan halus untuk bab-bab berat */
  strain(v){ tgt.turb = v; }
};
})();
