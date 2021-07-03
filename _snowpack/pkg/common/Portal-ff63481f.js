import { e as e$1, p as p$4, a, i as i$1 } from './JSONSupport-9346590f.js';
import { y as y$1, d as s$1, r } from './Message-70b34921.js';
import './intl-21ab9759.js';
import { L, f, a as n$1 } from './Loadable-d16b3d7d.js';
import { s, a as a$1, b, m as m$1, w as w$1 } from './promiseUtils-2ff2b194.js';
import { y, n, d } from './subclass-fe5fcf78.js';
import { e as e$2 } from './reader-fa0f173d.js';
import { M } from './Polyline-ccd8fb47.js';
import { o } from './jsonMap-e142bd84.js';
import { k } from './SpatialReference-843b1520.js';
import { g } from './Point-ee7951c3.js';
import { i as i$2 } from './locale-b874fc68.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var u$1;const m=new o({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});let l$2=u$1=class extends p$4{constructor(t){super(t),this.categories=null,this.disableExtraQuery=!1,this.extent=null,this.num=10,this.query=null,this.sortField=null,this.start=1;}get sortOrder(){return this._get("sortOrder")||"asc"}set sortOrder(t){"asc"!==t&&"desc"!==t||this._set("sortOrder",t);}clone(){return new u$1({categories:this.categories?y$1(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})}toRequestOptions(t,r){let e,s;if(this.categories&&(e=this.categories.map((t=>Array.isArray(t)?JSON.stringify(t):t))),this.extent){const t=g(this.extent,k.WGS84);t&&(s=`${t.xmin},${t.ymin},${t.xmax},${t.ymax}`);}let o=this.query;!this.disableExtraQuery&&t.extraQuery&&(o="("+o+")"+t.extraQuery);const i={categories:e,bbox:s,q:o,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(i.sortField=this.sortField.split(",").map((t=>m.toJSON(t.trim()))).join(","),i.sortOrder=this.sortOrder),{query:{...r,...i}}}};e$1([y()],l$2.prototype,"categories",void 0),e$1([y()],l$2.prototype,"disableExtraQuery",void 0),e$1([y({type:M})],l$2.prototype,"extent",void 0),e$1([y()],l$2.prototype,"num",void 0),e$1([y()],l$2.prototype,"query",void 0),e$1([y()],l$2.prototype,"sortField",void 0),e$1([y()],l$2.prototype,"sortOrder",null),e$1([y()],l$2.prototype,"start",void 0),l$2=u$1=e$1([n("esri.portal.PortalQueryParams")],l$2);var c=l$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let e=class extends p$4{constructor(r){super(r),this.nextQueryParams=null,this.queryParams=null,this.results=null,this.total=null;}};e$1([y()],e.prototype,"nextQueryParams",void 0),e$1([y()],e.prototype,"queryParams",void 0),e$1([y()],e.prototype,"results",void 0),e$1([y()],e.prototype,"total",void 0),e=e$1([n("esri.portal.PortalQueryResult")],e);var p$3=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p$2=class extends a{constructor(r){super(r),this.created=null,this.id=null,this.portal=null,this.title=null,this.username=null;}get url(){const r=this.get("portal.restUrl");return r?`${r}/content/users/${this.username}/${this.id}`:null}toJSON(){throw new s("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")}};e$1([y({type:Date})],p$2.prototype,"created",void 0),e$1([y()],p$2.prototype,"id",void 0),e$1([y()],p$2.prototype,"portal",void 0),e$1([y()],p$2.prototype,"title",void 0),e$1([y({readOnly:!0})],p$2.prototype,"url",null),e$1([y()],p$2.prototype,"username",void 0),p$2=e$1([n("esri.portal.PortalFolder")],p$2);var l$1=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let l=class extends a{constructor(t){super(t),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=!1,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.sortField=null,this.sortOrder=null,this.tags=null,this.title=null;}get thumbnailUrl(){const t=this.url,r=this.thumbnail;return t&&r?this.portal._normalizeUrl(`${t}/info/${r}?f=json`):null}get url(){const t=this.get("portal.restUrl");return t?t+"/community/groups/"+this.id:null}fetchCategorySchema(t){return this.portal._request(this.url+"/categorySchema",t).then((r=>{const e=r.categorySchema||[];return e.some((t=>"contentCategorySetsGroupQuery.LivingAtlas"===t.source))?this._fetchCategorySchemaSet("LivingAtlas",t):e}))}fetchMembers(t){return this.portal._request(this.url+"/users",t)}getThumbnailUrl(t){let r=this.thumbnailUrl;return r&&t&&(r+=`&w=${t}`),r}toJSON(){throw new s("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}queryItems(t,r){let e=d(c,t);return parseFloat(this.portal.currentVersion)>5?(e=e||new c,this.portal._queryPortal(`/content/groups/${this.id}/search`,e,"PortalItem",r)):(e=e?e.clone():new c,e.query="group:"+this.id+(e.query?" "+e.query:""),this.portal.queryItems(e,r))}_fetchCategorySchemaSet(t,e){return this.portal._fetchSelf(this.portal.authMode,!0,e).then((t=>{const o=t.contentCategorySetsGroupQuery;if(o){const t=new c;return t.disableExtraQuery=!0,t.num=1,t.query=o,this.portal.queryGroups(t,e)}throw new s("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")})).then((o=>{if(o.total){const r=o.results[0],s=new c;return s.num=1,s.query=`typekeywords:"${t}"`,r.queryItems(s,e)}throw new s("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")})).then((t=>{if(t.total){return t.results[0].fetchData("json",e).then((t=>{const r=t&&t.categorySchema;return r&&r.length?r:[]}))}return []}))}};e$1([y()],l.prototype,"access",void 0),e$1([y({type:Date})],l.prototype,"created",void 0),e$1([y()],l.prototype,"description",void 0),e$1([y()],l.prototype,"id",void 0),e$1([y()],l.prototype,"isInvitationOnly",void 0),e$1([y({type:Date})],l.prototype,"modified",void 0),e$1([y()],l.prototype,"owner",void 0),e$1([y()],l.prototype,"portal",void 0),e$1([y()],l.prototype,"snippet",void 0),e$1([y()],l.prototype,"sortField",void 0),e$1([y()],l.prototype,"sortOrder",void 0),e$1([y()],l.prototype,"tags",void 0),e$1([y()],l.prototype,"thumbnail",void 0),e$1([y({readOnly:!0})],l.prototype,"thumbnailUrl",null),e$1([y()],l.prototype,"title",void 0),e$1([y({readOnly:!0})],l.prototype,"url",null),l=e$1([n("esri.portal.PortalGroup")],l);var p$1=l;

