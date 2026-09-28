(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const Qa="180",Nd=0,Tl=1,Fd=2,Oc=1,Od=2,Xn=3,di=0,on=1,Dn=2,si=0,sr=1,Al=2,wl=3,Rl=4,kd=5,Ei=100,Bd=101,zd=102,Hd=103,Vd=104,Gd=200,Wd=201,Xd=202,qd=203,ea=204,ta=205,Yd=206,$d=207,jd=208,Zd=209,Kd=210,Jd=211,Qd=212,eu=213,tu=214,na=0,ia=1,ra=2,ur=3,oa=4,sa=5,aa=6,la=7,kc=0,nu=1,iu=2,ai=0,ru=1,ou=2,su=3,au=4,lu=5,cu=6,du=7,Bc=300,fr=301,hr=302,ca=303,da=304,rs=306,Wo=1e3,Ai=1001,ua=1002,sn=1003,uu=1004,to=1005,wn=1006,hs=1007,wi=1008,Un=1009,zc=1010,Hc=1011,Br=1012,el=1013,Ii=1014,Yn=1015,Yr=1016,tl=1017,nl=1018,zr=1020,Vc=35902,Gc=35899,Wc=1021,Xc=1022,Rn=1023,Hr=1026,Vr=1027,qc=1028,il=1029,Yc=1030,rl=1031,ol=1033,No=33776,Fo=33777,Oo=33778,ko=33779,fa=35840,ha=35841,pa=35842,ma=35843,ga=36196,_a=37492,va=37496,xa=37808,Ma=37809,Sa=37810,ba=37811,ya=37812,Ea=37813,Ta=37814,Aa=37815,wa=37816,Ra=37817,Ca=37818,Pa=37819,Da=37820,La=37821,Ia=36492,Ua=36494,Na=36495,Fa=36283,Oa=36284,ka=36285,Ba=36286,fu=3200,hu=3201,$c=0,pu=1,oi="",rn="srgb",pr="srgb-linear",Xo="linear",pt="srgb",ki=7680,Cl=519,mu=512,gu=513,_u=514,jc=515,vu=516,xu=517,Mu=518,Su=519,za=35044,Pl="300 es",In=2e3,qo=2001;class xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bo=Math.PI/180,Ha=180/Math.PI;function li(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function bu(n,e){return(n%e+e)%e}function ps(n,e,t){return(1-t)*n+t*e}function Ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $r{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],m=i[r+3];const d=o[s+0],g=o[s+1],p=o[s+2],v=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=p,e[t+3]=v;return}if(m!==v||l!==d||c!==g||u!==p){let h=1-a;const f=l*d+c*g+u*p+m*v,D=f>=0?1:-1,P=1-f*f;if(P>Number.EPSILON){const A=Math.sqrt(P),R=Math.atan2(A,f*D);h=Math.sin(h*R)/A,a=Math.sin(a*R)/A}const x=a*D;if(l=l*h+d*x,c=c*h+g*x,u=u*h+p*x,m=m*h+v*x,h===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=A,c*=A,u*=A,m*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],m=o[s],d=o[s+1],g=o[s+2],p=o[s+3];return e[t]=a*p+u*m+l*g-c*d,e[t+1]=l*p+u*d+c*m-a*g,e[t+2]=c*p+u*g+a*d-l*m,e[t+3]=u*p-a*m-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),m=a(o/2),d=l(i/2),g=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=d*u*m+c*g*p,this._y=c*g*m-d*u*p,this._z=c*u*p+d*g*m,this._w=c*u*m-d*g*p;break;case"YXZ":this._x=d*u*m+c*g*p,this._y=c*g*m-d*u*p,this._z=c*u*p-d*g*m,this._w=c*u*m+d*g*p;break;case"ZXY":this._x=d*u*m-c*g*p,this._y=c*g*m+d*u*p,this._z=c*u*p+d*g*m,this._w=c*u*m-d*g*p;break;case"ZYX":this._x=d*u*m-c*g*p,this._y=c*g*m+d*u*p,this._z=c*u*p-d*g*m,this._w=c*u*m+d*g*p;break;case"YZX":this._x=d*u*m+c*g*p,this._y=c*g*m+d*u*p,this._z=c*u*p-d*g*m,this._w=c*u*m-d*g*p;break;case"XZY":this._x=d*u*m-c*g*p,this._y=c*g*m-d*u*p,this._z=c*u*p+d*g*m,this._w=c*u*m+d*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],m=t[10],d=i+a+m;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(o-c)*g,this._z=(s-r)*g}else if(i>a&&i>m){const g=2*Math.sqrt(1+i-a-m);this._w=(u-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(o+c)/g}else if(a>m){const g=2*Math.sqrt(1+a-i-m);this._w=(o-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+m-i-a);this._w=(s-r)/g,this._x=(o+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*s+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),m=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*m+this._w*d,this._x=i*m+this._x*d,this._y=r*m+this._y*d,this._z=o*m+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),u=2*(a*t-o*r),m=2*(o*i-s*t);return this.x=t+l*c+s*m-a*u,this.y=i+l*u+a*c-o*m,this.z=r+l*m+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ms.copy(this).projectOnVector(e),this.sub(ms)}reflect(e){return this.sub(ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ms=new V,Dl=new $r;class Qe{constructor(e,t,i,r,o,s,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,l,c)}set(e,t,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],m=i[7],d=i[2],g=i[5],p=i[8],v=r[0],h=r[3],f=r[6],D=r[1],P=r[4],x=r[7],A=r[2],R=r[5],I=r[8];return o[0]=s*v+a*D+l*A,o[3]=s*h+a*P+l*R,o[6]=s*f+a*x+l*I,o[1]=c*v+u*D+m*A,o[4]=c*h+u*P+m*R,o[7]=c*f+u*x+m*I,o[2]=d*v+g*D+p*A,o[5]=d*h+g*P+p*R,o[8]=d*f+g*x+p*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],m=u*s-a*c,d=a*l-u*o,g=c*o-s*l,p=t*m+i*d+r*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=m*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*s)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*o-a*t)*v,e[6]=g*v,e[7]=(i*l-c*t)*v,e[8]=(s*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gs.makeScale(e,t)),this}rotate(e){return this.premultiply(gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(gs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gs=new Qe;function Zc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yu(){const n=Yo("canvas");return n.style.display="block",n}const Ll={};function Gr(n){n in Ll||(Ll[n]=!0,console.warn(n))}function Eu(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const Il=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ul=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tu(){const n={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===pt&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===pt&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?Xo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pr]:{primaries:e,whitePoint:i,transfer:Xo,toXYZ:Il,fromXYZ:Ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Il,fromXYZ:Ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const lt=Tu();function $n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class Au{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bi===void 0&&(Bi=Yo("canvas")),Bi.width=e.width,Bi.height=e.height;const r=Bi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Bi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=$n(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($n(t[i]/255)*255):t[i]=$n(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wu=0;class sl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(_s(r[s].image)):o.push(_s(r[s]))}else o=_s(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function _s(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Au.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ru=0;const vs=new V;class tn extends xr{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=Ai,r=Ai,o=wn,s=wi,a=Rn,l=Un,c=tn.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=li(),this.name="",this.source=new sl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vs).x}get height(){return this.source.getSize(vs).y}get depth(){return this.source.getSize(vs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Bc;tn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const l=e.elements,c=l[0],u=l[4],m=l[8],d=l[1],g=l[5],p=l[9],v=l[2],h=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(m-v)<.01&&Math.abs(p-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(m+v)<.1&&Math.abs(p+h)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,x=(g+1)/2,A=(f+1)/2,R=(u+d)/4,I=(m+v)/4,z=(p+h)/4;return P>x&&P>A?P<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(P),r=R/i,o=I/i):x>A?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=R/r,o=z/r):A<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(A),i=I/o,r=z/o),this.set(i,r,o,t),this}let D=Math.sqrt((h-p)*(h-p)+(m-v)*(m-v)+(d-u)*(d-u));return Math.abs(D)<.001&&(D=1),this.x=(h-p)/D,this.y=(m-v)/D,this.z=(d-u)/D,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cu extends xr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:i.depth},o=new tn(r);this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new sl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Cu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kc extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pu extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,bn):bn.fromBufferAttribute(o,s),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),io.subVectors(this.max,Er),zi.subVectors(e.a,Er),Hi.subVectors(e.b,Er),Vi.subVectors(e.c,Er),jn.subVectors(Hi,zi),Zn.subVectors(Vi,Hi),mi.subVectors(zi,Vi);let t=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-mi.z,mi.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,mi.z,0,-mi.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-mi.y,mi.x,0];return!xs(t,zi,Hi,Vi,io)||(t=[1,0,0,0,1,0,0,0,1],!xs(t,zi,Hi,Vi,io))?!1:(ro.crossVectors(jn,Zn),t=[ro.x,ro.y,ro.z],xs(t,zi,Hi,Vi,io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new V,new V,new V,new V,new V,new V,new V,new V],bn=new V,no=new jr,zi=new V,Hi=new V,Vi=new V,jn=new V,Zn=new V,mi=new V,Er=new V,io=new V,ro=new V,gi=new V;function xs(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){gi.fromArray(n,o);const a=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Du=new jr,Tr=new V,Ms=new V;class Zr{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Du.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Tr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Ms)),this.expandByPoint(Tr.copy(e.center).sub(Ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hn=new V,Ss=new V,oo=new V,Kn=new V,bs=new V,so=new V,ys=new V;class os{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ss.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Ss);const o=e.distanceTo(t)*.5,s=-this.direction.dot(oo),a=Kn.dot(this.direction),l=-Kn.dot(oo),c=Kn.lengthSq(),u=Math.abs(1-s*s);let m,d,g,p;if(u>0)if(m=s*l-a,d=s*a-l,p=o*u,m>=0)if(d>=-p)if(d<=p){const v=1/u;m*=v,d*=v,g=m*(m+s*d+2*a)+d*(s*m+d+2*l)+c}else d=o,m=Math.max(0,-(s*d+a)),g=-m*m+d*(d+2*l)+c;else d=-o,m=Math.max(0,-(s*d+a)),g=-m*m+d*(d+2*l)+c;else d<=-p?(m=Math.max(0,-(-s*o+a)),d=m>0?-o:Math.min(Math.max(-o,-l),o),g=-m*m+d*(d+2*l)+c):d<=p?(m=0,d=Math.min(Math.max(-o,-l),o),g=d*(d+2*l)+c):(m=Math.max(0,-(s*o+a)),d=m>0?o:Math.min(Math.max(-o,-l),o),g=-m*m+d*(d+2*l)+c);else d=s>0?-o:o,m=Math.max(0,-(s*d+a)),g=-m*m+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Ss).addScaledVector(oo,d),g}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),r=Hn.dot(Hn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),m>=0?(a=(e.min.z-d.z)*m,l=(e.max.z-d.z)*m):(a=(e.max.z-d.z)*m,l=(e.min.z-d.z)*m),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,r,o){bs.subVectors(t,e),so.subVectors(i,e),ys.crossVectors(bs,so);let s=this.direction.dot(ys),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(so.crossVectors(Kn,so));if(l<0)return null;const c=a*this.direction.dot(bs.cross(Kn));if(c<0||l+c>s)return null;const u=-a*Kn.dot(ys);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,o,s,a,l,c,u,m,d,g,p,v,h){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,l,c,u,m,d,g,p,v,h)}set(e,t,i,r,o,s,a,l,c,u,m,d,g,p,v,h){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=m,f[14]=d,f[3]=g,f[7]=p,f[11]=v,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),o=1/Gi.setFromMatrixColumn(e,1).length(),s=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const d=s*u,g=s*m,p=a*u,v=a*m;t[0]=l*u,t[4]=-l*m,t[8]=c,t[1]=g+p*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=p+g*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,g=l*m,p=c*u,v=c*m;t[0]=d+v*a,t[4]=p*a-g,t[8]=s*c,t[1]=s*m,t[5]=s*u,t[9]=-a,t[2]=g*a-p,t[6]=v+d*a,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,g=l*m,p=c*u,v=c*m;t[0]=d-v*a,t[4]=-s*m,t[8]=p+g*a,t[1]=g+p*a,t[5]=s*u,t[9]=v-d*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,g=s*m,p=a*u,v=a*m;t[0]=l*u,t[4]=p*c-g,t[8]=d*c+v,t[1]=l*m,t[5]=v*c+d,t[9]=g*c-p,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,g=s*c,p=a*l,v=a*c;t[0]=l*u,t[4]=v-d*m,t[8]=p*m+g,t[1]=m,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=g*m+p,t[10]=d-v*m}else if(e.order==="XZY"){const d=s*l,g=s*c,p=a*l,v=a*c;t[0]=l*u,t[4]=-m,t[8]=c*u,t[1]=d*m+v,t[5]=s*u,t[9]=g*m-p,t[2]=p*m-g,t[6]=a*u,t[10]=v*m+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lu,e,Iu)}lookAt(e,t,i){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Jn.crossVectors(i,un),Jn.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Jn.crossVectors(i,un)),Jn.normalize(),ao.crossVectors(un,Jn),r[0]=Jn.x,r[4]=ao.x,r[8]=un.x,r[1]=Jn.y,r[5]=ao.y,r[9]=un.y,r[2]=Jn.z,r[6]=ao.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],m=i[5],d=i[9],g=i[13],p=i[2],v=i[6],h=i[10],f=i[14],D=i[3],P=i[7],x=i[11],A=i[15],R=r[0],I=r[4],z=r[8],y=r[12],E=r[1],k=r[5],N=r[9],j=r[13],te=r[2],K=r[6],U=r[10],W=r[14],F=r[3],re=r[7],le=r[11],Me=r[15];return o[0]=s*R+a*E+l*te+c*F,o[4]=s*I+a*k+l*K+c*re,o[8]=s*z+a*N+l*U+c*le,o[12]=s*y+a*j+l*W+c*Me,o[1]=u*R+m*E+d*te+g*F,o[5]=u*I+m*k+d*K+g*re,o[9]=u*z+m*N+d*U+g*le,o[13]=u*y+m*j+d*W+g*Me,o[2]=p*R+v*E+h*te+f*F,o[6]=p*I+v*k+h*K+f*re,o[10]=p*z+v*N+h*U+f*le,o[14]=p*y+v*j+h*W+f*Me,o[3]=D*R+P*E+x*te+A*F,o[7]=D*I+P*k+x*K+A*re,o[11]=D*z+P*N+x*U+A*le,o[15]=D*y+P*j+x*W+A*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],m=e[6],d=e[10],g=e[14],p=e[3],v=e[7],h=e[11],f=e[15];return p*(+o*l*m-r*c*m-o*a*d+i*c*d+r*a*g-i*l*g)+v*(+t*l*g-t*c*d+o*s*d-r*s*g+r*c*u-o*l*u)+h*(+t*c*m-t*a*g-o*s*m+i*s*g+o*a*u-i*c*u)+f*(-r*a*u-t*l*m+t*a*d+r*s*m-i*s*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],m=e[9],d=e[10],g=e[11],p=e[12],v=e[13],h=e[14],f=e[15],D=m*h*c-v*d*c+v*l*g-a*h*g-m*l*f+a*d*f,P=p*d*c-u*h*c-p*l*g+s*h*g+u*l*f-s*d*f,x=u*v*c-p*m*c+p*a*g-s*v*g-u*a*f+s*m*f,A=p*m*l-u*v*l-p*a*d+s*v*d+u*a*h-s*m*h,R=t*D+i*P+r*x+o*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=D*I,e[1]=(v*d*o-m*h*o-v*r*g+i*h*g+m*r*f-i*d*f)*I,e[2]=(a*h*o-v*l*o+v*r*c-i*h*c-a*r*f+i*l*f)*I,e[3]=(m*l*o-a*d*o-m*r*c+i*d*c+a*r*g-i*l*g)*I,e[4]=P*I,e[5]=(u*h*o-p*d*o+p*r*g-t*h*g-u*r*f+t*d*f)*I,e[6]=(p*l*o-s*h*o-p*r*c+t*h*c+s*r*f-t*l*f)*I,e[7]=(s*d*o-u*l*o+u*r*c-t*d*c-s*r*g+t*l*g)*I,e[8]=x*I,e[9]=(p*m*o-u*v*o-p*i*g+t*v*g+u*i*f-t*m*f)*I,e[10]=(s*v*o-p*a*o+p*i*c-t*v*c-s*i*f+t*a*f)*I,e[11]=(u*a*o-s*m*o-u*i*c+t*m*c+s*i*g-t*a*g)*I,e[12]=A*I,e[13]=(u*v*r-p*m*r+p*i*d-t*v*d-u*i*h+t*m*h)*I,e[14]=(p*a*r-s*v*r-p*i*l+t*v*l+s*i*h-t*a*h)*I,e[15]=(s*m*r-u*a*r+u*i*l-t*m*l-s*i*d+t*a*d)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,m=a+a,d=o*c,g=o*u,p=o*m,v=s*u,h=s*m,f=a*m,D=l*c,P=l*u,x=l*m,A=i.x,R=i.y,I=i.z;return r[0]=(1-(v+f))*A,r[1]=(g+x)*A,r[2]=(p-P)*A,r[3]=0,r[4]=(g-x)*R,r[5]=(1-(d+f))*R,r[6]=(h+D)*R,r[7]=0,r[8]=(p+P)*I,r[9]=(h-D)*I,r[10]=(1-(d+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=Gi.set(r[0],r[1],r[2]).length();const s=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const c=1/o,u=1/s,m=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=m,yn.elements[9]*=m,yn.elements[10]*=m,t.setFromRotationMatrix(yn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s,a=In,l=!1){const c=this.elements,u=2*o/(t-e),m=2*o/(i-r),d=(t+e)/(t-e),g=(i+r)/(i-r);let p,v;if(l)p=o/(s-o),v=s*o/(s-o);else if(a===In)p=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===qo)p=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=In,l=!1){const c=this.elements,u=2/(t-e),m=2/(i-r),d=-(t+e)/(t-e),g=-(i+r)/(i-r);let p,v;if(l)p=1/(s-o),v=s/(s-o);else if(a===In)p=-2/(s-o),v=-(s+o)/(s-o);else if(a===qo)p=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new V,yn=new yt,Lu=new V(0,0,0),Iu=new V(1,1,1),Jn=new V,ao=new V,un=new V,Nl=new yt,Fl=new $r;class Nn{constructor(e=0,t=0,i=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],m=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ot(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uu=0;const Ol=new V,Wi=new $r,Vn=new yt,lo=new V,Ar=new V,Nu=new V,Fu=new $r,kl=new V(1,0,0),Bl=new V(0,1,0),zl=new V(0,0,1),Hl={type:"added"},Ou={type:"removed"},Xi={type:"childadded",child:null},Es={type:"childremoved",child:null};class Ot extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new V,t=new Nn,i=new $r,r=new V(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Qe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(kl,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return Ol.copy(e).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kl,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lo.copy(e):lo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ar,lo,this.up):Vn.lookAt(lo,Ar,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ou),Es.child=e,this.dispatchEvent(Es),Es.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const m=l[c];o(e.shapes,m)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),m=s(e.shapes),d=s(e.skeletons),g=s(e.animations),p=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),m.length>0&&(i.shapes=m),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),p.length>0&&(i.nodes=p)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new V(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new V,Gn=new V,Ts=new V,Wn=new V,qi=new V,Yi=new V,Vl=new V,As=new V,ws=new V,Rs=new V,Cs=new Dt,Ps=new Dt,Ds=new Dt;class hn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){En.subVectors(r,t),Gn.subVectors(i,t),Ts.subVectors(e,t);const s=En.dot(En),a=En.dot(Gn),l=En.dot(Ts),c=Gn.dot(Gn),u=Gn.dot(Ts),m=s*c-a*a;if(m===0)return o.set(0,0,0),null;const d=1/m,g=(c*l-a*u)*d,p=(s*u-a*l)*d;return o.set(1-g-p,p,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,r,o,s,a,l){return this.getBarycoord(e,t,i,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Wn.x),l.addScaledVector(s,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,i,r,o,s){return Cs.setScalar(0),Ps.setScalar(0),Ds.setScalar(0),Cs.fromBufferAttribute(e,t),Ps.fromBufferAttribute(e,i),Ds.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Cs,o.x),s.addScaledVector(Ps,o.y),s.addScaledVector(Ds,o.z),s}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),Gn.subVectors(e,t),En.cross(Gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),En.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;qi.subVectors(r,i),Yi.subVectors(o,i),As.subVectors(e,i);const l=qi.dot(As),c=Yi.dot(As);if(l<=0&&c<=0)return t.copy(i);ws.subVectors(e,r);const u=qi.dot(ws),m=Yi.dot(ws);if(u>=0&&m<=u)return t.copy(r);const d=l*m-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(qi,s);Rs.subVectors(e,o);const g=qi.dot(Rs),p=Yi.dot(Rs);if(p>=0&&g<=p)return t.copy(o);const v=g*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Yi,a);const h=u*p-g*m;if(h<=0&&m-u>=0&&g-p>=0)return Vl.subVectors(o,r),a=(m-u)/(m-u+(g-p)),t.copy(r).addScaledVector(Vl,a);const f=1/(h+v+d);return s=v*f,a=d*f,t.copy(i).addScaledVector(qi,s).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},co={h:0,s:0,l:0};function Ls(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=bu(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=Ls(s,o,e+1/3),this.g=Ls(s,o,e),this.b=Ls(s,o,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=rn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=Jc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return lt.workingToColorSpace($t.copy(this),e),Math.round(ot($t.r*255,0,255))*65536+Math.round(ot($t.g*255,0,255))*256+Math.round(ot($t.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace($t.copy(this),t);const i=$t.r,r=$t.g,o=$t.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const m=s-a;switch(c=u<=.5?m/(s+a):m/(2-s-a),s){case i:l=(r-o)/m+(r<o?6:0);break;case r:l=(o-i)/m+2;break;case o:l=(i-r)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=rn){lt.workingToColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,r=$t.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(co);const i=ps(Qn.h,co.h,t),r=ps(Qn.s,co.s,t),o=ps(Qn.l,co.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ye;Ye.NAMES=Jc;let ku=0;class fi extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=li(),this.name="",this.type="Material",this.blending=sr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ea&&(i.blendSrc=this.blendSrc),this.blendDst!==ta&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mr extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new V,uo=new tt;let Bu=0;class Sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=za,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ln(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array),o=mt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==za&&(e.usage=this.usage),e}}class Qc extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ed extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xt extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zu=0;const vn=new yt,Is=new Ot,$i=new V,fn=new jr,wr=new jr,Gt=new V;class ln extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zc(e)?ed:Qc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Qe().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return Is.lookAt(e),Is.updateMatrix(),this.applyMatrix4(Is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Xt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(fn.min,wr.min),fn.expandByPoint(Gt),Gt.addVectors(fn.max,wr.max),fn.expandByPoint(Gt)):(fn.expandByPoint(wr.min),fn.expandByPoint(wr.max))}fn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Gt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(e,c),Gt.add($i)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new V,l[z]=new V;const c=new V,u=new V,m=new V,d=new tt,g=new tt,p=new tt,v=new V,h=new V;function f(z,y,E){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,y),m.fromBufferAttribute(i,E),d.fromBufferAttribute(o,z),g.fromBufferAttribute(o,y),p.fromBufferAttribute(o,E),u.sub(c),m.sub(c),g.sub(d),p.sub(d);const k=1/(g.x*p.y-p.x*g.y);isFinite(k)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(k),h.copy(m).multiplyScalar(g.x).addScaledVector(u,-p.x).multiplyScalar(k),a[z].add(v),a[y].add(v),a[E].add(v),l[z].add(h),l[y].add(h),l[E].add(h))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let z=0,y=D.length;z<y;++z){const E=D[z],k=E.start,N=E.count;for(let j=k,te=k+N;j<te;j+=3)f(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const P=new V,x=new V,A=new V,R=new V;function I(z){A.fromBufferAttribute(r,z),R.copy(A);const y=a[z];P.copy(y),P.sub(A.multiplyScalar(A.dot(y))).normalize(),x.crossVectors(R,y);const k=x.dot(l[z])<0?-1:1;s.setXYZW(z,P.x,P.y,P.z,k)}for(let z=0,y=D.length;z<y;++z){const E=D[z],k=E.start,N=E.count;for(let j=k,te=k+N;j<te;j+=3)I(e.getX(j+0)),I(e.getX(j+1)),I(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new V,o=new V,s=new V,a=new V,l=new V,c=new V,u=new V,m=new V;if(e)for(let d=0,g=e.count;d<g;d+=3){const p=e.getX(d+0),v=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,h),u.subVectors(s,o),m.subVectors(r,o),u.cross(m),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,h),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,o),m.subVectors(r,o),u.cross(m),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,m=a.normalized,d=new c.constructor(l.length*u);let g=0,p=0;for(let v=0,h=l.length;v<h;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*u;for(let f=0;f<u;f++)d[p++]=c[g++]}return new Sn(d,u,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,m=c.length;u<m;u++){const d=c[u],g=e(d,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let m=0,d=c.length;m<d;m++){const g=c[m];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],m=o[c];for(let d=0,g=m.length;d<g;d++)u.push(m[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const m=s[c];this.addGroup(m.start,m.count,m.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new yt,_i=new os,fo=new Zr,Wl=new V,ho=new V,po=new V,mo=new V,Us=new V,go=new V,Xl=new V,_o=new V;class St extends Ot{constructor(e=new ln,t=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){go.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],m=o[l];u!==0&&(Us.fromBufferAttribute(m,e),s?go.addScaledVector(Us,u):go.addScaledVector(Us.sub(t),u))}t.add(go)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(o),_i.copy(e.ray).recast(e.near),!(fo.containsPoint(_i.origin)===!1&&(_i.intersectSphere(fo,Wl)===null||_i.origin.distanceToSquared(Wl)>(e.far-e.near)**2))&&(Gl.copy(o).invert(),_i.copy(e.ray).applyMatrix4(Gl),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,m=o.attributes.normal,d=o.groups,g=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,v=d.length;p<v;p++){const h=d[p],f=s[h.materialIndex],D=Math.max(h.start,g.start),P=Math.min(a.count,Math.min(h.start+h.count,g.start+g.count));for(let x=D,A=P;x<A;x+=3){const R=a.getX(x),I=a.getX(x+1),z=a.getX(x+2);r=vo(this,f,e,i,c,u,m,R,I,z),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let h=p,f=v;h<f;h+=3){const D=a.getX(h),P=a.getX(h+1),x=a.getX(h+2);r=vo(this,s,e,i,c,u,m,D,P,x),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,v=d.length;p<v;p++){const h=d[p],f=s[h.materialIndex],D=Math.max(h.start,g.start),P=Math.min(l.count,Math.min(h.start+h.count,g.start+g.count));for(let x=D,A=P;x<A;x+=3){const R=x,I=x+1,z=x+2;r=vo(this,f,e,i,c,u,m,R,I,z),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let h=p,f=v;h<f;h+=3){const D=h,P=h+1,x=h+2;r=vo(this,s,e,i,c,u,m,D,P,x),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function Hu(n,e,t,i,r,o,s,a){let l;if(e.side===on?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===di,a),l===null)return null;_o.copy(a),_o.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_o);return c<t.near||c>t.far?null:{distance:c,point:_o.clone(),object:n}}function vo(n,e,t,i,r,o,s,a,l,c){n.getVertexPosition(a,ho),n.getVertexPosition(l,po),n.getVertexPosition(c,mo);const u=Hu(n,e,t,i,ho,po,mo,Xl);if(u){const m=new V;hn.getBarycoord(Xl,ho,po,mo,m),r&&(u.uv=hn.getInterpolatedAttribute(r,a,l,c,m,new tt)),o&&(u.uv1=hn.getInterpolatedAttribute(o,a,l,c,m,new tt)),s&&(u.normal=hn.getInterpolatedAttribute(s,a,l,c,m,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};hn.getNormal(ho,po,mo,d.normal),u.face=d,u.barycoord=m}return u}class It extends ln{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],m=[];let d=0,g=0;p("z","y","x",-1,-1,i,t,e,s,o,0),p("z","y","x",1,-1,i,t,-e,s,o,1),p("x","z","y",1,1,e,i,t,r,s,2),p("x","z","y",1,-1,e,i,-t,r,s,3),p("x","y","z",1,-1,e,t,i,r,o,4),p("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(m,2));function p(v,h,f,D,P,x,A,R,I,z,y){const E=x/I,k=A/z,N=x/2,j=A/2,te=R/2,K=I+1,U=z+1;let W=0,F=0;const re=new V;for(let le=0;le<U;le++){const Me=le*k-j;for(let Re=0;Re<K;Re++){const We=Re*E-N;re[v]=We*D,re[h]=Me*P,re[f]=te,c.push(re.x,re.y,re.z),re[v]=0,re[h]=0,re[f]=R>0?1:-1,u.push(re.x,re.y,re.z),m.push(Re/I),m.push(1-le/z),W+=1}}for(let le=0;le<z;le++)for(let Me=0;Me<I;Me++){const Re=d+Me+K*le,We=d+Me+K*(le+1),$e=d+(Me+1)+K*(le+1),He=d+(Me+1)+K*le;l.push(Re,We,He),l.push(We,$e,He),F+=6}a.addGroup(g,F,y),g+=F,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=gr(n[t]);for(const r in i)e[r]=i[r]}return e}function Vu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function td(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Gu={clone:gr,merge:Qt};var Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=Vu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nd extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new V,ql=new tt,Yl=new tt;class xn extends nd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,ql,Yl),t.subVectors(Yl,ql)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Zi=1;class qu extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(ji,Zi,e,t);r.layers=this.layers,this.add(r);const o=new xn(ji,Zi,e,t);o.layers=this.layers,this.add(o);const s=new xn(ji,Zi,e,t);s.layers=this.layers,this.add(s);const a=new xn(ji,Zi,e,t);a.layers=this.layers,this.add(a);const l=new xn(ji,Zi,e,t);l.layers=this.layers,this.add(l);const c=new xn(ji,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,m=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(m,d,g),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class id extends tn{constructor(e=[],t=fr,i,r,o,s,a,l,c,u){super(e,t,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yu extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new id(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new It(5,5,5),o=new ui({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:si});o.uniforms.tEquirect.value=t;const s=new St(r,o),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=wn),new qu(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}class rr extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $u={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const h=t.getJointPose(v,i),f=this._getHandJoint(c,v);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],d=u.position.distanceTo(m.position),g=.02,p=.005;c.inputState.pinching&&d>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($u)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ll{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=i}clone(){return new ll(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ju extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=za,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new V;class $o{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ln(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array),o=mt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $o(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ss extends fi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ki;const Rr=new V,Ji=new V,Qi=new V,er=new tt,Cr=new tt,rd=new yt,xo=new V,Pr=new V,Mo=new V,$l=new tt,Fs=new tt,jl=new tt;class cl extends Ot{constructor(e=new ss){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new ln;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zu(t,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new $o(i,3,0,!1)),Ki.setAttribute("uv",new $o(i,2,3,!1))}this.geometry=Ki,this.material=e,this.center=new tt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),rd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Qi.z);const i=this.material.rotation;let r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));const s=this.center;So(xo.set(-.5,-.5,0),Qi,s,Ji,r,o),So(Pr.set(.5,-.5,0),Qi,s,Ji,r,o),So(Mo.set(.5,.5,0),Qi,s,Ji,r,o),$l.set(0,0),Fs.set(1,0),jl.set(1,1);let a=e.ray.intersectTriangle(xo,Pr,Mo,!1,Rr);if(a===null&&(So(Pr.set(-.5,.5,0),Qi,s,Ji,r,o),Fs.set(0,1),a=e.ray.intersectTriangle(xo,Mo,Pr,!1,Rr),a===null))return;const l=e.ray.origin.distanceTo(Rr);l<e.near||l>e.far||t.push({distance:l,point:Rr.clone(),uv:hn.getInterpolation(Rr,xo,Pr,Mo,$l,Fs,jl,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function So(n,e,t,i,r,o){er.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Cr.x=o*er.x-r*er.y,Cr.y=r*er.x+o*er.y):Cr.copy(er),n.copy(e),n.x+=Cr.x,n.y+=Cr.y,n.applyMatrix4(rd)}const Os=new V,Ku=new V,Ju=new Qe;class Si{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Os.subVectors(i,t).cross(Ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Os),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ju.getNormalMatrix(e),r=this.coplanarPoint(Os).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Zr,Qu=new tt(.5,.5),bo=new V;class dl{constructor(e=new Si,t=new Si,i=new Si,r=new Si,o=new Si,s=new Si){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],u=o[4],m=o[5],d=o[6],g=o[7],p=o[8],v=o[9],h=o[10],f=o[11],D=o[12],P=o[13],x=o[14],A=o[15];if(r[0].setComponents(c-s,g-u,f-p,A-D).normalize(),r[1].setComponents(c+s,g+u,f+p,A+D).normalize(),r[2].setComponents(c+a,g+m,f+v,A+P).normalize(),r[3].setComponents(c-a,g-m,f-v,A-P).normalize(),i)r[4].setComponents(l,d,h,x).normalize(),r[5].setComponents(c-l,g-d,f-h,A-x).normalize();else if(r[4].setComponents(c-l,g-d,f-h,A-x).normalize(),t===In)r[5].setComponents(c+l,g+d,f+h,A+x).normalize();else if(t===qo)r[5].setComponents(l,d,h,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){vi.center.set(0,0,0);const t=Qu.distanceTo(e.center);return vi.radius=.7071067811865476+t,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(bo.x=r.normal.x>0?e.max.x:e.min.x,bo.y=r.normal.y>0?e.max.y:e.min.y,bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class od extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jo=new V,Zo=new V,Zl=new yt,Dr=new os,yo=new Zr,ks=new V,Kl=new V;class ef extends Ot{constructor(e=new ln,t=new od){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)jo.fromBufferAttribute(t,r-1),Zo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=jo.distanceTo(Zo);e.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),yo.radius+=o,e.ray.intersectsSphere(yo)===!1)return;Zl.copy(r).invert(),Dr.copy(e.ray).applyMatrix4(Zl);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const g=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let v=g,h=p-1;v<h;v+=c){const f=u.getX(v),D=u.getX(v+1),P=Eo(this,e,Dr,l,f,D,v);P&&t.push(P)}if(this.isLineLoop){const v=u.getX(p-1),h=u.getX(g),f=Eo(this,e,Dr,l,v,h,p-1);f&&t.push(f)}}else{const g=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let v=g,h=p-1;v<h;v+=c){const f=Eo(this,e,Dr,l,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=Eo(this,e,Dr,l,p-1,g,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Eo(n,e,t,i,r,o,s){const a=n.geometry.attributes.position;if(jo.fromBufferAttribute(a,r),Zo.fromBufferAttribute(a,o),t.distanceSqToSegment(jo,Zo,ks,Kl)>i)return;ks.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ks);if(!(c<e.near||c>e.far))return{distance:c,point:Kl.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Jl=new V,Ql=new V;class tf extends ef{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)Jl.fromBufferAttribute(t,r),Ql.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Jl.distanceTo(Ql);e.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ec=new yt,Va=new os,To=new Zr,Ao=new V;class nf extends Ot{constructor(e=new ln,t=new sd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),To.radius+=o,e.ray.intersectsSphere(To)===!1)return;ec.copy(r).invert(),Va.copy(e.ray).applyMatrix4(ec);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,m=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),g=Math.min(c.count,s.start+s.count);for(let p=d,v=g;p<v;p++){const h=c.getX(p);Ao.fromBufferAttribute(m,h),tc(Ao,h,l,r,e,t,this)}}else{const d=Math.max(0,s.start),g=Math.min(m.count,s.start+s.count);for(let p=d,v=g;p<v;p++)Ao.fromBufferAttribute(m,p),tc(Ao,p,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function tc(n,e,t,i,r,o,s){const a=Va.distanceSqToPoint(n);if(a<t){const l=new V;Va.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class as extends tn{constructor(e,t,i,r,o,s,a,l,c){super(e,t,i,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ad extends tn{constructor(e,t,i=Ii,r,o,s,a=sn,l=sn,c,u=Hr,m=1){if(u!==Hr&&u!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:m};super(d,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ld extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ko extends ln{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),o=Math.floor(o);const u=[],m=[],d=[],g=[];let p=0;const v=[],h=i/2;let f=0;D(),s===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(g,2));function D(){const x=new V,A=new V;let R=0;const I=(t-e)/i;for(let z=0;z<=o;z++){const y=[],E=z/o,k=E*(t-e)+e;for(let N=0;N<=r;N++){const j=N/r,te=j*l+a,K=Math.sin(te),U=Math.cos(te);A.x=k*K,A.y=-E*i+h,A.z=k*U,m.push(A.x,A.y,A.z),x.set(K,I,U).normalize(),d.push(x.x,x.y,x.z),g.push(j,1-E),y.push(p++)}v.push(y)}for(let z=0;z<r;z++)for(let y=0;y<o;y++){const E=v[y][z],k=v[y+1][z],N=v[y+1][z+1],j=v[y][z+1];(e>0||y!==0)&&(u.push(E,k,j),R+=3),(t>0||y!==o-1)&&(u.push(k,N,j),R+=3)}c.addGroup(f,R,0),f+=R}function P(x){const A=p,R=new tt,I=new V;let z=0;const y=x===!0?e:t,E=x===!0?1:-1;for(let N=1;N<=r;N++)m.push(0,h*E,0),d.push(0,E,0),g.push(.5,.5),p++;const k=p;for(let N=0;N<=r;N++){const te=N/r*l+a,K=Math.cos(te),U=Math.sin(te);I.x=y*U,I.y=h*E,I.z=y*K,m.push(I.x,I.y,I.z),d.push(0,E,0),R.x=K*.5+.5,R.y=U*.5*E+.5,g.push(R.x,R.y),p++}for(let N=0;N<r;N++){const j=A+N,te=k+N;x===!0?u.push(te,te+1,j):u.push(te+1,te,j),z+=3}c.addGroup(f,z,x===!0?1:2),f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const wo=new V,Ro=new V,Bs=new V,Co=new hn;class rf extends ln{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),o=Math.cos(Bo*t),s=e.getIndex(),a=e.getAttribute("position"),l=s?s.count:a.count,c=[0,0,0],u=["a","b","c"],m=new Array(3),d={},g=[];for(let p=0;p<l;p+=3){s?(c[0]=s.getX(p),c[1]=s.getX(p+1),c[2]=s.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:h,c:f}=Co;if(v.fromBufferAttribute(a,c[0]),h.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Co.getNormal(Bs),m[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,m[1]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,m[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let D=0;D<3;D++){const P=(D+1)%3,x=m[D],A=m[P],R=Co[u[D]],I=Co[u[P]],z=`${x}_${A}`,y=`${A}_${x}`;y in d&&d[y]?(Bs.dot(d[y].normal)<=o&&(g.push(R.x,R.y,R.z),g.push(I.x,I.y,I.z)),d[y]=null):z in d||(d[z]={index0:c[D],index1:c[P],normal:Bs.clone()})}}for(const p in d)if(d[p]){const{index0:v,index1:h}=d[p];wo.fromBufferAttribute(a,v),Ro.fromBufferAttribute(a,h),g.push(wo.x,wo.y,wo.z),g.push(Ro.x,Ro.y,Ro.z)}this.setAttribute("position",new Xt(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Mr extends ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,m=e/a,d=t/l,g=[],p=[],v=[],h=[];for(let f=0;f<u;f++){const D=f*d-s;for(let P=0;P<c;P++){const x=P*m-o;p.push(x,-D,0),v.push(0,0,1),h.push(P/a),h.push(1-f/l)}}for(let f=0;f<l;f++)for(let D=0;D<a;D++){const P=D+c*f,x=D+c*(f+1),A=D+1+c*(f+1),R=D+1+c*f;g.push(P,x,R),g.push(x,A,R)}this.setIndex(g),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wr extends ln{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let c=0;const u=[],m=new V,d=new V,g=[],p=[],v=[],h=[];for(let f=0;f<=i;f++){const D=[],P=f/i;let x=0;f===0&&s===0?x=.5/t:f===i&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const R=A/t;m.x=-e*Math.cos(r+R*o)*Math.sin(s+P*a),m.y=e*Math.cos(s+P*a),m.z=e*Math.sin(r+R*o)*Math.sin(s+P*a),p.push(m.x,m.y,m.z),d.copy(m).normalize(),v.push(d.x,d.y,d.z),h.push(R+x,1-P),D.push(c++)}u.push(D)}for(let f=0;f<i;f++)for(let D=0;D<t;D++){const P=u[f][D+1],x=u[f][D],A=u[f+1][D],R=u[f+1][D+1];(f!==0||s>0)&&g.push(P,x,R),(f!==i-1||l<Math.PI)&&g.push(x,A,R)}this.setIndex(g),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tn extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class of extends Tn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sf extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class af extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cd extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class lf extends cd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const zs=new yt,nc=new V,ic=new V;class cf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dl,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(nc),ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ic),t.updateMatrixWorld(),zs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dd extends nd{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class df extends cf{constructor(){super(new dd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uf extends cd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new df}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ff extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const rc=new yt;class pf{constructor(e,t,i=0,r=1/0){this.ray=new os(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rc),this}intersectObject(e,t=!0,i=[]){return Ga(e,this,i,t),i.sort(oc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Ga(e[r],this,i,t);return i.sort(oc),i}}function oc(n,e){return n.distance-e.distance}function Ga(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const o=n.children;for(let s=0,a=o.length;s<a;s++)Ga(o[s],e,t,!0)}}function sc(n,e,t,i){const r=mf(i);switch(t){case Wc:return n*e;case qc:return n*e/r.components*r.byteLength;case il:return n*e/r.components*r.byteLength;case Yc:return n*e*2/r.components*r.byteLength;case rl:return n*e*2/r.components*r.byteLength;case Xc:return n*e*3/r.components*r.byteLength;case Rn:return n*e*4/r.components*r.byteLength;case ol:return n*e*4/r.components*r.byteLength;case No:case Fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oo:case ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ha:case ma:return Math.max(n,16)*Math.max(e,8)/4;case fa:case pa:return Math.max(n,8)*Math.max(e,8)/2;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ya:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Da:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ia:case Ua:case Na:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fa:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ka:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mf(n){switch(n){case Un:case zc:return{byteLength:1,components:1};case Br:case Hc:case Yr:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case Ii:case el:case Yn:return{byteLength:4,components:1};case Vc:case Gc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);function ud(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function gf(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,m=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:m}}function i(a,l,c){const u=l.array,m=l.updateRanges;if(n.bindBuffer(c,a),m.length===0)n.bufferSubData(c,0,u);else{m.sort((g,p)=>g.start-p.start);let d=0;for(let g=1;g<m.length;g++){const p=m[d],v=m[g];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,m[d]=v)}m.length=d+1;for(let g=0,p=m.length;g<p;g++){const v=m[g];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var _f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ah=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ch=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ph=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_h=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Th=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ah=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ch=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ph=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ih=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$h=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,up=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ep=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Np=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:_f,alphahash_pars_fragment:vf,alphamap_fragment:xf,alphamap_pars_fragment:Mf,alphatest_fragment:Sf,alphatest_pars_fragment:bf,aomap_fragment:yf,aomap_pars_fragment:Ef,batching_pars_vertex:Tf,batching_vertex:Af,begin_vertex:wf,beginnormal_vertex:Rf,bsdfs:Cf,iridescence_fragment:Pf,bumpmap_pars_fragment:Df,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:Nf,color_fragment:Ff,color_pars_fragment:Of,color_pars_vertex:kf,color_vertex:Bf,common:zf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:qf,colorspace_fragment:Yf,colorspace_pars_fragment:$f,envmap_fragment:jf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Kf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:ch,envmap_vertex:Qf,fog_vertex:eh,fog_pars_vertex:th,fog_fragment:nh,fog_pars_fragment:ih,gradientmap_pars_fragment:rh,lightmap_pars_fragment:oh,lights_lambert_fragment:sh,lights_lambert_pars_fragment:ah,lights_pars_begin:lh,lights_toon_fragment:dh,lights_toon_pars_fragment:uh,lights_phong_fragment:fh,lights_phong_pars_fragment:hh,lights_physical_fragment:ph,lights_physical_pars_fragment:mh,lights_fragment_begin:gh,lights_fragment_maps:_h,lights_fragment_end:vh,logdepthbuf_fragment:xh,logdepthbuf_pars_fragment:Mh,logdepthbuf_pars_vertex:Sh,logdepthbuf_vertex:bh,map_fragment:yh,map_pars_fragment:Eh,map_particle_fragment:Th,map_particle_pars_fragment:Ah,metalnessmap_fragment:wh,metalnessmap_pars_fragment:Rh,morphinstance_vertex:Ch,morphcolor_vertex:Ph,morphnormal_vertex:Dh,morphtarget_pars_vertex:Lh,morphtarget_vertex:Ih,normal_fragment_begin:Uh,normal_fragment_maps:Nh,normal_pars_fragment:Fh,normal_pars_vertex:Oh,normal_vertex:kh,normalmap_pars_fragment:Bh,clearcoat_normal_fragment_begin:zh,clearcoat_normal_fragment_maps:Hh,clearcoat_pars_fragment:Vh,iridescence_pars_fragment:Gh,opaque_fragment:Wh,packing:Xh,premultiplied_alpha_fragment:qh,project_vertex:Yh,dithering_fragment:$h,dithering_pars_fragment:jh,roughnessmap_fragment:Zh,roughnessmap_pars_fragment:Kh,shadowmap_pars_fragment:Jh,shadowmap_pars_vertex:Qh,shadowmap_vertex:ep,shadowmask_pars_fragment:tp,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:rp,skinnormal_vertex:op,specularmap_fragment:sp,specularmap_pars_fragment:ap,tonemapping_fragment:lp,tonemapping_pars_fragment:cp,transmission_fragment:dp,transmission_pars_fragment:up,uv_pars_fragment:fp,uv_pars_vertex:hp,uv_vertex:pp,worldpos_vertex:mp,background_vert:gp,background_frag:_p,backgroundCube_vert:vp,backgroundCube_frag:xp,cube_vert:Mp,cube_frag:Sp,depth_vert:bp,depth_frag:yp,distanceRGBA_vert:Ep,distanceRGBA_frag:Tp,equirect_vert:Ap,equirect_frag:wp,linedashed_vert:Rp,linedashed_frag:Cp,meshbasic_vert:Pp,meshbasic_frag:Dp,meshlambert_vert:Lp,meshlambert_frag:Ip,meshmatcap_vert:Up,meshmatcap_frag:Np,meshnormal_vert:Fp,meshnormal_frag:Op,meshphong_vert:kp,meshphong_frag:Bp,meshphysical_vert:zp,meshphysical_frag:Hp,meshtoon_vert:Vp,meshtoon_frag:Gp,points_vert:Wp,points_frag:Xp,shadow_vert:qp,shadow_frag:Yp,sprite_vert:$p,sprite_frag:jp},Ee={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Pn={basic:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Qt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Qt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Qt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Qt([Ee.points,Ee.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Qt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Qt([Ee.common,Ee.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Qt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Qt([Ee.sprite,Ee.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Qt([Ee.common,Ee.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Qt([Ee.lights,Ee.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Pn.physical={uniforms:Qt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Po={r:0,b:0,g:0},xi=new Nn,Zp=new yt;function Kp(n,e,t,i,r,o,s){const a=new Ye(0);let l=o===!0?0:1,c,u,m=null,d=0,g=null;function p(P){let x=P.isScene===!0?P.background:null;return x&&x.isTexture&&(x=(P.backgroundBlurriness>0?t:e).get(x)),x}function v(P){let x=!1;const A=p(P);A===null?f(a,l):A&&A.isColor&&(f(A,1),x=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(P,x){const A=p(x);A&&(A.isCubeTexture||A.mapping===rs)?(u===void 0&&(u=new St(new It(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:gr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xi.copy(x.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(xi)),u.material.toneMapped=lt.getTransfer(A.colorSpace)!==pt,(m!==A||d!==A.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,m=A,d=A.version,g=n.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new St(new Mr(2,2),new ui({name:"BackgroundMaterial",uniforms:gr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(A.colorSpace)!==pt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(m!==A||d!==A.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,m=A,d=A.version,g=n.toneMapping),c.layers.enableAll(),P.unshift(c,c.geometry,c.material,0,0,null))}function f(P,x){P.getRGB(Po,td(n)),i.buffers.color.setClear(Po.r,Po.g,Po.b,x,s)}function D(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(P,x=1){a.set(P),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(P){l=P,f(a,l)},render:v,addToRenderList:h,dispose:D}}function Jp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(E,k,N,j,te){let K=!1;const U=m(j,N,k);o!==U&&(o=U,c(o.object)),K=g(E,j,N,te),K&&p(E,j,N,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,x(E,k,N,j),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function m(E,k,N){const j=N.wireframe===!0;let te=i[E.id];te===void 0&&(te={},i[E.id]=te);let K=te[k.id];K===void 0&&(K={},te[k.id]=K);let U=K[j];return U===void 0&&(U=d(l()),K[j]=U),U}function d(E){const k=[],N=[],j=[];for(let te=0;te<t;te++)k[te]=0,N[te]=0,j[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:N,attributeDivisors:j,object:E,attributes:{},index:null}}function g(E,k,N,j){const te=o.attributes,K=k.attributes;let U=0;const W=N.getAttributes();for(const F in W)if(W[F].location>=0){const le=te[F];let Me=K[F];if(Me===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor)),le===void 0||le.attribute!==Me||Me&&le.data!==Me.data)return!0;U++}return o.attributesNum!==U||o.index!==j}function p(E,k,N,j){const te={},K=k.attributes;let U=0;const W=N.getAttributes();for(const F in W)if(W[F].location>=0){let le=K[F];le===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(le=E.instanceColor));const Me={};Me.attribute=le,le&&le.data&&(Me.data=le.data),te[F]=Me,U++}o.attributes=te,o.attributesNum=U,o.index=j}function v(){const E=o.newAttributes;for(let k=0,N=E.length;k<N;k++)E[k]=0}function h(E){f(E,0)}function f(E,k){const N=o.newAttributes,j=o.enabledAttributes,te=o.attributeDivisors;N[E]=1,j[E]===0&&(n.enableVertexAttribArray(E),j[E]=1),te[E]!==k&&(n.vertexAttribDivisor(E,k),te[E]=k)}function D(){const E=o.newAttributes,k=o.enabledAttributes;for(let N=0,j=k.length;N<j;N++)k[N]!==E[N]&&(n.disableVertexAttribArray(N),k[N]=0)}function P(E,k,N,j,te,K,U){U===!0?n.vertexAttribIPointer(E,k,N,te,K):n.vertexAttribPointer(E,k,N,j,te,K)}function x(E,k,N,j){v();const te=j.attributes,K=N.getAttributes(),U=k.defaultAttributeValues;for(const W in K){const F=K[W];if(F.location>=0){let re=te[W];if(re===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),re!==void 0){const le=re.normalized,Me=re.itemSize,Re=e.get(re);if(Re===void 0)continue;const We=Re.buffer,$e=Re.type,He=Re.bytesPerElement,ne=$e===n.INT||$e===n.UNSIGNED_INT||re.gpuType===el;if(re.isInterleavedBufferAttribute){const ce=re.data,Ce=ce.stride,Oe=re.offset;if(ce.isInstancedInterleavedBuffer){for(let Le=0;Le<F.locationSize;Le++)f(F.location+Le,ce.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Le=0;Le<F.locationSize;Le++)h(F.location+Le);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Le=0;Le<F.locationSize;Le++)P(F.location+Le,Me/F.locationSize,$e,le,Ce*He,(Oe+Me/F.locationSize*Le)*He,ne)}else{if(re.isInstancedBufferAttribute){for(let ce=0;ce<F.locationSize;ce++)f(F.location+ce,re.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<F.locationSize;ce++)h(F.location+ce);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ce=0;ce<F.locationSize;ce++)P(F.location+ce,Me/F.locationSize,$e,le,Me*He,Me/F.locationSize*ce*He,ne)}}else if(U!==void 0){const le=U[W];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(F.location,le);break;case 3:n.vertexAttrib3fv(F.location,le);break;case 4:n.vertexAttrib4fv(F.location,le);break;default:n.vertexAttrib1fv(F.location,le)}}}}D()}function A(){z();for(const E in i){const k=i[E];for(const N in k){const j=k[N];for(const te in j)u(j[te].object),delete j[te];delete k[N]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const k=i[E.id];for(const N in k){const j=k[N];for(const te in j)u(j[te].object),delete j[te];delete k[N]}delete i[E.id]}function I(E){for(const k in i){const N=i[k];if(N[E.id]===void 0)continue;const j=N[E.id];for(const te in j)u(j[te].object),delete j[te];delete N[E.id]}}function z(){y(),s=!0,o!==r&&(o=r,c(o.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:h,disableUnusedAttributes:D}}function Qp(n,e,t){let i;function r(c){i=c}function o(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,m){m!==0&&(n.drawArraysInstanced(i,c,u,m),t.update(u,i,m))}function a(c,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];t.update(g,i,1)}function l(c,u,m,d){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)s(c[p],u[p],d[p]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,m);let p=0;for(let v=0;v<m;v++)p+=u[v]*d[v];t.update(p,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function em(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(I){return!(I!==Rn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const z=I===Yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Un&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Yn&&!z)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const m=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:x,vertexTextures:A,maxSamples:R}}function tm(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new Si,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const g=m.length!==0||d||i!==0||r;return r=d,i=m.length,g},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,d){t=u(m,d,0)},this.setState=function(m,d,g){const p=m.clippingPlanes,v=m.clipIntersection,h=m.clipShadows,f=n.get(m);if(!r||p===null||p.length===0||o&&!h)o?u(null):c();else{const D=o?0:i,P=D*4;let x=f.clippingState||null;l.value=x,x=u(p,d,P,g);for(let A=0;A!==P;++A)x[A]=t[A];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=D}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(m,d,g,p){const v=m!==null?m.length:0;let h=null;if(v!==0){if(h=l.value,p!==!0||h===null){const f=g+v*4,D=d.matrixWorldInverse;a.getNormalMatrix(D),(h===null||h.length<f)&&(h=new Float32Array(f));for(let P=0,x=g;P!==v;++P,x+=4)s.copy(m[P]).applyMatrix4(D,a),s.normal.toArray(h,x),h[x+3]=s.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,h}}function nm(n){let e=new WeakMap;function t(s,a){return a===ca?s.mapping=fr:a===da&&(s.mapping=hr),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===ca||a===da)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Yu(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const or=4,ac=[.125,.215,.35,.446,.526,.582],Ti=20,Hs=new dd,lc=new Ye;let Vs=null,Gs=0,Ws=0,Xs=!1;const bi=(1+Math.sqrt(5))/2,tr=1/bi,cc=[new V(-bi,tr,0),new V(bi,tr,0),new V(-tr,0,bi),new V(tr,0,bi),new V(0,bi,-tr),new V(0,bi,tr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],im=new V;class dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,o={}){const{size:s=256,position:a=im}=o;Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vs,Gs,Ws),this._renderer.xr.enabled=Xs,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Yr,format:Rn,colorSpace:pr,depthBuffer:!1},r=uc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rm(o)),this._blurMaterial=om(o,e,t)}return r}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,i,r,o){const l=new xn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,g=m.toneMapping;m.getClearColor(lc),m.toneMapping=ai,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null));const v=new mr({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),h=new St(new It,v);let f=!1;const D=e.background;D?D.isColor&&(v.color.copy(D),e.background=null,f=!0):(v.color.copy(lc),f=!0);for(let P=0;P<6;P++){const x=P%3;x===0?(l.up.set(0,c[P],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[P],o.y,o.z)):x===1?(l.up.set(0,0,c[P]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[P],o.z)):(l.up.set(0,c[P],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[P]));const A=this._cubeSize;Do(r,x*A,P>2?A:0,A,A),m.setRenderTarget(r),f&&m.render(h,l),m.render(e,l)}h.geometry.dispose(),h.material.dispose(),m.toneMapping=g,m.autoClear=d,e.background=D}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===fr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new St(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Do(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Hs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=cc[(r-o-1)%cc.length];this._blur(e,o-1,o,s,a)}t.autoClear=i}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,m=new St(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,p=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*Ti-1),v=o/p,h=isFinite(o)?1+Math.floor(u*v):Ti;h>Ti&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ti}`);const f=[];let D=0;for(let I=0;I<Ti;++I){const z=I/v,y=Math.exp(-z*z/2);f.push(y),I===0?D+=y:I<h&&(D+=2*y)}for(let I=0;I<f.length;I++)f[I]=f[I]/D;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=f,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:P}=this;d.dTheta.value=p,d.mipInt.value=P-i;const x=this._sizeLods[r],A=3*x*(r>P-or?r-P+or:0),R=4*(this._cubeSize-x);Do(t,A,R,3*x,2*x),l.setRenderTarget(t),l.render(m,Hs)}}function rm(n){const e=[],t=[],i=[];let r=n;const o=n-or+1+ac.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>n-or?l=ac[s-n+or-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,m=1+c,d=[u,u,m,u,m,m,u,u,m,m,u,m],g=6,p=6,v=3,h=2,f=1,D=new Float32Array(v*p*g),P=new Float32Array(h*p*g),x=new Float32Array(f*p*g);for(let R=0;R<g;R++){const I=R%3*2/3-1,z=R>2?0:-1,y=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];D.set(y,v*p*R),P.set(d,h*p*R);const E=[R,R,R,R,R,R];x.set(E,f*p*R)}const A=new ln;A.setAttribute("position",new Sn(D,v)),A.setAttribute("uv",new Sn(P,h)),A.setAttribute("faceIndex",new Sn(x,f)),e.push(A),r>or&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uc(n,e,t){const i=new Ui(n,e,t);return i.texture.mapping=rs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function om(n,e,t){const i=new Float32Array(Ti),r=new V(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function fc(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function hc(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ca||l===da,u=l===fr||l===hr;if(c||u){let m=e.get(a);const d=m!==void 0?m.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new dc(n)),m=c?t.fromEquirectangular(a,m):t.fromCubemap(a,m),m.texture.pmremVersion=a.pmremVersion,e.set(a,m),m.texture;if(m!==void 0)return m.texture;{const g=a.image;return c&&g&&g.height>0||u&&g&&r(g)?(t===null&&(t=new dc(n)),m=c?t.fromEquirectangular(a):t.fromCubemap(a),m.texture.pmremVersion=a.pmremVersion,e.set(a,m),a.addEventListener("dispose",o),m.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function am(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lm(n,e,t,i){const r={},o=new WeakMap;function s(m){const d=m.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",s),delete r[d.id];const g=o.get(d);g&&(e.remove(g),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(m,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(m){const d=m.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER)}function c(m){const d=[],g=m.index,p=m.attributes.position;let v=0;if(g!==null){const D=g.array;v=g.version;for(let P=0,x=D.length;P<x;P+=3){const A=D[P+0],R=D[P+1],I=D[P+2];d.push(A,R,R,I,I,A)}}else if(p!==void 0){const D=p.array;v=p.version;for(let P=0,x=D.length/3-1;P<x;P+=3){const A=P+0,R=P+1,I=P+2;d.push(A,R,R,I,I,A)}}else return;const h=new(Zc(d)?ed:Qc)(d,1);h.version=v;const f=o.get(m);f&&e.remove(f),o.set(m,h)}function u(m){const d=o.get(m);if(d){const g=m.index;g!==null&&d.version<g.version&&c(m)}else c(m);return o.get(m)}return{get:a,update:l,getWireframeAttribute:u}}function cm(n,e,t){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,g){n.drawElements(i,g,o,d*s),t.update(g,i,1)}function c(d,g,p){p!==0&&(n.drawElementsInstanced(i,g,o,d*s,p),t.update(g,i,p))}function u(d,g,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,d,0,p);let h=0;for(let f=0;f<p;f++)h+=g[f];t.update(h,i,1)}function m(d,g,p,v){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<d.length;f++)c(d[f]/s,g[f],v[f]);else{h.multiDrawElementsInstancedWEBGL(i,g,0,o,d,0,v,0,p);let f=0;for(let D=0;D<p;D++)f+=g[D]*v[D];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=m}function dm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function um(n,e,t){const i=new WeakMap,r=new Dt;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==m){let E=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var g=E;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],D=a.morphAttributes.normal||[],P=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),h===!0&&(x=3);let A=a.attributes.position.count*x,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const I=new Float32Array(A*R*4*m),z=new Kc(I,A,R,m);z.type=Yn,z.needsUpdate=!0;const y=x*4;for(let k=0;k<m;k++){const N=f[k],j=D[k],te=P[k],K=A*R*4*k;for(let U=0;U<N.count;U++){const W=U*y;p===!0&&(r.fromBufferAttribute(N,U),I[K+W+0]=r.x,I[K+W+1]=r.y,I[K+W+2]=r.z,I[K+W+3]=0),v===!0&&(r.fromBufferAttribute(j,U),I[K+W+4]=r.x,I[K+W+5]=r.y,I[K+W+6]=r.z,I[K+W+7]=0),h===!0&&(r.fromBufferAttribute(te,U),I[K+W+8]=r.x,I[K+W+9]=r.y,I[K+W+10]=r.z,I[K+W+11]=te.itemSize===4?r.w:1)}}d={count:m,texture:z,size:new tt(A,R)},i.set(a,d),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let p=0;for(let h=0;h<c.length;h++)p+=c[h];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function fm(n,e,t,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,m=e.get(l,u);if(r.get(m)!==c&&(e.update(m),r.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return m}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const fd=new tn,pc=new ad(1,1),hd=new Kc,pd=new Pu,md=new id,mc=[],gc=[],_c=new Float32Array(16),vc=new Float32Array(9),xc=new Float32Array(4);function Sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=mc[r];if(o===void 0&&(o=new Float32Array(r),mc[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ls(n,e){let t=gc[e];t===void 0&&(t=new Int32Array(e),gc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function _m(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;xc.set(i),n.uniformMatrix2fv(this.addr,!1,xc),Ht(t,i)}}function vm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;vc.set(i),n.uniformMatrix3fv(this.addr,!1,vc),Ht(t,i)}}function xm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;_c.set(i),n.uniformMatrix4fv(this.addr,!1,_c),Ht(t,i)}}function Mm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function Em(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function Rm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(pc.compareFunction=jc,o=pc):o=fd,t.setTexture2D(e||o,r)}function Cm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pd,r)}function Pm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||md,r)}function Dm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hd,r)}function Lm(n){switch(n){case 5126:return hm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return vm;case 35676:return xm;case 5124:case 35670:return Mm;case 35667:case 35671:return Sm;case 35668:case 35672:return bm;case 35669:case 35673:return ym;case 5125:return Em;case 36294:return Tm;case 36295:return Am;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Dm}}function Im(n,e){n.uniform1fv(this.addr,e)}function Um(n,e){const t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function Nm(n,e){const t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function Fm(n,e){const t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function Om(n,e){const t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function km(n,e){const t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bm(n,e){const t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zm(n,e){n.uniform1iv(this.addr,e)}function Hm(n,e){n.uniform2iv(this.addr,e)}function Vm(n,e){n.uniform3iv(this.addr,e)}function Gm(n,e){n.uniform4iv(this.addr,e)}function Wm(n,e){n.uniform1uiv(this.addr,e)}function Xm(n,e){n.uniform2uiv(this.addr,e)}function qm(n,e){n.uniform3uiv(this.addr,e)}function Ym(n,e){n.uniform4uiv(this.addr,e)}function $m(n,e,t){const i=this.cache,r=e.length,o=ls(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Ht(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||fd,o[s])}function jm(n,e,t){const i=this.cache,r=e.length,o=ls(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Ht(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||pd,o[s])}function Zm(n,e,t){const i=this.cache,r=e.length,o=ls(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Ht(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||md,o[s])}function Km(n,e,t){const i=this.cache,r=e.length,o=ls(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Ht(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||hd,o[s])}function Jm(n){switch(n){case 5126:return Im;case 35664:return Um;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return km;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Km}}class Qm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lm(t.type)}}class e0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jm(t.type)}}class t0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const qs=/(\w+)(\])?(\[|\.)?/g;function Mc(n,e){n.seq.push(e),n.map[e.id]=e}function n0(n,e,t){const i=n.name,r=i.length;for(qs.lastIndex=0;;){const o=qs.exec(i),s=qs.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Mc(t,c===void 0?new Qm(a,n,e):new e0(a,n,e));break}else{let m=t.map[a];m===void 0&&(m=new t0(a),Mc(t,m)),t=m}}}class zo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);n0(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Sc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const i0=37297;let r0=0;function o0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}const bc=new Qe;function s0(n){lt._getMatrix(bc,lt.workingColorSpace,n);const e=`mat3( ${bc.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Xo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+o0(n.getShaderSource(e),a)}else return o}function a0(n,e){const t=s0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function l0(n,e){let t;switch(e){case ru:t="Linear";break;case ou:t="Reinhard";break;case su:t="Cineon";break;case au:t="ACESFilmic";break;case cu:t="AgX";break;case du:t="Neutral";break;case lu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lo=new V;function c0(){lt.getLuminanceCoefficients(Lo);const n=Lo.x.toFixed(4),e=Lo.y.toFixed(4),t=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function u0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function f0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function Ir(n){return n!==""}function Ec(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(h0,m0)}const p0=new Map;function m0(n,e){let t=nt[e];if(t===void 0){const i=p0.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(n){return n.replace(g0,_0)}function _0(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function wc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Od?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function x0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case hr:e="ENVMAP_TYPE_CUBE";break;case rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===hr&&(e="ENVMAP_MODE_REFRACTION"),e}function S0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kc:e="ENVMAP_BLENDING_MULTIPLY";break;case nu:e="ENVMAP_BLENDING_MIX";break;case iu:e="ENVMAP_BLENDING_ADD";break}return e}function b0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function y0(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=v0(t),c=x0(t),u=M0(t),m=S0(t),d=b0(t),g=d0(t),p=u0(o),v=r.createProgram();let h,f,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ir).join(`
`),h.length>0&&(h+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ir).join(`
`),f.length>0&&(f+=`
`)):(h=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),f=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?nt.tonemapping_pars_fragment:"",t.toneMapping!==ai?l0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),c0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),s=Wa(s),s=Ec(s,t),s=Tc(s,t),a=Wa(a),a=Ec(a,t),a=Tc(a,t),s=Ac(s),a=Ac(a),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,h=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,f=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const P=D+h+s,x=D+f+a,A=Sc(r,r.VERTEX_SHADER,P),R=Sc(r,r.FRAGMENT_SHADER,x);r.attachShader(v,A),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(k){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(v)||"",j=r.getShaderInfoLog(A)||"",te=r.getShaderInfoLog(R)||"",K=N.trim(),U=j.trim(),W=te.trim();let F=!0,re=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,R);else{const le=yc(r,A,"vertex"),Me=yc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+K+`
`+le+`
`+Me)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(U===""||W==="")&&(re=!1);re&&(k.diagnostics={runnable:F,programLog:K,vertexShader:{log:U,prefix:h},fragmentShader:{log:W,prefix:f}})}r.deleteShader(A),r.deleteShader(R),z=new zo(r,v),y=f0(r,v)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,i0)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}let E0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new A0(e),t.set(e,i)),i}}class A0{constructor(e){this.id=E0++,this.code=e,this.usedTimes=0}}function w0(n,e,t,i,r,o,s){const a=new al,l=new T0,c=new Set,u=[],m=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function h(y,E,k,N,j){const te=N.fog,K=j.geometry,U=y.isMeshStandardMaterial?N.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),F=W&&W.mapping===rs?W.image.height:null,re=p[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const le=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Me=le!==void 0?le.length:0;let Re=0;K.morphAttributes.position!==void 0&&(Re=1),K.morphAttributes.normal!==void 0&&(Re=2),K.morphAttributes.color!==void 0&&(Re=3);let We,$e,He,ne;if(re){const dt=Pn[re];We=dt.vertexShader,$e=dt.fragmentShader}else We=y.vertexShader,$e=y.fragmentShader,l.update(y),He=l.getVertexShaderID(y),ne=l.getFragmentShaderID(y);const ce=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Oe=j.isInstancedMesh===!0,Le=j.isBatchedMesh===!0,it=!!y.map,Vt=!!y.matcap,O=!!W,T=!!y.aoMap,C=!!y.lightMap,b=!!y.bumpMap,w=!!y.normalMap,se=!!y.displacementMap,Y=!!y.emissiveMap,ie=!!y.metalnessMap,oe=!!y.roughnessMap,fe=y.anisotropy>0,M=y.clearcoat>0,_=y.dispersion>0,B=y.iridescence>0,G=y.sheen>0,Z=y.transmission>0,$=fe&&!!y.anisotropyMap,Te=M&&!!y.clearcoatMap,pe=M&&!!y.clearcoatNormalMap,Ie=M&&!!y.clearcoatRoughnessMap,ue=B&&!!y.iridescenceMap,ae=B&&!!y.iridescenceThicknessMap,Se=G&&!!y.sheenColorMap,ke=G&&!!y.sheenRoughnessMap,Fe=!!y.specularMap,Ae=!!y.specularColorMap,Ke=!!y.specularIntensityMap,H=Z&&!!y.transmissionMap,xe=Z&&!!y.thicknessMap,be=!!y.gradientMap,De=!!y.alphaMap,me=y.alphaTest>0,de=!!y.alphaHash,Ne=!!y.extensions;let je=ai;y.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(je=n.toneMapping);const xt={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:$e,defines:y.defines,customVertexShaderID:He,customFragmentShaderID:ne,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Le,batchingColor:Le&&j._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&j.instanceColor!==null,instancingMorph:Oe&&j.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:pr,alphaToCoverage:!!y.alphaToCoverage,map:it,matcap:Vt,envMap:O,envMapMode:O&&W.mapping,envMapCubeUVHeight:F,aoMap:T,lightMap:C,bumpMap:b,normalMap:w,displacementMap:d&&se,emissiveMap:Y,normalMapObjectSpace:w&&y.normalMapType===pu,normalMapTangentSpace:w&&y.normalMapType===$c,metalnessMap:ie,roughnessMap:oe,anisotropy:fe,anisotropyMap:$,clearcoat:M,clearcoatMap:Te,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ie,dispersion:_,iridescence:B,iridescenceMap:ue,iridescenceThicknessMap:ae,sheen:G,sheenColorMap:Se,sheenRoughnessMap:ke,specularMap:Fe,specularColorMap:Ae,specularIntensityMap:Ke,transmission:Z,transmissionMap:H,thicknessMap:xe,gradientMap:be,opaque:y.transparent===!1&&y.blending===sr&&y.alphaToCoverage===!1,alphaMap:De,alphaTest:me,alphaHash:de,combine:y.combine,mapUv:it&&v(y.map.channel),aoMapUv:T&&v(y.aoMap.channel),lightMapUv:C&&v(y.lightMap.channel),bumpMapUv:b&&v(y.bumpMap.channel),normalMapUv:w&&v(y.normalMap.channel),displacementMapUv:se&&v(y.displacementMap.channel),emissiveMapUv:Y&&v(y.emissiveMap.channel),metalnessMapUv:ie&&v(y.metalnessMap.channel),roughnessMapUv:oe&&v(y.roughnessMap.channel),anisotropyMapUv:$&&v(y.anisotropyMap.channel),clearcoatMapUv:Te&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:ke&&v(y.sheenRoughnessMap.channel),specularMapUv:Fe&&v(y.specularMap.channel),specularColorMapUv:Ae&&v(y.specularColorMap.channel),specularIntensityMapUv:Ke&&v(y.specularIntensityMap.channel),transmissionMapUv:H&&v(y.transmissionMap.channel),thicknessMapUv:xe&&v(y.thicknessMap.channel),alphaMapUv:De&&v(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(w||fe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!K.attributes.uv&&(it||De),fog:!!te,useFog:y.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ce,skinning:j.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,decodeVideoTexture:it&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===pt,decodeVideoTextureEmissive:Y&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dn,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ne&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&y.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function f(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)E.push(k),E.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(D(E,y),P(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function D(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function P(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const E=p[y.type];let k;if(E){const N=Pn[E];k=Gu.clone(N.uniforms)}else k=y.uniforms;return k}function A(y,E){let k;for(let N=0,j=u.length;N<j;N++){const te=u[N];if(te.cacheKey===E){k=te,++k.usedTimes;break}}return k===void 0&&(k=new y0(n,E,y,o),u.push(k)),k}function R(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function I(y){l.remove(y)}function z(){l.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:x,acquireProgram:A,releaseProgram:R,releaseShaderCache:I,programs:u,dispose:z}}function R0(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,l){n.get(s)[a]=l}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function C0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cc(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(m,d,g,p,v,h){let f=n[e];return f===void 0?(f={id:m.id,object:m,geometry:d,material:g,groupOrder:p,renderOrder:m.renderOrder,z:v,group:h},n[e]=f):(f.id=m.id,f.object=m,f.geometry=d,f.material=g,f.groupOrder=p,f.renderOrder=m.renderOrder,f.z=v,f.group=h),e++,f}function a(m,d,g,p,v,h){const f=s(m,d,g,p,v,h);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):t.push(f)}function l(m,d,g,p,v,h){const f=s(m,d,g,p,v,h);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):t.unshift(f)}function c(m,d){t.length>1&&t.sort(m||C0),i.length>1&&i.sort(d||Rc),r.length>1&&r.sort(d||Rc)}function u(){for(let m=e,d=n.length;m<d;m++){const g=n[m];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function P0(){let n=new WeakMap;function e(i,r){const o=n.get(i);let s;return o===void 0?(s=new Cc,n.set(i,[s])):r>=o.length?(s=new Cc,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function D0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ye};break;case"SpotLight":t={position:new V,direction:new V,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function L0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let I0=0;function U0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function N0(n){const e=new D0,t=L0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,o=new yt,s=new yt;function a(c){let u=0,m=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let g=0,p=0,v=0,h=0,f=0,D=0,P=0,x=0,A=0,R=0,I=0;c.sort(U0);for(let y=0,E=c.length;y<E;y++){const k=c[y],N=k.color,j=k.intensity,te=k.distance,K=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=N.r*j,m+=N.g*j,d+=N.b*j;else if(k.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(k.sh.coefficients[U],j);I++}else if(k.isDirectionalLight){const U=e.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,F=t.get(k);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.directionalShadow[g]=F,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=k.shadow.matrix,D++}i.directional[g]=U,g++}else if(k.isSpotLight){const U=e.get(k);U.position.setFromMatrixPosition(k.matrixWorld),U.color.copy(N).multiplyScalar(j),U.distance=te,U.coneCos=Math.cos(k.angle),U.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),U.decay=k.decay,i.spot[v]=U;const W=k.shadow;if(k.map&&(i.spotLightMap[A]=k.map,A++,W.updateMatrices(k),k.castShadow&&R++),i.spotLightMatrix[v]=W.matrix,k.castShadow){const F=t.get(k);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=K,x++}v++}else if(k.isRectAreaLight){const U=e.get(k);U.color.copy(N).multiplyScalar(j),U.halfWidth.set(k.width*.5,0,0),U.halfHeight.set(0,k.height*.5,0),i.rectArea[h]=U,h++}else if(k.isPointLight){const U=e.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),U.distance=k.distance,U.decay=k.decay,k.castShadow){const W=k.shadow,F=t.get(k);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=k.shadow.matrix,P++}i.point[p]=U,p++}else if(k.isHemisphereLight){const U=e.get(k);U.skyColor.copy(k.color).multiplyScalar(j),U.groundColor.copy(k.groundColor).multiplyScalar(j),i.hemi[f]=U,f++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=d;const z=i.hash;(z.directionalLength!==g||z.pointLength!==p||z.spotLength!==v||z.rectAreaLength!==h||z.hemiLength!==f||z.numDirectionalShadows!==D||z.numPointShadows!==P||z.numSpotShadows!==x||z.numSpotMaps!==A||z.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=h,i.point.length=p,i.hemi.length=f,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=x+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,z.directionalLength=g,z.pointLength=p,z.spotLength=v,z.rectAreaLength=h,z.hemiLength=f,z.numDirectionalShadows=D,z.numPointShadows=P,z.numSpotShadows=x,z.numSpotMaps=A,z.numLightProbes=I,i.version=I0++)}function l(c,u){let m=0,d=0,g=0,p=0,v=0;const h=u.matrixWorldInverse;for(let f=0,D=c.length;f<D;f++){const P=c[f];if(P.isDirectionalLight){const x=i.directional[m];x.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(h),m++}else if(P.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(P.matrixWorld),x.position.applyMatrix4(h),x.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(h),g++}else if(P.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(P.matrixWorld),x.position.applyMatrix4(h),s.identity(),o.copy(P.matrixWorld),o.premultiply(h),s.extractRotation(o),x.halfWidth.set(P.width*.5,0,0),x.halfHeight.set(0,P.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),p++}else if(P.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(P.matrixWorld),x.position.applyMatrix4(h),d++}else if(P.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(P.matrixWorld),x.direction.transformDirection(h),v++}}}return{setup:a,setupView:l,state:i}}function Pc(n){const e=new N0(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function o(u){t.push(u)}function s(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function F0(n){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Pc(n),e.set(r,[a])):o>=s.length?(a=new Pc(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const O0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function B0(n,e,t){let i=new dl;const r=new tt,o=new tt,s=new Dt,a=new sf({depthPacking:hu}),l=new af,c={},u=t.maxTextureSize,m={[di]:on,[on]:di,[Dn]:Dn},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:O0,fragmentShader:k0}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const p=new ln;p.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new St(p,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let f=this.type;this.render=function(R,I,z){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),E=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),N=n.state;N.setBlending(si),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const j=f!==Xn&&this.type===Xn,te=f===Xn&&this.type!==Xn;for(let K=0,U=R.length;K<U;K++){const W=R[K],F=W.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const re=F.getFrameExtents();if(r.multiply(re),o.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/re.x),r.x=o.x*re.x,F.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/re.y),r.y=o.y*re.y,F.mapSize.y=o.y)),F.map===null||j===!0||te===!0){const Me=this.type!==Xn?{minFilter:sn,magFilter:sn}:{};F.map!==null&&F.map.dispose(),F.map=new Ui(r.x,r.y,Me),F.map.texture.name=W.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const le=F.getViewportCount();for(let Me=0;Me<le;Me++){const Re=F.getViewport(Me);s.set(o.x*Re.x,o.y*Re.y,o.x*Re.z,o.y*Re.w),N.viewport(s),F.updateMatrices(W,Me),i=F.getFrustum(),x(I,z,F.camera,W,this.type)}F.isPointLightShadow!==!0&&this.type===Xn&&D(F,z),F.needsUpdate=!1}f=this.type,h.needsUpdate=!1,n.setRenderTarget(y,E,k)};function D(R,I){const z=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ui(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,z,d,v,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,z,g,v,null)}function P(R,I,z,y){let E=null;const k=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)E=k;else if(E=z.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const N=E.uuid,j=I.uuid;let te=c[N];te===void 0&&(te={},c[N]=te);let K=te[j];K===void 0&&(K=E.clone(),te[j]=K,I.addEventListener("dispose",A)),E=K}if(E.visible=I.visible,E.wireframe=I.wireframe,y===Xn?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:m[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const N=n.properties.get(E);N.light=z}return E}function x(R,I,z,y,E){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Xn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const j=e.update(R),te=R.material;if(Array.isArray(te)){const K=j.groups;for(let U=0,W=K.length;U<W;U++){const F=K[U],re=te[F.materialIndex];if(re&&re.visible){const le=P(R,re,y,E);R.onBeforeShadow(n,R,I,z,j,le,F),n.renderBufferDirect(z,null,j,le,R,F),R.onAfterShadow(n,R,I,z,j,le,F)}}}else if(te.visible){const K=P(R,te,y,E);R.onBeforeShadow(n,R,I,z,j,K,null),n.renderBufferDirect(z,null,j,K,R,null),R.onAfterShadow(n,R,I,z,j,K,null)}}const N=R.children;for(let j=0,te=N.length;j<te;j++)x(N[j],I,z,y,E)}function A(R){R.target.removeEventListener("dispose",A);for(const z in c){const y=c[z],E=R.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const z0={[na]:ia,[ra]:aa,[oa]:la,[ur]:sa,[ia]:na,[aa]:ra,[la]:oa,[sa]:ur};function H0(n,e){function t(){let H=!1;const xe=new Dt;let be=null;const De=new Dt(0,0,0,0);return{setMask:function(me){be!==me&&!H&&(n.colorMask(me,me,me,me),be=me)},setLocked:function(me){H=me},setClear:function(me,de,Ne,je,xt){xt===!0&&(me*=je,de*=je,Ne*=je),xe.set(me,de,Ne,je),De.equals(xe)===!1&&(n.clearColor(me,de,Ne,je),De.copy(xe))},reset:function(){H=!1,be=null,De.set(-1,0,0,0)}}}function i(){let H=!1,xe=!1,be=null,De=null,me=null;return{setReversed:function(de){if(xe!==de){const Ne=e.get("EXT_clip_control");de?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),xe=de;const je=me;me=null,this.setClear(je)}},getReversed:function(){return xe},setTest:function(de){de?ce(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(de){be!==de&&!H&&(n.depthMask(de),be=de)},setFunc:function(de){if(xe&&(de=z0[de]),De!==de){switch(de){case na:n.depthFunc(n.NEVER);break;case ia:n.depthFunc(n.ALWAYS);break;case ra:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case oa:n.depthFunc(n.EQUAL);break;case sa:n.depthFunc(n.GEQUAL);break;case aa:n.depthFunc(n.GREATER);break;case la:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=de}},setLocked:function(de){H=de},setClear:function(de){me!==de&&(xe&&(de=1-de),n.clearDepth(de),me=de)},reset:function(){H=!1,be=null,De=null,me=null,xe=!1}}}function r(){let H=!1,xe=null,be=null,De=null,me=null,de=null,Ne=null,je=null,xt=null;return{setTest:function(dt){H||(dt?ce(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(dt){xe!==dt&&!H&&(n.stencilMask(dt),xe=dt)},setFunc:function(dt,Bn,Cn){(be!==dt||De!==Bn||me!==Cn)&&(n.stencilFunc(dt,Bn,Cn),be=dt,De=Bn,me=Cn)},setOp:function(dt,Bn,Cn){(de!==dt||Ne!==Bn||je!==Cn)&&(n.stencilOp(dt,Bn,Cn),de=dt,Ne=Bn,je=Cn)},setLocked:function(dt){H=dt},setClear:function(dt){xt!==dt&&(n.clearStencil(dt),xt=dt)},reset:function(){H=!1,xe=null,be=null,De=null,me=null,de=null,Ne=null,je=null,xt=null}}}const o=new t,s=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},m={},d=new WeakMap,g=[],p=null,v=!1,h=null,f=null,D=null,P=null,x=null,A=null,R=null,I=new Ye(0,0,0),z=0,y=!1,E=null,k=null,N=null,j=null,te=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,W=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),U=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),U=W>=2);let re=null,le={};const Me=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),We=new Dt().fromArray(Me),$e=new Dt().fromArray(Re);function He(H,xe,be,De){const me=new Uint8Array(4),de=n.createTexture();n.bindTexture(H,de),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<be;Ne++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(xe+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return de}const ne={};ne[n.TEXTURE_2D]=He(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=He(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=He(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=He(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),s.setFunc(ur),b(!1),w(Tl),ce(n.CULL_FACE),T(si);function ce(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function Ce(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Oe(H,xe){return m[H]!==xe?(n.bindFramebuffer(H,xe),m[H]=xe,H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=xe),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Le(H,xe){let be=g,De=!1;if(H){be=d.get(xe),be===void 0&&(be=[],d.set(xe,be));const me=H.textures;if(be.length!==me.length||be[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ne=me.length;de<Ne;de++)be[de]=n.COLOR_ATTACHMENT0+de;be.length=me.length,De=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,De=!0);De&&n.drawBuffers(be)}function it(H){return p!==H?(n.useProgram(H),p=H,!0):!1}const Vt={[Ei]:n.FUNC_ADD,[Bd]:n.FUNC_SUBTRACT,[zd]:n.FUNC_REVERSE_SUBTRACT};Vt[Hd]=n.MIN,Vt[Vd]=n.MAX;const O={[Gd]:n.ZERO,[Wd]:n.ONE,[Xd]:n.SRC_COLOR,[ea]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[jd]:n.DST_COLOR,[Yd]:n.DST_ALPHA,[qd]:n.ONE_MINUS_SRC_COLOR,[ta]:n.ONE_MINUS_SRC_ALPHA,[Zd]:n.ONE_MINUS_DST_COLOR,[$d]:n.ONE_MINUS_DST_ALPHA,[Jd]:n.CONSTANT_COLOR,[Qd]:n.ONE_MINUS_CONSTANT_COLOR,[eu]:n.CONSTANT_ALPHA,[tu]:n.ONE_MINUS_CONSTANT_ALPHA};function T(H,xe,be,De,me,de,Ne,je,xt,dt){if(H===si){v===!0&&(Ce(n.BLEND),v=!1);return}if(v===!1&&(ce(n.BLEND),v=!0),H!==kd){if(H!==h||dt!==y){if((f!==Ei||x!==Ei)&&(n.blendEquation(n.FUNC_ADD),f=Ei,x=Ei),dt)switch(H){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFunc(n.ONE,n.ONE);break;case wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}D=null,P=null,A=null,R=null,I.set(0,0,0),z=0,h=H,y=dt}return}me=me||xe,de=de||be,Ne=Ne||De,(xe!==f||me!==x)&&(n.blendEquationSeparate(Vt[xe],Vt[me]),f=xe,x=me),(be!==D||De!==P||de!==A||Ne!==R)&&(n.blendFuncSeparate(O[be],O[De],O[de],O[Ne]),D=be,P=De,A=de,R=Ne),(je.equals(I)===!1||xt!==z)&&(n.blendColor(je.r,je.g,je.b,xt),I.copy(je),z=xt),h=H,y=!1}function C(H,xe){H.side===Dn?Ce(n.CULL_FACE):ce(n.CULL_FACE);let be=H.side===on;xe&&(be=!be),b(be),H.blending===sr&&H.transparent===!1?T(si):T(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),o.setMask(H.colorWrite);const De=H.stencilWrite;a.setTest(De),De&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Y(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function b(H){E!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),E=H)}function w(H){H!==Nd?(ce(n.CULL_FACE),H!==k&&(H===Tl?n.cullFace(n.BACK):H===Fd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),k=H}function se(H){H!==N&&(U&&n.lineWidth(H),N=H)}function Y(H,xe,be){H?(ce(n.POLYGON_OFFSET_FILL),(j!==xe||te!==be)&&(n.polygonOffset(xe,be),j=xe,te=be)):Ce(n.POLYGON_OFFSET_FILL)}function ie(H){H?ce(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function oe(H){H===void 0&&(H=n.TEXTURE0+K-1),re!==H&&(n.activeTexture(H),re=H)}function fe(H,xe,be){be===void 0&&(re===null?be=n.TEXTURE0+K-1:be=re);let De=le[be];De===void 0&&(De={type:void 0,texture:void 0},le[be]=De),(De.type!==H||De.texture!==xe)&&(re!==be&&(n.activeTexture(be),re=be),n.bindTexture(H,xe||ne[H]),De.type=H,De.texture=xe)}function M(){const H=le[re];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function G(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(H){We.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),We.copy(H))}function ke(H){$e.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),$e.copy(H))}function Fe(H,xe){let be=c.get(xe);be===void 0&&(be=new WeakMap,c.set(xe,be));let De=be.get(H);De===void 0&&(De=n.getUniformBlockIndex(xe,H.name),be.set(H,De))}function Ae(H,xe){const De=c.get(xe).get(H);l.get(xe)!==De&&(n.uniformBlockBinding(xe,De,H.__bindingPointIndex),l.set(xe,De))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,le={},m={},d=new WeakMap,g=[],p=null,v=!1,h=null,f=null,D=null,P=null,x=null,A=null,R=null,I=new Ye(0,0,0),z=0,y=!1,E=null,k=null,N=null,j=null,te=null,We.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ce,disable:Ce,bindFramebuffer:Oe,drawBuffers:Le,useProgram:it,setBlending:T,setMaterial:C,setFlipSided:b,setCullFace:w,setLineWidth:se,setPolygonOffset:Y,setScissorTest:ie,activeTexture:oe,bindTexture:fe,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:ue,texImage3D:ae,updateUBOMapping:Fe,uniformBlockBinding:Ae,texStorage2D:pe,texStorage3D:Ie,texSubImage2D:G,texSubImage3D:Z,compressedTexSubImage2D:$,compressedTexSubImage3D:Te,scissor:Se,viewport:ke,reset:Ke}}function V0(n,e,t,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let m;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(M,_){return g?new OffscreenCanvas(M,_):Yo("canvas")}function v(M,_,B){let G=1;const Z=fe(M);if((Z.width>B||Z.height>B)&&(G=B/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const $=Math.floor(G*Z.width),Te=Math.floor(G*Z.height);m===void 0&&(m=p($,Te));const pe=_?p($,Te):m;return pe.width=$,pe.height=Te,pe.getContext("2d").drawImage(M,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+Te+")."),pe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function h(M){return M.generateMipmaps}function f(M){n.generateMipmap(M)}function D(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(M,_,B,G,Z=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $=_;if(_===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),_===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),_===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),_===n.RGBA){const Te=Z?Xo:lt.getTransfer(G);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=Te===pt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(M,_){let B;return M?_===null||_===Ii||_===zr?B=n.DEPTH24_STENCIL8:_===Yn?B=n.DEPTH32F_STENCIL8:_===Br&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ii||_===zr?B=n.DEPTH_COMPONENT24:_===Yn?B=n.DEPTH_COMPONENT32F:_===Br&&(B=n.DEPTH_COMPONENT16),B}function A(M,_){return h(M)===!0||M.isFramebufferTexture&&M.minFilter!==sn&&M.minFilter!==wn?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function R(M){const _=M.target;_.removeEventListener("dispose",R),z(_),_.isVideoTexture&&u.delete(_)}function I(M){const _=M.target;_.removeEventListener("dispose",I),E(_)}function z(M){const _=i.get(M);if(_.__webglInit===void 0)return;const B=M.source,G=d.get(B);if(G){const Z=G[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(M),Object.keys(G).length===0&&d.delete(B)}i.remove(M)}function y(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const B=M.source,G=d.get(B);delete G[_.__cacheKey],s.memory.textures--}function E(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let Z=0;Z<_.__webglFramebuffer[G].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[G][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=M.textures;for(let G=0,Z=B.length;G<Z;G++){const $=i.get(B[G]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),s.memory.textures--),i.remove(B[G])}i.remove(M)}let k=0;function N(){k=0}function j(){const M=k;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),k+=1,M}function te(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function K(M,_){const B=i.get(M);if(M.isVideoTexture&&ie(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&B.__version!==M.version){const G=M.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(B,M,_);return}}else M.isExternalTexture&&(B.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function U(M,_){const B=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&B.__version!==M.version){ne(B,M,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function W(M,_){const B=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&B.__version!==M.version){ne(B,M,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function F(M,_){const B=i.get(M);if(M.version>0&&B.__version!==M.version){ce(B,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}const re={[Wo]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[ua]:n.MIRRORED_REPEAT},le={[sn]:n.NEAREST,[uu]:n.NEAREST_MIPMAP_NEAREST,[to]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[hs]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},Me={[mu]:n.NEVER,[Su]:n.ALWAYS,[gu]:n.LESS,[jc]:n.LEQUAL,[_u]:n.EQUAL,[Mu]:n.GEQUAL,[vu]:n.GREATER,[xu]:n.NOTEQUAL};function Re(M,_){if(_.type===Yn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===wn||_.magFilter===hs||_.magFilter===to||_.magFilter===wi||_.minFilter===wn||_.minFilter===hs||_.minFilter===to||_.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,re[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,re[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,re[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,le[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,le[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===sn||_.minFilter!==to&&_.minFilter!==wi||_.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function We(M,_){let B=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",R));const G=_.source;let Z=d.get(G);Z===void 0&&(Z={},d.set(G,Z));const $=te(_);if($!==M.__cacheKey){Z[$]===void 0&&(Z[$]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,B=!0),Z[$].usedTimes++;const Te=Z[M.__cacheKey];Te!==void 0&&(Z[M.__cacheKey].usedTimes--,Te.usedTimes===0&&y(_)),M.__cacheKey=$,M.__webglTexture=Z[$].texture}return B}function $e(M,_,B){return Math.floor(Math.floor(M/B)/_)}function He(M,_,B,G){const $=M.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,B,G,_.data);else{$.sort((ae,Se)=>ae.start-Se.start);let Te=0;for(let ae=1;ae<$.length;ae++){const Se=$[Te],ke=$[ae],Fe=Se.start+Se.count,Ae=$e(ke.start,_.width,4),Ke=$e(Se.start,_.width,4);ke.start<=Fe+1&&Ae===Ke&&$e(ke.start+ke.count-1,_.width,4)===Ae?Se.count=Math.max(Se.count,ke.start+ke.count-Se.start):(++Te,$[Te]=ke)}$.length=Te+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Ie=n.getParameter(n.UNPACK_SKIP_PIXELS),ue=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ae=0,Se=$.length;ae<Se;ae++){const ke=$[ae],Fe=Math.floor(ke.start/4),Ae=Math.ceil(ke.count/4),Ke=Fe%_.width,H=Math.floor(Fe/_.width),xe=Ae,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,Ke,H,xe,be,B,G,_.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function ne(M,_,B){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);const Z=We(M,_),$=_.source;t.bindTexture(G,M.__webglTexture,n.TEXTURE0+B);const Te=i.get($);if($.version!==Te.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);const pe=lt.getPrimaries(lt.workingColorSpace),Ie=_.colorSpace===oi?null:lt.getPrimaries(_.colorSpace),ue=_.colorSpace===oi||pe===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ae=v(_.image,!1,r.maxTextureSize);ae=oe(_,ae);const Se=o.convert(_.format,_.colorSpace),ke=o.convert(_.type);let Fe=P(_.internalFormat,Se,ke,_.colorSpace,_.isVideoTexture);Re(G,_);let Ae;const Ke=_.mipmaps,H=_.isVideoTexture!==!0,xe=Te.__version===void 0||Z===!0,be=$.dataReady,De=A(_,ae);if(_.isDepthTexture)Fe=x(_.format===Vr,_.type),xe&&(H?t.texStorage2D(n.TEXTURE_2D,1,Fe,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ae.width,ae.height,0,Se,ke,null));else if(_.isDataTexture)if(Ke.length>0){H&&xe&&t.texStorage2D(n.TEXTURE_2D,De,Fe,Ke[0].width,Ke[0].height);for(let me=0,de=Ke.length;me<de;me++)Ae=Ke[me],H?be&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Se,ke,Ae.data):t.texImage2D(n.TEXTURE_2D,me,Fe,Ae.width,Ae.height,0,Se,ke,Ae.data);_.generateMipmaps=!1}else H?(xe&&t.texStorage2D(n.TEXTURE_2D,De,Fe,ae.width,ae.height),be&&He(_,ae,Se,ke)):t.texImage2D(n.TEXTURE_2D,0,Fe,ae.width,ae.height,0,Se,ke,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){H&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Fe,Ke[0].width,Ke[0].height,ae.depth);for(let me=0,de=Ke.length;me<de;me++)if(Ae=Ke[me],_.format!==Rn)if(Se!==null)if(H){if(be)if(_.layerUpdates.size>0){const Ne=sc(Ae.width,Ae.height,_.format,_.type);for(const je of _.layerUpdates){const xt=Ae.data.subarray(je*Ne/Ae.data.BYTES_PER_ELEMENT,(je+1)*Ne/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,je,Ae.width,Ae.height,1,Se,xt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,ae.depth,Se,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Fe,Ae.width,Ae.height,ae.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,ae.depth,Se,ke,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Fe,Ae.width,Ae.height,ae.depth,0,Se,ke,Ae.data)}else{H&&xe&&t.texStorage2D(n.TEXTURE_2D,De,Fe,Ke[0].width,Ke[0].height);for(let me=0,de=Ke.length;me<de;me++)Ae=Ke[me],_.format!==Rn?Se!==null?H?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Se,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Fe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?be&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Se,ke,Ae.data):t.texImage2D(n.TEXTURE_2D,me,Fe,Ae.width,Ae.height,0,Se,ke,Ae.data)}else if(_.isDataArrayTexture)if(H){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Fe,ae.width,ae.height,ae.depth),be)if(_.layerUpdates.size>0){const me=sc(ae.width,ae.height,_.format,_.type);for(const de of _.layerUpdates){const Ne=ae.data.subarray(de*me/ae.data.BYTES_PER_ELEMENT,(de+1)*me/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,ae.width,ae.height,1,Se,ke,Ne)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,ke,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ae.width,ae.height,ae.depth,0,Se,ke,ae.data);else if(_.isData3DTexture)H?(xe&&t.texStorage3D(n.TEXTURE_3D,De,Fe,ae.width,ae.height,ae.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,ke,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ae.width,ae.height,ae.depth,0,Se,ke,ae.data);else if(_.isFramebufferTexture){if(xe)if(H)t.texStorage2D(n.TEXTURE_2D,De,Fe,ae.width,ae.height);else{let me=ae.width,de=ae.height;for(let Ne=0;Ne<De;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Fe,me,de,0,Se,ke,null),me>>=1,de>>=1}}else if(Ke.length>0){if(H&&xe){const me=fe(Ke[0]);t.texStorage2D(n.TEXTURE_2D,De,Fe,me.width,me.height)}for(let me=0,de=Ke.length;me<de;me++)Ae=Ke[me],H?be&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Se,ke,Ae):t.texImage2D(n.TEXTURE_2D,me,Fe,Se,ke,Ae);_.generateMipmaps=!1}else if(H){if(xe){const me=fe(ae);t.texStorage2D(n.TEXTURE_2D,De,Fe,me.width,me.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,ke,ae)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Se,ke,ae);h(_)&&f(G),Te.__version=$.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ce(M,_,B){if(_.image.length!==6)return;const G=We(M,_),Z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+B);const $=i.get(Z);if(Z.version!==$.__version||G===!0){t.activeTexture(n.TEXTURE0+B);const Te=lt.getPrimaries(lt.workingColorSpace),pe=_.colorSpace===oi?null:lt.getPrimaries(_.colorSpace),Ie=_.colorSpace===oi||Te===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ue=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let de=0;de<6;de++)!ue&&!ae?Se[de]=v(_.image[de],!0,r.maxCubemapSize):Se[de]=ae?_.image[de].image:_.image[de],Se[de]=oe(_,Se[de]);const ke=Se[0],Fe=o.convert(_.format,_.colorSpace),Ae=o.convert(_.type),Ke=P(_.internalFormat,Fe,Ae,_.colorSpace),H=_.isVideoTexture!==!0,xe=$.__version===void 0||G===!0,be=Z.dataReady;let De=A(_,ke);Re(n.TEXTURE_CUBE_MAP,_);let me;if(ue){H&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ke,ke.width,ke.height);for(let de=0;de<6;de++){me=Se[de].mipmaps;for(let Ne=0;Ne<me.length;Ne++){const je=me[Ne];_.format!==Rn?Fe!==null?H?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,0,0,je.width,je.height,Fe,je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,Ke,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,0,0,je.width,je.height,Fe,Ae,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,Ke,je.width,je.height,0,Fe,Ae,je.data)}}}else{if(me=_.mipmaps,H&&xe){me.length>0&&De++;const de=fe(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ke,de.width,de.height)}for(let de=0;de<6;de++)if(ae){H?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Se[de].width,Se[de].height,Fe,Ae,Se[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ke,Se[de].width,Se[de].height,0,Fe,Ae,Se[de].data);for(let Ne=0;Ne<me.length;Ne++){const xt=me[Ne].image[de].image;H?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,0,0,xt.width,xt.height,Fe,Ae,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,Ke,xt.width,xt.height,0,Fe,Ae,xt.data)}}else{H?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe,Ae,Se[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ke,Fe,Ae,Se[de]);for(let Ne=0;Ne<me.length;Ne++){const je=me[Ne];H?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,0,0,Fe,Ae,je.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,Ke,Fe,Ae,je.image[de])}}}h(_)&&f(n.TEXTURE_CUBE_MAP),$.__version=Z.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Ce(M,_,B,G,Z,$){const Te=o.convert(B.format,B.colorSpace),pe=o.convert(B.type),Ie=P(B.internalFormat,Te,pe,B.colorSpace),ue=i.get(_),ae=i.get(B);if(ae.__renderTarget=_,!ue.__hasExternalTextures){const Se=Math.max(1,_.width>>$),ke=Math.max(1,_.height>>$);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,Ie,Se,ke,_.depth,0,Te,pe,null):t.texImage2D(Z,$,Ie,Se,ke,0,Te,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Z,ae.__webglTexture,0,se(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Z,ae.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(M,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const G=_.depthTexture,Z=G&&G.isDepthTexture?G.type:null,$=x(_.stencilBuffer,Z),Te=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=se(_);Y(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,$,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,$,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,$,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,M)}else{const G=_.textures;for(let Z=0;Z<G.length;Z++){const $=G[Z],Te=o.convert($.format,$.colorSpace),pe=o.convert($.type),Ie=P($.internalFormat,Te,pe,$.colorSpace),ue=se(_);B&&Y(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,Ie,_.width,_.height):Y(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,Ie,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(_.depthTexture);G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const Z=G.__webglTexture,$=se(_);if(_.depthTexture.format===Hr)Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Vr)Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function it(M){const _=i.get(M),B=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const G=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=G}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const G=M.texture.mipmaps;G&&G.length>0?Le(_.__webglFramebuffer[0],M):Le(_.__webglFramebuffer,M)}else if(B){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),Oe(_.__webglDepthbuffer[G],M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,$)}}else{const G=M.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Oe(_.__webglDepthbuffer,M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(M,_,B){const G=i.get(M);_!==void 0&&Ce(G.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&it(M)}function O(M){const _=M.texture,B=i.get(M),G=i.get(_);M.addEventListener("dispose",I);const Z=M.textures,$=M.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,s.memory.textures++),$){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let Ie=0;Ie<_.mipmaps.length;Ie++)B.__webglFramebuffer[pe][Ie]=n.createFramebuffer()}else B.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)B.__webglFramebuffer[pe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Te)for(let pe=0,Ie=Z.length;pe<Ie;pe++){const ue=i.get(Z[pe]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),s.memory.textures++)}if(M.samples>0&&Y(M)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pe=0;pe<Z.length;pe++){const Ie=Z[pe];B.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[pe]);const ue=o.convert(Ie.format,Ie.colorSpace),ae=o.convert(Ie.type),Se=P(Ie.internalFormat,ue,ae,Ie.colorSpace,M.isXRRenderTarget===!0),ke=se(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Se,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,B.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(B.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Re(n.TEXTURE_CUBE_MAP,_);for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Ce(B.__webglFramebuffer[pe][Ie],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie);else Ce(B.__webglFramebuffer[pe],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);h(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let pe=0,Ie=Z.length;pe<Ie;pe++){const ue=Z[pe],ae=i.get(ue);let Se=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Se=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,ae.__webglTexture),Re(Se,ue),Ce(B.__webglFramebuffer,M,ue,n.COLOR_ATTACHMENT0+pe,Se,0),h(ue)&&f(Se)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,G.__webglTexture),Re(pe,_),_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Ce(B.__webglFramebuffer[Ie],M,_,n.COLOR_ATTACHMENT0,pe,Ie);else Ce(B.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,pe,0);h(_)&&f(pe),t.unbindTexture()}M.depthBuffer&&it(M)}function T(M){const _=M.textures;for(let B=0,G=_.length;B<G;B++){const Z=_[B];if(h(Z)){const $=D(M),Te=i.get(Z).__webglTexture;t.bindTexture($,Te),f($),t.unbindTexture()}}}const C=[],b=[];function w(M){if(M.samples>0){if(Y(M)===!1){const _=M.textures,B=M.width,G=M.height;let Z=n.COLOR_BUFFER_BIT;const $=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(M),pe=_.length>1;if(pe)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ie=M.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const ae=i.get(_[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,B,G,0,0,B,G,Z,n.NEAREST),l===!0&&(C.length=0,b.length=0,C.push(n.COLOR_ATTACHMENT0+ue),M.depthBuffer&&M.resolveDepthBuffer===!1&&(C.push($),b.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const ae=i.get(_[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function se(M){return Math.min(r.maxSamples,M.samples)}function Y(M){const _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ie(M){const _=s.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function oe(M,_){const B=M.colorSpace,G=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||B!==pr&&B!==oi&&(lt.getTransfer(B)===pt?(G!==Rn||Z!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function fe(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=N,this.setTexture2D=K,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=F,this.rebindTextures=Vt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Y}function G0(n,e){function t(i,r=oi){let o;const s=lt.getTransfer(r);if(i===Un)return n.UNSIGNED_BYTE;if(i===tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===zc)return n.BYTE;if(i===Hc)return n.SHORT;if(i===Br)return n.UNSIGNED_SHORT;if(i===el)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===Yr)return n.HALF_FLOAT;if(i===Wc)return n.ALPHA;if(i===Xc)return n.RGB;if(i===Rn)return n.RGBA;if(i===Hr)return n.DEPTH_COMPONENT;if(i===Vr)return n.DEPTH_STENCIL;if(i===qc)return n.RED;if(i===il)return n.RED_INTEGER;if(i===Yc)return n.RG;if(i===rl)return n.RG_INTEGER;if(i===ol)return n.RGBA_INTEGER;if(i===No||i===Fo||i===Oo||i===ko)if(s===pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===No)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===No)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fa||i===ha||i===pa||i===ma)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===fa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ha)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ma)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ga||i===_a||i===va)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ga||i===_a)return s===pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===va)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xa||i===Ma||i===Sa||i===ba||i===ya||i===Ea||i===Ta||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===Da||i===La)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===xa)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ma)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sa)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ya)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ea)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ta)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Aa)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wa)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ra)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pa)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Da)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===La)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ia||i===Ua||i===Na)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Ia)return s===pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ua)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fa||i===Oa||i===ka||i===Ba)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Fa)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Oa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ba)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const W0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ld(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ui({vertexShader:W0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y0 extends xr{constructor(e,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,m=null,d=null,g=null,p=null;const v=typeof XRWebGLBinding<"u",h=new q0,f={},D=t.getContextAttributes();let P=null,x=null;const A=[],R=[],I=new tt;let z=null;const y=new xn;y.viewport=new Dt;const E=new xn;E.viewport=new Dt;const k=[y,E],N=new ff;let j=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ce=A[ne];return ce===void 0&&(ce=new Ns,A[ne]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ne){let ce=A[ne];return ce===void 0&&(ce=new Ns,A[ne]=ce),ce.getGripSpace()},this.getHand=function(ne){let ce=A[ne];return ce===void 0&&(ce=new Ns,A[ne]=ce),ce.getHandSpace()};function K(ne){const ce=R.indexOf(ne.inputSource);if(ce===-1)return;const Ce=A[ce];Ce!==void 0&&(Ce.update(ne.inputSource,ne.frame,c||s),Ce.dispatchEvent({type:ne.type,data:ne.inputSource}))}function U(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",W);for(let ne=0;ne<A.length;ne++){const ce=R[ne];ce!==null&&(R[ne]=null,A[ne].disconnect(ce))}j=null,te=null,h.reset();for(const ne in f)delete f[ne];e.setRenderTarget(P),g=null,d=null,m=null,r=null,x=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",U),r.addEventListener("inputsourceschange",W),D.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Oe=null,Le=null;D.depth&&(Le=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=D.stencil?Vr:Hr,Oe=D.stencil?zr:Ii);const it={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:o};m=this.getBinding(),d=m.createProjectionLayer(it),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ui(d.textureWidth,d.textureHeight,{format:Rn,type:Un,depthTexture:new ad(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ce={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,t,Ce),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new Ui(g.framebufferWidth,g.framebufferHeight,{format:Rn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function W(ne){for(let ce=0;ce<ne.removed.length;ce++){const Ce=ne.removed[ce],Oe=R.indexOf(Ce);Oe>=0&&(R[Oe]=null,A[Oe].disconnect(Ce))}for(let ce=0;ce<ne.added.length;ce++){const Ce=ne.added[ce];let Oe=R.indexOf(Ce);if(Oe===-1){for(let it=0;it<A.length;it++)if(it>=R.length){R.push(Ce),Oe=it;break}else if(R[it]===null){R[it]=Ce,Oe=it;break}if(Oe===-1)break}const Le=A[Oe];Le&&Le.connect(Ce)}}const F=new V,re=new V;function le(ne,ce,Ce){F.setFromMatrixPosition(ce.matrixWorld),re.setFromMatrixPosition(Ce.matrixWorld);const Oe=F.distanceTo(re),Le=ce.projectionMatrix.elements,it=Ce.projectionMatrix.elements,Vt=Le[14]/(Le[10]-1),O=Le[14]/(Le[10]+1),T=(Le[9]+1)/Le[5],C=(Le[9]-1)/Le[5],b=(Le[8]-1)/Le[0],w=(it[8]+1)/it[0],se=Vt*b,Y=Vt*w,ie=Oe/(-b+w),oe=ie*-b;if(ce.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(oe),ne.translateZ(ie),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Le[10]===-1)ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const fe=Vt+ie,M=O+ie,_=se-oe,B=Y+(Oe-oe),G=T*O/M*fe,Z=C*O/M*fe;ne.projectionMatrix.makePerspective(_,B,G,Z,fe,M),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Me(ne,ce){ce===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ce.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let ce=ne.near,Ce=ne.far;h.texture!==null&&(h.depthNear>0&&(ce=h.depthNear),h.depthFar>0&&(Ce=h.depthFar)),N.near=E.near=y.near=ce,N.far=E.far=y.far=Ce,(j!==N.near||te!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),j=N.near,te=N.far),N.layers.mask=ne.layers.mask|6,y.layers.mask=N.layers.mask&3,E.layers.mask=N.layers.mask&5;const Oe=ne.parent,Le=N.cameras;Me(N,Oe);for(let it=0;it<Le.length;it++)Me(Le[it],Oe);Le.length===2?le(N,y,E):N.projectionMatrix.copy(y.projectionMatrix),Re(ne,N,Oe)};function Re(ne,ce,Ce){Ce===null?ne.matrix.copy(ce.matrixWorld):(ne.matrix.copy(Ce.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ce.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ha*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ne)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(N)},this.getCameraTexture=function(ne){return f[ne]};let We=null;function $e(ne,ce){if(u=ce.getViewerPose(c||s),p=ce,u!==null){const Ce=u.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let Oe=!1;Ce.length!==N.cameras.length&&(N.cameras.length=0,Oe=!0);for(let O=0;O<Ce.length;O++){const T=Ce[O];let C=null;if(g!==null)C=g.getViewport(T);else{const w=m.getViewSubImage(d,T);C=w.viewport,O===0&&(e.setRenderTargetTextures(x,w.colorTexture,w.depthStencilTexture),e.setRenderTarget(x))}let b=k[O];b===void 0&&(b=new xn,b.layers.enable(O),b.viewport=new Dt,k[O]=b),b.matrix.fromArray(T.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(T.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(C.x,C.y,C.width,C.height),O===0&&(N.matrix.copy(b.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Oe===!0&&N.cameras.push(b)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){m=i.getBinding();const O=m.getDepthInformation(Ce[0]);O&&O.isValid&&O.texture&&h.init(O,r.renderState)}if(Le&&Le.includes("camera-access")&&v){e.state.unbindTexture(),m=i.getBinding();for(let O=0;O<Ce.length;O++){const T=Ce[O].camera;if(T){let C=f[T];C||(C=new ld,f[T]=C);const b=m.getCameraImage(T);C.sourceTexture=b}}}}for(let Ce=0;Ce<A.length;Ce++){const Oe=R[Ce],Le=A[Ce];Oe!==null&&Le!==void 0&&Le.update(Oe,ce,c||s)}We&&We(ne,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),p=null}const He=new ud;He.setAnimationLoop($e),this.setAnimationLoop=function(ne){We=ne},this.dispose=function(){}}}const Mi=new Nn,$0=new yt;function j0(n,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,td(n)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,D,P,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(h,f):f.isMeshToonMaterial?(o(h,f),m(h,f)):f.isMeshPhongMaterial?(o(h,f),u(h,f)):f.isMeshStandardMaterial?(o(h,f),d(h,f),f.isMeshPhysicalMaterial&&g(h,f,x)):f.isMeshMatcapMaterial?(o(h,f),p(h,f)):f.isMeshDepthMaterial?o(h,f):f.isMeshDistanceMaterial?(o(h,f),v(h,f)):f.isMeshNormalMaterial?o(h,f):f.isLineBasicMaterial?(s(h,f),f.isLineDashedMaterial&&a(h,f)):f.isPointsMaterial?l(h,f,D,P):f.isSpriteMaterial?c(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===on&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===on&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const D=e.get(f),P=D.envMap,x=D.envMapRotation;P&&(h.envMap.value=P,Mi.copy(x),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.envMapRotation.value.setFromMatrix4($0.makeRotationFromEuler(Mi)),h.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap&&(h.lightMap.value=f.lightMap,h.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,h.lightMapTransform)),f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function s(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function a(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function l(h,f,D,P){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*D,h.scale.value=P*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function c(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function u(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function m(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function d(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function g(h,f,D){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&h.clearcoatNormalScale.value.negate())),f.dispersion>0&&(h.dispersion.value=f.dispersion),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=D.texture,h.transmissionSamplerSize.value.set(D.width,D.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function p(h,f){f.matcap&&(h.matcap.value=f.matcap)}function v(h,f){const D=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(D.matrixWorld),h.nearDistance.value=D.shadow.camera.near,h.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Z0(n,e,t,i){let r={},o={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(D,P){const x=P.program;i.uniformBlockBinding(D,x)}function c(D,P){let x=r[D.id];x===void 0&&(p(D),x=u(D),r[D.id]=x,D.addEventListener("dispose",h));const A=P.program;i.updateUBOMapping(D,A);const R=e.render.frame;o[D.id]!==R&&(d(D),o[D.id]=R)}function u(D){const P=m();D.__bindingPointIndex=P;const x=n.createBuffer(),A=D.__size,R=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,x),x}function m(){for(let D=0;D<a;D++)if(s.indexOf(D)===-1)return s.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(D){const P=r[D.id],x=D.uniforms,A=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let R=0,I=x.length;R<I;R++){const z=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,E=z.length;y<E;y++){const k=z[y];if(g(k,R,y,A)===!0){const N=k.__offset,j=Array.isArray(k.value)?k.value:[k.value];let te=0;for(let K=0;K<j.length;K++){const U=j[K],W=v(U);typeof U=="number"||typeof U=="boolean"?(k.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,N+te,k.__data)):U.isMatrix3?(k.__data[0]=U.elements[0],k.__data[1]=U.elements[1],k.__data[2]=U.elements[2],k.__data[3]=0,k.__data[4]=U.elements[3],k.__data[5]=U.elements[4],k.__data[6]=U.elements[5],k.__data[7]=0,k.__data[8]=U.elements[6],k.__data[9]=U.elements[7],k.__data[10]=U.elements[8],k.__data[11]=0):(U.toArray(k.__data,te),te+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(D,P,x,A){const R=D.value,I=P+"_"+x;if(A[I]===void 0)return typeof R=="number"||typeof R=="boolean"?A[I]=R:A[I]=R.clone(),!0;{const z=A[I];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return A[I]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function p(D){const P=D.uniforms;let x=0;const A=16;for(let I=0,z=P.length;I<z;I++){const y=Array.isArray(P[I])?P[I]:[P[I]];for(let E=0,k=y.length;E<k;E++){const N=y[E],j=Array.isArray(N.value)?N.value:[N.value];for(let te=0,K=j.length;te<K;te++){const U=j[te],W=v(U),F=x%A,re=F%W.boundary,le=F+re;x+=re,le!==0&&A-le<W.storage&&(x+=A-le),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=W.storage}}}const R=x%A;return R>0&&(x+=A-R),D.__size=x,D.__cache={},this}function v(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function h(D){const P=D.target;P.removeEventListener("dispose",h);const x=s.indexOf(P.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(r[P.id]),delete r[P.id],delete o[P.id]}function f(){for(const D in r)n.deleteBuffer(r[D]);s=[],r={},o={}}return{bind:l,update:c,dispose:f}}class K0{constructor(e={}){const{canvas:t=yu(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;const p=new Uint32Array(4),v=new Int32Array(4);let h=null,f=null;const D=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=rn;let R=0,I=0,z=null,y=-1,E=null;const k=new Dt,N=new Dt;let j=null;const te=new Ye(0);let K=0,U=t.width,W=t.height,F=1,re=null,le=null;const Me=new Dt(0,0,U,W),Re=new Dt(0,0,U,W);let We=!1;const $e=new dl;let He=!1,ne=!1;const ce=new yt,Ce=new V,Oe=new Dt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Vt(){return z===null?F:1}let O=i;function T(S,X){return t.getContext(S,X)}try{const S={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",me,!1),O===null){const X="webgl2";if(O=T(X,S),O===null)throw T(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let C,b,w,se,Y,ie,oe,fe,M,_,B,G,Z,$,Te,pe,Ie,ue,ae,Se,ke,Fe,Ae,Ke;function H(){C=new am(O),C.init(),Fe=new G0(O,C),b=new em(O,C,e,Fe),w=new H0(O,C),b.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),se=new dm(O),Y=new R0,ie=new V0(O,C,w,Y,b,Fe,se),oe=new nm(x),fe=new sm(x),M=new gf(O),Ae=new Jp(O,M),_=new lm(O,M,se,Ae),B=new fm(O,_,M,se),ae=new um(O,b,ie),pe=new tm(Y),G=new w0(x,oe,fe,C,b,Ae,pe),Z=new j0(x,Y),$=new P0,Te=new F0(C),ue=new Kp(x,oe,fe,w,B,g,l),Ie=new B0(x,B,b),Ke=new Z0(O,se,b,w),Se=new Qp(O,C,se),ke=new cm(O,C,se),se.programs=G.programs,x.capabilities=b,x.extensions=C,x.properties=Y,x.renderLists=$,x.shadowMap=Ie,x.state=w,x.info=se}H();const xe=new Y0(x,O);this.xr=xe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=C.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=C.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(U,W,!1))},this.getSize=function(S){return S.set(U,W)},this.setSize=function(S,X,Q=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=S,W=X,t.width=Math.floor(S*F),t.height=Math.floor(X*F),Q===!0&&(t.style.width=S+"px",t.style.height=X+"px"),this.setViewport(0,0,S,X)},this.getDrawingBufferSize=function(S){return S.set(U*F,W*F).floor()},this.setDrawingBufferSize=function(S,X,Q){U=S,W=X,F=Q,t.width=Math.floor(S*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,S,X)},this.getCurrentViewport=function(S){return S.copy(k)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,X,Q,ee){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,X,Q,ee),w.viewport(k.copy(Me).multiplyScalar(F).round())},this.getScissor=function(S){return S.copy(Re)},this.setScissor=function(S,X,Q,ee){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,X,Q,ee),w.scissor(N.copy(Re).multiplyScalar(F).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(S){w.setScissorTest(We=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){le=S},this.getClearColor=function(S){return S.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(S=!0,X=!0,Q=!0){let ee=0;if(S){let q=!1;if(z!==null){const _e=z.texture.format;q=_e===ol||_e===rl||_e===il}if(q){const _e=z.texture.type,we=_e===Un||_e===Ii||_e===Br||_e===zr||_e===tl||_e===nl,Ue=ue.getClearColor(),Pe=ue.getClearAlpha(),Ge=Ue.r,qe=Ue.g,Be=Ue.b;we?(p[0]=Ge,p[1]=qe,p[2]=Be,p[3]=Pe,O.clearBufferuiv(O.COLOR,0,p)):(v[0]=Ge,v[1]=qe,v[2]=Be,v[3]=Pe,O.clearBufferiv(O.COLOR,0,v))}else ee|=O.COLOR_BUFFER_BIT}X&&(ee|=O.DEPTH_BUFFER_BIT),Q&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ue.dispose(),$.dispose(),Te.dispose(),Y.dispose(),oe.dispose(),fe.dispose(),B.dispose(),Ae.dispose(),Ke.dispose(),G.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Cn),xe.removeEventListener("sessionend",xl),hi.stop()};function be(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=se.autoReset,X=Ie.enabled,Q=Ie.autoUpdate,ee=Ie.needsUpdate,q=Ie.type;H(),se.autoReset=S,Ie.enabled=X,Ie.autoUpdate=Q,Ie.needsUpdate=ee,Ie.type=q}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function de(S){const X=S.target;X.removeEventListener("dispose",de),Ne(X)}function Ne(S){je(S),Y.remove(S)}function je(S){const X=Y.get(S).programs;X!==void 0&&(X.forEach(function(Q){G.releaseProgram(Q)}),S.isShaderMaterial&&G.releaseShaderCache(S))}this.renderBufferDirect=function(S,X,Q,ee,q,_e){X===null&&(X=Le);const we=q.isMesh&&q.matrixWorld.determinant()<0,Ue=Cd(S,X,Q,ee,q);w.setMaterial(ee,we);let Pe=Q.index,Ge=1;if(ee.wireframe===!0){if(Pe=_.getWireframeAttribute(Q),Pe===void 0)return;Ge=2}const qe=Q.drawRange,Be=Q.attributes.position;let rt=qe.start*Ge,ht=(qe.start+qe.count)*Ge;_e!==null&&(rt=Math.max(rt,_e.start*Ge),ht=Math.min(ht,(_e.start+_e.count)*Ge)),Pe!==null?(rt=Math.max(rt,0),ht=Math.min(ht,Pe.count)):Be!=null&&(rt=Math.max(rt,0),ht=Math.min(ht,Be.count));const wt=ht-rt;if(wt<0||wt===1/0)return;Ae.setup(q,ee,Ue,Q,Pe);let Mt,_t=Se;if(Pe!==null&&(Mt=M.get(Pe),_t=ke,_t.setIndex(Mt)),q.isMesh)ee.wireframe===!0?(w.setLineWidth(ee.wireframeLinewidth*Vt()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(q.isLine){let ze=ee.linewidth;ze===void 0&&(ze=1),w.setLineWidth(ze*Vt()),q.isLineSegments?_t.setMode(O.LINES):q.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else q.isPoints?_t.setMode(O.POINTS):q.isSprite&&_t.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(C.get("WEBGL_multi_draw"))_t.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const ze=q._multiDrawStarts,Et=q._multiDrawCounts,at=q._multiDrawCount,cn=Pe?M.get(Pe).bytesPerElement:1,Oi=Y.get(ee).currentProgram.getUniforms();for(let dn=0;dn<at;dn++)Oi.setValue(O,"_gl_DrawID",dn),_t.render(ze[dn]/cn,Et[dn])}else if(q.isInstancedMesh)_t.renderInstances(rt,wt,q.count);else if(Q.isInstancedBufferGeometry){const ze=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Et=Math.min(Q.instanceCount,ze);_t.renderInstances(rt,wt,Et)}else _t.render(rt,wt)};function xt(S,X,Q){S.transparent===!0&&S.side===Dn&&S.forceSinglePass===!1?(S.side=on,S.needsUpdate=!0,eo(S,X,Q),S.side=di,S.needsUpdate=!0,eo(S,X,Q),S.side=Dn):eo(S,X,Q)}this.compile=function(S,X,Q=null){Q===null&&(Q=S),f=Te.get(Q),f.init(X),P.push(f),Q.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),S!==Q&&S.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights();const ee=new Set;return S.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const _e=q.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Ue=_e[we];xt(Ue,Q,q),ee.add(Ue)}else xt(_e,Q,q),ee.add(_e)}),f=P.pop(),ee},this.compileAsync=function(S,X,Q=null){const ee=this.compile(S,X,Q);return new Promise(q=>{function _e(){if(ee.forEach(function(we){Y.get(we).currentProgram.isReady()&&ee.delete(we)}),ee.size===0){q(S);return}setTimeout(_e,10)}C.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let dt=null;function Bn(S){dt&&dt(S)}function Cn(){hi.stop()}function xl(){hi.start()}const hi=new ud;hi.setAnimationLoop(Bn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(S){dt=S,xe.setAnimationLoop(S),S===null?hi.stop():hi.start()},xe.addEventListener("sessionstart",Cn),xe.addEventListener("sessionend",xl),this.render=function(S,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(X),X=xe.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,X,z),f=Te.get(S,P.length),f.init(X),P.push(f),ce.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$e.setFromProjectionMatrix(ce,In,X.reversedDepth),ne=this.localClippingEnabled,He=pe.init(this.clippingPlanes,ne),h=$.get(S,D.length),h.init(),D.push(h),xe.enabled===!0&&xe.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&us(_e,X,-1/0,x.sortObjects)}us(S,X,0,x.sortObjects),h.finish(),x.sortObjects===!0&&h.sort(re,le),it=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,it&&ue.addToRenderList(h,S),this.info.render.frame++,He===!0&&pe.beginShadows();const Q=f.state.shadowsArray;Ie.render(Q,S,X),He===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=h.opaque,q=h.transmissive;if(f.setupLights(),X.isArrayCamera){const _e=X.cameras;if(q.length>0)for(let we=0,Ue=_e.length;we<Ue;we++){const Pe=_e[we];Sl(ee,q,S,Pe)}it&&ue.render(S);for(let we=0,Ue=_e.length;we<Ue;we++){const Pe=_e[we];Ml(h,S,Pe,Pe.viewport)}}else q.length>0&&Sl(ee,q,S,X),it&&ue.render(S),Ml(h,S,X);z!==null&&I===0&&(ie.updateMultisampleRenderTarget(z),ie.updateRenderTargetMipmap(z)),S.isScene===!0&&S.onAfterRender(x,S,X),Ae.resetDefaultState(),y=-1,E=null,P.pop(),P.length>0?(f=P[P.length-1],He===!0&&pe.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,D.pop(),D.length>0?h=D[D.length-1]:h=null};function us(S,X,Q,ee){if(S.visible===!1)return;if(S.layers.test(X.layers)){if(S.isGroup)Q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(X);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$e.intersectsSprite(S)){ee&&Oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);const we=B.update(S),Ue=S.material;Ue.visible&&h.push(S,we,Ue,Q,Oe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$e.intersectsObject(S))){const we=B.update(S),Ue=S.material;if(ee&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Oe.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Oe.copy(we.boundingSphere.center)),Oe.applyMatrix4(S.matrixWorld).applyMatrix4(ce)),Array.isArray(Ue)){const Pe=we.groups;for(let Ge=0,qe=Pe.length;Ge<qe;Ge++){const Be=Pe[Ge],rt=Ue[Be.materialIndex];rt&&rt.visible&&h.push(S,we,rt,Q,Oe.z,Be)}}else Ue.visible&&h.push(S,we,Ue,Q,Oe.z,null)}}const _e=S.children;for(let we=0,Ue=_e.length;we<Ue;we++)us(_e[we],X,Q,ee)}function Ml(S,X,Q,ee){const q=S.opaque,_e=S.transmissive,we=S.transparent;f.setupLightsView(Q),He===!0&&pe.setGlobalState(x.clippingPlanes,Q),ee&&w.viewport(k.copy(ee)),q.length>0&&Qr(q,X,Q),_e.length>0&&Qr(_e,X,Q),we.length>0&&Qr(we,X,Q),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Sl(S,X,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ee.id]===void 0&&(f.state.transmissionRenderTarget[ee.id]=new Ui(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?Yr:Un,minFilter:wi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const _e=f.state.transmissionRenderTarget[ee.id],we=ee.viewport||k;_e.setSize(we.z*x.transmissionResolutionScale,we.w*x.transmissionResolutionScale);const Ue=x.getRenderTarget(),Pe=x.getActiveCubeFace(),Ge=x.getActiveMipmapLevel();x.setRenderTarget(_e),x.getClearColor(te),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),it&&ue.render(Q);const qe=x.toneMapping;x.toneMapping=ai;const Be=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),f.setupLightsView(ee),He===!0&&pe.setGlobalState(x.clippingPlanes,ee),Qr(S,Q,ee),ie.updateMultisampleRenderTarget(_e),ie.updateRenderTargetMipmap(_e),C.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let ht=0,wt=X.length;ht<wt;ht++){const Mt=X[ht],_t=Mt.object,ze=Mt.geometry,Et=Mt.material,at=Mt.group;if(Et.side===Dn&&_t.layers.test(ee.layers)){const cn=Et.side;Et.side=on,Et.needsUpdate=!0,bl(_t,Q,ee,ze,Et,at),Et.side=cn,Et.needsUpdate=!0,rt=!0}}rt===!0&&(ie.updateMultisampleRenderTarget(_e),ie.updateRenderTargetMipmap(_e))}x.setRenderTarget(Ue,Pe,Ge),x.setClearColor(te,K),Be!==void 0&&(ee.viewport=Be),x.toneMapping=qe}function Qr(S,X,Q){const ee=X.isScene===!0?X.overrideMaterial:null;for(let q=0,_e=S.length;q<_e;q++){const we=S[q],Ue=we.object,Pe=we.geometry,Ge=we.group;let qe=we.material;qe.allowOverride===!0&&ee!==null&&(qe=ee),Ue.layers.test(Q.layers)&&bl(Ue,X,Q,Pe,qe,Ge)}}function bl(S,X,Q,ee,q,_e){S.onBeforeRender(x,X,Q,ee,q,_e),S.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(x,X,Q,ee,S,_e),q.transparent===!0&&q.side===Dn&&q.forceSinglePass===!1?(q.side=on,q.needsUpdate=!0,x.renderBufferDirect(Q,X,ee,q,S,_e),q.side=di,q.needsUpdate=!0,x.renderBufferDirect(Q,X,ee,q,S,_e),q.side=Dn):x.renderBufferDirect(Q,X,ee,q,S,_e),S.onAfterRender(x,X,Q,ee,q,_e)}function eo(S,X,Q){X.isScene!==!0&&(X=Le);const ee=Y.get(S),q=f.state.lights,_e=f.state.shadowsArray,we=q.state.version,Ue=G.getParameters(S,q.state,_e,X,Q),Pe=G.getProgramCacheKey(Ue);let Ge=ee.programs;ee.environment=S.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(S.isMeshStandardMaterial?fe:oe).get(S.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&S.envMap===null?X.environmentRotation:S.envMapRotation,Ge===void 0&&(S.addEventListener("dispose",de),Ge=new Map,ee.programs=Ge);let qe=Ge.get(Pe);if(qe!==void 0){if(ee.currentProgram===qe&&ee.lightsStateVersion===we)return El(S,Ue),qe}else Ue.uniforms=G.getUniforms(S),S.onBeforeCompile(Ue,x),qe=G.acquireProgram(Ue,Pe),Ge.set(Pe,qe),ee.uniforms=Ue.uniforms;const Be=ee.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=pe.uniform),El(S,Ue),ee.needsLights=Dd(S),ee.lightsStateVersion=we,ee.needsLights&&(Be.ambientLightColor.value=q.state.ambient,Be.lightProbe.value=q.state.probe,Be.directionalLights.value=q.state.directional,Be.directionalLightShadows.value=q.state.directionalShadow,Be.spotLights.value=q.state.spot,Be.spotLightShadows.value=q.state.spotShadow,Be.rectAreaLights.value=q.state.rectArea,Be.ltc_1.value=q.state.rectAreaLTC1,Be.ltc_2.value=q.state.rectAreaLTC2,Be.pointLights.value=q.state.point,Be.pointLightShadows.value=q.state.pointShadow,Be.hemisphereLights.value=q.state.hemi,Be.directionalShadowMap.value=q.state.directionalShadowMap,Be.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Be.spotShadowMap.value=q.state.spotShadowMap,Be.spotLightMatrix.value=q.state.spotLightMatrix,Be.spotLightMap.value=q.state.spotLightMap,Be.pointShadowMap.value=q.state.pointShadowMap,Be.pointShadowMatrix.value=q.state.pointShadowMatrix),ee.currentProgram=qe,ee.uniformsList=null,qe}function yl(S){if(S.uniformsList===null){const X=S.currentProgram.getUniforms();S.uniformsList=zo.seqWithValue(X.seq,S.uniforms)}return S.uniformsList}function El(S,X){const Q=Y.get(S);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function Cd(S,X,Q,ee,q){X.isScene!==!0&&(X=Le),ie.resetTextureUnits();const _e=X.fog,we=ee.isMeshStandardMaterial?X.environment:null,Ue=z===null?x.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:pr,Pe=(ee.isMeshStandardMaterial?fe:oe).get(ee.envMap||we),Ge=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,qe=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Be=!!Q.morphAttributes.position,rt=!!Q.morphAttributes.normal,ht=!!Q.morphAttributes.color;let wt=ai;ee.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(wt=x.toneMapping);const Mt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=Mt!==void 0?Mt.length:0,ze=Y.get(ee),Et=f.state.lights;if(He===!0&&(ne===!0||S!==E)){const Kt=S===E&&ee.id===y;pe.setState(ee,S,Kt)}let at=!1;ee.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Et.state.version||ze.outputColorSpace!==Ue||q.isBatchedMesh&&ze.batching===!1||!q.isBatchedMesh&&ze.batching===!0||q.isBatchedMesh&&ze.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ze.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ze.instancing===!1||!q.isInstancedMesh&&ze.instancing===!0||q.isSkinnedMesh&&ze.skinning===!1||!q.isSkinnedMesh&&ze.skinning===!0||q.isInstancedMesh&&ze.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ze.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ze.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ze.instancingMorph===!1&&q.morphTexture!==null||ze.envMap!==Pe||ee.fog===!0&&ze.fog!==_e||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==pe.numPlanes||ze.numIntersection!==pe.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==qe||ze.morphTargets!==Be||ze.morphNormals!==rt||ze.morphColors!==ht||ze.toneMapping!==wt||ze.morphTargetsCount!==_t)&&(at=!0):(at=!0,ze.__version=ee.version);let cn=ze.currentProgram;at===!0&&(cn=eo(ee,X,q));let Oi=!1,dn=!1,yr=!1;const Tt=cn.getUniforms(),gn=ze.uniforms;if(w.useProgram(cn.program)&&(Oi=!0,dn=!0,yr=!0),ee.id!==y&&(y=ee.id,dn=!0),Oi||E!==S){w.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Tt.setValue(O,"projectionMatrix",S.projectionMatrix),Tt.setValue(O,"viewMatrix",S.matrixWorldInverse);const nn=Tt.map.cameraPosition;nn!==void 0&&nn.setValue(O,Ce.setFromMatrixPosition(S.matrixWorld)),b.logarithmicDepthBuffer&&Tt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Tt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,dn=!0,yr=!0)}if(q.isSkinnedMesh){Tt.setOptional(O,q,"bindMatrix"),Tt.setOptional(O,q,"bindMatrixInverse");const Kt=q.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Tt.setValue(O,"boneTexture",Kt.boneTexture,ie))}q.isBatchedMesh&&(Tt.setOptional(O,q,"batchingTexture"),Tt.setValue(O,"batchingTexture",q._matricesTexture,ie),Tt.setOptional(O,q,"batchingIdTexture"),Tt.setValue(O,"batchingIdTexture",q._indirectTexture,ie),Tt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Tt.setValue(O,"batchingColorTexture",q._colorsTexture,ie));const _n=Q.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ae.update(q,Q,cn),(dn||ze.receiveShadow!==q.receiveShadow)&&(ze.receiveShadow=q.receiveShadow,Tt.setValue(O,"receiveShadow",q.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(gn.envMap.value=Pe,gn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(gn.envMapIntensity.value=X.environmentIntensity),dn&&(Tt.setValue(O,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&Pd(gn,yr),_e&&ee.fog===!0&&Z.refreshFogUniforms(gn,_e),Z.refreshMaterialUniforms(gn,ee,F,W,f.state.transmissionRenderTarget[S.id]),zo.upload(O,yl(ze),gn,ie)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(zo.upload(O,yl(ze),gn,ie),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Tt.setValue(O,"center",q.center),Tt.setValue(O,"modelViewMatrix",q.modelViewMatrix),Tt.setValue(O,"normalMatrix",q.normalMatrix),Tt.setValue(O,"modelMatrix",q.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Kt=ee.uniformsGroups;for(let nn=0,fs=Kt.length;nn<fs;nn++){const pi=Kt[nn];Ke.update(pi,cn),Ke.bind(pi,cn)}}return cn}function Pd(S,X){S.ambientLightColor.needsUpdate=X,S.lightProbe.needsUpdate=X,S.directionalLights.needsUpdate=X,S.directionalLightShadows.needsUpdate=X,S.pointLights.needsUpdate=X,S.pointLightShadows.needsUpdate=X,S.spotLights.needsUpdate=X,S.spotLightShadows.needsUpdate=X,S.rectAreaLights.needsUpdate=X,S.hemisphereLights.needsUpdate=X}function Dd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,X,Q){const ee=Y.get(S);ee.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Y.get(S.texture).__webglTexture=X,Y.get(S.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:Q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,X){const Q=Y.get(S);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0};const Ld=O.createFramebuffer();this.setRenderTarget=function(S,X=0,Q=0){z=S,R=X,I=Q;let ee=!0,q=null,_e=!1,we=!1;if(S){const Pe=Y.get(S);if(Pe.__useDefaultFramebuffer!==void 0)w.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(Pe.__webglFramebuffer===void 0)ie.setupRenderTarget(S);else if(Pe.__hasExternalTextures)ie.rebindTextures(S,Y.get(S.texture).__webglTexture,Y.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Be=S.depthTexture;if(Pe.__boundDepthTexture!==Be){if(Be!==null&&Y.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(S)}}const Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(we=!0);const qe=Y.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qe[X])?q=qe[X][Q]:q=qe[X],_e=!0):S.samples>0&&ie.useMultisampledRTT(S)===!1?q=Y.get(S).__webglMultisampledFramebuffer:Array.isArray(qe)?q=qe[Q]:q=qe,k.copy(S.viewport),N.copy(S.scissor),j=S.scissorTest}else k.copy(Me).multiplyScalar(F).floor(),N.copy(Re).multiplyScalar(F).floor(),j=We;if(Q!==0&&(q=Ld),w.bindFramebuffer(O.FRAMEBUFFER,q)&&ee&&w.drawBuffers(S,q),w.viewport(k),w.scissor(N),w.setScissorTest(j),_e){const Pe=Y.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,Q)}else if(we){const Pe=X;for(let Ge=0;Ge<S.textures.length;Ge++){const qe=Y.get(S.textures[Ge]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ge,qe.__webglTexture,Q,Pe)}}else if(S!==null&&Q!==0){const Pe=Y.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pe.__webglTexture,Q)}y=-1},this.readRenderTargetPixels=function(S,X,Q,ee,q,_e,we,Ue=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){w.bindFramebuffer(O.FRAMEBUFFER,Pe);try{const Ge=S.textures[Ue],qe=Ge.format,Be=Ge.type;if(!b.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=S.width-ee&&Q>=0&&Q<=S.height-q&&(S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ue),O.readPixels(X,Q,ee,q,Fe.convert(qe),Fe.convert(Be),_e))}finally{const Ge=z!==null?Y.get(z).__webglFramebuffer:null;w.bindFramebuffer(O.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(S,X,Q,ee,q,_e,we,Ue=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe)if(X>=0&&X<=S.width-ee&&Q>=0&&Q<=S.height-q){w.bindFramebuffer(O.FRAMEBUFFER,Pe);const Ge=S.textures[Ue],qe=Ge.format,Be=Ge.type;if(!b.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.bufferData(O.PIXEL_PACK_BUFFER,_e.byteLength,O.STREAM_READ),S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ue),O.readPixels(X,Q,ee,q,Fe.convert(qe),Fe.convert(Be),0);const ht=z!==null?Y.get(z).__webglFramebuffer:null;w.bindFramebuffer(O.FRAMEBUFFER,ht);const wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Eu(O,wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_e),O.deleteBuffer(rt),O.deleteSync(wt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,X=null,Q=0){const ee=Math.pow(2,-Q),q=Math.floor(S.image.width*ee),_e=Math.floor(S.image.height*ee),we=X!==null?X.x:0,Ue=X!==null?X.y:0;ie.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,we,Ue,q,_e),w.unbindTexture()};const Id=O.createFramebuffer(),Ud=O.createFramebuffer();this.copyTextureToTexture=function(S,X,Q=null,ee=null,q=0,_e=null){_e===null&&(q!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=q,q=0):_e=0);let we,Ue,Pe,Ge,qe,Be,rt,ht,wt;const Mt=S.isCompressedTexture?S.mipmaps[_e]:S.image;if(Q!==null)we=Q.max.x-Q.min.x,Ue=Q.max.y-Q.min.y,Pe=Q.isBox3?Q.max.z-Q.min.z:1,Ge=Q.min.x,qe=Q.min.y,Be=Q.isBox3?Q.min.z:0;else{const _n=Math.pow(2,-q);we=Math.floor(Mt.width*_n),Ue=Math.floor(Mt.height*_n),S.isDataArrayTexture?Pe=Mt.depth:S.isData3DTexture?Pe=Math.floor(Mt.depth*_n):Pe=1,Ge=0,qe=0,Be=0}ee!==null?(rt=ee.x,ht=ee.y,wt=ee.z):(rt=0,ht=0,wt=0);const _t=Fe.convert(X.format),ze=Fe.convert(X.type);let Et;X.isData3DTexture?(ie.setTexture3D(X,0),Et=O.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ie.setTexture2DArray(X,0),Et=O.TEXTURE_2D_ARRAY):(ie.setTexture2D(X,0),Et=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const at=O.getParameter(O.UNPACK_ROW_LENGTH),cn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Oi=O.getParameter(O.UNPACK_SKIP_PIXELS),dn=O.getParameter(O.UNPACK_SKIP_ROWS),yr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Mt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ge),O.pixelStorei(O.UNPACK_SKIP_ROWS,qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Be);const Tt=S.isDataArrayTexture||S.isData3DTexture,gn=X.isDataArrayTexture||X.isData3DTexture;if(S.isDepthTexture){const _n=Y.get(S),Kt=Y.get(X),nn=Y.get(_n.__renderTarget),fs=Y.get(Kt.__renderTarget);w.bindFramebuffer(O.READ_FRAMEBUFFER,nn.__webglFramebuffer),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let pi=0;pi<Pe;pi++)Tt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(S).__webglTexture,q,Be+pi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(X).__webglTexture,_e,wt+pi)),O.blitFramebuffer(Ge,qe,we,Ue,rt,ht,we,Ue,O.DEPTH_BUFFER_BIT,O.NEAREST);w.bindFramebuffer(O.READ_FRAMEBUFFER,null),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||S.isRenderTargetTexture||Y.has(S)){const _n=Y.get(S),Kt=Y.get(X);w.bindFramebuffer(O.READ_FRAMEBUFFER,Id),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ud);for(let nn=0;nn<Pe;nn++)Tt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_n.__webglTexture,q,Be+nn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_n.__webglTexture,q),gn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kt.__webglTexture,_e,wt+nn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kt.__webglTexture,_e),q!==0?O.blitFramebuffer(Ge,qe,we,Ue,rt,ht,we,Ue,O.COLOR_BUFFER_BIT,O.NEAREST):gn?O.copyTexSubImage3D(Et,_e,rt,ht,wt+nn,Ge,qe,we,Ue):O.copyTexSubImage2D(Et,_e,rt,ht,Ge,qe,we,Ue);w.bindFramebuffer(O.READ_FRAMEBUFFER,null),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gn?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(Et,_e,rt,ht,wt,we,Ue,Pe,_t,ze,Mt.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(Et,_e,rt,ht,wt,we,Ue,Pe,_t,Mt.data):O.texSubImage3D(Et,_e,rt,ht,wt,we,Ue,Pe,_t,ze,Mt):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_e,rt,ht,we,Ue,_t,ze,Mt.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_e,rt,ht,Mt.width,Mt.height,_t,Mt.data):O.texSubImage2D(O.TEXTURE_2D,_e,rt,ht,we,Ue,_t,ze,Mt);O.pixelStorei(O.UNPACK_ROW_LENGTH,at),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,cn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Oi),O.pixelStorei(O.UNPACK_SKIP_ROWS,dn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,yr),_e===0&&X.generateMipmaps&&O.generateMipmap(Et),w.unbindTexture()},this.initRenderTarget=function(S){Y.get(S).__webglFramebuffer===void 0&&ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ie.setTextureCube(S,0):S.isData3DTexture?ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ie.setTexture2DArray(S,0):ie.setTexture2D(S,0),w.unbindTexture()},this.resetState=function(){R=0,I=0,z=null,w.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Bt=[["grass","Pasto","#58a93b"],["dirt","Tierra","#8a5933"],["stone","Piedra","#7c848b"],["cobble","Adoquín","#747b80"],["sand","Arena","#decf83"],["gravel","Grava","#8f8b87"],["oak","Tronco","#9a6839"],["planks","Tablones","#b9854c"],["leaves","Hojas","#347f3b"],["glass","Vidrio","#c7eef5"],["brick","Ladrillos","#a85040"],["coal","Carbón","#25282b"],["iron","Hierro","#d6b9a1"],["gold","Oro","#f4d13e"],["redstone","Redstone","#d94039"],["diamond","Diamante","#4fe3da"],["emerald","Esmeralda","#37cf69"],["obsidian","Obsidiana","#2d2440"],["snow","Nieve","#edf5f7"],["ice","Hielo","#a8e1f4"],["clay","Arcilla","#9ba7ae"],["netherrack","Roca roja","#833c3c"],["glow","Piedra luminosa","#d5ad63"],["quartz","Cuarzo","#e8e2da"],["blackstone","Piedra negra","#323238"],["deepslate","Pizarra profunda","#45484b"],["copper","Cobre","#c97a55"],["woolWhite","Lana blanca","#e6e6e2"],["woolRed","Lana roja","#aa3f46"],["woolBlue","Lana azul","#3e5fa8"],["bookshelf","Librería","#8c6038"],["crafting","Mesa de crafteo","#9b6c39"],["furnace","Horno","#73797d"],["chest","Cofre","#9a6a36"],["lamp","Lámpara","#d8a448"],["terracotta","Terracota","#a75f43"],["prismarine","Prismarina","#5b9f96"],["endstone","Piedra pálida","#d9d89a"],["mud","Barro","#5f5148"],["moss","Musgo","#4e7d3b"],["redSand","Arena roja","#c87943"],["basalt","Basalto","#4a4a50"],["calcite","Calcita","#e1ddd1"],["amethyst","Amatista","#936cc4"],["mushroom","Bloque hongo","#a95550"],["darkPlanks","Madera oscura","#66503a"],["bamboo","Bambú","#a8bd52"],["seaLantern","Linterna marina","#b9e3dc"],["packedIce","Hielo compacto","#77b9d6"],["bone","Bloque hueso","#dfd7bd"],["slime","Bloque gel","#74c85d"],["honey","Bloque miel","#d9952c"],["copperOx","Cobre oxidado","#4f9b85"],["powerDust","Polvo conductor","#b32626"],["lever","Palanca","#786451"],["powerLamp","Lámpara eléctrica","#6f5b2a"],["portalStone","Piedra de portal","#312040"],["portalCore","Núcleo de portal","#7b36c9"],["fossilRock","Roca fósil","#8a806f"],["dnaAnalyzer","Analizador de ADN","#6c8994"],["incubator","Incubadora","#a8d9cd"],["dinoCrate","Caja paleontológica","#89663f"],["electricFence","Cerca eléctrica","#6f8792"],["reinforcedWall","Muro reforzado","#4f5963"],["radarArray","Radar Mini-IA","#3f7286"],["bioScanner","Escáner biológico","#54a88e"],["antiZombieGlass","Cristal antizombies","#9ed7dc"],["steelPlate","Placa de acero","#697780"],["hazardStripe","Bloque de seguridad","#d6a52b"],["scannerLight","Luz de escáner","#62d9c9"],["fossilBrick","Ladrillo fósil","#a29478"],["medicalStation","Estación médica","#d9e4e7"],["ammoCrate","Caja de suministros","#586447"],["watchBeacon","Baliza de vigilancia","#d96c42"],["tnt","Dinamita TNT","#db372c"],["enchantTable","Mesa de encantamientos","#6b2d5c"],["magma","Bloque de magma","#a8411b"],["bedrock","Roca madre","#181818"]].map(([n,e,t],i)=>({id:n,name:e,sw:t,index:i,crafting:n==="crafting"})),L=Object.fromEntries(Bt.map(n=>[n.id,n.index])),Ct=[{id:"plains",name:"Pradera",color:"#71b84b",top:"grass",sub:"dirt",tree:.018},{id:"forest",name:"Bosque",color:"#3d843f",top:"grass",sub:"dirt",tree:.07},{id:"desert",name:"Desierto",color:"#dfca73",top:"sand",sub:"sand",tree:0},{id:"snow",name:"Tundra",color:"#e8f1f3",top:"snow",sub:"dirt",tree:.025},{id:"taiga",name:"Taiga",color:"#527b63",top:"grass",sub:"dirt",tree:.065},{id:"savanna",name:"Sabana",color:"#a6b64c",top:"grass",sub:"dirt",tree:.022},{id:"swamp",name:"Pantano",color:"#536e45",top:"mud",sub:"clay",tree:.045},{id:"jungle",name:"Selva",color:"#2e9148",top:"grass",sub:"dirt",tree:.095},{id:"badlands",name:"Meseta roja",color:"#bc6c42",top:"redSand",sub:"terracotta",tree:0},{id:"mountains",name:"Montañas",color:"#7a8081",top:"stone",sub:"stone",tree:.012},{id:"mushroom",name:"Islas de hongos",color:"#9b5674",top:"moss",sub:"dirt",tree:.04},{id:"beach",name:"Playa",color:"#e3d58b",top:"sand",sub:"sand",tree:0}],Lt=[["Mano","✋",1],["Pico de madera","⛏️",2],["Pico de piedra","⛏️",3],["Pico de hierro","⛏️",4],["Pico de oro","⛏️",4],["Pico de diamante","⛏️",5],["Hacha de madera","🪓",2],["Hacha de piedra","🪓",3],["Hacha de hierro","🪓",4],["Hacha de diamante","🪓",5],["Pala de madera","◢",2],["Pala de hierro","◢",4],["Pala de diamante","◢",5],["Espada de hierro","⚔️",3],["Espada de diamante","⚔️",5],["Arco","🏹",4],["Ballesta","➶",5],["Tridente","🔱",6],["Tijeras","✂️",2],["Caña de pescar","🎣",1],["Escudo","🛡️",1],["Chisquero de pedernal","🔥",2],["Pico encantado","✨⛏️",7],["Espada de fuego","🔥⚔️",7],["Peto de hierro","🛡️",3],["Peto de diamante","💎🛡️",6],["Rifle tranquilizante","🔫",5],["Rastreador jurásico","📟",2],["Martillo Mjolnir","🔨⚡",8],["Arco explosivo de Hawkeye","🏹💥",6],["Guantelete repulsor","🥊✨",6],["Traje Simbionte Spider-Man","🕷️🖤",9],["Llave de ingeniería","🔧",3],["Escáner portátil","📡",2],["Bastón eléctrico","⚡",5],["Brocha paleontológica","🖌️",2],["Pico reforzado","⛏️",6],["Martillo de rescate","🔨",5]].map(([n,e,t])=>({name:n,icon:e,power:t,damage:n.includes("Espada")||n==="Tridente"||n==="Arco"||n==="Ballesta"||n==="Bastón eléctrico"||n==="Martillo de rescate"||n.includes("fuego")||n.includes("Mjolnir")||n.includes("Hawkeye")||n.includes("repulsor")||n.includes("Rifle")||n.includes("Simbionte")?t:1})),st=[{id:"cow",name:"Bovino",body:7227959,head:9069131,kind:"passive",speed:.72,hp:10},{id:"pig",name:"Cerdito",body:15044249,head:15968174,kind:"passive",speed:.72,hp:10},{id:"sheep",name:"Oveja",body:15263452,head:9407363,kind:"passive",speed:.7,hp:8},{id:"chicken",name:"Ave",body:15856103,head:16777215,kind:"passive",speed:.85,hp:5},{id:"rabbit",name:"Conejo",body:10190950,head:11967100,kind:"passive",speed:1.1,hp:4},{id:"wolf",name:"Lobo",body:10263441,head:12171437,kind:"neutral",speed:1.15,hp:12},{id:"fox",name:"Zorro",body:13136434,head:14781254,kind:"passive",speed:1.2,hp:8},{id:"bee",name:"Abeja",body:14265653,head:15321175,kind:"neutral",speed:1.1,hp:6,flying:!0},{id:"frog",name:"Rana",body:7973195,head:9422426,kind:"passive",speed:.75,hp:6},{id:"camel",name:"Camello",body:12950376,head:13872510,kind:"passive",speed:.65,hp:16},{id:"goat",name:"Cabra",body:13090989,head:14735554,kind:"neutral",speed:1,hp:10},{id:"panda",name:"Panda",body:15197404,head:14276042,kind:"passive",speed:.55,hp:14},{id:"zombie",name:"Caminante verde",body:5143365,head:6987352,kind:"hostile",speed:1,hp:12},{id:"skeleton",name:"Arquero huesudo",body:14079178,head:15263194,kind:"hostile",speed:.95,hp:10},{id:"creeper",name:"Explosivo verde",body:4827213,head:5618008,kind:"hostile",speed:.9,hp:10},{id:"spider",name:"Araña nocturna",body:3352874,head:4863288,kind:"hostile",speed:1.25,hp:10,wide:!0},{id:"slime",name:"Gel saltarín",body:7718496,head:8836212,kind:"hostile",speed:.65,hp:8},{id:"witch",name:"Hechicera",body:6114151,head:9204845,kind:"hostile",speed:.72,hp:14},{id:"enderman",name:"Caminante alto",body:1906464,head:2826288,kind:"neutral",speed:1.35,hp:18,tall:!0},{id:"guardian",name:"Guardián marino",body:7183503,head:8827556,kind:"hostile",speed:.85,hp:14,flying:!0},{id:"blaze",name:"Espíritu de fuego",body:13995311,head:15313475,kind:"hostile",speed:1,hp:12,flying:!0},{id:"phantom",name:"Planeador nocturno",body:4675705,head:5926548,kind:"hostile",speed:1.4,hp:10,flying:!0},{id:"villager",name:"Aldeano",body:8411973,head:12684136,kind:"villager",speed:.62,hp:16},{id:"golem",name:"Guardián del pueblo",body:12959925,head:14275784,kind:"guardian",speed:.55,hp:30,tall:!0},{id:"trader",name:"Comerciante viajero",body:4287115,head:12684136,kind:"villager",speed:.68,hp:16},{id:"npcBuilder",name:"Maestro constructor",body:9070664,head:13079151,kind:"villager",speed:.64,hp:20,npc:!0,defaultRole:"constructor"},{id:"npcEngineer",name:"Ingeniera de sistemas",body:4154994,head:13079151,kind:"villager",speed:.68,hp:20,npc:!0,defaultRole:"ingeniero"},{id:"npcMedic",name:"Médica de campo",body:15265e3,head:13079151,kind:"villager",speed:.72,hp:20,npc:!0,defaultRole:"medico"},{id:"npcScientist",name:"Científica genética",body:14149096,head:13079151,kind:"villager",speed:.66,hp:18,npc:!0,defaultRole:"cientifico"},{id:"npcPaleo",name:"Paleontólogo",body:11897685,head:13079151,kind:"villager",speed:.68,hp:18,npc:!0,defaultRole:"paleontologo"},{id:"npcRanger",name:"Exploradora",body:4680517,head:13079151,kind:"villager",speed:.82,hp:20,npc:!0,defaultRole:"explorador"},{id:"npcSurvivor",name:"Superviviente",body:5857642,head:12157538,kind:"villager",speed:.84,hp:24,npc:!0,defaultRole:"superviviente"},{id:"npcGuard",name:"Centinela",body:3623777,head:12157538,kind:"villager",speed:.9,hp:28,npc:!0,defaultRole:"guardia"},{id:"llama",name:"Llama",body:13218190,head:14666154,kind:"passive",speed:.65,hp:14},{id:"cat",name:"Gato",body:8416087,head:10191724,kind:"passive",speed:1.05,hp:6},{id:"horse",name:"Caballo",body:8148796,head:9332554,kind:"passive",speed:1.4,hp:18},{id:"drowned",name:"Ahogado",body:4750453,head:6134160,kind:"hostile",speed:.8,hp:12},{id:"snowGolem",name:"Guardián de nieve",body:15856365,head:14189109,kind:"guardian",speed:.5,hp:12,tall:!0},{id:"dinoRaptor",name:"Raptor plumado",body:5733205,head:7313001,kind:"dinosaur",speed:1.65,hp:22,dinosaur:!0,carnivore:!0},{id:"dinoRex",name:"Gran tirano T-Rex",body:7693123,head:9205328,kind:"dinosaur",speed:1.1,hp:55,dinosaur:!0,carnivore:!0,tall:!0},{id:"dinoTrike",name:"Trescuernos Triceratops",body:7964266,head:9608575,kind:"dinosaur",speed:.75,hp:38,dinosaur:!0,herbivore:!0,wide:!0},{id:"dinoLongneck",name:"Cuellolargo Braquiosaurio",body:6913652,head:8427404,kind:"dinosaur",speed:.58,hp:65,dinosaur:!0,herbivore:!0,tall:!0},{id:"dinoAnky",name:"Acorazado Anquilosaurio",body:7172695,head:8488554,kind:"dinosaur",speed:.55,hp:44,dinosaur:!0,herbivore:!0,wide:!0},{id:"dinoPtero",name:"Planeador Pterodáctilo",body:9992028,head:11569769,kind:"dinosaur",speed:1.45,hp:18,dinosaur:!0,flying:!0,carnivore:!0},{id:"dinoSpino",name:"Espinosaurio acuático",body:3561561,head:4814198,kind:"dinosaur",speed:1.2,hp:58,dinosaur:!0,carnivore:!0,tall:!0},{id:"dinoDilopho",name:"Dilofosaurio venenoso",body:4026434,head:13191482,kind:"dinosaur",speed:1.4,hp:26,dinosaur:!0,carnivore:!0},{id:"dinoCarnotaur",name:"Carnotauro cornudo",body:9061687,head:11031363,kind:"dinosaur",speed:1.55,hp:40,dinosaur:!0,carnivore:!0},{id:"mzBasic",name:"Zombie apocalíptico",body:5993545,head:7837023,kind:"hostile",speed:1.05,hp:16,marvelZombie:!0},{id:"mzSkrull",name:"Zombie Skrull",body:5663571,head:8234351,kind:"hostile",speed:1.15,hp:18,marvelZombie:!0},{id:"mzMummy",name:"Momia infectada",body:12103057,head:13681829,kind:"hostile",speed:.78,hp:22,marvelZombie:!0},{id:"mzCowboy",name:"Zombie vaquero",body:7098680,head:8362595,kind:"hostile",speed:1.08,hp:20,marvelZombie:!0},{id:"mzIron",name:"Zombie Iron Man",body:10432045,head:12797493,kind:"hostile",speed:1.25,hp:36,marvelZombie:!0,superZombie:!0},{id:"mzCap",name:"Zombie Captain America",body:3362681,head:6719854,kind:"hostile",speed:1.22,hp:40,marvelZombie:!0,superZombie:!0},{id:"mzWolverine",name:"Zombie Wolverine",body:9271597,head:7443546,kind:"hostile",speed:1.55,hp:38,marvelZombie:!0,superZombie:!0},{id:"mzSpider",name:"Zombie Spider-Man",body:9187128,head:10828357,kind:"hostile",speed:1.65,hp:32,marvelZombie:!0,superZombie:!0},{id:"mzSymbioteSpider",name:"Zombie Spider-Man Simbionte",body:1381656,head:2236968,kind:"hostile",speed:1.75,hp:46,marvelZombie:!0,superZombie:!0},{id:"mzCarnage",name:"Zombie Carnage Zarcillos",body:10359314,head:13047832,kind:"hostile",speed:1.8,hp:62,marvelZombie:!0,superZombie:!0,tall:!0},{id:"mzBlackPanther",name:"Zombie Black Panther",body:2236966,head:3355451,kind:"hostile",speed:1.6,hp:42,marvelZombie:!0,superZombie:!0},{id:"mzHulk",name:"Zombie Hulk",body:5209667,head:7183963,kind:"hostile",speed:1,hp:85,marvelZombie:!0,superZombie:!0,tall:!0},{id:"mzStrange",name:"Zombie Doctor Strange",body:6636398,head:7902055,kind:"hostile",speed:1.15,hp:50,marvelZombie:!0,superZombie:!0},{id:"mzThanos",name:"Zombie Thanos",body:6705789,head:8218510,kind:"hostile",speed:.95,hp:115,marvelZombie:!0,superZombie:!0,tall:!0},{id:"mzThor",name:"Zombie Thor el del Trueno",body:2900835,head:5403289,kind:"hostile",speed:1.25,hp:54,marvelZombie:!0,superZombie:!0},{id:"mzScarlet",name:"Zombie Bruja Escarlata",body:8004136,head:11021622,kind:"hostile",speed:1.18,hp:48,marvelZombie:!0,superZombie:!0},{id:"mzDeadpool",name:"Zombie Deadpool",body:9184806,head:1776411,kind:"hostile",speed:1.5,hp:42,marvelZombie:!0,superZombie:!0},{id:"mzVenom",name:"Zombie Venom Simbionte",body:1315862,head:2236968,kind:"hostile",speed:1.35,hp:68,marvelZombie:!0,superZombie:!0,tall:!0}],At=[...Bt.map((n,e)=>({name:n.name,category:"Bloques",icon:"■",kind:"block",blockIndex:e})),...Lt.map((n,e)=>({name:n.name,category:"Herramientas",icon:n.icon,kind:"tool",toolIndex:e})),...["Palo","Carbón","Lingote de hierro","Lingote de oro","Diamante","Esmeralda","Cobre","Redstone","Cuarzo","Amatista","Pedernal","Cuero","Pluma","Hilo","Hueso","Bola de gel","Pólvora","Papel","Libro","Botella","Cubo","Brújula","Reloj","Mapa vacío","Perla extraña","Polvo brillante"].map(n=>({name:n,category:"Materiales",icon:"◆",kind:"item"})),...["Manzana","Pan","Zanahoria","Papa","Melón","Bayas","Carne cocida","Pescado","Galleta","Pastel","Sopa de hongos","Miel","Manzana dorada","Carne cruda"].map(n=>({name:n,category:"Comida",icon:"●",kind:"item"})),...["Fósil sin limpiar","Fragmento de ámbar","ADN incompleto","ADN de dinosaurio","Jeringa de ADN puro","Nutrientes de incubación","Huevo incubado"].map(n=>({name:n,category:"Paleontología",icon:"◈",kind:"item"})),...[["Vendaje","✚"],["Botiquín","🧰"],["Punto de refugio","⌂"],["Núcleo repulsor","◉"],["Escudo del capitán","◈"],["Lanzatelarañas","✣"],["Lanzatelarañas Simbiótico","🕸️"],["Simbionte Negro puro","🖤"],["Puño gamma","✹"],["Sello místico","✦"],["Guantelete del infinito","✺"],["Suero restaurador","🧪"],["Suero de Súper Soldado","⭐"]].map(([n,e])=>({name:n,category:"Marvel Zombies",icon:e,kind:"item",marvelItem:!0})),...st.map((n,e)=>({name:`Huevo: ${n.name}`,category:"Criaturas",icon:"◉",kind:"spawnEgg",mobType:e,eggColor:n.head}))],Dc=[{name:"Tablones",ins:[{kind:"block",id:"oak",count:1}],out:{kind:"block",id:"planks",count:4}},{name:"Palo",ins:[{kind:"block",id:"planks",count:2}],out:{kind:"item",name:"Palo",count:4}},{name:"Papel",ins:[{kind:"block",id:"bamboo",count:1}],out:{kind:"item",name:"Papel",count:3}},{name:"Libro",ins:[{kind:"item",name:"Papel",count:3}],out:{kind:"item",name:"Libro",count:1}},{name:"Mesa de crafteo",ins:[{kind:"block",id:"planks",count:4}],out:{kind:"block",id:"crafting",count:1}},{name:"Horno",ins:[{kind:"block",id:"cobble",count:8}],out:{kind:"block",id:"furnace",count:1}},{name:"Cofre",ins:[{kind:"block",id:"planks",count:8}],out:{kind:"block",id:"chest",count:1}},{name:"Dinamita TNT",ins:[{kind:"item",name:"Pólvora",count:5},{kind:"block",id:"sand",count:4}],out:{kind:"block",id:"tnt",count:1}},{name:"Mesa de encantamientos",ins:[{kind:"item",name:"Libro",count:1},{kind:"block",id:"diamond",count:2},{kind:"block",id:"obsidian",count:4}],out:{kind:"block",id:"enchantTable",count:1}},{name:"Manzana dorada",ins:[{kind:"item",name:"Manzana",count:1},{kind:"item",name:"Lingote de oro",count:8}],out:{kind:"item",name:"Manzana dorada",count:1}},{name:"Chisquero de pedernal",ins:[{kind:"item",name:"Lingote de hierro",count:1},{kind:"item",name:"Pedernal",count:1}],out:{kind:"tool",name:"Chisquero de pedernal",count:1}},{name:"Peto de hierro",ins:[{kind:"item",name:"Lingote de hierro",count:8}],out:{kind:"tool",name:"Peto de hierro",count:1}},{name:"Peto de diamante",ins:[{kind:"block",id:"diamond",count:8}],out:{kind:"tool",name:"Peto de diamante",count:1}},{name:"Rifle tranquilizante",ins:[{kind:"block",id:"iron",count:3},{kind:"item",name:"Palo",count:2},{kind:"block",id:"redstone",count:1}],out:{kind:"tool",name:"Rifle tranquilizante",count:1}},{name:"Rastreador jurásico",ins:[{kind:"block",id:"copper",count:2},{kind:"block",id:"glass",count:1},{kind:"block",id:"redstone",count:1}],out:{kind:"tool",name:"Rastreador jurásico",count:1}},{name:"Analizador de ADN",ins:[{kind:"block",id:"iron",count:2},{kind:"block",id:"glass",count:1},{kind:"block",id:"copper",count:1}],out:{kind:"block",id:"dnaAnalyzer",count:1}},{name:"Incubadora",ins:[{kind:"block",id:"glass",count:2},{kind:"block",id:"iron",count:1},{kind:"block",id:"copper",count:1}],out:{kind:"block",id:"incubator",count:1}},{name:"Traje Simbionte Spider-Man",ins:[{kind:"item",name:"Lanzatelarañas",count:1},{kind:"item",name:"Simbionte Negro puro",count:1}],out:{kind:"tool",name:"Traje Simbionte Spider-Man",count:1}},{name:"Simbionte Negro puro",ins:[{kind:"item",name:"Bola de gel",count:2},{kind:"block",id:"blackstone",count:2}],out:{kind:"item",name:"Simbionte Negro puro",count:1}},{name:"Lanzatelarañas Simbiótico",ins:[{kind:"item",name:"Hilo",count:4},{kind:"item",name:"Simbionte Negro puro",count:1}],out:{kind:"item",name:"Lanzatelarañas Simbiótico",count:2}},{name:"Martillo Mjolnir",ins:[{kind:"block",id:"iron",count:4},{kind:"item",name:"Palo",count:2},{kind:"block",id:"amethyst",count:2}],out:{kind:"tool",name:"Martillo Mjolnir",count:1}},{name:"Arco explosivo de Hawkeye",ins:[{kind:"tool",name:"Arco",count:1},{kind:"item",name:"Pólvora",count:3}],out:{kind:"tool",name:"Arco explosivo de Hawkeye",count:1}},{name:"Guantelete repulsor",ins:[{kind:"block",id:"iron",count:4},{kind:"block",id:"gold",count:2},{kind:"block",id:"redstone",count:2}],out:{kind:"tool",name:"Guantelete repulsor",count:1}},{name:"Suero de Súper Soldado",ins:[{kind:"item",name:"Suero restaurador",count:1},{kind:"item",name:"Manzana dorada",count:1}],out:{kind:"item",name:"Suero de Súper Soldado",count:1}},{name:"Vidrio",ins:[{kind:"block",id:"sand",count:2}],out:{kind:"block",id:"glass",count:1}},{name:"Ladrillos",ins:[{kind:"block",id:"clay",count:1}],out:{kind:"block",id:"brick",count:1}},{name:"Librería",ins:[{kind:"block",id:"planks",count:2},{kind:"item",name:"Libro",count:3}],out:{kind:"block",id:"bookshelf",count:1}},{name:"Lámpara",ins:[{kind:"block",id:"glow",count:1},{kind:"block",id:"redstone",count:1}],out:{kind:"block",id:"lamp",count:1}},{name:"Cable conductor",ins:[{kind:"block",id:"redstone",count:1},{kind:"block",id:"stone",count:1}],out:{kind:"block",id:"powerDust",count:2}},{name:"Palanca",ins:[{kind:"item",name:"Palo",count:1},{kind:"block",id:"cobble",count:1}],out:{kind:"block",id:"lever",count:1}},{name:"Lámpara eléctrica",ins:[{kind:"block",id:"glow",count:1},{kind:"block",id:"redstone",count:1},{kind:"block",id:"copper",count:1}],out:{kind:"block",id:"powerLamp",count:1}},{name:"Núcleo de portal",ins:[{kind:"block",id:"obsidian",count:2},{kind:"block",id:"amethyst",count:1}],out:{kind:"block",id:"portalCore",count:1}},{name:"Pico de madera",ins:[{kind:"block",id:"planks",count:3},{kind:"item",name:"Palo",count:2}],out:{kind:"tool",name:"Pico de madera",count:1}},{name:"Pico de piedra",ins:[{kind:"block",id:"cobble",count:3},{kind:"item",name:"Palo",count:2}],out:{kind:"tool",name:"Pico de piedra",count:1}},{name:"Pico de hierro",ins:[{kind:"block",id:"iron",count:3},{kind:"item",name:"Palo",count:2}],out:{kind:"tool",name:"Pico de hierro",count:1}},{name:"Pico de diamante",ins:[{kind:"block",id:"diamond",count:3},{kind:"item",name:"Palo",count:2}],out:{kind:"tool",name:"Pico de diamante",count:1}},{name:"Hacha de madera",ins:[{kind:"block",id:"planks",count:3},{kind:"item",name:"Palo",count:2}],out:{kind:"tool",name:"Hacha de madera",count:1}},{name:"Pala de madera",ins:[{kind:"block",id:"planks",count:1},{kind:"item",name:"Palo",count:2}],out:{kind:"tool",name:"Pala de madera",count:1}},{name:"Espada de hierro",ins:[{kind:"block",id:"iron",count:2},{kind:"item",name:"Palo",count:1}],out:{kind:"tool",name:"Espada de hierro",count:1}},{name:"Espada de diamante",ins:[{kind:"block",id:"diamond",count:2},{kind:"item",name:"Palo",count:1}],out:{kind:"tool",name:"Espada de diamante",count:1}},{name:"Arco",ins:[{kind:"item",name:"Palo",count:3},{kind:"item",name:"Hilo",count:3}],out:{kind:"tool",name:"Arco",count:1}},{name:"Escudo",ins:[{kind:"block",id:"iron",count:1},{kind:"block",id:"planks",count:6}],out:{kind:"tool",name:"Escudo",count:1}},{name:"Muro reforzado",ins:[{kind:"block",id:"iron",count:2},{kind:"block",id:"stone",count:4}],out:{kind:"block",id:"reinforcedWall",count:4}},{name:"Cristal antizombies",ins:[{kind:"block",id:"glass",count:2},{kind:"block",id:"iron",count:1}],out:{kind:"block",id:"antiZombieGlass",count:2}},{name:"Cerca eléctrica",ins:[{kind:"block",id:"iron",count:2},{kind:"block",id:"powerDust",count:1}],out:{kind:"block",id:"electricFence",count:3}},{name:"Radar Mini-IA",ins:[{kind:"block",id:"iron",count:3},{kind:"block",id:"copper",count:2},{kind:"block",id:"redstone",count:2}],out:{kind:"block",id:"radarArray",count:1}},{name:"Escáner biológico",ins:[{kind:"block",id:"glass",count:1},{kind:"block",id:"copper",count:2},{kind:"block",id:"redstone",count:1}],out:{kind:"block",id:"bioScanner",count:1}},{name:"Estación médica",ins:[{kind:"block",id:"iron",count:2},{kind:"block",id:"glass",count:2},{kind:"block",id:"seaLantern",count:1}],out:{kind:"block",id:"medicalStation",count:1}},{name:"Llave de ingeniería",ins:[{kind:"block",id:"iron",count:2},{kind:"item",name:"Palo",count:1}],out:{kind:"tool",name:"Llave de ingeniería",count:1}},{name:"Bastón eléctrico",ins:[{kind:"block",id:"copper",count:2},{kind:"block",id:"powerDust",count:1},{kind:"item",name:"Palo",count:1}],out:{kind:"tool",name:"Bastón eléctrico",count:1}},{name:"Brocha paleontológica",ins:[{kind:"item",name:"Palo",count:1},{kind:"item",name:"Pluma",count:2}],out:{kind:"tool",name:"Brocha paleontológica",count:1}},{name:"Suero restaurador",ins:[{kind:"item",name:"Botiquín",count:1},{kind:"item",name:"Botella",count:1},{kind:"item",name:"Polvo brillante",count:1}],out:{kind:"item",name:"Suero restaurador",count:1}}];function J0(n){const e=parseInt(n.replace("#",""),16);return[e>>16&255,e>>8&255,e&255]}function Q0(n,e,t){const i=r=>Math.max(0,Math.min(255,Math.round(r)));return`rgb(${i(n)},${i(e)},${i(t)})`}function nr(n,e){const[t,i,r]=J0(n);return Q0(t+e,i+e,r+e)}function qt(){const n=document.createElement("canvas");return n.width=16,n.height=16,n}function eg(n,e=1,t=26){const i=qt(),r=i.getContext("2d");r.fillStyle=n,r.fillRect(0,0,16,16);let o=e*9973+1013904223>>>0;for(let s=0;s<16;s++)for(let a=0;a<16;a++){o=o*1664525+1013904223>>>0;const l=((o>>>20)%t-t/2)*2;r.fillStyle=nr(n,l),r.fillRect(a,s,1,1)}return i}function tg(n=42){const e=qt(),t=e.getContext("2d"),i="#5aa33a";t.fillStyle=i,t.fillRect(0,0,16,16);let r=n*8191;for(let o=0;o<16;o++)for(let s=0;s<16;s++){r=r*1664525+1013904223>>>0;const a=(r>>>20)%5,l=a===0?"#4c8e30":a===1?"#68b943":a===2?"#569f37":a===3?"#458229":"#5fa93b";t.fillStyle=l,t.fillRect(s,o,1,1)}return e}function ng(n="#866043",e="#5aa33a",t=42){const i=qt(),r=i.getContext("2d");r.fillStyle=n,r.fillRect(0,0,16,16);let o=t*3319;for(let s=0;s<16;s++)for(let a=0;a<16;a++){o=o*1664525+1013904223>>>0;const l=(o>>>20)%4,c=l===0?"#6f4c32":l===1?"#9b7250":l===2?"#5c3d25":n;r.fillStyle=c,r.fillRect(a,s,1,1)}for(let s=0;s<16;s++){o=o*1664525+1013904223>>>0;const a=3+(o>>>24)%4;for(let l=0;l<a;l++){o=o*1664525+1013904223>>>0;const c=(o>>>20)%3===0?"#4c8e30":(o>>>20)%3===1?"#68b943":"#5aa33a";r.fillStyle=c,r.fillRect(s,l,1,1)}}return i}function Lc(n=22){const e=qt(),t=e.getContext("2d");t.fillStyle="#866043",t.fillRect(0,0,16,16);let i=n*6451;for(let r=0;r<16;r++)for(let o=0;o<16;o++){i=i*1664525+1013904223>>>0;const s=(i>>>20)%5,a=s===0?"#5e4028":s===1?"#9c714e":s===2?"#775338":s===3?"#8d6647":"#6c4b31";t.fillStyle=a,t.fillRect(o,r,1,1)}return e}function fl(n=55){const e=qt(),t=e.getContext("2d");t.fillStyle="#787878",t.fillRect(0,0,16,16);let i=n*9929;for(let r=0;r<16;r++)for(let o=0;o<16;o++){i=i*1664525+1013904223>>>0;const s=(i>>>20)%6,a=s===0?"#616161":s===1?"#8a8a8a":s===2?"#707070":s===3?"#919191":s===4?"#545454":"#7a7a7a";t.fillStyle=a,t.fillRect(o,r,1,1)}return e}function Xa(n=77){const e=qt(),t=e.getContext("2d");t.fillStyle="#727272",t.fillRect(0,0,16,16);let i=n*4817;for(let o=0;o<16;o++)for(let s=0;s<16;s++){i=i*1664525+1013904223>>>0;const a=(i>>>20)%5;t.fillStyle=a===0?"#505050":a===1?"#8c8c8c":a===2?"#656565":a===3?"#989898":"#737373",t.fillRect(s,o,1,1)}t.fillStyle="#3c3c3c";const r=[[0,4,8,4],[8,4,16,4],[0,9,5,9],[5,9,16,9],[0,13,10,13],[10,13,16,13],[4,0,4,4],[11,0,11,4],[7,4,7,9],[3,9,3,13],[12,9,12,13],[6,13,6,16],[14,13,14,16]];for(const[o,s,a,l]of r)for(let c=o;c<=a;c++)for(let u=s;u<=l;u++)t.fillRect(c,u,1,1);return e}function ig(n="#9a6839",e=12){const t=qt(),i=t.getContext("2d");i.fillStyle="#6b4625",i.fillRect(0,0,16,16);let r=e*7757;for(let o=0;o<16;o+=2)for(let s=0;s<16;s++){r=r*1664525+1013904223>>>0;const a=(r>>>20)%4===0?"#523419":(r>>>20)%4===1?"#875c34":(r>>>20)%4===2?"#78502c":"#5f3f21";i.fillStyle=a,i.fillRect(o,s,2,1)}i.fillStyle="#3d240e";for(let o=0;o<16;o+=4)i.fillRect(o,0,1,16);return t}function Ic(n="#9a6839",e=15){const t=qt(),i=t.getContext("2d");return i.fillStyle="#6b4625",i.fillRect(0,0,16,16),i.fillStyle="#9e764a",i.fillRect(1,1,14,14),i.fillStyle="#856038",i.fillRect(3,3,10,10),i.fillStyle="#b88d5c",i.fillRect(4,4,8,8),i.fillStyle="#75532d",i.fillRect(6,6,4,4),i.fillStyle="#543a1e",i.fillRect(7,7,2,2),t}function qn(n="#b9854c",e=9){const t=qt(),i=t.getContext("2d");i.fillStyle=n,i.fillRect(0,0,16,16);let r=e*3331;for(let o=0;o<16;o++)if(o%4===0)i.fillStyle=nr(n,-36),i.fillRect(0,o,16,1);else for(let a=0;a<16;a++){r=r*1664525+1013904223>>>0;const l=(r>>>20)%5;i.fillStyle=l===0?nr(n,-16):l===1?nr(n,14):l===2?nr(n,-8):n,i.fillRect(a,o,1,1)}return i.fillStyle=nr(n,-55),i.fillRect(1,2,1,1),i.fillRect(14,2,1,1),i.fillRect(1,6,1,1),i.fillRect(14,6,1,1),i.fillRect(1,10,1,1),i.fillRect(14,10,1,1),i.fillRect(1,14,1,1),i.fillRect(14,14,1,1),t}function rg(n=31){const e=qt(),t=e.getContext("2d");t.fillStyle="#b3b3b3",t.fillRect(0,0,16,16);let i=n*9973;for(let r=0;r<4;r++){const o=r*4+1,s=r%2===0?0:4;for(let a=-4+s;a<16;a+=8){const l=Math.max(0,a),c=Math.min(15,a+6);if(l<=c)for(let u=o;u<=o+2;u++)for(let m=l;m<=c;m++){i=i*1664525+1013904223>>>0;const d=(i>>>20)%4;t.fillStyle=d===0?"#984638":d===1?"#b75a49":d===2?"#a74f40":"#863c2f",t.fillRect(m,u,1,1)}}}return e}function ti(n,e,t=101){const i=fl(t),r=i.getContext("2d"),o=[[3,2],[4,2],[3,3],[4,3],[5,4],[9,3],[10,3],[10,4],[9,5],[2,9],[3,9],[2,10],[3,10],[4,11],[11,8],[12,8],[12,9],[13,10],[7,12],[8,12],[7,13],[8,13],[9,14]];r.fillStyle=n;for(const[l,c]of o)r.fillRect(l,c,1,1);r.fillStyle=e;const s=[[3,2],[10,3],[3,9],[12,8],[7,12]];for(const[l,c]of s)r.fillRect(l,c,1,1);r.fillStyle="rgba(0,0,0,0.35)";const a=[[5,3],[11,5],[4,10],[13,9],[9,13]];for(const[l,c]of a)r.fillRect(l,c,1,1);return i}function og(){const n=qt(),e=n.getContext("2d");e.fillStyle="#c83025",e.fillRect(0,0,16,16);for(let t=0;t<16;t+=2)e.fillStyle="#d84236",e.fillRect(t,0,1,16),e.fillStyle="#a72217",e.fillRect(t+1,0,1,16);return e.fillStyle="#e8e8e8",e.fillRect(0,5,16,6),e.fillStyle="#ffffff",e.fillRect(0,6,16,4),e.fillStyle="#111111",e.fillRect(2,7,3,1),e.fillRect(3,8,1,2),e.fillRect(6,7,1,3),e.fillRect(7,8,1,1),e.fillRect(8,7,1,3),e.fillRect(10,7,3,1),e.fillRect(11,8,1,2),n}function Uc(){const n=qt(),e=n.getContext("2d");e.fillStyle="#c83025",e.fillRect(0,0,16,16);for(let t=0;t<16;t+=4)for(let i=0;i<16;i+=4)e.fillStyle="#8f1c12",e.fillRect(t,i,4,4),e.fillStyle="#d84236",e.fillRect(t+1,i+1,2,2),e.fillStyle="#2c221a",e.fillRect(t+1,i+1,1,1);return e.fillStyle="#443322",e.fillRect(7,6,2,4),e.fillRect(6,7,4,2),e.fillStyle="#f0d040",e.fillRect(7,7,2,2),n}function sg(){const n=qn("#b9854c",3),e=n.getContext("2d");return e.fillStyle="#6e4722",e.fillRect(2,2,12,12),e.fillStyle="#cfa068",e.fillRect(3,3,10,10),e.fillStyle="#5c3a19",e.fillRect(6,3,1,10),e.fillRect(9,3,1,10),e.fillRect(3,6,10,1),e.fillRect(3,9,10,1),n}function ag(){const n=qn("#b9854c",5),e=n.getContext("2d");return e.fillStyle="#444444",e.fillRect(3,4,1,8),e.fillRect(4,4,3,1),e.fillRect(4,7,2,1),e.fillStyle="#777777",e.fillRect(10,4,3,3),e.fillRect(11,7,1,5),e.fillStyle="#382413",e.fillRect(1,1,14,1),e.fillRect(1,14,14,1),n}function lg(){const n=Xa(99),e=n.getContext("2d");return e.fillStyle="#1c1c1c",e.fillRect(3,6,10,8),e.fillStyle="#2f2f2f",e.fillRect(4,5,8,1),e.fillStyle="#e6511a",e.fillRect(5,9,6,4),e.fillStyle="#ffb326",e.fillRect(6,10,4,2),e.fillStyle="#ffffff",e.fillRect(7,10,2,1),n}function cg(){const n=fl(123),e=n.getContext("2d");return e.fillStyle="#303030",e.fillRect(4,4,8,8),e.fillStyle="#4c4c4c",e.fillRect(5,5,6,6),e.fillStyle="#1e1e1e",e.fillRect(7,7,2,2),n}function gd(){const n=qn("#9a6a36",88),e=n.getContext("2d");return e.fillStyle="#2c2013",e.fillRect(0,0,16,1),e.fillRect(0,15,16,1),e.fillRect(0,0,1,16),e.fillRect(15,0,1,16),e.fillRect(0,5,16,1),n}function dg(){const n=gd(),e=n.getContext("2d");return e.fillStyle="#181818",e.fillRect(7,4,2,4),e.fillStyle="#e0c34a",e.fillRect(7,4,2,3),e.fillStyle="#222222",e.fillRect(7,6,2,1),n}function ug(){const n=qt(),e=n.getContext("2d");return e.fillStyle="rgba(180,225,245,0.15)",e.fillRect(0,0,16,16),e.fillStyle="rgba(255,255,255,0.75)",e.fillRect(0,0,16,1),e.fillRect(0,15,16,1),e.fillRect(0,0,1,16),e.fillRect(15,0,1,16),e.fillRect(3,3,2,1),e.fillRect(4,4,1,2),e.fillRect(10,3,1,1),e.fillRect(11,4,1,1),e.fillRect(12,5,1,1),e.fillRect(3,11,1,1),e.fillRect(4,12,1,1),e.fillRect(5,13,1,1),n}function fg(n="#347f3b",e=44){const t=qt(),i=t.getContext("2d");i.fillStyle=n,i.fillRect(0,0,16,16);let r=e*5501;for(let o=0;o<16;o++)for(let s=0;s<16;s++){r=r*1664525+1013904223>>>0;const a=(r>>>20)%6;a===0?i.clearRect(s,o,1,1):a===1?(i.fillStyle="#245928",i.fillRect(s,o,1,1)):a===2?(i.fillStyle="#4ba452",i.fillRect(s,o,1,1)):a===3&&(i.fillStyle="#398c40",i.fillRect(s,o,1,1))}return t}function hg(){const n=qn("#8c6038",11),e=n.getContext("2d");e.fillStyle="#28190d",e.fillRect(2,2,12,5),e.fillRect(2,9,12,5);const t=["#b53b3b","#386cb0","#4ea346","#c49f37","#7b3da3","#bf6930","#3d9999"];for(let i=0;i<6;i++)e.fillStyle=t[i%t.length],e.fillRect(3+i*2,2,2,5),e.fillStyle="#e8ded0",e.fillRect(3+i*2,3,2,1);for(let i=0;i<6;i++)e.fillStyle=t[(i+3)%t.length],e.fillRect(3+i*2,9,2,5),e.fillStyle="#e8ded0",e.fillRect(3+i*2,10,2,1);return n}function Jo(n=61){const e=qt(),t=e.getContext("2d");t.fillStyle="#171026",t.fillRect(0,0,16,16);let i=n*8831;for(let r=0;r<16;r++)for(let o=0;o<16;o++){i=i*1664525+1013904223>>>0;const s=(i>>>20)%8;s===0?(t.fillStyle="#3b245e",t.fillRect(o,r,1,1)):s===1?(t.fillStyle="#5b3394",t.fillRect(o,r,1,1)):s===2?(t.fillStyle="#24173d",t.fillRect(o,r,1,1)):s===3&&(t.fillStyle="#7e46c7",t.fillRect(o,r,1,1))}return e}function pg(){const n=Jo(7),e=n.getContext("2d");return e.fillStyle="#4fe3da",e.fillRect(0,0,2,2),e.fillRect(14,0,2,2),e.fillRect(0,14,2,2),e.fillRect(14,14,2,2),e.fillStyle="#a82626",e.fillRect(2,0,12,3),n}function mg(){const n=Jo(9),e=n.getContext("2d");return e.fillStyle="#a82626",e.fillRect(1,1,14,14),e.fillStyle="#851919",e.fillRect(3,3,10,10),e.fillStyle="#4fe3da",e.fillRect(7,7,2,2),e.fillStyle="#ffd700",e.fillRect(4,4,1,1),e.fillRect(11,4,1,1),e.fillRect(4,11,1,1),e.fillRect(11,11,1,1),n}function gg(n=303){const e=qt(),t=e.getContext("2d");t.fillStyle="#2c0c08",t.fillRect(0,0,16,16);let i=n*7331;for(let r=0;r<16;r++)for(let o=0;o<16;o++){i=i*1664525+1013904223>>>0;const s=(i>>>20)%6;s===0?(t.fillStyle="#ff4d00",t.fillRect(o,r,1,1)):s===1?(t.fillStyle="#ff9400",t.fillRect(o,r,1,1)):s===2?(t.fillStyle="#ffd000",t.fillRect(o,r,1,1)):s===3&&(t.fillStyle="#6e180d",t.fillRect(o,r,1,1))}return e}function _g(n=808){const e=qt(),t=e.getContext("2d");t.fillStyle="#181818",t.fillRect(0,0,16,16);let i=n*9109;for(let r=0;r<16;r++)for(let o=0;o<16;o++){i=i*1664525+1013904223>>>0;const s=(i>>>20)%5;t.fillStyle=s===0?"#000000":s===1?"#383838":s===2?"#555555":s===3?"#222222":"#151515",t.fillRect(o,r,1,1)}return e}function ni(n,e,t){const i=document.createElement("canvas");i.width=48,i.height=16;const r=i.getContext("2d");return r.drawImage(n,0,0),r.drawImage(e,16,0),r.drawImage(t,32,0),i}function vt(n){const e=new as(n);return e.magFilter=sn,e.minFilter=sn,e.colorSpace=rn,e}const Ys=[.72,.72,1,.52,.84,.84];function br(n){const e=[];for(let t=0;t<6;t++)for(let i=0;i<4;i++)e.push(Ys[t],Ys[t],Ys[t]);return n.setAttribute("color",new Xt(e,3)),n}function vg(n){const e=n.attributes.uv,t=[0,0,1/3,2/3,0,0];for(let i=0;i<6;i++)for(let r=0;r<4;r++){const o=i*4+r;e.setX(o,e.getX(o)/3+t[i])}return e.needsUpdate=!0,n}const qa=br(new It(1,1,1)),xg=vg(br(new It(1,1,1))),Mg=new Set(["grass","oak","crafting","furnace","chest","tnt","bookshelf","enchantTable"]),Sg=br(new It(.2,1,.2)),bg=br(new It(.84,.56,.84)),yg=br(new It(.8,.74,.8)),Eg=br(new It(.36,1.25,.36));function hl(n){const e=Bt[n];return e?e.id==="electricFence"?Sg:e.id==="radarArray"?bg:e.id==="bioScanner"||e.id==="medicalStation"?yg:e.id==="watchBeacon"?Eg:Mg.has(e.id)?xg:qa:qa}const _r=Bt.map((n,e)=>{const t=["glass","ice","slime","honey","antiZombieGlass","leaves"].includes(n.id),i=["glow","lamp","seaLantern","portalCore","powerDust","powerLamp","electricFence","radarArray","bioScanner","scannerLight","medicalStation","watchBeacon","magma"].includes(n.id),r={transparent:t,opacity:t?n.id==="leaves"?.92:n.id==="glass"?.62:.75:1,roughness:t?.2:.88,metalness:["iron","gold","copper","copperOx","steelPlate"].includes(n.id)?.22:0,depthWrite:n.id==="leaves"?!0:!t,emissive:i?new Ye(n.sw):0,emissiveIntensity:n.id==="portalCore"?1.2:n.id==="magma"?.6:n.id==="powerDust"?.2:n.id==="powerLamp"?.15:i?.55:0,vertexColors:!0},o=e*17+3;let s;if(n.id==="grass"){const a=Bt[L.dirt]?.sw??"#866043";s=vt(ni(ng(a,n.sw,o),tg(o),Lc(o)))}else n.id==="dirt"||n.id==="mud"?s=vt(Lc(o)):n.id==="stone"?s=vt(fl(o)):n.id==="cobble"?s=vt(Xa(o)):n.id==="oak"?s=vt(ni(ig(n.sw,o),Ic(n.sw,o),Ic(n.sw,o))):n.id==="planks"||n.id==="darkPlanks"?s=vt(qn(n.sw,o)):n.id==="brick"?s=vt(rg(o)):n.id==="coal"?s=vt(ti("#222222","#444444",o)):n.id==="iron"?s=vt(ti("#d8b295","#f0cfb8",o)):n.id==="gold"?s=vt(ti("#ffd700","#fff070",o)):n.id==="redstone"?s=vt(ti("#ff2222","#ff6666",o)):n.id==="diamond"?s=vt(ti("#4ee2d8","#9afff8",o)):n.id==="emerald"?s=vt(ti("#20df65","#72ff9f",o)):n.id==="copper"?s=vt(ti("#d67950","#f29e79",o)):n.id==="amethyst"?s=vt(ti("#a670db","#d1a8f7",o)):n.id==="obsidian"?s=vt(Jo(o)):n.id==="glass"||n.id==="antiZombieGlass"?s=vt(ug()):n.id==="leaves"?s=vt(fg(n.sw,o)):n.id==="crafting"?s=vt(ni(ag(),sg(),qn("#b9854c",4))):n.id==="furnace"?s=vt(ni(lg(),cg(),Xa(o))):n.id==="chest"?s=vt(ni(dg(),gd(),qn("#9a6a36",2))):n.id==="tnt"?s=vt(ni(og(),Uc(),Uc())):n.id==="bookshelf"?s=vt(ni(hg(),qn("#8c6038",1),qn("#8c6038",1))):n.id==="enchantTable"?s=vt(ni(pg(),mg(),Jo(o))):n.id==="magma"?s=vt(gg(o)):n.id==="bedrock"?s=vt(_g(o)):s=vt(eg(n.sw,o,24));return new Tn({map:s,...r})}),jt=12,Io=2,Ur=2,vr=2048,An=(n,e,t=1337)=>{let i=n*374761393+e*668265263+t*69069|0;return i=(i^i>>>13)*1274126177,i^=i>>>16,(i>>>0)/4294967295},lr=(n,e,t=.035)=>Math.sin(n*t)*.45+Math.cos(e*t*1.07)*.35+Math.sin((n+e)*t*.51)*.2;function _d(n,e){const t=.5+.35*lr(n+400,e-200,.012)+.15*(An(Math.floor(n/50),Math.floor(e/50))-.5),i=.5+.38*lr(n-700,e+500,.015)+.12*(An(Math.floor(n/60),Math.floor(e/60),55)-.5);return{temp:t,wet:i}}function Qo(n,e){const{temp:t,wet:i}=_d(n,e),r=vd(n,e);return r<=Ur+1?Ct.find(s=>s.id==="beach"):r>14?Ct.find(s=>s.id==="mountains"):An(Math.floor(n/180),Math.floor(e/180),900)>.94&&i>.45?Ct.find(s=>s.id==="mushroom"):t<.28?i>.52?Ct.find(s=>s.id==="taiga"):Ct.find(s=>s.id==="snow"):t>.72?i<.3?Ct.find(s=>s.id==="desert"):i>.68?Ct.find(s=>s.id==="jungle"):Ct.find(s=>s.id==="savanna"):i>.72?Ct.find(s=>s.id==="swamp"):i>.53?Ct.find(s=>s.id==="forest"):i<.22&&t>.55?Ct.find(s=>s.id==="badlands"):Ct.find(s=>s.id==="plains")}function vd(n,e){return 5+lr(n,e,.06)*4+lr(n+900,e-700,.018)*6+lr(n-200,e+800,.006)*7}function Ho(n,e){let t=vd(n,e);const i=Tg(n,e,t);i.id==="mountains"&&(t+=Math.abs(lr(n*2,e*2,.05))*6),i.id==="swamp"&&(t=Math.min(t,4));const r=Math.max(Math.abs(n),Math.abs(e));if(r>vr){const o=r-vr,s=Math.abs(Math.sin(n*.17)*Math.cos(e*.13))*Math.min(48,8+o*.035);t+=s+((Math.floor(n/7)+Math.floor(e/7))%3===0?8:0)}return Math.max(-3,Math.min(62,Math.round(t)))}function Tg(n,e,t){const{temp:i,wet:r}=_d(n,e);return t<=Ur+1?Ct.find(o=>o.id==="beach"):t>14?Ct.find(o=>o.id==="mountains"):i<.28?r>.52?Ct.find(o=>o.id==="taiga"):Ct.find(o=>o.id==="snow"):i>.72?r<.3?Ct.find(o=>o.id==="desert"):r>.68?Ct.find(o=>o.id==="jungle"):Ct.find(o=>o.id==="savanna"):r>.72?Ct.find(o=>o.id==="swamp"):r>.53?Ct.find(o=>o.id==="forest"):Ct.find(o=>o.id==="plains")}function Ag(n,e){const t=qa,i=[],r=new Map,o=new Map,s=new Map,a=[],l=[];let c="overworld",u="normal";const m={overworld:s,ember:new Map},d=(T,C,b)=>`${Math.round(T)},${Math.round(C)},${Math.round(b)}`,g=(T,C)=>`${T},${C}`;function p(T,C,b,w=0,se=null,Y=!1){T=Math.round(T),C=Math.round(C),b=Math.round(b);const ie=d(T,C,b);if(r.has(ie))return null;const oe=m[c];if(Y&&oe.get(ie)==="air")return null;const fe=Y&&typeof oe.get(ie)=="number"?oe.get(ie):w,M=new St(hl(fe),e[fe]??e[0]);return M.position.set(T,C,b),M.userData.typeIndex=fe,M.userData.chunk=se,M.castShadow=C>Ur-2,M.receiveShadow=!0,n.add(M),i.push(M),r.set(ie,M),se&&o.get(se)?.blocks.push(M),M}function v(T){r.delete(d(T.position.x,T.position.y,T.position.z)),n.remove(T);const C=i.indexOf(T);C>=0&&i.splice(C,1)}function h(T,C=!0){C&&m[c].set(d(T.position.x,T.position.y,T.position.z),"air"),v(T)}function f(T,C,b,w){const se=d(T,C,b);return m[c].set(se,w),p(T,C,b,w,null,!1)}function D(T,C,b,w,se){const Y=w==="jungle"?6:w==="taiga"?44:6,ie=8,oe=w==="jungle"?7:w==="taiga"?6:4;for(let M=1;M<=oe;M++)p(T,C+M,b,Y,se,!0);const fe=2;for(let M=-fe;M<=fe;M++)for(let _=-fe;_<=fe;_++)for(let B=oe-2;B<=oe+1;B++)Math.abs(M)+Math.abs(_)<4&&p(T+M,C+B,b+_,ie,se,!0)}function P(T,C,b,w){for(let se=1;se<=2+Math.floor(An(T,b,3)*3);se++)p(T,C+se,b,L.bamboo,w,!0)}function x(T,C,b,w){for(let se=1;se<=3;se++)p(T,C+se,b,L.bone,w,!0);for(let se=-2;se<=2;se++)for(let Y=-2;Y<=2;Y++)Math.abs(se)+Math.abs(Y)<4&&p(T+se,C+4,b+Y,L.mushroom,w,!0)}function A(T,C,b,w,se,Y){for(let ie=0;ie<w;ie++)p(T,C+ie,b,se,Y,!0)}function R(T,C,b){return l.some(w=>Math.abs(T-w.x)<w.hx&&Math.abs(b-w.z)<w.hz&&C>=w.minY&&C<=w.maxY)}function I(T,C,b,w,se,Y,ie="Calabozo"){const oe=Math.max(3,Math.floor(w/2)),fe=Math.max(3,Math.floor(se/2)),M=C-10,_=C-4,B=u==="marvel"?L.reinforcedWall??L.blackstone:u==="dino"?L.fossilBrick??L.bone:L.cobble,G=u==="marvel"?L.steelPlate??L.iron:u==="dino"?L.bone??L.quartz:L.darkPlanks,Z=L.scannerLight??L.powerLamp??L.glow,$={x:T,z:b,hx:oe,hz:fe,minY:M+1,maxY:_-1};l.push($);for(let ue=-oe+1;ue<=oe-1;ue++)for(let ae=-fe+1;ae<=fe-1;ae++)for(let Se=M+1;Se<=_-1;Se++){const ke=r.get(d(T+ue,Se,b+ae));ke&&v(ke)}for(let ue=-oe;ue<=oe;ue++)for(let ae=-fe;ae<=fe;ae++)p(T+ue,M,b+ae,B,Y,!0),p(T+ue,_,b+ae,G,Y,!0);for(let ue=M+1;ue<_;ue++)for(let ae=-oe;ae<=oe;ae++)for(const Se of[-fe,fe])p(T+ae,ue,b+Se,B,Y,!0);for(let ue=M+1;ue<_;ue++)for(let ae=-fe+1;ae<fe;ae++)for(const Se of[-oe,oe])p(T+Se,ue,b+ae,B,Y,!0);const Te=L.electricFence??L.iron;for(let ue=-2;ue<=2;ue++)p(T-2,M+1,b+ue,Te,Y,!0),p(T+2,M+1,b+ue,Te,Y,!0);for(let ue=-1;ue<=1;ue++)p(T+ue,M+1,b-2,Te,Y,!0),ue!==0&&p(T+ue,M+1,b+2,Te,Y,!0);p(T,M+1,b-3,Z,Y,!0),p(T-oe+2,M+1,b-fe+2,L.chest,Y,!0),u==="dino"?(p(T+oe-2,M+1,b-fe+2,L.dinoCrate??L.chest,Y,!0),p(T+oe-2,M+1,b+fe-2,L.fossilRock??L.bone,Y,!0)):u==="marvel"?(p(T+oe-2,M+1,b-fe+2,L.medicalStation??L.chest,Y,!0),p(T+oe-2,M+1,b+fe-2,L.bioScanner??L.powerLamp,Y,!0)):p(T+oe-2,M+1,b-fe+2,L.bookshelf??L.planks,Y,!0);const pe=T,Ie=b+Math.max(1,fe-2);for(let ue=_;ue<=C+1;ue++)for(const ae of[0,1])for(const Se of[0,1]){const ke=r.get(d(pe+ae,ue,Ie+Se));ke&&v(ke)}for(let ue=_;ue<=C;ue+=2)p(pe-1,ue,Ie,Z,Y,!0);return{x:T,y:M+1,z:b,w:oe*2+1,d:fe*2+1,floorY:M,ceilingY:_,label:ie,mode:u}}function z(T,C,b,w,se,Y,ie){for(let oe=-w;oe<=w;oe++)p(T+oe,C,b-se,Y,ie,!0),p(T+oe,C,b+se,Y,ie,!0);for(let oe=-se+1;oe<se;oe++)p(T-w,C,b+oe,Y,ie,!0),p(T+w,C,b+oe,Y,ie,!0)}function y(T,C,b,w){const se=L.steelPlate??L.iron,Y=L.scannerLight??L.powerLamp;A(T,C,b,3,se,w),p(T,C+3,b,Y,w,!0),p(T-1,C+3,b,se,w,!0),p(T+1,C+3,b,se,w,!0)}function E(T,C,b,w,se,Y,ie){for(let oe=-w;oe<=w;oe++)for(let fe=-se;fe<=se;fe++)p(T+oe,C,b+fe,Y,ie,!0)}function k(T,C,b,w,se,Y,ie){for(let oe=-Math.floor(w/2);oe<=Math.floor(w/2);oe++)for(let fe=-Math.floor(se/2);fe<=Math.floor(se/2);fe++)p(T+oe,C,b+fe,Y,ie,!0)}function N(T,C,b,w,se,Y,ie,oe,fe=null){const M=Math.floor(w/2),_=Math.floor(Y/2);for(let B=0;B<se;B++)for(let G=-M;G<=M;G++)for(let Z=-_;Z<=_;Z++){if(Math.abs(G)!==M&&Math.abs(Z)!==_||Z===_&&Math.abs(G)<=1&&B<3)continue;const Te=fe!==null&&B===2&&(Math.abs(G)===M&&Math.abs(Z)<=1||Math.abs(Z)===_&&Math.abs(G)<=1);p(T+G,C+B,b+Z,Te?fe:ie,oe,!0)}}function j(T,C,b,w){const se=L.darkPlanks??L.oak,Y=L.cobble,ie=L.glow??L.lamp;k(T,C-1,b,15,5,Y,w);for(const oe of[-4,4])A(T+oe,C,b,8,se,w),A(T+oe+1,C,b,8,Y,w),A(T+oe-1,C,b,8,Y,w),p(T+oe,C+8,b,ie,w,!0);for(let oe=-3;oe<=3;oe++)p(T+oe,C+6,b,se,w,!0),p(T+oe,C+7,b,Y,w,!0);p(T,C+7,b,L.hazardStripe??Y,w,!0);for(let oe=-6;oe<=6;oe++)p(T-2,C,b+oe,L.electricFence,w,!0),p(T+2,C,b+oe,L.electricFence,w,!0);p(T-3,C,b+2,L.dinoCrate,w,!0),p(T+3,C,b+2,L.chest,w,!0),a.push({type:"Puerta de Jurassic World",x:T,z:b,mode:u})}function te(T,C,b,w){const se=L.quartz??L.stone,Y=L.glass;L.amber??L.glow,k(T,C-1,b,17,15,se,w),N(T,C,b,17,6,15,se,w,Y);for(const[oe,fe]of[[-8,-7],[8,-7],[-8,7],[8,7]])A(T+oe,C,b+fe,8,se,w);E(T,C+6,b,9,8,L.darkPlanks,w),z(T,C+7,b,7,6,Y,w),p(T,C+8,b,L.seaLantern??L.glow,w,!0);for(let oe=1;oe<=4;oe++)p(T,C+oe,b,L.bone,w,!0);p(T-1,C+3,b,L.bone,w,!0),p(T+1,C+3,b,L.bone,w,!0),p(T-5,C,b-3,L.dnaAnalyzer,w,!0),p(T-5,C,b+3,L.incubator,w,!0),p(T+5,C,b-3,L.dinoCrate,w,!0),p(T+5,C,b+3,L.bioScanner,w,!0),p(T,C,b-5,L.crafting,w,!0),p(T,C,b+5,L.chest,w,!0);const ie=I(T,C,b,17,15,w,"Bóveda de Embriones Jurásica");a.push({type:"Centro de Visitantes Jurásico",x:T,z:b,mode:u,npcHub:!0,dungeon:ie})}function K(T,C,b,w){const se=L.electricFence??L.iron,Y=L.steelPlate??L.iron,ie=L.reinforcedWall??L.cobble;k(T,C-1,b,19,19,L.dirt,w);for(let fe=-9;fe<=9;fe++)for(const M of[-9,9])Math.abs(fe)>2&&(p(T+fe,C,b+M,se,w,!0),p(T+fe,C+1,b+M,se,w,!0));for(let fe=-8;fe<=8;fe++)for(const M of[-9,9])p(T+M,C,b+fe,se,w,!0),p(T+M,C+1,b+fe,se,w,!0);k(T-7,C+4,b-7,5,5,Y,w),N(T-7,C+5,b-7,5,3,5,ie,w,L.antiZombieGlass??L.glass);for(let fe=0;fe<=5;fe++)A(T-7,C+fe,b-7,1,Y,w);p(T-7,C+8,b-7,L.radarArray??L.powerLamp,w,!0),p(T-6,C+5,b-6,L.ammoCrate??L.chest,w,!0),A(T,C,b,5,Y,w),p(T,C+5,b,L.meat??L.bone,w,!0);const oe=I(T,C,b,17,17,w,"Jaula de Contención T-Rex");a.push({type:"Recinto de Contención T-Rex",x:T,z:b,mode:u,npcHub:!0,dungeon:oe})}function U(T,C,b,w){const se=L.steelPlate??L.iron,Y=L.antiZombieGlass??L.glass,ie=L.portalCore??L.glow;k(T,C-1,b,15,15,se,w),N(T,C,b,13,6,13,se,w,Y),k(T,C+6,b,11,11,se,w),N(T,C+7,b,11,5,11,se,w,Y),k(T,C+12,b,13,13,se,w),z(T,C+13,b,6,6,L.hazardStripe??se,w),A(T,C+13,b,1,ie,w),p(T,C+13,b-2,L.woolRed??L.gold,w,!0),p(T-1,C+13,b-1,L.woolRed??L.gold,w,!0),p(T+1,C+13,b-1,L.woolRed??L.gold,w,!0),p(T-2,C+13,b,L.woolRed??L.gold,w,!0),p(T+2,C+13,b,L.woolRed??L.gold,w,!0),p(T-1,C+13,b,L.woolRed??L.gold,w,!0),p(T+1,C+13,b,L.woolRed??L.gold,w,!0),p(T-2,C+13,b+1,L.woolRed??L.gold,w,!0),p(T+2,C+13,b+1,L.woolRed??L.gold,w,!0),p(T-2,C+13,b+2,L.woolRed??L.gold,w,!0),p(T+2,C+13,b+2,L.woolRed??L.gold,w,!0),p(T-4,C,b,L.chest,w,!0),p(T+4,C,b,L.chest,w,!0),p(T,C,b-4,L.radarArray,w,!0),p(T,C,b+4,L.medicalStation,w,!0);const oe=I(T,C,b,15,15,w,"Bóveda Stark Subterránea");a.push({type:"Torre de los Vengadores",x:T,z:b,mode:u,npcHub:!0,dungeon:oe})}function W(T,C,b,w){const se=L.brick??L.cobble,Y=L.darkPlanks??L.planks,ie=L.blackstone??L.obsidian;k(T,C-1,b,13,13,ie,w),N(T,C,b,13,8,13,se,w,L.glass),k(T,C+8,b,11,11,Y,w),z(T,C+9,b,5,5,se,w),p(T,C+10,b-5,L.portalCore??L.amethyst,w,!0),p(T-1,C+10,b-5,L.gold,w,!0),p(T+1,C+10,b-5,L.gold,w,!0),p(T,C+11,b-5,L.gold,w,!0),p(T,C+9,b-5,L.gold,w,!0),p(T,C,b,L.enchantTable??L.obsidian,w,!0),p(T-2,C,b,L.bookshelf,w,!0),p(T+2,C,b,L.bookshelf,w,!0),p(T,C,b-3,L.chest,w,!0),p(T,C,b+3,L.chest,w,!0);const oe=I(T,C,b,13,13,w,"Cripta Mística de Kamar-Taj");a.push({type:"Sanctum Sanctorum Místico",x:T,z:b,mode:u,npcHub:!0,dungeon:oe})}function F(T,C,b,w){const se=L.steelPlate??L.iron,Y=L.reinforcedWall??L.iron,ie=L.scannerLight??L.powerLamp;k(T,C-1,b,17,13,se,w),N(T,C,b,17,5,13,Y,w,L.antiZombieGlass??L.glass);for(const fe of[-7,7])for(const M of[-5,5])A(T+fe,C,b+M,6,se,w);E(T,C+5,b,8,6,se,w),p(T-6,C+6,b-4,ie,w,!0),p(T+6,C+6,b-4,ie,w,!0),p(T,C+6,b,L.radarArray,w,!0),p(T-5,C,b,L.ammoCrate??L.chest,w,!0),p(T+5,C,b,L.medicalStation,w,!0),p(T,C,b-4,L.chest,w,!0),p(T,C,b+4,L.bioScanner,w,!0);for(let fe=-7;fe<=7;fe+=2)p(T+fe,C,b+7,L.electricFence,w,!0);const oe=I(T,C,b,17,13,w,"Búnker de Emergencia S.H.I.E.L.D.");a.push({type:"Búnker de S.H.I.E.L.D.",x:T,z:b,mode:u,npcHub:!0,dungeon:oe})}function re(T,C,b,w){const se=u==="marvel"?L.blackstone??L.obsidian:u==="dino"?L.fossilBrick??L.bone:L.sandstone??L.sand,Y=u==="marvel"?L.reinforcedWall:u==="dino"?L.bone:L.terracotta,ie=u==="marvel"?L.steelPlate:u==="dino"?L.quartz:L.cobble,oe=L.enchantTable??L.obsidian,fe=L.seaLantern??L.glow??L.lamp;k(T,C-1,b,15,15,se,w),z(T,C,b,7,7,ie,w);for(let Z=0;Z<3;Z++){const $=6-Z;z(T,C+Z,b,$,$,Y,w)}k(T,C+3,b,7,7,ie,w);for(const[Z,$]of[[-3,-3],[3,-3],[-3,3],[3,3]])A(T+Z,C+4,b+$,4,ie,w),p(T+Z,C+8,b+$,fe,w,!0);E(T,C+8,b,3,3,Y,w),z(T,C+9,b,2,2,ie,w),p(T,C+10,b,fe,w,!0),p(T,C+4,b,oe,w,!0),p(T-1,C+4,b,L.bookshelf??L.planks,w,!0),p(T+1,C+4,b,L.bookshelf??L.planks,w,!0),p(T,C+4,b-1,L.chest,w,!0),p(T,C+4,b+1,L.chest,w,!0);const M=C-7,_={x:T,z:b,hx:5,hz:5,minY:M+1,maxY:C+2};l.push(_);for(let Z=-4;Z<=4;Z++)for(let $=-4;$<=4;$++)for(let Te=M+1;Te<=C+2;Te++){const pe=r.get(d(T+Z,Te,b+$));pe&&v(pe)}k(T,M,b,9,9,L.blackstone??L.obsidian,w),z(T,M+1,b,4,4,Y,w),z(T,M+2,b,4,4,Y,w),z(T,M+3,b,4,4,Y,w);const B=L.tnt??L.electricFence;for(const[Z,$]of[[-1,-1],[1,-1],[-1,1],[1,1],[0,0]])p(T+Z,M,b+$,B,w,!0);p(T,M+1,b,L.lever,w,!0),p(T-3,M+1,b-3,L.chest,w,!0),p(T+3,M+1,b-3,L.chest,w,!0),p(T-3,M+1,b+3,L.chest,w,!0),p(T+3,M+1,b+3,L.chest,w,!0),p(T,M+4,b,fe,w,!0);for(let Z=M+1;Z<=C+3;Z++){const $=Z-M;p(T-3+Math.min(3,Math.floor($/2)),Z,b+3,ie,w,!0)}const G={x:T,y:M+1,z:b,w:9,d:9,floorY:M,ceilingY:C+2,label:"Cripta del Templo Ancestral",mode:u};a.push({type:"Templo Ancestral de Reliquias",x:T,z:b,mode:u,temple:!0,dungeon:G})}function le(T,C,b,w,se=0){const Y=se%2?L.planks:L.brick,ie=se%3?L.darkPlanks:L.cobble,oe=se%3?L.darkPlanks:L.planks,fe=L.glass;k(T,C-1,b,9,9,ie,w);for(let _=0;_<4;_++)for(let B=-3;B<=3;B++)for(let G=-3;G<=3;G++)if(Math.abs(B)===3||Math.abs(G)===3){const Z=G===3&&Math.abs(B)<=1&&_<3,$=_===2&&(Math.abs(B)===3&&Math.abs(G)<=1||Math.abs(G)===3&&Math.abs(B)===2);Z||p(T+B,C+_,b+G,$?fe:Y,w,!0)}for(const[_,B]of[[-3,-3],[3,-3],[-3,3],[3,3]])A(T+_,C,b+B,5,ie,w);for(let _=0;_<3;_++){const B=4-_;for(let G=-B;G<=B;G++)for(let Z=-B;Z<=B;Z++)(Math.abs(G)===B||Math.abs(Z)===B)&&p(T+G,C+4+_,b+Z,oe,w,!0)}p(T,C+6,b,se%2?L.lamp:L.glow,w,!0);for(const _ of[-2,2])A(T+_,C,b+4,3,ie,w);E(T,C+2,b+4,3,1,oe,w),A(T+2,C+4,b-2,3,L.brick,w),p(T+2,C+7,b-2,L.blackstone,w,!0),p(T-4,C,b+2,L.leaves,w,!0),p(T+4,C,b+2,L.leaves,w,!0),L.chest!==void 0&&p(T+2,C,b+1,L.chest,w,!0),p(T-2,C,b+1,se%2?L.bookshelf:L.crafting,w,!0);const M=I(T,C,b,9,9,w,"Calabozo bajo casa");a.push({type:"Casa con calabozo",x:T,z:b,mode:u,house:!0,dungeon:M})}function Me(T,C,b,w){for(let Y=-22;Y<=22;Y++)for(let ie=-2;ie<=2;ie++)p(T+Y,C-1,b+ie,L.gravel,w,!0);for(let Y=-22;Y<=22;Y++)for(let ie=-2;ie<=2;ie++)p(T+ie,C-1,b+Y,L.gravel,w,!0);k(T,C-1,b,11,11,L.cobble,w),z(T,C-1,b,6,6,L.brick,w);for(const[Y,ie]of[[-6,-6],[6,-6],[-6,6],[6,6]])y(T+Y,C,b+ie,w);z(T,C,b,3,3,L.quartz,w),z(T,C+1,b,2,2,L.prismarine,w),A(T,C,b,4,L.seaLantern,w),[[-16,-16],[0,-17],[16,-16],[-17,0],[17,0],[-16,16],[0,17],[16,16]].forEach(([Y,ie],oe)=>le(T+Y,C,b+ie,w,oe)),k(T,C-1,b-11,9,7,L.cobble,w),N(T,C,b-11,9,6,7,L.brick,w,L.glass);for(const[Y,ie]of[[-4,-14],[4,-14],[-4,-8],[4,-8]])A(T+Y,C,b+ie,8,L.cobble,w);E(T,C+6,b-11,5,4,L.darkPlanks,w),z(T,C+7,b-11,4,3,L.planks,w),p(T,C+8,b-11,L.watchBeacon??L.lamp,w,!0),p(T-2,C,b-11,L.crafting,w,!0),p(T,C,b-11,L.chest,w,!0),p(T+2,C,b-11,L.furnace,w,!0),a.push({type:"Aldea gigante",x:T,z:b,mode:u,npcHub:!0})}function Re(T,C,b){const se=Math.floor(T/8),Y=Math.floor(C/8),ie=Math.floor(An(se,Y,40404)*6)+1,oe=Math.floor(An(se,Y,80808)*6)+1,fe=se*8+ie,M=Y*8+oe;if(T!==fe||C!==M)return;const _=T*jt+Math.floor(jt/2),B=C*jt+Math.floor(jt/2),G=Ho(_,B)+1,Z=Qo(_,B);if(Math.hypot(_,B)<28||a.some(pe=>Math.hypot(pe.x-_,pe.z-B)<75))return;const $=An(se,Y,14141),Te=An(se,Y,777);if(Te>.88||$<.16&&Te>.5){re(_,G,B,b);return}if((Z.id==="plains"||Z.id==="savanna"||Z.id==="forest")&&Te>.78){Me(_,G,B,b);return}if(u==="dino"){if($<.28){te(_,G,B,b);return}if($<.52){K(_,G,B,b);return}if($<.72){j(_,G,B,b);return}if($<.88){le(_,G,B,b,2);return}re(_,G,B,b);return}if(u==="marvel"){if($<.28){U(_,G,B,b);return}if($<.52){W(_,G,B,b);return}if($<.72){F(_,G,B,b);return}if($<.88){le(_,G,B,b,1);return}re(_,G,B,b);return}if(u==="survival"){if($<.4){re(_,G,B,b);return}if($<.7){le(_,G,B,b,0);return}Me(_,G,B,b);return}if($<.35){re(_,G,B,b);return}if($<.7){le(_,G,B,b,1);return}Me(_,G,B,b)}function We(T,C){const b=g(T,C);if(o.has(b))return;const w={blocks:[],water:null};o.set(b,w);for(let se=0;se<jt;se++)for(let Y=0;Y<jt;Y++){const ie=T*jt+se,oe=C*jt+Y,fe=Qo(ie,oe),M=c==="ember"?Math.round(7+Math.sin(ie*.08)*3+Math.cos(oe*.07)*3+Math.sin((ie-oe)*.025)*5):Ho(ie,oe),_=c==="ember"?L.netherrack:L[fe.top],B=c==="ember"?L.blackstone:L[fe.sub];p(ie,M,oe,_,b,!0),p(ie,M-1,oe,B,b,!0);for(let G=2;G<=16;G++){const Z=M-G,$=Math.sin(ie*.23+Z*.41)+Math.cos(oe*.21-Z*.33),Te=Math.sin((ie+oe)*.11+Z*.27)+Math.cos((ie-oe)*.09-Z*.22),pe=Math.sin(ie*.055)*Math.cos(oe*.052)+Math.sin(Z*.31);if(G>=3&&($+Te>2.05||G>7&&pe>1.28)||R(ie,Z,oe))continue;let ue=c==="ember"?Z<M-9?L.basalt:L.netherrack:Z<0?L.deepslate:L.stone;const ae=An(ie+Z*7,oe-Z*11,310+G);c==="ember"?(ae>.985&&(ue=L.glow),G>9&&ae>.994&&(ue=L.quartz),ae>.975&&ae<.985&&(ue=L.magma??L.glow)):(G>=3&&ae>.95&&(ue=L.coal),G>=4&&ae>.97&&(ue=L.iron),G>=4&&ae>.98&&(ue=L.copper),G>=6&&ae>.988&&(ue=L.redstone),G>=8&&ae>.993&&(ue=L.gold),G>=10&&ae>.997&&(ue=L.diamond),G>=11&&ae>.9988&&(ue=L.amethyst),G>=13&&ae>.991&&(ue=L.magma??L.deepslate)),(G>=16||Z<=-6)&&(ue=L.bedrock??L.deepslate),p(ie,Z,oe,ue,b,!0)}if(c==="overworld"&&An(Math.floor(ie/3),Math.floor(oe/3),911)>.993)for(let G=0;G<4;G++){const Z=r.get(d(ie,M-G,oe));Z&&v(Z)}c==="overworld"&&M>Ur+1&&An(ie,oe,98)<fe.tree&&(fe.id==="desert"?P(ie,M,oe,b):fe.id==="mushroom"?x(ie,M,oe,b):D(ie,M,oe,fe.id,b))}if(c==="overworld"){const se=new of({color:4628181,transparent:!0,opacity:.42,roughness:.18,depthWrite:!1}),Y=new St(new Mr(jt,jt),se);Y.rotation.x=-Math.PI/2,Y.position.set(T*jt+jt/2-.5,Ur+.48,C*jt+jt/2-.5),n.add(Y),w.water=Y,Re(T,C,b)}}function $e(T,C){const b=g(T,C),w=o.get(b);if(w){for(const se of[...w.blocks])v(se);w.water&&n.remove(w.water),o.delete(b)}}function He(T){const C=Math.floor(T.x/jt),b=Math.floor(T.z/jt),w=new Set;for(let se=-Io;se<=Io;se++)for(let Y=-Io;Y<=Io;Y++){const ie=C+se,oe=b+Y,fe=g(ie,oe);w.add(fe),o.has(fe)||We(ie,oe)}for(const se of[...o.keys()])if(!w.has(se)){const[Y,ie]=se.split(",").map(Number);$e(Y,ie)}}function ne(){for(const T of[...o.values()]){for(const C of[...T.blocks])v(C);T.water&&n.remove(T.water)}o.clear();for(const T of[...i])v(T);a.length=0,l.length=0}function ce(T,C){return c==="ember"?Math.round(7+Math.sin(T*.08)*3+Math.cos(C*.07)*3+Math.sin((T-C)*.025)*5):Ho(T,C)}function Ce(T){T!==c&&(ne(),c=T)}function Oe(){return c}function Le(T){u=["normal","survival","dino","marvel"].includes(T)?T:"normal"}function it(){return u}function Vt(){return{overworld:[...m.overworld.entries()],ember:[...m.ember.entries()]}}function O(T){m.overworld.clear(),m.ember.clear();for(const[C,b]of T?.overworld??[])m.overworld.set(C,b);for(const[C,b]of T?.ember??[])m.ember.set(C,b)}return{blocks:i,blockMap:r,chunks:o,edits:m.overworld,structures:a,dungeonZones:l,cubeGeo:t,keyFor:d,addBlock:p,placeBlock:f,removeBlock:h,updateChunks:He,clear:ne,heightAt:ce,setDimension:Ce,getDimension:Oe,setGameMode:Le,getGameMode:it,exportEdits:Vt,importEdits:O}}const ge=(n,e,t)=>new It(n,e,t),Nc=(n=.1,e=8,t=6)=>new Wr(n,e,t);function Je(n,e={}){return new Tn({color:n,roughness:.82,metalness:0,...e})}function he(n,e,t,i,r=null,o=null){const s=new St(e,t);return s.position.set(...i),r&&s.scale.set(...r),o&&s.rotation.set(...o),s.castShadow=!0,s.receiveShadow=!0,n.add(s),s}function wg(n,e,t=2.75){const i=document.createElement("canvas");i.width=320,i.height=72;const r=i.getContext("2d");r.fillStyle="rgba(10,16,22,.78)",r.fillRect(2,8,316,54),r.strokeStyle="rgba(255,255,255,.55)",r.lineWidth=2,r.strokeRect(3,9,314,52),r.fillStyle="#ffffff",r.font="bold 27px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText(e,160,35);const o=new as(i);o.minFilter=wn;const s=new cl(new ss({map:o,transparent:!0,depthTest:!1}));return s.position.set(0,t,0),s.scale.set(2.7,.6,1),s.renderOrder=9,n.add(s),s}function Rg(n,e){const t=Je(e.body),i=Je(e.head),r=Je(2105636),o=Je(16250865),s=Je(e.kind==="hostile"?10414689:15188586),a={legs:[],wings:[],head:null,body:null,tail:null},l=e.tall,c=e.wide,u=e.flying,m=c?1.55:l?.72:1.08,d=l?1.5:c?.58:.9,g=c?1.22:l?.52:.72;a.body=he(n,ge(m,d,g),t,[0,l?1.22:.76,0]),a.head=he(n,ge(l?.58:.68,.66,l?.58:.66),i,[0,l?2.22:1.34,-(c?.56:.54)]);const p=l?2.3:1.43,v=l?-.86:-.88,h=l?.17:.2;for(const A of[-1,1]){he(n,ge(.14,.14,.055),o,[A*h,p,v]);const R=e.kind==="hostile"||e.id==="enderman"?e.id==="mzThor"?5636095:13434726:2105636,I=Je(R,{emissive:e.kind==="hostile"?R:0,emissiveIntensity:e.kind==="hostile"?.35:0});he(n,ge(.065,.075,.03),I,[A*h,p,v-.043])}if(u){const A=Je(8900331,{transparent:!0,opacity:.86}),R=he(n,ge(.72,.1,.48),A,[-.65,.92,.05],null,[0,0,.15]),I=he(n,ge(.72,.1,.48),A,[.65,.92,.05],null,[0,0,-.15]);a.wings.push(R,I)}else{const A=l?1:c?.45:.66,R=l?.42:c?.22:.18,I=c?[-.55,.55]:[-.34,.34],z=c?[-.34,.34]:[-.22,.22];for(const y of I)for(const E of z){const k=he(n,ge(c?.22:.2,A,c?.26:.2),t,[y,R,E]);a.legs.push(k)}}const f=(A=i,R=.16)=>{he(n,ge(R,.28,.12),A,[-.23,l?2.62:1.73,-.52],null,[0,0,-.18]),he(n,ge(R,.28,.12),A,[.23,l?2.62:1.73,-.52],null,[0,0,.18])},D=(A=i,R=.38,I=.2,z=.26)=>he(n,ge(R,I,z),A,[0,l?2.13:1.3,l?-.91:-.94]),P=(A=t,R=.55)=>{a.tail=he(n,ge(.16,.16,R),A,[0,l?1.22:.78,.52],null,[.35,0,0])},x=()=>{he(n,ge(.09,.3,.09),o,[-.22,l?2.63:1.72,-.54],null,[0,0,-.25]),he(n,ge(.09,.3,.09),o,[.22,l?2.63:1.72,-.54],null,[0,0,.25])};if(["cow","pig","sheep","goat","camel","llama","horse"].includes(e.id)&&(D(),f(),P()),(e.id==="cow"||e.id==="goat")&&x(),e.id==="pig"&&D(Je(16032426),.42,.19,.28),e.id==="sheep"){const A=Je(15789800);for(const R of[[-.48,1.02,.05],[.48,1.02,.05],[0,1.15,.34],[0,1.15,-.32]])he(n,ge(.42,.42,.25),A,R)}if(e.id==="rabbit"&&(he(n,ge(.15,.6,.14),i,[-.18,1.85,-.5],null,[0,0,-.08]),he(n,ge(.15,.6,.14),i,[.18,1.85,-.5],null,[0,0,.08]),P(o,.25)),["wolf","fox","cat"].includes(e.id)&&(f(),D(),P()),e.id==="chicken"){const A=Je(15249983);he(n,ge(.24,.13,.28),A,[0,1.34,-.96]),he(n,ge(.14,.2,.12),Je(13184818),[0,1.15,-.89]);for(const R of[-1,1])a.wings.push(he(n,ge(.12,.5,.48),t,[R*.58,.82,.02],null,[0,0,R*.2]))}if(e.id==="bee"){for(const A of[-.18,.18])he(n,ge(1.08,.92,.12),r,[0,.76,A]);he(n,ge(.06,.33,.06),r,[-.17,1.68,-.59],null,[.25,0,0]),he(n,ge(.06,.33,.06),r,[.17,1.68,-.59],null,[.25,0,0])}if(e.id==="frog"&&(a.body.scale.set(1.15,.58,1.05),a.head.position.y=1.1,he(n,Nc(.13),o,[-.22,1.47,-.55]),he(n,Nc(.13),o,[.22,1.47,-.55])),e.id==="panda"&&(he(n,ge(.23,.23,.05),r,[-.21,1.43,-.89]),he(n,ge(.23,.23,.05),r,[.21,1.43,-.89]),f(r,.2)),e.id==="spider"){for(const A of[-1,1])for(let R=0;R<4;R++)he(n,ge(.72,.09,.1),r,[A*(.72+R*.04),.48,-.42+R*.28],null,[0,(R-1.5)*.16,A*.18]);for(const A of[-.18,-.06,.06,.18])he(n,ge(.055,.055,.03),Je(16730955,{emissive:16719904,emissiveIntensity:.5}),[A,1.3,-.91])}if(e.id==="creeper"&&(he(n,ge(.12,.15,.035),r,[-.17,1.44,-.9]),he(n,ge(.12,.15,.035),r,[.17,1.44,-.9]),he(n,ge(.2,.11,.035),r,[0,1.22,-.9]),he(n,ge(.1,.13,.035),r,[-.07,1.13,-.9]),he(n,ge(.1,.13,.035),r,[.07,1.13,-.9])),e.id==="skeleton"){a.body.scale.set(.55,1,1);for(const A of a.legs)A.scale.x=.55;he(n,ge(.45,.06,.08),r,[0,1.54,-.89])}if((e.id==="zombie"||e.id==="drowned")&&(he(n,ge(.18,.18,.72),t,[-.42,1.22,-.42],null,[Math.PI/2.25,0,0]),he(n,ge(.18,.18,.72),t,[.42,1.22,-.42],null,[Math.PI/2.25,0,0])),e.id==="witch"&&(he(n,ge(.9,.12,.9),r,[0,1.78,-.5]),he(n,ge(.38,.5,.38),r,[0,2.02,-.5]),D(i,.14,.18,.34)),e.kind==="villager"){D(i,.16,.2,.34);const A=Je(e.id==="trader"?3760003:e.body??7950654);he(n,ge(1.12,.45,.76),A,[0,.52,0]),he(n,ge(.7,.16,.18),A,[0,1.18,-.53],null,[0,0,.08])}if(e.marvelZombie){const A=Je(7311203);if(he(n,ge(.16,.08,.04),A,[-.18,1.48,-.91]),he(n,ge(.16,.08,.04),A,[.18,1.48,-.91]),e.id==="mzIron"&&(he(n,ge(.28,.28,.04),Je(10480127,{emissive:6737151,emissiveIntensity:.9}),[0,1.18,-.61]),he(n,ge(.82,.22,.62),Je(10432045),[0,1.62,0])),e.id==="mzCap"){const R=he(n,new Ko(.48,.48,.1,18),Je(3497628),[-.68,1.05,-.1],null,[0,0,Math.PI/2]);R.rotation.y=.2,he(n,new Ko(.3,.3,.115,18),Je(14145495),[-.68,1.05,-.1],null,[0,0,Math.PI/2])}if(e.id==="mzWolverine")for(const R of[-1,1])for(let I=-1;I<=1;I++)he(n,ge(.035,.035,.62),Je(14211280),[R*.52,.72,-.48+I*.07],null,[Math.PI/2,0,0]);if(e.id==="mzSpider")for(const R of[-.18,.18])he(n,ge(.18,.25,.04),o,[R,1.48,-.91]);if(e.id==="mzHulk"&&(a.body.scale.set(1.55,1.55,1.35),a.head.scale.set(1.28,1.2,1.18),a.head.position.y+=.35,a.legs.forEach(R=>R.scale.set(1.35,1.25,1.35))),e.id==="mzStrange"&&(he(n,ge(1.12,.1,.78),Je(9318712),[0,1.52,.25],null,[.18,0,0]),he(n,ge(.34,.08,.1),Je(15249996),[0,1.7,-.55])),e.id==="mzThanos"&&(a.body.scale.set(1.35,1.35,1.25),a.head.position.y+=.22,he(n,ge(.3,.42,.32),Je(13213755,{emissive:5256960,emissiveIntensity:.25}),[-.48,.83,-.2])),e.id==="mzThor"&&(he(n,ge(.08,.36,.18),Je(14211288),[-.36,l?2.65:1.75,-.52],null,[0,0,-.25]),he(n,ge(.08,.36,.18),Je(14211288),[.36,l?2.65:1.75,-.52],null,[0,0,.25]),he(n,ge(1.1,1.4,.08),Je(11740196),[0,l?1.2:.8,.45],null,[.15,0,0]),he(n,ge(.24,.36,.24),Je(8952234,{emissive:3368601,emissiveIntensity:.3}),[.52,.8,-.3],null,[Math.PI/2,0,0])),e.id==="mzScarlet"&&(he(n,ge(.58,.22,.1),Je(14231090),[0,l?2.55:1.68,-.65]),he(n,ge(1.1,.12,.8),Je(9051170),[0,l?1.4:.9,.2])),e.id==="mzDeadpool"){he(n,ge(.06,1.2,.06),Je(14474460),[-.16,l?1.4:.9,.42],null,[0,0,.45]),he(n,ge(.06,1.2,.06),Je(14474460),[.16,l?1.4:.9,.42],null,[0,0,-.45]);for(const R of[-.18,.18])he(n,ge(.18,.18,.04),r,[R,l?2.28:1.44,-.88])}if(e.id==="mzVenom"){a.body.scale.set(1.4,1.4,1.3),a.head.scale.set(1.2,1.1,1.2),a.head.position.y+=.2,he(n,ge(.68,.52,.05),o,[0,l?1.4:.9,-.58]),he(n,ge(.14,.08,.62),Je(15417191),[0,l?1.9:1.15,-1.3],null,[.28,0,0]);for(const R of[-1,1])he(n,ge(.12,.72,.12),r,[R*.48,l?1.8:1.2,.45],null,[.4,0,R*.3])}if(e.id==="mzSymbioteSpider"){a.body.scale.set(1.05,1.1,1.05),he(n,ge(.55,.45,.06),o,[0,l?1.3:.82,-.55]);for(const R of[-.18,.18])he(n,ge(.18,.25,.04),o,[R,l?2.25:1.42,-.9]);for(const R of[-1,1])he(n,ge(.08,.6,.08),r,[R*.42,l?1.6:1.05,.25],null,[.3,0,R*.25]),he(n,ge(.06,.4,.06),Je(10035916,{emissive:6689177,emissiveIntensity:.4}),[R*.48,l?1.3:.8,-.35])}if(e.id==="mzCarnage"){a.body.scale.set(1.25,1.35,1.15),a.head.scale.set(1.15,1.08,1.15),a.head.position.y+=.15;const R=Je(1573892);for(const I of[-1,1])he(n,ge(.1,1.1,.1),Je(12063764),[I*.38,l?1.8:1.2,.4],null,[.5,0,I*.4]),he(n,ge(.08,.9,.08),R,[I*.25,l?2.1:1.5,.35],null,[-.4,0,I*.3]),he(n,ge(.08,.5,.08),Je(12063764),[I*.55,l?1.1:.7,-.4],null,[Math.PI/2,0,0]);for(const I of[-.18,.18])he(n,ge(.14,.18,.05),o,[I,l?2.32:1.48,-.92])}if(e.id==="mzBlackPanther"){a.body.scale.set(1.05,1.08,1.05),he(n,ge(.12,.22,.08),r,[-.22,l?2.62:1.72,-.48],null,[0,0,-.2]),he(n,ge(.12,.22,.08),r,[.22,l?2.62:1.72,-.48],null,[0,0,.2]);const R=Je(11027711,{emissive:7803340,emissiveIntensity:.7});for(const I of[-.18,.18])he(n,ge(.1,.08,.04),R,[I,l?2.28:1.44,-.9]);he(n,ge(.45,.06,.06),R,[0,l?1.35:.88,-.54]);for(const I of[-1,1])he(n,ge(.04,.28,.14),Je(14342864),[I*.48,l?1.05:.65,-.42],null,[Math.PI/2,0,0])}}if(e.dinosaur){if(a.body.scale.set(e.id==="dinoLongneck"?1.45:1.35,e.id==="dinoAnky"?.72:.9,e.id==="dinoTrike"?1.35:1.55),a.head.position.z=-1.08,e.id==="dinoRex"&&(a.head.scale.set(1.25,1.05,1.35),a.body.scale.set(1.4,1.25,1.8)),e.id==="dinoLongneck"&&(he(n,ge(.38,2.2,.38),t,[0,2.1,-.36],null,[-.25,0,0]),a.head.position.set(0,3.25,-.82),a.head.scale.set(.72,.72,.82)),e.id==="dinoTrike"){he(n,ge(1.05,.65,.16),i,[0,1.48,-1]);for(const A of[-1,1])he(n,ge(.09,.55,.09),o,[A*.34,1.58,-1.38],null,[1.05,0,A*.16]);he(n,ge(.1,.72,.1),o,[0,1.5,-1.42],null,[1.12,0,0])}if(e.id==="dinoAnky"){a.body.scale.set(1.5,.72,1.65);for(let A=-2;A<=2;A++)for(const R of[-1,1])he(n,ge(.16,.16,.16),s,[R*.58,.95,A*.24]);a.tail=he(n,ge(.25,.2,1.15),t,[0,.78,.95],null,[-.08,0,0]),he(n,ge(.62,.46,.5),s,[0,.77,1.55])}else e.id!=="dinoPtero"&&(a.tail=he(n,ge(.22,.22,1.45),t,[0,l?1.3:.82,.95],null,[-.18,0,0]));if(e.id==="dinoRaptor"){for(const A of[-1,1])he(n,ge(.12,.36,.12),s,[A*.34,.22,-.25],null,[0,0,A*.3]);he(n,ge(.48,.12,.32),s,[0,1.55,-.72]);for(let A=-2;A<=2;A++)he(n,ge(.07,.18,.08),s,[0,1.62,A*.18],null,[0,0,.12])}if(e.carnivore){const A=Je(15919828);for(const R of[-.22,-.08,.08,.22])he(n,ge(.055,.12,.055),A,[R,l?2:1.17,-1.35],null,[.15,0,0])}if(e.id==="dinoRex")for(let A=0;A<5;A++)he(n,ge(.09,.22,.1),s,[0,1.72,-.55+A*.3],null,[0,0,.1]);if(e.id==="dinoPtero"&&(a.body.scale.set(.9,.55,1.4),a.head.position.set(0,1.22,-.88),a.head.scale.set(.72,.58,1.1),a.wings.forEach((A,R)=>{A.scale.set(2.35,.55,1.75),A.position.x=(R?1:-1)*1.15}),he(n,ge(.18,.16,.75),i,[0,1.18,-1.45])),e.id==="dinoSpino"){a.head.scale.set(1.25,.95,1.6),a.body.scale.set(1.4,1.25,1.9),he(n,ge(.16,1.4,2.2),Je(12073520),[0,l?2.1:1.55,0]);for(let A=0;A<4;A++)he(n,ge(.08,.22,.08),s,[0,l?2.85:2.3,-.8+A*.5])}if(e.id==="dinoDilopho"){a.body.scale.set(1.15,.85,1.25);for(const A of[-1,1])he(n,ge(.06,.42,.75),Je(14235689),[A*.15,l?2.4:1.6,-.8],null,[0,0,A*.15]);he(n,ge(1.25,.82,.08),Je(15051308),[0,l?1.8:1.15,-.65])}if(e.id==="dinoCarnotaur"){a.head.scale.set(1.15,1.05,1.25),a.body.scale.set(1.3,1.15,1.55);for(const A of[-1,1])he(n,ge(.12,.38,.12),o,[A*.24,l?2.5:1.72,-1.05],null,[.55,0,A*.35])}}return a}function Cg(n,e=Ho){const t=[];function i(d,g,p,v){const h=st[d],f=new rr;f.position.set(g,p,v);const D=Rg(f,h);h.npc&&wg(f,h.name,h.tall?3.35:2.45),n.add(f);const P={group:f,parts:D,type:d,hp:h.hp,maxHp:h.hp,state:"wander",dir:Math.random()*Math.PI*2,stateTimer:1+Math.random()*4,thinkTimer:0,home:new V(g,p,v),target:null,targetMob:null,walkPhase:Math.random()*Math.PI*2,profession:h.kind==="villager"?h.defaultRole??["granjero","constructor","bibliotecario","explorador"][Math.floor(Math.random()*4)]:null,npcRole:h.defaultRole??null,npcMode:null,npcStructure:null,npcQuestDone:!1,npcAidCooldown:0,actionTimer:0,tamed:!1,friendOfPlayer:!1,captive:!1,captiveRadius:3,fixedY:null,bond:0,rescued:!1};return f.userData.mob=P,f.traverse(x=>x.userData.mob=P),t.push(P),P}function r(d){n.remove(d.group);const g=t.indexOf(d);g>=0&&t.splice(g,1)}function o(){for(const d of[...t])n.remove(d.group);t.length=0}function s(d,g,p=14){let v=null,h=p;for(const f of t){if(!g(f))continue;const D=d.distanceTo(f.group.position);D<h&&(v=f,h=D)}return v}function a(d,g,p){const v=st[d.type],h=d.group.position.distanceTo(g);if(d.tamed||d.friendOfPlayer){h>4?(d.state="follow",d.target=g.clone()):(d.state="wander",d.target=null);return}if(d.captive){d.group.position.distanceTo(d.home)>d.captiveRadius?(d.state="home",d.target=d.home.clone()):(d.state="wander",d.dir+=(-1+Math.random()*2)*1.2,d.target=null);return}if((v.kind==="hostile"||v.dinosaur&&v.carnivore)&&h<16){d.state="chase",d.target=g.clone();return}if(v.dinosaur&&v.herbivore&&h<4){d.state="avoid",d.target=g.clone();return}if(!(d.state==="flee"&&d.stateTimer>0)){if(v.kind==="villager"){const f=s(d.group.position,P=>{const x=st[P.type];return x.kind==="hostile"||x.dinosaur&&x.carnivore&&!P.tamed},11);if(f){if(["guardia","superviviente","explorador"].includes(d.npcRole)){d.state="guard",d.target=f.group.position.clone(),d.targetMob=f;return}d.state="flee",d.target=f.group.position.clone(),d.stateTimer=2.5;return}if(p<.15&&d.npcRole!=="superviviente"){d.state="home",d.target=d.home.clone();return}if(d.npcRole==="medico"){const P=s(d.group.position,x=>x!==d&&st[x.type].kind==="villager"&&x.hp<x.maxHp,10);if(P){d.state="work",d.target=P.group.position.clone(),d.targetMob=P;return}}const D=s(d.group.position,P=>P!==d&&st[P.type].kind==="villager",8);if(D&&Math.random()<.3){d.state="socialize",d.target=D.group.position.clone();return}if(Math.random()<.58){d.state="work";const P=["constructor","ingeniero","cientifico","paleontologo"].includes(d.npcRole)?6:10;d.target=d.home.clone().add(new V((Math.random()-.5)*P,0,(Math.random()-.5)*P));return}}if(v.kind==="guardian"){const f=s(d.group.position,D=>st[D.type].kind==="hostile",12);if(f){d.state="guard",d.target=f.group.position.clone();return}}if(v.kind==="passive"&&h<3){d.state="avoid",d.target=g.clone();return}d.state="wander",d.dir+=(-1+Math.random()*2)*2.3,d.target=null}}function l(d,g,p){st[d.type],d.walkPhase+=g*(p?8:2);const v=Math.sin(d.walkPhase)*(p?.55:.08);d.parts.legs.forEach((h,f)=>h.rotation.x=f%2?v:-v),d.parts.wings.forEach((h,f)=>h.rotation.z=(f?1:-1)*(.18+Math.sin(d.walkPhase*1.7)*.48)),d.parts.head&&(d.parts.head.rotation.y=Math.sin(d.walkPhase*.22)*.1),d.parts.tail&&(d.parts.tail.rotation.y=Math.sin(d.walkPhase*.45)*.25)}function c(d,g,p){for(let v=t.length-1;v>=0;v--){const h=t[v],f=st[h.type];h.stateTimer-=d,h.thinkTimer-=d,h.npcAidCooldown=Math.max(0,h.npcAidCooldown-d),h.webbed>0&&(h.webbed=Math.max(0,h.webbed-d)),h.thinkTimer<=0&&(h.thinkTimer=.45+Math.random()*.35,a(h,g,p));let D=!1,P=(f.speed??1)*2.2*d;if(h.webbed>0&&(P*=.08),h.state==="chase"&&h.target){const x=h.target.clone().sub(h.group.position);x.y=0,x.lengthSq()>.25&&(x.normalize(),h.group.position.addScaledVector(x,P*1.28),h.group.rotation.y=Math.atan2(-x.x,-x.z),D=!0)}else if(h.state==="avoid"&&h.target){const x=h.group.position.clone().sub(h.target);x.y=0,x.lengthSq()>.05&&(x.normalize(),h.group.position.addScaledVector(x,P*1.15),h.group.rotation.y=Math.atan2(-x.x,-x.z),D=!0)}else if(h.state==="follow"&&h.target){const x=h.target.clone().sub(h.group.position);x.y=0,x.lengthSq()>4&&(x.normalize(),h.group.position.addScaledVector(x,P*1.2),h.group.rotation.y=Math.atan2(-x.x,-x.z),D=!0)}else if(h.state==="flee"&&h.target){const x=h.group.position.clone().sub(h.target);x.y=0,x.lengthSq()>.05&&(x.normalize(),h.group.position.addScaledVector(x,P*1.35),h.group.rotation.y=Math.atan2(-x.x,-x.z),D=!0)}else if(h.state==="work"&&h.target){const x=h.target.clone().sub(h.group.position);x.y=0,x.lengthSq()>.35&&(x.normalize(),h.group.position.addScaledVector(x,P*.8),h.group.rotation.y=Math.atan2(-x.x,-x.z),D=!0)}else if(h.state==="guard"&&h.target){const x=h.target.clone().sub(h.group.position);x.y=0,x.lengthSq()>.55&&(x.normalize(),h.group.position.addScaledVector(x,P*1.2),h.group.rotation.y=Math.atan2(-x.x,-x.z),D=!0),h.targetMob&&h.group.position.distanceTo(h.targetMob.group.position)<1.8&&(u(h.targetMob,3,h.group.position),h.state="wander")}else{const x=Math.sin(h.dir)*P*.55,A=Math.cos(h.dir)*P*.55;h.group.position.x+=x,h.group.position.z+=A,h.group.rotation.y=h.dir+Math.PI,D=!0}if(h.fixedY!==null)h.group.position.y=h.fixedY;else{const x=e(h.group.position.x,h.group.position.z)+(f.flying?2.8:1);h.group.position.y+=(x-h.group.position.y)*Math.min(1,d*8)}l(h,d,D)}}function u(d,g=1,p=null){if(d.hp-=g,p){const v=d.group.position.clone().sub(p);v.y=0,v.lengthSq()>.01&&(v.normalize(),d.group.position.addScaledVector(v,.65))}return d.hp<=0?(r(d),!0):!1}function m(d,g="normal",p=1,v=35){if(t.length>=75)return;const h=st.map((x,A)=>({m:x,i:A})).filter(x=>g==="marvel"?x.m.marvelZombie:g==="dino"?x.m.dinosaur:p>.3?!x.m.kind.includes("hostile"):!0);if(!h.length)return;const f=Math.hypot(d.x,d.z),D=g==="marvel"&&f>v,P=D?Math.random()<.6?2:3:1;for(let x=0;x<P&&!(t.length>=75);x++){const A=h[Math.floor(Math.random()*h.length)],R=Math.random()*Math.PI*2,I=(D?20:16)+Math.random()*32,z=d.x+Math.sin(R)*I,y=d.z+Math.cos(R)*I;i(A.i,z,e(z,y)+1,y)}}return{mobs:t,makeMob:i,removeMob:r,clearAll:o,update:c,hit:u,ensurePopulation:m,setHeightProvider:d=>e=d}}function Pg(n){const e=[];let t=null,i="clear",r=60,o=0,s=0;const a=520,l=new ln,c=new Float32Array(a*3);l.setAttribute("position",new Sn(c,3));const u=new nf(l,new sd({color:12180735,size:.08,transparent:!0,opacity:.72,depthWrite:!1}));u.visible=!1,n.add(u);function m(){if(!t){const N=window.AudioContext||window.webkitAudioContext;N&&(t=new N)}t?.resume?.()}function d(N=.3){if(!t)return null;const j=t.sampleRate*N,te=t.createBuffer(1,j,t.sampleRate),K=te.getChannelData(0);for(let U=0;U<j;U++)K[U]=Math.random()*2-1;return te}function g(N=.4,j=.08,te=400){if(!t)return;const K=t.createBufferSource(),U=d(N);if(!U)return;K.buffer=U;const W=t.createBiquadFilter();W.type="lowpass",W.frequency.setValueAtTime(te,t.currentTime),W.frequency.exponentialRampToValueAtTime(40,t.currentTime+N);const F=t.createGain();F.gain.setValueAtTime(j,t.currentTime),F.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+N),K.connect(W).connect(F).connect(t.destination),K.start(),K.stop(t.currentTime+N)}function p(N=220,j=.08,te="square",K=.025){if(!t)return;const U=t.createOscillator(),W=t.createGain();U.type=te,U.frequency.value=N,W.gain.setValueAtTime(K,t.currentTime),W.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+j),U.connect(W).connect(t.destination),U.start(),U.stop(t.currentTime+j)}function v(N){t&&(N==="break"?(g(.08,.04,800),p(90,.05,"triangle",.03)):N==="place"?(g(.06,.035,600),p(150,.04,"sine",.02)):N==="hit"?(p(180,.08,"sawtooth",.04),setTimeout(()=>p(120,.06,"sawtooth",.03),40)):N==="pickup"||N==="exp"?(p(560,.09,"sine",.03),setTimeout(()=>p(840,.12,"sine",.03),50)):N==="thunder"?(g(1.2,.12,350),setTimeout(()=>g(.8,.08,200),180)):N==="explosion"?(g(.9,.22,500),p(60,.45,"sawtooth",.08),s=.45):N==="fuse"?g(.2,.04,1800):N==="bounce"?(p(220,.08,"sine",.04),setTimeout(()=>p(440,.14,"sine",.04),40)):N==="eat"?(p(280,.05,"triangle",.025),setTimeout(()=>p(340,.05,"triangle",.025),60)):N==="chest"?(p(320,.06,"square",.02),setTimeout(()=>p(480,.08,"square",.02),50)):N==="enchant"?(p(523,.12,"sine",.03),setTimeout(()=>p(659,.12,"sine",.03),80),setTimeout(()=>p(784,.18,"sine",.04),160)):N==="step"?g(.04,.015,500):N==="web"?(g(.12,.06,1200),p(680,.06,"sawtooth",.03)):N==="symbiote"&&(g(.35,.09,300),p(95,.22,"sawtooth",.06),p(140,.18,"sine",.04)))}function h(N,j=16777215,te=12,K=.09,U=2.5){for(let W=0;W<te;W++){const F=new St(new It(K,K,K),new mr({color:j}));F.position.copy(N).add(new V((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4)),n.add(F),e.push({m:F,v:new V((Math.random()-.5)*U,Math.random()*U*.8+.5,(Math.random()-.5)*U),life:.5+Math.random()*.35})}}function f(N,j){h(N,j,16,.11,3),v("break")}function D(N,j){h(N,j,8,.07,1.8),v("place")}function P(N){h(N,16726843,12,.1,2.5),v("hit")}function x(N){v("explosion"),h(N,16730880,32,.22,6.5),h(N,16763904,24,.18,5),h(N,4473924,28,.26,4),h(N,13421772,16,.2,3.5)}function A(N){v("bounce"),h(N,7722077,14,.12,3.5)}function R(N){v("enchant"),h(N,10044671,16,.08,2),h(N,4517631,12,.08,2)}function I(N,j){v("web");const te=N.distanceTo(j),K=Math.min(32,Math.max(8,Math.floor(te*2)));for(let U=0;U<=K;U++){const W=U/K,F=new V().lerpVectors(N,j,W);F.y+=Math.sin(W*Math.PI)*.35;const re=new St(new It(.12,.12,.12),new mr({color:U%2===0?1118485:7938747}));re.position.copy(F),n.add(re),e.push({m:re,v:new V((Math.random()-.5)*.8,(Math.random()-.5)*.8,(Math.random()-.5)*.8),life:.35+Math.random()*.25})}}function z(N){v("symbiote"),s=.35,h(N,1118486,45,.24,7.5),h(N,9116851,30,.18,6),h(N,13684952,15,.12,5)}function y(N){i=N,u.visible=N!=="clear",r=70+Math.random()*80,N==="storm"&&v("thunder")}function E(){return y(i==="clear"?"rain":i==="rain"?"storm":"clear"),i}function k(N,j){for(let K=e.length-1;K>=0;K--){const U=e[K];U.life-=N,U.v.y-=7.5*N,U.m.position.addScaledVector(U.v,N),U.m.scale.setScalar(Math.max(.01,U.life*1.5)),U.life<=0&&(n.remove(U.m),U.m.geometry.dispose(),U.m.material.dispose(),e.splice(K,1))}if(r-=N,r<=0){const K=Math.random();y(K<.57?"clear":K<.86?"rain":"storm")}if(i!=="clear"){for(let K=0;K<a;K++){const U=K*3;c[U+1]<j.position.y-7||c[U]===0?(c[U]=j.position.x+(Math.random()-.5)*34,c[U+1]=j.position.y+8+Math.random()*20,c[U+2]=j.position.z+(Math.random()-.5)*34):(c[U+1]-=(i==="storm"?26:18)*N,c[U]+=.7*N)}l.attributes.position.needsUpdate=!0,i==="storm"&&Math.random()<N*.03&&(o=.14,v("thunder"))}o=Math.max(0,o-N);let te=new V;return s>0&&(te.set((Math.random()-.5)*s,(Math.random()-.5)*s,(Math.random()-.5)*s),s=Math.max(0,s-N*1.2)),{weather:i,flash:o,shakeOffset:te}}return{unlockAudio:m,sound:v,blockBreak:f,blockPlace:D,mobHit:P,explosionEffect:x,bounceEffect:A,enchantEffect:R,symbioteWebEffect:I,symbioteBurstEffect:z,setWeather:y,cycleWeather:E,update:k,get weather(){return i}}}function Dg(n,e,t,i,r,o,s=null,a=null,l=null){const c=new Map,u=[],m=new Map,d=new Map;let g=0,p=0,v=0;const h=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],f=(U,W,F)=>n.blockMap.get(n.keyFor(U,W,F)),D=U=>t[U?.userData?.typeIndex]?.id;function P(U,W){const F=D(U);F==="powerLamp"&&(U.userData.privateMaterial||(U.material=U.material.clone(),U.userData.privateMaterial=!0),U.material.emissive=new Ye(W?16767067:2497800),U.material.emissiveIntensity=W?1.8:.08,U.material.color.set(W?16766042:7297834),U.userData.powered=W),F==="powerDust"&&(U.userData.privateMaterial||(U.material=U.material.clone(),U.userData.privateMaterial=!0),U.material.emissive=new Ye(W?16720418:2228224),U.material.emissiveIntensity=W?1.25:.05,U.material.color.set(W?15874104:8265760),U.userData.powered=W),F==="lever"&&(U.rotation.z=W?-.48:.48,U.userData.powered=W),["electricFence","radarArray","bioScanner","scannerLight"].includes(F)&&(U.userData.privateMaterial||(U.material=U.material.clone(),U.userData.privateMaterial=!0),U.material.emissive=new Ye(W?5898225:463895),U.material.emissiveIntensity=W?1.15:.08,U.userData.powered=W)}function x(){const U=new Set,W=[];for(const F of n.blocks){const re=D(F);if(["powerDust","powerLamp","lever","electricFence","radarArray","bioScanner","scannerLight"].includes(re)&&P(F,!1),["electricFence","radarArray","bioScanner","scannerLight"].includes(re)&&P(F,!0),re==="lever"&&c.get(n.keyFor(F.position.x,F.position.y,F.position.z))){const le=n.keyFor(F.position.x,F.position.y,F.position.z);U.add(le),W.push(F),P(F,!0)}}for(;W.length;){const F=W.shift();for(const[re,le,Me]of h){const Re=f(F.position.x+re,F.position.y+le,F.position.z+Me);if(!Re)continue;const We=D(Re);if(We==="tnt"&&!F.userData.tntIgnited&&A(Re,1.8),!["powerDust","powerLamp","lever","electricFence","radarArray","bioScanner","scannerLight"].includes(We))continue;const $e=n.keyFor(Re.position.x,Re.position.y,Re.position.z);U.has($e)||We==="lever"&&!c.get($e)||(U.add($e),W.push(Re),P(Re,!0))}}}function A(U,W=2.5){if(U.userData.tntIgnited)return;U.userData.tntIgnited=!0,s?.sound?.("fuse");const F=U.material,re=new mr({color:16777215});U.material=re,u.push({block:U,timer:W,maxTimer:W,origMat:F,whiteMat:re,pos:U.position.clone()}),o("🧨 ¡Dinamita TNT encendida!")}function R(U){const W=U.pos;s?.explosionEffect?.(W),n.blocks.includes(U.block)&&n.removeBlock(U.block,!0);const F=3.6,re=Math.floor(W.x-F),le=Math.ceil(W.x+F),Me=Math.floor(W.y-F),Re=Math.ceil(W.y+F),We=Math.floor(W.z-F),$e=Math.ceil(W.z+F);for(let He=re;He<=le;He++)for(let ne=Me;ne<=Re;ne++)for(let ce=We;ce<=$e;ce++)if(W.distanceTo(new V(He,ne,ce))<=F){const Oe=f(He,ne,ce);if(Oe){const Le=D(Oe);if(Le==="bedrock"||Le==="obsidian"||Le==="portalCore")continue;if(Le==="tnt"&&Oe!==U.block){A(Oe,.4+Math.random()*.4);continue}const it=Oe.userData.typeIndex??0;Math.random()<.65&&a&&a(Oe.position.clone(),it),n.removeBlock(Oe,!0)}}for(const He of[...e.mobs]){const ne=He.group.position.distanceTo(W);if(ne<7){const ce=Math.round((7-ne)*3.2);e.hit(He,ce,W);const Ce=He.group.position.clone().sub(W).normalize();He.group.position.addScaledVector(Ce,Math.max(1,4-ne*.5))}}if(l){const ne=(window.__julianCameraPos??W).distanceTo(W);if(ne<6.5){const ce=Math.round((6.5-ne)*2.8);l(Math.max(1,ce))}}y()}function I(U){for(let W=u.length-1;W>=0;W--){const F=u[W];F.timer-=U;const re=Math.max(4,(1-F.timer/F.maxTimer)*18),le=Math.sin((F.maxTimer-F.timer)*re)>0;F.block.material=le?F.whiteMat:F.origMat;const Me=1+Math.sin((F.maxTimer-F.timer)*re)*.08;F.block.scale.set(Me,Me,Me),F.timer<=0&&(u.splice(W,1),R(F))}}function z(U){const W=D(U);if(W==="lever"){const F=n.keyFor(U.position.x,U.position.y,U.position.z),re=!c.get(F);return c.set(F,re),x(),o(re?"Palanca encendida ⚡":"Palanca apagada"),{handled:!0,type:"lever"}}if(W==="tnt")return A(U,2.5),{handled:!0,type:"tnt"};if(W==="enchantTable")return s?.enchantEffect?.(U.position),{handled:!0,type:"enchantTable",block:U};if(W==="furnace")return{handled:!0,type:"furnace",block:U};if(W==="portalCore")return{handled:!0,type:"portal"};if(W==="radarArray"){const F=U.position,re=e.mobs.filter($e=>$e.group.position.distanceTo(F)<64);let le=0,Me=0,Re=0,We=0;for(const $e of re){const He=st[$e.type];He.marvelZombie||He.kind==="hostile"?le++:He.dinosaur?Re++:He.kind==="villager"?We++:Me++}return o(`Radar Mini-IA: ${re.length} señales · ${le} amenazas · ${Re} dinosaurios · ${We} aldeanos · ${Me} neutrales`),{handled:!0,type:"radar"}}if(W==="bioScanner"){let F=null,re=36;for(const le of e.mobs){const Me=le.group.position.distanceTo(U.position);Me<re&&(re=Me,F=le)}if(F){const le=st[F.type];o(`Escáner biológico: ${le.name} · ${Math.ceil(F.hp)}/${F.maxHp} vida · ${Math.round(re)} bloques`)}else o("Escáner biológico: no hay señales cercanas");return{handled:!0,type:"bioscan"}}if(W==="medicalStation")return{handled:!0,type:"medical"};if(W==="watchBeacon"){const F=n.structures.filter(re=>Math.hypot(re.x-U.position.x,re.z-U.position.z)<180);return o(`Baliza: ${F.length} estructuras registradas en 180 bloques`),{handled:!0,type:"beacon"}}return{handled:!1}}function y(){x()}function E(U){if(n.getDimension()!=="overworld"||(p+=U,p<6))return;p=0;const W=e.mobs.filter(F=>F.profession==="constructor");for(const F of W){if(Math.random()>.45)continue;const re=F.home,le=Math.random()*Math.PI*2,Me=3+Math.floor(Math.random()*5),Re=Math.round(re.x+Math.cos(le)*Me),We=Math.round(re.z+Math.sin(le)*Me),$e=n.heightAt(Re,We)+1;if(f(Re,$e,We))continue;const He=Math.random()<.55?i.planks:i.cobble,ne=n.placeBlock(Re,$e,We,He);ne&&(ne.userData.villagerBuilt=!0,F.state="work",F.target=new V(Re,$e,We))}}function k(U){if(v+=U,v<.65)return;v=0;const W=n.blocks.filter(F=>["electricFence","antiZombieGlass","reinforcedWall"].includes(D(F)));if(W.length)for(const F of[...e.mobs]){const re=st[F.type];if(!(re.kind==="hostile"||re.marvelZombie||re.dinosaur&&re.carnivore))continue;let le=null,Me=1.55;for(const We of W){const $e=F.group.position.distanceTo(We.position);$e<Me&&(Me=$e,le=We)}if(!le)continue;const Re=F.group.position.clone().sub(le.position);Re.y=0,Re.lengthSq()<.01&&Re.set(1,0,0),Re.normalize(),F.group.position.addScaledVector(Re,D(le)==="electricFence"?1.1:.65),D(le)==="electricFence"&&e.hit(F,2,le.position)}}function N(U){const W=Math.round(U.x),F=Math.round(U.y-1.2),re=Math.round(U.z),le=f(W,F,re);return le?D(le):null}function j(U){g+=U,g>.8&&(g=0,x()),I(U),E(U),k(U)}function te(U,W,F){const re=[[0,0,0,i.lever],[1,0,0,i.powerDust],[2,0,0,i.powerDust],[3,0,0,i.powerLamp],[0,0,2,i.tnt]];for(const[le,Me,Re,We]of re)We!==void 0&&n.placeBlock(U+le,W+Me,F+Re,We)}function K(U,W,F){const re=i.obsidian;for(let le=-1;le<=2;le++)for(let Me=0;Me<=4;Me++){const Re=le===-1||le===2||Me===0||Me===4;n.placeBlock(U+le,W+Me,F,Re?re:i.portalStone)}n.placeBlock(U,W+1,F,i.portalCore)}return{interactBlock:z,onBlockChanged:y,update:j,recomputePower:x,createStarterCircuit:te,createStarterPortal:K,igniteTNT:A,checkUnderPlayer:N,chestStorage:m,furnaceStates:d}}function Lg(n){typeof window.__julianSay=="function"&&window.__julianSay(n)}const Ig=document.querySelector("#app"),ft=new ju;ft.background=new Ye(8833535);ft.fog=new ll(8833535,50,145);const J=new xn(75,innerWidth/innerHeight,.1,500);J.position.set(0,14,18);J.rotation.order="YXZ";const an=new K0({antialias:!0});an.setPixelRatio(Math.min(devicePixelRatio,2));an.setSize(innerWidth,innerHeight);an.shadowMap.enabled=!0;an.outputColorSpace=rn;Ig.appendChild(an.domElement);ft.add(J);const Ya=new lf(16777215,4609384,1.45);ft.add(Ya);const Ri=new uf(16773323,2.1);Ri.position.set(45,65,28);Ri.castShadow=!0;ft.add(Ri);function xd(n){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),i=t.createRadialGradient(32,32,2,32,32,30);return i.addColorStop(0,n),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,64,64),new as(e)}function Ug(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d");let t=4242;for(let r=0;r<40;r++){t=t*1664525+1013904223>>>0;const o=t%128,s=(t>>>8)%128,a=10+(t>>>16)%26,l=6+(t>>>20)%14;e.fillStyle="rgba(255,255,255,.88)",e.fillRect(o,s,a,l)}const i=new as(n);return i.wrapS=i.wrapT=Wo,i.repeat.set(8,8),i.magFilter=sn,i}const $a=new mr({map:Ug(),transparent:!0,depthWrite:!1,side:Dn,opacity:.9}),cr=new St(new Mr(700,700),$a);cr.rotation.x=-Math.PI/2;cr.position.y=95;ft.add(cr);const es=new cl(new ss({map:xd("#fff6d0"),transparent:!0,depthWrite:!1}));es.scale.set(34,34,1);ft.add(es);const ts=new cl(new ss({map:xd("#dfe8f2"),transparent:!0,depthWrite:!1,opacity:.85}));ts.scale.set(22,22,1);ft.add(ts);const ye=Ag(ft,_r),Xe=Cg(ft,(n,e)=>ye.heightAt(n,e)),et=Pg(ft);let Ze="normal";const gt={day:1,elapsed:0,kills:0,baseLevel:0,basePos:null};let ci=0;const ut={fossils:0,dna:0,eggs:0,labPlaced:!1},Di={dinos:0,wolves:0,humans:0},Ve={hunger:20,maxHunger:20,exhaustion:0,days:1,elapsed:0,jumpVelocity:0,grounded:!1,started:!1,milestones:{wood:!1,stone:!1,iron:!1,night:!1}},pl=document.createElement("div");pl.id="hud";document.body.appendChild(pl);const ml=document.createElement("div");ml.id="crosshair";ml.textContent="+";document.body.appendChild(ml);const Nr=document.createElement("div");Nr.id="toast";document.body.appendChild(Nr);let Fc;const ve=n=>{Nr.textContent=n,Nr.classList.add("show"),clearTimeout(Fc),Fc=setTimeout(()=>Nr.classList.remove("show"),1700)};window.__julianSay=ve;const cs=document.createElement("div");cs.id="menu";cs.innerHTML='<div id="panel"><h1>JULIAN BLOCKS · V18</h1><p class="subtitle">JURASSIC WORLD & MARVEL ZOMBIES EDITION</p><div class="mode-choice"><button id="normalMode" class="mode-card"><b>🌎 MODO NORMAL</b><span>Construcción, templos ancestrales, redstone, TNT, portales y minería.</span></button><button id="survivalMode" class="mode-card survival"><b>⛏️ SUPERVIVENCIA</b><span>Supervivencia clásica: hambre, crafteo, salto, horno, noches peligrosas.</span></button><button id="dinoMode" class="mode-card dino"><b>🦖 JURASSIC WORLD REBORN</b><span>Puerta de Jurassic Park, recinto T-Rex, Centro de Visitantes, Espinosaurio, rifle tranquilizante y clonación.</span></button><button id="marvelMode" class="mode-card marvel"><b>🧟 MARVEL ZOMBIES · ADD-ON</b><span>Torre de los Vengadores, Sanctum Sanctorum, Mjolnir, Zombie Thor, Venom y Bruja Escarlata.</span></button></div><p id="modeStatus">Seleccionado: Modo normal</p><div class="controls-grid"><span><b>WASD</b> mover</span><span><b>Espacio / Shift</b> subir / bajar (creativo)</span><span><b>Espacio</b> saltar (Supervivencia)</span><span><b>Clic Izq</b> golpear / romper / TNT</span><span><b>Clic Der</b> usar / colocar / interactuar</span><span><b>E</b> inventario / mochila</span><span><b>C</b> crafteo</span><span><b>M</b> criaturas</span><span><b>Tab</b> mapa</span><span><b>K / L</b> guardar / cargar</span><span><b>T</b> clima</span></div><div class="menu-buttons"><button id="playBtn">JUGAR</button><button id="saveBtn">GUARDAR</button><button id="loadBtn">CARGAR</button><button id="farBtn">TIERRAS LEJANAS</button></div></div>';document.body.appendChild(cs);const gl=document.createElement("div");gl.id="hotbar";document.body.appendChild(gl);const Ut=document.createElement("div");Ut.id="modal";Ut.className="hidden";document.body.appendChild(Ut);const Kr=document.createElement("canvas");Kr.id="minimap";Kr.width=180;Kr.height=180;document.body.appendChild(Kr);let pn=!1,Xr=0,Ci=0,Ni=0,Ft="none";const ns=document.createElement("div");ns.id="dmgFlash";document.body.appendChild(ns);const Ng=new V(0,14,18);let Pt=20,Mn=20,Li=0,Fr=0,$s=0;window.__julianCameraPos=J.position;function ds(n){if(!(Pt<=0)){if(ci>0){ve("🛡️ ¡Escudo absorbió el daño!");return}Pt=Math.max(0,Pt-n),Li=4,Fr=0,ns.classList.add("show"),setTimeout(()=>ns.classList.remove("show"),160),et.sound("hit"),Pt<=0&&Fg()}}function Fg(){ye.getDimension()!=="overworld"&&(ye.setDimension("overworld"),Xe.setHeightProvider((n,e)=>ye.heightAt(n,e)),ft.background.set(8833535),ft.fog.color.set(8833535)),J.position.copy(Ng),Pt=Mn,Li=0,ye.updateChunks(J.position),ve("Te derrotaron · reapareces en el punto de inicio")}function Og(n){Li=Math.max(0,Li-n);for(const t of Xe.mobs){const i=st[t.type];t.attackTimer=(t.attackTimer??0)-n,(i.kind==="hostile"||i.dinosaur&&i.carnivore)&&!t.tamed&&!t.friendOfPlayer&&!t.captive&&t.group.position.distanceTo(J.position)<1.95&&t.attackTimer<=0&&(ds(i.tall?4:2),t.attackTimer=1.1)}(Ze!=="survival"||Ve.hunger>=17)&&Li<=0&&Pt<Mn&&(Fr+=n,Fr>3&&(Fr=0,Pt=Math.min(Mn,Pt+1),Ze==="survival"&&(Ve.hunger=Math.max(0,Ve.hunger-.35))))}function kg(){const n=Math.round(Pt/2),e="❤".repeat(n),t="🖤".repeat(10-n);return`<span class="hearts">${e}${t}</span>`}function Bg(){if(Ze!=="survival")return"";const n=Math.round(Ve.hunger/2),e="🍗".repeat(n),t="🦴".repeat(10-n);return` · <span title="Hambre">${e}${t}</span>`}function zg(){const n=At[Ni];if(n){if(et.sound("eat"),n.name==="Manzana dorada"){Pt=Mn,Ze==="survival"&&(Ve.hunger=Ve.maxHunger),ci=Math.max(ci,35),Rt(1),ve("🍏 ¡Manzana dorada! Vida al máximo y escudo activado");return}if(Ze==="survival"){const e=/Carne|Pan/.test(n.name)?7:/Manzana|Papa|Melón/.test(n.name)?5:4;Ve.hunger=Math.min(Ve.maxHunger,Ve.hunger+e),Pt=Math.min(Mn,Pt+1),Rt(1),ve(`Comiste ${n.name} · hambre +${e}`);return}Pt=Math.min(Mn,Pt+4),Li=Math.min(Li,1),Fr=0,Rt(1),ve(`Comiste ${n.name} · +4 vida`)}}const Vo=[];function Md(n,e){const t=new St(hl(e),_r[e]??_r[0]);t.scale.setScalar(.28),t.position.copy(n),t.position.y+=.3,t.rotation.set(Math.random(),Math.random(),Math.random()),ft.add(t),Vo.push({mesh:t,blockIndex:e,startY:t.position.y,time:Math.random()*Math.PI*2})}function Hg(n){for(let e=Vo.length-1;e>=0;e--){const t=Vo[e];t.time+=n*3,t.mesh.rotation.y+=n*2,t.mesh.position.y=t.startY+Math.sin(t.time)*.08,J.position.distanceTo(t.mesh.position)<1.85&&bt({kind:"block",index:t.blockIndex},1)&&(et.sound("pickup"),ft.remove(t.mesh),Vo.splice(e,1))}}const en=Dg(ye,Xe,Bt,L,_r,Lg,et,Md,ds);function Vg(n){return n?n.object?.userData?.mob??Xe.mobs.find(e=>e.group===n.object||e.group.children.includes(n.object))??null:null}function Gg(n){if(Ft!=="item")return!1;const e=At[Ni];if(!e)return!1;if(e.category==="Comida")return zg(),!0;const t=e.name;if(t==="Brújula"){const i=-J.position.x,r=-J.position.z,o=Math.abs(i)>Math.abs(r)?i>0?"oeste":"este":r>0?"sur":"norte";return ve(`La brújula apunta al inicio: ${o} · distancia ${Math.round(Math.hypot(i,r))}`),!0}if(t==="Reloj")return ve(`Hora del mundo: ${String(Math.floor(ir*24)).padStart(2,"0")}:00`),!0;if(t==="Mapa vacío")return yd(),!0;if(t==="Perla extraña"){const i=new V;return J.getWorldDirection(i),J.position.addScaledVector(i.normalize(),16),Rt(1),ve("Teletransporte corto"),!0}if(t==="Polvo brillante")return et.setWeather("clear"),Pt=Math.min(Mn,Pt+2),Rt(1),ve("El cielo se despejó y recuperaste energía"),!0;if(t==="Pólvora"){const i=J.position.clone();let r=0;for(const o of[...Xe.mobs])o.group.position.distanceTo(i)<5&&(Xe.hit(o,7,i),r++);return Rt(1),ve(`Explosión de pólvora · alcanzó ${r} criaturas`),!0}if(t==="Bola de gel")return J.position.y+=6,Rt(1),et.bounceEffect(J.position),ve("¡Rebote de gel!"),!0;if(t==="Libro")return Fn(`${On("Guía de Jurassic World & Marvel Zombies")}<p><b>Nuevas funciones añadidas:</b></p><ul><li><b>Rifle tranquilizante:</b> Duerme y domestica dinosaurios carnívoros.</li><li><b>Rastreador jurásico:</b> Localiza dinosaurios en 90 bloques.</li><li><b>Mjolnir:</b> Invoca tormentas eléctricas contra los zombis.</li><li><b>Arco de Hawkeye:</b> Dispara flechas con detonación TNT.</li><li><b>Guantelete Repulsor:</b> Rayos de choque propulsores.</li><li><b>Estructuras:</b> Puerta de Jurassic Park, Recinto T-Rex, Torre Vengadores y Sanctum Sanctorum.</li></ul>`),kn(),!0;if(e.category==="Paleontología")return Ze!=="dino"?(ve("Este objeto se usa en Modo Dinosaurios"),!0):t==="Fósil sin limpiar"?(ut.fossils++,Rt(1),ve(`Añadiste un fósil al laboratorio · ${ut.fossils}`),!0):t==="ADN de dinosaurio"?(ut.dna=Math.min(100,ut.dna+50),Rt(1),ve(`ADN: ${ut.dna}%`),!0):t==="Jeringa de ADN puro"?(ut.dna=100,ut.eggs++,Rt(1),ve("💉 ¡Jeringa de ADN 100%! Huevo listo para eclosionar"),!0):(ve("Componente paleontológico: úsalo con el Analizador o la Incubadora"),!0);if(e.marvelItem||e.category==="Marvel Zombies"){if(Ze!=="marvel")return ve("Este objeto solo funciona en Marvel Zombies"),!0;const i=Vg(n);if(t==="Vendaje")return Pt=Math.min(Mn,Pt+6),Rt(1),ve("Vendaje usado · +6 vida"),!0;if(t==="Botiquín")return Pt=Mn,Rt(1),ve("Vida restaurada"),!0;if(t==="Suero de Súper Soldado")return Pt=Mn,ci=45,Rt(1),et.enchantEffect(J.position),ve("⭐ ¡Suero Súper Soldado! Fuerza y velocidad mejoradas"),!0;if(t==="Simbionte Negro puro")return Pt=Mn,ci=50,Rt(1),et.symbioteBurstEffect(J.position),ve("🖤 ¡Simbionte fusionado! Fuerza sobrehumana, regeneración y armadura activa"),!0;if(t==="Lanzatelarañas Simbiótico"){if(i){et.symbioteWebEffect(J.position,i.group.position),i.webbed=8,Xe.hit(i,14,J.position);const r=J.position.clone().sub(i.group.position).setY(0).normalize();i.group.position.addScaledVector(r,3.5),Rt(1),ve("🕸️🖤 ¡Telaraña de simbionte disparada! Objetivo inmovilizado y atraído")}else{const r=new V;J.getWorldDirection(r);const o=J.position.clone().addScaledVector(r,20);et.symbioteWebEffect(J.position,o),J.position.addScaledVector(r.normalize(),15),Rt(1),ve("🕸️ ¡Balanceo arácnido con telaraña simbiótica!")}return!0}if(t==="Punto de refugio")return!n||!ye.blocks.includes(n.object)?(ve("Apunta al suelo para colocar el refugio"),!0):(gt.basePos=n.object.position.clone(),gt.baseLevel=Math.max(1,gt.baseLevel),Rt(1),ve("Refugio establecido · mejora derrotando zombis"),!0);if(t==="Núcleo repulsor")return i?(Xe.hit(i,10,J.position),i.group.position.addScaledVector(i.group.position.clone().sub(J.position).setY(0).normalize(),3),ve("Pulso repulsor")):ve("Apunta a una criatura"),!0;if(t==="Escudo del capitán")return ci=15,ve("Escudo activo durante 15 s"),!0;if(t==="Lanzatelarañas")return i?(i.webbed=6,ve("Objetivo inmovilizado")):ve("Apunta a una criatura"),!0;if(t==="Puño gamma"){let r=0;for(const o of[...Xe.mobs])o.group.position.distanceTo(J.position)<6&&(Xe.hit(o,14,J.position),r++);return ve(`Golpe gamma · ${r} objetivos`),!0}if(t==="Sello místico"){const r=new V;return J.getWorldDirection(r),J.position.addScaledVector(r.normalize(),24),ve("Portal corto abierto"),!0}if(t==="Guantelete del infinito"){let r=0;for(const o of[...Xe.mobs])st[o.type].marvelZombie&&o.group.position.distanceTo(J.position)<28&&Math.random()<.5&&(Xe.removeMob(o),r++);return ve(`Pulso cósmico · desaparecieron ${r} zombis`),!0}}return ve(`${t}: material de crafteo · pulsa C para ver recetas`),!0}const Wt=Array(9).fill(null);let Zt=0;function mn(){pn=!1,Ut.className="hidden",Ut.innerHTML=""}function Fn(n,e=""){pn=!0,document.pointerLockElement&&document.exitPointerLock(),Ut.innerHTML=`<div class="big-panel ${e}">${n}</div>`,Ut.className=""}function Wg(n,e){return!!n&&!!e&&n.kind===e.kind&&n.index===e.index}function Fi(){const n=Wt[Zt];if(!n){Ft="none",ja(),Za();return}Ft=n.kind,n.kind==="block"?Xr=n.index:n.kind==="tool"?Ci=n.index:(n.kind==="item"||n.kind==="egg")&&(Ni=n.index),ja(),Za()}function bt(n,e=1){if(n.kind!=="tool")for(let i=0;i<Wt.length;i++){const r=Wt[i];if(r&&Wg(r,n)&&r.count<64)return r.count=Math.min(64,r.count+e),Zt=i,Fi(),!0}const t=Wt.findIndex(i=>!i);return t>=0?(Wt[t]={...n,count:n.kind==="tool"?1:e},Zt=t,Fi(),!0):(ve("Barra llena"),!1)}function Or(n){return Wt.reduce((e,t)=>t&&(n.kind==="block"&&t.kind==="block"&&t.index===n.index||n.kind==="tool"&&t.kind==="tool"&&t.index===n.index||n.kind==="item"&&t.kind==="item"&&t.index===n.index)?e+t.count:e,0)}function kr(n,e=1){let t=e;for(let i=0;i<Wt.length;i++){const r=Wt[i];if(!r)continue;if(n.kind==="block"&&r.kind==="block"&&r.index===n.index||n.kind==="tool"&&r.kind==="tool"&&r.index===n.index||n.kind==="item"&&r.kind==="item"&&r.index===n.index){const s=Math.min(r.count,t);if(r.count-=s,t-=s,r.count<=0&&(Wt[i]=null),t<=0)break}}return Fi(),t===0}function Rt(n=1){const e=Wt[Zt];e&&(e.count-=n,e.count<=0&&(Wt[Zt]=null),Fi())}function ja(){gl.innerHTML=Wt.map((n,e)=>{const t=e===Zt?"selected":"";if(!n)return`<div class="slot ${t}"><small>${e+1}</small></div>`;if(n.kind==="block"){const r=Bt[n.index];return`<div class="slot ${t}"><span class="swatch" style="background:${r.sw}"></span><b>■</b><small>${r.name}</small><span class="slot-count">${n.count}</span></div>`}if(n.kind==="tool"){const r=Lt[n.index];return`<div class="slot ${t}"><span class="tool-icon">${r.icon}</span><b></b><small>${r.name}</small></div>`}const i=At[n.index];return`<div class="slot ${t}"><span class="tool-icon">${i.icon}</span><b></b><small>${i.name}</small><span class="slot-count">${n.count}</span></div>`}).join("")}const kt=new rr;J.add(kt);kt.position.set(.58,-.48,-1.05);kt.rotation.set(-.18,-.28,-.12);let yi=0;function Xg(){yi=1}function qg(){for(;kt.children.length;)kt.children.pop().geometry?.dispose?.()}function Za(){if(qg(),Ft!=="none")if(Ft==="block"){const n=new St(hl(Xr),_r[Xr]??_r[0]);n.scale.setScalar(.38),n.rotation.set(.25,.45,.08),kt.add(n)}else if(Ft==="tool"){const n=Lt[Ci];if(n?.name.includes("Simbionte")){const e=new Tn({color:1184278,roughness:.5,metalness:.2}),t=new Tn({color:16777215,roughness:.4}),i=new Tn({color:1776418,emissive:5575048,emissiveIntensity:.3}),r=new St(new It(.2,.72,.2),e);r.rotation.set(.28,-.32,-.45),r.position.set(-.08,.05,0),kt.add(r);const o=new St(new It(.14,.18,.04),t);o.position.set(-.12,.18,.11),o.rotation.set(.28,-.32,-.45),kt.add(o);const s=new St(new It(.06,.06,.06),new Tn({color:14544639,emissive:11193599,emissiveIntensity:.8}));s.position.set(-.02,.38,-.08),kt.add(s);for(let a=0;a<4;a++){const l=new St(new It(.05,.38,.05),i);l.position.set((a%2?-.22:.12)+a*.03,.12+a*.09,a>1?.12:-.12),l.rotation.set((a-1.5)*.35,0,a%2?.65:-.65),kt.add(l)}}else{const e=new St(new It(.09,.56,.09),new Tn({color:9132597}));e.rotation.z=-.42,e.position.y=-.04,kt.add(e);const t=n?.power??1,i=n?.name.includes("Mjolnir")?5623039:n?.name.includes("encantado")?12272895:n?.name.includes("fuego")?16733457:t>=5?5232848:t>=4?14140589:t>=3?8620429:10514242,r=new St(new It(n?.name.includes("Mjolnir")?.48:.42,.14,.14),new Tn({color:i,emissive:n?.name.includes("Mjolnir")?2263244:0}));r.position.set(-.11,.2,0),r.rotation.z=-.42,kt.add(r)}}else if(Ft==="egg"){const n=At[Ni],e=st[n.mobType],t=new Tn({color:n.eggColor??e?.head??16777215,roughness:.8}),i=new St(new Wr(.21,14,10),t);i.scale.set(1,.78,1),i.rotation.z=.25,kt.add(i)}else{const n=At[Ni],e=n?.name.includes("Simbionte"),t=new Tn({color:e?1381659:n.name==="Manzana dorada"?16766720:n.category==="Comida"?14121781:12042956,roughness:.75,emissive:e?4456550:0}),i=new St(n.category==="Comida"?new Wr(.18,12,8):new It(.24,.24,.24),t);i.rotation.set(.25,.35,.1),kt.add(i)}}Za();ja();function On(n){return`<div class="tabs-title"><h2>${n}</h2><button id="closeModal">✕ CERRAR</button></div>`}function kn(){const n=Ut.querySelector("#closeModal");n&&(n.onclick=mn)}function Sd(n){return n.ins.every(e=>e.kind==="block"?Or({kind:"block",index:L[e.id]})>=e.count:e.kind==="tool"?Or({kind:"tool",index:Lt.findIndex(t=>t.name===e.name)})>=e.count:Or({kind:"item",index:At.findIndex(t=>t.name===e.name)})>=e.count)}function Yg(n){if(!Sd(n)){ve("Faltan materiales");return}n.ins.forEach(e=>{e.kind==="block"?kr({kind:"block",index:L[e.id]},e.count):e.kind==="tool"?kr({kind:"tool",index:Lt.findIndex(t=>t.name===e.name)},e.count):kr({kind:"item",index:At.findIndex(t=>t.name===e.name)},e.count)}),n.out.kind==="block"?bt({kind:"block",index:L[n.out.id]},n.out.count??1):n.out.kind==="tool"?bt({kind:"tool",index:Lt.findIndex(e=>e.name===n.out.name)},n.out.count??1):bt({kind:"item",index:At.findIndex(e=>e.name===n.out.name)},n.out.count??1),et.sound("pickup"),ve(`¡Crafteaste ${n.name}!`)}function bd(){Fn(`${On("Mesa de Crafteo")}<div id="craftGrid" class="craft-grid"></div>`,"craft"),kn();const n=Ut.querySelector("#craftGrid");function e(){n.innerHTML=Dc.map((t,i)=>{const r=Sd(t),o=t.ins.map(s=>`${s.count}× ${s.kind==="block"?Bt[L[s.id]].name:s.name}`).join(" + ");return`<button class="recipe" data-craft="${i}" ${r?"":"disabled"}><b>${t.name}</b><span>${o}</span><span class="${r?"craft-ready":"craft-missing"}">${r?"Listo para craftear":"Faltan materiales"}</span></button>`}).join(""),n.querySelectorAll("[data-craft]").forEach(t=>t.onclick=()=>{Yg(Dc[+t.dataset.craft]),e()})}e()}function $g(){const n=[{name:"Lingote de hierro",inKind:"block",inId:"iron",outKind:"item",outName:"Lingote de hierro"},{name:"Lingote de oro",inKind:"block",inId:"gold",outKind:"item",outName:"Lingote de oro"},{name:"Cobre fundido",inKind:"block",inId:"copper",outKind:"item",outName:"Cobre"},{name:"Vidrio",inKind:"block",inId:"sand",outKind:"block",outId:"glass"},{name:"Piedra lisa",inKind:"block",inId:"cobble",outKind:"block",outId:"stone"},{name:"Carne cocida",inKind:"item",inName:"Carne cruda",outKind:"item",outName:"Carne cocida"},{name:"Ladrillos",inKind:"block",inId:"clay",outKind:"block",outId:"brick"}];Fn(`${On("🔥 Horno de Fundición")}<p>Funde minerales, cocina comida o prepara materiales resistentes.</p><div class="craft-grid" id="furnaceGrid"></div>`,"craft"),kn();const e=Ut.querySelector("#furnaceGrid");function t(){e.innerHTML=n.map((i,r)=>{const o=i.inKind==="block"?Or({kind:"block",index:L[i.inId]})>0:Or({kind:"item",index:At.findIndex(a=>a.name===i.inName)})>0,s=i.inKind==="block"?Bt[L[i.inId]]?.name:i.inName;return`<button class="recipe" data-smelt="${r}" ${o?"":"disabled"}><b>${i.name}</b><span>Requiere: 1× ${s}</span><span class="${o?"craft-ready":"craft-missing"}">${o?"Listo para fundir":"Falta material"}</span></button>`}).join(""),e.querySelectorAll("[data-smelt]").forEach(i=>{i.onclick=()=>{const r=n[+i.dataset.smelt];r.inKind==="block"?kr({kind:"block",index:L[r.inId]},1):kr({kind:"item",index:At.findIndex(o=>o.name===r.inName)},1),r.outKind==="block"?bt({kind:"block",index:L[r.outId]},1):bt({kind:"item",index:At.findIndex(o=>o.name===r.outName)},1),et.sound("pickup"),ve(`🔥 Fundiste: ${r.name}`),t()}})}t()}function jg(){const n=Wt[Zt],t=n&&n.kind==="tool"?Lt[n.index]?.name:"Mano";Fn(`${On("✨ Mesa de Encantamientos")}<p>Objeto en mano: <b>${t}</b></p><div class="craft-grid"><button class="recipe" id="encSharp"><b>🔥 Filo Ígneo V</b><span>Añade daño de fuego masivo (+4 daño)</span><span class="craft-ready">Encantar</span></button><button class="recipe" id="encEff"><b>✨ Pico Encantado</b><span>Otorga un Pico Encantado de alta velocidad</span><span class="craft-ready">Forjar</span></button><button class="recipe" id="encArmor"><b>💎 Peto de Diamante</b><span>Armadura divina de máxima protección</span><span class="craft-ready">Obtener</span></button></div>`,"craft"),kn(),Ut.querySelector("#encSharp").onclick=()=>{bt({kind:"tool",index:Lt.findIndex(i=>i.name==="Espada de fuego")},1),et.enchantEffect(J.position),ve("✨ ¡Espada de fuego imbuida con magia arcana!"),mn()},Ut.querySelector("#encEff").onclick=()=>{bt({kind:"tool",index:Lt.findIndex(i=>i.name==="Pico encantado")},1),et.enchantEffect(J.position),ve("✨ ¡Pico encantado forjado con poder ancestral!"),mn()},Ut.querySelector("#encArmor").onclick=()=>{bt({kind:"tool",index:Lt.findIndex(i=>i.name==="Peto de diamante")},1),et.enchantEffect(J.position),ve("💎 ¡Peto de diamante encantado obtenido!"),mn()}}const js=new Map;function Zg(n){et.sound("chest");const e=ye.keyFor(n.position.x,n.position.y,n.position.z);if(!js.has(e)){let o=[];Ze==="marvel"?o=[{kind:"item",name:"Vendaje",count:4},{kind:"item",name:"Suero de Súper Soldado",count:1},{kind:"tool",name:"Martillo Mjolnir",count:1},{kind:"item",name:"Suero restaurador",count:2},{kind:"block",id:"reinforcedWall",count:8}]:Ze==="dino"?o=[{kind:"item",name:"Fósil sin limpiar",count:4},{kind:"item",name:"Jeringa de ADN puro",count:1},{kind:"tool",name:"Rifle tranquilizante",count:1},{kind:"item",name:"Carne cocida",count:6},{kind:"block",id:"fossilBrick",count:8}]:Ze==="survival"?o=[{kind:"item",name:"Pan",count:8},{kind:"item",name:"Carne cocida",count:6},{kind:"item",name:"Manzana dorada",count:2},{kind:"item",name:"Lingote de hierro",count:6},{kind:"tool",name:"Pico de hierro",count:1}]:o=[{kind:"item",name:"Diamante",count:4},{kind:"item",name:"Esmeralda",count:6},{kind:"item",name:"Lingote de oro",count:8},{kind:"item",name:"Manzana dorada",count:2},{kind:"item",name:"Perla extraña",count:4}],js.set(e,o)}const t=js.get(e);Fn(`${On("📦 Cofre de Almacenamiento")}<p>Haz clic en cualquier objeto del cofre para guardarlo en tu barra.</p><div class="inventory-grid" id="chestGrid"></div><div class="menu-buttons" style="margin-top:14px"><button id="depositBtn">📥 Guardar objeto que tengo en la mano</button></div>`,"craft"),kn();const i=Ut.querySelector("#chestGrid");function r(){if(!t.length){i.innerHTML='<p style="grid-column:1/-1">El cofre está vacío.</p>';return}i.innerHTML=t.map((o,s)=>{const a=o.kind==="block"?Bt[L[o.id]]?.name:o.name;return`<button class="inv-item" data-take="${s}"><span class="tool-icon">📦</span><b>${a}</b><small>×${o.count??1}</small></button>`}).join(""),i.querySelectorAll("[data-take]").forEach(o=>{o.onclick=()=>{const s=+o.dataset.take,a=t[s];a.kind==="block"?bt({kind:"block",index:L[a.id]},a.count??1):a.kind==="tool"?bt({kind:"tool",index:Lt.findIndex(l=>l.name===a.name)},1):bt({kind:"item",index:At.findIndex(l=>l.name===a.name)},a.count??1),t.splice(s,1),et.sound("pickup"),r()}})}r(),Ut.querySelector("#depositBtn").onclick=()=>{const o=Wt[Zt];if(!o){ve("No tienes ningún objeto en la mano");return}o.kind==="block"?t.push({kind:"block",id:Bt[o.index].id,count:o.count}):o.kind==="tool"?t.push({kind:"tool",name:Lt[o.index].name,count:1}):t.push({kind:"item",name:At[o.index].name,count:o.count}),Wt[Zt]=null,Fi(),et.sound("pickup"),ve("Objeto depositado en el cofre"),r()}}function Kg(){Fn(`${On("Inventario")}<div class="inventory-grid">${At.map((n,e)=>`<button class="inv-item" data-inv="${e}"><span class="tool-icon">${n.icon}</span><b>${n.name}</b></button>`).join("")}</div>`),kn(),Ut.querySelectorAll("[data-inv]").forEach(n=>n.onclick=()=>{const e=At[+n.dataset.inv];e.kind==="block"?bt({kind:"block",index:e.blockIndex},64):e.kind==="tool"?bt({kind:"tool",index:e.toolIndex},1):bt({kind:"item",index:+n.dataset.inv},16),et.sound("pickup"),ve(`Obtuviste ${e.name}`)})}function Jg(){const n=st.map((e,t)=>({m:e,i:t})).filter(e=>e.m.marvelZombie?Ze==="marvel":e.m.dinosaur?Ze==="dino":!0);Fn(`${On("Criaturas")}<p>Haz clic para invocar una criatura delante de ti.</p><div class="mob-grid">${n.map(({m:e,i:t})=>`<button class="mob-card" data-m="${t}"><span class="mob-face" style="background:#${e.head.toString(16).padStart(6,"0")}"></span><b>${e.name}</b><small>${e.kind}</small></button>`).join("")}</div>`),kn(),Ut.querySelectorAll("[data-m]").forEach(e=>e.onclick=()=>{const t=new V;J.getWorldDirection(t),t.y=0,t.normalize();const i=J.position.clone().addScaledVector(t,5);Xe.makeMob(+e.dataset.m,i.x,ye.heightAt(i.x,i.z)+1,i.z),mn(),ve("Criatura invocada")})}function yd(){Fn(`${On("Mapa del Mundo")}<canvas id="bigMap" width="640" height="480"></canvas><p class="small">El centro es tu posición. Amarillo: templos y aldeas · Rojo: hostiles · Cyan: estructuras.</p>`,"map-panel"),kn(),Ed(Ut.querySelector("#bigMap"),110)}function is(n){if(Ze!=="dino"){ve("Disponible en Modo Dinosaurios");return}n==="analyzer"?(Fn(`${On("Laboratorio de ADN")}<p>Fósiles: <b>${ut.fossils}</b> · ADN: <b>${ut.dna}%</b></p><div class="menu-buttons"><button id="processFossil">PROCESAR FÓSIL (+25% ADN)</button></div>`,"craft"),kn(),Ut.querySelector("#processFossil").onclick=()=>{if(ut.fossils<1){ve("Necesitas un fósil");return}ut.fossils--,ut.dna=Math.min(100,ut.dna+25),et.sound("pickup"),mn(),is("analyzer")}):(Fn(`${On("Incubadora Jurásica")}<p>ADN: <b>${ut.dna}%</b> · Huevos: <b>${ut.eggs}</b></p><div class="menu-buttons"><button id="makeEgg">CREAR HUEVO (100% ADN)</button><button id="hatchEgg">ECLOSIONAR HUEVO</button></div>`,"craft"),kn(),Ut.querySelector("#makeEgg").onclick=()=>{if(ut.dna<100){ve("Necesitas 100% de ADN");return}ut.dna-=100,ut.eggs++,et.sound("pickup"),mn(),is("incubator")},Ut.querySelector("#hatchEgg").onclick=()=>{if(ut.eggs<1){ve("No hay huevos");return}ut.eggs--;const e=st.map((o,s)=>o.dinosaur?s:-1).filter(o=>o>=0),t=e[Math.floor(Math.random()*e.length)],i=new V;J.getWorldDirection(i),i.y=0,i.normalize();const r=J.position.clone().addScaledVector(i,6);Xe.makeMob(t,r.x,ye.heightAt(r.x,r.z)+1,r.z),et.sound("pickup"),mn(),ve("¡Ha nacido un "+st[t].name+"!")})}function Qg(){if(ut.labPlaced)return;ut.labPlaced=!0;const n=8,e=8,t=ye.heightAt(n,e)+1;ye.placeBlock(n,t,e,L.dnaAnalyzer),ye.placeBlock(n+2,t,e,L.incubator),ye.placeBlock(n+4,t,e,L.dinoCrate);const i=L.fossilRock;for(let s=0;s<20;s++){const a=Math.random()*Math.PI*2,l=7+Math.random()*26,c=Math.round(Math.cos(a)*l),u=Math.round(Math.sin(a)*l),m=ye.heightAt(c,u)+1;ye.placeBlock(c,m,u,i)}const r=st.map((s,a)=>s.dinosaur?a:-1).filter(s=>s>=0);for(let s=0;s<10;s++){const a=Math.random()*Math.PI*2,l=16+Math.random()*30,c=Math.round(Math.cos(a)*l),u=Math.round(Math.sin(a)*l);Xe.makeMob(r[s%r.length],c,ye.heightAt(c,u)+1,u)}const o=Lt.findIndex(s=>s.name==="Rifle tranquilizante");o>=0&&bt({kind:"tool",index:o},1),ve("🦖 ¡Jurassic World Reborn activado! Usa tu rifle tranquilizante")}function e_(){const t=ye.heightAt(8,8)+1;for(let u=-3;u<=3;u++)for(let m=-3;m<=3;m++)ye.placeBlock(8+u,t-1,8+m,L.cobble);for(let u=-3;u<=3;u++)for(let m=0;m<3;m++)for(const d of[-3,3])ye.placeBlock(8+u,t+m,8+d,L.blackstone);for(let u=-2;u<=2;u++)for(let m=0;m<3;m++)for(const d of[-3,3])ye.placeBlock(8+d,t+m,8+u,L.blackstone);const i=At.findIndex(u=>u.name==="Vendaje"),r=At.findIndex(u=>u.name==="Punto de refugio"),o=Lt.findIndex(u=>u.name==="Martillo Mjolnir"),s=Lt.findIndex(u=>u.name==="Traje Simbionte Spider-Man"),a=At.findIndex(u=>u.name==="Lanzatelarañas Simbiótico"),l=At.findIndex(u=>u.name==="Simbionte Negro puro");s>=0&&bt({kind:"tool",index:s},1),a>=0&&bt({kind:"item",index:a},8),l>=0&&bt({kind:"item",index:l},3),o>=0&&bt({kind:"tool",index:o},1),i>=0&&bt({kind:"item",index:i},3),r>=0&&bt({kind:"item",index:r},1);const c=st.map((u,m)=>u.marvelZombie?m:-1).filter(u=>u>=0);for(let u=0;u<8;u++){const m=Math.random()*Math.PI*2,d=16+Math.random()*26,g=Math.round(Math.cos(m)*d),p=Math.round(Math.sin(m)*d);Xe.makeMob(c[u%c.length],g,ye.heightAt(g,p)+1,p)}ve("🧟 ¡Marvel Zombies + Simbionte Spider-Man! Usa tus poderes arácnidos")}function t_(){if(Ve.started)J.position.y>ye.heightAt(J.position.x,J.position.z)+12&&(J.position.y=ye.heightAt(J.position.x,J.position.z)+2.4);else{Ve.started=!0,Ve.hunger=Ve.maxHunger,Wt.fill(null);const n=Lt.findIndex(i=>i.name==="Pico de madera");n>=0&&bt({kind:"tool",index:n},1);const e=At.findIndex(i=>i.name==="Pan");e>=0&&bt({kind:"item",index:e},4);const t=L.lamp;t!==void 0&&bt({kind:"block",index:t},6),J.position.y=ye.heightAt(J.position.x,J.position.z)+2.4}Ve.jumpVelocity=0,ve("⛏️ Supervivencia Minecraft: mina, craftea, come y sobrevive")}function Jr(n){const e=ye.getGameMode()!==n;Ze=n,ye.setGameMode(n);const t=n==="dino"?"Jurassic World Reborn":n==="marvel"?"Marvel Zombies · Add-on":n==="survival"?"Modo Supervivencia":"Modo normal";if(document.querySelector("#modeStatus").textContent="Seleccionado: "+t,document.querySelector("#normalMode").classList.toggle("active",n==="normal"),document.querySelector("#survivalMode").classList.toggle("active",n==="survival"),document.querySelector("#dinoMode").classList.toggle("active",n==="dino"),document.querySelector("#marvelMode").classList.toggle("active",n==="marvel"),e){Xe.clearAll(),Go.clear(),Ja.clear(),ut.labPlaced=!1,ye.clear(),ye.updateChunks(J.position),en.createStarterCircuit(3,ye.heightAt(3,3)+1,3),en.createStarterPortal(-7,ye.heightAt(-7,6)+1,6);for(let i=0;i<10;i++)Xe.ensurePopulation(J.position,n,1)}n==="dino"&&Qg(),n==="marvel"&&e_(),n==="survival"&&t_()}function Ed(n,e=48){const t=n.getContext("2d"),i=n.width,r=n.height;t.clearRect(0,0,i,r);const o=e*2/60;for(let s=0;s<60;s++)for(let a=0;a<60;a++){const l=J.position.x-e+s*o,c=J.position.z-e+a*o,u=Qo(l,c);t.fillStyle=u.color,t.fillRect(s*i/60,a*r/60,i/60+1,r/60+1)}for(const s of Xe.mobs){const a=(s.group.position.x-J.position.x)/e,l=(s.group.position.z-J.position.z)/e;if(Math.abs(a)>1||Math.abs(l)>1)continue;const c=st[s.type];t.fillStyle=c.kind==="hostile"||c.marvelZombie?"#ff4b4b":c.dinosaur?"#44dd88":c.kind==="villager"?"#ffd45a":"#ffffff",t.fillRect(i/2+a*i/2-2,r/2+l*r/2-2,4,4)}for(const s of ye.structures){const a=(s.x-J.position.x)/e,l=(s.z-J.position.z)/e;Math.abs(a)>1||Math.abs(l)>1||(t.fillStyle=s.temple?"#ffdd44":s.type.includes("Jurassic")||s.type.includes("T-Rex")?"#33dd66":s.type.includes("Torre")||s.type.includes("Sanctum")?"#ee4444":"#59fff1",t.fillRect(i/2+a*i/2-3,r/2+l*r/2-3,6,6))}t.fillStyle="#151515",t.beginPath(),t.arc(i/2,r/2,5,0,Math.PI*2),t.fill(),t.strokeStyle="#fff",t.lineWidth=2,t.stroke()}const Td="julian-blocks-v18";function _l(){const n={v:18,mode:Ze,survival:{...Ve,milestones:{...Ve.milestones}},paleo:{...ut},rescueStats:{...Di},marvel:{day:gt.day,elapsed:gt.elapsed,kills:gt.kills,baseLevel:gt.baseLevel,basePos:gt.basePos?[gt.basePos.x,gt.basePos.y,gt.basePos.z]:null},p:[J.position.x,J.position.y,J.position.z,qr,Pi],dimension:ye.getDimension(),edits:ye.exportEdits(),mobs:Xe.mobs.slice(0,80).map(e=>[e.type,e.group.position.x,e.group.position.y,e.group.position.z,e.hp,e.tamed?1:0,e.friendOfPlayer?1:0,e.captive?1:0,Number.isFinite(e.fixedY)?e.fixedY:null,e.bond??0,e.rescued?1:0])};localStorage.setItem(Td,JSON.stringify(n)),ve("Mundo guardado")}function vl(){const n=localStorage.getItem(Td);if(!n)return!1;try{const e=JSON.parse(n);Ze=e.mode??"normal",ye.setGameMode(Ze),e.survival&&(Object.assign(Ve,e.survival),e.survival.milestones&&Object.assign(Ve.milestones,e.survival.milestones)),e.paleo&&Object.assign(ut,e.paleo),e.rescueStats&&Object.assign(Di,e.rescueStats),e.marvel&&(Object.assign(gt,e.marvel),Array.isArray(e.marvel.basePos)&&(gt.basePos=new V(...e.marvel.basePos))),ye.importEdits(e.edits??{}),ye.clear(),ye.setDimension(e.dimension??"overworld"),Xe.setHeightProvider((t,i)=>ye.heightAt(t,i));for(const t of[...Xe.mobs])Xe.removeMob(t);e.p&&(J.position.set(e.p[0],e.p[1],e.p[2]),qr=e.p[3]??0,Pi=e.p[4]??0,J.rotation.set(Pi,qr,0));for(const t of e.mobs??[]){const i=Xe.makeMob(t[0],t[1],t[2],t[3]);i.hp=t[4]??i.hp,i.tamed=!!t[5],i.friendOfPlayer=!!t[6],i.captive=!!t[7],i.fixedY=t[8]??null,i.bond=t[9]??0,i.rescued=!!t[10]}return ye.updateChunks(J.position),en.recomputePower(),ve("Mundo cargado"),!0}catch(e){return console.error(e),ve("Guardado dañado"),!1}}let qr=0,Pi=0;ye.updateChunks(J.position);if(!vl()){en.createStarterCircuit(3,ye.heightAt(3,3)+1,3),en.createStarterPortal(-7,ye.heightAt(-7,6)+1,6);for(let n=0;n<8;n++){const e=Math.random()*Math.PI*2,t=12+Math.random()*28,i=Math.round(Math.sin(e)*t),r=Math.round(Math.cos(e)*t);Xe.makeMob(n%4,i,ye.heightAt(i,r)+1,r)}}function Ad(){et.unlockAudio(),pn||an.domElement.requestPointerLock()}document.querySelector("#normalMode").onclick=()=>Jr("normal");document.querySelector("#survivalMode").onclick=()=>Jr("survival");document.querySelector("#dinoMode").onclick=()=>Jr("dino");document.querySelector("#marvelMode").onclick=()=>Jr("marvel");Jr(Ze);document.querySelector("#playBtn").onclick=Ad;document.querySelector("#saveBtn").onclick=_l;document.querySelector("#loadBtn").onclick=vl;document.querySelector("#farBtn").onclick=()=>{J.position.set(vr-55,ye.heightAt(vr-55,0)+18,0),ye.updateChunks(J.position),ve("Cerca de las Tierras Lejanas")};an.domElement.onclick=()=>{!pn&&document.pointerLockElement!==an.domElement&&Ad()};document.addEventListener("pointerlockchange",()=>{pn||cs.classList.toggle("hidden",document.pointerLockElement===an.domElement)});document.addEventListener("mousemove",n=>{if(document.pointerLockElement!==an.domElement)return;const e=.0022;qr-=n.movementX*e,Pi-=n.movementY*e,Pi=Math.max(-Math.PI/2+.03,Math.min(Math.PI/2-.03,Pi)),J.rotation.y=qr,J.rotation.x=Pi});const ct={w:0,a:0,s:0,d:0,space:0,shift:0,fast:0};addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(e==="w"&&(ct.w=1),e==="a"&&(ct.a=1),e==="s"&&(ct.s=1),e==="d"&&(ct.d=1),n.code==="Space"&&(ct.space=1),n.code.startsWith("Shift")&&(ct.shift=1),e==="f"&&(ct.fast=1),e==="t"){const t=et.cycleWeather();ve("Clima: "+(t==="clear"?"despejado":t==="rain"?"lluvia":"tormenta"))}/^[1-9]$/.test(e)&&(Zt=Number(e)-1,Fi()),e==="e"&&!n.repeat&&(pn?mn():Kg()),e==="c"&&!n.repeat&&(pn?mn():bd()),e==="m"&&!n.repeat&&(Ze==="survival"?ve("En Supervivencia no puedes invocar criaturas"):pn?mn():Jg()),e==="tab"&&!n.repeat&&(n.preventDefault(),pn?mn():yd()),e==="k"&&!n.repeat&&_l(),e==="l"&&!n.repeat&&vl(),e==="r"&&(J.position.set(0,14,18),ye.updateChunks(J.position),ve("Inicio")),e==="escape"&&pn&&mn()});addEventListener("keyup",n=>{const e=n.key.toLowerCase();e==="w"&&(ct.w=0),e==="a"&&(ct.a=0),e==="s"&&(ct.s=0),e==="d"&&(ct.d=0),n.code==="Space"&&(ct.space=0),n.code.startsWith("Shift")&&(ct.shift=0),e==="f"&&(ct.fast=0)});addEventListener("wheel",n=>{pn||(Zt+=n.deltaY>0?1:-1,Zt<0&&(Zt=8),Zt>8&&(Zt=0),Fi())},{passive:!0});const ii=new V,Lr=new V,n_=new V(0,1,0);function i_(n){if(document.pointerLockElement!==an.domElement||pn)return;J.getWorldDirection(ii),ii.y=0,ii.normalize(),Lr.crossVectors(ii,n_).normalize();const e=ct.w||ct.a||ct.s||ct.d,t=en.checkUnderPlayer(J.position);let i=1;if(t==="slime"?Ve.jumpVelocity<=0&&(Ve.jumpVelocity=13.2,Ve.grounded=!1,et.bounceEffect(J.position),ve("¡Rebote elástico!")):t==="honey"?i=.42:t==="ice"||t==="packedIce"?i=1.45:t==="magma"&&($s+=n,$s>1.1&&($s=0,ds(1),ve("🔥 ¡El magma quema!"))),Ze==="survival"){const o=ct.fast&&Ve.hunger>2,s=(o?8.2:5.4)*i*n;ct.w&&J.position.addScaledVector(ii,s),ct.s&&J.position.addScaledVector(ii,-s),ct.a&&J.position.addScaledVector(Lr,-s),ct.d&&J.position.addScaledVector(Lr,s);const a=ye.heightAt(J.position.x,J.position.z)+2.35;J.position.y<=a+.08?(J.position.y=a,Ve.grounded=!0,t!=="slime"&&(Ve.jumpVelocity=0)):Ve.grounded=!1,ct.space&&Ve.grounded&&(Ve.jumpVelocity=7.5,Ve.grounded=!1,et.sound("pickup")),Ve.jumpVelocity-=18.5*n,J.position.y+=Ve.jumpVelocity*n;const l=ye.heightAt(J.position.x,J.position.z)+2.35;J.position.y<l&&(J.position.y=l,t!=="slime"&&(Ve.jumpVelocity=0),Ve.grounded=!0),e&&(Ve.exhaustion+=n*(o?.18:.08));return}const r=(ct.fast?28:10)*i*n;ct.w&&J.position.addScaledVector(ii,r),ct.s&&J.position.addScaledVector(ii,-r),ct.a&&J.position.addScaledVector(Lr,-r),ct.d&&J.position.addScaledVector(Lr,r),ct.space&&(J.position.y+=r),ct.shift&&(J.position.y-=r),J.position.y=Math.max(-20,Math.min(100,J.position.y))}function r_(){const n=ye.getDimension()==="overworld"?"ember":"overworld";for(const e of[...Xe.mobs])Xe.removeMob(e);ye.setDimension(n),Xe.setHeightProvider((e,t)=>ye.heightAt(e,t)),J.position.y=ye.heightAt(J.position.x,J.position.z)+8,ye.updateChunks(J.position),en.createStarterPortal(Math.round(J.position.x)+5,ye.heightAt(Math.round(J.position.x)+5,Math.round(J.position.z))+1,Math.round(J.position.z)),en.recomputePower(),n==="ember"?(ft.background.set(3871250),ft.fog.color.set(3871250),ve("Entraste a la Dimensión de Brasas 🔥")):(ft.background.set(8833535),ft.fog.color.set(8833535),ve("Regresaste al Mundo Verde 🌎"))}const Ka=new pf;Ka.far=10;const o_=new tt;function wd(){Ka.setFromCamera(o_,J);const n=[...ye.blocks,...Xe.mobs.map(e=>e.group)];return Ka.intersectObjects(n,!0)[0]??null}addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousedown",n=>{if(document.pointerLockElement!==an.domElement||pn)return;Xg();const e=wd(),t=e?e.object.userData.mob??Xe.mobs.find(i=>i.group===e.object||i.group.children.includes(e.object)):null;if(n.button===2&&Ft==="tool"){const i=Lt[Ci]?.name;if(i==="Rifle tranquilizante"){if(t&&st[t.type].dinosaur){t.bond=(t.bond??0)+2,t.hp=Math.min(t.maxHp,t.hp+8),et.sound("hit"),t.bond>=2?(t.tamed=!0,t.captive=!1,t.friendOfPlayer=!0,t.rescued=!0,et.enchantEffect(t.group.position),ve(`🦖 ¡${st[t.type].name} tranquilizado y domesticado! Te seguirá.`)):ve(`🎯 Dardo aplicado · calma ${t.bond}/2`);return}else if(t){Xe.hit(t,8,J.position),ve("🎯 Dardo tranquilizante impactó en objetivo");return}}if(i==="Rastreador jurásico"){const r=Xe.mobs.filter(o=>st[o.type].dinosaur);if(r.length>0){let o=r[0],s=J.position.distanceTo(o.group.position);for(const a of r){const l=J.position.distanceTo(a.group.position);l<s&&(s=l,o=a)}ve(`📟 Rastreador Jurásico: ${st[o.type].name} detectado a ${Math.round(s)} bloques`)}else ve("📟 Rastreador Jurásico: no hay dinosaurios cercanos");return}if(i==="Martillo Mjolnir"){et.sound("thunder");let r=0;for(const o of[...Xe.mobs])o.group.position.distanceTo(J.position)<16&&(Xe.hit(o,18,J.position),et.mobHit(o.group.position),r++);et.explosionEffect(J.position.clone().add(new V(0,1,0))),ve(`⚡ ¡Trueno del Mjolnir! Golpeó ${r} objetivos`);return}if(i==="Arco explosivo de Hawkeye"){const r=new V;J.getWorldDirection(r);const o=J.position.clone().addScaledVector(r,18);et.explosionEffect(o);for(const s of[...Xe.mobs])s.group.position.distanceTo(o)<7&&Xe.hit(s,16,o);ve("🏹💥 ¡Flecha explosiva detonada!");return}if(i==="Guantelete repulsor"){const r=new V;J.getWorldDirection(r);let o=0;for(const s of[...Xe.mobs]){const a=s.group.position.clone().sub(J.position);a.length()<20&&a.normalize().dot(r)>.7&&(Xe.hit(s,14,J.position),s.group.position.addScaledVector(r,6),o++)}et.enchantEffect(J.position.clone().add(r)),ve(`🥊✨ ¡Rayo repulsor! Rechazó a ${o} objetivos`);return}}if(n.button===2&&t){const i=st[t.type],r=Ft==="item"?At[Ni]:null;if(Ze==="dino"&&i.dinosaur&&(r?.name==="Carne cocida"||r?.name==="Carne cruda")){Rt(1),t.bond=(t.bond??0)+1,t.hp=Math.min(t.maxHp,t.hp+8);const o=t.captive?2:3;t.bond>=o?(t.tamed=!0,t.captive=!1,t.rescued=!0,t.fixedY=null,t.friendOfPlayer=!0,t.group.position.y=ye.heightAt(t.group.position.x,t.group.position.z)+1,t.home.copy(t.group.position),Di.dinos++,ve(`🦖 ${i.name} fue alimentado y ahora te sigue`)):ve(`Carne entregada · confianza ${t.bond}/${o}`);return}if(Ze==="normal"&&i.id==="wolf"&&r?.name==="Hueso"){Rt(1),t.bond=(t.bond??0)+1,t.bond>=2?(t.tamed=!0,t.captive=!1,t.rescued=!0,t.fixedY=null,t.friendOfPlayer=!0,t.group.position.y=ye.heightAt(t.group.position.x,t.group.position.z)+1,t.home.copy(t.group.position),Di.wolves++,ve("🐺 Lobo domesticado: ahora te seguirá")):ve("El lobo olfatea el hueso");return}if(Ze==="marvel"&&i.marvelZombie&&r?.name==="Suero restaurador"){const o=t.group.position.clone();Rt(1),Xe.removeMob(t);const s=st.findIndex(l=>l.id==="npcSurvivor"),a=Xe.makeMob(s,o.x,ye.heightAt(o.x,o.z)+1,o.z);a.tamed=!0,a.friendOfPlayer=!0,a.rescued=!0,a.npcRole="superviviente",a.profession="superviviente",a.npcStructure="Humano restaurado",a.home.copy(a.group.position),Di.humans++,et.sound("pickup"),ve("🧪 ¡Curado! El zombie volvió a ser humano");return}if(i.kind==="villager"){openNPCDialog(t);return}}if(n.button===2&&Ft==="tool"&&Lt[Ci]?.name==="Chisquero de pedernal"&&e&&ye.blocks.includes(e.object)){const i=e.object.userData.typeIndex??0;if(Bt[i]?.id==="tnt"){en.igniteTNT(e.object,2);return}}if(n.button===2&&Ft==="item"){const i=e&&ye.blocks.includes(e.object)?Bt[e.object.userData.typeIndex??0]?.id:null;if(!(i&&["chest","crafting","furnace","enchantTable","tnt","dnaAnalyzer","incubator","lever","portalCore","radarArray","bioScanner","medicalStation","watchBeacon"].includes(i))&&Gg(e))return}if(e){if(t&&n.button===0){const i=st[t.type],r=Ft==="tool"?Lt[Ci]:null,o=r?r.damage??1:1,s=Xe.hit(t,o,J.position);et.mobHit(t.group.position.clone().add(new V(0,1,0))),s&&Ze==="marvel"&&i.marvelZombie?(gt.kills++,gt.baseLevel=Math.max(gt.baseLevel,Math.min(10,1+Math.floor(gt.kills/5))),ve(`Zombie derrotado · refugio nivel ${gt.baseLevel}`)):ve(`${i.name}: ${Math.max(0,t.hp)} vida`);return}if(ye.blocks.includes(e.object)){if(n.button===0){const i=e.object.userData.typeIndex??0,r=Bt[i]?.id,o=Lt[Ci];if(r==="tnt"){en.igniteTNT(e.object,2);return}if(r==="bedrock"){ve("La roca madre es indestructible");return}if(["reinforcedWall","steelPlate"].includes(r)&&(Ft!=="tool"||(o?.power??0)<4)){ve("Necesitas una herramienta fuerte para romper este bloque");return}if(Ze==="dino"&&r==="fossilRock"){const s=Ft==="tool"&&o?.name==="Brocha paleontológica"?2:1;ut.fossils+=s,ve(`Fósil encontrado +${s} · tienes ${ut.fossils}`)}et.blockBreak(e.object.position.clone(),new Ye(Bt[i]?.sw??"#888888")),Md(e.object.position.clone(),i),ye.removeBlock(e.object,!0),en.onBlockChanged();return}if(n.button===2){const i=e.face.normal.clone().transformDirection(e.object.matrixWorld),r=e.object.position.clone().add(i);r.set(Math.round(r.x),Math.round(r.y),Math.round(r.z));const o=Bt[e.object.userData.typeIndex??0]?.id;if(o==="chest"&&Ft!=="block"){Zg(e.object);return}if(o==="crafting"&&Ft!=="block"){bd();return}if(o==="furnace"&&Ft!=="block"){$g();return}if(o==="enchantTable"&&Ft!=="block"){jg();return}if(o==="tnt"){en.igniteTNT(e.object,2.2);return}if(Ze==="dino"&&o==="dnaAnalyzer"){is("analyzer");return}if(Ze==="dino"&&o==="incubator"){is("incubator");return}const s=en.interactBlock(e.object);if(s.handled){s.type==="portal"&&r_(),s.type==="medical"&&(Pt=Mn,et.sound("pickup"),ve("Estación médica: vida restaurada"));return}if(Ft==="egg"){const a=At[Ni],l=a.mobType;if(l!==void 0){const c=ye.heightAt(r.x,r.z)+1;Xe.makeMob(l,r.x,c,r.z),Rt(1),ve(`${st[l].name} invocado`)}return}Ft==="block"&&r.distanceTo(J.position)>1.3&&ye.placeBlock(r.x,r.y,r.z,Xr)&&(et.blockPlace(r,new Ye(Bt[Xr].sw)),Rt(1),en.onBlockChanged())}}}});const dr=new tf(new rf(ye.cubeGeo),new od({color:0,linewidth:2}));dr.scale.setScalar(1.008);dr.visible=!1;ft.add(dr);function s_(){const n=wd();n&&ye.blocks.includes(n.object)?(dr.visible=!0,dr.position.copy(n.object.position)):dr.visible=!1}const Go=new Set,Ja=new Set;function a_(n){if(!n.dungeon)return;const e=`dungeon:${n.x},${n.z}:${Ze}`;if(Ja.has(e))return;const t=n.dungeon;if(J.position.distanceTo(new V(t.x,J.position.y,t.z))>95)return;let r=[];if(Ze==="dino")r=st.map((s,a)=>s.dinosaur?a:-1).filter(s=>s>=0);else if(Ze==="marvel")r=st.map((s,a)=>s.marvelZombie?a:-1).filter(s=>s>=0);else{const s=st.findIndex(a=>a.id==="wolf");s>=0&&(r=[s])}if(!r.length)return;Ja.add(e);const o=Ze==="dino"&&!n.house&&Math.random()<.45?2:1;for(let s=0;s<o;s++){const a=r[Math.floor(Math.random()*r.length)],l=t.x+(s?1:-1),c=t.z,u=Xe.makeMob(a,l,t.y,c);u.captive=!0,u.fixedY=t.y,u.captiveRadius=Math.max(2,Math.min(t.w,t.d)/3),u.home.set(l,t.y,c),u.npcStructure=t.label,u.state="wander"}}function ri(n,e,t,i=0,r=0){const o=st.findIndex(c=>c.id===n);if(o<0)return null;const s=t.x+i,a=t.z+r,l=Xe.makeMob(o,s,ye.heightAt(s,a)+1,a);return l.npcRole=e,l.profession=e,l.npcMode=Ze,l.npcStructure=t.type,l.home.set(s,l.group.position.y,a),l}function l_(){for(const n of ye.structures){a_(n);const e=`${n.type}:${n.x},${n.z}:${Ze}`;if(!Go.has(e)){if(n.house){Go.add(e);continue}if(!(J.position.distanceTo(new V(n.x,J.position.y,n.z))>100)){if(Go.add(e),n.type.includes("Jurassic")||n.type.includes("T-Rex")){ri("npcPaleo","paleontologo",n,2,2),ri("npcScientist","cientifico",n,-2,-2);continue}if(n.type.includes("Vengadores")||n.type.includes("Sanctum")||n.type.includes("S.H.I.E.L.D.")){ri("npcGuard","guardia",n,2,0),ri("npcSurvivor","superviviente",n,-2,0);continue}if(n.temple){ri("npcGuard","guardia",n,0,4);continue}if(n.type==="Aldea gigante"){for(let i=0;i<8;i++){const r=["constructor","granjero","bibliotecario","explorador"],o=r[i%r.length];ri(o==="constructor"?"npcBuilder":o==="explorador"?"npcRanger":"villager",o,n,(i%4-1.5)*4,(Math.floor(i/4)*2-1)*6)}ri("npcMedic","medico",n,3,-3),ri("npcEngineer","ingeniero",n,-3,-3);const t=st.findIndex(i=>i.id==="golem");t>=0&&Xe.makeMob(t,n.x+8,ye.heightAt(n.x+8,n.z)+1,n.z)}}}}}let ir=.28,Zs=0,Ks=0,Js=0,Qs=0;const c_=new hf;let Uo=0;function d_(n,e){if(Ze!=="survival")return;Ve.elapsed+=n,Ve.days=1+Math.floor(Ve.elapsed/260),Ve.exhaustion+=n*.004,Ve.exhaustion>=1&&(Ve.exhaustion-=1,Ve.hunger=Math.max(0,Ve.hunger-1)),Uo=Math.max(0,Uo-n),Ve.hunger<=0&&Uo<=0&&(Uo=4,ds(1),ve("Tienes hambre: busca comida")),e<.28&&!Ve.milestones.night&&(Ve.milestones.night=!0,ve("🌙 Primera noche: los monstruos atacan"));const t=Wt.filter(i=>i?.kind==="block").map(i=>Bt[i.index]?.id);t.includes("oak")&&!Ve.milestones.wood&&(Ve.milestones.wood=!0,ve("🏆 Progreso: conseguiste madera")),t.includes("stone")&&!Ve.milestones.stone&&(Ve.milestones.stone=!0,ve("🏆 Progreso: conseguiste piedra")),t.includes("iron")&&!Ve.milestones.iron&&(Ve.milestones.iron=!0,ve("🏆 Progreso: encontraste hierro"))}function Rd(){requestAnimationFrame(Rd);const n=Math.min(c_.getDelta(),.05);ci=Math.max(0,ci-n),Ze==="marvel"&&(gt.elapsed+=n,gt.day=1+Math.floor(gt.elapsed/90)),i_(n),Hg(n),yi>0?(yi=Math.max(0,yi-n*6.5),kt.position.y=-.48-Math.sin(yi*Math.PI)*.16,kt.rotation.x=-.18+Math.sin(yi*Math.PI)*.42,kt.rotation.z=-.12-Math.sin(yi*Math.PI)*.32):(kt.position.set(.58,-.48,-1.05),kt.rotation.set(-.18,-.28,-.12)),ir=(ir+n/260)%1;const e=Math.max(.08,Math.sin(ir*Math.PI)*1.05);d_(n,e),Ri.intensity=.25+e*2,Ya.intensity=.35+e*1.25,Ri.position.set(Math.cos(ir*Math.PI*2)*80,Math.sin(ir*Math.PI*2)*85,35),ft.background.setHSL(.57,.55,.12+.55*e),ft.fog.color.copy(ft.background);const t=ye.getDimension()==="overworld";if(cr.visible=t,es.visible=t,ts.visible=t,t){const c=Ri.position.clone().normalize();es.position.copy(J.position).addScaledVector(c,220),ts.position.copy(J.position).addScaledVector(c,-220),cr.position.x=J.position.x,cr.position.z=J.position.z,$a.map.offset.x+=n*.005,$a.opacity=.35+.55*e}const i=et.update(n,J);if(i.weather!=="clear"&&(ft.background.offsetHSL(0,-.1,-.1),ft.fog.color.copy(ft.background)),i.flash>0&&ft.background.set(15267071),ye.getDimension()==="ember"&&(ft.background.set(3871250),ft.fog.color.set(3871250),Ri.intensity=.65,Ya.intensity=.45),Xe.update(n,J.position,e),en.update(n),Og(n),s_(),Zs+=n,Ks+=n,Js+=n,Qs+=n,Zs>.45&&(Zs=0,ye.updateChunks(J.position),l_()),Ks>.3&&(Ks=0,Ed(Kr,52)),Js>3){Js=0;let c=!1;if(Ze==="marvel"&&gt.basePos){const m=Math.min(80,16+gt.baseLevel*6);c=J.position.distanceTo(gt.basePos)<m}const u=Ze!=="marvel"||gt.day>3||e<.28;!c&&u&&Xe.ensurePopulation(J.position,Ze,e)}Qs>75&&(Qs=0,_l());const r=Qo(J.position.x,J.position.z),o=Math.max(Math.abs(J.position.x),Math.abs(J.position.z)),s=o>vr?" · TIERRAS LEJANAS":` · faltan ${Math.max(0,Math.round(vr-o))} bloques`,a=Wt[Zt];let l="Mano vacía";a&&(a.kind==="block"?l=Bt[a.index]?.name??"Bloque":a.kind==="tool"?l=Lt[a.index]?.name??"Herramienta":l=At[a.index]?.name??"Objeto"),pl.innerHTML=`<b>JULIAN BLOCKS · V18</b> · <strong>${Ze==="dino"?"🦖 JURASSIC WORLD":Ze==="marvel"?"🧟 MARVEL ZOMBIES":Ze==="survival"?"⛏️ SUPERVIVENCIA":"🌎 NORMAL"}</strong><br>${kg()}${Bg()}<br>Dimensión: <strong>${ye.getDimension()==="overworld"?"Mundo Verde":"Brasas"}</strong> · Bioma: <strong>${r.name}</strong>${ye.getDimension()==="overworld"?s:""}<br>En mano: <strong>${l}</strong> · Herramienta: ${Lt[Ci]?.name??"Mano"}<br>Clima: <strong>${et.weather==="clear"?"Despejado":et.weather==="rain"?"Lluvia":"Tormenta"}</strong> · Criaturas: ${Xe.mobs.length} · Estructuras: ${ye.structures.length}<br>X ${J.position.x.toFixed(0)} · Y ${J.position.y.toFixed(0)} · Z ${J.position.z.toFixed(0)}${Ze==="dino"?`<br>Fósiles: <strong>${ut.fossils}</strong> · ADN: <strong>${ut.dna}%</strong> · Huevos: <strong>${ut.eggs}</strong> · 🦖 Rescatados: ${Di.dinos}`:""}${Ze==="marvel"?`<br>Día apocalipsis: <strong>${gt.day}</strong> · Bajas: <strong>${gt.kills}</strong> · Refugio: <strong>${gt.baseLevel}/10</strong> · 🧪 Curados: ${Di.humans}`:""}<br><span class="hint">E inventario · C crafteo · M criaturas · Tab mapa · T clima · K guardar</span>`,J.position.add(i.shakeOffset),an.render(ft,J),J.position.sub(i.shakeOffset)}Rd();addEventListener("resize",()=>{J.aspect=innerWidth/innerHeight,J.updateProjectionMatrix(),an.setSize(innerWidth,innerHeight)});
