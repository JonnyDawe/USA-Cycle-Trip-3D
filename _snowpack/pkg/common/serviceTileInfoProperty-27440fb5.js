import { S } from './TileInfo-c32d8db8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r={type:S,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:n}}}}};function n(r,n,l,o){if(!r)return null;const{minScale:i,maxScale:t,minLOD:m,maxLOD:s}=n;if(null!=m&&null!=s)return o&&o.ignoreMinMaxLOD?S.fromJSON(r):S.fromJSON({...r,lods:r.lods.filter((({level:e})=>null!=e&&e>=m&&e<=s))});if(0!==i&&0!==t){const n=e=>Math.round(1e4*e)/1e4,l=i?n(i):1/0,o=t?n(t):-1/0;return S.fromJSON({...r,lods:r.lods.filter((e=>{const r=n(e.scale);return r<=l&&r>=o}))})}return S.fromJSON(r)}

export { n, r };
