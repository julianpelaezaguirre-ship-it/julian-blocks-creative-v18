import * as THREE from 'three'
import { MOB_TYPES } from './data.js'

export function createAdvancedSystems(world,mobSystem,BLOCKS,BLOCK_INDEX,BLOCK_MATERIALS,say,effects=null,spawnBlockDrop=null,damagePlayer=null){
  const leverStates=new Map()
  const primedTNTs=[]
  const chestStorage=new Map()
  const furnaceStates=new Map()

  let powerTimer=0
  let builderTimer=0
  let defenseTimer=0

  const dirs=[
    [1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]
  ]

  const blockAt=(x,y,z)=>world.blockMap.get(world.keyFor(x,y,z))
  const idOf=b=>BLOCKS[b?.userData?.typeIndex]?.id

  function setVisual(block,powered){
    const id=idOf(block)
    if(id==='powerLamp'){
      if(!block.userData.privateMaterial){
        block.material=block.material.clone()
        block.userData.privateMaterial=true
      }
      block.material.emissive=new THREE.Color(powered?0xffd85b:0x261d08)
      block.material.emissiveIntensity=powered?1.8:.08
      block.material.color.set(powered?0xffd45a:0x6f5b2a)
      block.userData.powered=powered
    }
    if(id==='powerDust'){
      if(!block.userData.privateMaterial){
        block.material=block.material.clone()
        block.userData.privateMaterial=true
      }
      block.material.emissive=new THREE.Color(powered?0xff2222:0x220000)
      block.material.emissiveIntensity=powered?1.25:.05
      block.material.color.set(powered?0xf23838:0x7e2020)
      block.userData.powered=powered
    }
    if(id==='lever'){
      block.rotation.z=powered?-.48:.48
      block.userData.powered=powered
    }
    if(['electricFence','radarArray','bioScanner','scannerLight'].includes(id)){
      if(!block.userData.privateMaterial){block.material=block.material.clone();block.userData.privateMaterial=true}
      block.material.emissive=new THREE.Color(powered?0x59fff1:0x071417)
      block.material.emissiveIntensity=powered?1.15:.08
      block.userData.powered=powered
    }
  }

  function recomputePower(){
    const conductive=new Set()
    const queue=[]

    for(const b of world.blocks){
      const id=idOf(b)
      if(['powerDust','powerLamp','lever','electricFence','radarArray','bioScanner','scannerLight'].includes(id))setVisual(b,false)
      if(['electricFence','radarArray','bioScanner','scannerLight'].includes(id))setVisual(b,true)
      if(id==='lever'&&leverStates.get(world.keyFor(b.position.x,b.position.y,b.position.z))){
        const k=world.keyFor(b.position.x,b.position.y,b.position.z)
        conductive.add(k);queue.push(b);setVisual(b,true)
      }
    }

    while(queue.length){
      const b=queue.shift()
      for(const [dx,dy,dz] of dirs){
        const n=blockAt(b.position.x+dx,b.position.y+dy,b.position.z+dz)
        if(!n)continue
        const id=idOf(n)
        if(id==='tnt'&&!b.userData.tntIgnited){
          igniteTNT(n, 1.8)
        }
        if(!['powerDust','powerLamp','lever','electricFence','radarArray','bioScanner','scannerLight'].includes(id))continue
        const k=world.keyFor(n.position.x,n.position.y,n.position.z)
        if(conductive.has(k))continue
        if(id==='lever'&&!leverStates.get(k))continue
        conductive.add(k);queue.push(n);setVisual(n,true)
      }
    }
  }

  // ---------- SISTEMA DINAMITA TNT ----------
  function igniteTNT(block, delay=2.5){
    if(block.userData.tntIgnited)return
    block.userData.tntIgnited=true
    effects?.sound?.('fuse')

    const origMat=block.material
    const whiteMat=new THREE.MeshBasicMaterial({color:0xffffff})
    block.material=whiteMat

    primedTNTs.push({
      block,
      timer:delay,
      maxTimer:delay,
      origMat,
      whiteMat,
      pos:block.position.clone()
    })
    say('🧨 ¡Dinamita TNT encendida!')
  }

  function explodeTNT(tnt){
    const pos=tnt.pos
    effects?.explosionEffect?.(pos)

    // Remover el bloque TNT
    if(world.blocks.includes(tnt.block)){
      world.removeBlock(tnt.block, true)
    }

    // Radio de explosión: destruir bloques y generar drops
    const radius=3.6
    const minX=Math.floor(pos.x-radius), maxX=Math.ceil(pos.x+radius)
    const minY=Math.floor(pos.y-radius), maxY=Math.ceil(pos.y+radius)
    const minZ=Math.floor(pos.z-radius), maxZ=Math.ceil(pos.z+radius)

    for(let x=minX;x<=maxX;x++)for(let y=minY;y<=maxY;y++)for(let z=minZ;z<=maxZ;z++){
      const d=pos.distanceTo(new THREE.Vector3(x,y,z))
      if(d<=radius){
        const b=blockAt(x,y,z)
        if(b){
          const id=idOf(b)
          if(id==='bedrock'||id==='obsidian'||id==='portalCore')continue // Irrompibles
          if(id==='tnt'&&b!==tnt.block){
            igniteTNT(b, 0.4+Math.random()*0.4) // Reacción en cadena
            continue
          }
          const t=b.userData.typeIndex??0
          if(Math.random()<0.65&&spawnBlockDrop){
            spawnBlockDrop(b.position.clone(), t)
          }
          world.removeBlock(b, true)
        }
      }
    }

    // Daño y empuje explosivo a criaturas
    for(const m of [...mobSystem.mobs]){
      const dist=m.group.position.distanceTo(pos)
      if(dist<7.0){
        const dmg=Math.round((7.0-dist)*3.2)
        mobSystem.hit(m, dmg, pos)
        const dir=m.group.position.clone().sub(pos).normalize()
        m.group.position.addScaledVector(dir, Math.max(1, 4-dist*0.5))
      }
    }

    // Daño al jugador
    if(damagePlayer){
      const playerPos=window.__julianCameraPos??pos
      const pDist=playerPos.distanceTo(pos)
      if(pDist<6.5){
        const pDmg=Math.round((6.5-pDist)*2.8)
        damagePlayer(Math.max(1, pDmg))
      }
    }

    onBlockChanged()
  }

  function updateTNT(dt){
    for(let i=primedTNTs.length-1;i>=0;i--){
      const tnt=primedTNTs[i]
      tnt.timer-=dt

      // Parpadeo y pulsación
      const freq=Math.max(4, (1-(tnt.timer/tnt.maxTimer))*18)
      const flash=Math.sin((tnt.maxTimer-tnt.timer)*freq)>0
      tnt.block.material=flash?tnt.whiteMat:tnt.origMat
      const scale=1.0+Math.sin((tnt.maxTimer-tnt.timer)*freq)*0.08
      tnt.block.scale.set(scale,scale,scale)

      if(tnt.timer<=0){
        primedTNTs.splice(i,1)
        explodeTNT(tnt)
      }
    }
  }

  function interactBlock(block){
    const id=idOf(block)
    if(id==='lever'){
      const k=world.keyFor(block.position.x,block.position.y,block.position.z)
      const next=!leverStates.get(k)
      leverStates.set(k,next)
      recomputePower()
      say(next?'Palanca encendida ⚡':'Palanca apagada')
      return {handled:true,type:'lever'}
    }
    if(id==='tnt'){
      igniteTNT(block, 2.5)
      return {handled:true,type:'tnt'}
    }
    if(id==='enchantTable'){
      effects?.enchantEffect?.(block.position)
      return {handled:true,type:'enchantTable',block}
    }
    if(id==='furnace'){
      return {handled:true,type:'furnace',block}
    }
    if(id==='portalCore'){
      return {handled:true,type:'portal'}
    }
    if(id==='radarArray'){
      const origin=block.position,near=mobSystem.mobs.filter(m=>m.group.position.distanceTo(origin)<64)
      let hostile=0,passive=0,dinos=0,villagers=0
      for(const m of near){const d=MOB_TYPES[m.type];if(d.marvelZombie||d.kind==='hostile')hostile++;else if(d.dinosaur)dinos++;else if(d.kind==='villager')villagers++;else passive++}
      say(`Radar Mini-IA: ${near.length} señales · ${hostile} amenazas · ${dinos} dinosaurios · ${villagers} aldeanos · ${passive} neutrales`)
      return {handled:true,type:'radar'}
    }
    if(id==='bioScanner'){
      let best=null,dist=36
      for(const m of mobSystem.mobs){const dd=m.group.position.distanceTo(block.position);if(dd<dist){dist=dd;best=m}}
      if(best){const d=MOB_TYPES[best.type];say(`Escáner biológico: ${d.name} · ${Math.ceil(best.hp)}/${best.maxHp} vida · ${Math.round(dist)} bloques`)}
      else say('Escáner biológico: no hay señales cercanas')
      return {handled:true,type:'bioscan'}
    }
    if(id==='medicalStation')return {handled:true,type:'medical'}
    if(id==='watchBeacon'){
      const nearby=world.structures.filter(st=>Math.hypot(st.x-block.position.x,st.z-block.position.z)<180)
      say(`Baliza: ${nearby.length} estructuras registradas en 180 bloques`)
      return {handled:true,type:'beacon'}
    }
    return {handled:false}
  }

  function onBlockChanged(){
    recomputePower()
  }

  function updateBuilders(dt){
    if(world.getDimension()!=='overworld')return
    builderTimer+=dt
    if(builderTimer<6)return
    builderTimer=0

    const builders=mobSystem.mobs.filter(m=>m.profession==='constructor')
    for(const m of builders){
      if(Math.random()>.45)continue
      const base=m.home
      const angle=Math.random()*Math.PI*2
      const dist=3+Math.floor(Math.random()*5)
      const x=Math.round(base.x+Math.cos(angle)*dist)
      const z=Math.round(base.z+Math.sin(angle)*dist)
      const y=world.heightAt(x,z)+1
      if(blockAt(x,y,z))continue
      const type=Math.random()<.55?BLOCK_INDEX.planks:BLOCK_INDEX.cobble
      const placed=world.placeBlock(x,y,z,type)
      if(placed){
        placed.userData.villagerBuilt=true
        m.state='work'
        m.target=new THREE.Vector3(x,y,z)
      }
    }
  }

  function updateDefenses(dt){
    defenseTimer+=dt
    if(defenseTimer<.65)return
    defenseTimer=0
    const defenseBlocks=world.blocks.filter(b=>['electricFence','antiZombieGlass','reinforcedWall'].includes(idOf(b)))
    if(!defenseBlocks.length)return
    for(const m of [...mobSystem.mobs]){
      const d=MOB_TYPES[m.type]
      if(!(d.kind==='hostile'||d.marvelZombie||(d.dinosaur&&d.carnivore)))continue
      let nearest=null,best=1.55
      for(const b of defenseBlocks){const dist=m.group.position.distanceTo(b.position);if(dist<best){best=dist;nearest=b}}
      if(!nearest)continue
      const away=m.group.position.clone().sub(nearest.position);away.y=0;if(away.lengthSq()<.01)away.set(1,0,0);away.normalize()
      m.group.position.addScaledVector(away,idOf(nearest)==='electricFence'?1.1:.65)
      if(idOf(nearest)==='electricFence')mobSystem.hit(m,2,nearest.position)
    }
  }

  function checkUnderPlayer(pos){
    const bx=Math.round(pos.x), by=Math.round(pos.y-1.2), bz=Math.round(pos.z)
    const block=blockAt(bx,by,bz)
    if(!block)return null
    return idOf(block)
  }

  function update(dt){
    powerTimer+=dt
    if(powerTimer>.8){powerTimer=0;recomputePower()}
    updateTNT(dt)
    updateBuilders(dt)
    updateDefenses(dt)
  }

  function createStarterCircuit(x,y,z){
    const parts=[
      [0,0,0,BLOCK_INDEX.lever],
      [1,0,0,BLOCK_INDEX.powerDust],
      [2,0,0,BLOCK_INDEX.powerDust],
      [3,0,0,BLOCK_INDEX.powerLamp],
      [0,0,2,BLOCK_INDEX.tnt],
    ]
    for(const [dx,dy,dz,t] of parts){
      if(t!==undefined)world.placeBlock(x+dx,y+dy,z+dz,t)
    }
  }

  function createStarterPortal(x,y,z){
    const obs=BLOCK_INDEX.obsidian
    for(let dx=-1;dx<=2;dx++)for(let dy=0;dy<=4;dy++){
      const edge=dx===-1||dx===2||dy===0||dy===4
      world.placeBlock(x+dx,y+dy,z,edge?obs:BLOCK_INDEX.portalStone)
    }
    world.placeBlock(x,y+1,z,BLOCK_INDEX.portalCore)
  }

  return {
    interactBlock,onBlockChanged,update,recomputePower,
    createStarterCircuit,createStarterPortal,
    igniteTNT,checkUnderPlayer,
    chestStorage,furnaceStates
  }
}
