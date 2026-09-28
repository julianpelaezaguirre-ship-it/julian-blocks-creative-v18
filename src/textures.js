import * as THREE from 'three'
import { BLOCKS, BLOCK_INDEX } from './data.js'

function hexToRgb(hex){
  const n=parseInt(hex.replace('#',''),16)
  return [(n>>16)&255,(n>>8)&255,n&255]
}

function rgbToHex(r,g,b){
  const clamp=v=>Math.max(0,Math.min(255,Math.round(v)))
  return `rgb(${clamp(r)},${clamp(g)},${clamp(b)})`
}

function shade(hex, amount){
  const [r,g,b]=hexToRgb(hex)
  return rgbToHex(r+amount, g+amount, b+amount)
}

function create16Canvas(){
  const c=document.createElement('canvas')
  c.width=16;c.height=16
  return c
}

// Generador de ruido determinista tipo Minecraft
function noiseCanvas(hex, seed=1, grain=26){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle=hex; g.fillRect(0,0,16,16)
  let s=(seed*9973+1013904223)>>>0
  for(let y=0;y<16;y++)for(let x=0;x<16;x++){
    s=(s*1664525+1013904223)>>>0
    const light=((s>>>20)%grain - grain/2)*2
    g.fillStyle=shade(hex,light); g.fillRect(x,y,1,1)
  }
  return c
}

// Pasto superior con textura de césped con variaciones de píxeles
function grassTopCanvas(seed=42){
  const c=create16Canvas(), g=c.getContext('2d')
  const baseHex='#5aa33a'
  g.fillStyle=baseHex; g.fillRect(0,0,16,16)
  let s=seed*8191
  for(let y=0;y<16;y++)for(let x=0;x<16;x++){
    s=(s*1664525+1013904223)>>>0
    const val=(s>>>20)%5
    const col=val===0?'#4c8e30':val===1?'#68b943':val===2?'#569f37':val===3?'#458229':'#5fa93b'
    g.fillStyle=col; g.fillRect(x,y,1,1)
  }
  return c
}

// Lados del césped: tierra rica con franja verde colgante irregular
function grassSideCanvas(dirtHex='#866043', grassHex='#5aa33a', seed=42){
  const c=create16Canvas(), g=c.getContext('2d')
  // Fondo de tierra con motas
  g.fillStyle=dirtHex; g.fillRect(0,0,16,16)
  let s=seed*3319
  for(let y=0;y<16;y++)for(let x=0;x<16;x++){
    s=(s*1664525+1013904223)>>>0
    const r=(s>>>20)%4
    const dCol=r===0?'#6f4c32':r===1?'#9b7250':r===2?'#5c3d25':dirtHex
    g.fillStyle=dCol; g.fillRect(x,y,1,1)
  }
  // Césped colgante arriba
  for(let x=0;x<16;x++){
    s=(s*1664525+1013904223)>>>0
    const depth=3+(s>>>24)%4
    for(let y=0;y<depth;y++){
      s=(s*1664525+1013904223)>>>0
      const gCol=(s>>>20)%3===0?'#4c8e30':(s>>>20)%3===1?'#68b943':'#5aa33a'
      g.fillStyle=gCol; g.fillRect(x,y,1,1)
    }
  }
  return c
}

// Tierra
function dirtCanvas(seed=22){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle='#866043'; g.fillRect(0,0,16,16)
  let s=seed*6451
  for(let y=0;y<16;y++)for(let x=0;x<16;x++){
    s=(s*1664525+1013904223)>>>0
    const v=(s>>>20)%5
    const col=v===0?'#5e4028':v===1?'#9c714e':v===2?'#775338':v===3?'#8d6647':'#6c4b31'
    g.fillStyle=col; g.fillRect(x,y,1,1)
  }
  return c
}

