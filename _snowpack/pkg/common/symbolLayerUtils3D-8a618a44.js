import './Message-70b34921.js';
import { i as t$1 } from './mathUtils-a477cc74.js';
import { u } from './aaBoundingBox-c0155c39.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(r,{isPrimitive:t,width:n,depth:o,height:c}){const s=t?10:1;if(null==n&&null==c&&null==o)return [s*r[0],s*r[1],s*r[2]];const i=t$1(n,o,c);let u;for(let e=0;e<3;e++){const t=i[e];if(null!=t){u=t/r[e];break}}for(let e=0;e<3;e++)null==i[e]&&(i[e]=r[e]*u);return i}const n=u(-.5,-.5,-.5,.5,.5,.5),o=u(-.5,-.5,0,.5,.5,1),c=u(-.5,-.5,0,.5,.5,.5);function s(e){switch(e){case"sphere":case"cube":case"diamond":return n;case"cylinder":case"cone":case"inverted-cone":return o;case"tetrahedron":return c;default:return}}

export { s, t };
