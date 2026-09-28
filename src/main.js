import * as THREE from 'three'
import './style.css'
import { BLOCKS, BLOCK_INDEX, TOOLS, MOB_TYPES, ITEMS, CRAFTABLES } from './data.js'
import { BLOCK_MATERIALS, geometryForBlock } from './textures.js'
import { createWorld, terrainHeight, biomeAt, FAR_LANDS_DISTANCE } from './world.js'
import { createMobSystem } from './mobs.js'
import { createEffects } from './effects.js'
import { createAdvancedSystems } from './systems.js'

function sayProxy(s){ if(typeof window.__julianSay==='function')window.__julianSay(s) }
const app=document.querySelector('#app'),scene=new THREE.Scene();scene.background=new THREE.Color(0x86c9ff);scene.fog=new THREE.Fog(0x86c9ff,50,145)
const camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,.1,500);camera.position.set(0,14,18);camera.rotation.order='YXZ'
const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(innerWidth,innerHeight);renderer.shadowMap.enabled=true;renderer.outputColorSpace=THREE.SRGBColorSpace;app.appendChild(renderer.domElement);scene.add(camera)
const hemi=new THREE.HemisphereLight(0xffffff,0x465568,1.45);scene.add(hemi);const sun=new THREE.DirectionalLight(0xfff0cb,2.1);sun.position.set(45,65,28);sun.castShadow=true;scene.add(sun)

// ---------- CIELO: nubes y disco de sol/luna ----------
function glowTexture(hex){const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d');const grd=g.createRadialGradient(32,32,2,32,32,30);grd.addColorStop(0,hex);grd.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=grd;g.fillRect(0,0,64,64);return new THREE.CanvasTexture(c)}
function cloudTexture(){const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');let s=4242
  for(let i=0;i<40;i++){s=(s*1664525+1013904223)>>>0;const x=s%128,y=(s>>>8)%128,w=10+(s>>>16)%26,h=6+(s>>>20)%14;g.fillStyle='rgba(255,255,255,.88)';g.fillRect(x,y,w,h)}
  const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(8,8);t.magFilter=THREE.NearestFilter;return t}
const cloudMat=new THREE.MeshBasicMaterial({map:cloudTexture(),transparent:true,depthWrite:false,side:THREE.DoubleSide,opacity:.9})
const clouds=new THREE.Mesh(new THREE.PlaneGeometry(700,700),cloudMat);clouds.rotation.x=-Math.PI/2;clouds.position.y=95;scene.add(clouds)
const sunSprite=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture('#fff6d0'),transparent:true,depthWrite:false}));sunSprite.scale.set(34,34,1);scene.add(sunSprite)
const moonSprite=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture('#dfe8f2'),transparent:true,depthWrite:false,opacity:.85}));moonSprite.scale.set(22,22,1);scene.add(moonSprite)

const world=createWorld(scene,BLOCK_MATERIALS)
const mobSystem=createMobSystem(scene,(x,z)=>world.heightAt(x,z))
const effects=createEffects(scene)

let gameMode='normal'
const marvel={day:1,elapsed:0,kills:0,baseLevel:0,basePos:null}
let shieldTimer=0
const paleo={fossils:0,dna:0,eggs:0,labPlaced:false}
const rescueStats={dinos:0,wolves:0,humans:0}
const survival={
  hunger:20,maxHunger:20,exhaustion:0,days:1,elapsed:0,
  jumpVelocity:0,grounded:false,started:false,
  milestones:{wood:false,stone:false,iron:false,night:false}
}

// ---------- UI ----------
const hud=document.createElement('div');hud.id='hud';document.body.appendChild(hud)
const cross=document.createElement('div');cross.id='crosshair';cross.textContent='+';document.body.appendChild(cross)
const toast=document.createElement('div');toast.id='toast';document.body.appendChild(toast);let toastTimer
const say=s=>{toast.textContent=s;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),1700)};window.__julianSay=say
const menu=document.createElement('div');menu.id='menu';menu.innerHTML=`<div id="panel"><h1>JULIAN BLOCKS · V18</h1><p class="subtitle">JURASSIC WORLD & MARVEL ZOMBIES EDITION</p><div class="mode-choice"><button id="normalMode" class="mode-card"><b>🌎 MODO NORMAL</b><span>Construcción, templos ancestrales, redstone, TNT, portales y minería.</span></button><button id="survivalMode" class="mode-card survival"><b>⛏️ SUPERVIVENCIA</b><span>Supervivencia clásica: hambre, crafteo, salto, horno, noches peligrosas.</span></button><button id="dinoMode" class="mode-card dino"><b>🦖 JURASSIC WORLD REBORN</b><span>Puerta de Jurassic Park, recinto T-Rex, Centro de Visitantes, Espinosaurio, rifle tranquilizante y clonación.</span></button><button id="marvelMode" class="mode-card marvel"><b>🧟 MARVEL ZOMBIES · ADD-ON</b><span>Torre de los Vengadores, Sanctum Sanctorum, Mjolnir, Zombie Thor, Venom y Bruja Escarlata.</span></button></div><p id="modeStatus">Seleccionado: Modo normal</p><div class="controls-grid"><span><b>WASD</b> mover</span><span><b>Espacio / Shift</b> subir / bajar (creativo)</span><span><b>Espacio</b> saltar (Supervivencia)</span><span><b>Clic Izq</b> golpear / romper / TNT</span><span><b>Clic Der</b> usar / colocar / interactuar</span><span><b>E</b> inventario / mochila</span><span><b>C</b> crafteo</span><span><b>M</b> criaturas</span><span><b>Tab</b> mapa</span><span><b>K / L</b> guardar / cargar</span><span><b>T</b> clima</span></div><div class="menu-buttons"><button id="playBtn">JUGAR</button><button id="saveBtn">GUARDAR</button><button id="loadBtn">CARGAR</button><button id="farBtn">TIERRAS LEJANAS</button></div></div>`;document.body.appendChild(menu)
const hotbar=document.createElement('div');hotbar.id='hotbar';document.body.appendChild(hotbar)
const modal=document.createElement('div');modal.id='modal';modal.className='hidden';document.body.appendChild(modal)
const mapCanvas=document.createElement('canvas');mapCanvas.id='minimap';mapCanvas.width=180;mapCanvas.height=180;document.body.appendChild(mapCanvas)
let uiOpen=false,selectedBlock=0,selectedTool=0,selectedItem=0,equippedKind='none'

// ---------- VIDA DEL JUGADOR Y COMBATE ----------
const dmgFlash=document.createElement('div');dmgFlash.id='dmgFlash';document.body.appendChild(dmgFlash)
const SPAWN_POINT=new THREE.Vector3(0,14,18)
let playerHP=20,playerMaxHP=20,hitCooldown=0,regenTimer=0,magmaTimer=0
let toolDurability={}  // trackea desgaste por herramienta
let xp=0,xpLevel=0     // sistema de experiencia (kills, crafteo, exploración)
window.__julianCameraPos=camera.position

// XP: ganas niveles que mejoran regeneración, velocidad y daño
function gainXP(amount,reason=''){
  xp+=amount
  const nextLevel=xpLevel*xpLevel*10+50
  if(xp>=nextLevel){ xp-=nextLevel; xpLevel++; say(`✨ Nivel ${xpLevel}! +regeneración`) }
}

function damagePlayer(n, source='mob'){
  if(playerHP<=0)return
  // Escudo siempre absorbe completamente (no solo parcialmente)
  if(shieldTimer>0){
    shieldTimer=Math.max(0,shieldTimer-0.8)  // Escudo se desgasta un poco con cada golpe
    say('🛡️ ¡Escudo absorbió el daño!');return
  }
  // Reducción por nivel XP (máx 30% a nivel 10)
  const reduction=Math.min(0.30, xpLevel*0.03)
  const finalDmg=Math.max(1, Math.round(n*(1-reduction)))
  playerHP=Math.max(0,playerHP-finalDmg)
  hitCooldown=3  // reducido de 4 → 3 para que el combate sea más fluido
  regenTimer=0
  dmgFlash.classList.add('show');setTimeout(()=>dmgFlash.classList.remove('show'),160)
  effects.sound('hit')
  if(playerHP<=0)respawnPlayer()
}

function respawnPlayer(){
  if(world.getDimension()!=='overworld'){world.setDimension('overworld');mobSystem.setHeightProvider((x,z)=>world.heightAt(x,z));scene.background.set(0x86c9ff);scene.fog.color.set(0x86c9ff)}
  camera.position.copy(SPAWN_POINT)
  // Penalización proporcional al modo (más peligroso = más pérdida)
  if(gameMode==='marvel')      playerHP=Math.max(4, Math.floor(playerMaxHP*0.4))
  else if(gameMode==='dino')   playerHP=Math.max(6, Math.floor(playerMaxHP*0.5))
  else if(gameMode==='survival')playerHP=Math.max(8, Math.floor(playerMaxHP*0.6))
  else                          playerHP=playerMaxHP   // normal: reapareces full
  hitCooldown=0
  world.updateChunks(camera.position)
  say('💀 Derrotado · reapareces en el inicio')
}

function updateCombat(dt){
  hitCooldown=Math.max(0,hitCooldown-dt)
  for(const m of mobSystem.mobs){
    const d=MOB_TYPES[m.type]
    m.attackTimer=(m.attackTimer??0)-dt
    const hostile=(d.kind==='hostile'||(d.dinosaur&&d.carnivore))&&!m.tamed&&!m.friendOfPlayer&&!m.captive
    if(!hostile)continue
    if(m.group.position.distanceTo(camera.position)<1.95&&m.attackTimer<=0){
      // Daño diferenciado: superZombies y dinos grandes hacen más daño
      let baseDmg=d.tall?4:d.wide?3:2
      if(d.superZombie)baseDmg=Math.round(baseDmg*1.5)
      if(d.id==='mzThanos'||d.id==='mzHulk')baseDmg=6
      if(d.id==='dinoRex'||d.id==='dinoSpino')baseDmg=5
      // Cooldown de ataque por tipo de mob (rápidos atacan más seguido)
      const atkRate=d.speed>1.4?0.85:d.speed>1.2?1.0:1.2
      damagePlayer(baseDmg,'mob')
      m.attackTimer=atkRate
    }
  }
  // Regeneración graduada: más rápido si tienes más hambre/salud baja
  const canRegen=gameMode!=='survival'||survival.hunger>=14  // bajado de 17→14
  if(canRegen&&hitCooldown<=0&&playerHP<playerMaxHP){
    regenTimer+=dt
    // A nivel XP más alto se regenera más rápido
    const regenRate=2.5-Math.min(1.5,xpLevel*0.15)  // base 2.5s, mínimo 1.0s
    if(regenTimer>regenRate){
      regenTimer=0
      const regenAmt=playerHP<playerMaxHP*0.3?2:1  // regen doble por debajo del 30%
      playerHP=Math.min(playerMaxHP,playerHP+regenAmt)
      if(gameMode==='survival')survival.hunger=Math.max(0,survival.hunger-0.3)
    }
  }
}