// Piedra lisa / Stone
function stoneCanvas(seed=55){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle='#787878'; g.fillRect(0,0,16,16)
  let s=seed*9929
  for(let y=0;y<16;y++)for(let x=0;x<16;x++){
    s=(s*1664525+1013904223)>>>0
    const v=(s>>>20)%6
    const col=v===0?'#616161':v===1?'#8a8a8a':v===2?'#707070':v===3?'#919191':v===4?'#545454':'#7a7a7a'
    g.fillStyle=col; g.fillRect(x,y,1,1)
  }
  return c
}

// Adoquín / Cobblestone con patrón de piedras y mortero oscuro
function cobbleCanvas(seed=77){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle='#727272'; g.fillRect(0,0,16,16)
  let s=seed*4817
  for(let y=0;y<16;y++)for(let x=0;x<16;x++){
    s=(s*1664525+1013904223)>>>0
    const v=(s>>>20)%5
    g.fillStyle=v===0?'#505050':v===1?'#8c8c8c':v===2?'#656565':v===3?'#989898':'#737373'
    g.fillRect(x,y,1,1)
  }
  // Grietas de mortero
  g.fillStyle='#3c3c3c'
  const cracks=[[0,4,8,4],[8,4,16,4],[0,9,5,9],[5,9,16,9],[0,13,10,13],[10,13,16,13],[4,0,4,4],[11,0,11,4],[7,4,7,9],[3,9,3,13],[12,9,12,13],[6,13,6,16],[14,13,14,16]]
  for(const [x1,y1,x2,y2] of cracks){
    for(let px=x1;px<=x2;px++)for(let py=y1;py<=y2;py++)g.fillRect(px,py,1,1)
  }
  return c
}

// Madera / Oak log
function barkCanvas(hex='#9a6839', seed=12){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle='#6b4625'; g.fillRect(0,0,16,16)
  let s=seed*7757
  for(let x=0;x<16;x+=2){
    for(let y=0;y<16;y++){
      s=(s*1664525+1013904223)>>>0
      const bark=(s>>>20)%4===0?'#523419':(s>>>20)%4===1?'#875c34':(s>>>20)%4===2?'#78502c':'#5f3f21'
      g.fillStyle=bark; g.fillRect(x,y,2,1)
    }
  }
  // Líneas oscuras verticales de corteza
  g.fillStyle='#3d240e'
  for(let x=0;x<16;x+=4){
    g.fillRect(x,0,1,16)
  }
  return c
}

function ringCanvas(hex='#9a6839', seed=15){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle='#6b4625'; g.fillRect(0,0,16,16)
  g.fillStyle='#9e764a'; g.fillRect(1,1,14,14)
  g.fillStyle='#856038'; g.fillRect(3,3,10,10)
  g.fillStyle='#b88d5c'; g.fillRect(4,4,8,8)
  g.fillStyle='#75532d'; g.fillRect(6,6,4,4)
  g.fillStyle='#543a1e'; g.fillRect(7,7,2,2)
  return c
}

// Tablones de madera con vetas y clavos
function plankCanvas(hex='#b9854c', seed=9){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle=hex; g.fillRect(0,0,16,16)
  let s=seed*3331
  for(let y=0;y<16;y++){
    const isLine=y%4===0
    if(isLine){
      g.fillStyle=shade(hex,-36); g.fillRect(0,y,16,1)
    }else{
      for(let x=0;x<16;x++){
        s=(s*1664525+1013904223)>>>0
        const v=(s>>>20)%5
        g.fillStyle=v===0?shade(hex,-16):v===1?shade(hex,14):v===2?shade(hex,-8):hex
        g.fillRect(x,y,1,1)
      }
    }
  }
  // Clavos oscuros en extremos de tablas
  g.fillStyle=shade(hex,-55)
  g.fillRect(1,2,1,1); g.fillRect(14,2,1,1); g.fillRect(1,6,1,1); g.fillRect(14,6,1,1)
  g.fillRect(1,10,1,1); g.fillRect(14,10,1,1); g.fillRect(1,14,1,1); g.fillRect(14,14,1,1)
  return c
}

