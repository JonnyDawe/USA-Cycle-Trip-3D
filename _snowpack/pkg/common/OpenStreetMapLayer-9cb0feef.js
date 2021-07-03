import { e } from './JSONSupport-9346590f.js';
import './Loadable-d16b3d7d.js';
import { y, n as n$1 } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { x } from './WebTileLayer-9756d3d9.js';
import { S } from './TileInfo-c32d8db8.js';
import b from './PortalItem-4692b2a9.js';
import { M } from './Polyline-ccd8fb47.js';
import { k } from './SpatialReference-843b1520.js';
import './promiseUtils-2ff2b194.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './jsonMap-e142bd84.js';
import './MultiOriginJSONSupport-859401da.js';
import './Layer-aafbe66d.js';
import './Identifiable-3ad643f8.js';
import './BlendLayer-b9fc1ffb.js';
import './OperationalLayer-a01538e1.js';
import './TimeExtent-02acfb1c.js';
import './persistableUrlUtils-59858a7e.js';
import './fieldUtils-22be41cd.js';
import './enumeration-7d0c165d.js';
import './lengthUtils-824a0190.js';
import './unitUtils-b17203be.js';
import './opacityUtils-b92214c2.js';
import './PortalLayer-722467e6.js';
import './asyncUtils-015dfd6e.js';
import './Portal-ff63481f.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './RefreshableLayer-a609d261.js';
import './ScaleRangeLayer-9b1bf210.js';
import './aaBoundingRect-68336c41.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let n=class extends x{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.subDomains=["a","b","c"],this.fullExtent=new M(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,k.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA";}get refreshInterval(){return 0}};e([y({type:b,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"portalItem",void 0),e([y({type:Boolean,json:{read:!1,write:!1}})],n.prototype,"isReference",void 0),e([y({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"refreshInterval",null),e([y({type:S,json:{write:!1}})],n.prototype,"tileInfo",void 0),e([y({type:["show","hide"]})],n.prototype,"listMode",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"subDomains",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"fullExtent",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"urlTemplate",void 0),e([y({type:["OpenStreetMap"]})],n.prototype,"operationalLayerType",void 0),e([y({json:{read:!1}})],n.prototype,"type",void 0),e([y({json:{read:!1,write:!1}})],n.prototype,"copyright",void 0),e([y({json:{read:!1,write:!1}})],n.prototype,"wmtsInfo",void 0),n=e([n$1("esri.layers.OpenStreetMapLayer")],n);var l=n;

export default l;
