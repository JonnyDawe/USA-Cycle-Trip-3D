import { n as n$2, r, f as e } from './Message-70b34921.js';
import { C } from './JSONSupport-9346590f.js';
import { A as n$3 } from './subclass-fe5fcf78.js';
import { a } from './promiseUtils-2ff2b194.js';
import { p } from './workers-bd1ea274.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const h=n$2.getLogger("esri.core.workers.WorkerHandle");class n$1{constructor(e,t,r,s={}){this._mainMethod=t,this._listeners=[],this._promise=p(e,{...s,schedule:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e);}else e.close();})),this._promise.catch((t=>h.error(`Failed to initialize ${e} worker: ${t}`)));}on(r$1,i){const o={removed:!1,eventName:r$1,callback:i,threadHandle:null};return this._listeners.push(o),this._connectListener(o),n$3((()=>{o.removed=!0,C(this._listeners,o),this._thread&&r(o.threadHandle)&&o.threadHandle.remove();}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null;}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const s=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:s,signal:r})}return this._promise?this._promise.then((()=>(a(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s extends n$1{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0;}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}getTransferList(e){return [e.buffer]}release(){--this.ref<=0&&(o.forEach(((e,r)=>{e===this&&o.delete(r);})),this.destroy());}}const o=new Map;function n(t=null){let n=o.get(e(t));return n||(r(t)?(n=new s((e=>t.schedule(e))),o.set(t,n)):(n=new s,o.set(null,n))),++n.ref,n}

export { n$1 as a, n };
