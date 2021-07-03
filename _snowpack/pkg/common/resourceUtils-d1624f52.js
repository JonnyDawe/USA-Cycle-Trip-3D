import { D, y as qt, L } from './Loadable-d16b3d7d.js';
import { s } from './promiseUtils-2ff2b194.js';
import { g, r, t } from './Message-70b34921.js';
import './subclass-fe5fcf78.js';
import './Polyline-ccd8fb47.js';
import './JSONSupport-9346590f.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function c(e,t={},a){await e.load(a);const o=D(e.itemUrl,"resources"),{start:n=1,num:c=10,sortOrder:u="asc",sortField:i="created"}=t,l={query:{start:n,num:c,sortOrder:u,sortField:i,token:e.apiKey},signal:g(a,"signal")},p=await e.portal._request(o,l);return {total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function u(e,o,n,c){if(!e.hasPath())throw new s(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const u=e.portalItem;await u.load(c);const i=D(u.userItemUrl,"add"===o?"addResources":"updateResources"),[l,d]=p(e.path),m=await h(n),f=new FormData;return l&&"."!==l&&f.append("resourcesPrefix",l),f.append("fileName",d),f.append("file",m,d),f.append("f","json"),r(c)&&c.access&&f.append("access",c.access),await u.portal._request(i,{method:"post",body:f,signal:g(c,"signal")}),e}async function i(e,a,o){if(!a.hasPath())throw new s("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const n=D(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:a.path},signal:g(o,"signal")}),a.portalItem=null;}async function l(e,t){await e.load(t);const a=D(e.userItemUrl,"removeResources");return e.portal._request(a,{method:"post",query:{deleteAll:!0},signal:g(t,"signal")})}function p(e){const t=e.lastIndexOf("/");return -1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=m(e),[a,o]=p(t);return [a,o,r]}function m(e){const t$1=qt(e);return t(t$1)?[e,""]:[e.slice(0,e.length-t$1.length-1),`.${t$1}`]}async function h(t){if(t instanceof Blob)return t;return (await L(t.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath(D(r,t+a))}function w(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath(D(r,t+a))}

export { u as addOrUpdateResource, h as contentToBlob, c as fetchResources, f as getSiblingOfSameType, w as getSiblingOfSameTypeI, l as removeAllResources, i as removeResource, d as splitPrefixFileNameAndExtension };