// Ladrillos con patrón de albañilería
function brickCanvas(seed=31){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle='#b3b3b3'; g.fillRect(0,0,16,16) // Mortero
  const rows=[[0,1,15,3],[0,5,15,7],[0,9,15,11],[0,13,15,15]]
  let s=seed*9973
  for(let r=0;r<4;r++){
    const y=r*4+1
    const offset=r%2===0?0:4
    for(let bx=-4+offset;bx<16;bx+=8){
      const x1=Math.max(0,bx), x2=Math.min(15,bx+6)
      if(x1<=x2){
        for(let py=y;py<=y+2;py++)for(let px=x1;px<=x2;px++){
          s=(s*1664525+1013904223)>>>0
          const v=(s>>>20)%4
          g.fillStyle=v===0?'#984638':v===1?'#b75a49':v===2?'#a74f40':'#863c2f'
          g.fillRect(px,py,1,1)
        }
      }
    }
  }
  return c
}

// Minerales (Ores): fondo de piedra con gemas incrustadas
function oreCanvas(gemColor, gemGlow, seed=101){
  const c=stoneCanvas(seed), g=c.getContext('2d')
  const spots=[
    [3,2],[4,2],[3,3],[4,3],[5,4],
    [9,3],[10,3],[10,4],[9,5],
    [2,9],[3,9],[2,10],[3,10],[4,11],
    [11,8],[12,8],[12,9],[13,10],
    [7,12],[8,12],[7,13],[8,13],[9,14]
  ]
  g.fillStyle=gemColor
  for(const [x,y] of spots){
    g.fillRect(x,y,1,1)
  }
  g.fillStyle=gemGlow
  const highlights=[[3,2],[10,3],[3,9],[12,8],[7,12]]
  for(const [x,y] of highlights){
    g.fillRect(x,y,1,1)
  }
  // Sombras oscuras alrededor de gemas
  g.fillStyle='rgba(0,0,0,0.35)'
  const shadows=[[5,3],[11,5],[4,10],[13,9],[9,13]]
  for(const [x,y] of shadows){
    g.fillRect(x,y,1,1)
  }
  return c
}

// TNT: dinamitas rojas con franja blanca y texto TNT
function tntSideCanvas(){
  const c=create16Canvas(), g=c.getContext('2d')
  // Fondo de cartuchos rojos
  g.fillStyle='#c83025'; g.fillRect(0,0,16,16)
  for(let x=0;x<16;x+=2){
    g.fillStyle='#d84236'; g.fillRect(x,0,1,16)
    g.fillStyle='#a72217'; g.fillRect(x+1,0,1,16)
  }
  // Franja blanca central
  g.fillStyle='#e8e8e8'; g.fillRect(0,5,16,6)
  g.fillStyle='#ffffff'; g.fillRect(0,6,16,4)
  // Letras negras TNT
  g.fillStyle='#111111'
  // T
  g.fillRect(2,7,3,1); g.fillRect(3,8,1,2)
  // N
  g.fillRect(6,7,1,3); g.fillRect(7,8,1,1); g.fillRect(8,7,1,3)
  // T
  g.fillRect(10,7,3,1); g.fillRect(11,8,1,2)
  return c
}

function tntTopCanvas(){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle='#c83025'; g.fillRect(0,0,16,16)
  for(let x=0;x<16;x+=4)for(let y=0;y<16;y+=4){
    g.fillStyle='#8f1c12'; g.fillRect(x,y,4,4)
    g.fillStyle='#d84236'; g.fillRect(x+1,y+1,2,2)
    g.fillStyle='#2c221a'; g.fillRect(x+1,y+1,1,1)
  }
  // Mecha central
  g.fillStyle='#443322'; g.fillRect(7,6,2,4); g.fillRect(6,7,4,2)
  g.fillStyle='#f0d040'; g.fillRect(7,7,2,2)
  return c
}