function healthBarHTML(){
  const hearts=Math.round(playerHP/2),full='❤'.repeat(hearts),empty='🖤'.repeat(10-hearts)
  return `<span class="hearts">${full}${empty}</span>`
}

function hungerBarHTML(){
  if(gameMode!=='survival')return ''
  const drumsticks=Math.round(survival.hunger/2),full='🍗'.repeat(drumsticks),empty='🦴'.repeat(10-drumsticks)
  return ` · <span title="Hambre">${full}${empty}</span>`
}

function eatFood(){
  const item=ITEMS[selectedItem]
  if(!item)return
  effects.sound('eat')
  if(item.name==='Manzana dorada'){
    playerHP=playerMaxHP
    if(gameMode==='survival')survival.hunger=survival.maxHunger
    shieldTimer=Math.max(shieldTimer,35)
    consumeSelected(1)
    say('🍏 ¡Manzana dorada! Vida al máximo y escudo activado')
    return
  }
  if(gameMode==='survival'){
    const foodValue=/Carne|Pan/.test(item.name)?7:/Manzana|Papa|Melón/.test(item.name)?5:4
    survival.hunger=Math.min(survival.maxHunger,survival.hunger+foodValue)
    playerHP=Math.min(playerMaxHP,playerHP+1)
    consumeSelected(1)
    say(`Comiste ${item.name} · hambre +${foodValue}`)
    return
  }
  playerHP=Math.min(playerMaxHP,playerHP+4);hitCooldown=Math.min(hitCooldown,1);regenTimer=0
  consumeSelected(1)
  say(`Comiste ${item.name} · +4 vida`)
}

// ---------- DROPPED ITEMS ----------
const droppedItems=[]
function spawnBlockDrop(position,blockIndex){
  const mesh=new THREE.Mesh(geometryForBlock(blockIndex),BLOCK_MATERIALS[blockIndex]??BLOCK_MATERIALS[0])
  mesh.scale.setScalar(.28)
  mesh.position.copy(position);mesh.position.y+=.3
  mesh.rotation.set(Math.random(),Math.random(),Math.random())
  scene.add(mesh)
  droppedItems.push({mesh,blockIndex,startY:mesh.position.y,time:Math.random()*Math.PI*2})
}

function updateDroppedItems(dt){
  for(let i=droppedItems.length-1;i>=0;i--){
    const drop=droppedItems[i]
    drop.time+=dt*3
    drop.mesh.rotation.y+=dt*2
    drop.mesh.position.y=drop.startY+Math.sin(drop.time)*.08
    if(camera.position.distanceTo(drop.mesh.position)<1.85){
      if(addToHotbar({kind:'block',index:drop.blockIndex},1)){
        effects.sound('pickup');scene.remove(drop.mesh);droppedItems.splice(i,1)
      }
    }
  }
}

const systems=createAdvancedSystems(world,mobSystem,BLOCKS,BLOCK_INDEX,BLOCK_MATERIALS,sayProxy,effects,spawnBlockDrop,damagePlayer)

function nearestMobInFront(hit){
  if(!hit)return null
  return hit.object?.userData?.mob??mobSystem.mobs.find(m=>m.group===hit.object||m.group.children.includes(hit.object))??null
}

function useHeldItem(hit){
  if(equippedKind!=='item')return false
  const item=ITEMS[selectedItem]
  if(!item)return false
  if(item.category==='Comida'){eatFood();return true}
  const name=item.name
  if(name==='Brújula'){
    const dx=-camera.position.x,dz=-camera.position.z,dir=Math.abs(dx)>Math.abs(dz)?(dx>0?'oeste':'este'):(dz>0?'sur':'norte')
    say(`La brújula apunta al inicio: ${dir} · distancia ${Math.round(Math.hypot(dx,dz))}`);return true
  }
  if(name==='Reloj'){say(`Hora del mundo: ${String(Math.floor(worldTime*24)).padStart(2,'0')}:00`);return true}
  if(name==='Mapa vacío'){openMap();return true}
  if(name==='Perla extraña'){
    const f=new THREE.Vector3();camera.getWorldDirection(f);camera.position.addScaledVector(f.normalize(),16);consumeSelected(1);say('Teletransporte corto');return true
  }
  if(name==='Polvo brillante'){effects.setWeather('clear');playerHP=Math.min(playerMaxHP,playerHP+2);consumeSelected(1);say('El cielo se despejó y recuperaste energía');return true}
  if(name==='Pólvora'){
    const pos=camera.position.clone();let n=0
    for(const m of [...mobSystem.mobs])if(m.group.position.distanceTo(pos)<5){mobSystem.hit(m,7,pos);n++}
    consumeSelected(1);say(`Explosión de pólvora · alcanzó ${n} criaturas`);return true
  }
  if(name==='Bola de gel'){camera.position.y+=6;consumeSelected(1);effects.bounceEffect(camera.position);say('¡Rebote de gel!');return true}
  if(name==='Libro'){
    openModal(`${titleBar('Guía de Jurassic World & Marvel Zombies')}<p><b>Nuevas funciones añadidas:</b></p><ul><li><b>Rifle tranquilizante:</b> Duerme y domestica dinosaurios carnívoros.</li><li><b>Rastreador jurásico:</b> Localiza dinosaurios en 90 bloques.</li><li><b>Mjolnir:</b> Invoca tormentas eléctricas contra los zombis.</li><li><b>Arco de Hawkeye:</b> Dispara flechas con detonación TNT.</li><li><b>Guantelete Repulsor:</b> Rayos de choque propulsores.</li><li><b>Estructuras:</b> Puerta de Jurassic Park, Recinto T-Rex, Torre Vengadores y Sanctum Sanctorum.</li></ul>`);wireClose();return true
  }
  if(item.category==='Paleontología'){
    if(gameMode!=='dino'){say('Este objeto se usa en Modo Dinosaurios');return true}
    if(name==='Fósil sin limpiar'){paleo.fossils++;consumeSelected(1);say(`Añadiste un fósil al laboratorio · ${paleo.fossils}`);return true}
    if(name==='ADN de dinosaurio'){paleo.dna=Math.min(100,paleo.dna+50);consumeSelected(1);say(`ADN: ${paleo.dna}%`);return true}
    if(name==='Jeringa de ADN puro'){paleo.dna=100;paleo.eggs++;consumeSelected(1);say('💉 ¡Jeringa de ADN 100%! Huevo listo para eclosionar');return true}
    say('Componente paleontológico: úsalo con el Analizador o la Incubadora');return true
  }
  if(item.marvelItem||item.category==='Marvel Zombies'){
    if(gameMode!=='marvel'){say('Este objeto solo funciona en Marvel Zombies');return true}
    const mob=nearestMobInFront(hit)
    if(name==='Vendaje'){playerHP=Math.min(playerMaxHP,playerHP+6);consumeSelected(1);say('Vendaje usado · +6 vida');return true}
    if(name==='Botiquín'){playerHP=playerMaxHP;consumeSelected(1);say('Vida restaurada');return true}
    if(name==='Suero de Súper Soldado'){playerHP=playerMaxHP;shieldTimer=45;consumeSelected(1);effects.enchantEffect(camera.position);say('⭐ ¡Suero Súper Soldado! Fuerza y velocidad mejoradas');return true}
    if(name==='Simbionte Negro puro'){
      playerHP=playerMaxHP;shieldTimer=50;consumeSelected(1)
      effects.symbioteBurstEffect(camera.position)
      say('🖤 ¡Simbionte fusionado! Fuerza sobrehumana, regeneración y armadura activa')
      return true
    }
    if(name==='Lanzatelarañas Simbiótico'){
      if(mob){
        effects.symbioteWebEffect(camera.position,mob.group.position)
        mob.webbed=8
        mobSystem.hit(mob,14,camera.position)
        const towards=camera.position.clone().sub(mob.group.position).setY(0).normalize()
        mob.group.position.addScaledVector(towards,3.5)
        consumeSelected(1)
        say('🕸️🖤 ¡Telaraña de simbionte disparada! Objetivo inmovilizado y atraído')
      }else{
        const f=new THREE.Vector3();camera.getWorldDirection(f)
        const targetPos=camera.position.clone().addScaledVector(f,20)
        effects.symbioteWebEffect(camera.position,targetPos)
        camera.position.addScaledVector(f.normalize(),15)
        consumeSelected(1)
        say('🕸️ ¡Balanceo arácnido con telaraña simbiótica!')
      }
      return true
    }
    if(name==='Punto de refugio'){
      if(!hit||!world.blocks.includes(hit.object)){say('Apunta al suelo para colocar el refugio');return true}
      marvel.basePos=hit.object.position.clone();marvel.baseLevel=Math.max(1,marvel.baseLevel);consumeSelected(1);say('Refugio establecido · mejora derrotando zombis');return true
    }
    if(name==='Núcleo repulsor'){if(mob){mobSystem.hit(mob,10,camera.position);mob.group.position.addScaledVector(mob.group.position.clone().sub(camera.position).setY(0).normalize(),3);say('Pulso repulsor')}else say('Apunta a una criatura');return true}
    if(name==='Escudo del capitán'){shieldTimer=15;say('Escudo activo durante 15 s');return true}
    if(name==='Lanzatelarañas'){if(mob){mob.webbed=6;say('Objetivo inmovilizado')}else say('Apunta a una criatura');return true}
    if(name==='Puño gamma'){let n=0;for(const m of [...mobSystem.mobs])if(m.group.position.distanceTo(camera.position)<6){mobSystem.hit(m,14,camera.position);n++}say(`Golpe gamma · ${n} objetivos`);return true}
    if(name==='Sello místico'){const f=new THREE.Vector3();camera.getWorldDirection(f);camera.position.addScaledVector(f.normalize(),24);say('Portal corto abierto');return true}
    if(name==='Guantelete del infinito'){let n=0;for(const m of [...mobSystem.mobs])if(MOB_TYPES[m.type].marvelZombie&&m.group.position.distanceTo(camera.position)<28&&Math.random()<.5){mobSystem.removeMob(m);n++}say(`Pulso cósmico · desaparecieron ${n} zombis`);return true}
  }
  say(`${name}: material de crafteo · pulsa C para ver recetas`)
  return true
}

const hotbarSlots=Array(9).fill(null)
let selectedSlot=0

function closeModal(){uiOpen=false;modal.className='hidden';modal.innerHTML=''}
function openModal(html,cls=''){uiOpen=true;if(document.pointerLockElement)document.exitPointerLock();modal.innerHTML=`<div class="big-panel ${cls}">${html}</div>`;modal.className=''}

