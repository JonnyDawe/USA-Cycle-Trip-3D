import { s, U } from './Basemap-ad33b4b0.js';
import './Collection-32506e74.js';
import { n } from './Message-70b34921.js';
import './Loadable-d16b3d7d.js';
import { d } from './subclass-fe5fcf78.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o=n.getLogger("esri.support.basemapUtils");function c(){return {}}function u(e){for(const r in e){const n=e[r];!1===(null==n?void 0:n.destroyed)&&n.destroy(),delete e[r];}}function f(r,n){var t;let a;if("string"==typeof r){if(!(r in s)){const e=Object.keys(s).map((e=>`"${e}"`)).join(", ");return o.warn(`Unable to find basemap definition for: ${r}. Try one of these: ${e}`),null}n&&(a=n[r]),a||(a=U.fromId(r),n&&(n[r]=a));}else a=d(U,r);return null!=(t=a)&&t.destroyed&&(o.warn("The provided basemap is already destroyed",{basemap:a}),a=null),a}

export { c, f, u };
