import './Loadable-d16b3d7d.js';
import { u, r, C, d, T as T$1 } from './pixelUtils-a2254b8d.js';
import { T, N } from './RasterSymbolizer-1d72bae0.js';
import { M } from './Polyline-ccd8fb47.js';
import './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import './Point-ee7951c3.js';
import './JSONSupport-9346590f.js';
import './promiseUtils-2ff2b194.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './LercCodec-dbefe6b0.js';
import './colorUtils-49d4e96f.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class n{async decode(e){const o=await T(e.data,e.options);return o&&o.toJSON()}symbolize(r){r.pixelBlock=u.fromJSON(r.pixelBlock),r.extent=r.extent?M.fromJSON(r.extent):null;const o=this.symbolizer.symbolize(r);return Promise.resolve(o&&o.toJSON())}async updateSymbolizer(e){var r;this.symbolizer=N.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms);}stretch(r){const o=this.symbolizer.simpleStretch(u.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(o&&o.toJSON())}estimateStatisticsHistograms(r$1){const s=r(u.fromJSON(r$1.srcPixelBlock));return Promise.resolve(s)}split(r){const o=C(u.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return o&&o.forEach(((e,r)=>{o.set(r,null==e?void 0:e.toJSON());})),Promise.resolve(o)}async mosaicAndTransform(r){const o=r.srcPixelBlocks.map((r=>r?new u(r):null)),s=d(o,r.srcMosaicSize,null,null,r.alignmentInfo);if(!r.coefs)return s&&s.toJSON();const l=T$1(s,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation);return l&&l.toJSON()}}

export default n;