// Mesa de crafteo
function craftingTopCanvas(){
  const c=plankCanvas('#b9854c',3), g=c.getContext('2d')
  g.fillStyle='#6e4722'; g.fillRect(2,2,12,12)
  g.fillStyle='#cfa068'; g.fillRect(3,3,10,10)
  // Cuadrícula 3x3
  g.fillStyle='#5c3a19'
  g.fillRect(6,3,1,10); g.fillRect(9,3,1,10)
  g.fillRect(3,6,10,1); g.fillRect(3,9,10,1)
  return c
}

function craftingSideCanvas(){
  const c=plankCanvas('#b9854c',5), g=c.getContext('2d')
  // Herramientas grabadas (sierra, tijeras, martillo)
  g.fillStyle='#444444'
  g.fillRect(3,4,1,8); g.fillRect(4,4,3,1); g.fillRect(4,7,2,1)
  g.fillStyle='#777777'
  g.fillRect(10,4,3,3); g.fillRect(11,7,1,5)
  g.fillStyle='#382413'
  g.fillRect(1,1,14,1); g.fillRect(1,14,14,1)
  return c
}

// Horno
function furnaceFrontCanvas(){
  const c=cobbleCanvas(99), g=c.getContext('2d')
  // Arco y boca de horno
  g.fillStyle='#1c1c1c'; g.fillRect(3,6,10,8)
  g.fillStyle='#2f2f2f'; g.fillRect(4,5,8,1)
  // Brasa de fuego adentro
  g.fillStyle='#e6511a'; g.fillRect(5,9,6,4)
  g.fillStyle='#ffb326'; g.fillRect(6,10,4,2)
  g.fillStyle='#ffffff'; g.fillRect(7,10,2,1)
  return c
}

function furnaceTopCanvas(){
  const c=stoneCanvas(123), g=c.getContext('2d')
  g.fillStyle='#303030'; g.fillRect(4,4,8,8)
  g.fillStyle='#4c4c4c'; g.fillRect(5,5,6,6)
  g.fillStyle='#1e1e1e'; g.fillRect(7,7,2,2)
  return c
}

// Cofre
function chestSideCanvas(){
  const c=plankCanvas('#9a6a36',88), g=c.getContext('2d')
  g.fillStyle='#2c2013'
  g.fillRect(0,0,16,1); g.fillRect(0,15,16,1); g.fillRect(0,0,1,16); g.fillRect(15,0,1,16)
  g.fillRect(0,5,16,1) // Línea de tapa
  return c
}

function chestFrontCanvas(){
  const c=chestSideCanvas(), g=c.getContext('2d')
  // Cerradura dorada / plateada
  g.fillStyle='#181818'; g.fillRect(7,4,2,4)
  g.fillStyle='#e0c34a'; g.fillRect(7,4,2,3)
  g.fillStyle='#222222'; g.fillRect(7,6,2,1)
  return c
}

// Vidrio: marco con reflejos diagonales
function glassCanvas(){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle='rgba(180,225,245,0.15)'; g.fillRect(0,0,16,16)
  g.fillStyle='rgba(255,255,255,0.75)'
  // Marco
  g.fillRect(0,0,16,1); g.fillRect(0,15,16,1); g.fillRect(0,0,1,16); g.fillRect(15,0,1,16)
  // Reflejo diagonal
  g.fillRect(3,3,2,1); g.fillRect(4,4,1,2); g.fillRect(10,3,1,1); g.fillRect(11,4,1,1); g.fillRect(12,5,1,1)
  g.fillRect(3,11,1,1); g.fillRect(4,12,1,1); g.fillRect(5,13,1,1)
  return c
}

// Hojas con transparencia y variedad de follaje
function leavesCanvas(hex='#347f3b', seed=44){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle=hex; g.fillRect(0,0,16,16)
  let s=seed*5501
  for(let y=0;y<16;y++)for(let x=0;x<16;x++){
    s=(s*1664525+1013904223)>>>0
    const v=(s>>>20)%6
    if(v===0){
      g.clearRect(x,y,1,1) // Huecos transparentes estilo Minecraft Fast/Fancy
    }else if(v===1){
      g.fillStyle='#245928'; g.fillRect(x,y,1,1)
    }else if(v===2){
      g.fillStyle='#4ba452'; g.fillRect(x,y,1,1)
    }else if(v===3){
      g.fillStyle='#398c40'; g.fillRect(x,y,1,1)
    }
  }
  return c
}

