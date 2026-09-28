import * as THREE from 'three'
import { MOB_TYPES } from './data.js'
import { terrainHeight } from './world.js'

const boxGeo = (x,y,z)=>new THREE.BoxGeometry(x,y,z)
const sphereGeo = (r=0.1, w=8, h=6)=>new THREE.SphereGeometry(r,w,h)

function mat(color, opts={}){
  return new THREE.MeshStandardMaterial({color, roughness:.82, metalness:0, ...opts})
}

function addPart(group, geo, material, pos, scale=null, rot=null){
  const mesh=new THREE.Mesh(geo,material)
  mesh.position.set(...pos)
  if(scale)mesh.scale.set(...scale)
  if(rot)mesh.rotation.set(...rot)
  mesh.castShadow=true;mesh.receiveShadow=true
  group.add(mesh)
  return mesh
}

function addNameTag(group,text,y=2.75){
  const canvas=document.createElement('canvas');canvas.width=320;canvas.height=72
  const ctx=canvas.getContext('2d')
  ctx.fillStyle='rgba(10,16,22,.78)';ctx.fillRect(2,8,316,54)
  ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=2;ctx.strokeRect(3,9,314,52)
  ctx.fillStyle='#ffffff';ctx.font='bold 27px Arial';ctx.textAlign='center';ctx.textBaseline='middle'
  ctx.fillText(text,160,35)
  const tex=new THREE.CanvasTexture(canvas);tex.minFilter=THREE.LinearFilter
  const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,transparent:true,depthTest:false}))
  sprite.position.set(0,y,0);sprite.scale.set(2.7,.60,1);sprite.renderOrder=9;group.add(sprite)
  return sprite
}

