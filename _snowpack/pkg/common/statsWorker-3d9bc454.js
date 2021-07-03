import { K as u$2 } from './mathUtils-a477cc74.js';
import { k } from './SpatialReference-843b1520.js';
import { o, i, r, u as u$1, s as s$1 } from './utils-7cd87224.js';
import { a } from './fieldUtils-22be41cd.js';
import './JSONSupport-9346590f.js';
import './Message-70b34921.js';
import './subclass-fe5fcf78.js';
import './promiseUtils-2ff2b194.js';
import './enumeration-7d0c165d.js';
import './jsonMap-e142bd84.js';
import './Loadable-d16b3d7d.js';
import './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let s=null;async function u(e){const{attribute:a,featuresJSON:l}=e,{normalizationType:r$1,normalizationField:s,minValue:u,maxValue:c,fieldType:p}=a,f=await m({field:a.field,valueExpression:a.valueExpression,normalizationType:r$1,normalizationField:s,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams},l),d=o({normalizationType:r$1,normalizationField:s,minValue:u,maxValue:c}),v="string"===p?i({values:f,supportsNullCount:d}):r({values:f,minValue:u,maxValue:c,useSampleStdDev:!r$1,supportsNullCount:d});return u$1(v,"date"===p)}async function m(i,t){if(!t)return [];const n=i.field,o=i.valueExpression,u=i.normalizationType,m=i.normalizationField,c=i.normalizationTotal,p=[],f=i.viewInfoParams;let d=null,v=null;if(o){if(!s){const{arcadeUtils:e}=await a();s=e;}d=s.createFunction(o),v=f&&s.getViewInfo({viewingMode:f.viewingMode,scale:f.scale,spatialReference:new k(f.spatialReference)});}return t.forEach((a=>{const i=a.attributes;let t;if(o){const e=s.createExecContext(a,v);t=s.executeFunction(d,e);}else i&&(t=i[n]);if(u&&u$2(t)){const e=i&&parseFloat(i[m]);t=s$1(t,u,e,c);}p.push(t);})),p}

export { m as getDataValues, u as summaryStatistics };