// Librería
function bookshelfSideCanvas(){
  const c=plankCanvas('#8c6038',11), g=c.getContext('2d')
  // Fondo oscuro de estantes
  g.fillStyle='#28190d'
  g.fillRect(2,2,12,5); g.fillRect(2,9,12,5)
  // Libros de colores
  const bookColors=['#b53b3b','#386cb0','#4ea346','#c49f37','#7b3da3','#bf6930','#3d9999']
  for(let i=0;i<6;i++){
    g.fillStyle=bookColors[i%bookColors.length]
    g.fillRect(3+i*2,2,2,5)
    g.fillStyle='#e8ded0'; g.fillRect(3+i*2,3,2,1) // Páginas
  }
  for(let i=0;i<6;i++){
    g.fillStyle=bookColors[(i+3)%bookColors.length]
    g.fillRect(3+i*2,9,2,5)
    g.fillStyle='#e8ded0'; g.fillRect(3+i*2,10,2,1)
  }
  return c
}

// Obsidiana
function obsidianCanvas(seed=61){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle='#171026'; g.fillRect(0,0,16,16)
  let s=seed*8831
  for(let y=0;y<16;y++)for(let x=0;x<16;x++){
    s=(s*1664525+1013904223)>>>0
    const v=(s>>>20)%8
    if(v===0){g.fillStyle='#3b245e'; g.fillRect(x,y,1,1)}
    else if(v===1){g.fillStyle='#5b3394'; g.fillRect(x,y,1,1)}
    else if(v===2){g.fillStyle='#24173d'; g.fillRect(x,y,1,1)}
    else if(v===3){g.fillStyle='#7e46c7'; g.fillRect(x,y,1,1)}
  }
  return c
}

// Mesa de encantamientos
function enchantTableSideCanvas(){
  const c=obsidianCanvas(7), g=c.getContext('2d')
  // Diamantes en esquinas
  g.fillStyle='#4fe3da'
  g.fillRect(0,0,2,2); g.fillRect(14,0,2,2); g.fillRect(0,14,2,2); g.fillRect(14,14,2,2)
  // Tela mística roja
  g.fillStyle='#a82626'; g.fillRect(2,0,12,3)
  return c
}

function enchantTableTopCanvas(){
  const c=obsidianCanvas(9), g=c.getContext('2d')
  g.fillStyle='#a82626'; g.fillRect(1,1,14,14)
  g.fillStyle='#851919'; g.fillRect(3,3,10,10)
  g.fillStyle='#4fe3da'; g.fillRect(7,7,2,2)
  // Runas doradas
  g.fillStyle='#ffd700'
  g.fillRect(4,4,1,1); g.fillRect(11,4,1,1); g.fillRect(4,11,1,1); g.fillRect(11,11,1,1)
  return c
}

// Bloque de magma
function magmaCanvas(seed=303){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle='#2c0c08'; g.fillRect(0,0,16,16)
  let s=seed*7331
  for(let y=0;y<16;y++)for(let x=0;x<16;x++){
    s=(s*1664525+1013904223)>>>0
    const v=(s>>>20)%6
    if(v===0){g.fillStyle='#ff4d00'; g.fillRect(x,y,1,1)}
    else if(v===1){g.fillStyle='#ff9400'; g.fillRect(x,y,1,1)}
    else if(v===2){g.fillStyle='#ffd000'; g.fillRect(x,y,1,1)}
    else if(v===3){g.fillStyle='#6e180d'; g.fillRect(x,y,1,1)}
  }
  return c
}

