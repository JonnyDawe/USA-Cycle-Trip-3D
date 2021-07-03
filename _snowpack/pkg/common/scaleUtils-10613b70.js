import { G, l } from './unitUtils-b17203be.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e=96;function r(r,i){const o=i||r.extent,c=r.width,u=G(o&&o.spatialReference);return o&&c?o.width/c*u*l*e:0}function i(r,i){return r/(G(i)*l*e)}

export { i, r };
