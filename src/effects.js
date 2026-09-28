import * as THREE from 'three'

export function createEffects(scene){
  const particles=[]
  let audio=null, weather='clear', weatherTimer=60, flash=0
  let shakeIntensity=0

  const rainCount=520
  const rainGeo=new THREE.BufferGeometry()
  const rainPos=new Float32Array(rainCount*3)
  rainGeo.setAttribute('position',new THREE.BufferAttribute(rainPos,3))
  const rain=new THREE.Points(rainGeo,new THREE.PointsMaterial({color:0xb9dcff,size:.08,transparent:true,opacity:.72,depthWrite:false}))
  rain.visible=false; scene.add(rain)

  function unlockAudio(){
    if(!audio){
      const C=window.AudioContext||window.webkitAudioContext
      if(C)audio=new C()
    }
    audio?.resume?.()
  }

  function noiseBuffer(dur=0.3){
    if(!audio)return null
    const bufferSize=audio.sampleRate*dur
    const buffer=audio.createBuffer(1, bufferSize, audio.sampleRate)
    const data=buffer.getChannelData(0)
    for(let i=0;i<bufferSize;i++){
      data[i]=Math.random()*2-1
    }
    return buffer
  }

  function playNoise(dur=0.4, vol=0.08, filterFreq=400){
    if(!audio)return
    const src=audio.createBufferSource()
    const nBuf=noiseBuffer(dur)
    if(!nBuf)return
    src.buffer=nBuf
    const filter=audio.createBiquadFilter()
    filter.type='lowpass'
    filter.frequency.setValueAtTime(filterFreq, audio.currentTime)
    filter.frequency.exponentialRampToValueAtTime(40, audio.currentTime+dur)

    const gain=audio.createGain()
    gain.gain.setValueAtTime(vol, audio.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime+dur)

    src.connect(filter).connect(gain).connect(audio.destination)
    src.start()
    src.stop(audio.currentTime+dur)
  }

  function tone(freq=220,dur=.08,type='square',vol=.025){
    if(!audio)return
    const o=audio.createOscillator(),g=audio.createGain()
    o.type=type
    o.frequency.value=freq
    g.gain.setValueAtTime(vol,audio.currentTime)
    g.gain.exponentialRampToValueAtTime(.0001,audio.currentTime+dur)
    o.connect(g).connect(audio.destination)
    o.start()
    o.stop(audio.currentTime+dur)
  }

  function sound(name){
    if(!audio)return
    if(name==='break'){
      playNoise(0.08, 0.04, 800)
      tone(90, 0.05, 'triangle', 0.03)
    }else if(name==='place'){
      playNoise(0.06, 0.035, 600)
      tone(150, 0.04, 'sine', 0.02)
    }else if(name==='hit'){
      tone(180, 0.08, 'sawtooth', 0.04)
      setTimeout(()=>tone(120, 0.06, 'sawtooth', 0.03), 40)
    }else if(name==='pickup'||name==='exp'){
      tone(560, 0.09, 'sine', 0.03)
      setTimeout(()=>tone(840, 0.12, 'sine', 0.03), 50)
    }else if(name==='thunder'){
      playNoise(1.2, 0.12, 350)
      setTimeout(()=>playNoise(0.8, 0.08, 200), 180)
    }else if(name==='explosion'){
      playNoise(0.9, 0.22, 500)
      tone(60, 0.45, 'sawtooth', 0.08)
      shakeIntensity=0.45
    }else if(name==='fuse'){
      playNoise(0.2, 0.04, 1800)
    }else if(name==='bounce'){
      tone(220, 0.08, 'sine', 0.04)
      setTimeout(()=>tone(440, 0.14, 'sine', 0.04), 40)
    }else if(name==='eat'){
      tone(280, 0.05, 'triangle', 0.025)
      setTimeout(()=>tone(340, 0.05, 'triangle', 0.025), 60)
    }else if(name==='chest'){
      tone(320, 0.06, 'square', 0.02)
      setTimeout(()=>tone(480, 0.08, 'square', 0.02), 50)
    }else if(name==='enchant'){
      tone(523, 0.12, 'sine', 0.03)
      setTimeout(()=>tone(659, 0.12, 'sine', 0.03), 80)
      setTimeout(()=>tone(784, 0.18, 'sine', 0.04), 160)
    }else if(name==='step'){
      playNoise(0.04, 0.015, 500)
    }else if(name==='web'){
      playNoise(0.12, 0.06, 1200)
      tone(680, 0.06, 'sawtooth', 0.03)
    }else if(name==='symbiote'){
      playNoise(0.35, 0.09, 300)
      tone(95, 0.22, 'sawtooth', 0.06)
      tone(140, 0.18, 'sine', 0.04)
    }
  }

  function burst(pos,color=0xffffff,count=12,scale=0.09,speed=2.5){
    for(let i=0;i<count;i++){
      const m=new THREE.Mesh(new THREE.BoxGeometry(scale,scale,scale),new THREE.MeshBasicMaterial({color}))
      m.position.copy(pos).add(new THREE.Vector3((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4))
      scene.add(m)
      particles.push({
        m,
        v:new THREE.Vector3((Math.random()-.5)*speed, Math.random()*speed*.8 + 0.5, (Math.random()-.5)*speed),
        life:0.5+Math.random()*.35
      })
    }
  }

  function blockBreak(pos,color){
    burst(pos,color,16,0.11,3.0)
    sound('break')
  }

  function blockPlace(pos,color){
    burst(pos,color,8,0.07,1.8)
    sound('place')
  }

  function mobHit(pos){
    burst(pos,0xff3b3b,12,0.1,2.5)
    sound('hit')
  }

  function explosionEffect(pos){
    sound('explosion')
    // Partículas de fuego
    burst(pos,0xff4b00,32,0.22,6.5)
    burst(pos,0xffcc00,24,0.18,5.0)
    // Partículas de humo
    burst(pos,0x444444,28,0.26,4.0)
    burst(pos,0xcccccc,16,0.20,3.5)
  }

  function bounceEffect(pos){
    sound('bounce')
    burst(pos,0x75d45d,14,0.12,3.5)
  }

  function enchantEffect(pos){
    sound('enchant')
    burst(pos,0x9944ff,16,0.08,2.0)
    burst(pos,0x44eeff,12,0.08,2.0)
  }

  function symbioteWebEffect(fromPos, toPos){
    sound('web')
    const dist=fromPos.distanceTo(toPos)
    const count=Math.min(32, Math.max(8, Math.floor(dist*2)))
    for(let i=0;i<=count;i++){
      const t=i/count
      const pos=new THREE.Vector3().lerpVectors(fromPos,toPos,t)
      pos.y+=Math.sin(t*Math.PI)*0.35
      const m=new THREE.Mesh(new THREE.BoxGeometry(.12,.12,.12), new THREE.MeshBasicMaterial({color: (i%2===0)?0x111115:0x7922bb}))
      m.position.copy(pos)
      scene.add(m)
      particles.push({
        m,
        v:new THREE.Vector3((Math.random()-.5)*0.8, (Math.random()-.5)*0.8, (Math.random()-.5)*0.8),
        life:0.35+Math.random()*0.25
      })
    }
  }

  function symbioteBurstEffect(pos){
    sound('symbiote')
    shakeIntensity=0.35
    // Zarcillos oscuros en 360 grados
    burst(pos, 0x111116, 45, 0.24, 7.5)
    burst(pos, 0x8b1cb3, 30, 0.18, 6.0)
    burst(pos, 0xd0d0d8, 15, 0.12, 5.0)
  }

  function setWeather(w){
    weather=w
    rain.visible=w!=='clear'
    weatherTimer=70+Math.random()*80
    if(w==='storm')sound('thunder')
  }

  function cycleWeather(){
    setWeather(weather==='clear'?'rain':weather==='rain'?'storm':'clear')
    return weather
  }

  function update(dt,camera){
    for(let i=particles.length-1;i>=0;i--){
      const p=particles[i]
      p.life-=dt
      p.v.y-=7.5*dt
      p.m.position.addScaledVector(p.v,dt)
      p.m.scale.setScalar(Math.max(0.01,p.life*1.5))
      if(p.life<=0){
        scene.remove(p.m)
        p.m.geometry.dispose()
        p.m.material.dispose()
        particles.splice(i,1)
      }
    }

    weatherTimer-=dt
    if(weatherTimer<=0){
      const r=Math.random()
      setWeather(r<.57?'clear':r<.86?'rain':'storm')
    }

    if(weather!=='clear'){
      for(let i=0;i<rainCount;i++){
        const j=i*3
        if(rainPos[j+1]<camera.position.y-7||rainPos[j]===0){
          rainPos[j]=camera.position.x+(Math.random()-.5)*34
          rainPos[j+1]=camera.position.y+8+Math.random()*20
          rainPos[j+2]=camera.position.z+(Math.random()-.5)*34
        }else{
          rainPos[j+1]-=(weather==='storm'?26:18)*dt
          rainPos[j]+=.7*dt
        }
      }
      rainGeo.attributes.position.needsUpdate=true
      if(weather==='storm'&&Math.random()<dt*.03){
        flash=.14
        sound('thunder')
      }
    }
    flash=Math.max(0,flash-dt)

    let shakeOffset=new THREE.Vector3()
    if(shakeIntensity>0){
      shakeOffset.set((Math.random()-.5)*shakeIntensity, (Math.random()-.5)*shakeIntensity, (Math.random()-.5)*shakeIntensity)
      shakeIntensity=Math.max(0, shakeIntensity-dt*1.2)
    }

    return {weather,flash,shakeOffset}
  }

  return {
    unlockAudio,sound,blockBreak,blockPlace,mobHit,
    explosionEffect,bounceEffect,enchantEffect,
    symbioteWebEffect,symbioteBurstEffect,
    setWeather,cycleWeather,update,
    get weather(){return weather}
  }
}