function buildDetailedMob(group,d){
  const bodyMat=mat(d.body), headMat=mat(d.head)
  const darkMat=mat(0x202124), whiteMat=mat(0xf7f7f1)
  const accentMat=mat(d.kind==='hostile'?0x9eea61:0xe7c26a)
  const parts={legs:[],wings:[],head:null,body:null,tail:null}

  const tall=d.tall, wide=d.wide, flying=d.flying
  const bodyW=wide?1.55:(tall?.72:1.08), bodyH=tall?1.5:(wide?.58:.9), bodyD=wide?1.22:(tall?.52:.72)
  parts.body=addPart(group,boxGeo(bodyW,bodyH,bodyD),bodyMat,[0,tall?1.22:.76,0])
  parts.head=addPart(group,boxGeo(tall?.58:.68,tall?.66:.66,tall?.58:.66),headMat,[0,tall?2.22:1.34,-(wide?.56:.54)])

  // Ojos con pupila
  const eyeY=tall?2.30:1.43, eyeZ=tall?-.86:-.88, eyeX=tall?.17:.20
  for(const sx of [-1,1]){
    addPart(group,boxGeo(.14,.14,.055),whiteMat,[sx*eyeX,eyeY,eyeZ])
    const eyeColor=(d.kind==='hostile'||d.id==='enderman')?(d.id==='mzThor'?0x55ffff:0xccff66):0x202124
    const pupilMat=mat(eyeColor,{emissive:d.kind==='hostile'?eyeColor:0x000000,emissiveIntensity:d.kind==='hostile'?.35:0})
    addPart(group,boxGeo(.065,.075,.03),pupilMat,[sx*eyeX,eyeY,eyeZ-.043])
  }

  // Patas o alas
  if(!flying){
    const legH=tall?1.0:(wide?.45:.66), legY=tall?.42:(wide?.22:.18)
    const legXs=wide?[-.55,.55]:[-.34,.34]
    const legZs=wide?[-.34,.34]:[-.22,.22]
    for(const lx of legXs)for(const lz of legZs){
      const leg=addPart(group,boxGeo(wide?.22:.20,legH,wide?.26:.20),bodyMat,[lx,legY,lz])
      parts.legs.push(leg)
    }
  }else{
    const wingMat=mat(0x87ceeb,{transparent:true,opacity:.86})
    const left=addPart(group,boxGeo(.72,.10,.48),wingMat,[-.65,.92,.05],null,[0,0,.15])
    const right=addPart(group,boxGeo(.72,.10,.48),wingMat,[.65,.92,.05],null,[0,0,-.15])
    parts.wings.push(left,right)
  }

  // Rasgos específicos por especie
  const ears=(color=headMat,size=.16)=>{
    addPart(group,boxGeo(size,.28,.12),color,[-.23,tall?2.62:1.73,-.52],null,[0,0,-.18])
    addPart(group,boxGeo(size,.28,.12),color,[.23,tall?2.62:1.73,-.52],null,[0,0,.18])
  }
  const snout=(color=headMat,w=.38,h=.2,dpth=.26)=>addPart(group,boxGeo(w,h,dpth),color,[0,tall?2.13:1.30,tall?-.91:-.94])
  const tail=(color=bodyMat,len=.55)=>{parts.tail=addPart(group,boxGeo(.16,.16,len),color,[0,tall?1.22:.78,.52],null,[.35,0,0])}
  const horns=()=>{
    addPart(group,boxGeo(.09,.30,.09),whiteMat,[-.22,tall?2.63:1.72,-.54],null,[0,0,-.25])
    addPart(group,boxGeo(.09,.30,.09),whiteMat,[.22,tall?2.63:1.72,-.54],null,[0,0,.25])
  }

  if(['cow','pig','sheep','goat','camel','llama','horse'].includes(d.id)){snout();ears();tail()}
  if(d.id==='cow'||d.id==='goat')horns()
  if(d.id==='pig')snout(mat(0xf4a2aa),.42,.19,.28)
  if(d.id==='sheep'){
    const wool=mat(0xf0eee8)
    for(const p of [[-.48,1.02,.05],[.48,1.02,.05],[0,1.15,.34],[0,1.15,-.32]])addPart(group,boxGeo(.42,.42,.25),wool,p)
  }
  if(d.id==='rabbit'){
    addPart(group,boxGeo(.15,.60,.14),headMat,[-.18,1.85,-.50],null,[0,0,-.08])
    addPart(group,boxGeo(.15,.60,.14),headMat,[.18,1.85,-.50],null,[0,0,.08])
    tail(whiteMat,.25)
  }
  if(['wolf','fox','cat'].includes(d.id)){ears();snout();tail()}
  if(d.id==='chicken'){
    const beak=mat(0xe8b23f);addPart(group,boxGeo(.24,.13,.28),beak,[0,1.34,-.96])
    addPart(group,boxGeo(.14,.20,.12),mat(0xc92f32),[0,1.15,-.89])
    for(const sx of [-1,1])parts.wings.push(addPart(group,boxGeo(.12,.50,.48),bodyMat,[sx*.58,.82,.02],null,[0,0,sx*.2]))
  }
  if(d.id==='bee'){
    for(const z of [-.18,.18])addPart(group,boxGeo(1.08,.92,.12),darkMat,[0,.76,z])
    addPart(group,boxGeo(.06,.33,.06),darkMat,[-.17,1.68,-.59],null,[.25,0,0])
    addPart(group,boxGeo(.06,.33,.06),darkMat,[.17,1.68,-.59],null,[.25,0,0])
  }
  if(d.id==='frog'){
    parts.body.scale.set(1.15,.58,1.05);parts.head.position.y=1.10
    addPart(group,sphereGeo(.13),whiteMat,[-.22,1.47,-.55]);addPart(group,sphereGeo(.13),whiteMat,[.22,1.47,-.55])
  }
  if(d.id==='panda'){
    addPart(group,boxGeo(.23,.23,.05),darkMat,[-.21,1.43,-.89]);addPart(group,boxGeo(.23,.23,.05),darkMat,[.21,1.43,-.89])
    ears(darkMat,.20)
  }
  if(d.id==='spider'){
    for(const side of [-1,1])for(let i=0;i<4;i++)addPart(group,boxGeo(.72,.09,.10),darkMat,[side*(.72+i*.04),.48,-.42+i*.28],null,[0,(i-1.5)*.16,side*.18])
    for(const sx of [-.18,-.06,.06,.18])addPart(group,boxGeo(.055,.055,.03),mat(0xff4b4b,{emissive:0xff2020,emissiveIntensity:.5}),[sx,1.30,-.91])
  }
  if(d.id==='creeper'){
    addPart(group,boxGeo(.12,.15,.035),darkMat,[-.17,1.44,-.90]);addPart(group,boxGeo(.12,.15,.035),darkMat,[.17,1.44,-.90])
    addPart(group,boxGeo(.20,.11,.035),darkMat,[0,1.22,-.90]);addPart(group,boxGeo(.10,.13,.035),darkMat,[-.07,1.13,-.90]);addPart(group,boxGeo(.10,.13,.035),darkMat,[.07,1.13,-.90])
  }
  if(d.id==='skeleton'){
    parts.body.scale.set(.55,1,1);for(const leg of parts.legs)leg.scale.x=.55
    addPart(group,boxGeo(.45,.06,.08),darkMat,[0,1.54,-.89])
  }
  if(d.id==='zombie'||d.id==='drowned'){
    addPart(group,boxGeo(.18,.18,.72),bodyMat,[-.42,1.22,-.42],null,[Math.PI/2.25,0,0])
    addPart(group,boxGeo(.18,.18,.72),bodyMat,[.42,1.22,-.42],null,[Math.PI/2.25,0,0])
  }
  if(d.id==='witch'){
    addPart(group,boxGeo(.90,.12,.90),darkMat,[0,1.78,-.50]);addPart(group,boxGeo(.38,.50,.38),darkMat,[0,2.02,-.50])
    snout(headMat,.14,.18,.34)
  }
  if(d.kind==='villager'){
    snout(headMat,.16,.20,.34)
    const robe=mat(d.id==='trader'?0x395f83:(d.body??0x79513e))
    addPart(group,boxGeo(1.12,.45,.76),robe,[0,.52,0])
    addPart(group,boxGeo(.70,.16,.18),robe,[0,1.18,-.53],null,[0,0,.08])
  }

  // ---------- MARVEL ZOMBIES MODELS ----------
  if(d.marvelZombie){
    const sick=mat(0x6f8f63);addPart(group,boxGeo(.16,.08,.04),sick,[-.18,1.48,-.91]);addPart(group,boxGeo(.16,.08,.04),sick,[.18,1.48,-.91])
    if(d.id==='mzIron'){
      addPart(group,boxGeo(.28,.28,.04),mat(0x9fe9ff,{emissive:0x66ccff,emissiveIntensity:.9}),[0,1.18,-.61])
      addPart(group,boxGeo(.82,.22,.62),mat(0x9f2e2d),[0,1.62,0])
    }
    if(d.id==='mzCap'){
      const shield=addPart(group,new THREE.CylinderGeometry(.48,.48,.10,18),mat(0x355e9c),[-.68,1.05,-.10],null,[0,0,Math.PI/2]);shield.rotation.y=.2
      addPart(group,new THREE.CylinderGeometry(.30,.30,.115,18),mat(0xd7d7d7),[-.68,1.05,-.10],null,[0,0,Math.PI/2])
    }
    if(d.id==='mzWolverine'){
      for(const side of [-1,1])for(let i=-1;i<=1;i++)addPart(group,boxGeo(.035,.035,.62),mat(0xd8d8d0),[side*.52,.72,-.48+i*.07],null,[Math.PI/2,0,0])
    }
    if(d.id==='mzSpider'){
      for(const sx of [-.18,.18])addPart(group,boxGeo(.18,.25,.04),whiteMat,[sx,1.48,-.91])
    }
    if(d.id==='mzHulk'){
      parts.body.scale.set(1.55,1.55,1.35);parts.head.scale.set(1.28,1.2,1.18);parts.head.position.y+=.35;parts.legs.forEach(l=>l.scale.set(1.35,1.25,1.35))
    }
    if(d.id==='mzStrange'){
      addPart(group,boxGeo(1.12,.10,.78),mat(0x8e3138),[0,1.52,.25],null,[.18,0,0]);addPart(group,boxGeo(.34,.08,.10),mat(0xe8b24c),[0,1.70,-.55])
    }
    if(d.id==='mzThanos'){
      parts.body.scale.set(1.35,1.35,1.25);parts.head.position.y+=.22
      addPart(group,boxGeo(.30,.42,.32),mat(0xc9a03b,{emissive:0x503700,emissiveIntensity:.25}),[-.48,.83,-.20])
    }
    if(d.id==='mzThor'){
      addPart(group,boxGeo(.08,.36,.18),mat(0xd8d8d8),[-.36,tall?2.65:1.75,-.52],null,[0,0,-.25])
      addPart(group,boxGeo(.08,.36,.18),mat(0xd8d8d8),[.36,tall?2.65:1.75,-.52],null,[0,0,.25])
      addPart(group,boxGeo(1.1,1.4,.08),mat(0xb32424),[0,tall?1.2:.8,.45],null,[.15,0,0])
      addPart(group,boxGeo(.24,.36,.24),mat(0x8899aa,{emissive:0x336699,emissiveIntensity:.3}),[.52,.8,-.3],null,[Math.PI/2,0,0])
    }
    if(d.id==='mzScarlet'){
      addPart(group,boxGeo(.58,.22,.1),mat(0xd92632),[0,tall?2.55:1.68,-.65])
      addPart(group,boxGeo(1.1,.12,.8),mat(0x8a1c22),[0,tall?1.4:.9,.2])
    }
    if(d.id==='mzDeadpool'){
      addPart(group,boxGeo(.06,1.2,.06),mat(0xdcdcdc),[-.16,tall?1.4:.9,.42],null,[0,0,.45])
      addPart(group,boxGeo(.06,1.2,.06),mat(0xdcdcdc),[.16,tall?1.4:.9,.42],null,[0,0,-.45])
      for(const sx of [-.18,.18])addPart(group,boxGeo(.18,.18,.04),darkMat,[sx,tall?2.28:1.44,-.88])
    }
    if(d.id==='mzVenom'){
      parts.body.scale.set(1.4,1.4,1.3);parts.head.scale.set(1.2,1.1,1.2);parts.head.position.y+=.2
      addPart(group,boxGeo(.68,.52,.05),whiteMat,[0,tall?1.4:.9,-.58])
      addPart(group,boxGeo(.14,.08,.62),mat(0xeb3f67),[0,tall?1.9:1.15,-1.3],null,[.28,0,0])
      for(const sx of [-1,1])addPart(group,boxGeo(.12,.72,.12),darkMat,[sx*.48,tall?1.8:1.2,.45],null,[.4,0,sx*.3])
    }
    if(d.id==='mzSymbioteSpider'){
      parts.body.scale.set(1.05,1.1,1.05)
      addPart(group,boxGeo(.55,.45,.06),whiteMat,[0,tall?1.3:.82,-.55])
      for(const sx of [-.18,.18])addPart(group,boxGeo(.18,.25,.04),whiteMat,[sx,tall?2.25:1.42,-.90])
      for(const sx of [-1,1]){
        addPart(group,boxGeo(.08,.60,.08),darkMat,[sx*.42,tall?1.6:1.05,.25],null,[.3,0,sx*.25])
        addPart(group,boxGeo(.06,.40,.06),mat(0x9922cc,{emissive:0x661199,emissiveIntensity:.4}),[sx*.48,tall?1.3:.8,-.35])
      }
    }
    if(d.id==='mzCarnage'){
      parts.body.scale.set(1.25,1.35,1.15);parts.head.scale.set(1.15,1.08,1.15);parts.head.position.y+=.15
      const carnageBlack=mat(0x180404)
      for(const sx of [-1,1]){
        addPart(group,boxGeo(.10,1.1,.10),mat(0xb81414),[sx*.38,tall?1.8:1.2,.40],null,[.5,0,sx*.4])
        addPart(group,boxGeo(.08,.90,.08),carnageBlack,[sx*.25,tall?2.1:1.5,.35],null,[-.4,0,sx*.3])
        addPart(group,boxGeo(.08,.50,.08),mat(0xb81414),[sx*.55,tall?1.1:.7,-.4],null,[Math.PI/2,0,0])
      }
      for(const sx of [-.18,.18])addPart(group,boxGeo(.14,.18,.05),whiteMat,[sx,tall?2.32:1.48,-.92])
    }
    if(d.id==='mzBlackPanther'){
      parts.body.scale.set(1.05,1.08,1.05)
      // Orejas felinas
      addPart(group,boxGeo(.12,.22,.08),darkMat,[-.22,tall?2.62:1.72,-.48],null,[0,0,-.2])
      addPart(group,boxGeo(.12,.22,.08),darkMat,[.22,tall?2.62:1.72,-.48],null,[0,0,.2])
      // Ojos y líneas cinéticas moradas
      const vibranium=mat(0xa844ff,{emissive:0x7711cc,emissiveIntensity:.7})
      for(const sx of [-.18,.18])addPart(group,boxGeo(.10,.08,.04),vibranium,[sx,tall?2.28:1.44,-.90])
      addPart(group,boxGeo(.45,.06,.06),vibranium,[0,tall?1.35:.88,-.54])
      for(const sx of [-1,1])addPart(group,boxGeo(.04,.28,.14),mat(0xdadad0),[sx*.48,tall?1.05:.65,-.42],null,[Math.PI/2,0,0])
    }
  }

  // ---------- JURASSIC WORLD REBORN DINOSAURS ----------
  if(d.dinosaur){
    parts.body.scale.set(d.id==='dinoLongneck'?1.45:1.35,d.id==='dinoAnky'?.72:.9,d.id==='dinoTrike'?1.35:1.55)
    parts.head.position.z=-1.08
    if(d.id==='dinoRex'){parts.head.scale.set(1.25,1.05,1.35);parts.body.scale.set(1.4,1.25,1.8)}
    if(d.id==='dinoLongneck'){
      const neck=addPart(group,boxGeo(.38,2.2,.38),bodyMat,[0,2.1,-.36],null,[-.25,0,0]);parts.head.position.set(0,3.25,-.82);parts.head.scale.set(.72,.72,.82)
    }
    if(d.id==='dinoTrike'){
      addPart(group,boxGeo(1.05,.65,.16),headMat,[0,1.48,-1.00])
      for(const sx of [-1,1])addPart(group,boxGeo(.09,.55,.09),whiteMat,[sx*.34,1.58,-1.38],null,[1.05,0,sx*.16])
      addPart(group,boxGeo(.10,.72,.10),whiteMat,[0,1.50,-1.42],null,[1.12,0,0])
    }
    if(d.id==='dinoAnky'){
      parts.body.scale.set(1.5,.72,1.65)
      for(let i=-2;i<=2;i++)for(const sx of [-1,1])addPart(group,boxGeo(.16,.16,.16),accentMat,[sx*.58,.95,i*.24])
      parts.tail=addPart(group,boxGeo(.25,.20,1.15),bodyMat,[0,.78,.95],null,[-.08,0,0]);addPart(group,boxGeo(.62,.46,.50),accentMat,[0,.77,1.55])
    }else if(d.id!=='dinoPtero'){
      parts.tail=addPart(group,boxGeo(.22,.22,1.45),bodyMat,[0,tall?1.3:.82,.95],null,[-.18,0,0])
    }
    if(d.id==='dinoRaptor'){
      for(const sx of [-1,1])addPart(group,boxGeo(.12,.36,.12),accentMat,[sx*.34,.22,-.25],null,[0,0,sx*.3])
      addPart(group,boxGeo(.48,.12,.32),accentMat,[0,1.55,-.72])
      for(let i=-2;i<=2;i++)addPart(group,boxGeo(.07,.18,.08),accentMat,[0,1.62,i*.18],null,[0,0,.12])
    }
    if(d.carnivore){
      const tooth=mat(0xf2ead4)
      for(const sx of [-.22,-.08,.08,.22])addPart(group,boxGeo(.055,.12,.055),tooth,[sx,tall?2.00:1.17,-1.35],null,[.15,0,0])
    }
    if(d.id==='dinoRex'){
      for(let i=0;i<5;i++)addPart(group,boxGeo(.09,.22,.10),accentMat,[0,1.72,(-.55+i*.30)],null,[0,0,.10])
    }
    if(d.id==='dinoPtero'){
      parts.body.scale.set(.9,.55,1.4);parts.head.position.set(0,1.22,-.88);parts.head.scale.set(.72,.58,1.1)
      parts.wings.forEach((w,i)=>{w.scale.set(2.35,.55,1.75);w.position.x=(i?1:-1)*1.15})
      addPart(group,boxGeo(.18,.16,.75),headMat,[0,1.18,-1.45])
    }
    if(d.id==='dinoSpino'){
      parts.head.scale.set(1.25,.95,1.6);parts.body.scale.set(1.4,1.25,1.9)
      addPart(group,boxGeo(.16,1.4,2.2),mat(0xb83a30),[0,tall?2.1:1.55,0])
      for(let i=0;i<4;i++)addPart(group,boxGeo(.08,.22,.08),accentMat,[0,tall?2.85:2.3,-.8+i*.5])
    }
    if(d.id==='dinoDilopho'){
      parts.body.scale.set(1.15,.85,1.25)
      for(const sx of [-1,1])addPart(group,boxGeo(.06,.42,.75),mat(0xd93829),[sx*.15,tall?2.4:1.6,-.8],null,[0,0,sx*.15])
      addPart(group,boxGeo(1.25,.82,.08),mat(0xe5aa2c),[0,tall?1.8:1.15,-.65])
    }
    if(d.id==='dinoCarnotaur'){
      parts.head.scale.set(1.15,1.05,1.25);parts.body.scale.set(1.3,1.15,1.55)
      for(const sx of [-1,1])addPart(group,boxGeo(.12,.38,.12),whiteMat,[sx*.24,tall?2.5:1.72,-1.05],null,[.55,0,sx*.35])
    }
  }

  return parts
}