function sameItem(a,b){return !!a&&!!b&&a.kind===b.kind&&a.index===b.index}

function equipSelectedSlot(){
  const slot=hotbarSlots[selectedSlot]
  if(!slot){equippedKind='none';updateHotbar();updateHand();return}
  equippedKind=slot.kind
  if(slot.kind==='block')selectedBlock=slot.index
  else if(slot.kind==='tool')selectedTool=slot.index
  else if(slot.kind==='item'||slot.kind==='egg')selectedItem=slot.index
  updateHotbar();updateHand()
}

function addToHotbar(entry,amount=1){
  if(entry.kind!=='tool'){
    for(let i=0;i<hotbarSlots.length;i++){
      const slot=hotbarSlots[i]
      if(slot&&sameItem(slot,entry)&&slot.count<64){
        slot.count=Math.min(64,slot.count+amount)
        selectedSlot=i;equipSelectedSlot();return true
      }
    }
  }
  const empty=hotbarSlots.findIndex(s=>!s)
  if(empty>=0){
    hotbarSlots[empty]={...entry,count:entry.kind==='tool'?1:amount}
    selectedSlot=empty;equipSelectedSlot();return true
  }
  say('Barra llena')
  return false
}

function countInHotbar(ref){
  return hotbarSlots.reduce((acc,s)=>{
    if(!s)return acc
    if(ref.kind==='block'&&s.kind==='block'&&s.index===ref.index)return acc+s.count
    if(ref.kind==='tool'&&s.kind==='tool'&&s.index===ref.index)return acc+s.count
    if(ref.kind==='item'&&s.kind==='item'&&s.index===ref.index)return acc+s.count
    return acc
  },0)
}

function consumeFromHotbar(ref,amount=1){
  let need=amount
  for(let i=0;i<hotbarSlots.length;i++){
    const s=hotbarSlots[i]
    if(!s)continue
    const match=(ref.kind==='block'&&s.kind==='block'&&s.index===ref.index)||
                (ref.kind==='tool'&&s.kind==='tool'&&s.index===ref.index)||
                (ref.kind==='item'&&s.kind==='item'&&s.index===ref.index)
    if(match){
      const take=Math.min(s.count,need)
      s.count-=take;need-=take
      if(s.count<=0)hotbarSlots[i]=null
      if(need<=0)break
    }
  }
  equipSelectedSlot()
  return need===0
}

function consumeSelected(amount=1){
  const s=hotbarSlots[selectedSlot]
  if(!s)return
  s.count-=amount
  if(s.count<=0)hotbarSlots[selectedSlot]=null
  equipSelectedSlot()
}

function updateHotbar(){
  hotbar.innerHTML=hotbarSlots.map((s,i)=>{
    const active=i===selectedSlot?'selected':''
    if(!s)return `<div class="slot ${active}"><small>${i+1}</small></div>`
    if(s.kind==='block'){
      const b=BLOCKS[s.index]
      return `<div class="slot ${active}"><span class="swatch" style="background:${b.sw}"></span><b>■</b><small>${b.name}</small><span class="slot-count">${s.count}</span></div>`
    }
    if(s.kind==='tool'){
      const t=TOOLS[s.index]
      return `<div class="slot ${active}"><span class="tool-icon">${t.icon}</span><b></b><small>${t.name}</small></div>`
    }
    const it=ITEMS[s.index]
    return `<div class="slot ${active}"><span class="tool-icon">${it.icon}</span><b></b><small>${it.name}</small><span class="slot-count">${s.count}</span></div>`
  }).join('')
}

// ---------- ANIMACIÓN DE MANO MINECRAFT ----------
const handGroup=new THREE.Group();camera.add(handGroup);handGroup.position.set(.58,-.48,-1.05);handGroup.rotation.set(-.18,-.28,-.12)
let handSwing=0

function triggerHandSwing(){
  handSwing=1.0
}

function clearHand(){while(handGroup.children.length){const c=handGroup.children.pop();c.geometry?.dispose?.()}}
function updateHand(){
  clearHand()
  if(equippedKind==='none')return
  if(equippedKind==='block'){
    const cube=new THREE.Mesh(geometryForBlock(selectedBlock),BLOCK_MATERIALS[selectedBlock]??BLOCK_MATERIALS[0])
    cube.scale.setScalar(.38);cube.rotation.set(.25,.45,.08);handGroup.add(cube)
  }else if(equippedKind==='tool'){
    const t=TOOLS[selectedTool]
    if(t?.name.includes('Simbionte')){
      // Brazo y Guantelete Simbionte Arácnido
      const armMat=new THREE.MeshStandardMaterial({color:0x121216,roughness:.5,metalness:.2})
      const whiteMat=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.4})
      const tendrilMat=new THREE.MeshStandardMaterial({color:0x1b1b22,emissive:0x551188,emissiveIntensity:.3})
      const arm=new THREE.Mesh(new THREE.BoxGeometry(.20,.72,.20),armMat)
      arm.rotation.set(.28,-.32,-.45);arm.position.set(-.08,.05,0)
      handGroup.add(arm)
      // Emblema Araña Blanca
      const spiderBadge=new THREE.Mesh(new THREE.BoxGeometry(.14,.18,.04),whiteMat)
      spiderBadge.position.set(-.12,.18,.11);spiderBadge.rotation.set(.28,-.32,-.45)
      handGroup.add(spiderBadge)
      // Lanzador de telaraña simbiótica brillante
      const webShooter=new THREE.Mesh(new THREE.BoxGeometry(.06,.06,.06),new THREE.MeshStandardMaterial({color:0xddeeff,emissive:0xaaccff,emissiveIntensity:.8}))
      webShooter.position.set(-.02,.38,-.08);handGroup.add(webShooter)
      // Zarcillos simbióticos dinámicos
      for(let i=0;i<4;i++){
        const spike=new THREE.Mesh(new THREE.BoxGeometry(.05,.38,.05),tendrilMat)
        spike.position.set((i%2?-.22:.12)+i*.03, .12+i*.09, (i>1?.12:-.12))
        spike.rotation.set((i-1.5)*.35, 0, (i%2?.65:-.65))
        handGroup.add(spike)
      }
    }else{
      const handle=new THREE.Mesh(new THREE.BoxGeometry(.09,.56,.09),new THREE.MeshStandardMaterial({color:0x8b5a35}))
      handle.rotation.z=-.42;handle.position.y=-.04;handGroup.add(handle)
      const power=t?.power??1
      const headColor=t?.name.includes('Mjolnir')?0x55ccff:t?.name.includes('encantado')?0xbb44ff:t?.name.includes('fuego')?0xff5511:power>=5?0x4fd8d0:power>=4?0xd7c4ad:power>=3?0x83898d:0xa06f42
      const head=new THREE.Mesh(new THREE.BoxGeometry(t?.name.includes('Mjolnir')?.48:.42,.14,.14),new THREE.MeshStandardMaterial({color:headColor,emissive:t?.name.includes('Mjolnir')?0x2288cc:0}))
      head.position.set(-.11,.20,0);head.rotation.z=-.42;handGroup.add(head)
    }
  }else if(equippedKind==='egg'){
    const item=ITEMS[selectedItem],mob=MOB_TYPES[item.mobType]
    const eggMat=new THREE.MeshStandardMaterial({color:item.eggColor??mob?.head??0xffffff,roughness:.8})
    const egg=new THREE.Mesh(new THREE.SphereGeometry(.21,14,10),eggMat)
    egg.scale.set(1,.78,1);egg.rotation.z=.25;handGroup.add(egg)
  }else{
    const item=ITEMS[selectedItem]
    const isSymbioteItem=item?.name.includes('Simbionte')
    const mat=new THREE.MeshStandardMaterial({color:isSymbioteItem?0x15151b:item.name==='Manzana dorada'?0xffd700:item.category==='Comida'?0xd77b35:0xb7c2cc,roughness:.75,emissive:isSymbioteItem?0x440066:0})
    const obj=new THREE.Mesh(item.category==='Comida'?new THREE.SphereGeometry(.18,12,8):new THREE.BoxGeometry(.24,.24,.24),mat)
    obj.rotation.set(.25,.35,.1);handGroup.add(obj)
  }
}
updateHand();updateHotbar()

// ---------- MENÚS: CRAFTEO, HORNO, ENCANTAMIENTOS, COFRE ----------
function titleBar(text){return `<div class="tabs-title"><h2>${text}</h2><button id="closeModal">✕ CERRAR</button></div>`}
function wireClose(){const b=modal.querySelector('#closeModal');if(b)b.onclick=closeModal}

function canCraft(r){
  return r.ins.every(req=>{
    if(req.kind==='block')return countInHotbar({kind:'block',index:BLOCK_INDEX[req.id]})>=req.count
    if(req.kind==='tool')return countInHotbar({kind:'tool',index:TOOLS.findIndex(t=>t.name===req.name)})>=req.count
    return countInHotbar({kind:'item',index:ITEMS.findIndex(it=>it.name===req.name)})>=req.count
  })
}

function craftRecipe(r){
  if(!canCraft(r)){say('Faltan materiales');return}
  r.ins.forEach(req=>{
    if(req.kind==='block')consumeFromHotbar({kind:'block',index:BLOCK_INDEX[req.id]},req.count)
    else if(req.kind==='tool')consumeFromHotbar({kind:'tool',index:TOOLS.findIndex(t=>t.name===req.name)},req.count)
    else consumeFromHotbar({kind:'item',index:ITEMS.findIndex(it=>it.name===req.name)},req.count)
  })
  if(r.out.kind==='block')addToHotbar({kind:'block',index:BLOCK_INDEX[r.out.id]},r.out.count??1)
  else if(r.out.kind==='tool')addToHotbar({kind:'tool',index:TOOLS.findIndex(t=>t.name===r.out.name)},r.out.count??1)
  else addToHotbar({kind:'item',index:ITEMS.findIndex(it=>it.name===r.out.name)},r.out.count??1)
  effects.sound('pickup')
  say(`¡Crafteaste ${r.name}!`)
}

function openCrafting(){
  openModal(`${titleBar('Mesa de Crafteo')}<div id="craftGrid" class="craft-grid"></div>`,'craft')
  wireClose()
  const grid=modal.querySelector('#craftGrid')
  function render(){
    grid.innerHTML=CRAFTABLES.map((r,i)=>{
      const ready=canCraft(r)
      const need=r.ins.map(ref=>`${ref.count}× ${ref.kind==='block'?BLOCKS[BLOCK_INDEX[ref.id]].name:ref.name}`).join(' + ')
      return `<button class="recipe" data-craft="${i}" ${ready?'':'disabled'}><b>${r.name}</b><span>${need}</span><span class="${ready?'craft-ready':'craft-missing'}">${ready?'Listo para craftear':'Faltan materiales'}</span></button>`
    }).join('')
    grid.querySelectorAll('[data-craft]').forEach(btn=>btn.onclick=()=>{craftRecipe(CRAFTABLES[+btn.dataset.craft]);render()})
  }
  render()
}

