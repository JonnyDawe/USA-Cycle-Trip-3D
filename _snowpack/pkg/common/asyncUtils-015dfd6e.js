import { t } from './Message-70b34921.js';
import { x, A, w } from './promiseUtils-2ff2b194.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(r,t,e){return A(r.map(((r,o)=>t.apply(e,[r,o]))))}function u(r,t,e){return A(r.map(((r,o)=>t.apply(e,[r,o])))).then((r=>r.map((r=>r.value))))}function a(o){return t(o)?x():o.then((r=>({ok:!0,value:r}))).catch((r=>({ok:!1,error:r})))}function p(r){return r.then((r=>({ok:!0,value:r}))).catch((r=>(w(r),{ok:!1,error:r})))}function i(r){if(!0===r.ok)return r.value;throw r.error}

export { a, i, n, p, u };
