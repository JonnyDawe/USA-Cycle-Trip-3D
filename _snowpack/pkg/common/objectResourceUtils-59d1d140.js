import { t as t$p } from './styleUtils-8b593a34.js';
import { n as n$b, t as t$j, z as i$h, r as r$m, c as s$c, J as o$m, K as e$i, f as e$j, g as g$c } from './Message-70b34921.js';
import { y as y$8, j as j$8 } from './mat3-6cb40036.js';
import { e as e$e, w as w$4, a as e$f } from './quat-44770d30.js';
import { r as r$l, f as f$b, c as c$d, e as e$c, n as n$g, h as h$d, o as o$k, G as G$2 } from './mat4-8eb66d33.js';
import { e as e$d, b as e$l, f as f$f, d as r$v, c as e$n } from './vec33-d394808f.js';
import { k as r$i, n as n$a, u as u$e, d as d$a, z as z$4, h as r$j, c as c$b, _ as _$4, j as j$7, x as x$5, s as s$b, I as I$5, q as q$5, m as p$7, a3 as P$5, a as o$i, V as M$4, o as o$j, i as t$k, y as y$7, D as x$6, W as P$6, C as m$9, g as b$6, G as f$e, L as L$4, a4 as c$f, O as i$j, M as e$k, a5 as i$l } from './mathUtils-a477cc74.js';
import { a as a$i, q as q$6, w as w$5, h as h$f, B as B$4 } from './aaBoundingBox-c0155c39.js';
import { c as c$e, x as x$7, u as u$g, i as i$i, L as L$6, O as O$3, E as E$4 } from './BufferView-3733efba.js';
import { s as s$a, c as c$c, n as n$c, a as r$k, f as f$c, l as l$d, u as u$f, h as h$b, j as l$f, m as n$n, p as o$n, q as r$t, w as r$u, x as n$o, y as f$g, z as e$m, B as t$q, C as i$k, D as o$o, E as n$p } from './DefaultMaterial_COLOR_GAMMA-7c4a23ef.js';
import { n as n$k, F as F$2, G as G$3, o as t$o, L as L$5 } from './Loadable-d16b3d7d.js';
import { a as a$k } from './asyncUtils-015dfd6e.js';
import { h as h$e, v as v$6, m as m$a, s as s$e, w as w$6 } from './promiseUtils-2ff2b194.js';
import { r as r$s } from './Version-271d30d5.js';
import { n as n$i, t as t$n } from './testSVGPremultipliedAlpha-b5c775e7.js';
import { f as n$e, e as e$h } from './JSONSupport-9346590f.js';
import { r as r$o } from './vec2-513a0296.js';
import { n as n$f } from './vec2f64-3fb878b3.js';
import { a as a$h, y as y$6 } from './vec4-8546ad05.js';
import { e as e$b } from './uid-6beaca4c.js';
import { n as n$m } from './compilerUtils-7bbb76dc.js';
import { a as a$j } from './assets-73c8998f.js';
import { r as r$p, n as n$l } from './Texture-454f8135.js';
import { p as n$d, q as d$b, f as f$d, h as h$c, e as e$g, t as t$l, l as l$e, o as o$l, u as b$7, g as g$b, d as s$d, r as r$q, v as n$j, a as r$r } from './FramebufferObject-238df962.js';
import { A as A$5 } from './InterleavedLayout-b66a6862.js';
import { n as n$h, t as t$m } from './vec3f32-97630458.js';
import { r as r$n } from './mat4f32-5ff6470f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a$g(n){return n?{origin:r$i(n.origin),direction:r$i(n.direction)}:{origin:n$a(),direction:n$a()}}function d$9(n,i){const r=b$5.get();return r.origin=n,r.direction=i,r}function m$8(n,i=a$g()){return p$6(n.origin,n.direction,i)}function j$6(n,t,o=a$g()){return r$j(o.origin,n),c$b(o.direction,t,n),o}function p$6(n,r,t=a$g()){return r$j(t.origin,n),r$j(t.direction,r),t}function k$1(n,i){const e=_$4(c$c.get(),j$7(c$c.get(),n.direction),c$b(c$c.get(),i,n.origin));return z$4(e,e)}function h$a(n,i,t){const o=z$4(n.direction,c$b(t,i,n.origin));return u$e(t,n.origin,d$a(t,n.direction,o)),t}function v$5(){return {origin:null,direction:null}}const b$5=new s$a(v$5);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$a(n,r){return z$4(n,r)/s$b(n)}function f$a(r,s){const c=z$4(r,s)/(s$b(r)*s$b(s));return -x$5(c)}function i$g(o,r,u){j$7(m$7,o),j$7(h$9,r);const a=z$4(m$7,h$9),e=x$5(a),f=_$4(m$7,m$7,h$9);return z$4(f,u)<0?2*Math.PI-e:e}const m$7=n$a(),h$9=n$a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const P$4=n$b.getLogger("esri.geometry.support.sphere");function _$3(){return n$c()}function q$4(t,r=_$3()){return a$h(r,t)}function w$3(t,r){return r$k(t[0],t[1],t[2],r)}function C$1(t){return t}function k(t){t[0]=t[1]=t[2]=t[3]=0;}function E$3(t){return t}function L$3(t){return Array.isArray(t)?t[3]:t}function O$2(t){return Array.isArray(t)?t:X}function T$2(t,r,n,e){return r$k(t,r,n,e)}function z$3(t,r,n){return t!==n&&r$j(n,t),n[3]=t[3]+r,n}function U$2(t,r,n){return P$4.error("sphere.setExtent is not yet supported"),t===n?n:q$4(t,n)}function V$3(t,r,n){if(t$j(r))return !1;const o=c$b(c$c.get(),r.origin,O$2(t)),s=z$4(r.direction,r.direction),i=2*z$4(r.direction,o),m=i*i-4*s*(z$4(o,o)-t[3]*t[3]);if(m<0)return !1;const g=Math.sqrt(m);let p=(-i-g)/(2*s);const l=(-i+g)/(2*s);return (p<0||l<p&&l>0)&&(p=l),!(p<0)&&(n&&u$e(n,r.origin,d$a(c$c.get(),r.direction,p)),!0)}function B$3(t,r){return V$3(t,r,null)}function D$2(t,r,n){if(V$3(t,r,n))return n;const e=F$1(t,r,c$c.get());return u$e(n,r.origin,d$a(c$c.get(),r.direction,q$5(r.origin,e)/s$b(r.direction))),n}function F$1(t,r,n){const e=c$c.get(),i=f$c.get();_$4(e,r.origin,r.direction);const a=L$3(t);_$4(n,e,r.origin),d$a(n,n,1/s$b(n)*a);const c=J$2(t,r.origin),u=f$a(r.origin,n);return r$l(i),f$b(i,i,u+c,e),I$5(n,n,i),n}function G$1(t,r,n){return V$3(t,r,n)?n:(h$a(r,O$2(t),n),H$3(t,n,n))}function H$3(t,r,n){const e=c$b(c$c.get(),r,O$2(t)),o=d$a(c$c.get(),e,t[3]/s$b(e));return u$e(n,o,O$2(t))}function I$4(t,r){const n=c$b(c$c.get(),r,O$2(t)),e=p$7(n),o=t[3]*t[3];return Math.sqrt(Math.abs(e-o))}function J$2(t,n){const e=c$b(c$c.get(),n,O$2(t)),o=s$b(e),s=L$3(t),i=s+Math.abs(s-o);return x$5(s/i)}const K$2=n$a();function N$1(t,r,e,o){const s=c$b(K$2,r,O$2(t));switch(e){case 0:{const t=P$5(s,K$2)[2];return o$i(o,-Math.sin(t),Math.cos(t),0)}case 1:{const t=P$5(s,K$2),r=t[1],e=t[2],i=Math.sin(r);return o$i(o,-i*Math.cos(e),-i*Math.sin(e),Math.cos(r))}case 2:return j$7(o,s);default:return}}function Q$1(t,r){const n=c$b(Y,r,O$2(t));return s$b(n)-t[3]}function W(t,r,n,e){const o=Q$1(t,r),s=N$1(t,r,2,Y),i=d$a(Y,s,n-o);return u$e(e,r,i)}const X=n$a(),Y=n$a();var Z=Object.freeze({__proto__:null,create:_$3,copy:q$4,fromCenterAndRadius:w$3,wrap:C$1,clear:k,fromRadius:E$3,getRadius:L$3,getCenter:O$2,fromValues:T$2,elevate:z$3,setExtent:U$2,intersectRay:V$3,intersectsRay:B$3,intersectRayClosestSilhouette:D$2,closestPointOnSilhouette:F$1,closestPoint:G$1,projectPoint:H$3,distanceToSilhouette:I$4,angleToSilhouette:J$2,axisAt:N$1,altitudeAt:Q$1,setAltitudeAt:W});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$i(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o;}(t$i||(t$i={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$h(r,o){o.linearDepth?r.vertex.code.add(t$i`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):r.vertex.code.add(t$i`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t$h=n$b.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class r$g{constructor(){this.includedModules=new Map;}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&t$h.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r));}}class n$9 extends r$g{constructor(){super(...arguments),this.vertex=new o$h,this.fragment=new o$h,this.attributes=new a$f,this.varyings=new c$a,this.extensions=new u$d,this.constants=new h$8;}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?l$c:m$6,c=this.constants.generateSource().concat(s.constants.generateSource());return `\n${t.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}}class s$9{constructor(){this._entries=new Map;}add(e,t,r){const n=`${e}_${t}_${r}`;return this._entries.set(n,{name:e,type:t,arraySize:r}),this}generateSource(){const e=e=>e?`[${e}]`:"";return Array.from(this._entries.values()).map((t=>`uniform ${t.type} ${t.name}${e(t.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class i$f{constructor(){this._entries=new Array;}add(e){this._entries.push(e);}generateSource(){return this._entries}}class o$h extends r$g{constructor(){super(...arguments),this.uniforms=new s$9,this.code=new i$f,this.constants=new h$8;}get builder(){return this}}class a$f{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class c$a{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class u$d{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const t="vertex"===e?u$d.ALLOWLIST_VERTEX:u$d.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}u$d.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u$d.ALLOWLIST_VERTEX=[];class h$8{constructor(){this._entries=[];}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=h$8.numberToFloatStr(r);break;case"int":n=h$8.numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${h$8.numberToFloatStr(r[0])},                            ${h$8.numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${h$8.numberToFloatStr(r[0])},                            ${h$8.numberToFloatStr(r[1])},                            ${h$8.numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${h$8.numberToFloatStr(r[0])},                            ${h$8.numberToFloatStr(r[1])},                            ${h$8.numberToFloatStr(r[2])},                            ${h$8.numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${h$8.numberToIntStr(r[0])},                             ${h$8.numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${h$8.numberToIntStr(r[0])},                             ${h$8.numberToIntStr(r[1])},                             ${h$8.numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${h$8.numberToIntStr(r[0])},                             ${h$8.numberToIntStr(r[1])},                             ${h$8.numberToIntStr(r[2])},                             ${h$8.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>h$8.numberToFloatStr(e))).join(", ")})`;}return this._entries.push(`const ${t} ${e} = ${n};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const m$6="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",l$c="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$g{constructor(t,o){this._module=t,this._loadModule=o;}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$f{constructor(i,t,e=(()=>this.dispose())){this.release=e,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i);}dispose(){this._program=i$h(this._program),this._pipeline=this._config=null;}reload(t){i$h(this._program),this._program=this.initializeProgram(t);}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(i,t){}bindMaterial(i,t){}bindDraw(i,t,e){}bindPipelineState(i){i.setPipelineState(this.pipeline);}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}get primitiveType(){return 4}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e$9{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0));}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function r$f(e={}){return (r,s)=>{var a,i;r._parameterNames=null!=(a=r._parameterNames)?a:[],r._parameterNames.push(s);const o=r._parameterNames.length-1,h=e.count||2,n=Math.ceil(M$4(h)),m=null!=(i=r._parameterBits)?i:[0];let p=0;for(;m[p]+n>16;)p++,p>=m.length&&m.push(0);r._parameterBits=m;const y=m[p],_=(1<<n)-1<<y;m[p]+=n,Object.defineProperty(r,s,{get(){return this[o]},set(t){if(this[o]!==t&&(this[o]=t,this._keyDirty=!0,this._parameterBits[p]=this._parameterBits[p]&~_|+t<<y&_,"number"!=typeof t&&"boolean"!=typeof t))throw "Configuration value for "+s+" must be boolean or number, got "+typeof t}});}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o$g=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class n$8 extends n$d{constructor(e,t,s){super(e,t.generateSource("vertex"),t.generateSource("fragment"),s),this._textures=new Map,this._freeTextureUnits=new n$e({deallocator:null}),this._fragmentUniforms=d$b()?t.fragmentUniforms.entries:null;}stop(){this._textures.clear(),this._freeTextureUnits.clear();}bindTexture(t,r){if(t$j(t)||null==t.glName){const e=this._textures.get(r);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(r)),null}let s=this._textures.get(r);return null==s?(s=this._allocTextureUnit(t),this._textures.set(r,s)):s.texture=t,this._context.useProgram(this),this.setUniform1i(r,s.unit),this._context.bindTexture(t,s.unit),s.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit);})),r$m(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}));}_allocTextureUnit(e){return {texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$f(i,n,o){i.setUniform3f("camPos",o[3]-n[0],o[7]-n[1],o[11]-n[2]);}function t$e(i,n){i.setUniformMatrix4fv("proj",n);}function r$e(i,n){i.setUniform2fv("nearFar",n);}function f$9(n,o,t){c$d(c$9,t,o),n.setUniform3fv("localOrigin",o),n.setUniformMatrix4fv("view",c$9);}function a$e(i,n){f$9(i,n.origin,n.camera.viewMatrix);}function m$5(i,n){i.setUniform4fv("viewport",n.camera.fullViewport);}const c$9=r$n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s$8=n$c();class e$8{constructor(t){this.message=t;}toString(){return `AssertException: ${this.message}`}}function i$e(t,n){if(!t){n=n||"assert";const t=new Error(n);throw t.stack&&console.log(t.stack),new e$8(n)}}function f$8(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack));}function d$8(t,n,r,o){let a,u=(r[0]-t[0])/n[0],c=(o[0]-t[0])/n[0];u>c&&(a=u,u=c,c=a);let s=(r[1]-t[1])/n[1],e=(o[1]-t[1])/n[1];if(s>e&&(a=s,s=e,e=a),u>e||s>c)return !1;s>u&&(u=s),e<c&&(c=e);let i=(r[2]-t[2])/n[2],f=(o[2]-t[2])/n[2];return i>f&&(a=i,i=f,f=a),!(u>f||i>c)&&(f<c&&(c=f),!(c<0))}function j$5(t,n,r,a,u,c=n$f()){const s=(a[u]-r[u])*(n[0]-t[0])-(a[0]-r[0])*(n[u]-t[u]),e=(a[0]-r[0])*(t[u]-r[u])-(a[u]-r[u])*(t[0]-r[0]);if(0===s)return !1;const i=e/s;return c[0]=t[0]+i*(n[0]-t[0]),c[1]=t[u]+i*(n[u]-t[u]),!0}function v$4(t,n,r,o,a){a||(a=t),s$8[0]=t[0],s$8[1]=t[1],s$8[2]=t[2],s$8[3]=1,y$6(s$8,s$8,n),a.length>2&&(a[2]=-s$8[2]),y$6(s$8,s$8,r),i$e(0!==s$8[3]),a[0]=s$8[0]/s$8[3],a[1]=s$8[1]/s$8[3],a[2]=s$8[2]/s$8[3],a[0]=(.5*a[0]+.5)*o[2]+o[0],a[1]=(.5*a[1]+.5)*o[3]+o[1];}function q$3(t,n){return Math.log(t)/Math.log(n)}function y$5(t,n,r,o){t[12]=n,t[13]=r,t[14]=o;}function A$4(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function V$2(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/n)}function $$1(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/r)}function z$2(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function B$2(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function D$1(n,r,o=0){const a=o$j(n,0,I$3);for(let t=0;t<4;t++)r[o+t]=Math.floor(256*J$1(a*G[t]));}function F(t,n=0){let r=0;for(let o=0;o<4;o++)r+=t[n+o]*H$2[o];return r}const G=[1,256,65536,16777216],H$2=[1/256,1/65536,1/16777216,1/4294967296],I$3=F(new Uint8ClampedArray([255,255,255,255]));function J$1(t){return t-Math.floor(t)}function K$1(t,n,o,a,u){const c=t;0===t[11]?(a[0]=2/(n*c[0]),a[1]=2/(o*c[5]),a[2]=(1+c[12])/c[0],a[3]=(1+c[13])/c[5],r$o(u,0,1)):(a[0]=-2/(n*c[0]),a[1]=-2/(o*c[5]),a[2]=(1-c[8])/c[0],a[3]=(1-c[9])/c[5],r$o(u,1,0));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class a$d{constructor(i,s,a,c){this.primitiveIndices=i,this._numIndexPerPrimitive=s,this.indices=a,this.position=c,this.center=n$a(),i$e(i.length>=1),i$e(a.length%this._numIndexPerPrimitive==0),i$e(a.length>=i.length*this._numIndexPerPrimitive),i$e(3===c.size||4===c.size);const{data:o,size:M}=c,d=i.length;let l=M*a[this._numIndexPerPrimitive*i[0]];b$4.clear(),b$4.push(l),this.bbMin=t$k(o[l],o[l+1],o[l+2]),this.bbMax=r$i(this.bbMin);for(let t=0;t<d;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){l=M*a[s+i],b$4.push(l);let t=o[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2]);}}y$7(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let t=0;t<b$4.length;++t){l=b$4.getItemAt(t);const i=o[l]-this.center[0],s=o[l+1]-this.center[1],e=o[l+2]-this.center[2],n=i*i+s*s+e*e;if(n<=m)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,m=this.radius*this.radius;const a=h/r;this.center[0]+=i*a,this.center[1]+=s*a,this.center[2]+=e*a;}b$4.clear();}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(x$6(this.bbMin,this.bbMax)>1){const i=y$7(n$a(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,n=new Uint8Array(s),r=new Array(8);for(let t=0;t<8;++t)r[t]=0;const{data:h,size:b}=this.position;for(let t=0;t<s;++t){let s=0;const e=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=b*this.indices[e],c=h[a],o=h[a+1],M=h[a+2];for(let i=1;i<this._numIndexPerPrimitive;++i){a=b*this.indices[e+i];const t=h[a],s=h[a+1],n=h[a+2];t<c&&(c=t),s<o&&(o=s),n<M&&(M=n);}c<i[0]&&(s|=1),o<i[1]&&(s|=2),M<i[2]&&(s|=4),n[t]=s,++r[s];}let c=0;for(let t=0;t<8;++t)r[t]>0&&++c;if(c<2)return;const o=new Array(8);for(let t=0;t<8;++t)o[t]=r[t]>0?new Uint32Array(r[t]):void 0;for(let t=0;t<8;++t)r[t]=0;for(let t=0;t<s;++t){const i=n[t];o[i][r[i]++]=this.primitiveIndices[t];}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==o[t]&&(this._children[t]=new a$d(o[t],this._numIndexPerPrimitive,this.indices,this.position));}return this._children}static prune(){b$4.prune();}}const b$4=new n$e({deallocator:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r$d{constructor(){this.id=e$b();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class u$c extends r$d{constructor(t,e=[],i=0,s=-1){super(),this._primitiveType=i,this.edgeIndicesLength=s,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,r]of t)r&&this._vertexAttributes.set(n,{...r});if(null==e||0===e.length){const t=h$7(this._vertexAttributes),e=l$d(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e);}else for(const[n,r]of e)r&&(this._indices.set(n,g$a(r)),"position"===n&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength));}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e.data=Array.from(e.data),e.exclusive=!0),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return t$j(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)}computeAttachmentOriginTriangles(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return u$f(i,e,t)}computeAttachmentOriginPoints(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return h$b(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null;}_calculateBoundingInfo(){const t=this.indices.get("position");if(0===t.length)return null;const i=0===this.primitiveType?3:1;i$e(t.length%i==0,"Indexing error: "+t.length+" not divisible by "+i);const s=l$d(t.length/i),r=this.vertexAttributes.get("position");return new a$d(s,i,t,r)}}function h$7(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function g$a(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$7(e){e.code.add(t$i`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i$d=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],s$7=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i$c(o,i=i$d,l=o$g,m=-1,u=1){let f=null;switch(i){case s$7:f=new Float32Array([m,m,0,0,u,m,1,0,m,u,0,1,u,u,1,1]);break;case i$d:default:f=new Float32Array([m,m,u,m,m,u,u,u]);}return new f$d(o,l,{geometry:i},{geometry:h$c.createVertex(o,35044,f)})}function l$b(r,o=i$d,i=o$g){const l=new Float32Array([-1,-1,3,-1,-1,3]);return new f$d(r,i,{geometry:o},{geometry:h$c.createVertex(r,35044,l)})}const m$4=4;function u$b(e,t=m$4){return new r$p(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:t,height:t})}function f$7(e,t,r=m$4){const n=new Uint8Array(r*r*4);for(let o=0;o<n.length;o+=4)n[o+0]=255*t[0],n[o+1]=255*t[1],n[o+2]=255*t[2],n[o+3]=255*t[3];return new r$p(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:r,height:r},n)}function g$9(e){return new r$p(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([255,255,255,255]))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$e(n,o,t){for(let r=0;r<t;++r)o[2*r]=n[r],o[2*r+1]=n[r]-o[2*r];}function r$c(n,t,r,c){for(let l=0;l<c;++l)f$6[0]=n[l],o$e(f$6,e$6,1),t[l]=e$6[0],r[l]=e$6[1];}const f$6=new Float64Array(1),e$6=new Float32Array(2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u$a(t,r){return t$j(t)&&(t=[]),t.push(r),t}function l$a(t,r){if(t$j(t))return t;const s=t.filter((e=>e!==r));return 0===s.length?null:s}function f$5(e){return !!r$m(e)&&!e.visible}function m$3(e,t){const r=new Map;return r.set(0,t.acquire(e,0)),r.set(1,t.acquire(e,7)),r.set(4,t.acquire(e,3)),r.set(3,t.acquire(e,2)),r.set(2,t.acquire(e,1)),r.set(5,t.acquire(e,4)),r.set(7,t.acquire(e,3)),r.set(6,t.acquire(e,3)),r}function p$5(e,t){t.release(e,0),t.release(e,7),t.release(e,3),t.release(e,2),t.release(e,1),t.release(e,4);}function q$2(e,a,o){const u=e.origin.vec3;y$5(h$6,-u[0],-u[1],-u[2]),r$m(e.transformation)?e$c(a,h$6,e.transformation):n$g(a,h$6),o&&(h$d(o,a),o$k(o,o));}function b$3(e,t,r,s,n){g$8[0]=e.get(t,0),g$8[1]=e.get(t,1),g$8[2]=e.get(t,2),o$e(g$8,j$4,3),r.set(n,0,j$4[0]),s.set(n,0,j$4[1]),r.set(n,1,j$4[2]),s.set(n,1,j$4[3]),r.set(n,2,j$4[4]),s.set(n,2,j$4[5]);}const g$8=new Float64Array(3),j$4=new Float32Array(6),h$6=e$d();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class z$1{constructor(){this._transform=e$d(),this._transformInverse=new g$7({value:this._transform},h$d,e$d),this._transformInverseTranspose=new g$7(this._transformInverse,o$k,e$d),this._transformTranspose=new g$7({value:this._transform},o$k,e$d),this._transformInverseRotation=new g$7({value:this._transform},y$8,e$e);}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate();}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){n$g(this._transform,t);}multiplyTransform(t){e$c(this._transform,this._transform,t);}set(t){n$g(this._transform,t),this.invalidateLazyTransforms();}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this.invalidateLazyTransforms();}}class g$7{constructor(t,s,i){this.original=t,this.update=s,this.dirty=!0,this.transform=i();}invalidate(){this.dirty=!0;}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}class S$1{constructor(t=0){this.offset=t,this.tmpVertex=n$a();}applyToVertex(t,s,i){const r=t+this.localOrigin[0],e=s+this.localOrigin[1],o=i+this.localOrigin[2],n=this.offset/Math.sqrt(r*r+e*e+o*o);return this.tmpVertex[0]=t+r*n,this.tmpVertex[1]=s+e*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(t){const s=t[0]+this.localOrigin[0],i=t[1]+this.localOrigin[1],r=t[2]+this.localOrigin[2],e=t[3]+this.localOrigin[0],o=t[4]+this.localOrigin[1],n=t[5]+this.localOrigin[2],h=this.offset/Math.sqrt(s*s+i*i+r*r);t[0]+=s*h,t[1]+=i*h,t[2]+=r*h;const a=this.offset/Math.sqrt(e*e+o*o+n*n);return t[3]+=e*a,t[4]+=o*a,t[5]+=n*a,t}}class T$1{constructor(t=0){this.offset=t,this.componentLocalOriginLength=0,this.tmpVertex=n$a(),this.mbs=n$c(),this.obb={center:n$a(),halfSize:n$h(),quaternion:null};}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);}applyToVertex(t,s,i){const r=t,e=s,o=i+this.componentLocalOriginLength,n=this.offset/Math.sqrt(r*r+e*e+o*o);return this.tmpVertex[0]=t+r*n,this.tmpVertex[1]=s+e*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(t){const s=t[0],i=t[1],r=t[2]+this.componentLocalOriginLength,e=t[3],o=t[4],n=t[5]+this.componentLocalOriginLength,h=this.offset/Math.sqrt(s*s+i*i+r*r);t[0]+=s*h,t[1]+=i*h,t[2]+=r*h;const a=this.offset/Math.sqrt(e*e+o*o+n*n);return t[3]+=e*a,t[4]+=o*a,t[5]+=n*a,t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/s;return this.mbs[0]=t[0]+t[0]*i,this.mbs[1]=t[1]+t[1]*i,this.mbs[2]=t[2]+t[2]*i,this.mbs[3]=t[3]+t[3]*this.offset/s,this.mbs}applyToObb(t){const s=t.center,i=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.obb.center[0]=s[0]+s[0]*i,this.obb.center[1]=s[1]+s[1]*i,this.obb.center[2]=s[2]+s[2]*i,P$6(this.obb.halfSize,t.halfSize,t.quaternion),u$e(this.obb.halfSize,this.obb.halfSize,t.center);const r=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*r,this.obb.halfSize[1]+=this.obb.halfSize[1]*r,this.obb.halfSize[2]+=this.obb.halfSize[2]*r,c$b(this.obb.halfSize,this.obb.halfSize,t.center),w$4(j$3,t.quaternion),P$6(this.obb.halfSize,this.obb.halfSize,j$3),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=t.quaternion,this.obb}}class q$1{constructor(t=0){this.offset=t,this.sphere=_$3(),this.tmpVertex=n$a();}applyToVertex(t,s,i){const r=this.objectTransform.transform;let e=r[0]*t+r[4]*s+r[8]*i+r[12],o=r[1]*t+r[5]*s+r[9]*i+r[13],n=r[2]*t+r[6]*s+r[10]*i+r[14];const h=this.offset/Math.sqrt(e*e+o*o+n*n);e+=e*h,o+=o*h,n+=n*h;const a=this.objectTransform.inverse;return this.tmpVertex[0]=a[0]*e+a[4]*o+a[8]*n+a[12],this.tmpVertex[1]=a[1]*e+a[5]*o+a[9]*n+a[13],this.tmpVertex[2]=a[2]*e+a[6]*o+a[10]*n+a[14],this.tmpVertex}applyToMinMax(t,s){const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i;const r=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*r,s[1]+=s[1]*r,s[2]+=s[2]*r;}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const i=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*i,t[4]+=t[4]*i,t[5]+=t[5]*i,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/s;return this.sphere[0]=t[0]+t[0]*i,this.sphere[1]=t[1]+t[1]*i,this.sphere[2]=t[2]+t[2]*i,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const x$4=new q$1;function _$2(s){return r$m(s)?(x$4.offset=s,x$4):null}const y$4=new T$1;function M$3(s){return r$m(s)?(y$4.offset=s,y$4):null}const d$7=new S$1;function V$1(s){return r$m(s)?(d$7.offset=s,d$7):null}const O$1="terrain",j$3=e$f();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i$b(e,t){return new p$4(e,h$5,t)}function r$b(e,t){const{curvatureDependent:a,scaleStart:i,scaleFallOffRange:r}=h$5;return new p$4(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:v$3.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:v$3.curvatureDependent.max.scaleFallOffFactor}},scaleStart:i,scaleFallOffRange:r,minPixelSize:v$3.minPixelSize},t)}function n$7(e){return Math.abs(e*e*e)}function l$9(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x$3.scale=Math.min(i.divisor/(t-i.offset),1),x$3.factor=n$7(e),x$3.minPixelSize=i.minPixelSize,x$3.paddingPixels=r,x$3}function s$6(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function c$8(t,a){return Math.max(m$9(t*a.scale,t,a.factor),s$6(t,a))}function u$9(e,t,a){const i=l$9(e,t,a);return i.minPixelSize=0,i.paddingPixels=0,c$8(1,i)}function d$6(e,t,a,i){i.scale=u$9(e,t,a),i.factor=0,i.minPixelSize=a.parameters.minPixelSize,i.paddingPixels=a.paddingPixelsOverride;}function f$4(e,t,a=[0,0]){const i=Math.min(Math.max(t.scale,s$6(e[1],t)/e[1]),1);return a[0]=e[0]*i,a[1]=e[1]*i,a}function m$2(e,t,a,i){return c$8(e,l$9(t,a,i))}class p$4{constructor(e,t,a,i=g$6(),r){this.viewingMode=e,this.description=t,this.ellipsoidRadius=a,this.parameters=i,this._paddingPixelsOverride=r,2===this.viewingMode?(this.coverageCompensation=this.surfaceCoverageCompensationLocal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersLocal):(this.coverageCompensation=this.surfaceCoverageCompensationGlobal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersGlobal);}get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}update(e){return (!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this.calculateParameters(e,this.ellipsoidRadius,this.parameters),!0)}overridePadding(e){return e!==this.paddingPixelsOverride?new p$4(this.viewingMode,this.description,this.ellipsoidRadius,this.parameters,e):this}calculateParameters(e,t,a){const{scaleStart:i,scaleFallOffRange:r,minPixelSize:n}=this.description,{fovY:l,distance:s}=e,c=this.calculateCurvatureDependentParameters(e,t),o=this.coverageCompensation(e,t,c),{tiltAngle:u,scaleFallOffFactor:d}=c,f=Math.sin(u)*s,m=.5*Math.PI-u-l*(.5-i*o),p=f/Math.cos(m),h=m+l*r*o,v=(p-d*(f/Math.cos(h)))/(1-d);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=v,a.divisor=p-v,a.minPixelSize=n,a}calculateCurvatureDependentParametersLocal(e,t,a=P$3){return a.tiltAngle=this.description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this.description.curvatureDependent.min.scaleFallOffFactor,a}calculateCurvatureDependentParametersGlobal(t,i,r=P$3){const n=this.description.curvatureDependent,l=1+t.distance/i,s=Math.sqrt(l*l-1),[c,o]=[n.min.curvature,n.max.curvature],u=o$j((s-c)/(o-c),0,1),[d,f]=[n.min,n.max];return r.tiltAngle=m$9(d.tiltAngle,f.tiltAngle,u),r.scaleFallOffFactor=m$9(d.scaleFallOffFactor,f.scaleFallOffFactor,u),r}surfaceCoverageCompensationLocal(e,t,a){return (e.fovY-a.tiltAngle)/e.fovY}surfaceCoverageCompensationGlobal(e,t,a){const i=t*t,r=a.tiltAngle+.5*Math.PI,{fovY:n,distance:l}=e,s=l*l+i-2*Math.cos(r)*l*t,c=Math.sqrt(s),o=Math.sqrt(s-i);return (Math.acos(o/c)-Math.asin(t/(c/Math.sin(r)))+.5*n)/n}}const h$5={curvatureDependent:{min:{curvature:b$6(10),tiltAngle:b$6(12),scaleFallOffFactor:.5},max:{curvature:b$6(70),tiltAngle:b$6(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},v$3={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function g$6(){return {camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0}}const x$3={scale:0,factor:0,minPixelSize:0,paddingPixels:0},P$3={tiltAngle:0,scaleFallOffFactor:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s$5=s=>{class e extends s{constructor(){super(...arguments),this._isDisposed=!1;}dispose(){for(const e of null!=(s=this._managedDisposables)?s:[]){var s;const i=this[e];this[e]=null,i&&"function"==typeof i.dispose&&i.dispose();}this._isDisposed=!0;}get isDisposed(){return this._isDisposed}}return e};class e$5 extends(s$5(class{})){}function i$a(){return (s,e)=>{var i,o;s.hasOwnProperty("_managedDisposables")||(s._managedDisposables=null!=(i=null==(o=s._managedDisposables)?void 0:o.slice())?i:[]);s._managedDisposables.unshift(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$d extends e$5{constructor(e){super(),this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output;}get technique(){return this._technique}getPipelineState(e,t){return this.technique.pipeline}ensureResources(e){return 2}ensureParameters(e){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class i$9 extends t$d{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquire(this._textureId),this._textureNormal=this._acquire(e.normalTextureId),this._textureEmissive=this._acquire(e.emissiveTextureId),this._textureOcclusion=this._acquire(e.occlusionTextureId),this._textureMetallicRoughness=this._acquire(e.metallicRoughnessTextureId);}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear();}updateTexture(e){e!==this._textureId&&(this._release(this._textureId),this._textureId=e,this._texture=this._acquire(this._textureId));}bindTextures(t){r$m(this._texture)&&t.bindTexture(this._texture.glTexture,"tex"),r$m(this._textureNormal)&&t.bindTexture(this._textureNormal.glTexture,"normalTexture"),r$m(this._textureEmissive)&&t.bindTexture(this._textureEmissive.glTexture,"texEmission"),r$m(this._textureOcclusion)&&t.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),r$m(this._textureMetallicRoughness)&&t.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness");}bindTextureScale(t){const r=r$m(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1);}_acquire(e){if(!t$j(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_release(e){t$j(e)||(this._textureIDs.delete(e),this._textureRepository.release(e));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p$3=a$i();function h$4(t,n,e,i,o,r,s){if(!f$5(n))if(t.boundingInfo){i$e(0===t.primitiveType);const n=e.tolerance;g$5(t.boundingInfo,i,o,n,r,s);}else {const n=t.indices.get("position"),e=t.vertexAttributes.get("position");M$2(i,o,0,n.length/3,n,e,void 0,r,s);}}const d$5=n$a();function g$5(t,i,o,r,s,c){if(t$j(t))return;const l=j$2(i,o,d$5);if(q$6(p$3,t.getBBMin()),w$5(p$3,t.getBBMax()),r$m(s)&&s.applyToAabb(p$3),A$3(p$3,i,l,r)){const{primitiveIndices:n,indices:e,position:f}=t,a=n?n.length:e.length/3;if(a>U$1){const n=t.getChildren();if(void 0!==n){for(let t=0;t<8;++t)void 0!==n[t]&&g$5(n[t],i,o,r,s,c);return}}M$2(i,o,0,a,e,f,n,s,c);}}const x$2=n$a();function M$2(t,n,i,o,r,s,c,f,a){if(c)return b$2(t,n,i,o,r,s,c,f,a);const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,M=n[2]-h;for(let b=i,v=3*i;b<o;++b){let t=u*r[v++],n=l[t++],i=l[t++],o=l[t];t=u*r[v++];let s=l[t++],c=l[t++],y=l[t];t=u*r[v++];let j=l[t++],A=l[t++],L=l[t];r$m(f)&&([n,i,o]=f.applyToVertex(n,i,o,b),[s,c,y]=f.applyToVertex(s,c,y,b),[j,A,L]=f.applyToVertex(j,A,L,b));const V=s-n,B=c-i,z=y-o,E=j-n,I=A-i,N=L-o,P=g*N-I*M,U=M*E-N*d,S=d*I-E*g,W=V*P+B*U+z*S;if(Math.abs(W)<=Number.EPSILON)continue;const O=m-n,k=p-i,R=h-o,C=O*P+k*U+R*S;if(W>0){if(C<0||C>W)continue}else if(C>0||C<W)continue;const H=k*z-B*R,X=R*V-z*O,Y=O*B-V*k,_=d*H+g*X+M*Y;if(W>0){if(_<0||C+_>W)continue}else if(_>0||C+_<W)continue;const q=(E*H+I*X+N*Y)/W;if(q>=0){a(q,T(V,B,z,E,I,N,x$2),b);}}}function b$2(t,n,i,o,r,s,c,f,a){const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,M=n[2]-h;for(let b=i;b<o;++b){const t=c[b];let n=3*t,i=u*r[n++],o=l[i++],s=l[i++],v=l[i];i=u*r[n++];let y=l[i++],j=l[i++],A=l[i];i=u*r[n];let L=l[i++],V=l[i++],B=l[i];r$m(f)&&([o,s,v]=f.applyToVertex(o,s,v,b),[y,j,A]=f.applyToVertex(y,j,A,b),[L,V,B]=f.applyToVertex(L,V,B,b));const z=y-o,E=j-s,I=A-v,N=L-o,P=V-s,U=B-v,S=g*U-P*M,W=M*N-U*d,O=d*P-N*g,k=z*S+E*W+I*O;if(Math.abs(k)<=Number.EPSILON)continue;const R=m-o,C=p-s,H=h-v,X=R*S+C*W+H*O;if(k>0){if(X<0||X>k)continue}else if(X>0||X<k)continue;const Y=C*I-E*H,_=H*z-I*R,q=R*E-z*C,w=d*Y+g*_+M*q;if(k>0){if(w<0||X+w>k)continue}else if(w>0||X+w<k)continue;const D=(N*Y+P*_+U*q)/k;if(D>=0){a(D,T(z,E,I,N,P,U,x$2),t);}}}const v$2=n$a(),y$3=n$a();function T(t,n,e,s,c,f,a){return o$i(v$2,t,n,e),o$i(y$3,s,c,f),_$4(a,v$2,y$3),j$7(a,a),a}function j$2(t,n,e){return o$i(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function A$3(t,n,e,i){return L$2(t,n,e,i,1/0)}function L$2(t,n,e,i,o){const r=(t[0]-i-n[0])*e[0],s=(t[3]+i-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-i-n[1])*e[1],l=(t[4]+i-n[1])*e[1];if(f=Math.min(f,Math.max(a,l)),f<0)return !1;if(c=Math.max(c,Math.min(a,l)),c>f)return !1;const u=(t[2]-i-n[2])*e[2],m=(t[5]+i-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<o)}function V(n,e,i,o,r){let s=(i.screenLength||0)*n.pixelRatio;r&&(s=m$2(s,o,e,r));const c=s*Math.tan(.5*n.fovY)/(.5*n.fullHeight);return o$j(c*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function B$1(t,n,e){if(!t)return;const i=t.parameters,o=t.paddingPixelsOverride;n.setUniform4f(e,i.divisor,i.offset,i.minPixelSize,o);}function z(t,n){const e=n?z(n):{};for(const i in t){let n=t[i];n&&n.forEach&&(n=N(n)),null==n&&i in e||(e[i]=n);}return e}function E$2(t,n){let e=!1;for(const i in n){const o=n[i];void 0!==o&&(e=!0,Array.isArray(o)?t[i]=o.slice():t[i]=o);}return e}function I$2(n,e,i,o,r){if(!e.options.selectionMode)return;const s=n.vertexAttributes.get("position").data,c=n.vertexAttributes.get("size"),f=c&&c.data[0],a=i[0],l=i[1],u=((f+o)/2+4)*n.screenToWorldRatio;let m=Number.MAX_VALUE;for(let p=0;p<s.length-5;p+=3){const n=s[p],e=s[p+1],i=a-n,o=l-e,r=s[p+3]-n,c=s[p+4]-e,f=o$j((r*i+c*o)/(r*r+c*c),0,1),u=r*f-i,h=c*f-o,d=u*u+h*h;d<m&&(m=d);}m<u*u&&r();}function N(t){const n=[];return t.forEach((t=>n.push(t))),n}const P$2={multiply:1,ignore:2,replace:3,tint:4},U$1=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class a$c extends r$d{constructor(e,r){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=o$g,this._params=z(e,r),this.validateParameterValues(this._params);}dispose(){}get params(){return this._params}update(e){return !1}setParameterValues(e){E$2(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged());}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged());}isVisibleInPass(e){return !0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged());}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged());}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){r$m(this.materialRepository)&&this.materialRepository.materialChanged(this);}}function n$6(e,r){return e.isVisible()&&e.isVisibleInPass(r.pass)&&0!=(e.renderOccluded&r.renderOccludedMask)}const d$4={renderOccluded:1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$5(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=2*t[i];r[o]=e[f],r[o+1]=e[f+1],o+=s;}}function i$8(t,e,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}else for(let c=0;c<i;++c){const f=3*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}}function c$7(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}else for(let c=0;c<i;++c){const f=4*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}}function u$8(t,e,f,o,r,s=1){if(!f)return void i$8(t,e,o,r,s);const n=o.typedBuffer,c=o.typedBufferStride,l=t.length,d=f[0],u=f[1],a=f[2],p=f[4],y=f[5],g=f[6],B=f[8],h=f[9],m=f[10],b=f[12],z=f[13],S=f[14];if(r*=c,1===s)for(let i=0;i<l;++i){const f=3*t[i],o=e[f],s=e[f+1],l=e[f+2];n[r]=d*o+p*s+B*l+b,n[r+1]=u*o+y*s+h*l+z,n[r+2]=a*o+g*s+m*l+S,r+=c;}else for(let i=0;i<l;++i){const f=3*t[i],o=e[f],l=e[f+1],k=e[f+2],F=d*o+p*l+B*k+b,v=u*o+y*l+h*k+z,q=a*o+g*l+m*k+S;for(let t=0;t<s;++t)n[r]=F,n[r+1]=v,n[r+2]=q,r+=c;}}function a$b(e,f,o,r,s,n=1){if(!o)return void i$8(e,f,r,s,n);const c=o,l=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=c[0],p=c[1],y=c[2],g=c[4],B=c[5],h=c[6],m=c[8],b=c[9],z=c[10],S=!G$2(c),k=1e-6,F=1-k;if(s*=d,1===n)for(let t=0;t<u;++t){const o=3*e[t],r=f[o],n=f[o+1],i=f[o+2];let c=a*r+g*n+m*i,u=p*r+B*n+b*i,v=y*r+h*n+z*i;if(S){const t=c*c+u*u+v*v;if(t<F&&t>k){const e=1/Math.sqrt(t);c*=e,u*=e,v*=e;}}l[s+0]=c,l[s+1]=u,l[s+2]=v,s+=d;}else for(let t=0;t<u;++t){const o=3*e[t],r=f[o],i=f[o+1],c=f[o+2];let u=a*r+g*i+m*c,v=p*r+B*i+b*c,q=y*r+h*i+z*c;if(S){const t=u*u+v*v+q*q;if(t<F&&t>k){const e=1/Math.sqrt(t);u*=e,v*=e,q*=e;}}for(let t=0;t<n;++t)l[s+0]=u,l[s+1]=v,l[s+2]=q,s+=d;}}function p$2(e,f,o,r,s,n=1){if(!o)return void c$7(e,f,r,s,n);const i=o,l=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=i[0],p=i[1],y=i[2],g=i[4],B=i[5],h=i[6],m=i[8],b=i[9],z=i[10],S=!G$2(i),k=1e-6,F=1-k;if(s*=d,1===n)for(let t=0;t<u;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],c=f[o+3];let u=a*r+g*n+m*i,v=p*r+B*n+b*i,q=y*r+h*n+z*i;if(S){const t=u*u+v*v+q*q;if(t<F&&t>k){const e=1/Math.sqrt(t);u*=e,v*=e,q*=e;}}l[s+0]=u,l[s+1]=v,l[s+2]=q,l[s+3]=c,s+=d;}else for(let t=0;t<u;++t){const o=4*e[t],r=f[o],i=f[o+1],c=f[o+2],u=f[o+3];let v=a*r+g*i+m*c,q=p*r+B*i+b*c,M=y*r+h*i+z*c;if(S){const t=v*v+q*q+M*M;if(t<F&&t>k){const e=1/Math.sqrt(t);v*=e,q*=e,M*=e;}}for(let t=0;t<n;++t)l[s+0]=v,l[s+1]=q,l[s+2]=M,l[s+3]=u,s+=d;}}function y$2(t,e,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=t.length;if(r*=i,1===s){if(4===f)for(let l=0;l<c;++l){const f=4*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}else if(4===f)for(let l=0;l<c;++l){const f=4*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}function g$4(t,i,c,l,d,g){for(const B of i.fieldNames){const i=t.vertexAttributes.get(B),h=t.indices.get(B);if(i&&h)switch(B){case"position":{i$e(3===i.size);const t=d.getField(B,i$i);t&&u$8(h,i.data,c,t,g);break}case"normal":{i$e(3===i.size);const t=d.getField(B,i$i);t&&a$b(h,i.data,l,t,g);break}case"uv0":{i$e(2===i.size);const t=d.getField(B,u$g);t&&n$5(h,i.data,t,g);break}case"color":{i$e(3===i.size||4===i.size);const t=d.getField(B,x$7);t&&y$2(h,i.data,i.size,t,g);break}case"symbolColor":{i$e(3===i.size||4===i.size);const t=d.getField(B,x$7);t&&y$2(h,i.data,i.size,t,g);break}case"tangent":{i$e(4===i.size);const t=d.getField(B,c$e);t&&p$2(h,i.data,l,t,g);break}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function c$6(e,s){if(s.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),s.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=t$i`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=t$i`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=s.sliceHighlightDisabled?t$i`#define highlightSlice(_color_, _pos_) (_color_)`:t$i`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(c);}else {const i=t$i`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i);}}function l$8(e,s,i){r$a(e,s,i.slicePlane,i.origin);}function r$a(a,o,c,l){o.slicePlaneEnabled&&(r$m(c)?(l?(c$b(t$c,c.origin,l),a.setUniform3fv("slicePlaneOrigin",t$c)):a.setUniform3fv("slicePlaneOrigin",c.origin),a.setUniform3fv("slicePlaneBasis1",c.basis1),a.setUniform3fv("slicePlaneBasis2",c.basis2)):(a.setUniform3fv("slicePlaneBasis1",f$e),a.setUniform3fv("slicePlaneBasis2",f$e),a.setUniform3fv("slicePlaneOrigin",f$e)));}const t$c=n$a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$9(a){a.vertex.code.add(t$i`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),a.vertex.code.add(t$i`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),a.vertex.code.add(t$i`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),a.vertex.code.add(t$i`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),a.vertex.code.add(t$i`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),a.vertex.code.add(t$i`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),a.vertex.code.add(t$i`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);}function c$5(e,r){if(r.screenSizePerspective){B$1(r.screenSizePerspective,e,"screenSizePerspective");const c=r.screenSizePerspectiveAlignment||r.screenSizePerspective;B$1(c,e,"screenSizePerspectiveAlignment");}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a$a(a){a.code.add(t$i`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a$9(a){a.include(a$a),a.code.add(t$i`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t$b=r$k(1,1,0,1),o$d=r$k(1,0,1,1);function r$8(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",t$b).add("unoccludedHighlightFlag","vec4",o$d),e.fragment.code.add(t$i`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`);}function g$3(e,i){e.bindTexture(i.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,i.inverseViewport[0],i.inverseViewport[1]);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$4(e,o){o.vvInstancingEnabled&&(o.vvSize||o.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),o.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(t$i`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(t$i`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${o.vvInstancingEnabled?t$i`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(t$i`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),o.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(t$i`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${o.vvInstancingEnabled?t$i`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(t$i`vec4 vvColor() { return vec4(1.0); }`);}function o$c(v,e){e.vvSizeEnabled&&(v.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),v.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),v.setUniform3fv("vvSizeOffset",e.vvSizeOffset),v.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(v.setUniform1fv("vvColorValues",e.vvColorValues),v.setUniform4fv("vvColorColors",e.vvColorColors));}function r$7(v,e){o$c(v,e),e.vvOpacityEnabled&&(v.setUniform1fv("vvOpacityValues",e.vvOpacityValues),v.setUniform1fv("vvOpacityOpacities",e.vvOpacityOpacities));}function t$a(v,e){o$c(v,e),e.vvSizeEnabled&&(v.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),v.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const d$3=.1,o$b=.001;function r$6(d,r){const e=d.fragment;switch(r.alphaDiscardMode){case 0:e.code.add(t$i`
        #define discardOrAdjustAlpha(color) { if (color.a < ${t$i.float(o$b)}) { discard; } }
      `);break;case 1:e.code.add(t$i`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:e.uniforms.add("textureAlphaCutoff","float"),e.code.add(t$i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:d.fragment.uniforms.add("textureAlphaCutoff","float"),d.fragment.code.add(t$i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$9(t,l){const c=t.vertex.code;l.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(t.include(r$9),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),c.add(t$i`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===l.viewingMode?t$i`vec3 worldNormal = normalize(worldPos + localOrigin);`:t$i`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${l.screenSizePerspectiveEnabled?t$i`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:t$i`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):c.add(t$i`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);}function l$7(e,r,t){if(!r.verticalOffset)return;const l=c$4(r.verticalOffset,t.camera.fovY,t.camera.fullViewport[3]),i=t.camera.pixelRatio||1;e.setUniform4f("verticalOffset",l.screenLength*i,l.perDistance,l.minWorldLength,l.maxWorldLength);}function c$4(e,r,t,l=i$7){return l.screenLength=e.screenLength,l.perDistance=Math.tan(.5*r)/(.5*t),l.minWorldLength=e.minWorldLength,l.maxWorldLength=e.maxWorldLength,l}const i$7={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$5(r,t){r.fragment.uniforms.add("terrainDepthTexture","sampler2D"),r.fragment.uniforms.add("cameraNearFar","vec2"),r.fragment.uniforms.add("inverseViewport","vec2"),r.fragment.code.add(t$i`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `);}function t$8(e,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&e.bindTexture(r.terrainLinearDepthTexture,"terrainDepthTexture");}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u$7=e$g(770,1,771,771),e$3=t$l(1,1),o$a=t$l(0,771);function c$3(n){return 2===n?null:1===n?o$a:e$3}function l$6(n){return 2===n?l$e:null}const f$3=5e5,i$6={factor:-1,units:-2};function s$4(n){return n?i$6:null}function a$8(n){return 3===n||2===n?513:515}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a$7={func:513},n$4={func:519},f$2={mask:255},i$5={mask:0},s$3=a=>({function:{func:517,ref:a,mask:a},operation:{fail:7680,zFail:7680,zPass:7680}}),o$9=a=>({function:{func:519,ref:a,mask:a},operation:{fail:7680,zFail:7680,zPass:7681}}),c$2={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},t$7={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}},u$6={function:{func:514,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}},e$2={function:{func:517,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$1(e,o){e.fragment.include(a$a),3===o.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(t$i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===o.output&&e.fragment.code.add(t$i`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$6(t){t.vertex.code.add(t$i`const float PI = 3.141592653589793;`),t.fragment.code.add(t$i`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$5(t){t.fragment.include(a$a),t.fragment.uniforms.add("uShadowMapTex","sampler2D"),t.fragment.uniforms.add("uShadowMapNum","int"),t.fragment.uniforms.add("uShadowMapDistance","vec4"),t.fragment.uniforms.add("uShadowMapMatrix","mat4",4),t.fragment.uniforms.add("uDepthHalfPixelSz","float"),t.fragment.code.add(t$i`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`);}function o$8(a,e){e.shadowMappingEnabled&&(e.shadowMap.bind(a),e.shadowMap.bindView(a,e.origin));}function i$4(a,e,t){e.shadowMappingEnabled&&e.shadowMap.bindView(a,t);}function l$5(a,e){e.shadowMappingEnabled&&e.shadowMap.bindView(a,e.origin);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a$6(a,r){0===r.output&&r.receiveShadows?(a.varyings.add("linearDepth","float"),a.vertex.code.add(t$i`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===r.output||3===r.output?(a.varyings.add("linearDepth","float"),a.vertex.uniforms.add("cameraNearFar","vec2"),a.vertex.code.add(t$i`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):a.vertex.code.add(t$i`void forwardLinearDepth() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$4(t){const a=t.fragment.code;a.add(t$i`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(t$i`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(t$i`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a$5(a,n){const r=a.fragment.code;a.include(t$6),3===n.pbrMode||4===n.pbrMode?(r.add(t$i`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${n.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(t$i`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(t$i`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(t$i`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(t$i`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==n.pbrMode&&2!==n.pbrMode||(a.include(t$4),r.add(t$i`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(t$i`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(t$i`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(t$i`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(t$i`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(t$i`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class u$5{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,n$i(e).then((e=>this.svgAlwaysPremultipliesAlpha=!e));}get doublePrecisionRequiresObfuscation(){if(t$j(this._doublePrecisionRequiresObfuscation)){const e=h$3(this.context,!1),n=h$3(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===n||e/n>5);}return this._doublePrecisionRequiresObfuscation}}let p$1=null;function f$1(n){return (t$j(p$1)||p$1.context!==n)&&(p$1=new u$5(n)),p$1}function v$1(e){r$m(p$1)&&p$1.context===e&&(p$1=null);}function h$3(e,n){const l=new o$l(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});function u(t,o){const i=new n$d(e,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${n?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),s=new Float32Array(6);o$e(t,s,3);const a=new Float32Array(6);return o$e(o,a,3),e.useProgram(i),i.setUniform3f("u_highA",s[0],s[2],s[4]),i.setUniform3f("u_lowA",s[1],s[3],s[5]),i.setUniform3f("u_highB",a[0],a[2],a[4]),i.setUniform3f("u_lowB",a[1],a[3],a[5]),i}const p=h$c.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),f=new f$d(e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:p}),v=t$k(5633261.287538229,2626832.878767164,1434988.0495278358),h=t$k(5633271.46742708,2626873.6381334523,1434963.231608387),m=u(v,h),d=e.getBoundFramebufferObject(),{x:b,y:A,width:g,height:_}=e.getViewport();e.bindFramebuffer(l),e.setViewport(0,0,1,1),e.bindVAO(f),e.drawArrays(5,0,4);const w=new Uint8Array(4);l.readPixels(0,0,1,1,6408,5121,w),m.dispose(),f.dispose(!1),p.dispose(),l.dispose(),e.setViewport(b,A,g,_),e.bindFramebuffer(d);const F$1=(v[2]-h[2])/25,B=F(w);return Math.abs(F$1-B)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$4({code:e},i){i.doublePrecisionRequiresObfuscation?e.add(t$i`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(t$i`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}function o$7(c){return !!s$c("force-double-precision-obfuscation")||f$1(c).doublePrecisionRequiresObfuscation}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$6(e,n){n.instanced&&n.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),n.instancedDoublePrecision&&(e.vertex.include(r$4,n),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[t$i`
    vec3 calculateVPos() {
      ${n.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,t$i`
    vec3 subtractOrigin(vec3 _pos) {
      ${n.instancedDoublePrecision?t$i`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,t$i`
    vec3 dpNormal(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,t$i`
    vec3 dpNormalView(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,n.vertexTangents?t$i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${n.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:t$i``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===n.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4]);}!function(e){class i{}function r(e,i){r$c(i,t$3,a$4,3),e.setUniform3fv("viewOriginHi",t$3),e.setUniform3fv("viewOriginLo",a$4);}e.Uniforms=i,e.bindCustomOrigin=r;}(o$6||(o$6={}));const t$3=n$a(),a$4=n$a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$2(t,d){1===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(t$i`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(t$i`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===d.attributeTextureCoordinates&&t.vertex.code.add(t$i`void forwardTextureCoordinates() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$1(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(t$i`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u$4(u,a){u.include(t$2,a),u.fragment.code.add(t$i`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===a.attributeTextureCoordinates&&u.fragment.code.add(t$i`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===a.attributeTextureCoordinates&&(u.include(t$1),u.fragment.code.add(t$i`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t=t$m(0,.6,.2);function r$3(e,t){const r=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(u$4,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(t$i`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(t$i`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(t$i`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(t$i`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(t$i`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(t$i`float getBakedOcclusion() { return 1.0; }`),r.code.add(t$i`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(t$i`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);}function a$3(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add(t$i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$5(o){const d=t$i`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.fragment.code.add(d),o.vertex.code.add(d);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$4(o,d){0===d.normalType&&(o.attributes.add("normal","vec3"),o.vertex.code.add(t$i`vec3 normalModel() {
return normal;
}`)),1===d.normalType&&(o.include(o$5),o.attributes.add("normalCompressed","vec2"),o.vertex.code.add(t$i`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===d.normalType&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(t$i`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$3(o){o.attributes.add("position","vec3"),o.vertex.code.add(t$i`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function l$4(l){l.vertex.code.add(t$i`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${t$i.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${t$i.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${t$i.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${t$i.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$2(r,l){l.symbolColor?(r.include(l$4),r.attributes.add("symbolColor","vec4"),r.varyings.add("colorMixMode","mediump float")):r.fragment.uniforms.add("colorMixMode","int"),l.symbolColor?r.vertex.code.add(t$i`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):r.vertex.code.add(t$i`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$1(r,e){e.attributeColor?(r.attributes.add("color","vec4"),r.varyings.add("vColor","vec4"),r.vertex.code.add(t$i`void forwardVertexColor() { vColor = color; }`),r.vertex.code.add(t$i`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):r.vertex.code.add(t$i`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function d$2(o,r){o.include(o$3),o.vertex.include(r$4,r),o.varyings.add("vPositionWorldCameraRelative","vec3"),o.varyings.add("vPosition_view","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),o.vertex.uniforms.add("uTransform_ProjFromView","mat4"),o.vertex.code.add(t$i`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),o.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.fragment.code.add(t$i`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`);}!function(i){class m{constructor(){this.worldFromModel_RS=e$e(),this.worldFromModel_TH=n$a(),this.worldFromModel_TL=n$a();}}i.ModelTransform=m;class a{constructor(){this.worldFromView_TH=n$a(),this.worldFromView_TL=n$a(),this.viewFromCameraRelative_RS=e$e(),this.projFromView=e$d();}}function d(o,r){o.setUniformMatrix3fv("uTransform_WorldFromModel_RS",r.worldFromModel_RS),o.setUniform3fv("uTransform_WorldFromModel_TH",r.worldFromModel_TH),o.setUniform3fv("uTransform_WorldFromModel_TL",r.worldFromModel_TL);}function s(o,r){o.setUniform3fv("uTransform_WorldFromView_TH",r.worldFromView_TH),o.setUniform3fv("uTransform_WorldFromView_TL",r.worldFromView_TL),o.setUniformMatrix4fv("uTransform_ProjFromView",r.projFromView),o.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",r.viewFromCameraRelative_RS);}i.ViewProjectionTransform=a,i.bindModelTransform=d,i.bindViewProjTransform=s;}(d$2||(d$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function l$3(l,e){0===e.normalType||1===e.normalType?(l.include(o$4,e),l.varyings.add("vNormalWorld","vec3"),l.varyings.add("vNormalView","vec3"),l.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),l.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),l.vertex.code.add(t$i`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===e.normalType?(l.include(d$2,e),l.varyings.add("vNormalWorld","vec3"),l.vertex.code.add(t$i`
    void forwardNormal() {
      vNormalWorld = ${1===e.viewingMode?t$i`normalize(vPositionWorldCameraRelative);`:t$i`vec3(0.0, 0.0, 1.0);`}
    }
    `)):l.vertex.code.add(t$i`void forwardNormal() {}`);}!function(o){function r(o,r){o.setUniformMatrix4fv("viewNormal",r);}o.bindUniforms=r;}(l$3||(l$3={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u$3(u,c){const p=u.vertex.code,v=u.fragment.code;1!==c.output&&3!==c.output||(u.include(r$h,{linearDepth:!0}),u.include(t$2,c),u.include(e$4,c),u.include(e$1,c),u.include(c$6,c),u.vertex.uniforms.add("cameraNearFar","vec2"),u.varyings.add("depth","float"),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(t$i`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),u.include(r$6,c),v.add(t$i`
      void main(void) {
        discardBySlice(vpos);
        ${c.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===c.output&&(u.include(r$h,{linearDepth:!1}),u.include(o$4,c),u.include(l$3,c),u.include(t$2,c),u.include(e$4,c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),u.vertex.uniforms.add("viewNormal","mat4"),u.varyings.add("vPositionView","vec3"),p.add(t$i`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===c.normalType?t$i`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),u.include(c$6,c),u.include(r$6,c),v.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===c.normalType?t$i`
            vec3 normal = screenDerivativeNormal(vPositionView);`:t$i`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===c.output&&(u.include(r$h,{linearDepth:!1}),u.include(t$2,c),u.include(e$4,c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(t$i`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),u.include(c$6,c),u.include(r$6,c),u.include(r$8),v.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$3(n,a){const r=n.fragment;a.vertexTangents?(n.attributes.add("tangent","vec4"),n.varyings.add("vTangent","vec4"),2===a.doubleSidedMode?r.code.add(t$i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(t$i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(n.extensions.add("GL_OES_standard_derivatives"),r.code.add(t$i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==a.attributeTextureCoordinates&&(n.include(u$4,a),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(t$i`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${a.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$2(o,t){const r=o.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(t$i`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(t$i`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$2(n,t){const e=n.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(e.uniforms.add("lightingAmbientSH0","vec3"),e.code.add(t$i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(e.uniforms.add("lightingAmbientSH_R","vec4"),e.uniforms.add("lightingAmbientSH_G","vec4"),e.uniforms.add("lightingAmbientSH_B","vec4"),e.code.add(t$i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(e.uniforms.add("lightingAmbientSH0","vec3"),e.uniforms.add("lightingAmbientSH_R1","vec4"),e.uniforms.add("lightingAmbientSH_G1","vec4"),e.uniforms.add("lightingAmbientSH_B1","vec4"),e.uniforms.add("lightingAmbientSH_R2","vec4"),e.uniforms.add("lightingAmbientSH_G2","vec4"),e.uniforms.add("lightingAmbientSH_B2","vec4"),e.code.add(t$i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||e.code.add(t$i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$1(n){const t=n.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(t$i`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function l$2(l,d){const c=l.fragment;l.include(n$1),l.include(o$2,d),0!==d.pbrMode&&l.include(a$5,d),l.include(n$2,d),d.receiveShadows&&l.include(t$5,d),c.uniforms.add("lightingGlobalFactor","float"),c.uniforms.add("ambientBoostFactor","float"),l.include(t$6),c.code.add(t$i`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===d.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),c.code.add(t$i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===d.viewingMode?t$i`normalize(vPosWorld)`:t$i`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),c.code.add(t$i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===d.pbrMode||4===d.pbrMode?c.code.add(t$i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==d.pbrMode&&2!==d.pbrMode||(c.code.add(t$i`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),c.code.add(t$i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),c.code.add(t$i`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),c.code.add(t$i`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),c.code.add(t$i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===d.pbrMode?t$i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:t$i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r(r,e){const m=r.fragment;m.code.add(t$i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===e.doubleSidedMode?m.code.add(t$i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===e.doubleSidedMode?m.code.add(t$i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):m.code.add(t$i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u$2(u,o){const r=t$i`
  /*
  *  ${o.name}
  *  ${0===o.output?"RenderOutput: Color":1===o.output?"RenderOutput: Depth":3===o.output?"RenderOutput: Shadow":2===o.output?"RenderOutput: Normal":4===o.output?"RenderOutput: Highlight":""}
  */
  `;b$7()&&(u.fragment.code.add(r),u.vertex.code.add(r));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i$3(i){i.include(e$7),i.code.add(t$i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${t$i.int(1)}) {
        return allMixed;
      }
      else if (mode == ${t$i.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$i.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${t$i.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$i.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function P$1(P){const _=new n$9,S=_.vertex.code,$=_.fragment.code;return _.include(u$2,{name:"Default Material Shader",output:P.output}),_.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),_.include(o$3),_.varyings.add("vpos","vec3"),_.include(e$4,P),_.include(o$6,P),_.include(t$9,P),0!==P.output&&7!==P.output||(_.include(o$4,P),_.include(r$h,{linearDepth:!1}),0===P.normalType&&P.offsetBackfaces&&_.include(e),_.include(n$3,P),_.include(l$3,P),P.instancedColor&&_.attributes.add("instanceColor","vec4"),_.varyings.add("localvpos","vec3"),_.include(t$2,P),_.include(a$6,P),_.include(r$2,P),_.include(r$1,P),_.vertex.uniforms.add("externalColor","vec4"),_.varyings.add("vcolorExt","vec4"),P.multipassTerrainEnabled&&_.varyings.add("depth","float"),S.add(t$i`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${P.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${t$i.float(o$b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===P.normalType?t$i`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${P.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===P.normalType&&P.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${P.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===P.output&&(_.include(c$6,P),_.include(r$6,P),P.multipassTerrainEnabled&&(_.fragment.include(a$9),_.include(r$5,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.fragment.include(i$3),$.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$i`vec4 texColor = vec4(1.0);`}
        ${P.attributeColor?t$i`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$i`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===P.output&&(_.include(c$6,P),_.include(l$2,P),_.include(o$2,P),_.include(r$6,P),P.receiveShadows&&_.include(t$5,P),P.multipassTerrainEnabled&&(_.fragment.include(a$9),_.include(r$5,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.include(r$3,P),_.include(a$5,P),_.fragment.include(i$3),_.include(r,P),$.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$i`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===P.normalType?t$i`
        vec3 normal = screenDerivativeNormal(localvpos);`:t$i`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===P.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${P.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===P.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${P.attributeColor?t$i`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$i`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${P.hasNormalTexture?t$i`
              mat3 tangentSpace = ${P.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===P.pbrMode||2===P.pbrMode?1===P.viewingMode?t$i`vec3 normalGround = normalize(vpos + localOrigin);`:t$i`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:t$i``}
        ${1===P.pbrMode||2===P.pbrMode?t$i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${P.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),_.include(u$3,P),_}var _$1=Object.freeze({__proto__:null,build:P$1});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class R extends t$f{initializeProgram(e){const t=R.shader.get(),i=this.configuration,r=t.build({OITEnabled:0===i.transparencyPassType,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?i.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?3:0,doubleSidedMode:i.doubleSidedMode,vertexTangents:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:o$7(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new n$8(e.rctx,r,o$g)}bindPass(e,t){var i,r;t$e(this.program,t.camera.projectionMatrix);const l=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===l)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),t$8(this.program,t)),7===l&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",P$2[e.colorMixMode])),0===l?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",P$2[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&a$3(this.program,e,this.configuration.isSchematic)):4===l&&g$3(this.program,t),t$a(this.program,e),l$7(this.program,e,t),B$1(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(i=t.shadowMap)||i.bind(this.program),null==(r=t.ssaoHelper)||r.bind(this.program);}bindDraw(e){const o=this.configuration.instancedDoublePrecision?t$k(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;f$9(this.program,o,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&o$f(this.program,o,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&o$6.bindCustomOrigin(this.program,o),r$a(this.program,this.configuration,e.slicePlane,o),0===this.configuration.output&&i$4(this.program,e,o);}setPipeline(e,t){const i=this.configuration,r=3===e,o=2===e;return g$b({blending:0!==i.output&&7!==i.output||!i.transparent?null:r?u$7:c$3(e),culling:L$1(i)&&s$d(i.cullFace),depthTest:{func:a$8(e)},depthWrite:r||o?i.writeDepth&&l$e:null,colorWrite:r$q,stencilWrite:i.sceneHasOcludees?f$2:null,stencilTest:i.sceneHasOcludees?t?t$7:c$2:null,polygonOffset:r||o?null:s$4(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function L$1(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&(!e.transparent&&!e.doubleSidedMode)}R.shader=new t$g(_$1,(()=>import('./DefaultMaterial.glsl-1ddf21f1.js')));class H$1 extends e$9{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}e$h([r$f({count:8})],H$1.prototype,"output",void 0),e$h([r$f({count:4})],H$1.prototype,"alphaDiscardMode",void 0),e$h([r$f({count:3})],H$1.prototype,"doubleSidedMode",void 0),e$h([r$f()],H$1.prototype,"isSchematic",void 0),e$h([r$f()],H$1.prototype,"vertexColors",void 0),e$h([r$f()],H$1.prototype,"offsetBackfaces",void 0),e$h([r$f()],H$1.prototype,"symbolColors",void 0),e$h([r$f()],H$1.prototype,"vvSize",void 0),e$h([r$f()],H$1.prototype,"vvColor",void 0),e$h([r$f()],H$1.prototype,"verticalOffset",void 0),e$h([r$f()],H$1.prototype,"receiveShadows",void 0),e$h([r$f()],H$1.prototype,"slicePlaneEnabled",void 0),e$h([r$f()],H$1.prototype,"sliceHighlightDisabled",void 0),e$h([r$f()],H$1.prototype,"receiveAmbientOcclusion",void 0),e$h([r$f()],H$1.prototype,"screenSizePerspective",void 0),e$h([r$f()],H$1.prototype,"textureAlphaPremultiplied",void 0),e$h([r$f()],H$1.prototype,"hasColorTexture",void 0),e$h([r$f()],H$1.prototype,"usePBR",void 0),e$h([r$f()],H$1.prototype,"hasMetalnessAndRoughnessTexture",void 0),e$h([r$f()],H$1.prototype,"hasEmissionTexture",void 0),e$h([r$f()],H$1.prototype,"hasOcclusionTexture",void 0),e$h([r$f()],H$1.prototype,"hasNormalTexture",void 0),e$h([r$f()],H$1.prototype,"instanced",void 0),e$h([r$f()],H$1.prototype,"instancedColor",void 0),e$h([r$f()],H$1.prototype,"instancedDoublePrecision",void 0),e$h([r$f()],H$1.prototype,"vertexTangents",void 0),e$h([r$f()],H$1.prototype,"normalsTypeDerivate",void 0),e$h([r$f()],H$1.prototype,"writeDepth",void 0),e$h([r$f()],H$1.prototype,"sceneHasOcludees",void 0),e$h([r$f()],H$1.prototype,"transparent",void 0),e$h([r$f()],H$1.prototype,"enableOffset",void 0),e$h([r$f({count:3})],H$1.prototype,"cullFace",void 0),e$h([r$f({count:4})],H$1.prototype,"transparencyPassType",void 0),e$h([r$f()],H$1.prototype,"multipassTerrainEnabled",void 0),e$h([r$f()],H$1.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function j$1(j){const E=new n$9,O=E.vertex.code,_=E.fragment.code;return E.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),E.include(o$3),E.varyings.add("vpos","vec3"),E.include(e$4,j),E.include(o$6,j),E.include(t$9,j),0!==j.output&&7!==j.output||(E.include(o$4,j),E.include(r$h,{linearDepth:!1}),j.offsetBackfaces&&E.include(e),j.instancedColor&&E.attributes.add("instanceColor","vec4"),E.varyings.add("vNormalWorld","vec3"),E.varyings.add("localvpos","vec3"),j.multipassTerrainEnabled&&E.varyings.add("depth","float"),E.include(t$2,j),E.include(a$6,j),E.include(r$2,j),E.include(r$1,j),E.vertex.uniforms.add("externalColor","vec4"),E.varyings.add("vcolorExt","vec4"),O.add(t$i`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${j.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${t$i.float(o$b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${j.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${j.multipassTerrainEnabled?t$i`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===j.output&&(E.include(c$6,j),E.include(r$6,j),j.multipassTerrainEnabled&&(E.fragment.include(a$9),E.include(r$5,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.fragment.include(i$3),_.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?t$i`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$i`vec4 texColor = vec4(1.0);`}
        ${j.attributeColor?t$i`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$i`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===j.output&&(E.include(c$6,j),E.include(l$2,j),E.include(o$2,j),E.include(r$6,j),j.receiveShadows&&E.include(t$5,j),j.multipassTerrainEnabled&&(E.fragment.include(a$9),E.include(r$5,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.include(r$3,j),E.include(a$5,j),E.fragment.include(i$3),_.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?t$i`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$i`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===j.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${j.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===j.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${j.attributeColor?t$i`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$i`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t$i`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===j.pbrMode||2===j.pbrMode?1===j.viewingMode?t$i`vec3 normalGround = normalize(vpos + localOrigin);`:t$i`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:t$i``}
        ${1===j.pbrMode||2===j.pbrMode?t$i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${j.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),E.include(u$3,j),E}var E$1=Object.freeze({__proto__:null,build:j$1});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class a$2 extends R{initializeProgram(e){const s=a$2.shader.get(),t=this.configuration,l=s.build({OITEnabled:0===t.transparencyPassType,output:t.output,viewingMode:e.viewingMode,receiveShadows:t.receiveShadows,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:t.symbolColors,vvSize:t.vvSize,vvColor:t.vvColor,vvInstancingEnabled:!0,instanced:t.instanced,instancedColor:t.instancedColor,instancedDoublePrecision:t.instancedDoublePrecision,pbrMode:t.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:t.hasColorTexture,receiveAmbientOcclusion:t.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:t.hasColorTexture?1:0,textureAlphaPremultiplied:t.textureAlphaPremultiplied,attributeColor:t.vertexColors,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,offsetBackfaces:t.offsetBackfaces,doublePrecisionRequiresObfuscation:o$7(e.rctx),alphaDiscardMode:t.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:t.multipassTerrainEnabled,cullAboveGround:t.cullAboveGround});return new n$8(e.rctx,l,o$g)}}a$2.shader=new t$g(E$1,(()=>import('./RealisticTree.glsl-df00db7b.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class y$1 extends a$c{constructor(e){super(e,O),this.supportsEdges=!0,this.techniqueConfig=new H$1,this.vertexBufferLayout=y$1.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?y$1.getInstanceBufferLayout(this.params):null;}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return !1;const t=e.instanced,i=e.vertexColors,s=e.symbolColors,a=!!t&&t.indexOf("color")>-1,r=e.vvColorEnabled,n="replace"===e.colorMixMode,o=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(a||r||s)?!!n||o:i?n?l:o:a||r||s?!!n||o:n?l:o}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<f$3),this.techniqueConfig}intersect(e,u,c,h,d,p,m){if(null!==this.params.verticalOffset){const e=h.camera;o$i(A$2,c[12],c[13],c[14]);let u=null;switch(h.viewingMode){case 1:u=j$7(E,A$2);break;case 2:u=r$j(E,B);}let m=0;if(null!==this.params.verticalOffset){const t=c$b(L,A$2,e.eye),i=s$b(t),s=d$a(t,t,1/i);let l=null;this.params.screenSizePerspective&&(l=z$4(u,s)),m+=V(e,i,this.params.verticalOffset,l,this.params.screenSizePerspective);}d$a(u,u,m),L$4(I$1,u,h.transform.inverseRotation),d=c$b(w$2,d,I$1),p=c$b(_,p,I$1);}h$4(e,u,h,d,p,_$2(h.verticalOffset),m);}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new P(e)}createBufferWriter(){return new M$1(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=A$5().vec3f("position").vec3f("normal");return e.vertexTangents&&i.vec4f("tangent"),t&&i.vec2f("uv0"),e.vertexColors&&i.vec4u8("color"),e.symbolColors&&i.vec4u8("symbolColor"),i}static getInstanceBufferLayout(e){let t=A$5();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class P extends i$9{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters();}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(t.treeRendering?a$2:R,this._material.getTechniqueConfig(this._output,e),this._technique);}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this._material.params.shadowMappingEnabled&&this._material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled});}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees});}ensureParameters(e){0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e);}bind(e){this._technique.bindPass(this._material.params,e),this.bindTextures(this._technique.program);}beginSlot(e){return e===(this._material.params.transparent?this._material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const O={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:e$e(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:d$3,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...d$4};class M$1{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t;}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,i,s){g$4(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,s);}}const w$2=n$a(),_=n$a(),B=t$k(0,0,1),E=n$a(),I$1=n$a(),A$2=n$a(),L=n$a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function s$2(){if(t$j(i$2)){const t=t=>a$j(`esri/libs/basisu/${t}`);i$2=import('./basis_transcoder-275157ae.js').then((function(e){return e.b})).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))));}return i$2}let i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let s$1=null,i$1=null;async function a$1(){return t$j(i$1)&&(i$1=s$2(),s$1=await i$1),i$1}function o$1(t,n){if(t$j(s$1))return t.byteLength;const r=new s$1.BasisFile(new Uint8Array(t)),i=c$1(r)?l$1(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),n):0;return r.close(),r.delete(),i}function g$2(t,n){if(t$j(s$1))return t.byteLength;const r=new s$1.KTX2File(new Uint8Array(t)),i=u$1(r)?l$1(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),n):0;return r.close(),r.delete(),i}function l$1(e,t,n,s,i){const a=n$j(t?37496:37492),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(n*s*a*o)}function c$1(e){return e.getNumImages()>=1&&!e.isUASTC()}function u$1(e){return e.getFaces()>=1&&e.isETC1S()}async function m$1(t,n,r){t$j(s$1)&&(s$1=await a$1());const i=new s$1.BasisFile(new Uint8Array(r));if(!c$1(i))return null;i.startTranscoding();const o=d$1(t,n,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>i.transcodeImage(n,0,e,t,0,0)));return i.close(),i.delete(),o}async function h$2(t,n,r){t$j(s$1)&&(s$1=await a$1());const i=new s$1.KTX2File(new Uint8Array(r));if(!u$1(i))return null;i.startTranscoding();const o=d$1(t,n,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>i.transcodeImage(n,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}function d$1(e,t,r,s,i,a,o,g){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,m]=l?s?[1,37496]:[0,37492]:c?s?[3,33779]:[2,33776]:[13,6408],h=t.hasMipmap?r:Math.min(1,r),d=[];for(let n=0;n<h;n++)d.push(new Uint8Array(o(n,u))),g(n,u,d[n]);const p=d.length>1,f=p?9987:9729,w={...t,samplingMode:f,hasMipmap:p,internalFormat:m,width:i,height:a};return new r$p(e,w,{type:"compressed",levels:d})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n=n$b.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),o=542327876,a=131072,i=4;function s(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function l(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const u=s("DXT1"),c=s("DXT3"),m=s("DXT5"),h$1=31,p=0,d=1,g$1=2,f=3,w$1=4,C=7,x$1=20,D=21;function b$1(e,t,n){const{textureData:o,internalFormat:a,width:i,height:s}=A$1(n,t.hasMipmap);return t.samplingMode=o.levels.length>1?9987:9729,t.hasMipmap=o.levels.length>1,t.internalFormat=a,t.width=i,t.height=s,new r$p(e,t,o)}function A$1(e,r){const s=new Int32Array(e,0,h$1);if(s[p]!==o)return n.error("Invalid magic number in DDS header"),null;if(!(s[x$1]&i))return n.error("Unsupported format, must contain a FourCC code"),null;const b=s[D];let A,M;switch(b){case u:A=8,M=33776;break;case c:A=16,M=33778;break;case m:A=16,M=33779;break;default:return n.error("Unsupported FourCC code:",l(b)),null}let v=1,F=s[w$1],U=s[f];0==(3&F)&&0==(3&U)||(n.warn("Rounding up compressed texture size to nearest multiple of 4."),F=F+3&-4,U=U+3&-4);const T=F,j=U;let k,y;s[g$1]&a&&!1!==r&&(v=Math.max(1,s[C])),1===v||c$f(F)&&c$f(U)||(n.warn("Ignoring mipmaps of non power of two sized compressed texture."),v=1);let I=s[d]+4;const S=[];for(let t=0;t<v;++t)y=(F+3>>2)*(U+3>>2)*A,k=new Uint8Array(e,I,y),S.push(k),I+=y,F=Math.max(1,F>>1),U=Math.max(1,U>>1);return {textureData:{type:"compressed",levels:S},internalFormat:M,width:T,height:j}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class S extends r$d{constructor(t,e){super(),this.data=t,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new n$k,this.params=e||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=S.estimateTexMemRequired(this.data,this.params),this.startPreload();}startPreload(){const t=this.data;t$j(t)||(t instanceof HTMLVideoElement?this.startPreloadVideoElement(t):t instanceof HTMLImageElement&&this.startPreloadImageElement(t));}startPreloadVideoElement(t){F$2(t.src)||"auto"===t.preload&&t.crossOrigin||(t.preload="auto",t.crossOrigin="anonymous",t.src=t.src);}startPreloadImageElement(t){G$3(t.src)||F$2(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src);}static getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static estimateTexMemRequired(t,e){if(t$j(t))return 0;if(o$m(t)||e$i(t))return e.encoding===S.KTX2_ENCODING?g$2(t,e.mipmap):e.encoding===S.BASIS_ENCODING?o$1(t,e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?S.getDataDimensions(t):e;return (e.mipmap?4/3:1)*r*i*(e.components||4)||0}dispose(){this.data=void 0;}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(t){var e;return {target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(e=this.params.maxAnisotropy)?e:this.params.mipmap?t.parameters.maxMaxAnisotropy:1}}load(t,e){if(r$m(this.glTexture))return this.glTexture;if(r$m(this.loadingPromise))return this.loadingPromise;const r=this.data;return t$j(r)?(this.glTexture=new r$p(t,this.createDescriptor(t),null),this.glTexture):"string"==typeof r?this.loadFromURL(t,e,r):r instanceof Image?this.loadFromImageElement(t,e,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(t,e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(t,r,e):(o$m(r)||e$i(r))&&this.params.encoding===S.DDS_ENCODING?this.loadFromDDSData(t,r):(o$m(r)||e$i(r))&&this.params.encoding===S.KTX2_ENCODING?this.loadFromKTX2(t,r):(o$m(r)||e$i(r))&&this.params.encoding===S.BASIS_ENCODING?this.loadFromBasis(t,r):e$i(r)?this.loadFromPixelData(t,r):o$m(r)?this.loadFromPixelData(t,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(t,e,r){if(!(this.data instanceof HTMLVideoElement)||t$j(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(r$m(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this.powerOfTwoStretchInfo;s.setData(this.data),this.drawStretchedTexture(t,e,r,i,s,this.glTexture);}else {const{width:t,height:e}=this.data,{width:r,height:i}=this.glTexture.descriptor;t!==r||e!==i?this.glTexture.updateData(0,0,0,Math.min(t,r),Math.min(e,i),this.data):this.glTexture.setData(this.data);}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(t,e){return this.glTexture=b$1(t,this.createDescriptor(t),e),this.glTexture}loadFromKTX2(t,e){return this.loadAsync((()=>h$2(t,this.createDescriptor(t),e).then((t=>(this.glTexture=t,t)))))}loadFromBasis(t,e){return this.loadAsync((()=>m$1(t,this.createDescriptor(t),e).then((t=>(this.glTexture=t,t)))))}loadFromPixelData(t,e){i$e(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(t);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new r$p(t,r,e),this.glTexture}loadAsync(t){const e=h$e();this.loadingController=e;const r=t(e.signal);this.loadingPromise=r;const i=()=>{this.loadingController===e&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null);};return r.then(i,i),r}loadFromURL(t,e,r){return this.loadAsync((async i=>{const s=await t$n(r,{signal:i});return this.loadFromImage(t,s,e)}))}loadFromImageElement(t,e,r){return r.complete?this.loadFromImage(t,r,e):this.loadAsync((async i=>{const s=await t$o(r,r.src,!1,i);return this.loadFromImage(t,s,e)}))}loadFromVideoElement(t,e,r){return r.readyState>=2?this.loadFromImage(t,r,e):this.loadFromVideoElementAsync(t,e,r)}loadFromVideoElementAsync(t,r,i){return this.loadAsync((s=>new Promise(((a,n)=>{const l=()=>{i.removeEventListener("loadeddata",p),i.removeEventListener("error",d),r$m(c)&&c.remove();},p=()=>{i.readyState>=2&&(l(),a(this.loadFromImage(t,i,r)));},d=t=>{l(),n(t||new s$e("Failed to load video"));};i.addEventListener("loadeddata",p),i.addEventListener("error",d);const c=v$6(s,(()=>d(m$a())));}))))}loadFromImage(t,e,r){const s=S.getDataDimensions(e);this.params.width=s.width,this.params.height=s.height;const a=this.createDescriptor(t);return a.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(t,a)||c$f(s.width)&&c$f(s.height)?(a.width=s.width,a.height=s.height,this.glTexture=new r$p(t,a,e),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(t,e,s,a,r),this.glTexture)}requiresPowerOfTwo(t,e){const r=33071,i="number"==typeof e.wrapMode?e.wrapMode===r:e.wrapMode.s===r&&e.wrapMode.t===r;return !n$l(t.gl)&&(e.hasMipmap||!i)}makePowerOfTwoTexture(e,r,i,a,o){const{width:n,height:m}=i,h=i$j(n),l=i$j(m);let p;switch(a.width=h,a.height=l,this.params.powerOfTwoResizeMode){case 2:a.textureCoordinateScaleFactor=[n/h,m/l],p=new r$p(e,a),p.updateData(0,0,0,n,m,r);break;case 1:case null:case void 0:p=this.stretchToPowerOfTwo(e,r,a,o);break;default:n$m(this.params.powerOfTwoResizeMode);}return a.hasMipmap&&p.generateMipmap(),p}stretchToPowerOfTwo(t,e,r,i){const s=new r$p(t,r),a=new o$l(t,{colorTarget:0,depthStencilTarget:0},s),o=new r$p(t,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},e),n=i$c(t);return this.drawStretchedTexture(t,i,a,n,o,s),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),t.bindFramebuffer(null),a.dispose()),s}drawStretchedTexture(t,e,r,i,s,a){t.bindFramebuffer(r);const o=t.getViewport();t.setViewport(0,0,a.descriptor.width,a.descriptor.height);const n=e.program;t.useProgram(n),n.setUniform4f("color",1,1,1,1),n.bindTexture(s,"tex"),t.bindVAO(i),t.setPipelineState(e.pipeline),t.drawArrays(5,0,r$r(i,"geometry")),t.bindFramebuffer(null),t.setViewport(o.x,o.y,o.width,o.height);}unload(){if(r$m(this.powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:r}=this.powerOfTwoStretchInfo;e.dispose(!0),r.dispose(),t.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null;}if(r$m(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),r$m(this.loadingController)){const t=this.loadingController;this.loadingController=null,this.loadingPromise=null,t.abort();}this.events.emit("unloaded");}}S.DDS_ENCODING="image/vnd-ms.dds",S.KTX2_ENCODING="image/ktx2",S.BASIS_ENCODING="image/x.basis";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const y=n$b.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function x(e,t){const r=await g(e,t);return {resource:r,textures:await A(r.textureDefinitions,t)}}async function g(r,n){const i=r$m(n)&&n.streamDataRequester;if(i)return h(r,i,n);const u=await a$k(L$5(r,e$j(n)));if(!0===u.ok)return u.value.data;w$6(u.error),w(u.error);}async function h(e,r,n){const a=await a$k(r.request(e,"json",n));if(!0===a.ok)return a.value;w$6(a.error),w(a.error.details.url);}function w(e){throw new s$e("",`Request for object resource failed: ${e}`)}function v(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(y.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(y.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(y.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(y.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else y.warn("Indexed geometries must specify faces"),n=!1;break}default:y.warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(y.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(y.warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function b(e,t){const r=[],n=[],s=[],o=[],l=e.resource,c=r$s.parse(l.version||"1.0","wosr");I.validate(c);const p=l.model.name,y=l.model.geometries,x=l.materialDefinitions,g=e.textures;let h=0;const w=new Map;for(let i=0;i<y.length;i++){const e=y[i];if(!v(e))continue;const l=M(e),c=e.params.vertexAttributes,p=[];for(const t in c){const e=c[t],r=e.values;p.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}]);}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)]);}const j=g&&g[l.texture];if(j&&!w.has(l.texture)){const{image:e,params:t}=j,r=new S(e,t);o.push(r),w.set(l.texture,r);}const A=w.get(l.texture),I=A?A.id:void 0;let P=s[l.material]?s[l.material][l.texture]:null;if(!P){const e=x[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=j&&j.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o={ambient:e$k(e.diffuse),diffuse:e$k(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:j?U(j.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:I,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};r$m(t)&&t.materialParamsMixin&&Object.assign(o,t.materialParamsMixin),P=new y$1(o),s[l.material]||(s[l.material]={}),s[l.material][l.texture]=P;}n.push(P);const T=new u$c(p,b);h+=b.position?b.position.length:0,r.push(T);}return {name:p,stageResources:{textures:o,materials:n,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:j(r),numberOfVertices:h,lodThreshold:null}}function j(e){const t=B$4();return e.forEach((e=>{const r=e.boundingInfo;r$m(r)&&(h$f(t,r.getBBMin()),h$f(t,r.getBBMax()));})),t}async function A(e,t){const r=[];for(const o in e){const n=e[o],s=n.images[0].data;if(!s){y.warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+s,u="/textureDefinitions/"+o,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},c=r$m(t)&&t.disableTextures?Promise.resolve(null):t$n(i,t);r.push(c.then((e=>({refId:u,image:e,params:l,alphaChannelUsage:"rgba"===n.channels?n.alphaChannelUsage||"transparency":"none"}))));}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function U(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function M(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}const I=new r$s(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function $(s,o){const i=q(t$p(s));if("wosr"===i.fileType){const e=await(o.cache?o.cache.loadWOSR(i.url,o):x(i.url,o)),t=b(e,o);return {lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(o.cache?o.cache.loadGLTF(i.url,o,o.usePBR):l$f(new n$n(o.streamDataRequester),i.url,o,o.usePBR)),u=g$c(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&r$m(u)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&J(a,u);const n=a.meta.isEsriSymbolResource?{usePBR:o.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:o.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},l={...o.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=K(a,n,l,i.specifiedLodIndex);let t=e[0].boundingBox;if(0!==i.specifiedLodIndex){t=K(a,n,l,0)[0].boundingBox;}return {lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const c=K(a,n,l);return {lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function q(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function K(e,t,s,a){const u=e.model,n=e$e(),l=new Array,c=new Map,m=new Map;return u.lods.forEach(((e,i)=>{if(void 0!==a&&i!==a)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:r$m(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:B$4()};l.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=u.materials.get(e.material),l=r$m(e.attributes.texCoord0),f=r$m(e.attributes.normal);if(!c.has(i)){if(l){if(r$m(a.textureColor)&&!m.has(a.textureColor)){const e=u.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:!0};m.set(a.textureColor,new S(e.data,t));}if(r$m(a.textureNormal)&&!m.has(a.textureNormal)){const e=u.textures.get(a.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};m.set(a.textureNormal,new S(e.data,t));}if(r$m(a.textureOcclusion)&&!m.has(a.textureOcclusion)){const e=u.textures.get(a.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};m.set(a.textureOcclusion,new S(e.data,t));}if(r$m(a.textureEmissive)&&!m.has(a.textureEmissive)){const e=u.textures.get(a.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};m.set(a.textureEmissive,new S(e.data,t));}if(r$m(a.textureMetallicRoughness)&&!m.has(a.textureMetallicRoughness)){const e=u.textures.get(a.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};m.set(a.textureMetallicRoughness,new S(e.data,t));}}const o=a.color[0]**(1/o$n),n=a.color[1]**(1/o$n),d=a.color[2]**(1/o$n),p=a.emissiveFactor[0]**(1/o$n),x=a.emissiveFactor[1]**(1/o$n),g=a.emissiveFactor[2]**(1/o$n);c.set(i,new y$1({...t,transparent:"BLEND"===a.alphaMode,textureAlphaMode:Q(a.alphaMode),textureAlphaCutoff:a.alphaCutoff,diffuse:[o,n,d],ambient:[o,n,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:r$m(a.textureColor)&&l?m.get(a.textureColor).id:void 0,colorMixMode:a.colorMixMode,normalTextureId:r$m(a.textureNormal)&&l?m.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:r$m(a.textureOcclusion)&&l?m.get(a.textureOcclusion).id:void 0,emissiveTextureId:r$m(a.textureEmissive)&&l?m.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:r$m(a.textureMetallicRoughness)&&l?m.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[p,x,g],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...s}));}const p=H(e.indices||e.attributes.position.count,e.primitiveType),x=e.attributes.position.count,A=r$t(i$i,x);e$l(A,e.attributes.position,e.transform);const O=[["position",{data:A.typedBuffer,size:A.elementCount,exclusive:!0}]],F=[["position",p]];if(r$m(e.attributes.normal)){const t=r$t(i$i,x);j$8(n,e.transform),f$f(t,e.attributes.normal,n),O.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),F.push(["normal",p]);}if(r$m(e.attributes.tangent)){const t=r$t(c$e,x);j$8(n,e.transform),r$u(t,e.attributes.tangent,n),O.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),F.push(["tangent",p]);}if(r$m(e.attributes.texCoord0)){const t=r$t(u$g,x);n$o(t,e.attributes.texCoord0),O.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),F.push(["uv0",p]);}if(r$m(e.attributes.color)){const t=r$t(x$7,x);if(4===e.attributes.color.elementCount)e.attributes.color instanceof c$e?f$g(t,e.attributes.color,255):e.attributes.color instanceof x$7?e$m(t,e.attributes.color):e.attributes.color instanceof L$6&&f$g(t,e.attributes.color,1/256);else {t$q(t,255,255,255,255);const r=new O$3(t.buffer,0,4);e.attributes.color instanceof i$i?r$v(r,e.attributes.color,255):e.attributes.color instanceof O$3?e$n(r,e.attributes.color):e.attributes.color instanceof E$4&&r$v(r,e.attributes.color,1/256);}O.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),F.push(["color",p]);}const I=new u$c(O,F);d.stageResources.geometries.push(I),d.stageResources.materials.push(c.get(i)),l&&(r$m(a.textureColor)&&d.stageResources.textures.push(m.get(a.textureColor)),r$m(a.textureNormal)&&d.stageResources.textures.push(m.get(a.textureNormal)),r$m(a.textureOcclusion)&&d.stageResources.textures.push(m.get(a.textureOcclusion)),r$m(a.textureEmissive)&&d.stageResources.textures.push(m.get(a.textureEmissive)),r$m(a.textureMetallicRoughness)&&d.stageResources.textures.push(m.get(a.textureMetallicRoughness))),d.numberOfVertices+=x;const k=I.boundingInfo;r$m(k)&&(h$f(d.boundingBox,k.getBBMin()),h$f(d.boundingBox,k.getBBMax()));}));})),l}function Q(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}function H(e,t){switch(t){case 4:return n$p(e);case 5:return o$o(e);case 6:return i$k(e)}}function J(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(t$j(o))return;const x=i.attributes.position,g=x.count,b=n$a(),v=n$a(),y=n$a(),M=r$t(x$7,g),B=r$t(i$i,g),w=h$d(e$d(),i.transform);for(let s=0;s<g;s++){x.getVec(s,v),o.getVec(s,b),I$5(v,v,i.transform),c$b(y,v,t.center),i$l(y,y,t.radius);const a=y[2],u=s$b(y),p=Math.min(.45+.55*u*u,1);i$l(y,y,t.radius),I$5(y,y,w),j$7(y,y),r+1!==e.model.lods.length&&e.model.lods.length>1&&y$7(y,y,b,a>-1?.2:Math.min(-4*a-3.8,1)),B.setVec(s,y),M.set(s,0,255*p),M.set(s,1,255*p),M.set(s,2,255*p),M.set(s,3,255);}i.attributes.normal=B,i.attributes.color=M;}}}

var objectResourceUtils = /*#__PURE__*/Object.freeze({
      __proto__: null,
      fetch: $,
      gltfToEngineResources: K,
      parseUrl: q
});

export { $$1 as $, j$6 as A, _$2 as B, f$5 as C, p$6 as D, E$3 as E, F$1 as F, z$2 as G, V$2 as H, B$2 as I, f$a as J, r$9 as K, a$9 as L, a$a as M, c$6 as N, O$2 as O, e$4 as P, o$b as Q, d$3 as R, r$8 as S, T$2 as T, l$7 as U, V$3 as V, c$5 as W, m$5 as X, t$8 as Y, Z, _$3 as _, r$f as a, M$2 as a$, o$c as a0, g$3 as a1, a$e as a2, o$f as a3, l$8 as a4, c$3 as a5, a$c as a6, c$8 as a7, f$4 as a8, d$6 as a9, i$5 as aA, u$6 as aB, a$7 as aC, A$4 as aD, a$5 as aE, a$6 as aF, t$5 as aG, o$8 as aH, s$4 as aI, m$3 as aJ, p$5 as aK, y$5 as aL, q$2 as aM, n$6 as aN, i$a as aO, s$5 as aP, g$9 as aQ, y$1 as aR, D$1 as aS, S as aT, g$4 as aU, r$1 as aV, I$2 as aW, C$1 as aX, P$2 as aY, b$3 as aZ, $ as a_, V as aa, d$4 as ab, u$8 as ac, a$b as ad, y$2 as ae, c$7 as af, i$9 as ag, I$4 as ah, B$1 as ai, t$d as aj, q$4 as ak, d$8 as al, B$3 as am, t$6 as an, e$1 as ao, r$5 as ap, r$7 as aq, u$7 as ar, a$8 as as, l$6 as at, f$2 as au, t$7 as av, c$2 as aw, i$6 as ax, n$4 as ay, e$2 as az, e$9 as b, o$3 as b0, l$2 as b1, o$2 as b2, r as b3, r$e as b4, l$5 as b5, l$3 as b6, A$3 as b7, f$3 as b8, h$4 as b9, r$3 as bA, n$3 as bB, a$3 as bC, o$7 as bD, o$9 as bE, F as bF, i$d as bG, f$8 as bH, j$5 as bI, K$1 as bJ, o$d as bK, l$b as bL, r$4 as bM, a$d as bN, v$1 as bO, M$3 as bP, a$1 as bQ, t as bR, P$1 as bS, j$1 as bT, objectResourceUtils as bU, x as ba, f$1 as bb, i$b as bc, r$b as bd, O$1 as be, i$g as bf, T as bg, s$7 as bh, f$7 as bi, u$b as bj, n$1 as bk, u$2 as bl, s$3 as bm, V$1 as bn, L$2 as bo, r$a as bp, q$3 as bq, e$5 as br, j$2 as bs, l$4 as bt, i$3 as bu, d$2 as bv, u$4 as bw, t$1 as bx, t$2 as by, r$6 as bz, t$f as c, n$8 as d, e$a as e, t$g as f, d$9 as g, t$e as h, i$e as i, e$7 as j, k$1 as k, i$c as l, r$d as m, n$9 as n, o$g as o, u$a as p, l$a as q, r$h as r, k as s, t$i as t, u$c as u, v$4 as v, w$3 as w, a$g as x, m$8 as y, z$1 as z };
