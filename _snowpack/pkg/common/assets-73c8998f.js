import { n as n$1, d as s } from './Message-70b34921.js';
import { D, L } from './Loadable-d16b3d7d.js';
import { s as s$1 } from './promiseUtils-2ff2b194.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=n$1.getLogger("esri.assets");function n(s,o){return L(a(s),o)}function a(t){if(!s.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s$1("assets:path-not-set","config.assetsPath is not set");return D(s.assetsPath,t)}

export { a, n };
