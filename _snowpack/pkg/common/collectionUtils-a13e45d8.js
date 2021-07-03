import { L } from './Collection-32506e74.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(n,t,i=L){return t||(t=new i),t===n||(t.removeAll(),e(n)?t.addMany(n):n&&t.add(n)),t}function t(r){return r}function e(r){return r&&(Array.isArray(r)||"items"in r&&Array.isArray(r.items))}

export { n, t };
