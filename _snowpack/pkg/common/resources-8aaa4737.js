import { n, a as o, s as s$3, d, o as o$1 } from './mathUtils-a477cc74.js';
import { a as a$1 } from './promiseUtils-2ff2b194.js';
import { t as t$2 } from './testSVGPremultipliedAlpha-b5c775e7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$1{constructor(t){this.gain=t;}update(t){if(this.hasLastValue){const e=this.computeDelta(t);this.updateDelta(e);}this.lastValue=t;}reset(){this.lastValue=void 0,this.filteredDelta=void 0;}get hasLastValue(){return void 0!==this.lastValue}get hasFilteredDelta(){return void 0!==this.filteredDelta}computeDelta(t){return t-this.lastValue}updateDelta(t){this.hasFilteredDelta?this.filteredDelta=(1-this.gain)*this.filteredDelta+this.gain*t:this.filteredDelta=t;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(t,i,o){this._initialVelocity=t,this._stopVelocity=i,this._friction=o,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction));}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,i){const o=this.value(t);return this.value(t+i)-o}valueFromInitialVelocity(t,i){i=Math.min(i,this.duration);const o=1-this.friction;return t*(o**i-1)/Math.log(o)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class c extends t{constructor(e,t,i,s,n){super(e,t,i),this.sceneVelocity=s,this.direction=n;}value(e){return super.valueFromInitialVelocity(this.sceneVelocity,e)}}class h{constructor(e=300,t=12,i=.84){this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.enabled=!0,this.time=new t$1(.6),this.screen=[new t$1(.4),new t$1(.4)],this.scene=[new t$1(.6),new t$1(.6),new t$1(.6)],this.tmpDirection=n();}add(e,t,i){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.015)return}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.scene[0].update(t[0]),this.scene[1].update(t[1]),this.scene[2].update(t[2]),this.time.update(i);}}reset(){this.screen[0].reset(),this.screen[1].reset(),this.scene[0].reset(),this.scene[1].reset(),this.scene[2].reset(),this.time.reset();}evaluateMomentum(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null;const e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t)/this.time.filteredDelta;return Math.abs(i)<this.minimumInitialVelocity?null:this.createMomentum(i,this.stopVelocity,this.friction)}createMomentum(s,n,r){o(this.tmpDirection,this.scene[0].filteredDelta,this.scene[1].filteredDelta,this.scene[2].filteredDelta);const h=s$3(this.tmpDirection);h>0&&d(this.tmpDirection,this.tmpDirection,1/h);const a=h/this.time.filteredDelta;return new c(s,n,r,a,this.tmpDirection)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s$2{constructor(t=2.5,i=.01,s=.95,l=12){this.minimumInitialVelocity=t,this.stopVelocity=i,this.friction=s,this.maxVelocity=l,this.enabled=!0,this.value=new t$1(.8),this.time=new t$1(.3);}add(t,e){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta){const e=this.value.computeDelta(t);this.value.filteredDelta*e<0&&this.value.reset();}}this.time.update(e),this.value.update(t);}}reset(){this.value.reset(),this.time.reset();}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta)return null;let e=this.value.filteredDelta/this.time.filteredDelta;return e=o$1(e,-this.maxVelocity,this.maxVelocity),Math.abs(e)<this.minimumInitialVelocity?null:this.createMomentum(e,this.stopVelocity,this.friction)}createMomentum(t$1,e,s){return new t(t$1,e,s)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class a extends s$2{constructor(t=3,a=.01,s=.95,e=12){super(t,a,s,e);}add(t,a){if(this.value.hasLastValue){const a=this.value.lastValue;let s=t-a;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;t=a+s;}super.add(t,a);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r extends t{constructor(e,t,r){super(e,t,r);}value(e){const t=super.value(e);return Math.exp(t)}valueDelta(e,t){const r=super.value(e),s=super.value(e+t)-r;return Math.exp(s)}}class s$1 extends s$2{constructor(e=2.5,t=.01,r=.95,s=12){super(e,t,r,s);}add(e,t){super.add(Math.log(e),t);}createMomentum(e,t,s){return new r(e,t,s)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function s(s){const r=import('./mask-svg-70b32781.js'),i=import('./overlay-svg-3c25135e.js'),o=t$2((await r).default,{signal:s}),e=t$2((await i).default,{signal:s}),m={mask:await o,overlay:await e};return a$1(s),m}

export { t as a, a as b, s as c, h, s$1 as s, t$1 as t };
