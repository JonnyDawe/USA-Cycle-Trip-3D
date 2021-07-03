import { i, S } from './TileInfo-c32d8db8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(e,i){this.lockedSchemaPixelSize=e,this.isGCS=i;}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,i){let t=0,s=0;return (256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(t=i),e[1]%2&&(s=i)),[t,s]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(t){if(!t)return null;if(256===t.size[0]&&256===t.size[1])return t;const s=256,l=t.spatialReference.isGeographic,r=[],o=t.lods.length;for(let i$1=0;i$1<o;i$1++){const s=t.lods[i$1],o=l?s.resolution:2*s.resolution;r.push(new i({level:s.level,scale:s.scale,resolution:o}));}return new S({size:[s,s],dpi:t.dpi,format:t.format,compressionQuality:t.compressionQuality,origin:t.origin,spatialReference:t.spatialReference,lods:r})}static create512x512CompatibleTileInfo(t){if(!t)return null;if(256===t.size[0]||256===t.size[1])return null;const s=512,l=[],r=t.lods.length;for(let i$1=0;i$1<r;i$1++){const s=t.lods[i$1],r=.5*s.resolution;l.push(new i({level:s.level,scale:s.scale,resolution:r}));}return new S({size:[s,s],dpi:t.dpi,format:t.format,compressionQuality:t.compressionQuality,origin:t.origin,spatialReference:t.spatialReference,lods:l})}}

export { t };