// ---------- HORNO INTERACTIVO ----------
function openFurnace(){
  const SMELT_RECIPES=[
    {name:'Lingote de hierro',inKind:'block',inId:'iron',outKind:'item',outName:'Lingote de hierro'},
    {name:'Lingote de oro',inKind:'block',inId:'gold',outKind:'item',outName:'Lingote de oro'},
    {name:'Cobre fundido',inKind:'block',inId:'copper',outKind:'item',outName:'Cobre'},
    {name:'Vidrio',inKind:'block',inId:'sand',outKind:'block',outId:'glass'},
    {name:'Piedra lisa',inKind:'block',inId:'cobble',outKind:'block',outId:'stone'},
    {name:'Carne cocida',inKind:'item',inName:'Carne cruda',outKind:'item',outName:'Carne cocida'},
    {name:'Ladrillos',inKind:'block',inId:'clay',outKind:'block',outId:'brick'},
  ]
  openModal(`${titleBar('🔥 Horno de Fundición')}<p>Funde minerales, cocina comida o prepara materiales resistentes.</p><div class="craft-grid" id="furnaceGrid"></div>`,'craft')
  wireClose()
  const grid=modal.querySelector('#furnaceGrid')
  function render(){
    grid.innerHTML=SMELT_RECIPES.map((r,i)=>{
      const hasMat=r.inKind==='block'?countInHotbar({kind:'block',index:BLOCK_INDEX[r.inId]})>0:countInHotbar({kind:'item',index:ITEMS.findIndex(it=>it.name===r.inName)})>0
      const inLabel=r.inKind==='block'?BLOCKS[BLOCK_INDEX[r.inId]]?.name:r.inName
      return `<button class="recipe" data-smelt="${i}" ${hasMat?'':'disabled'}><b>${r.name}</b><span>Requiere: 1× ${inLabel}</span><span class="${hasMat?'craft-ready':'craft-missing'}">${hasMat?'Listo para fundir':'Falta material'}</span></button>`
    }).join('')
    grid.querySelectorAll('[data-smelt]').forEach(btn=>{
      btn.onclick=()=>{
        const r=SMELT_RECIPES[+btn.dataset.smelt]
        if(r.inKind==='block')consumeFromHotbar({kind:'block',index:BLOCK_INDEX[r.inId]},1)
        else consumeFromHotbar({kind:'item',index:ITEMS.findIndex(it=>it.name===r.inName)},1)
        if(r.outKind==='block')addToHotbar({kind:'block',index:BLOCK_INDEX[r.outId]},1)
        else addToHotbar({kind:'item',index:ITEMS.findIndex(it=>it.name===r.outName)},1)
        effects.sound('pickup')
        say(`🔥 Fundiste: ${r.name}`)
        render()
      }
    })
  }
  render()
}

// ---------- MESA DE ENCANTAMIENTOS ----------
function openEnchantTable(){
  const cur=hotbarSlots[selectedSlot]
  const isTool=cur&&cur.kind==='tool'
  const toolName=isTool?TOOLS[cur.index]?.name:'Mano'
  openModal(`${titleBar('✨ Mesa de Encantamientos')}<p>Objeto en mano: <b>${toolName}</b></p><div class="craft-grid"><button class="recipe" id="encSharp"><b>🔥 Filo Ígneo V</b><span>Añade daño de fuego masivo (+4 daño)</span><span class="craft-ready">Encantar</span></button><button class="recipe" id="encEff"><b>✨ Pico Encantado</b><span>Otorga un Pico Encantado de alta velocidad</span><span class="craft-ready">Forjar</span></button><button class="recipe" id="encArmor"><b>💎 Peto de Diamante</b><span>Armadura divina de máxima protección</span><span class="craft-ready">Obtener</span></button></div>`,'craft')
  wireClose()
  modal.querySelector('#encSharp').onclick=()=>{
    addToHotbar({kind:'tool',index:TOOLS.findIndex(t=>t.name==='Espada de fuego')},1)
    effects.enchantEffect(camera.position)
    say('✨ ¡Espada de fuego imbuida con magia arcana!')
    closeModal()
  }
  modal.querySelector('#encEff').onclick=()=>{
    addToHotbar({kind:'tool',index:TOOLS.findIndex(t=>t.name==='Pico encantado')},1)
    effects.enchantEffect(camera.position)
    say('✨ ¡Pico encantado forjado con poder ancestral!')
    closeModal()
  }
  modal.querySelector('#encArmor').onclick=()=>{
    addToHotbar({kind:'tool',index:TOOLS.findIndex(t=>t.name==='Peto de diamante')},1)
    effects.enchantEffect(camera.position)
    say('💎 ¡Peto de diamante encantado obtenido!')
    closeModal()
  }
}

// ---------- COFRE CON ALMACÉN REAL ----------
const chestContents=new Map()
function openChest(block){
  effects.sound('chest')
  const k=world.keyFor(block.position.x,block.position.y,block.position.z)
  if(!chestContents.has(k)){
    let loot=[]
    if(gameMode==='marvel'){
      loot=[{kind:'item',name:'Vendaje',count:4},{kind:'item',name:'Suero de Súper Soldado',count:1},{kind:'tool',name:'Martillo Mjolnir',count:1},{kind:'item',name:'Suero restaurador',count:2},{kind:'block',id:'reinforcedWall',count:8}]
    }else if(gameMode==='dino'){
      loot=[{kind:'item',name:'Fósil sin limpiar',count:4},{kind:'item',name:'Jeringa de ADN puro',count:1},{kind:'tool',name:'Rifle tranquilizante',count:1},{kind:'item',name:'Carne cocida',count:6},{kind:'block',id:'fossilBrick',count:8}]
    }else if(gameMode==='survival'){
      loot=[{kind:'item',name:'Pan',count:8},{kind:'item',name:'Carne cocida',count:6},{kind:'item',name:'Manzana dorada',count:2},{kind:'item',name:'Lingote de hierro',count:6},{kind:'tool',name:'Pico de hierro',count:1}]
    }else{
      loot=[{kind:'item',name:'Diamante',count:4},{kind:'item',name:'Esmeralda',count:6},{kind:'item',name:'Lingote de oro',count:8},{kind:'item',name:'Manzana dorada',count:2},{kind:'item',name:'Perla extraña',count:4}]
    }
    chestContents.set(k,loot)
  }
  const items=chestContents.get(k)
  openModal(`${titleBar('📦 Cofre de Almacenamiento')}<p>Haz clic en cualquier objeto del cofre para guardarlo en tu barra.</p><div class="inventory-grid" id="chestGrid"></div><div class="menu-buttons" style="margin-top:14px"><button id="depositBtn">📥 Guardar objeto que tengo en la mano</button></div>`,'craft')
  wireClose()
  const grid=modal.querySelector('#chestGrid')
  function render(){
    if(!items.length){grid.innerHTML='<p style="grid-column:1/-1">El cofre está vacío.</p>';return}
    grid.innerHTML=items.map((it,i)=>{
      const label=it.kind==='block'?BLOCKS[BLOCK_INDEX[it.id]]?.name:it.name
      return `<button class="inv-item" data-take="${i}"><span class="tool-icon">📦</span><b>${label}</b><small>×${it.count??1}</small></button>`
    }).join('')
    grid.querySelectorAll('[data-take]').forEach(b=>{
      b.onclick=()=>{
        const idx=+b.dataset.take,it=items[idx]
        if(it.kind==='block')addToHotbar({kind:'block',index:BLOCK_INDEX[it.id]},it.count??1)
        else if(it.kind==='tool')addToHotbar({kind:'tool',index:TOOLS.findIndex(t=>t.name===it.name)},1)
        else addToHotbar({kind:'item',index:ITEMS.findIndex(item=>item.name===it.name)},it.count??1)
        items.splice(idx,1)
        effects.sound('pickup')
        render()
      }
    })
  }
  render()
  modal.querySelector('#depositBtn').onclick=()=>{
    const cur=hotbarSlots[selectedSlot]
    if(!cur){say('No tienes ningún objeto en la mano');return}
    if(cur.kind==='block')items.push({kind:'block',id:BLOCKS[cur.index].id,count:cur.count})
    else if(cur.kind==='tool')items.push({kind:'tool',name:TOOLS[cur.index].name,count:1})
    else items.push({kind:'item',name:ITEMS[cur.index].name,count:cur.count})
    hotbarSlots[selectedSlot]=null
    equipSelectedSlot()
    effects.sound('pickup')
    say('Objeto depositado en el cofre')
    render()
  }
}

function openInventory(){
  openModal(`${titleBar('Inventario')}<div class="inventory-grid">${ITEMS.map((it,i)=>`<button class="inv-item" data-inv="${i}"><span class="tool-icon">${it.icon}</span><b>${it.name}</b></button>`).join('')}</div>`)
  wireClose()
  modal.querySelectorAll('[data-inv]').forEach(btn=>btn.onclick=()=>{
    const item=ITEMS[+btn.dataset.inv]
    if(item.kind==='block')addToHotbar({kind:'block',index:item.blockIndex},64)
    else if(item.kind==='tool')addToHotbar({kind:'tool',index:item.toolIndex},1)
    else addToHotbar({kind:'item',index:+btn.dataset.inv},16)
    effects.sound('pickup')
    say(`Obtuviste ${item.name}`)
  })
}

function openMobs(){
  const visible=MOB_TYPES.map((m,i)=>({m,i})).filter(x=>x.m.marvelZombie?gameMode==='marvel':x.m.dinosaur?gameMode==='dino':true)
  openModal(`${titleBar('Criaturas')}<p>Haz clic para invocar una criatura delante de ti.</p><div class="mob-grid">${visible.map(({m,i})=>`<button class="mob-card" data-m="${i}"><span class="mob-face" style="background:#${m.head.toString(16).padStart(6,'0')}"></span><b>${m.name}</b><small>${m.kind}</small></button>`).join('')}</div>`)
  wireClose()
  modal.querySelectorAll('[data-m]').forEach(e=>e.onclick=()=>{
    const f=new THREE.Vector3();camera.getWorldDirection(f);f.y=0;f.normalize()
    const p=camera.position.clone().addScaledVector(f,5)
    mobSystem.makeMob(+e.dataset.m,p.x,world.heightAt(p.x,p.z)+1,p.z)
    closeModal();say('Criatura invocada')
  })
}

