import { e as e$1 } from './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var o,l,e;let t,r;const u=null!=(o=null==(l=e$1.esriConfig)?void 0:l.locale)?o:null==(e=e$1.dojoConfig)?void 0:e.locale;function c(){var o,l;return null!=(o=null!=u?u:null==(l=e$1.navigator)?void 0:l.language)?o:"en"}function i(){return void 0===r&&(r=c()),r}const d=[];function g(n){return d.push(n),{remove(){d.splice(d.indexOf(n),1);}}}const h=[];function p(n){return h.push(n),{remove(){d.splice(h.indexOf(n),1);}}}function m(){var n;const o=null!=(n=t)?n:c();r!==o&&(r=o,[...h].forEach((n=>{n.call(null,o);})),[...d].forEach((n=>{n.call(null,o);})));}null==e$1.addEventListener||e$1.addEventListener("languagechange",m);

export { g, i, p };
