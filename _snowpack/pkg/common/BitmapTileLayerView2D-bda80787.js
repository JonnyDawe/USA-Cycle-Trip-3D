import { e } from './JSONSupport-9346590f.js';
import { n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { n as n$1 } from './BitmapTileContainer-18f7207a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r=r=>{let s=class extends r{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new n$1(this._tileInfoView),this.container.addChild(this._bitmapView);}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren();}};return s=e([n("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};

export { r };