function openMap(){
  openModal(`${titleBar('Mapa del Mundo')}<canvas id="bigMap" width="640" height="480"></canvas><p class="small">El centro es tu posición. Amarillo: templos y aldeas · Rojo: hostiles · Cyan: estructuras.</p>`,'map-panel')
  wireClose()
  drawMap(modal.querySelector('#bigMap'),110)
}

function openPaleoLab(kind){
  if(gameMode!=='dino'){say('Disponible en Modo Dinosaurios');return}
  if(kind==='analyzer'){
    openModal(`${titleBar('Laboratorio de ADN')}<p>Fósiles: <b>${paleo.fossils}</b> · ADN: <b>${paleo.dna}%</b></p><div class="menu-buttons"><button id="processFossil">PROCESAR FÓSIL (+25% ADN)</button></div>`,'craft')
    wireClose()
    modal.querySelector('#processFossil').onclick=()=>{if(paleo.fossils<1){say('Necesitas un fósil');return}paleo.fossils--;paleo.dna=Math.min(100,paleo.dna+25);effects.sound('pickup');closeModal();openPaleoLab('analyzer')}
  }else{
    openModal(`${titleBar('Incubadora Jurásica')}<p>ADN: <b>${paleo.dna}%</b> · Huevos: <b>${paleo.eggs}</b></p><div class="menu-buttons"><button id="makeEgg">CREAR HUEVO (100% ADN)</button><button id="hatchEgg">ECLOSIONAR HUEVO</button></div>`,'craft')
    wireClose()
    modal.querySelector('#makeEgg').onclick=()=>{if(paleo.dna<100){say('Necesitas 100% de ADN');return}paleo.dna-=100;paleo.eggs++;effects.sound('pickup');closeModal();openPaleoLab('incubator')}
    modal.querySelector('#hatchEgg').onclick=()=>{if(paleo.eggs<1){say('No hay huevos');return}paleo.eggs--;const dinos=MOB_TYPES.map((m,i)=>m.dinosaur?i:-1).filter(i=>i>=0);const type=dinos[Math.floor(Math.random()*dinos.length)];const f=new THREE.Vector3();camera.getWorldDirection(f);f.y=0;f.normalize();const pos=camera.position.clone().addScaledVector(f,6);mobSystem.makeMob(type,pos.x,world.heightAt(pos.x,pos.z)+1,pos.z);effects.sound('pickup');closeModal();say('¡Ha nacido un '+MOB_TYPES[type].name+'!')}
  }
}

function setupDinoMode(){
  if(paleo.labPlaced)return
  paleo.labPlaced=true
  const baseX=8,baseZ=8,y=world.heightAt(baseX,baseZ)+1
  world.placeBlock(baseX,y,baseZ,BLOCK_INDEX.dnaAnalyzer)
  world.placeBlock(baseX+2,y,baseZ,BLOCK_INDEX.incubator)
  world.placeBlock(baseX+4,y,baseZ,BLOCK_INDEX.dinoCrate)
  const fossil=BLOCK_INDEX.fossilRock
  for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2,d=7+Math.random()*26,x=Math.round(Math.cos(a)*d),z=Math.round(Math.sin(a)*d),fy=world.heightAt(x,z)+1;world.placeBlock(x,fy,z,fossil)}
  const dinos=MOB_TYPES.map((m,i)=>m.dinosaur?i:-1).filter(i=>i>=0)
  for(let i=0;i<10;i++){const a=Math.random()*Math.PI*2,d=16+Math.random()*30,x=Math.round(Math.cos(a)*d),z=Math.round(Math.sin(a)*d);mobSystem.makeMob(dinos[i%dinos.length],x,world.heightAt(x,z)+1,z)}
  const rifle=TOOLS.findIndex(t=>t.name==='Rifle tranquilizante')
  if(rifle>=0)addToHotbar({kind:'tool',index:rifle},1)
  say('🦖 ¡Jurassic World Reborn activado! Usa tu rifle tranquilizante')
}

function setupMarvelMode(){
  const bx=8,bz=8,y=world.heightAt(bx,bz)+1
  for(let x=-3;x<=3;x++)for(let z=-3;z<=3;z++)world.placeBlock(bx+x,y-1,bz+z,BLOCK_INDEX.cobble)
  for(let x=-3;x<=3;x++)for(let yy=0;yy<3;yy++)for(const z of [-3,3])world.placeBlock(bx+x,y+yy,bz+z,BLOCK_INDEX.blackstone)
  for(let z=-2;z<=2;z++)for(let yy=0;yy<3;yy++)for(const x of [-3,3])world.placeBlock(bx+x,y+yy,bz+z,BLOCK_INDEX.blackstone)
  const band=ITEMS.findIndex(it=>it.name==='Vendaje'),base=ITEMS.findIndex(it=>it.name==='Punto de refugio'),mjolnir=TOOLS.findIndex(t=>t.name==='Martillo Mjolnir')
  const symbioteSuit=TOOLS.findIndex(t=>t.name==='Traje Simbionte Spider-Man')
  const symWeb=ITEMS.findIndex(it=>it.name==='Lanzatelarañas Simbiótico')
  const symPure=ITEMS.findIndex(it=>it.name==='Simbionte Negro puro')

  if(symbioteSuit>=0)addToHotbar({kind:'tool',index:symbioteSuit},1)
  if(symWeb>=0)addToHotbar({kind:'item',index:symWeb},8)
  if(symPure>=0)addToHotbar({kind:'item',index:symPure},3)
  if(mjolnir>=0)addToHotbar({kind:'tool',index:mjolnir},1)
  if(band>=0)addToHotbar({kind:'item',index:band},3)
  if(base>=0)addToHotbar({kind:'item',index:base},1)

  const heroes=MOB_TYPES.map((m,i)=>m.marvelZombie?i:-1).filter(i=>i>=0)
  for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2,d=16+Math.random()*26,x=Math.round(Math.cos(a)*d),z=Math.round(Math.sin(a)*d);mobSystem.makeMob(heroes[i%heroes.length],x,world.heightAt(x,z)+1,z)}
  say('🧟 ¡Marvel Zombies + Simbionte Spider-Man! Usa tus poderes arácnidos')
}

function setupSurvivalMode(){
  if(!survival.started){
    survival.started=true
    survival.hunger=survival.maxHunger
    hotbarSlots.fill(null)
    const woodPick=TOOLS.findIndex(t=>t.name==='Pico de madera')
    if(woodPick>=0)addToHotbar({kind:'tool',index:woodPick},1)
    const bread=ITEMS.findIndex(it=>it.name==='Pan')
    if(bread>=0)addToHotbar({kind:'item',index:bread},4)
    const torchBlock=BLOCK_INDEX.lamp
    if(torchBlock!==undefined)addToHotbar({kind:'block',index:torchBlock},6)
    camera.position.y=world.heightAt(camera.position.x,camera.position.z)+2.4
  }else if(camera.position.y>world.heightAt(camera.position.x,camera.position.z)+12){
    camera.position.y=world.heightAt(camera.position.x,camera.position.z)+2.4
  }
  survival.jumpVelocity=0
  say('⛏️ Supervivencia Minecraft: mina, craftea, come y sobrevive')
}

function chooseMode(mode){
  const changed=world.getGameMode()!==mode
  gameMode=mode
  world.setGameMode(mode)
  const label=mode==='dino'?'Jurassic World Reborn':mode==='marvel'?'Marvel Zombies · Add-on':mode==='survival'?'Modo Supervivencia':'Modo normal'
  document.querySelector('#modeStatus').textContent='Seleccionado: '+label
  document.querySelector('#normalMode').classList.toggle('active',mode==='normal')
  document.querySelector('#survivalMode').classList.toggle('active',mode==='survival')
  document.querySelector('#dinoMode').classList.toggle('active',mode==='dino')
  document.querySelector('#marvelMode').classList.toggle('active',mode==='marvel')
  if(changed){
    mobSystem.clearAll()
    spawnedStructureNPCs.clear()
    spawnedDungeons.clear()
    paleo.labPlaced=false
    world.clear()
    world.updateChunks(camera.position)
    systems.createStarterCircuit(3,world.heightAt(3,3)+1,3)
    systems.createStarterPortal(-7,world.heightAt(-7,6)+1,6)
    for(let i=0;i<10;i++)mobSystem.ensurePopulation(camera.position,mode,1)
  }
  if(mode==='dino')setupDinoMode()
  if(mode==='marvel')setupMarvelMode()
  if(mode==='survival')setupSurvivalMode()
}

// ---------- MAP ----------
function drawMap(canvas,radius=48){const g=canvas.getContext('2d'),w=canvas.width,h=canvas.height;g.clearRect(0,0,w,h);const step=radius*2/60
  for(let ix=0;ix<60;ix++)for(let iz=0;iz<60;iz++){const x=camera.position.x-radius+ix*step,z=camera.position.z-radius+iz*step,b=biomeAt(x,z);g.fillStyle=b.color;g.fillRect(ix*w/60,iz*h/60,w/60+1,h/60+1)}
  for(const m of mobSystem.mobs){const dx=(m.group.position.x-camera.position.x)/radius,dz=(m.group.position.z-camera.position.z)/radius;if(Math.abs(dx)>1||Math.abs(dz)>1)continue;const d=MOB_TYPES[m.type];g.fillStyle=d.kind==='hostile'||d.marvelZombie?'#ff4b4b':d.dinosaur?'#44dd88':d.kind==='villager'?'#ffd45a':'#ffffff';g.fillRect(w/2+dx*w/2-2,h/2+dz*h/2-2,4,4)}
  for(const st of world.structures){const dx=(st.x-camera.position.x)/radius,dz=(st.z-camera.position.z)/radius;if(Math.abs(dx)>1||Math.abs(dz)>1)continue;g.fillStyle=st.temple?'#ffdd44':st.type.includes('Jurassic')||st.type.includes('T-Rex')?'#33dd66':st.type.includes('Torre')||st.type.includes('Sanctum')?'#ee4444':'#59fff1';g.fillRect(w/2+dx*w/2-3,h/2+dz*h/2-3,6,6)}
  g.fillStyle='#151515';g.beginPath();g.arc(w/2,h/2,5,0,Math.PI*2);g.fill();g.strokeStyle='#fff';g.lineWidth=2;g.stroke()
}

