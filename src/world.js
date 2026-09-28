import * as THREE from 'three'
import { BLOCK_INDEX, BIOMES } from './data.js'
import { geometryForBlock, CUBE_UNIT } from './textures.js'

export const CHUNK_SIZE=12
export const VIEW_DISTANCE=2
export const WATER_LEVEL=2
export const FAR_LANDS_DISTANCE=2048

const hash=(x,z,seed=1337)=>{
  let n=(x*374761393+z*668265263+seed*69069)|0;n=(n^(n>>>13))*1274126177;n^=n>>>16;return (n>>>0)/4294967295
}
const smooth=(x,z,s=.035)=>Math.sin(x*s)*.45+Math.cos(z*s*1.07)*.35+Math.sin((x+z)*s*.51)*.20

export function climateAt(x,z){
  const temp=.5+.35*smooth(x+400,z-200,.012)+.15*(hash(Math.floor(x/50),Math.floor(z/50))-0.5)
  const wet=.5+.38*smooth(x-700,z+500,.015)+.12*(hash(Math.floor(x/60),Math.floor(z/60),55)-0.5)
  return {temp,wet}
}

export function biomeAt(x,z){
  const {temp,wet}=climateAt(x,z)
  const base=terrainHeightRaw(x,z)
  if(base<=WATER_LEVEL+1)return BIOMES.find(b=>b.id==='beach')
  if(base>14)return BIOMES.find(b=>b.id==='mountains')
  const rare=hash(Math.floor(x/180),Math.floor(z/180),900)
  if(rare>.94&&wet>.45)return BIOMES.find(b=>b.id==='mushroom')
  if(temp<.28)return wet>.52?BIOMES.find(b=>b.id==='taiga'):BIOMES.find(b=>b.id==='snow')
  if(temp>.72){if(wet<.30)return BIOMES.find(b=>b.id==='desert');if(wet>.68)return BIOMES.find(b=>b.id==='jungle');return BIOMES.find(b=>b.id==='savanna')}
  if(wet>.72)return BIOMES.find(b=>b.id==='swamp')
  if(wet>.53)return BIOMES.find(b=>b.id==='forest')
  if(wet<.22&&temp>.55)return BIOMES.find(b=>b.id==='badlands')
  return BIOMES.find(b=>b.id==='plains')
}

function terrainHeightRaw(x,z){
  return 5+smooth(x,z,.06)*4+smooth(x+900,z-700,.018)*6+smooth(x-200,z+800,.006)*7
}

export function terrainHeight(x,z){
  let h=terrainHeightRaw(x,z)
  const biome=biomeAtNoHeight(x,z,h)
  if(biome.id==='mountains')h+=Math.abs(smooth(x*2,z*2,.05))*6
  if(biome.id==='swamp')h=Math.min(h,4)
  const d=Math.max(Math.abs(x),Math.abs(z))
  if(d>FAR_LANDS_DISTANCE){
    const over=d-FAR_LANDS_DISTANCE
    const wall=Math.abs(Math.sin(x*.17)*Math.cos(z*.13))*Math.min(48,8+over*.035)
    h+=wall+((Math.floor(x/7)+Math.floor(z/7))%3===0?8:0)
  }
  return Math.max(-3,Math.min(62,Math.round(h)))
}
function biomeAtNoHeight(x,z,h){
  const {temp,wet}=climateAt(x,z)
  if(h<=WATER_LEVEL+1)return BIOMES.find(b=>b.id==='beach')
  if(h>14)return BIOMES.find(b=>b.id==='mountains')
  if(temp<.28)return wet>.52?BIOMES.find(b=>b.id==='taiga'):BIOMES.find(b=>b.id==='snow')
  if(temp>.72){if(wet<.30)return BIOMES.find(b=>b.id==='desert');if(wet>.68)return BIOMES.find(b=>b.id==='jungle');return BIOMES.find(b=>b.id==='savanna')}
  if(wet>.72)return BIOMES.find(b=>b.id==='swamp')
  if(wet>.53)return BIOMES.find(b=>b.id==='forest')
  return BIOMES.find(b=>b.id==='plains')
}