export function createMobSystem(scene,heightProvider=terrainHeight){
  const mobs=[]

  function makeMob(typeIndex,x,y,z){
    const d=MOB_TYPES[typeIndex],g=new THREE.Group();g.position.set(x,y,z)
    const parts=buildDetailedMob(g,d)
    if(d.npc)addNameTag(g,d.name,d.tall?3.35:2.45)
    scene.add(g)
    const m={group:g,parts,type:typeIndex,hp:d.hp,maxHp:d.hp,state:'wander',dir:Math.random()*Math.PI*2,stateTimer:1+Math.random()*4,thinkTimer:0,home:new THREE.Vector3(x,y,z),target:null,targetMob:null,walkPhase:Math.random()*Math.PI*2,profession:d.kind==='villager'?(d.defaultRole??['granjero','constructor','bibliotecario','explorador'][Math.floor(Math.random()*4)]):null,npcRole:d.defaultRole??null,npcMode:null,npcStructure:null,npcQuestDone:false,npcAidCooldown:0,actionTimer:0,tamed:false,friendOfPlayer:false,captive:false,captiveRadius:3,fixedY:null,bond:0,rescued:false}
    g.userData.mob=m
    g.traverse(o=>o.userData.mob=m)
    mobs.push(m);return m
  }
  function removeMob(m){scene.remove(m.group);const i=mobs.indexOf(m);if(i>=0)mobs.splice(i,1)}
  function clearAll(){
    for(const m of [...mobs])scene.remove(m.group)
    mobs.length=0
  }
  function nearest(from,filter,max=14){let best=null,bd=max;for(const m of mobs){if(!filter(m))continue;const d=from.distanceTo(m.group.position);if(d<bd){best=m;bd=d}}return best}
  function think(m,player,daylight){
    const d=MOB_TYPES[m.type],dist=m.group.position.distanceTo(player)
    if(m.tamed||m.friendOfPlayer){
      if(dist>4){m.state='follow';m.target=player.clone()}else{m.state='wander';m.target=null}
      return
    }
    if(m.captive){
      const homeDist=m.group.position.distanceTo(m.home)
      if(homeDist>m.captiveRadius){m.state='home';m.target=m.home.clone()}else{m.state='wander';m.dir+=(-1+Math.random()*2)*1.2;m.target=null}
      return
    }
    if((d.kind==='hostile'||(d.dinosaur&&d.carnivore))&&dist<16){m.state='chase';m.target=player.clone();return}
    if(d.dinosaur&&d.herbivore&&dist<4){m.state='avoid';m.target=player.clone();return}
    if(m.state==='flee'&&m.stateTimer>0)return
    if(d.kind==='villager'){
      const hostile=nearest(m.group.position,o=>{const od=MOB_TYPES[o.type];return od.kind==='hostile'||(od.dinosaur&&od.carnivore&&!o.tamed)},11)
      if(hostile){
        if(['guardia','superviviente','explorador'].includes(m.npcRole)){m.state='guard';m.target=hostile.group.position.clone();m.targetMob=hostile;return}
        m.state='flee';m.target=hostile.group.position.clone();m.stateTimer=2.5;return
      }
      if(daylight<.15&&m.npcRole!=='superviviente'){m.state='home';m.target=m.home.clone();return}
      if(m.npcRole==='medico'){
        const hurt=nearest(m.group.position,o=>o!==m&&MOB_TYPES[o.type].kind==='villager'&&o.hp<o.maxHp,10)
        if(hurt){m.state='work';m.target=hurt.group.position.clone();m.targetMob=hurt;return}
      }
      const friend=nearest(m.group.position,o=>o!==m&&MOB_TYPES[o.type].kind==='villager',8)
      if(friend&&Math.random()<.30){m.state='socialize';m.target=friend.group.position.clone();return}
      if(Math.random()<.58){m.state='work';const radius=['constructor','ingeniero','cientifico','paleontologo'].includes(m.npcRole)?6:10;m.target=m.home.clone().add(new THREE.Vector3((Math.random()-.5)*radius,0,(Math.random()-.5)*radius));return}
    }
    if(d.kind==='guardian'){
      const hostile=nearest(m.group.position,o=>MOB_TYPES[o.type].kind==='hostile',12)
      if(hostile){m.state='guard';m.target=hostile.group.position.clone();return}
    }
    if(d.kind==='passive'&&dist<3){m.state='avoid';m.target=player.clone();return}
    m.state='wander';m.dir+=(-1+Math.random()*2)*2.3;m.target=null
  }
  function animateMob(m,dt,moving){
    const d=MOB_TYPES[m.type]
    m.walkPhase+=dt*(moving?8:2)
    const swing=Math.sin(m.walkPhase)*(moving?.55:.08)
    m.parts.legs.forEach((leg,i)=>leg.rotation.x=(i%2?swing:-swing))
    m.parts.wings.forEach((wing,i)=>wing.rotation.z=(i?1:-1)*(.18+Math.sin(m.walkPhase*1.7)*.48))
    if(m.parts.head)m.parts.head.rotation.y=Math.sin(m.walkPhase*.22)*.10
    if(m.parts.tail)m.parts.tail.rotation.y=Math.sin(m.walkPhase*.45)*.25
  }
  function update(dt,player,daylight){
    for(let i=mobs.length-1;i>=0;i--){
      const m=mobs[i],d=MOB_TYPES[m.type]
      m.stateTimer-=dt;m.thinkTimer-=dt;m.npcAidCooldown=Math.max(0,m.npcAidCooldown-dt)
      if(m.webbed>0)m.webbed=Math.max(0,m.webbed-dt)
      if(m.thinkTimer<=0){m.thinkTimer=.45+Math.random()*.35;think(m,player,daylight)}
      let moving=false,speed=(d.speed??1)*2.2*dt
      if(m.webbed>0)speed*=0.08
      if(m.state==='chase'&&m.target){
        const v=m.target.clone().sub(m.group.position);v.y=0
        if(v.lengthSq()>.25){v.normalize();m.group.position.addScaledVector(v,speed*1.28);m.group.rotation.y=Math.atan2(-v.x,-v.z);moving=true}
      }else if(m.state==='avoid'&&m.target){
        const v=m.group.position.clone().sub(m.target);v.y=0
        if(v.lengthSq()>.05){v.normalize();m.group.position.addScaledVector(v,speed*1.15);m.group.rotation.y=Math.atan2(-v.x,-v.z);moving=true}
      }else if(m.state==='follow'&&m.target){
        const v=m.target.clone().sub(m.group.position);v.y=0
        if(v.lengthSq()>4.0){v.normalize();m.group.position.addScaledVector(v,speed*1.2);m.group.rotation.y=Math.atan2(-v.x,-v.z);moving=true}
      }else if(m.state==='flee'&&m.target){
        const v=m.group.position.clone().sub(m.target);v.y=0
        if(v.lengthSq()>.05){v.normalize();m.group.position.addScaledVector(v,speed*1.35);m.group.rotation.y=Math.atan2(-v.x,-v.z);moving=true}
      }else if(m.state==='work'&&m.target){
        const v=m.target.clone().sub(m.group.position);v.y=0
        if(v.lengthSq()>.35){v.normalize();m.group.position.addScaledVector(v,speed*.8);m.group.rotation.y=Math.atan2(-v.x,-v.z);moving=true}
      }else if(m.state==='guard'&&m.target){
        const v=m.target.clone().sub(m.group.position);v.y=0
        if(v.lengthSq()>.55){v.normalize();m.group.position.addScaledVector(v,speed*1.2);m.group.rotation.y=Math.atan2(-v.x,-v.z);moving=true}
        if(m.targetMob&&m.group.position.distanceTo(m.targetMob.group.position)<1.8){hit(m.targetMob,3,m.group.position);m.state='wander'}
      }else{
        const vx=Math.sin(m.dir)*speed*.55,vz=Math.cos(m.dir)*speed*.55
        m.group.position.x+=vx;m.group.position.z+=vz;m.group.rotation.y=m.dir+Math.PI;moving=true
      }
      if(m.fixedY!==null){
        m.group.position.y=m.fixedY
      }else{
        const ground=heightProvider(m.group.position.x,m.group.position.z)+(d.flying?2.8:1)
        m.group.position.y+=(ground-m.group.position.y)*Math.min(1,dt*8)
      }
      animateMob(m,dt,moving)
    }
  }
  function hit(m,dmg=1,attackerPos=null){
    m.hp-=dmg
    if(attackerPos){
      const away=m.group.position.clone().sub(attackerPos);away.y=0
      if(away.lengthSq()>.01){away.normalize();m.group.position.addScaledVector(away,.65)}
    }
    if(m.hp<=0){removeMob(m);return true}
    return false
  }
  function ensurePopulation(pos,mode='normal',daylight=1,safeDist=35){
    if(mobs.length>=75)return
    const list=MOB_TYPES.map((m,i)=>({m,i})).filter(x=>mode==='marvel'?x.m.marvelZombie:mode==='dino'?x.m.dinosaur:(daylight>.3?!x.m.kind.includes('hostile'):true))
    if(!list.length)return
    
    // Si estamos en Marvel y lejos de la ciudad / base (> safeDist), aparecen hordas densas tanto de día como de noche
    const distToCenter=Math.hypot(pos.x,pos.z)
    const isWilderness=mode==='marvel'&&distToCenter>safeDist
    const spawnCount=isWilderness?(Math.random()<.6?2:3):1

    for(let k=0;k<spawnCount;k++){
      if(mobs.length>=75)break
      const pick=list[Math.floor(Math.random()*list.length)]
      const a=Math.random()*Math.PI*2,d=(isWilderness?20:16)+Math.random()*32,x=pos.x+Math.sin(a)*d,z=pos.z+Math.cos(a)*d
      makeMob(pick.i,x,heightProvider(x,z)+1,z)
    }
  }
  return {mobs,makeMob,removeMob,clearAll,update,hit,ensurePopulation,setHeightProvider:h=>heightProvider=h}
}