// ---------- SAVE ----------
const SAVE_KEY='julian-blocks-v18'
function saveWorld(){const data={v:18,mode:gameMode,survival:{...survival,milestones:{...survival.milestones}},paleo:{...paleo},rescueStats:{...rescueStats},marvel:{day:marvel.day,elapsed:marvel.elapsed,kills:marvel.kills,baseLevel:marvel.baseLevel,basePos:marvel.basePos?[marvel.basePos.x,marvel.basePos.y,marvel.basePos.z]:null},p:[camera.position.x,camera.position.y,camera.position.z,yaw,pitch],dimension:world.getDimension(),edits:world.exportEdits(),mobs:mobSystem.mobs.slice(0,80).map(m=>[m.type,m.group.position.x,m.group.position.y,m.group.position.z,m.hp,m.tamed?1:0,m.friendOfPlayer?1:0,m.captive?1:0,Number.isFinite(m.fixedY)?m.fixedY:null,m.bond??0,m.rescued?1:0])};localStorage.setItem(SAVE_KEY,JSON.stringify(data));say('Mundo guardado')}
function loadWorld(){const raw=localStorage.getItem(SAVE_KEY);if(!raw)return false;try{const d=JSON.parse(raw);gameMode=d.mode??'normal';world.setGameMode(gameMode);if(d.survival){Object.assign(survival,d.survival);if(d.survival.milestones)Object.assign(survival.milestones,d.survival.milestones)}if(d.paleo)Object.assign(paleo,d.paleo);if(d.rescueStats)Object.assign(rescueStats,d.rescueStats);if(d.marvel){Object.assign(marvel,d.marvel);if(Array.isArray(d.marvel.basePos))marvel.basePos=new THREE.Vector3(...d.marvel.basePos)}world.importEdits(d.edits??{});world.clear();world.setDimension(d.dimension??'overworld');mobSystem.setHeightProvider((x,z)=>world.heightAt(x,z));for(const m of [...mobSystem.mobs])mobSystem.removeMob(m);if(d.p){camera.position.set(d.p[0],d.p[1],d.p[2]);yaw=d.p[3]??0;pitch=d.p[4]??0;camera.rotation.set(pitch,yaw,0)}for(const m of d.mobs??[]){const mm=mobSystem.makeMob(m[0],m[1],m[2],m[3]);mm.hp=m[4]??mm.hp;mm.tamed=!!m[5];mm.friendOfPlayer=!!m[6];mm.captive=!!m[7];mm.fixedY=m[8]??null;mm.bond=m[9]??0;mm.rescued=!!m[10]}world.updateChunks(camera.position);systems.recomputePower();say('Mundo cargado');return true}catch(e){console.error(e);say('Guardado dañado');return false}}

let yaw=0,pitch=0;world.updateChunks(camera.position);if(!loadWorld()){systems.createStarterCircuit(3,world.heightAt(3,3)+1,3);systems.createStarterPortal(-7,world.heightAt(-7,6)+1,6);for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2,d=12+Math.random()*28,x=Math.round(Math.sin(a)*d),z=Math.round(Math.cos(a)*d);mobSystem.makeMob(i%4,x,world.heightAt(x,z)+1,z)}}

// ---------- CONTROLS ----------
function play(){effects.unlockAudio();if(!uiOpen)renderer.domElement.requestPointerLock()}
document.querySelector('#normalMode').onclick=()=>chooseMode('normal');document.querySelector('#survivalMode').onclick=()=>chooseMode('survival');document.querySelector('#dinoMode').onclick=()=>chooseMode('dino');document.querySelector('#marvelMode').onclick=()=>chooseMode('marvel');chooseMode(gameMode);document.querySelector('#playBtn').onclick=play;document.querySelector('#saveBtn').onclick=saveWorld;document.querySelector('#loadBtn').onclick=loadWorld;document.querySelector('#farBtn').onclick=()=>{camera.position.set(FAR_LANDS_DISTANCE-55,world.heightAt(FAR_LANDS_DISTANCE-55,0)+18,0);world.updateChunks(camera.position);say('Cerca de las Tierras Lejanas')}
renderer.domElement.onclick=()=>{if(!uiOpen&&document.pointerLockElement!==renderer.domElement)play()};document.addEventListener('pointerlockchange',()=>{if(!uiOpen)menu.classList.toggle('hidden',document.pointerLockElement===renderer.domElement)})
document.addEventListener('mousemove',e=>{if(document.pointerLockElement!==renderer.domElement)return;const s=.0022;yaw-=e.movementX*s;pitch-=e.movementY*s;pitch=Math.max(-Math.PI/2+.03,Math.min(Math.PI/2-.03,pitch));camera.rotation.y=yaw;camera.rotation.x=pitch})
const keys={w:0,a:0,s:0,d:0,space:0,shift:0,fast:0}
addEventListener('keydown',e=>{const k=e.key.toLowerCase();if(k==='w')keys.w=1;if(k==='a')keys.a=1;if(k==='s')keys.s=1;if(k==='d')keys.d=1;if(e.code==='Space')keys.space=1;if(e.code.startsWith('Shift'))keys.shift=1;if(k==='f')keys.fast=1;if(k==='t'){const w=effects.cycleWeather();say('Clima: '+(w==='clear'?'despejado':w==='rain'?'lluvia':'tormenta'))}
  if(/^[1-9]$/.test(k)){selectedSlot=Number(k)-1;equipSelectedSlot()}
  if(k==='e'&&!e.repeat){uiOpen?closeModal():openInventory()}if(k==='c'&&!e.repeat){uiOpen?closeModal():openCrafting()}if(k==='m'&&!e.repeat){if(gameMode==='survival')say('En Supervivencia no puedes invocar criaturas');else uiOpen?closeModal():openMobs()}if(k==='tab'&&!e.repeat){e.preventDefault();uiOpen?closeModal():openMap()}if(k==='k'&&!e.repeat)saveWorld();if(k==='l'&&!e.repeat)loadWorld();if(k==='r'){camera.position.set(0,14,18);world.updateChunks(camera.position);say('Inicio')}if(k==='escape'&&uiOpen)closeModal()})
addEventListener('keyup',e=>{const k=e.key.toLowerCase();if(k==='w')keys.w=0;if(k==='a')keys.a=0;if(k==='s')keys.s=0;if(k==='d')keys.d=0;if(e.code==='Space')keys.space=0;if(e.code.startsWith('Shift'))keys.shift=0;if(k==='f')keys.fast=0})
addEventListener('wheel',e=>{if(uiOpen)return;selectedSlot+=e.deltaY>0?1:-1;if(selectedSlot<0)selectedSlot=8;if(selectedSlot>8)selectedSlot=0;equipSelectedSlot()},{passive:true})
const forward=new THREE.Vector3(),right=new THREE.Vector3(),up=new THREE.Vector3(0,1,0)

function move(dt){
  if(document.pointerLockElement!==renderer.domElement||uiOpen)return
  camera.getWorldDirection(forward);forward.y=0;forward.normalize();right.crossVectors(forward,up).normalize()
  const moving=keys.w||keys.a||keys.s||keys.d

  const underId=systems.checkUnderPlayer(camera.position)
  let speedMod=1.0
  if(underId==='slime'){
    if(survival.jumpVelocity<=0){
      survival.jumpVelocity=13.2
      survival.grounded=false
      effects.bounceEffect(camera.position)
      say('¡Rebote elástico!')
    }
  }else if(underId==='honey'){
    speedMod=0.42
  }else if(underId==='ice'||underId==='packedIce'){
    speedMod=1.45
  }else if(underId==='magma'){
    magmaTimer+=dt
    if(magmaTimer>1.1){
      magmaTimer=0
      damagePlayer(1)
      say('🔥 ¡El magma quema!')
    }
  }

  if(gameMode==='survival'){
    const sprinting=keys.fast&&survival.hunger>2
    const a=(sprinting?8.2:5.4)*speedMod*dt
    if(keys.w)camera.position.addScaledVector(forward,a)
    if(keys.s)camera.position.addScaledVector(forward,-a)
    if(keys.a)camera.position.addScaledVector(right,-a)
    if(keys.d)camera.position.addScaledVector(right,a)
    const ground=world.heightAt(camera.position.x,camera.position.z)+2.35
    if(camera.position.y<=ground+.08){camera.position.y=ground;survival.grounded=true;if(underId!=='slime')survival.jumpVelocity=0}else survival.grounded=false
    if(keys.space&&survival.grounded){survival.jumpVelocity=7.5;survival.grounded=false;effects.sound('pickup')}
    survival.jumpVelocity-=18.5*dt
    camera.position.y+=survival.jumpVelocity*dt
    const ground2=world.heightAt(camera.position.x,camera.position.z)+2.35
    if(camera.position.y<ground2){camera.position.y=ground2;if(underId!=='slime')survival.jumpVelocity=0;survival.grounded=true}
    if(moving)survival.exhaustion+=dt*(sprinting?.18:.08)
    return
  }
  const a=(keys.fast?28:10)*speedMod*dt
  if(keys.w)camera.position.addScaledVector(forward,a);if(keys.s)camera.position.addScaledVector(forward,-a);if(keys.a)camera.position.addScaledVector(right,-a);if(keys.d)camera.position.addScaledVector(right,a);if(keys.space)camera.position.y+=a;if(keys.shift)camera.position.y-=a;camera.position.y=Math.max(-20,Math.min(100,camera.position.y))
}

function travelPortal(){
  const next=world.getDimension()==='overworld'?'ember':'overworld'
  for(const m of [...mobSystem.mobs])mobSystem.removeMob(m)
  world.setDimension(next)
  mobSystem.setHeightProvider((x,z)=>world.heightAt(x,z))
  camera.position.y=world.heightAt(camera.position.x,camera.position.z)+8
  world.updateChunks(camera.position)
  systems.createStarterPortal(Math.round(camera.position.x)+5,world.heightAt(Math.round(camera.position.x)+5,Math.round(camera.position.z))+1,Math.round(camera.position.z))
  systems.recomputePower()
  if(next==='ember'){
    scene.background.set(0x3b1212);scene.fog.color.set(0x3b1212)
    say('Entraste a la Dimensión de Brasas 🔥')
  }else{
    scene.background.set(0x86c9ff);scene.fog.color.set(0x86c9ff)
    say('Regresaste al Mundo Verde 🌎')
  }
}

