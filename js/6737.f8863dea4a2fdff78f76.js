(self.webpackChunk=self.webpackChunk||[]).push([[6737],{76737:(e,t,s)=>{"use strict";s.r(t),s.d(t,{execute:()=>o});var a=s(20215),r=s(80219);let n;function o(e,t={}){let s=t.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json";const o=(0,r.f)(t.signal);return delete t.signal,r.e.invokeStaticMessage("request",{url:e,options:t},{signal:o}).then((async r=>{let i,l,u,c,f;if(r.data)if(r.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(i=new Blob([r.data]),"json"!==s&&"text"!==s||(n||(n=new FileReaderSync),c=n.readAsText(i),"json"!==s)))){try{l=JSON.parse(c||null)}catch(s){const r={...s,url:e,requestOptions:t};throw new a.s("request:server",s.message,r)}if(l.error){const s={...l.error,url:e,requestOptions:t};throw new a.s("request:server",l.error.message,s)}}}else"native"===s&&(r.data.signal=o,u=await fetch(r.data.url,r.data));switch(s){case"blob":f=i;break;case"json":f=l;break;case"native":f=u;break;case"text":f=c;break;default:f=r.data}return{data:f,requestOptions:t,ssl:r.ssl,url:e}}))}}}]);