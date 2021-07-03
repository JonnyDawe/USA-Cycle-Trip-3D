import { o as o$1 } from './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class o{constructor(o,s={ignoreUnknown:!1}){this.jsonToAPI=o,this.options=s,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this.invertMap(o),this.apiValues=this.getKeysSorted(this.apiToJSON),this.jsonValues=this.getKeysSorted(this.jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(o,s,i)=>{const n=this.toJSON(o);void 0!==n&&o$1(i,n,s);},this.write.isJSONMapWriter=!0;}toJSON(t){return this.apiToJSON.hasOwnProperty(t)?this.apiToJSON[t]:this.options.ignoreUnknown?void 0:t}fromJSON(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t}invertMap(t){const o={};for(const s in t)o[t[s]]=s;return o}getKeysSorted(t){const o=[];for(const s in t)o.push(s);return o.sort(),o}}function s(){return function(t){return new o(t,{ignoreUnknown:!0})}}

export { o, s };
