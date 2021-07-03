import { o } from './Message-70b34921.js';
import { h } from './subclass-fe5fcf78.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(e,t,a){let c,d;return void 0===t||Array.isArray(t)?(d=e,a=t,c=[void 0]):(d=t,c=Array.isArray(e)?e:[e]),(e,t)=>{const s=e.constructor.prototype;c.forEach((c=>{const p=h(e,c,d);p.read&&"object"!=typeof p.read&&(p.read={}),o("read.reader",s[t],p),a&&(p.read.source=(p.read.source||[]).concat(a));}));}}

export { e };
