import { o as o$1 } from './Color-ae84a22a.js';
import { L } from './Loadable-d16b3d7d.js';
import { r, f as e, x as o } from './Message-70b34921.js';
import { j } from './mat3-6cb40036.js';
import { e as e$2 } from './quat-44770d30.js';
import { i as t } from './mathUtils-a477cc74.js';
import { m as n, j as l, q as r$1, a as r$2, p as o$2, w as r$3, B as t$2, x as n$1, F as d, y as f$1, z as e$3, G as o$3, C as i$1, D as o$4, E as n$3, H as a } from './DefaultMaterial_COLOR_GAMMA-7c4a23ef.js';
import { m, c, y, f as f$2 } from './MeshComponent-13ddf9e0.js';
import { T, i, c as c$1, x, u, L as L$1, O, E } from './BufferView-3733efba.js';
import { b as e$1, f, h as t$1, d as r$4, c as e$4, i as n$2 } from './vec33-d394808f.js';
import { k } from './georeference-fa24082e.js';
import './subclass-fe5fcf78.js';
import './Polyline-ccd8fb47.js';
import './JSONSupport-9346590f.js';
import './promiseUtils-2ff2b194.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './vec4-8546ad05.js';
import './types-fe598891.js';
import './asyncUtils-015dfd6e.js';
import './compilerUtils-7bbb76dc.js';
import './Version-271d30d5.js';
import './mat4-8eb66d33.js';
import './vec2-513a0296.js';
import './vec2f64-3fb878b3.js';
import './earcut-d81146f9.js';
import './deduplicate-b910185f.js';
import './persistableUrlUtils-59858a7e.js';
import './screenshotUtils-abc7263a.js';
import './unitUtils-b17203be.js';
import './projection-c73dd3c4.js';
import './assets-73c8998f.js';
import './aaBoundingRect-68336c41.js';
import './projection-7d8c2528.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function G(t,e,r$1){const o=new n(K(r$1)),s=(await l(o,e,r$1,!0)).model,a=s.lods.shift(),i=new Map,u=new Map;s.textures.forEach(((t,e)=>i.set(e,Q(t)))),s.materials.forEach(((t,e)=>u.set(e,H(t,i))));const l$1=P(a);for(const n of a.parts)J(l$1,n,u);const{position:c,normal:f,tangent:p,color:d,texCoord0:g}=l$1.vertexAttributes,x={position:c.typedBuffer,normal:r(f)?f.typedBuffer:null,tangent:r(p)?p.typedBuffer:null,uv:r(g)?g.typedBuffer:null,color:r(d)?d.typedBuffer:null},b=k(x,t,r$1);return {transform:b.transform,components:l$1.components,spatialReference:t.spatialReference,vertexAttributes:new y({position:b.vertexAttributes.position,normal:b.vertexAttributes.normal,tangent:b.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function K(t){return null!=t&&t.resolveFile?{busy:!1,request:async(r$1,o,s)=>{const a=t.resolveFile(r$1),i="image"===o?"image":"binary"===o?"array-buffer":"json";return (await L(a,{responseType:i,signal:r(s)?s.signal:null})).data}}:null}function P(t){let e=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1};for(const{attributes:{position:o,normal:n,color:s,tangent:a,texCoord0:i}}of t.parts)e+=o.count,n&&(r.normal=!0),s&&(r.color=!0),a&&(r.tangent=!0),i&&(r.texCoord0=!0);return {writeIndex:0,vertexAttributes:{position:r$1(T,e),normal:r.normal?r$1(i,e):null,tangent:r.tangent?r$1(c$1,e):null,color:r.color?r$1(x,e):null,texCoord0:r.texCoord0?r$1(u,e):null},components:[]}}function Q(t){return new m({data:t.data,wrap:Y(t.parameters.wrap)})}function H(e$1,n){const s=new o$1(tt(e$1.color,e$1.opacity)),a=e$1.emissiveFactor?new o$1(et(e$1.emissiveFactor)):null;return new c({color:s,colorTexture:e(o(e$1.textureColor,(t=>n.get(t)))),normalTexture:e(o(e$1.textureNormal,(t=>n.get(t)))),emissiveColor:a,emissiveTexture:e(o(e$1.textureEmissive,(t=>n.get(t)))),occlusionTexture:e(o(e$1.textureOcclusion,(t=>n.get(t)))),alphaMode:X(e$1.alphaMode),alphaCutoff:e$1.alphaCutoff,doubleSided:e$1.doubleSided,metallic:e$1.metallicFactor,roughness:e$1.roughnessFactor,metallicRoughnessTexture:e(o(e$1.textureMetallicRoughness,(t=>n.get(t))))})}function J(t,e,r$1){const{position:o,normal:i$1,tangent:u,color:c,texCoord0:f$3}=t.vertexAttributes,m=t.writeIndex,p=e.attributes.position.count;if(e$1(o.slice(m,p),e.attributes.position,e.transform),r(e.attributes.normal)&&r(i$1)){const t=j(e$2(),e.transform);f(i$1.slice(m,p),e.attributes.normal,t);}else r(i$1)&&t$1(i$1,0,0,1,{dstIndex:m,count:p});if(r(e.attributes.tangent)&&r(u)){const t=j(e$2(),e.transform);r$3(u.slice(m,p),e.attributes.tangent,t);}else r(u)&&t$2(u,0,0,1,1,{dstIndex:m,count:p});if(r(e.attributes.texCoord0)&&r(f$3)?n$1(f$3.slice(m,p),e.attributes.texCoord0):r(f$3)&&d(f$3,0,0,{dstIndex:m,count:p}),r(e.attributes.color)&&r(c)){const t=e.attributes.color,r=c.slice(m,p);if(4===t.elementCount)t instanceof c$1?f$1(r,t,255):t instanceof x?e$3(r,t):t instanceof L$1&&o$3(r,t,8);else {t$2(r,255,255,255,255);const e=O.fromTypedArray(r.typedBuffer,r.typedBufferStride);t instanceof i?r$4(e,t,255):t instanceof O?e$4(e,t):t instanceof E&&n$2(e,t,8);}}else r(c)&&t$2(c.slice(m,p),255,255,255,255);const b=W(e.indices||p,e.primitiveType);if(m)for(let n=0;n<b.length;n++)b[n]+=m;t.components.push(new f$2({faces:b,material:r$1.get(e.material).clone(),trustSourceNormals:!0})),t.writeIndex+=p;}function W(t,e){switch(e){case 4:return n$3(t,a);case 5:return o$4(t);case 6:return i$1(t)}}function X(t){switch(t){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function Y(t){return {horizontal:Z(t.s),vertical:Z(t.t)}}function Z(t){switch(t){case 33071:return "clamp";case 33648:return "mirror";case 10497:return "repeat"}}function $(t){return t**(1/o$2)*255}function tt(t,e){return r$2($(t[0]),$(t[1]),$(t[2]),e)}function et(t$1){return t($(t$1[0]),$(t$1[1]),$(t$1[2]))}

export { G as loadGLTFMesh };
