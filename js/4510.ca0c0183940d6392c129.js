(self.webpackChunk=self.webpackChunk||[]).push([[4510],{4510:(e,a,i)=>{"use strict";i.r(a),i.d(a,{getDataValues:()=>u,summaryStatistics:()=>r});var n=i(60816),t=i(92858),l=i(32553),o=i(52957);i(78155),i(80219),i(88903),i(20215),i(29126),i(31531),i(80987),i(98548),i(20736),i(4169);let s=null;async function r(e){const{attribute:a,featuresJSON:i}=e,{normalizationType:n,normalizationField:t,minValue:o,maxValue:s,fieldType:r}=a,c=await u({field:a.field,valueExpression:a.valueExpression,normalizationType:n,normalizationField:t,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams},i),m=(0,l.o)({normalizationType:n,normalizationField:t,minValue:o,maxValue:s}),f="string"===r?(0,l.i)({values:c,supportsNullCount:m}):(0,l.r)({values:c,minValue:o,maxValue:s,useSampleStdDev:!n,supportsNullCount:m});return(0,l.u)(f,"date"===r)}async function u(e,a){if(!a)return[];const i=e.field,r=e.valueExpression,u=e.normalizationType,c=e.normalizationField,m=e.normalizationTotal,f=[],p=e.viewInfoParams;let d=null,v=null;if(r){if(!s){const{arcadeUtils:e}=await(0,o.a)();s=e}d=s.createFunction(r),v=p&&s.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new t.k(p.spatialReference)})}return a.forEach((e=>{const a=e.attributes;let t;if(r){const a=s.createExecContext(e,v);t=s.executeFunction(d,a)}else a&&(t=a[i]);if(u&&(0,n.K)(t)){const e=a&&parseFloat(a[c]);t=(0,l.s)(t,u,e,m)}f.push(t)})),f}}}]);