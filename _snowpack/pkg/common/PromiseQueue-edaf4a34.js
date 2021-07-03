import { b, m, z } from './promiseUtils-2ff2b194.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r{constructor(){this._tasks=new Array;}get length(){return this._tasks.length}push(s,t,e){return new Promise(((r,l)=>this._tasks.push(new a(r,l,s,t,e))))}unshift(s,t,e){return new Promise(((r,l)=>this._tasks.unshift(new a(r,l,s,t,e))))}process(){if(0===this._tasks.length)return !1;const r=this._tasks.shift();try{const a=b(r.signal);if(a&&!r.abortCallback)r.reject(m());else {const s=a?r.abortCallback(m()):r.callback();z(s)?s.then(r.resolve,r.reject):r.resolve(s);}}catch(a){r.reject(a);}return !0}cancelAll(){const s=m();for(const t of this._tasks)if(t.abortCallback){const e=t.abortCallback(s);t.resolve(e);}else t.reject(s);this._tasks.length=0;}}class a{constructor(s,t,e,r,a){this.resolve=s,this.reject=t,this.callback=e,this.signal=r,this.abortCallback=a;}}

export { r };