// ---------- INTERACTION ----------
const ray=new THREE.Raycaster();ray.far=10;const center=new THREE.Vector2()
function target(){ray.setFromCamera(center,camera);const objs=[...world.blocks,...mobSystem.mobs.map(m=>m.group)];return ray.intersectObjects(objs,true)[0]??null}
addEventListener('contextmenu',e=>e.preventDefault());
addEventListener('mousedown',e=>{
  if(document.pointerLockElement!==renderer.domElement||uiOpen)return
  triggerHandSwing()
  const h=target()
  const mob=h?(h.object.userData.mob??mobSystem.mobs.find(m=>m.group===h.object||m.group.children.includes(h.object))):null

  // Herramientas especiales con clic derecho
  if(e.button===2&&equippedKind==='tool'){
    const tName=TOOLS[selectedTool]?.name
    if(tName==='Rifle tranquilizante'){
      if(mob&&MOB_TYPES[mob.type].dinosaur){
        mob.bond=(mob.bond??0)+2
        mob.hp=Math.min(mob.maxHp,mob.hp+8)
        effects.sound('hit')
        if(mob.bond>=2){
          mob.tamed=true;mob.captive=false;mob.friendOfPlayer=true;mob.rescued=true
          effects.enchantEffect(mob.group.position)
          say(`🦖 ¡${MOB_TYPES[mob.type].name} tranquilizado y domesticado! Te seguirá.`)
        }else{
          say(`🎯 Dardo aplicado · calma ${mob.bond}/2`)
        }
        return
      }else if(mob){
        mobSystem.hit(mob, 8, camera.position)
        say('🎯 Dardo tranquilizante impactó en objetivo')
        return
      }
    }
    if(tName==='Rastreador jurásico'){
      const dinos=mobSystem.mobs.filter(m=>MOB_TYPES[m.type].dinosaur)
      if(dinos.length>0){
        let nearest=dinos[0],bd=camera.position.distanceTo(nearest.group.position)
        for(const dm of dinos){const dist=camera.position.distanceTo(dm.group.position);if(dist<bd){bd=dist;nearest=dm}}
        say(`📟 Rastreador Jurásico: ${MOB_TYPES[nearest.type].name} detectado a ${Math.round(bd)} bloques`)
      }else{
        say('📟 Rastreador Jurásico: no hay dinosaurios cercanos')
      }
      return
    }
    if(tName==='Martillo Mjolnir'){
      effects.sound('thunder')
      let hitCount=0
      for(const m of [...mobSystem.mobs]){
        if(m.group.position.distanceTo(camera.position)<16){
          mobSystem.hit(m,18,camera.position)
          effects.mobHit(m.group.position)
          hitCount++
        }
      }
      effects.explosionEffect(camera.position.clone().add(new THREE.Vector3(0,1,0)))
      say(`⚡ ¡Trueno del Mjolnir! Golpeó ${hitCount} objetivos`)
      return
    }
    if(tName==='Arco explosivo de Hawkeye'){
      const f=new THREE.Vector3();camera.getWorldDirection(f)
      const targetPos=camera.position.clone().addScaledVector(f,18)
      effects.explosionEffect(targetPos)
      for(const m of [...mobSystem.mobs]){if(m.group.position.distanceTo(targetPos)<7){mobSystem.hit(m,16,targetPos)}}
      say('🏹💥 ¡Flecha explosiva detonada!')
      return
    }
    if(tName==='Guantelete repulsor'){
      const f=new THREE.Vector3();camera.getWorldDirection(f)
      let n=0
      for(const m of [...mobSystem.mobs]){
        const toMob=m.group.position.clone().sub(camera.position)
        if(toMob.length()<20&&toMob.normalize().dot(f)>0.7){
          mobSystem.hit(m,14,camera.position)
          m.group.position.addScaledVector(f,6)
          n++
        }
      }
      effects.enchantEffect(camera.position.clone().add(f))
      say(`🥊✨ ¡Rayo repulsor! Rechazó a ${n} objetivos`)
      return
    }
  }

  if(e.button===2&&mob){
    const md=MOB_TYPES[mob.type],held=equippedKind==='item'?ITEMS[selectedItem]:null
    if(gameMode==='dino'&&md.dinosaur){
      if(held?.name==='Carne cocida'||held?.name==='Carne cruda'){
        consumeSelected(1);mob.bond=(mob.bond??0)+1;mob.hp=Math.min(mob.maxHp,mob.hp+8);const need=mob.captive?2:3
        if(mob.bond>=need){mob.tamed=true;mob.captive=false;mob.rescued=true;mob.fixedY=null;mob.friendOfPlayer=true;mob.group.position.y=world.heightAt(mob.group.position.x,mob.group.position.z)+1;mob.home.copy(mob.group.position);rescueStats.dinos++;say(`🦖 ${md.name} fue alimentado y ahora te sigue`)}else say(`Carne entregada · confianza ${mob.bond}/${need}`)
        return
      }
    }
    if(gameMode==='normal'&&md.id==='wolf'){
      if(held?.name==='Hueso'){consumeSelected(1);mob.bond=(mob.bond??0)+1;if(mob.bond>=2){mob.tamed=true;mob.captive=false;mob.rescued=true;mob.fixedY=null;mob.friendOfPlayer=true;mob.group.position.y=world.heightAt(mob.group.position.x,mob.group.position.z)+1;mob.home.copy(mob.group.position);rescueStats.wolves++;say('🐺 Lobo domesticado: ahora te seguirá')}else say('El lobo olfatea el hueso');return}
    }
    if(gameMode==='marvel'&&md.marvelZombie){
      if(held?.name==='Suero restaurador'){const pos=mob.group.position.clone();consumeSelected(1);mobSystem.removeMob(mob);const humanType=MOB_TYPES.findIndex(x=>x.id==='npcSurvivor');const human=mobSystem.makeMob(humanType,pos.x,world.heightAt(pos.x,pos.z)+1,pos.z);human.tamed=true;human.friendOfPlayer=true;human.rescued=true;human.npcRole='superviviente';human.profession='superviviente';human.npcStructure='Humano restaurado';human.home.copy(human.group.position);rescueStats.humans++;effects.sound('pickup');say('🧪 ¡Curado! El zombie volvió a ser humano');return}
    }
    if(md.kind==='villager'){openNPCDialog(mob);return}
  }

  if(e.button===2&&equippedKind==='tool'&&TOOLS[selectedTool]?.name==='Chisquero de pedernal'){
    if(h&&world.blocks.includes(h.object)){
      const t=h.object.userData.typeIndex??0,id=BLOCKS[t]?.id
      if(id==='tnt'){systems.igniteTNT(h.object, 2.0);return}
    }
  }

  if(e.button===2&&equippedKind==='item'){
    const clickedId=h&&world.blocks.includes(h.object)?BLOCKS[h.object.userData.typeIndex??0]?.id:null
    const special=clickedId&&['chest','crafting','furnace','enchantTable','tnt','dnaAnalyzer','incubator','lever','portalCore','radarArray','bioScanner','medicalStation','watchBeacon'].includes(clickedId)
    if(!special&&useHeldItem(h))return
  }
  if(!h)return
  if(mob&&e.button===0){
    const md=MOB_TYPES[mob.type]
    const curTool=equippedKind==='tool'?TOOLS[selectedTool]:null
    const damage=curTool?(curTool.damage??1):1
    const killed=mobSystem.hit(mob,damage,camera.position)
    effects.mobHit(mob.group.position.clone().add(new THREE.Vector3(0,1,0)))
    if(killed&&gameMode==='marvel'&&md.marvelZombie){marvel.kills++;marvel.baseLevel=Math.max(marvel.baseLevel,Math.min(10,1+Math.floor(marvel.kills/5)));say(`Zombie derrotado · refugio nivel ${marvel.baseLevel}`)}else say(`${md.name}: ${Math.max(0,mob.hp)} vida`)
    return
  }

  if(!world.blocks.includes(h.object))return
  if(e.button===0){
    const t=h.object.userData.typeIndex??0,id=BLOCKS[t]?.id,tool=TOOLS[selectedTool]
    if(id==='tnt'){systems.igniteTNT(h.object, 2.0);return}
    if(id==='bedrock'){say('La roca madre es indestructible');return}
    if(['reinforcedWall','steelPlate'].includes(id)&&(equippedKind!=='tool'||(tool?.power??0)<4)){say('Necesitas una herramienta fuerte para romper este bloque');return}
    if(gameMode==='dino'&&id==='fossilRock'){const bonus=equippedKind==='tool'&&tool?.name==='Brocha paleontológica'?2:1;paleo.fossils+=bonus;say(`Fósil encontrado +${bonus} · tienes ${paleo.fossils}`)}
    effects.blockBreak(h.object.position.clone(),new THREE.Color(BLOCKS[t]?.sw??'#888888'))
    spawnBlockDrop(h.object.position.clone(),t)
    world.removeBlock(h.object,true)
    systems.onBlockChanged()
    return
  }
  if(e.button===2){
    const normal=h.face.normal.clone().transformDirection(h.object.matrixWorld),p=h.object.position.clone().add(normal)
    p.set(Math.round(p.x),Math.round(p.y),Math.round(p.z))
    const clickedId=BLOCKS[h.object.userData.typeIndex??0]?.id
    if(clickedId==='chest'&&equippedKind!=='block'){openChest(h.object);return}
    if(clickedId==='crafting'&&equippedKind!=='block'){openCrafting();return}
    if(clickedId==='furnace'&&equippedKind!=='block'){openFurnace();return}
    if(clickedId==='enchantTable'&&equippedKind!=='block'){openEnchantTable();return}
    if(clickedId==='tnt'){systems.igniteTNT(h.object,2.2);return}
    if(gameMode==='dino'&&clickedId==='dnaAnalyzer'){openPaleoLab('analyzer');return}
    if(gameMode==='dino'&&clickedId==='incubator'){openPaleoLab('incubator');return}
    const special=systems.interactBlock(h.object)
    if(special.handled){
      if(special.type==='portal')travelPortal()
      if(special.type==='medical'){playerHP=playerMaxHP;effects.sound('pickup');say('Estación médica: vida restaurada')}
      return
    }
    if(equippedKind==='egg'){
      const item=ITEMS[selectedItem],type=item.mobType
      if(type!==undefined){const y=world.heightAt(p.x,p.z)+1;mobSystem.makeMob(type,p.x,y,p.z);consumeSelected(1);say(`${MOB_TYPES[type].name} invocado`)}
      return
    }
    if(equippedKind==='block'&&p.distanceTo(camera.position)>1.3){
      const placed=world.placeBlock(p.x,p.y,p.z,selectedBlock)
      if(placed){
        effects.blockPlace(p,new THREE.Color(BLOCKS[selectedBlock].sw))
        consumeSelected(1)
        systems.onBlockChanged()
      }
    }
  }
})

const outline=new THREE.LineSegments(new THREE.EdgesGeometry(world.cubeGeo),new THREE.LineBasicMaterial({color:0x000000,linewidth:2}))
outline.scale.setScalar(1.008);outline.visible=false;scene.add(outline)
function updateOutline(){const h=target();if(h&&world.blocks.includes(h.object)){outline.visible=true;outline.position.copy(h.object.position)}else outline.visible=false}

