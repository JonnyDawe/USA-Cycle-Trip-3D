import { t as t$1 } from './_rollupPluginBabelHelpers-58331421.js';
import { L as L$1, B as rt, E as E$1, I as ut, i } from './Loadable-d16b3d7d.js';
import { s as s$1, A as A$1 } from './promiseUtils-2ff2b194.js';
import { t as t$2, r as r$1 } from './Message-70b34921.js';
import { e as en, H as H$1 } from './projection-c73dd3c4.js';
import { k as k$1, d, I as I$1 } from './SpatialReference-843b1520.js';
import { r } from './geojson-d55288bb.js';
import { y } from './Field-728fb193.js';
import { M as M$1 } from './Polyline-ccd8fb47.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$1(n,o){for(const f of n)if(null!=f&&o(f))return f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(n){var e;return null!=(e=t(n))?e:s(n)}function s(n){const e=new Date(n).getTime();return Number.isNaN(e)?null:e}function t(n){var e,s,t,r;const l=u.exec(n);if(!l)return null;const o=l.groups,i=+o.year,f=+o.month-1,a=+o.day,c=+(null!=(e=o.hours)?e:"0"),m=+(null!=(s=o.minutes)?s:"0"),g=+(null!=(t=o.seconds)?t:"0");if(c>23)return null;if(m>59)return null;if(g>59)return null;const D=null!=(r=o.ms)?r:"0",T=D?+D.padEnd(3,"0").substring(0,3):0;let d;if(o.isUTC)d=Date.UTC(i,f,a,c,m,g,T);else if(o.offsetSign){const n=+o.offsetHours,e=+o.offsetMinutes;d=6e4*("+"===o.offsetSign?-1:1)*(60*n+e)+Date.UTC(i,f,a,c,m,g,T);}else d=new Date(i,f,a,c,m,g,T).getTime();return Number.isNaN(d)?null:d}const u=t$1(/^(?:(\x2D?[0-9]{4,})\x2D([0-9]{2})\x2D([0-9]{2}))(?:T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:\.([0-9]+))?)?(?:(Z)|(?:(\+|\x2D)([0-9]{2}):([0-9]{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o(n,c){for(const e of n.children)if(e.localName in c){const n=c[e.localName];if("function"==typeof n){const c=n(e);c&&o(e,c);}else o(e,n);}}function*n(o,c){for(const e of o.children)if(e.localName in c){const o=c[e.localName];"function"==typeof o?yield o(e):yield*n(e,o);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const S="xlink:href",x="2.0.0",v="__esri_wfs_id__",C="wfs-layer:getWFSLayerTypeInfo-error",E="wfs-layer:empty-service",P="wfs-layer:feature-type-not-found",N="wfs-layer:geojson-not-supported",j="wfs-layer:kvp-encoding-not-supported",R="wfs-layer:malformed-json",A="wfs-layer:unknown-geometry-type",k="wfs-layer:unknown-field-type",G="wfs-layer:unsupported-spatial-reference",U="wfs-layer:unsupported-wfs-version";async function D(e,r){const n=I((await L$1(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:x,...null==r?void 0:r.customParameters},signal:null==r?void 0:r.signal})).data);return M(e,n),n}function I(e){const t=te(e);ne(t),ae(t);const r=t.firstElementChild,n=new Map;return {operations:L(r),get featureTypes(){return Array.from($(r,n))},readFeatureTypes:()=>$(r,n)}}const O=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function L(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(o(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return {DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(S);}}}};case"DescribeFeatureType":return {DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(S);}}}};case"GetFeature":return {DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(S);}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return {AllowedValues:{Value:e=>{const t=e.textContent;O.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t);}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return {DefaultValue:e=>{t="true"===e.textContent.toLowerCase();}};case"ImplementsResultPaging":return {DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase();}}}}}}),!t)throw new s$1(j,"WFS service doesn't support key/value pair (KVP) encoding");if(t$2(n.GetFeature.outputFormat))throw new s$1(N,"WFS service doesn't support GeoJSON output format");return n}function M(e,t){rt(e)&&(E$1(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=ut(t.operations.DescribeFeatureType.url)),E$1(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=ut(t.operations.GetFeature.url)));}function $(t,r){return n(t,{FeatureTypeList:{FeatureType:t=>{if(r.has(t))return r.get(t);const n={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},a=new Set([4326]),o$1=t=>{var r,n;const o=parseInt(null==(r=t.textContent.match(t$1(/([0-9]+$)/i,{wkid:1})))||null==(n=r.groups)?void 0:n.wkid,10);Number.isNaN(o)||a.add(o);};return o(t,{Name:e=>{const{name:t,prefix:r}=re(e.textContent);n.typeName=`${r}:${t}`,n.name=t,n.namespacePrefix=r,n.namespaceUri=e.lookupNamespaceURI(r);},Abstract:e=>{n.description=e.textContent;},Title:e=>{n.title=e.textContent;},WGS84BoundingBox:e=>{n.extent=V(e);},DefaultSRS:o$1,DefaultCRS:o$1,OtherSRS:o$1,OtherCRS:o$1}),n.title||(n.title=n.name),n.supportedSpatialReferences.push(...a),r.set(t,n),n}}})}function V(e){let t,r,n,a;for(const o of e.children)switch(o.localName){case"LowerCorner":[t,r]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[n,a]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));}return {xmin:t,ymin:r,xmax:n,ymax:a,spatialReference:I$1}}function W(e,t,r){return n$1(e,(e=>r?e.name===t&&e.namespaceUri===r:e.typeName===t||e.name===t))}async function X(e,t,r,n={}){var a;const{featureType:o,extent:s}=await Y(e,t,r,n),{fields:i,geometryType:u,swapXY:l,objectIdField:p,geometryField:c}=await q(e,o.typeName,n);return {url:e.operations.GetCapabilities.url,name:o.name,namespaceUri:o.namespaceUri,fields:i,geometryField:c,geometryType:u,objectIdField:p,spatialReference:null!=(a=n.spatialReference)?a:k$1.WGS84,extent:s,swapXY:l,wfsCapabilities:e,customParameters:n.customParameters}}async function Y(e,t,n,o={}){const{spatialReference:s=k$1.WGS84}=o,i=e.readFeatureTypes(),u=t?W(i,t,n):i.next().value;if(t$2(u))throw t?new s$1(P,`The type '${t}' could not be found in the service`):new s$1(E,"The service is empty");let l=new M$1({...u.extent,spatialReference:s});if(!d(s,I$1))try{await en(I$1,s,void 0,o),l=H$1(l,I$1);}catch{throw new s$1(G,"Projection not supported")}return {extent:l,spatialReference:s,featureType:u}}async function q(e,t,n={}){const[o,i]=await A$1([H(e.operations.DescribeFeatureType.url,t,n),z(e,t,n)]);if(o.error||i.error)throw new s$1(C,`An error occurred while getting info about the feature type '${t}'`,{error:o.error||i.error});const{fields:u,errors:l}=o.value,p=o.value.geometryType||i.value.geometryType,c=i.value.swapXY;if(t$2(p))throw new s$1(A,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:p,fields:u,errors:l});return {..._(u),geometryType:p,swapXY:c}}function _(e){var t;const r=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new y({name:v,type:"oid",alias:v}),e.unshift(n)),{geometryField:null!=(t=null==r?void 0:r.name)?t:null,objectIdField:n.name,fields:e}}async function z(e,r$1,n={}){var a;let o,s=!1;const[i$1,u]=await Promise.all([K(e.operations.GetFeature.url,r$1,e.operations.GetFeature.outputFormat,{...n,count:1}),L$1(e.operations.GetFeature.url,{responseType:"text",query:Z(r$1,void 0,{...n,count:1}),signal:null==n?void 0:n.signal})]),l="FeatureCollection"===i$1.type&&(null==(a=i$1.features[0])?void 0:a.geometry);if(l){let e;switch(o=i.fromJSON(r(l.type)),l.type){case"Point":e=l.coordinates;break;case"LineString":case"MultiPoint":e=l.coordinates[0];break;case"MultiLineString":case"Polygon":e=l.coordinates[0][0];break;case"MultiPolygon":e=l.coordinates[0][0][0];}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(t){const r=e[0].toFixed(3),n=e[1].toFixed(3),a=parseFloat(t[1]).toFixed(3);r===parseFloat(t[2]).toFixed(3)&&n===a&&(s=!0);}}return {geometryType:o,swapXY:s}}async function H(e,r,n){return J(r,(await L$1(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:x,TYPENAME:r,...null==n?void 0:n.customParameters},signal:null==n?void 0:n.signal})).data)}function J(e,t){const{name:a}=re(e),s=te(t);ae(s);const i=n$1(n(s.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:re(e.getAttribute("type")).name})}),(({name:e})=>e===a));if(r$1(i)){const e=n$1(n(s.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===i.typeName));if(r$1(e))return B(e)}throw new s$1(P,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(s)})}const Q=new Set(["objectid","fid"]);function B(e){var t,n$1;const a=[],o$1=[];let s;const i=n(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const u of i){const i=u.getAttribute("name");if(!i)continue;let l,p;if(u.hasAttribute("type")?l=re(u.getAttribute("type")).name:o(u,{simpleType:{restriction:e=>(l=re(e.getAttribute("base")).name,{maxLength:e=>{p=+e.getAttribute("value");}})}}),!l)continue;const c="true"===u.getAttribute("nillable");let m=!1;switch(l.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":o$1.push(new y({name:i,alias:i,type:"integer",nullable:c}));break;case"float":case"double":case"decimal":o$1.push(new y({name:i,alias:i,type:"double",nullable:c}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":o$1.push(new y({name:i,alias:i,type:"string",nullable:c,length:null!=(t=p)?t:255}));break;case"datetime":case"date":o$1.push(new y({name:i,alias:i,type:"date",nullable:c,length:null!=(n$1=p)?n$1:36}));break;case"pointpropertytype":s="point",m=!0;break;case"multipointpropertytype":s="multipoint",m=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":s="polyline",m=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":s="polygon",m=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":m=!0,a.push(new s$1(A,`geometry type '${l}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:a.push(new s$1(k,`Unknown field type '${l}'`,{type:(new XMLSerializer).serializeToString(e)}));}m&&o$1.push(new y({name:i,alias:i,type:"geometry",nullable:c}));}for(const r of o$1)if("integer"===r.type&&!r.nullable&&Q.has(r.name.toLowerCase())){r.type="oid";break}return {geometryType:s,fields:o$1,errors:a}}async function K(e$1,n,a,o){let{data:s}=await L$1(e$1,{responseType:"text",query:Z(n,a,o),signal:null==o?void 0:o.signal});s=s.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var i;if(null!=o&&null!=(i=o.dateFields)&&i.length){const e$1=new Set(o.dateFields);return JSON.parse(s,((t,r)=>e$1.has(t)?e(r):r))}return JSON.parse(s)}catch(u){throw new s$1(R,"Error while parsing the response",{response:s,error:u})}}function Z(e,t,r){return {SERVICE:"WFS",REQUEST:"GetFeature",VERSION:x,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null==r?void 0:r.startIndex,COUNT:null==r?void 0:r.count,...null==r?void 0:r.customParameters}}function te(e){return (new DOMParser).parseFromString(e.trim(),"text/xml")}function re(e){const[t,r]=e.split(":");return {prefix:r?t:"",name:null!=r?r:t}}function ne(e){const t=e.firstElementChild.getAttribute("version");if(t&&t!==x)throw new s$1(U,`Unsupported WFS version ${t}. Supported version: ${x}`)}function ae(e){let t,n;if(o(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent;}})}),t)throw new s$1(`wfs-layer:${t}`,n)}

export { D, K, W, X, _, v };