// Roca madre / Bedrock
function bedrockCanvas(seed=808){
  const c=create16Canvas(), g=c.getContext('2d')
  g.fillStyle='#181818'; g.fillRect(0,0,16,16)
  let s=seed*9109
  for(let y=0;y<16;y++)for(let x=0;x<16;x++){
    s=(s*1664525+1013904223)>>>0
    const v=(s>>>20)%5
    g.fillStyle=v===0?'#000000':v===1?'#383838':v===2?'#555555':v===3?'#222222':'#151515'
    g.fillRect(x,y,1,1)
  }
  return c
}

// Atlas horizontal de 3 baldosas: lado | arriba | abajo
function combineAtlas(sideCanvas, topCanvas, bottomCanvas){
  const c=document.createElement('canvas');c.width=48;c.height=16;const g=c.getContext('2d')
  g.drawImage(sideCanvas,0,0);g.drawImage(topCanvas,16,0);g.drawImage(bottomCanvas,32,0)
  return c
}

function toTexture(canvas){
  const t=new THREE.CanvasTexture(canvas)
  t.magFilter=THREE.NearestFilter
  t.minFilter=THREE.NearestFilter
  t.colorSpace=THREE.SRGBColorSpace
  return t
}

// Sombreado por cara estilo Minecraft
const FACE_SHADE=[.72,.72,1,.52,.84,.84]
function applyFaceShade(geo){
  const colors=[]
  for(let face=0;face<6;face++)for(let v=0;v<4;v++)colors.push(FACE_SHADE[face],FACE_SHADE[face],FACE_SHADE[face])
  geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3))
  return geo
}

function remapAtlasUV(geo){
  const uv=geo.attributes.uv
  const offset=[0,0,1/3,2/3,0,0] // px,nx,py,ny,pz,nz -> lado,lado,arriba,abajo,lado,lado
  for(let face=0;face<6;face++)for(let v=0;v<4;v++){
    const idx=face*4+v
    uv.setX(idx,uv.getX(idx)/3+offset[face])
  }
  uv.needsUpdate=true
  return geo
}

export const CUBE_UNIT = applyFaceShade(new THREE.BoxGeometry(1,1,1))
export const ATLAS_CUBE = remapAtlasUV(applyFaceShade(new THREE.BoxGeometry(1,1,1)))

const ATLAS_IDS = new Set(['grass','oak','crafting','furnace','chest','tnt','bookshelf','enchantTable'])
const ELECTRIC_FENCE_GEO=applyFaceShade(new THREE.BoxGeometry(.2,1,.2))
const RADAR_GEO=applyFaceShade(new THREE.BoxGeometry(.84,.56,.84))
const SCANNER_GEO=applyFaceShade(new THREE.BoxGeometry(.80,.74,.80))
const BEACON_GEO=applyFaceShade(new THREE.BoxGeometry(.36,1.25,.36))

export function geometryForBlock(index){
  const b=BLOCKS[index]
  if(!b)return CUBE_UNIT
  if(b.id==='electricFence')return ELECTRIC_FENCE_GEO
  if(b.id==='radarArray')return RADAR_GEO
  if(b.id==='bioScanner'||b.id==='medicalStation')return SCANNER_GEO
  if(b.id==='watchBeacon')return BEACON_GEO
  return ATLAS_IDS.has(b.id)?ATLAS_CUBE:CUBE_UNIT
}