var PortalGroup = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': p$1
});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var i;let u=i=class extends a{constructor(...t){super(...t),this.access=null,this.created=null,this.culture=null,this.description=null,this.email=null,this.fullName=null,this.modified=null,this.orgId=null,this.portal=null,this.preferredView=null,this.privileges=null,this.region=null,this.role=null,this.roleId=null,this.sourceJSON=null,this.units=null,this.username=null,this.userType=null;}get thumbnailUrl(){const t=this.url,r=this.thumbnail;return t&&r?this.portal._normalizeUrl(`${t}/info/${r}?f=json`):null}get userContentUrl(){const t=this.get("portal.restUrl");return t?`${t}/content/users/${this.username}`:null}get url(){const t=this.get("portal.restUrl");return t?`${t}/community/users/${this.username}`:null}addItem(t){const r=t&&t.item,e=t&&t.data,o=t&&t.folder,l={method:"post"};r&&(l.query=r.createPostQuery(),null!=e&&("string"==typeof e?l.query.text=e:"object"==typeof e&&(l.query.text=JSON.stringify(e))));let s=this.userContentUrl;return o&&(s+="/"+("string"==typeof o?o:o.id)),this.portal._request(s+"/addItem",l).then((t=>(r.id=t.id,r.portal=this.portal,r.loaded?r.reload():r.load())))}deleteItem(t){let r=this.userContentUrl;return t.ownerFolder&&(r+="/"+t.ownerFolder),this.portal._request(r+`/items/${t.id}/delete`,{method:"post"}).then((()=>{t.id=null,t.portal=null;}))}deleteItems(t){const r=this.userContentUrl+"/deleteItems",e=t.map((t=>t.id));if(e.length){const o={method:"post",query:{items:e.join(",")}};return this.portal._request(r,o).then((()=>{t.forEach((t=>{t.id=null,t.portal=null;}));}))}return Promise.resolve(void 0)}fetchFolders(){const t={query:{num:1}};return this.portal._request(this.userContentUrl,t).then((t=>{let r;return r=t&&t.folders?t.folders.map((t=>{const r=l$1.fromJSON(t);return r.portal=this.portal,r})):[],r}))}fetchGroups(){return this.portal._request(this.url).then((t=>{let r;return r=t&&t.groups?t.groups.map((t=>{const r=p$1.fromJSON(t);return r.portal=this.portal,r})):[],r}))}fetchItems(t){t||(t={});let r,e=this.userContentUrl;return t.folder&&(e+="/"+t.folder.id),import('./PortalItem-4692b2a9.js').then((({default:o})=>{r=o;const l={folders:!1,num:t.num||10,start:t.start||1,sortField:t.sortField||"created",sortOrder:t.sortOrder||"asc"};return this.portal._request(e,{query:l})})).then((t=>{let e;return t&&t.items?(e=t.items.map((t=>{const e=r.fromJSON(t);return e.portal=this.portal,e})),Promise.all(e.map((t=>t.load()))).catch((t=>t)).then((()=>({items:e,nextStart:t.nextStart,total:t.total})))):{items:[],nextStart:-1,total:0}}))}fetchTags(){return this.portal._request(this.url+"/tags").then((t=>t.tags))}getThumbnailUrl(t){let r=this.thumbnailUrl;return r&&t&&(r+=`&w=${t}`),r}queryFavorites(t){return this.favGroupId?(this._favGroup||(this._favGroup=new p$1({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(t)):Promise.reject(new s("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))}toJSON(){throw new s("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");const r=new i;return r.sourceJSON=t,r.read(t),r}};e$1([y()],u.prototype,"access",void 0),e$1([y({type:Date})],u.prototype,"created",void 0),e$1([y()],u.prototype,"culture",void 0),e$1([y()],u.prototype,"description",void 0),e$1([y()],u.prototype,"email",void 0),e$1([y()],u.prototype,"favGroupId",void 0),e$1([y()],u.prototype,"fullName",void 0),e$1([y({type:Date})],u.prototype,"modified",void 0),e$1([y()],u.prototype,"orgId",void 0),e$1([y()],u.prototype,"portal",void 0),e$1([y()],u.prototype,"preferredView",void 0),e$1([y()],u.prototype,"privileges",void 0),e$1([y()],u.prototype,"region",void 0),e$1([y()],u.prototype,"role",void 0),e$1([y()],u.prototype,"roleId",void 0),e$1([y()],u.prototype,"sourceJSON",void 0),e$1([y()],u.prototype,"thumbnail",void 0),e$1([y({readOnly:!0})],u.prototype,"thumbnailUrl",null),e$1([y()],u.prototype,"units",void 0),e$1([y({readOnly:!0})],u.prototype,"userContentUrl",null),e$1([y({readOnly:!0})],u.prototype,"url",null),e$1([y()],u.prototype,"username",void 0),e$1([y()],u.prototype,"userType",void 0),u=i=e$1([n("esri.portal.PortalUser")],u);var p=u;

var PortalUser = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': p
});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var _;let O;const U={PortalGroup:()=>Promise.resolve().then(function () { return PortalGroup; }),PortalItem:()=>import('./PortalItem-4692b2a9.js'),PortalUser:()=>Promise.resolve().then(function () { return PortalUser; })};let w=_=class extends(i$1(f)){constructor(e){super(e),this.access=null,this.allSSL=!1,this.authMode="auto",this.authorizedCrossOriginDomains=null,this.basemapGalleryGroupQuery=null,this.bingKey=null,this.canListApps=!1,this.canListData=!1,this.canListPreProvisionedItems=!1,this.canProvisionDirectPurchase=!1,this.canSearchPublic=!0,this.canShareBingPublic=!1,this.canSharePublic=!1,this.canSignInArcGIS=!1,this.canSignInIDP=!1,this.colorSetsGroupQuery=null,this.commentsEnabled=!1,this.created=null,this.culture=null,this.customBaseUrl=null,this.defaultBasemap=null,this.defaultExtent=null,this.defaultVectorBasemap=null,this.description=null,this.eueiEnabled=null,this.featuredGroups=null,this.featuredItemsGroupQuery=null,this.galleryTemplatesGroupQuery=null,this.livingAtlasGroupQuery=null,this.hasCategorySchema=!1,this.helperServices=null,this.homePageFeaturedContent=null,this.homePageFeaturedContentCount=null,this.httpPort=null,this.httpsPort=null,this.id=null,this.ipCntryCode=null,this.isPortal=!1,this.isReadOnly=!1,this.layerTemplatesGroupQuery=null,this.maxTokenExpirationMinutes=null,this.modified=null,this.name=null,this.portalHostname=null,this.portalMode=null,this.portalProperties=null,this.region=null,this.rotatorPanels=null,this.showHomePageDescription=!1,this.sourceJSON=null,this.supportsHostedServices=!1,this.symbolSetsGroupQuery=null,this.templatesGroupQuery=null,this.units=null,this.url=s$1.portalUrl,this.urlKey=null,this.user=null,this.useStandardizedQuery=!1,this.useVectorBasemaps=!1,this.vectorBasemapGalleryGroupQuery=null;}normalizeCtorArgs(e){return "string"==typeof e?{url:e}:e}destroy(){this._esriId_credentialCreateHandle&&(this._esriId_credentialCreateHandle.remove(),this._esriId_credentialCreateHandle=null);}readAuthorizedCrossOriginDomains(e){if(e)for(const r of e)-1===s$1.request.trustedServers.indexOf(r)&&s$1.request.trustedServers.push(r);return e}readDefaultBasemap(e){if(e){const t=O.fromJSON(e);return t.portalItem={portal:this},t}return null}readDefaultVectorBasemap(e){if(e){const t=O.fromJSON(e);return t.portalItem={portal:this},t}return null}get extraQuery(){const e=!(this.user&&this.user.orgId)||this.canSearchPublic;return this.id&&!e?` AND orgid:${this.id}`:null}get isOrganization(){return !!this.access}get restUrl(){let e=this.url;if(e){const t=e.indexOf("/sharing");e=t>0?e.substring(0,t):this.url.replace(/\/+$/,""),e+="/sharing/rest";}return e}get thumbnailUrl(){const e=this.restUrl,t=this.thumbnail;return e&&t?this._normalizeSSL(e+"/portals/self/resources/"+t):null}readUrlKey(e){return e?e.toLowerCase():e}readUser(e){let t=null;return e&&(t=p.fromJSON(e),t.portal=this),t}load(e){const t=import('./Basemap-ad33b4b0.js').then(function (n) { return n.B; }).then((({default:t})=>{a$1(e),O=t;})).then((()=>this.sourceJSON?this.sourceJSON:this._fetchSelf(this.authMode,!1,e))).then((e=>{if(n$1){const e=n$1;this.credential=e.findCredential(this.restUrl),this.credential||this.authMode!==_.AUTH_MODE_AUTO||(this._esriId_credentialCreateHandle=e.on("credential-create",(()=>{e.findCredential(this.restUrl)&&this._signIn();})));}this.sourceJSON=e,this.read(e);}));return this.addResolvingPromise(t),Promise.resolve(this)}async createClosestFacilityTask(){await this.load();const e=this._getHelperServiceUrl("closestFacility");return new((await import('./ClosestFacilityTask-392aa0af.js')).default)(e)}async createElevationLayers(){await this.load();const e=this._getHelperService("defaultElevationLayers"),t=(await import('./ElevationLayer-87e40916.js')).default;return e?e.map((e=>new t({id:e.id,url:e.url}))):[]}async createGeometryService(){await this.load();const e=this._getHelperServiceUrl("geometry");return new((await import('./GeometryService-69f6e1e5.js')).default)({url:e})}async createPrintTask(){await this.load();const e=this._getHelperServiceUrl("printTask");return new((await import('./PrintTask-4da8eef9.js')).default)(e)}async createRouteTask(){await this.load();const e=this._getHelperServiceUrl("route");return new((await import('./RouteTask-ee96e053.js')).default)(e)}async createServiceAreaTask(){await this.load();const e=this._getHelperServiceUrl("serviceArea");return new((await import('./ServiceAreaTask-e3092657.js')).default)(e)}fetchBasemaps(e,t){const r=new c;return r.query=e||(this.useVectorBasemaps?this.vectorBasemapGalleryGroupQuery:this.basemapGalleryGroupQuery),r.disableExtraQuery=!0,this.queryGroups(r,t).then((e=>{if(r.num=100,r.query='type:"Web Map" -type:"Web Application"',e.total){const o=e.results[0];return r.sortField=o.sortField||"name",r.sortOrder=o.sortOrder||"desc",o.queryItems(r,t)}return null})).then((e=>{let t;return t=e&&e.total?e.results.filter((e=>"Web Map"===e.type)).map((e=>new O({portalItem:e}))):[],t}))}fetchCategorySchema(e){return this.hasCategorySchema?this._request(this.restUrl+"/portals/self/categorySchema",e).then((e=>e.categorySchema)):b(e)?Promise.reject(m$1()):Promise.resolve([])}fetchFeaturedGroups(e){const t=this.featuredGroups,r=new c;if(r.num=100,r.sortField="title",t&&t.length){const o=[];for(const e of t)o.push(`(title:"${e.title}" AND owner:${e.owner})`);return r.query=o.join(" OR "),this.queryGroups(r,e).then((e=>e.results))}return b(e)?Promise.reject(m$1()):Promise.resolve([])}fetchRegions(e){const t=this.user&&this.user.culture||this.culture||i$2();return this._request(this.restUrl+"/portals/regions",{...e,query:{culture:t}})}static getDefault(){return _._default&&!_._default.destroyed||(_._default=new _),_._default}queryGroups(e,t){return this._queryPortal("/community/groups",e,"PortalGroup",t)}queryItems(e,t){return this._queryPortal("/search",e,"PortalItem",t)}queryUsers(e,t){return e.sortField||(e.sortField="username"),this._queryPortal("/community/users",e,"PortalUser",t)}toJSON(){throw new s("internal:not-yet-implemented","Portal.toJSON is not yet implemented")}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new _({sourceJSON:e})}_getHelperService(e){const t=this.helperServices&&this.helperServices[e];if(!t)throw new s("portal:service-not-found",`The \`helperServices\` do not include an entry named "${e}"`);return t}_getHelperServiceUrl(e){const t=this._getHelperService(e);if(!t.url)throw new s("portal:service-url-not-found",`The \`helperServices\` entry "${e}" does not include a \`url\` value`);return t.url}_fetchSelf(e=this.authMode,t=!1,r){const o=this.restUrl+"/portals/self",s={authMode:e,query:{culture:i$2().toLowerCase()},...r};return "auto"===s.authMode&&(s.authMode="no-prompt"),t&&(s.query.default=!0),this._request(o,s)}_queryPortal(e,t,r,o){const s=d(c,t),i=t=>this._request(this.restUrl+e,{...s.toRequestOptions(this),...o}).then((e=>{const r=s.clone();return r.start=e.nextStart,new p$3({nextQueryParams:r,queryParams:s,total:e.total,results:_._resultsToTypedArray(t,{portal:this},e,o)})})).then((e=>Promise.all(e.results.map((t=>"function"==typeof t.when?t.when():e))).then((()=>e),(t=>(w$1(t),e)))));return r&&U[r]?U[r]().then((({default:e})=>(a$1(o),i(e)))):i()}_signIn(){if(this.authMode===_.AUTH_MODE_ANONYMOUS)return Promise.reject(new s("portal:invalid-auth-mode",`Current "authMode"' is "${this.authMode}"`));if("failed"===this.loadStatus)return Promise.reject(this.loadError);const e=e=>Promise.resolve().then((()=>"not-loaded"===this.loadStatus?(e||(this.authMode="immediate"),this.load().then((()=>null))):"loading"===this.loadStatus?this.load().then((()=>this.credential?null:(this.credential=e,this._fetchSelf("immediate")))):this.user&&this.credential===e?null:(this.credential=e,this._fetchSelf("immediate")))).then((e=>{e&&(this.sourceJSON=e,this.read(e));}));return n$1?n$1.getCredential(this.restUrl).then((t=>e(t))):e(this.credential)}_normalizeSSL(e){return e.replace(/^http:/i,"https:").replace(":7080",":7443")}_normalizeUrl(e){const t=this.credential&&this.credential.token;return this._normalizeSSL(t?e+(e.indexOf("?")>-1?"&":"?")+"token="+t:e)}_requestToTypedArray(e,t,r){return this._request(e,t).then((e=>{const t=_._resultsToTypedArray(r,{portal:this},e);return Promise.all(t.map((t=>"function"==typeof t.when?t.when():e))).then((()=>t),(()=>t))}))}_request(e,t={}){const r={f:"json",...t.query},{authMode:s=(this.authMode===_.AUTH_MODE_ANONYMOUS?"anonymous":"auto"),body:i=null,cacheBust:a=!1,method:l="auto",responseType:n="json",signal:u}=t,p={authMode:s,body:i,cacheBust:a,method:l,query:r,responseType:n,timeout:0,signal:u};return L(this._normalizeSSL(e),p).then((e=>e.data))}static _resultsToTypedArray(e,t,r$1,o){let s;if(r$1){const i=r(o)?o.signal:null;s=r$1.listings||r$1.notifications||r$1.userInvitations||r$1.tags||r$1.items||r$1.groups||r$1.comments||r$1.provisions||r$1.results||r$1.relatedItems||r$1,(e||t)&&(s=s.map((r=>{const o=Object.assign(e?e.fromJSON(r):r,t);return "function"==typeof o.load&&o.load(i),o})));}else s=[];return s}};w.AUTH_MODE_ANONYMOUS="anonymous",w.AUTH_MODE_AUTO="auto",w.AUTH_MODE_IMMEDIATE="immediate",e$1([y()],w.prototype,"access",void 0),e$1([y()],w.prototype,"allSSL",void 0),e$1([y()],w.prototype,"authMode",void 0),e$1([y()],w.prototype,"authorizedCrossOriginDomains",void 0),e$1([e$2("authorizedCrossOriginDomains")],w.prototype,"readAuthorizedCrossOriginDomains",null),e$1([y()],w.prototype,"basemapGalleryGroupQuery",void 0),e$1([y()],w.prototype,"bingKey",void 0),e$1([y()],w.prototype,"canListApps",void 0),e$1([y()],w.prototype,"canListData",void 0),e$1([y()],w.prototype,"canListPreProvisionedItems",void 0),e$1([y()],w.prototype,"canProvisionDirectPurchase",void 0),e$1([y()],w.prototype,"canSearchPublic",void 0),e$1([y()],w.prototype,"canShareBingPublic",void 0),e$1([y()],w.prototype,"canSharePublic",void 0),e$1([y()],w.prototype,"canSignInArcGIS",void 0),e$1([y()],w.prototype,"canSignInIDP",void 0),e$1([y()],w.prototype,"colorSetsGroupQuery",void 0),e$1([y()],w.prototype,"commentsEnabled",void 0),e$1([y({type:Date})],w.prototype,"created",void 0),e$1([y()],w.prototype,"credential",void 0),e$1([y()],w.prototype,"culture",void 0),e$1([y()],w.prototype,"currentVersion",void 0),e$1([y()],w.prototype,"customBaseUrl",void 0),e$1([y()],w.prototype,"defaultBasemap",void 0),e$1([e$2("defaultBasemap")],w.prototype,"readDefaultBasemap",null),e$1([y({type:M})],w.prototype,"defaultExtent",void 0),e$1([y()],w.prototype,"defaultVectorBasemap",void 0),e$1([e$2("defaultVectorBasemap")],w.prototype,"readDefaultVectorBasemap",null),e$1([y()],w.prototype,"description",void 0),e$1([y()],w.prototype,"eueiEnabled",void 0),e$1([y({readOnly:!0})],w.prototype,"extraQuery",null),e$1([y()],w.prototype,"featuredGroups",void 0),e$1([y()],w.prototype,"featuredItemsGroupQuery",void 0),e$1([y()],w.prototype,"galleryTemplatesGroupQuery",void 0),e$1([y()],w.prototype,"livingAtlasGroupQuery",void 0),e$1([y()],w.prototype,"hasCategorySchema",void 0),e$1([y()],w.prototype,"helpBase",void 0),e$1([y()],w.prototype,"helperServices",void 0),e$1([y()],w.prototype,"helpMap",void 0),e$1([y()],w.prototype,"homePageFeaturedContent",void 0),e$1([y()],w.prototype,"homePageFeaturedContentCount",void 0),e$1([y()],w.prototype,"httpPort",void 0),e$1([y()],w.prototype,"httpsPort",void 0),e$1([y()],w.prototype,"id",void 0),e$1([y()],w.prototype,"ipCntryCode",void 0),e$1([y({readOnly:!0})],w.prototype,"isOrganization",null),e$1([y()],w.prototype,"isPortal",void 0),e$1([y()],w.prototype,"isReadOnly",void 0),e$1([y()],w.prototype,"layerTemplatesGroupQuery",void 0),e$1([y()],w.prototype,"maxTokenExpirationMinutes",void 0),e$1([y({type:Date})],w.prototype,"modified",void 0),e$1([y()],w.prototype,"name",void 0),e$1([y()],w.prototype,"portalHostname",void 0),e$1([y()],w.prototype,"portalMode",void 0),e$1([y()],w.prototype,"portalProperties",void 0),e$1([y()],w.prototype,"region",void 0),e$1([y({readOnly:!0})],w.prototype,"restUrl",null),e$1([y()],w.prototype,"rotatorPanels",void 0),e$1([y()],w.prototype,"showHomePageDescription",void 0),e$1([y()],w.prototype,"sourceJSON",void 0),e$1([y()],w.prototype,"staticImagesUrl",void 0),e$1([y()],w.prototype,"stylesGroupQuery",void 0),e$1([y()],w.prototype,"supportsHostedServices",void 0),e$1([y()],w.prototype,"symbolSetsGroupQuery",void 0),e$1([y()],w.prototype,"templatesGroupQuery",void 0),e$1([y()],w.prototype,"thumbnail",void 0),e$1([y({readOnly:!0})],w.prototype,"thumbnailUrl",null),e$1([y()],w.prototype,"units",void 0),e$1([y()],w.prototype,"url",void 0),e$1([y()],w.prototype,"urlKey",void 0),e$1([e$2("urlKey")],w.prototype,"readUrlKey",null),e$1([y()],w.prototype,"user",void 0),e$1([e$2("user")],w.prototype,"readUser",null),e$1([y()],w.prototype,"useStandardizedQuery",void 0),e$1([y()],w.prototype,"useVectorBasemaps",void 0),e$1([y()],w.prototype,"vectorBasemapGalleryGroupQuery",void 0),w=_=e$1([n("esri.portal.Portal")],w);var G=w;

export { G, c, p };
