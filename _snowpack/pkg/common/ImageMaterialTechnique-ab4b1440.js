import { e as e$1 } from './JSONSupport-9346590f.js';
import { n as n$1, r, t, N as c, L as a, ap as r$1, R as d, j as e, a as r$2, b as e$2, c as t$2, d as n$2, o, h as t$3, Y as t$4, a2 as a$1, a4 as l, a5 as c$1, as as a$2, at as l$2, au as f, av as t$5, aw as c$2, aI as s$2, f as t$6 } from './objectResourceUtils-59d1d140.js';
import { t as t$1, g, d as s$1, l as l$1, r as r$3 } from './FramebufferObject-238df962.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function s(s){const n=new n$1;return n.include(r,{linearDepth:!1}),n.vertex.uniforms.add("proj","mat4").add("view","mat4"),n.attributes.add("position","vec3"),n.attributes.add("uv0","vec2"),n.varyings.add("vpos","vec3"),s.multipassTerrainEnabled&&n.varyings.add("depth","float"),n.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),n.vertex.code.add(t`
    void main(void) {
      vpos = position;
      ${s.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),n.include(c,s),s.multipassTerrainEnabled&&(n.fragment.include(a),n.include(r$1,s)),n.fragment.uniforms.add("tex","sampler2D"),n.fragment.uniforms.add("opacity","float"),n.varyings.add("vTexCoord","vec2"),7===s.output?n.fragment.code.add(t`
    void main() {
      discardBySlice(vpos);
      ${s.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${t.float(d)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(n.fragment.include(e),n.fragment.code.add(t`
    void main() {
      discardBySlice(vpos);
      ${s.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${t.float(d)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${s.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),n}var n=Object.freeze({__proto__:null,build:s});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class E extends t$2{initializeProgram(e){const t=E.shader.get(),r=this.configuration,i=t.build({output:r.output,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===r.transparencyPassType,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new n$2(e.rctx,i,o)}bindPass(e,t){t$3(this.program,t.camera.projectionMatrix),this.program.setUniform1f("opacity",e.opacity),t.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),t$4(this.program,t));}bindDraw(e){a$1(this.program,e),l(this.program,this.configuration,e),this.program.rebindTextures();}setPipelineState(e,t){const r=this.configuration,i=3===e,s=2===e;return g({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?w:c$1(e),culling:s$1(r.cullFace),depthTest:{func:a$2(e)},depthWrite:i?r.writeDepth&&l$1:l$2(e),colorWrite:r$3,stencilWrite:r.sceneHasOcludees?f:null,stencilTest:r.sceneHasOcludees?t?t$5:c$2:null,polygonOffset:i||s?null:s$2(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}E.shader=new t$6(n,(()=>import('./ImageMaterial.glsl-de8dc18f.js')));const w=t$1(1,771);class O extends e$2{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}e$1([r$2({count:8})],O.prototype,"output",void 0),e$1([r$2({count:3})],O.prototype,"cullFace",void 0),e$1([r$2()],O.prototype,"slicePlaneEnabled",void 0),e$1([r$2()],O.prototype,"transparent",void 0),e$1([r$2()],O.prototype,"enableOffset",void 0),e$1([r$2()],O.prototype,"writeDepth",void 0),e$1([r$2()],O.prototype,"sceneHasOcludees",void 0),e$1([r$2({count:4})],O.prototype,"transparencyPassType",void 0),e$1([r$2()],O.prototype,"multipassTerrainEnabled",void 0),e$1([r$2()],O.prototype,"cullAboveGround",void 0);

export { E, O, s };