export const BLOCK_MATERIALS = BLOCKS.map((b,i)=>{
  const transparent=['glass','ice','slime','honey','antiZombieGlass','leaves'].includes(b.id)
  const emissive=['glow','lamp','seaLantern','portalCore','powerDust','powerLamp','electricFence','radarArray','bioScanner','scannerLight','medicalStation','watchBeacon','magma'].includes(b.id)
  const base={
    transparent,opacity:transparent?(b.id==='leaves'?.92:b.id==='glass'?.62:.75):1,
    roughness:transparent?.2:.88,
    metalness:['iron','gold','copper','copperOx','steelPlate'].includes(b.id)?.22:0,
    depthWrite:b.id==='leaves'?true:!transparent,
    emissive:emissive?new THREE.Color(b.sw):0x000000,
    emissiveIntensity:b.id==='portalCore'?1.2:b.id==='magma'?.6:b.id==='powerDust'?.2:b.id==='powerLamp'?.15:emissive?.55:0,
    vertexColors:true
  }
  const seed=i*17+3

  let map
  if(b.id==='grass'){
    const dirtHex=BLOCKS[BLOCK_INDEX.dirt]?.sw??'#866043'
    map=toTexture(combineAtlas(grassSideCanvas(dirtHex,b.sw,seed),grassTopCanvas(seed),dirtCanvas(seed)))
  }else if(b.id==='dirt'||b.id==='mud'){
    map=toTexture(dirtCanvas(seed))
  }else if(b.id==='stone'){
    map=toTexture(stoneCanvas(seed))
  }else if(b.id==='cobble'){
    map=toTexture(cobbleCanvas(seed))
  }else if(b.id==='oak'){
    map=toTexture(combineAtlas(barkCanvas(b.sw,seed),ringCanvas(b.sw,seed),ringCanvas(b.sw,seed)))
  }else if(b.id==='planks'||b.id==='darkPlanks'){
    map=toTexture(plankCanvas(b.sw,seed))
  }else if(b.id==='brick'){
    map=toTexture(brickCanvas(seed))
  }else if(b.id==='coal'){
    map=toTexture(oreCanvas('#222222','#444444',seed))
  }else if(b.id==='iron'){
    map=toTexture(oreCanvas('#d8b295','#f0cfb8',seed))
  }else if(b.id==='gold'){
    map=toTexture(oreCanvas('#ffd700','#fff070',seed))
  }else if(b.id==='redstone'){
    map=toTexture(oreCanvas('#ff2222','#ff6666',seed))
  }else if(b.id==='diamond'){
    map=toTexture(oreCanvas('#4ee2d8','#9afff8',seed))
  }else if(b.id==='emerald'){
    map=toTexture(oreCanvas('#20df65','#72ff9f',seed))
  }else if(b.id==='copper'){
    map=toTexture(oreCanvas('#d67950','#f29e79',seed))
  }else if(b.id==='amethyst'){
    map=toTexture(oreCanvas('#a670db','#d1a8f7',seed))
  }else if(b.id==='obsidian'){
    map=toTexture(obsidianCanvas(seed))
  }else if(b.id==='glass'||b.id==='antiZombieGlass'){
    map=toTexture(glassCanvas())
  }else if(b.id==='leaves'){
    map=toTexture(leavesCanvas(b.sw,seed))
  }else if(b.id==='crafting'){
    map=toTexture(combineAtlas(craftingSideCanvas(),craftingTopCanvas(),plankCanvas('#b9854c',4)))
  }else if(b.id==='furnace'){
    map=toTexture(combineAtlas(furnaceFrontCanvas(),furnaceTopCanvas(),cobbleCanvas(seed)))
  }else if(b.id==='chest'){
    map=toTexture(combineAtlas(chestFrontCanvas(),chestSideCanvas(),plankCanvas('#9a6a36',2)))
  }else if(b.id==='tnt'){
    map=toTexture(combineAtlas(tntSideCanvas(),tntTopCanvas(),tntTopCanvas()))
  }else if(b.id==='bookshelf'){
    map=toTexture(combineAtlas(bookshelfSideCanvas(),plankCanvas('#8c6038',1),plankCanvas('#8c6038',1)))
  }else if(b.id==='enchantTable'){
    map=toTexture(combineAtlas(enchantTableSideCanvas(),enchantTableTopCanvas(),obsidianCanvas(seed)))
  }else if(b.id==='magma'){
    map=toTexture(magmaCanvas(seed))
  }else if(b.id==='bedrock'){
    map=toTexture(bedrockCanvas(seed))
  }else{
    map=toTexture(noiseCanvas(b.sw,seed,24))
  }

  return new THREE.MeshStandardMaterial({map,...base})
})
