import { s as s$1 } from './promiseUtils-2ff2b194.js';
import { o } from './Message-70b34921.js';
import { p, c as c$1, b } from './labelingInfo-c6f27ee6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s={key:"type",base:p,typeMap:{selection:c$1}};function u(e,t){const r=(t=t.layerDefinition||t).featureReduction;if(r)switch(r.type){case"selection":return c$1.fromJSON(r);case"cluster":return b.fromJSON(r)}return null}function c(e,r,o$1,n){const s=i(e,{},n);s&&o(o$1,s,r);}function i(t,r,o){return t?"selection"!==t.type?(o.messages&&o.messages.push(new s$1("featureReduction:unsupported",`FeatureReduction of type '${t.declaredClass}' are not supported in scenes.`,{featureReduction:t,context:o})),null):t.write(r,o):null}

export { c, s, u };
