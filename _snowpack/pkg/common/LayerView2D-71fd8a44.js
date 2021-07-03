import { e as e$1, a as a$1 } from './JSONSupport-9346590f.js';
import { L } from './Collection-32506e74.js';
import { n as n$2 } from './collectionUtils-a13e45d8.js';
import { d } from './watchUtils-06a91cc9.js';
import { n as n$1, y as y$1 } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { r } from './Container-a08586d2.js';
import './Loadable-d16b3d7d.js';
import { p as p$4 } from './Point-ee7951c3.js';
import { p as p$3 } from './jsonUtils-f0a19240.js';
import { M, j } from './Polyline-ccd8fb47.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let e=class extends a$1{};e=e$1([n$1("esri.views.layers.support.ClipArea")],e);var p$2=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var s;let i=s=class extends p$2{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null;}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return (this._get("version")||0)+1}};e$1([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),e$1([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),e$1([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),e$1([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),e$1([y$1({readOnly:!0})],i.prototype,"version",null),i=s=e$1([n$1("esri.views.layers.support.ClipRect")],i);var p$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var y;const n={base:p$4,key:"type",typeMap:{extent:M,polygon:j}};let c$1=y=class extends p$2{constructor(){super(...arguments),this.type="geometry",this.geometry=null;}get version(){return (this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};e$1([y$1({types:n,json:{read:p$3,write:!0}})],c$1.prototype,"geometry",void 0),e$1([y$1({readOnly:!0})],c$1.prototype,"version",null),c$1=y=e$1([n$1("esri.views.layers.support.Geometry")],c$1);var a=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t=class extends p$2{constructor(){super(...arguments),this.type="path",this.path=[];}get version(){return (this._get("version")||0)+1}};e$1([y$1({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),e$1([y$1({readOnly:!0})],t.prototype,"version",null),t=e$1([n$1("esri.views.layers.support.Path")],t);var p=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c=L.ofType({key:"type",base:p$2,typeMap:{rect:p$1,path:p,geometry:a}}),l=e=>{let p=class extends e{constructor(){super(...arguments),this.clips=new c,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1;}initialize(){var t;this.container||(this.container=new r),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([d(this,"suspended",(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate();}),!0),d(this,["layer.opacity","container"],(()=>{var t,e;this.container&&(this.container.opacity=null!=(t=null==(e=this.layer)?void 0:e.opacity)?t:1);}),!0),d(this,["layer.blendMode"],(t=>{this.container&&(this.container.blendMode=t);}),!0),d(this,["layer.effect"],(t=>{this.container&&(this.container.effect=t);}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips");}))]),null!=(t=this.view)&&t.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0);}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0);}),(()=>{}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1;}get updating(){return !this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(t){let e=!0;const s=this.layer,i=s.minScale,r=s.maxScale;if(null!=i&&null!=r){let s=!i,o=!r;!s&&t<=i&&(s=!0),!o&&t>=r&&(o=!0),e=s&&o;}return e}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate());}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1;}isUpdating(){return !1}isRendering(){return !1}canResume(){return !!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return e$1([y$1({type:c,set(t){const e=n$2(t,this._get("clips"),c);this._set("clips",e);}})],p.prototype,"clips",void 0),e$1([y$1()],p.prototype,"moving",void 0),e$1([y$1()],p.prototype,"attached",void 0),e$1([y$1()],p.prototype,"container",void 0),e$1([y$1()],p.prototype,"suspended",void 0),e$1([y$1({readOnly:!0})],p.prototype,"updateParameters",void 0),e$1([y$1()],p.prototype,"updateRequested",void 0),e$1([y$1()],p.prototype,"updating",null),e$1([y$1()],p.prototype,"view",void 0),p=e$1([n$1("esri.views.2d.layers.LayerView2D")],p),p};

export { l };
