import './Message-70b34921.js';
import { s, i } from './mat3-6cb40036.js';
import { a0 as r$1 } from './DefaultUI-99d89841.js';
import { a } from './DisplayObject-8d4c95bb.js';
import { e } from './TileKey-86c6b8c5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r extends a{constructor(s,t,i,r=i){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:r$1(),tileMat3:r$1()},this.triangleCount=0,this.key=new e(s),this.bounds=t,this.size=i,this.coordRange=r;}destroy(){this.texture&&(this.texture.dispose(),this.texture=null);}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(s){this._coords=[s[0],s[3]],this._bounds=s;}setTransform(o,i$1){const e=i$1/(o.resolution*o.pixelRatio),r=this.transforms.tileMat3,[n,h]=o.toScreenNoRotation([0,0],this.coords),a=this.size[0]/this.coordRange[0]*e,d=this.size[1]/this.coordRange[1]*e;s(r,a,0,0,0,d,0,n,h,1),i(this.transforms.dvs,o.displayViewMat3,r);}}

export { r };