export function createWorld(scene,materials){
  const cubeGeo=CUBE_UNIT,blocks=[],blockMap=new Map(),chunks=new Map(),edits=new Map(),structures=[],dungeonZones=[]
  let dimension='overworld'
  let gameMode='normal'
  const dimensionEdits={overworld:edits,ember:new Map()}
  const keyFor=(x,y,z)=>`${Math.round(x)},${Math.round(y)},${Math.round(z)}`
  const chunkKey=(cx,cz)=>`${cx},${cz}`

  function addBlock(x,y,z,type=0,ownerChunk=null,generated=false){
    x=Math.round(x);y=Math.round(y);z=Math.round(z);const k=keyFor(x,y,z);if(blockMap.has(k))return null
    const activeEdits=dimensionEdits[dimension]
    if(generated&&activeEdits.get(k)==='air')return null
    const override=generated&&typeof activeEdits.get(k)==='number'?activeEdits.get(k):type
    const b=new THREE.Mesh(geometryForBlock(override),materials[override]??materials[0]);b.position.set(x,y,z);b.userData.typeIndex=override;b.userData.chunk=ownerChunk;b.castShadow=y>WATER_LEVEL-2;b.receiveShadow=true
    scene.add(b);blocks.push(b);blockMap.set(k,b);if(ownerChunk)chunks.get(ownerChunk)?.blocks.push(b);return b
  }
  function removeMesh(b){blockMap.delete(keyFor(b.position.x,b.position.y,b.position.z));scene.remove(b);const i=blocks.indexOf(b);if(i>=0)blocks.splice(i,1)}
  function removeBlock(b,record=true){if(record)dimensionEdits[dimension].set(keyFor(b.position.x,b.position.y,b.position.z),'air');removeMesh(b)}
  function placeBlock(x,y,z,type){const k=keyFor(x,y,z);dimensionEdits[dimension].set(k,type);return addBlock(x,y,z,type,null,false)}

  function makeTree(x,y,z,kind,ck){
    const trunk=kind==='jungle'?6:kind==='taiga'?44:6,leaf=8,height=kind==='jungle'?7:kind==='taiga'?6:4
    for(let i=1;i<=height;i++)addBlock(x,y+i,z,trunk,ck,true)
    const radius=kind==='jungle'?2:kind==='taiga'?2:2
    for(let dx=-radius;dx<=radius;dx++)for(let dz=-radius;dz<=radius;dz++)for(let dy=height-2;dy<=height+1;dy++)if(Math.abs(dx)+Math.abs(dz)<4)addBlock(x+dx,y+dy,z+dz,leaf,ck,true)
  }
  function cactus(x,y,z,ck){for(let i=1;i<=2+Math.floor(hash(x,z,3)*3);i++)addBlock(x,y+i,z,BLOCK_INDEX.bamboo,ck,true)}
  function mushroom(x,y,z,ck){for(let i=1;i<=3;i++)addBlock(x,y+i,z,BLOCK_INDEX.bone,ck,true);for(let dx=-2;dx<=2;dx++)for(let dz=-2;dz<=2;dz++)if(Math.abs(dx)+Math.abs(dz)<4)addBlock(x+dx,y+4,z+dz,BLOCK_INDEX.mushroom,ck,true)}

  function addPillar(x,y,z,h,type,ck){for(let yy=0;yy<h;yy++)addBlock(x,y+yy,z,type,ck,true)}
  function isDungeonAir(x,y,z){
    return dungeonZones.some(q=>Math.abs(x-q.x)<q.hx&&Math.abs(z-q.z)<q.hz&&y>=q.minY&&y<=q.maxY)
  }
  function makeUndergroundDungeon(x,y,z,w,d,ck,label='Calabozo'){
    const hx=Math.max(3,Math.floor(w/2)),hz=Math.max(3,Math.floor(d/2))
    const floorY=y-10,ceilingY=y-4,wall=gameMode==='marvel'?(BLOCK_INDEX.reinforcedWall??BLOCK_INDEX.blackstone):gameMode==='dino'?(BLOCK_INDEX.fossilBrick??BLOCK_INDEX.bone):BLOCK_INDEX.cobble
    const trim=gameMode==='marvel'?(BLOCK_INDEX.steelPlate??BLOCK_INDEX.iron):gameMode==='dino'?(BLOCK_INDEX.bone??BLOCK_INDEX.quartz):BLOCK_INDEX.darkPlanks
    const light=BLOCK_INDEX.scannerLight??BLOCK_INDEX.powerLamp??BLOCK_INDEX.glow
    const zone={x,z,hx,hz,minY:floorY+1,maxY:ceilingY-1};dungeonZones.push(zone)
    for(let dx=-hx+1;dx<=hx-1;dx++)for(let dz=-hz+1;dz<=hz-1;dz++)for(let yy=floorY+1;yy<=ceilingY-1;yy++){const b=blockMap.get(keyFor(x+dx,yy,z+dz));if(b)removeMesh(b)}
    for(let dx=-hx;dx<=hx;dx++)for(let dz=-hz;dz<=hz;dz++){addBlock(x+dx,floorY,z+dz,wall,ck,true);addBlock(x+dx,ceilingY,z+dz,trim,ck,true)}
    for(let yy=floorY+1;yy<ceilingY;yy++)for(let dx=-hx;dx<=hx;dx++)for(const dz of [-hz,hz])addBlock(x+dx,yy,z+dz,wall,ck,true)
    for(let yy=floorY+1;yy<ceilingY;yy++)for(let dz=-hz+1;dz<hz;dz++)for(const dx of [-hx,hx])addBlock(x+dx,yy,z+dz,wall,ck,true)
    const fence=BLOCK_INDEX.electricFence??BLOCK_INDEX.iron
    for(let dz=-2;dz<=2;dz++){addBlock(x-2,floorY+1,z+dz,fence,ck,true);addBlock(x+2,floorY+1,z+dz,fence,ck,true)}
    for(let dx=-1;dx<=1;dx++){addBlock(x+dx,floorY+1,z-2,fence,ck,true);if(dx!==0)addBlock(x+dx,floorY+1,z+2,fence,ck,true)}
    addBlock(x,floorY+1,z-3,light,ck,true);addBlock(x-hx+2,floorY+1,z-hz+2,BLOCK_INDEX.chest,ck,true)
    if(gameMode==='dino'){addBlock(x+hx-2,floorY+1,z-hz+2,BLOCK_INDEX.dinoCrate??BLOCK_INDEX.chest,ck,true);addBlock(x+hx-2,floorY+1,z+hz-2,BLOCK_INDEX.fossilRock??BLOCK_INDEX.bone,ck,true)}
    else if(gameMode==='marvel'){addBlock(x+hx-2,floorY+1,z-hz+2,BLOCK_INDEX.medicalStation??BLOCK_INDEX.chest,ck,true);addBlock(x+hx-2,floorY+1,z+hz-2,BLOCK_INDEX.bioScanner??BLOCK_INDEX.powerLamp,ck,true)}
    else addBlock(x+hx-2,floorY+1,z-hz+2,BLOCK_INDEX.bookshelf??BLOCK_INDEX.planks,ck,true)
    const sx=x,sz=z+Math.max(1,hz-2)
    for(let yy=ceilingY;yy<=y+1;yy++)for(const dx of [0,1])for(const dz of [0,1]){const b=blockMap.get(keyFor(sx+dx,yy,sz+dz));if(b)removeMesh(b)}
    for(let yy=ceilingY;yy<=y;yy+=2)addBlock(sx-1,yy,sz,light,ck,true)
    return {x,y:floorY+1,z,w:hx*2+1,d:hz*2+1,floorY,ceilingY,label,mode:gameMode}
  }
  function rim(x,y,z,hx,hz,type,ck){for(let dx=-hx;dx<=hx;dx++){addBlock(x+dx,y,z-hz,type,ck,true);addBlock(x+dx,y,z+hz,type,ck,true)}for(let dz=-hz+1;dz<hz;dz++){addBlock(x-hx,y,z+dz,type,ck,true);addBlock(x+hx,y,z+dz,type,ck,true)}}
  function lampPost(x,y,z,ck){const post=BLOCK_INDEX.steelPlate??BLOCK_INDEX.iron,light=BLOCK_INDEX.scannerLight??BLOCK_INDEX.powerLamp;addPillar(x,y,z,3,post,ck);addBlock(x,y+3,z,light,ck,true);addBlock(x-1,y+3,z,post,ck,true);addBlock(x+1,y+3,z,post,ck,true)}

  function polishComplex(x,y,z,hx,hz,ck,theme='normal'){
    const trim=theme==='marvel'?(BLOCK_INDEX.hazardStripe??BLOCK_INDEX.steelPlate):theme==='dino'?(BLOCK_INDEX.fossilBrick??BLOCK_INDEX.bone):(BLOCK_INDEX.cobble??BLOCK_INDEX.stone)
    const post=theme==='marvel'?(BLOCK_INDEX.reinforcedWall??BLOCK_INDEX.iron):theme==='dino'?(BLOCK_INDEX.bone??BLOCK_INDEX.quartz):(BLOCK_INDEX.darkPlanks??BLOCK_INDEX.oak)
    const light=BLOCK_INDEX.scannerLight??BLOCK_INDEX.powerLamp??BLOCK_INDEX.lamp
    for(const px of [-2,2])addPillar(x+px,y,z+hz+2,4,post,ck)
    for(let dx=-2;dx<=2;dx++)addBlock(x+dx,y+4,z+hz+2,trim,ck,true)
    addBlock(x,y+3,z+hz+2,light,ck,true)
    for(const [sx,sz] of [[-1,-1],[1,-1],[-1,1],[1,1]]){
      const px=x+sx*(hx+1),pz=z+sz*(hz+1)
      addPillar(px,y,pz,3,post,ck);addBlock(px,y+3,pz,light,ck,true)
    }
    for(let dz=hz+3;dz<=hz+8;dz++){
      for(let dx=-1;dx<=1;dx++)addBlock(x+dx,y-1,z+dz,BLOCK_INDEX.gravel,ck,true)
      addBlock(x-2,y-1,z+dz,trim,ck,true);addBlock(x+2,y-1,z+dz,trim,ck,true)
    }
  }
  function canopy(x,y,z,hx,hz,type,ck){for(let dx=-hx;dx<=hx;dx++)for(let dz=-hz;dz<=hz;dz++)addBlock(x+dx,y,z+dz,type,ck,true)}
  function fillFloor(x,y,z,w,d,type,ck){for(let dx=-Math.floor(w/2);dx<=Math.floor(w/2);dx++)for(let dz=-Math.floor(d/2);dz<=Math.floor(d/2);dz++)addBlock(x+dx,y,z+dz,type,ck,true)}
  function boxShell(x,y,z,w,h,d,wall,ck,windowType=null){const hx=Math.floor(w/2),hz=Math.floor(d/2);for(let yy=0;yy<h;yy++)for(let dx=-hx;dx<=hx;dx++)for(let dz=-hz;dz<=hz;dz++){if(Math.abs(dx)!==hx&&Math.abs(dz)!==hz)continue;const isDoor=dz===hz&&Math.abs(dx)<=1&&yy<3;if(isDoor)continue;const isWindow=windowType!==null&&yy===2&&((Math.abs(dx)===hx&&Math.abs(dz)<=1)||(Math.abs(dz)===hz&&Math.abs(dx)<=1));addBlock(x+dx,y+yy,z+dz,isWindow?windowType:wall,ck,true)}}

  // ---------- JURASSIC WORLD REBORN: ESTRUCTURAS ----------
  function jurassicGate(x,y,z,ck){
    const wood=BLOCK_INDEX.darkPlanks??BLOCK_INDEX.oak, stone=BLOCK_INDEX.cobble, light=BLOCK_INDEX.glow??BLOCK_INDEX.lamp
    fillFloor(x,y-1,z,15,5,stone,ck)
    for(const px of [-4,4]){
      addPillar(x+px,y,z,8,wood,ck);addPillar(x+px+1,y,z,8,stone,ck);addPillar(x+px-1,y,z,8,stone,ck)
      addBlock(x+px,y+8,z,light,ck,true)
    }
    for(let dx=-3;dx<=3;dx++){addBlock(x+dx,y+6,z,wood,ck,true);addBlock(x+dx,y+7,z,stone,ck,true)}
    addBlock(x,y+7,z,BLOCK_INDEX.hazardStripe??stone,ck,true)
    for(let dz=-6;dz<=6;dz++){addBlock(x-2,y,z+dz,BLOCK_INDEX.electricFence,ck,true);addBlock(x+2,y,z+dz,BLOCK_INDEX.electricFence,ck,true)}
    addBlock(x-3,y,z+2,BLOCK_INDEX.dinoCrate,ck,true);addBlock(x+3,y,z+2,BLOCK_INDEX.chest,ck,true)
    structures.push({type:'Puerta de Jurassic World',x,z,mode:gameMode})
  }

  function jurassicVisitorCenter(x,y,z,ck){
    const wall=BLOCK_INDEX.quartz??BLOCK_INDEX.stone, glass=BLOCK_INDEX.glass, accent=BLOCK_INDEX.amber??BLOCK_INDEX.glow
    fillFloor(x,y-1,z,17,15,wall,ck);boxShell(x,y,z,17,6,15,wall,ck,glass)
    for(const [px,pz] of [[-8,-7],[8,-7],[-8,7],[8,7]])addPillar(x+px,y,z+pz,8,wall,ck)
    canopy(x,y+6,z,9,8,BLOCK_INDEX.darkPlanks,ck);rim(x,y+7,z,7,6,glass,ck);addBlock(x,y+8,z,BLOCK_INDEX.seaLantern??BLOCK_INDEX.glow,ck,true)
    for(let i=1;i<=4;i++)addBlock(x,y+i,z,BLOCK_INDEX.bone,ck,true)
    addBlock(x-1,y+3,z,BLOCK_INDEX.bone,ck,true);addBlock(x+1,y+3,z,BLOCK_INDEX.bone,ck,true)
    addBlock(x-5,y,z-3,BLOCK_INDEX.dnaAnalyzer,ck,true);addBlock(x-5,y,z+3,BLOCK_INDEX.incubator,ck,true)
    addBlock(x+5,y,z-3,BLOCK_INDEX.dinoCrate,ck,true);addBlock(x+5,y,z+3,BLOCK_INDEX.bioScanner,ck,true)
    addBlock(x,y,z-5,BLOCK_INDEX.crafting,ck,true);addBlock(x,y,z+5,BLOCK_INDEX.chest,ck,true)
    const dungeon=makeUndergroundDungeon(x,y,z,17,15,ck,'Bóveda de Embriones Jurásica')
    structures.push({type:'Centro de Visitantes Jurásico',x,z,mode:gameMode,npcHub:true,dungeon})
  }

  function trexPaddock(x,y,z,ck){
    const fence=BLOCK_INDEX.electricFence??BLOCK_INDEX.iron, steel=BLOCK_INDEX.steelPlate??BLOCK_INDEX.iron, wall=BLOCK_INDEX.reinforcedWall??BLOCK_INDEX.cobble
    fillFloor(x,y-1,z,19,19,BLOCK_INDEX.dirt,ck)
    for(let dx=-9;dx<=9;dx++)for(const dz of [-9,9])if(Math.abs(dx)>2){addBlock(x+dx,y,z+dz,fence,ck,true);addBlock(x+dx,y+1,z+dz,fence,ck,true)}
    for(let dz=-8;dz<=8;dz++)for(const dx of [-9,9]){addBlock(x+dx,y,z+dz,fence,ck,true);addBlock(x+dx,y+1,z+dz,fence,ck,true)}
    // Bunker de observación en esquina
    fillFloor(x-7,y+4,z-7,5,5,steel,ck);boxShell(x-7,y+5,z-7,5,3,5,wall,ck,BLOCK_INDEX.antiZombieGlass??BLOCK_INDEX.glass)
    for(let yy=0;yy<=5;yy++)addPillar(x-7,y+yy,z-7,1,steel,ck)
    addBlock(x-7,y+8,z-7,BLOCK_INDEX.radarArray??BLOCK_INDEX.powerLamp,ck,true)
    addBlock(x-6,y+5,z-6,BLOCK_INDEX.ammoCrate??BLOCK_INDEX.chest,ck,true)
    // Poste de alimentación con carne
    addPillar(x,y,z,5,steel,ck);addBlock(x,y+5,z,BLOCK_INDEX.meat??BLOCK_INDEX.bone,ck,true)
    const dungeon=makeUndergroundDungeon(x,y,z,17,17,ck,'Jaula de Contención T-Rex')
    structures.push({type:'Recinto de Contención T-Rex',x,z,mode:gameMode,npcHub:true,dungeon})
  }

  // ---------- MARVEL ZOMBIES: ESTRUCTURAS ----------
  function avengersTower(x,y,z,ck){
    const steel=BLOCK_INDEX.steelPlate??BLOCK_INDEX.iron, glass=BLOCK_INDEX.antiZombieGlass??BLOCK_INDEX.glass, core=BLOCK_INDEX.portalCore??BLOCK_INDEX.glow
    fillFloor(x,y-1,z,15,15,steel,ck);boxShell(x,y,z,13,6,13,steel,ck,glass)
    fillFloor(x,y+6,z,11,11,steel,ck);boxShell(x,y+7,z,11,5,11,steel,ck,glass)
    // Helipuerto con logo A en la cima
    fillFloor(x,y+12,z,13,13,steel,ck);rim(x,y+13,z,6,6,BLOCK_INDEX.hazardStripe??steel,ck)
    addPillar(x,y+13,z,1,core,ck)
    // Letra A con bloques rojos/dorados
    addBlock(x,y+13,z-2,BLOCK_INDEX.woolRed??BLOCK_INDEX.gold,ck,true)
    addBlock(x-1,y+13,z-1,BLOCK_INDEX.woolRed??BLOCK_INDEX.gold,ck,true);addBlock(x+1,y+13,z-1,BLOCK_INDEX.woolRed??BLOCK_INDEX.gold,ck,true)
    addBlock(x-2,y+13,z,BLOCK_INDEX.woolRed??BLOCK_INDEX.gold,ck,true);addBlock(x+2,y+13,z,BLOCK_INDEX.woolRed??BLOCK_INDEX.gold,ck,true)
    addBlock(x-1,y+13,z,BLOCK_INDEX.woolRed??BLOCK_INDEX.gold,ck,true);addBlock(x+1,y+13,z,BLOCK_INDEX.woolRed??BLOCK_INDEX.gold,ck,true)
    addBlock(x-2,y+13,z+1,BLOCK_INDEX.woolRed??BLOCK_INDEX.gold,ck,true);addBlock(x+2,y+13,z+1,BLOCK_INDEX.woolRed??BLOCK_INDEX.gold,ck,true)
    addBlock(x-2,y+13,z+2,BLOCK_INDEX.woolRed??BLOCK_INDEX.gold,ck,true);addBlock(x+2,y+13,z+2,BLOCK_INDEX.woolRed??BLOCK_INDEX.gold,ck,true)
    // Bóveda de armaduras de Stark
    addBlock(x-4,y,z,BLOCK_INDEX.chest,ck,true);addBlock(x+4,y,z,BLOCK_INDEX.chest,ck,true)
    addBlock(x,y,z-4,BLOCK_INDEX.radarArray,ck,true);addBlock(x,y,z+4,BLOCK_INDEX.medicalStation,ck,true)
    const dungeon=makeUndergroundDungeon(x,y,z,15,15,ck,'Bóveda Stark Subterránea')
    structures.push({type:'Torre de los Vengadores',x,z,mode:gameMode,npcHub:true,dungeon})
  }

  function sanctumSanctorum(x,y,z,ck){
    const wall=BLOCK_INDEX.brick??BLOCK_INDEX.cobble, wood=BLOCK_INDEX.darkPlanks??BLOCK_INDEX.planks, trim=BLOCK_INDEX.blackstone??BLOCK_INDEX.obsidian
    fillFloor(x,y-1,z,13,13,trim,ck);boxShell(x,y,z,13,8,13,wall,ck,BLOCK_INDEX.glass)
    // Gran ventana mística circular en el tercer piso
    fillFloor(x,y+8,z,11,11,wood,ck);rim(x,y+9,z,5,5,wall,ck)
    addBlock(x,y+10,z-5,BLOCK_INDEX.portalCore??BLOCK_INDEX.amethyst,ck,true)
    addBlock(x-1,y+10,z-5,BLOCK_INDEX.gold,ck,true);addBlock(x+1,y+10,z-5,BLOCK_INDEX.gold,ck,true)
    addBlock(x,y+11,z-5,BLOCK_INDEX.gold,ck,true);addBlock(x,y+9,z-5,BLOCK_INDEX.gold,ck,true)
    // Altar místico interior
    addBlock(x,y,z,BLOCK_INDEX.enchantTable??BLOCK_INDEX.obsidian,ck,true)
    addBlock(x-2,y,z,BLOCK_INDEX.bookshelf,ck,true);addBlock(x+2,y,z,BLOCK_INDEX.bookshelf,ck,true)
    addBlock(x,y,z-3,BLOCK_INDEX.chest,ck,true);addBlock(x,y,z+3,BLOCK_INDEX.chest,ck,true)
    const dungeon=makeUndergroundDungeon(x,y,z,13,13,ck,'Cripta Mística de Kamar-Taj')
    structures.push({type:'Sanctum Sanctorum Místico',x,z,mode:gameMode,npcHub:true,dungeon})
  }

  function shieldHelicarrierBunker(x,y,z,ck){
    const steel=BLOCK_INDEX.steelPlate??BLOCK_INDEX.iron, wall=BLOCK_INDEX.reinforcedWall??BLOCK_INDEX.iron, light=BLOCK_INDEX.scannerLight??BLOCK_INDEX.powerLamp
    fillFloor(x,y-1,z,17,13,steel,ck);boxShell(x,y,z,17,5,13,wall,ck,BLOCK_INDEX.antiZombieGlass??BLOCK_INDEX.glass)
    for(const px of [-7,7])for(const pz of [-5,5])addPillar(x+px,y,z+pz,6,steel,ck)
    canopy(x,y+5,z,8,6,steel,ck)
    // Torretas y balizas
    addBlock(x-6,y+6,z-4,light,ck,true);addBlock(x+6,y+6,z-4,light,ck,true);addBlock(x,y+6,z,BLOCK_INDEX.radarArray,ck,true)
    addBlock(x-5,y,z,BLOCK_INDEX.ammoCrate??BLOCK_INDEX.chest,ck,true);addBlock(x+5,y,z,BLOCK_INDEX.medicalStation,ck,true)
    addBlock(x,y,z-4,BLOCK_INDEX.chest,ck,true);addBlock(x,y,z+4,BLOCK_INDEX.bioScanner,ck,true)
    for(let dx=-7;dx<=7;dx+=2)addBlock(x+dx,y,z+7,BLOCK_INDEX.electricFence,ck,true)
    const dungeon=makeUndergroundDungeon(x,y,z,17,13,ck,'Búnker de Emergencia S.H.I.E.L.D.')
    structures.push({type:'Búnker de S.H.I.E.L.D.',x,z,mode:gameMode,npcHub:true,dungeon})
  }

  // ---------- TEMPLO ANCESTRAL DE RELIQUIAS (UNIVERSAL) ----------
  function ancientTemple(x,y,z,ck){
    const base=gameMode==='marvel'?(BLOCK_INDEX.blackstone??BLOCK_INDEX.obsidian):gameMode==='dino'?(BLOCK_INDEX.fossilBrick??BLOCK_INDEX.bone):BLOCK_INDEX.sandstone??BLOCK_INDEX.sand
    const wall=gameMode==='marvel'?BLOCK_INDEX.reinforcedWall:gameMode==='dino'?BLOCK_INDEX.bone:BLOCK_INDEX.terracotta
    const trim=gameMode==='marvel'?BLOCK_INDEX.steelPlate:gameMode==='dino'?BLOCK_INDEX.quartz:BLOCK_INDEX.cobble
    const altar=BLOCK_INDEX.enchantTable??BLOCK_INDEX.obsidian
    const light=BLOCK_INDEX.seaLantern??BLOCK_INDEX.glow??BLOCK_INDEX.lamp

    fillFloor(x,y-1,z,15,15,base,ck)
    rim(x,y,z,7,7,trim,ck)
    for(let layer=0;layer<3;layer++){
      const r=6-layer
      rim(x,y+layer,z,r,r,wall,ck)
    }
    fillFloor(x,y+3,z,7,7,trim,ck)
    for(const [px,pz] of [[-3,-3],[3,-3],[-3,3],[3,3]]){
      addPillar(x+px,y+4,z+pz,4,trim,ck)
      addBlock(x+px,y+8,z+pz,light,ck,true)
    }
    canopy(x,y+8,z,3,3,wall,ck);rim(x,y+9,z,2,2,trim,ck);addBlock(x,y+10,z,light,ck,true)
    addBlock(x,y+4,z,altar,ck,true)
    addBlock(x-1,y+4,z,BLOCK_INDEX.bookshelf??BLOCK_INDEX.planks,ck,true)
    addBlock(x+1,y+4,z,BLOCK_INDEX.bookshelf??BLOCK_INDEX.planks,ck,true)
    addBlock(x,y+4,z-1,BLOCK_INDEX.chest,ck,true)
    addBlock(x,y+4,z+1,BLOCK_INDEX.chest,ck,true)

    const cryptY=y-7
    const zone={x,z,hx:5,hz:5,minY:cryptY+1,maxY:y+2};dungeonZones.push(zone)
    for(let dx=-4;dx<=4;dx++)for(let dz=-4;dz<=4;dz++)for(let yy=cryptY+1;yy<=y+2;yy++){
      const b=blockMap.get(keyFor(x+dx,yy,z+dz));if(b)removeMesh(b)
    }
    fillFloor(x,cryptY,z,9,9,BLOCK_INDEX.blackstone??BLOCK_INDEX.obsidian,ck)
    rim(x,cryptY+1,z,4,4,wall,ck);rim(x,cryptY+2,z,4,4,wall,ck);rim(x,cryptY+3,z,4,4,wall,ck)
    const trap=BLOCK_INDEX.tnt??BLOCK_INDEX.electricFence
    for(const [tx,tz] of [[-1,-1],[1,-1],[-1,1],[1,1],[0,0]]){
      addBlock(x+tx,cryptY,z+tz,trap,ck,true)
    }
    addBlock(x,cryptY+1,z,BLOCK_INDEX.lever,ck,true)
    addBlock(x-3,cryptY+1,z-3,BLOCK_INDEX.chest,ck,true);addBlock(x+3,cryptY+1,z-3,BLOCK_INDEX.chest,ck,true)
    addBlock(x-3,cryptY+1,z+3,BLOCK_INDEX.chest,ck,true);addBlock(x+3,cryptY+1,z+3,BLOCK_INDEX.chest,ck,true)
    addBlock(x,cryptY+4,z,light,ck,true)
    for(let yy=cryptY+1;yy<=y+3;yy++){
      const step=yy-cryptY
      addBlock(x-3+Math.min(3,Math.floor(step/2)),yy,z+3,trim,ck,true)
    }
    const dungeon={x,y:cryptY+1,z,w:9,d:9,floorY:cryptY,ceilingY:y+2,label:'Cripta del Templo Ancestral',mode:gameMode}
    structures.push({type:'Templo Ancestral de Reliquias',x,z,mode:gameMode,temple:true,dungeon})
  }

  function smallHouse(x,y,z,ck,style=0){
    const wall=style%2?BLOCK_INDEX.planks:BLOCK_INDEX.brick,trim=style%3?BLOCK_INDEX.darkPlanks:BLOCK_INDEX.cobble,roof=style%3?BLOCK_INDEX.darkPlanks:BLOCK_INDEX.planks,glass=BLOCK_INDEX.glass
    fillFloor(x,y-1,z,9,9,trim,ck)
    for(let yy=0;yy<4;yy++)for(let dx=-3;dx<=3;dx++)for(let dz=-3;dz<=3;dz++)if(Math.abs(dx)===3||Math.abs(dz)===3){const door=dz===3&&Math.abs(dx)<=1&&yy<3;const win=yy===2&&((Math.abs(dx)===3&&Math.abs(dz)<=1)||(Math.abs(dz)===3&&Math.abs(dx)===2));if(!door)addBlock(x+dx,y+yy,z+dz,win?glass:wall,ck,true)}
    for(const [px,pz] of [[-3,-3],[3,-3],[-3,3],[3,3]])addPillar(x+px,y,z+pz,5,trim,ck)
    for(let layer=0;layer<3;layer++){const r=4-layer;for(let dx=-r;dx<=r;dx++)for(let dz=-r;dz<=r;dz++)if(Math.abs(dx)===r||Math.abs(dz)===r)addBlock(x+dx,y+4+layer,z+dz,roof,ck,true)}
    addBlock(x,y+6,z,style%2?BLOCK_INDEX.lamp:BLOCK_INDEX.glow,ck,true)
    for(const px of [-2,2])addPillar(x+px,y,z+4,3,trim,ck)
    canopy(x,y+2,z+4,3,1,roof,ck)
    addPillar(x+2,y+4,z-2,3,BLOCK_INDEX.brick,ck);addBlock(x+2,y+7,z-2,BLOCK_INDEX.blackstone,ck,true)
    addBlock(x-4,y,z+2,BLOCK_INDEX.leaves,ck,true);addBlock(x+4,y,z+2,BLOCK_INDEX.leaves,ck,true)
    if(BLOCK_INDEX.chest!==undefined)addBlock(x+2,y,z+1,BLOCK_INDEX.chest,ck,true)
    addBlock(x-2,y,z+1,style%2?BLOCK_INDEX.bookshelf:BLOCK_INDEX.crafting,ck,true)
    const dungeon=makeUndergroundDungeon(x,y,z,9,9,ck,'Calabozo bajo casa')
    structures.push({type:'Casa con calabozo',x,z,mode:gameMode,house:true,dungeon})
  }
  function giantVillage(x,y,z,ck){
    for(let dx=-22;dx<=22;dx++)for(let dz=-2;dz<=2;dz++)addBlock(x+dx,y-1,z+dz,BLOCK_INDEX.gravel,ck,true)
    for(let dz=-22;dz<=22;dz++)for(let dx=-2;dx<=2;dx++)addBlock(x+dx,y-1,z+dz,BLOCK_INDEX.gravel,ck,true)
    fillFloor(x,y-1,z,11,11,BLOCK_INDEX.cobble,ck);rim(x,y-1,z,6,6,BLOCK_INDEX.brick,ck)
    for(const [lx,lz] of [[-6,-6],[6,-6],[-6,6],[6,6]])lampPost(x+lx,y,z+lz,ck)
    rim(x,y,z,3,3,BLOCK_INDEX.quartz,ck);rim(x,y+1,z,2,2,BLOCK_INDEX.prismarine,ck);addPillar(x,y,z,4,BLOCK_INDEX.seaLantern,ck)
    const spots=[[-16,-16],[0,-17],[16,-16],[-17,0],[17,0],[-16,16],[0,17],[16,16]]
    spots.forEach(([dx,dz],i)=>smallHouse(x+dx,y,z+dz,ck,i))
    fillFloor(x,y-1,z-11,9,7,BLOCK_INDEX.cobble,ck);boxShell(x,y,z-11,9,6,7,BLOCK_INDEX.brick,ck,BLOCK_INDEX.glass)
    for(const [px,pz] of [[-4,-14],[4,-14],[-4,-8],[4,-8]])addPillar(x+px,y,z+pz,8,BLOCK_INDEX.cobble,ck)
    canopy(x,y+6,z-11,5,4,BLOCK_INDEX.darkPlanks,ck);rim(x,y+7,z-11,4,3,BLOCK_INDEX.planks,ck);addBlock(x,y+8,z-11,BLOCK_INDEX.watchBeacon??BLOCK_INDEX.lamp,ck,true)
    addBlock(x-2,y,z-11,BLOCK_INDEX.crafting,ck,true);addBlock(x,y,z-11,BLOCK_INDEX.chest,ck,true);addBlock(x+2,y,z-11,BLOCK_INDEX.furnace,ck,true)
    structures.push({type:'Aldea gigante',x,z,mode:gameMode,npcHub:true})
  }

  function structureForChunk(cx,cz,ck){
    // Sistema de separación estricta: dividir el mundo en macro-regiones de 8 chunks (96x96 bloques)
    const REGION_SIZE_CHUNKS=8
    const rx=Math.floor(cx/REGION_SIZE_CHUNKS), rz=Math.floor(cz/REGION_SIZE_CHUNKS)
    const targetOffsetCX=Math.floor(hash(rx,rz,40404)*(REGION_SIZE_CHUNKS-2))+1
    const targetOffsetCZ=Math.floor(hash(rx,rz,80808)*(REGION_SIZE_CHUNKS-2))+1
    const regionTargetCX=rx*REGION_SIZE_CHUNKS+targetOffsetCX
    const regionTargetCZ=rz*REGION_SIZE_CHUNKS+targetOffsetCZ

    // Solo el chunk designado de cada macro-región puede intentar colocar una estructura
    if(cx!==regionTargetCX||cz!==regionTargetCZ)return

    const x=cx*CHUNK_SIZE+Math.floor(CHUNK_SIZE/2),z=cz*CHUNK_SIZE+Math.floor(CHUNK_SIZE/2),y=terrainHeight(x,z)+1,b=biomeAt(x,z)
    
    // Dejar libre la zona de inicio del jugador
    if(Math.hypot(x,z)<28)return

    // Garantizar separación mínima de al menos 75 bloques con respecto a cualquier otra estructura
    if(structures.some(st=>Math.hypot(st.x-x,st.z-z)<75))return

    const pick=hash(rx,rz,14141), roll=hash(rx,rz,777)

    // Templo Ancestral (universal para todos los modos)
    if(roll>.88||(pick<.16&&roll>.50)){
      ancientTemple(x,y,z,ck);return
    }

    if((b.id==='plains'||b.id==='savanna'||b.id==='forest')&&roll>.78){
      giantVillage(x,y,z,ck);return
    }

    if(gameMode==='dino'){
      if(pick<.28){jurassicVisitorCenter(x,y,z,ck);return}
      if(pick<.52){trexPaddock(x,y,z,ck);return}
      if(pick<.72){jurassicGate(x,y,z,ck);return}
      if(pick<.88){smallHouse(x,y,z,ck,2);return}
      ancientTemple(x,y,z,ck);return
    }
    if(gameMode==='marvel'){
      if(pick<.28){avengersTower(x,y,z,ck);return}
      if(pick<.52){sanctumSanctorum(x,y,z,ck);return}
      if(pick<.72){shieldHelicarrierBunker(x,y,z,ck);return}
      if(pick<.88){smallHouse(x,y,z,ck,1);return}
      ancientTemple(x,y,z,ck);return
    }
    if(gameMode==='survival'){
      if(pick<.40){ancientTemple(x,y,z,ck);return}
      if(pick<.70){smallHouse(x,y,z,ck,0);return}
      giantVillage(x,y,z,ck);return
    }
    if(pick<.35){ancientTemple(x,y,z,ck);return}
    if(pick<.70){smallHouse(x,y,z,ck,1);return}
    giantVillage(x,y,z,ck)
  }

  function generateChunk(cx,cz){
    const ck=chunkKey(cx,cz);if(chunks.has(ck))return
    const group={blocks:[],water:null};chunks.set(ck,group)
    for(let lx=0;lx<CHUNK_SIZE;lx++)for(let lz=0;lz<CHUNK_SIZE;lz++){
      const x=cx*CHUNK_SIZE+lx,z=cz*CHUNK_SIZE+lz
      const biome=biomeAt(x,z)
      const h=dimension==='ember'
        ? Math.round(7+Math.sin(x*.08)*3+Math.cos(z*.07)*3+Math.sin((x-z)*.025)*5)
        : terrainHeight(x,z)
      const top=dimension==='ember'?BLOCK_INDEX.netherrack:BLOCK_INDEX[biome.top]
      const sub=dimension==='ember'?BLOCK_INDEX.blackstone:BLOCK_INDEX[biome.sub]
      addBlock(x,h,z,top,ck,true);addBlock(x,h-1,z,sub,ck,true)

      // Capa geológica profunda y cuevas
      for(let depth=2;depth<=16;depth++){
        const yy=h-depth
        const tunnelA=Math.sin(x*.23+yy*.41)+Math.cos(z*.21-yy*.33)
        const tunnelB=Math.sin((x+z)*.11+yy*.27)+Math.cos((x-z)*.09-yy*.22)
        const chamber=Math.sin(x*.055)*Math.cos(z*.052)+Math.sin(yy*.31)
        const caveOpen=depth>=3 && (tunnelA+tunnelB>2.05 || (depth>7&&chamber>1.28))
        if(caveOpen||isDungeonAir(x,yy,z))continue

        let type=dimension==='ember'
          ? (yy<h-9?BLOCK_INDEX.basalt:BLOCK_INDEX.netherrack)
          : (yy<0?BLOCK_INDEX.deepslate:BLOCK_INDEX.stone)

        const r=hash(x+yy*7,z-yy*11,310+depth)
        if(dimension==='ember'){
          if(r>.985)type=BLOCK_INDEX.glow
          if(depth>9&&r>.994)type=BLOCK_INDEX.quartz
          if(r>.975&&r<.985)type=BLOCK_INDEX.magma??BLOCK_INDEX.glow
        }else{
          if(depth>=3&&r>.950)type=BLOCK_INDEX.coal
          if(depth>=4&&r>.970)type=BLOCK_INDEX.iron
          if(depth>=4&&r>.980)type=BLOCK_INDEX.copper
          if(depth>=6&&r>.988)type=BLOCK_INDEX.redstone
          if(depth>=8&&r>.993)type=BLOCK_INDEX.gold
          if(depth>=10&&r>.9970)type=BLOCK_INDEX.diamond
          if(depth>=11&&r>.9988)type=BLOCK_INDEX.amethyst
          if(depth>=13&&r>.991)type=BLOCK_INDEX.magma??BLOCK_INDEX.deepslate
        }
        if(depth>=16||yy<=-6)type=BLOCK_INDEX.bedrock??BLOCK_INDEX.deepslate
        addBlock(x,yy,z,type,ck,true)
      }

      // Entradas naturales de cuevas.
      if(dimension==='overworld'&&hash(Math.floor(x/3),Math.floor(z/3),911)>.993){
        for(let d=0;d<4;d++){const b=blockMap.get(keyFor(x,h-d,z));if(b)removeMesh(b)}
      }

      if(dimension==='overworld'&&h>WATER_LEVEL+1&&hash(x,z,98)<biome.tree){
        if(biome.id==='desert')cactus(x,h,z,ck);else if(biome.id==='mushroom')mushroom(x,h,z,ck);else makeTree(x,h,z,biome.id,ck)
      }
    }
    if(dimension==='overworld'){
      const wm=new THREE.MeshPhysicalMaterial({color:0x469ed5,transparent:true,opacity:.42,roughness:.18,depthWrite:false})
      const water=new THREE.Mesh(new THREE.PlaneGeometry(CHUNK_SIZE,CHUNK_SIZE),wm);water.rotation.x=-Math.PI/2;water.position.set(cx*CHUNK_SIZE+CHUNK_SIZE/2-.5,WATER_LEVEL+.48,cz*CHUNK_SIZE+CHUNK_SIZE/2-.5);scene.add(water);group.water=water
      structureForChunk(cx,cz,ck)
    }
  }
  function unloadChunk(cx,cz){
    const ck=chunkKey(cx,cz),c=chunks.get(ck);if(!c)return
    for(const b of [...c.blocks])removeMesh(b);if(c.water)scene.remove(c.water);chunks.delete(ck)
  }
  function updateChunks(pos){
    const pcx=Math.floor(pos.x/CHUNK_SIZE),pcz=Math.floor(pos.z/CHUNK_SIZE),needed=new Set()
    for(let dx=-VIEW_DISTANCE;dx<=VIEW_DISTANCE;dx++)for(let dz=-VIEW_DISTANCE;dz<=VIEW_DISTANCE;dz++){const cx=pcx+dx,cz=pcz+dz,k=chunkKey(cx,cz);needed.add(k);if(!chunks.has(k))generateChunk(cx,cz)}
    for(const k of [...chunks.keys()])if(!needed.has(k)){const [cx,cz]=k.split(',').map(Number);unloadChunk(cx,cz)}
  }
  function clear(){for(const c of [...chunks.values()]){for(const b of [...c.blocks])removeMesh(b);if(c.water)scene.remove(c.water)}chunks.clear();for(const b of [...blocks])removeMesh(b);structures.length=0;dungeonZones.length=0}

  function heightAt(x,z){
    if(dimension==='ember')return Math.round(7+Math.sin(x*.08)*3+Math.cos(z*.07)*3+Math.sin((x-z)*.025)*5)
    return terrainHeight(x,z)
  }
  function setDimension(next){
    if(next===dimension)return
    clear()
    dimension=next
  }
  function getDimension(){return dimension}
  function setGameMode(next){gameMode=['normal','survival','dino','marvel'].includes(next)?next:'normal'}
  function getGameMode(){return gameMode}
  function exportEdits(){return {overworld:[...dimensionEdits.overworld.entries()],ember:[...dimensionEdits.ember.entries()]}}
  function importEdits(data){dimensionEdits.overworld.clear();dimensionEdits.ember.clear();for(const [k,v] of data?.overworld??[])dimensionEdits.overworld.set(k,v);for(const [k,v] of data?.ember??[])dimensionEdits.ember.set(k,v)}
  return {blocks,blockMap,chunks,edits:dimensionEdits.overworld,structures,dungeonZones,cubeGeo,keyFor,addBlock,placeBlock,removeBlock,updateChunks,clear,heightAt,setDimension,getDimension,setGameMode,getGameMode,exportEdits,importEdits}
}
