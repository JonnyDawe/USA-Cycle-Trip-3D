/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(e,n={},i){if(!window.WebGLRenderingContext)return r$1(e,l),null;const a=t$1(e,n,i);return a||(r$1(e,o$1),null)}function t$1(e,t={},r){let l;switch(r){case"webgl":l=["webgl","experimental-webgl","webkit-3d","moz-webgl"];break;case"webgl2":l=["webgl2"];break;default:l=["webgl","experimental-webgl","webkit-3d","moz-webgl"];}let o=null;for(const i of l){try{o=e.getContext(i,t);}catch(n){}if(o)break}return o}function r$1(e,t){const r=e.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+t+"</div></div></td></tr></table>");}const l='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',o$1='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t;function r(){return t||(t=n()),t}function n(){const t={available:!1,version:0,majorPerformanceCaveat:!1,maxTextureSize:0,supportsHighPrecisionFragment:!1,supportsVertexShaderSamplers:!1,supportsElementIndexUint:!1,supportsStandardDerivatives:!1,supportsInstancedArrays:!1,supportsTextureFloat:!1,supportsColorBufferFloat:!1};if(void 0===typeof WebGLRenderingContext)return t;const r=document.createElement("canvas");if(!r)return t;let n=t$1(r,{failIfMajorPerformanceCaveat:!0},"webgl");if(n||(n=t$1(r,{},"webgl"),n&&(t.majorPerformanceCaveat=!0)),!n)return t;const a=n.getParameter(n.VERSION);if(!a)return t;const s=a.match(/^WebGL\s+([\d.]*)/);if(s){const e=parseFloat(s[1]);t.available=e>=.94;const r=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT);r&&(t.supportsHighPrecisionFragment=r.precision>0),t.supportsVertexShaderSamplers=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0,t.supportsElementIndexUint=null!==n.getExtension("OES_element_index_uint"),t.supportsStandardDerivatives=null!==n.getExtension("OES_standard_derivatives"),t.supportsInstancedArrays=null!==n.getExtension("ANGLE_instanced_arrays"),t.supportsTextureFloat=null!==n.getExtension("OES_texture_float"),t.supportsColorBufferFloat=null!==n.getExtension("WEBGL_color_buffer_float")&&null!==n.getExtension("EXT_float_blend");}return t.maxTextureSize=n.getParameter(n.MAX_TEXTURE_SIZE),t.version=o()?2:1,t}function o(){if(void 0===typeof WebGL2RenderingContext)return !1;const t=document.createElement("canvas");if(!t)return !1;return !!t$1(t,{},"webgl2")}

export { e, r };
