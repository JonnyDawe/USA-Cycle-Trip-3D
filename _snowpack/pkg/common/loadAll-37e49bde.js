import { u, a } from './asyncUtils-015dfd6e.js';
import { L } from './Collection-32506e74.js';
import { f } from './Loadable-d16b3d7d.js';
import { t } from './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function n(o,r){return await o.load(),i(o,r)}async function i(n,i){const f$1=[],c=(...o)=>{for(const r of o)t(r)||(Array.isArray(r)?c(...r):L.isCollection(r)?r.forEach((o=>c(o))):f.isLoadable(r)&&f$1.push(r));};i(c);let e=null;if(await u(f$1,(async o=>{!1!==(await a(s(o)?o.loadAll():o.load())).ok||e||(e=o);})),e)throw e.loadError;return n}function s(o){return "loadAll"in o&&"function"==typeof o.loadAll}

export { i, n };