// ---------- POPULATE & DUNGEONS ----------
const spawnedStructureNPCs=new Set(),spawnedDungeons=new Set()
function spawnDungeonCaptive(st){
  if(!st.dungeon)return
  const key=`dungeon:${st.x},${st.z}:${gameMode}`;if(spawnedDungeons.has(key))return
  const dg=st.dungeon,dist=camera.position.distanceTo(new THREE.Vector3(dg.x,camera.position.y,dg.z));if(dist>95)return
  let choices=[]
  if(gameMode==='dino')choices=MOB_TYPES.map((m,i)=>m.dinosaur?i:-1).filter(i=>i>=0)
  else if(gameMode==='marvel')choices=MOB_TYPES.map((m,i)=>m.marvelZombie?i:-1).filter(i=>i>=0)
  else {const wolf=MOB_TYPES.findIndex(m=>m.id==='wolf');if(wolf>=0)choices=[wolf]}
  if(!choices.length)return
  spawnedDungeons.add(key)
  const count=(gameMode==='dino'&&!st.house&&Math.random()<.45)?2:1
  for(let i=0;i<count;i++){const type=choices[Math.floor(Math.random()*choices.length)],x=dg.x+(i?1:-1),z=dg.z,m=mobSystem.makeMob(type,x,dg.y,z);m.captive=true;m.fixedY=dg.y;m.captiveRadius=Math.max(2,Math.min(dg.w,dg.d)/3);m.home.set(x,dg.y,z);m.npcStructure=dg.label;m.state='wander'}
}

function spawnNPCAt(typeId,role,st,offsetX=0,offsetZ=0){const type=MOB_TYPES.findIndex(m=>m.id===typeId);if(type<0)return null;const x=st.x+offsetX,z=st.z+offsetZ,m=mobSystem.makeMob(type,x,world.heightAt(x,z)+1,z);m.npcRole=role;m.profession=role;m.npcMode=gameMode;m.npcStructure=st.type;m.home.set(x,m.group.position.y,z);return m}
function populateVillages(){
  for(const st of world.structures){
    spawnDungeonCaptive(st)
    const id=`${st.type}:${st.x},${st.z}:${gameMode}`
    if(spawnedStructureNPCs.has(id))continue
    if(st.house){spawnedStructureNPCs.add(id);continue}
    if(camera.position.distanceTo(new THREE.Vector3(st.x,camera.position.y,st.z))>100)continue
    spawnedStructureNPCs.add(id)
    if(st.type.includes('Jurassic')||st.type.includes('T-Rex')){
      spawnNPCAt('npcPaleo','paleontologo',st,2,2)
      spawnNPCAt('npcScientist','cientifico',st,-2,-2)
      continue
    }
    if(st.type.includes('Vengadores')||st.type.includes('Sanctum')||st.type.includes('S.H.I.E.L.D.')){
      spawnNPCAt('npcGuard','guardia',st,2,0)
      spawnNPCAt('npcSurvivor','superviviente',st,-2,0)
      continue
    }
    if(st.temple){
      spawnNPCAt('npcGuard','guardia',st,0,4)
      continue
    }
    if(st.type==='Aldea gigante'){
      for(let i=0;i<8;i++){const roles=['constructor','granjero','bibliotecario','explorador'],role=roles[i%roles.length],type=role==='constructor'?'npcBuilder':role==='explorador'?'npcRanger':'villager';spawnNPCAt(type,role,st,(i%4-1.5)*4,(Math.floor(i/4)*2-1)*6)}
      spawnNPCAt('npcMedic','medico',st,3,-3);spawnNPCAt('npcEngineer','ingeniero',st,-3,-3)
      const golemType=MOB_TYPES.findIndex(m=>m.id==='golem');if(golemType>=0){mobSystem.makeMob(golemType,st.x+8,world.heightAt(st.x+8,st.z)+1,st.z)}
    }
  }
}

// ---------- GAME LOOP ----------
let worldTime=.28,chunkTimer=0,mapTimer=0,popTimer=0,autosave=0;const clock=new THREE.Clock()
let survivalDamageTimer=0

function updateSurvival(dt,daylight){
  if(gameMode!=='survival')return
  survival.elapsed+=dt
  survival.days=1+Math.floor(survival.elapsed/260)
  survival.exhaustion+=dt*.004
  if(survival.exhaustion>=1){
    survival.exhaustion-=1
    survival.hunger=Math.max(0,survival.hunger-1)
  }
  survivalDamageTimer=Math.max(0,survivalDamageTimer-dt)
  if(survival.hunger<=0&&survivalDamageTimer<=0){
    survivalDamageTimer=4
    damagePlayer(1)
    say('Tienes hambre: busca comida')
  }
  if(daylight<.28&&!survival.milestones.night){
    survival.milestones.night=true
    say('🌙 Primera noche: los monstruos atacan')
  }
  const blocksInBar=hotbarSlots.filter(s=>s?.kind==='block').map(s=>BLOCKS[s.index]?.id)
  if(blocksInBar.includes('oak')&&!survival.milestones.wood){survival.milestones.wood=true;say('🏆 Progreso: conseguiste madera')}
  if(blocksInBar.includes('stone')&&!survival.milestones.stone){survival.milestones.stone=true;say('🏆 Progreso: conseguiste piedra')}
  if(blocksInBar.includes('iron')&&!survival.milestones.iron){survival.milestones.iron=true;say('🏆 Progreso: encontraste hierro')}
}

function animate(){
  requestAnimationFrame(animate)
  const dt=Math.min(clock.getDelta(),.05)
  shieldTimer=Math.max(0,shieldTimer-dt)
  if(gameMode==='marvel'){marvel.elapsed+=dt;marvel.day=1+Math.floor(marvel.elapsed/90)}

  move(dt)
  updateDroppedItems(dt)

  if(handSwing>0){
    handSwing=Math.max(0,handSwing-dt*6.5)
    handGroup.position.y=-.48-Math.sin(handSwing*Math.PI)*.16
    handGroup.rotation.x=-.18+Math.sin(handSwing*Math.PI)*.42
    handGroup.rotation.z=-.12-Math.sin(handSwing*Math.PI)*.32
  }else{
    handGroup.position.set(.58,-.48,-1.05)
    handGroup.rotation.set(-.18,-.28,-.12)
  }

  worldTime=(worldTime+dt/260)%1
  const daylight=Math.max(.08,Math.sin(worldTime*Math.PI)*1.05)
  updateSurvival(dt,daylight)
  sun.intensity=.25+daylight*2
  hemi.intensity=.35+daylight*1.25
  sun.position.set(Math.cos(worldTime*Math.PI*2)*80,Math.sin(worldTime*Math.PI*2)*85,35)
  scene.background.setHSL(.57,.55,.12+.55*daylight)
  scene.fog.color.copy(scene.background)

  const dim=world.getDimension()==='overworld'
  clouds.visible=dim;sunSprite.visible=dim;moonSprite.visible=dim
  if(dim){
    const dir=sun.position.clone().normalize()
    sunSprite.position.copy(camera.position).addScaledVector(dir,220)
    moonSprite.position.copy(camera.position).addScaledVector(dir,-220)
    clouds.position.x=camera.position.x;clouds.position.z=camera.position.z
    cloudMat.map.offset.x+=dt*.005;cloudMat.opacity=.35+.55*daylight
  }

  const fx=effects.update(dt,camera)
  if(fx.weather!=='clear'){scene.background.offsetHSL(0,-.10,-.10);scene.fog.color.copy(scene.background)}
  if(fx.flash>0)scene.background.set(0xe8f4ff)
  if(world.getDimension()==='ember'){scene.background.set(0x3b1212);scene.fog.color.set(0x3b1212);sun.intensity=.65;hemi.intensity=.45}

  mobSystem.update(dt,camera.position,daylight)
  systems.update(dt)
  updateCombat(dt)
  updateOutline()

  chunkTimer+=dt;mapTimer+=dt;popTimer+=dt;autosave+=dt
  if(chunkTimer>.45){chunkTimer=0;world.updateChunks(camera.position);populateVillages()}
  if(mapTimer>.3){mapTimer=0;drawMap(mapCanvas,52)}
  if(popTimer>3){
    popTimer=0
    let blockedByBase=false
    if(gameMode==='marvel'&&marvel.basePos){const radius=Math.min(80,16+marvel.baseLevel*6);blockedByBase=camera.position.distanceTo(marvel.basePos)<radius}
    const marvelCanSpawn=gameMode!=='marvel'||marvel.day>3||daylight<.28
    if(!blockedByBase&&marvelCanSpawn)mobSystem.ensurePopulation(camera.position,gameMode,daylight)
  }
  if(autosave>75){autosave=0;saveWorld()}

  const b=biomeAt(camera.position.x,camera.position.z),dist=Math.max(Math.abs(camera.position.x),Math.abs(camera.position.z)),far=dist>FAR_LANDS_DISTANCE?' · TIERRAS LEJANAS':` · faltan ${Math.max(0,Math.round(FAR_LANDS_DISTANCE-dist))} bloques`
  const currentSlot=hotbarSlots[selectedSlot]
  let handName='Mano vacía'
  if(currentSlot){
    if(currentSlot.kind==='block')handName=BLOCKS[currentSlot.index]?.name??'Bloque'
    else if(currentSlot.kind==='tool')handName=TOOLS[currentSlot.index]?.name??'Herramienta'
    else handName=ITEMS[currentSlot.index]?.name??'Objeto'
  }

  hud.innerHTML=`<b>JULIAN BLOCKS · V18</b> · <strong>${gameMode==='dino'?'🦖 JURASSIC WORLD':gameMode==='marvel'?'🧟 MARVEL ZOMBIES':gameMode==='survival'?'⛏️ SUPERVIVENCIA':'🌎 NORMAL'}</strong><br>${healthBarHTML()}${hungerBarHTML()}<br>Dimensión: <strong>${world.getDimension()==='overworld'?'Mundo Verde':'Brasas'}</strong> · Bioma: <strong>${b.name}</strong>${world.getDimension()==='overworld'?far:''}<br>En mano: <strong>${handName}</strong> · Herramienta: ${TOOLS[selectedTool]?.name??'Mano'}<br>Clima: <strong>${effects.weather==='clear'?'Despejado':effects.weather==='rain'?'Lluvia':'Tormenta'}</strong> · Criaturas: ${mobSystem.mobs.length} · Estructuras: ${world.structures.length}<br>X ${camera.position.x.toFixed(0)} · Y ${camera.position.y.toFixed(0)} · Z ${camera.position.z.toFixed(0)}${gameMode==='dino'?`<br>Fósiles: <strong>${paleo.fossils}</strong> · ADN: <strong>${paleo.dna}%</strong> · Huevos: <strong>${paleo.eggs}</strong> · 🦖 Rescatados: ${rescueStats.dinos}`:''}${gameMode==='marvel'?`<br>Día apocalipsis: <strong>${marvel.day}</strong> · Bajas: <strong>${marvel.kills}</strong> · Refugio: <strong>${marvel.baseLevel}/10</strong> · 🧪 Curados: ${rescueStats.humans}`:''}<br><span class="hint">E inventario · C crafteo · M criaturas · Tab mapa · T clima · K guardar</span>`

  camera.position.add(fx.shakeOffset)
  renderer.render(scene,camera)
  camera.position.sub(fx.shakeOffset)
}
animate()

addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)})
