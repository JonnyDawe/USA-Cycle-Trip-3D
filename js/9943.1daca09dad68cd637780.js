(self.webpackChunk=self.webpackChunk||[]).push([[9943],{79943:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j});var i=r(78155),s=r(80987),a=r(91236),o=r(20215),l=r(32769),n=r(95629),p=r(80219),y=r(79506),u=r(88903),h=r(4169),c=r(98548),d=r(37762),m=r(41290),g=r(98420),v=r(22064),b=r(54223),f=r(51218),x=r(21793),w=r(13895),S=r(15576),O=r(28941),I=r(19438),L=r(15022),M=r(88190),N=r(15120);r(20736),r(92858),r(31531),r(83731),r(40130),r(36845),r(9612),r(65352),r(62121),r(43194),r(18559),r(82906),r(52957),r(29126),r(6585),r(3621),r(63358),r(34396),r(81135),r(94527),r(17762),r(60816),r(61888),r(29832),r(31516),r(52109),r(5250),r(49878),r(84271),r(48643),r(73574),r(89710),r(30316),r(4618),r(80657),r(94449),r(97325),r(3629),r(71666),r(47365),r(67079),r(78435),r(53902),r(40481),r(78730),r(18143),r(99987),r(8725),r(76326),r(56416);let E=class extends((0,f.t)((0,L.c)((0,I.s)((0,O.o)((0,v.f)((0,v.y)((0,b.p)((0,w.l)((0,S.w)((0,y.l)((0,g.i)((0,x.e)((0,l.a)(m.b)))))))))))))){constructor(...e){super(...e),this.alwaysRefetch=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,p.r)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(o.w).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const a=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,i.t)(s.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;o=(0,N.e)(a,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");o=(0,N.e)(a,e.sublayers,(0,i.t)(e.origin))}}const l=[],n={writeSublayerStructure:o,...s};let p=o;a.forEach((e=>{const t=e.write({},n);l.push(t),p=p||"user"===e.originOf("visible")})),l.some((e=>Object.keys(e).length>1))&&(t.layers=l),p&&(t.visibleLayers=a.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){const s=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new M.n({layer:this,scale:(0,d.r)({extent:e,width:t})*s}),o=a.toJSON();a.destroy();const l=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},n=e&&e.spatialReference,p=n.wkid||JSON.stringify(n.toJSON());o.dpi*=s;const y={};if(null!=i&&i.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();y.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:t+","+r,...o,...l,...y}}async fetchImage(e,t,r,i){var a,l;const n={responseType:"image",signal:null!=(a=null==i?void 0:i.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,r,i),f:"image",_ts:this.alwaysRefetch?Date.now():null!=(l=null==i?void 0:i.timestamp)?l:null,...this.customParameters,token:this.apiKey}},p=this.parsedUrl.path+"/export";return null==n.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(0,s.L)(p,n).then((e=>e.data)).catch((e=>{if((0,o.g)(e))throw e;throw new o.s("mapimagelayer:image-fetch-error",`Unable to load image: ${p}`,{error:e})})):Promise.reject(new o.s("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query}))}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json"}},{data:r}=await(0,s.L)(this.url,t),{extent:i,fullExtent:o,timeExtent:l}=r,n=i||o;return{fullExtent:n&&c.M.fromJSON(n),timeExtent:l&&a.y.fromJSON({start:l[0],end:l[1]})}}loadAll(){return(0,n.n)(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,s.L)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,i.e)([(0,u.y)()],E.prototype,"alwaysRefetch",void 0),(0,i.e)([(0,u.y)()],E.prototype,"dpi",void 0),(0,i.e)([(0,u.y)()],E.prototype,"gdbVersion",void 0),(0,i.e)([(0,u.y)()],E.prototype,"imageFormat",void 0),(0,i.e)([(0,h.e)("imageFormat",["supportedImageFormatTypes"])],E.prototype,"readImageFormat",null),(0,i.e)([(0,u.y)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],E.prototype,"imageMaxHeight",void 0),(0,i.e)([(0,u.y)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],E.prototype,"imageMaxWidth",void 0),(0,i.e)([(0,u.y)()],E.prototype,"imageTransparency",void 0),(0,i.e)([(0,u.y)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],E.prototype,"isReference",void 0),(0,i.e)([(0,u.y)({json:{read:!1,write:!1}})],E.prototype,"labelsVisible",void 0),(0,i.e)([(0,u.y)({type:["ArcGISMapServiceLayer"]})],E.prototype,"operationalLayerType",void 0),(0,i.e)([(0,u.y)({json:{read:!1,write:!1}})],E.prototype,"popupEnabled",void 0),(0,i.e)([(0,u.y)()],E.prototype,"sourceJSON",void 0),(0,i.e)([(0,u.y)({json:{write:{ignoreOrigin:!0}}})],E.prototype,"sublayers",void 0),(0,i.e)([(0,i.o)("sublayers",{layers:{type:[v.Q]},visibleLayers:{type:[u.N]}})],E.prototype,"writeSublayers",null),(0,i.e)([(0,u.y)({type:["show","hide","hide-children"]})],E.prototype,"listMode",void 0),(0,i.e)([(0,u.y)({json:{read:!1},readOnly:!0,value:"map-image"})],E.prototype,"type",void 0),(0,i.e)([(0,u.y)(w.p)],E.prototype,"url",void 0),E=(0,i.e)([(0,u.n)("esri.layers.MapImageLayer")],E);const j=E}}]);