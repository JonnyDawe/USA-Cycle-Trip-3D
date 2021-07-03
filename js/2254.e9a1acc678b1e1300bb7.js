(self.webpackChunk=self.webpackChunk||[]).push([[2254],{62254:(e,t,s)=>{"use strict";s.r(t),s.d(t,{toBinaryGLTF:()=>I}),s(33807);var r,i,n,a,o,h,c,u=s(20215),l=s(20736),f=s(80219),d=s(62654),m=s(60816),p=s(84320),g=s(36154);s(80987),s(78155),s(88903),s(4169),s(92858),s(15346),s(87405),s(98548),s(78082),s(17762),s(29832),s(93450),s(65352),s(31531),s(93242),s(71542),s(95186),s(7571),s(63358),s(58404),s(65311),s(67726),s(32892);class b{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this.length=b.HEADER_SIZE,this.length+=b.CHUNK_HEADER_SIZE;const s=this.textToArrayBuffer(e);if(this.length+=this.alignTo(s.byteLength,4),t&&(this.length+=b.CHUNK_HEADER_SIZE,this.length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this.writeHeader();const r=this.writeChunk(s,12,1313821514,32);t&&this.writeChunk(t,r,5130562)}writeHeader(){this.outView.setUint32(0,b.MAGIC,!0),this.outView.setUint32(4,b.VERSION,!0),this.outView.setUint32(8,this.length,!0)}writeChunk(e,t,s,r=0){const i=this.alignTo(e.byteLength,4);for(this.outView.setUint32(t,i,!0),this.outView.setUint32(t+=4,s,!0),this.writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)r&&this.outView.setUint8(t,r),t++;return t}writeArrayBuffer(e,t,s,r,i){new Uint8Array(e,s,i).set(new Uint8Array(t,r,i),0)}textToArrayBuffer(e){if((0,f.c)("esri-text-encoder"))return(new TextEncoder).encode(e).buffer;const t=new Uint8Array(e.length);for(let s=0;s<t.length;++s)t[s]=e.charCodeAt(s);return t.buffer}alignTo(e,t){return t*Math.ceil(e/t)}}b.HEADER_SIZE=12,b.CHUNK_HEADER_SIZE=8,b.MAGIC=1179937895,b.VERSION=2,function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(r||(r={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(i||(i={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(n||(n={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(a||(a={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(o||(o={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(h||(h={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(c||(c={}));class A{constructor(e,t,s,r,i){this.buffer=e,this.componentType=s,this.dataType=r,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this.bufferView={buffer:e.index,byteLength:-1,target:i};const a=this.getElementSize();a>=4&&i!==n.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=a),t.bufferViews.push(this.bufferView)}push(e){const t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){const s=t%this.numComponentsForDataType(),r=this.accessorMin[s];this.accessorMin[s]="number"!=typeof r?e:Math.min(r,e);const i=this.accessorMax[s];this.accessorMax[s]="number"!=typeof i?e:Math.max(i,e)}}get dataSize(){return this.data.length*this.sizeComponentType()}get size(){return function(e,t){return 4*Math.ceil(e/4)}(this.dataSize)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}writeOutToBuffer(e,t=this.size){const s=new DataView(e,t),r=this.sizeComponentType();for(let e=0;e<this.data.length;++e)this.writeValue(s,e*r,this.data[e])}writeAsync(e){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView vlaues asynchronously");return this.asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let e=0;e<t.byteLength;++e)this.data.push(t[e]);delete this.asyncWritePromise})),this.asyncWritePromise}startAccessor(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;const t=this.numComponentsForDataType();this.accessorMin=new Array(t),this.accessorMax=new Array(t)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this.getElementSize(),t=this.numComponentsForDataType(),s=(this.data.length-this.accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let e=0;e<this.accessorMin.length;++e)"number"!=typeof this.accessorMin[e]&&(this.accessorMin[e]=0),"number"!=typeof this.accessorMax[e]&&(this.accessorMax[e]=0);const r={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:s,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case 5121:case 5123:r.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,r}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((e=>this.finalizedPromiseResolve=e))}finalize(){const e=this.bufferView;return new Promise((e=>{const t=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&t.push(this.asyncWritePromise),e((0,u.A)(t))})).then((()=>{this.isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()}))}getElementSize(){return this.sizeComponentType()*this.numComponentsForDataType()}sizeComponentType(){switch(this.componentType){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4}}numComponentsForDataType(){switch(this.dataType){case a.SCALAR:return 1;case a.VEC2:return 2;case a.VEC3:return 3;case a.VEC4:case a.MAT2:return 4;case a.MAT3:return 9;case a.MAT4:return 16}}writeValue(e,t,s){switch(this.componentType){case 5120:e.setInt8(t,s);break;case 5121:e.setUint8(t,s);break;case 5122:e.setInt16(t,s,!0);break;case 5123:e.setUint16(t,s,!0);break;case 5125:e.setUint32(t,s,!0);break;case 5126:e.setFloat32(t,s,!0);break;default:throw new Error(`Unsupported data type: ${this.componentType}`)}}}class x{constructor(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this.buffer=t}addBufferView(e,t,s){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new A(this,this.gltf,e,t,s);return this.bufferViews.push(r),r}getByteOffset(e){let t=0;for(const s of this.bufferViews){if(s===e)return t;t+=s.size}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this.bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this.getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const e of this.bufferViews)e.writeOutToBuffer(t,s),s+=e.size;return t}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise((e=>{e((0,u.A)(this.getViewFinalizePromises()))})).then((()=>{this.isFinalized=!0;const e=this.getArrayBuffer();this.buffer.byteLength=e.byteLength,this.buffer.uri=e})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}getTotalSize(){let e=0;for(const t of this.bufferViews)e+=t.size;return e}}function w(e,t){(0,f.t)(e.vertexAttributes.normal)&&(e.vertexAttributes.normal=new Float32Array(e.vertexAttributes.position.length));const s=t.faces.length/3;for(let r=0;r<s;++r){const s=t.faces[3*r+0],i=t.faces[3*r+1],n=t.faces[3*r+2],a=(0,m.a)(y,e.vertexAttributes.position[3*s+0],e.vertexAttributes.position[3*s+1],e.vertexAttributes.position[3*s+2]),o=(0,m.a)(E,e.vertexAttributes.position[3*i+0],e.vertexAttributes.position[3*i+1],e.vertexAttributes.position[3*i+2]),h=(0,m.a)(v,e.vertexAttributes.position[3*n+0],e.vertexAttributes.position[3*n+1],e.vertexAttributes.position[3*n+2]),c=(0,m.c)(o,o,a),u=(0,m.c)(h,h,a),l=(0,m._)(c,c,u);(0,m.a9)(e.vertexAttributes.normal[3*s+0])&&(e.vertexAttributes.normal[3*s+0]=0),(0,m.a9)(e.vertexAttributes.normal[3*s+1])&&(e.vertexAttributes.normal[3*s+1]=0),(0,m.a9)(e.vertexAttributes.normal[3*s+2])&&(e.vertexAttributes.normal[3*s+2]=0),(0,m.a9)(e.vertexAttributes.normal[3*i+0])&&(e.vertexAttributes.normal[3*i+0]=0),(0,m.a9)(e.vertexAttributes.normal[3*i+1])&&(e.vertexAttributes.normal[3*i+1]=0),(0,m.a9)(e.vertexAttributes.normal[3*i+2])&&(e.vertexAttributes.normal[3*i+2]=0),(0,m.a9)(e.vertexAttributes.normal[3*n+0])&&(e.vertexAttributes.normal[3*n+0]=0),(0,m.a9)(e.vertexAttributes.normal[3*n+1])&&(e.vertexAttributes.normal[3*n+1]=0),(0,m.a9)(e.vertexAttributes.normal[3*n+2])&&(e.vertexAttributes.normal[3*n+2]=0),e.vertexAttributes.normal[3*s+0]+=l[0],e.vertexAttributes.normal[3*s+1]+=l[1],e.vertexAttributes.normal[3*s+2]+=l[2],e.vertexAttributes.normal[3*i+0]+=l[0],e.vertexAttributes.normal[3*i+1]+=l[1],e.vertexAttributes.normal[3*i+2]+=l[2],e.vertexAttributes.normal[3*n+0]+=l[0],e.vertexAttributes.normal[3*n+1]+=l[1],e.vertexAttributes.normal[3*n+2]+=l[2]}for(let t=0;t<e.vertexAttributes.normal.length;t+=3)(0,m.a)(T,e.vertexAttributes.normal[t],e.vertexAttributes.normal[t+1],e.vertexAttributes.normal[t+2]),(0,m.j)(T,T),e.vertexAttributes.normal[t+0]=T[0],e.vertexAttributes.normal[t+1]=T[1],e.vertexAttributes.normal[t+2]=T[2]}const y=(0,m.n)(),E=(0,m.n)(),v=(0,m.n)(),T=(0,m.n)();async function R(e){const t=C(e);if((0,f.t)(t))throw new u.s("imageToArrayBuffer","Unsupported image type");const s=async e=>{if(!e)throw new u.s("imageToArrayBuffer","Unable to convert image to PNG");const t=new FileReader,s=new Promise((e=>{t.addEventListener("loadend",(()=>{e(t.result)}))}));return t.readAsArrayBuffer(e),s};if(t.toBlob)return new Promise(((e,r)=>{t.toBlob((t=>{s(t).then(e,r)}),"image/png")}));if("msToBlob"in t)return s(t.msToBlob());throw new u.s("imageToArrayBuffer","Could not convert canvas to blob")}function C(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,e.width,e.height),t}class B{constructor(e,t,s){this.params={},this.materialMap=new Array,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this.addScenes(e)}addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras.options.bufferOutputType===r.GLB||this.gltf.extras.options.imageOutputType===i.GLB;t&&(this.gltf.extras.binChunkBuffer=new x(this.gltf)),e.forEachScene((e=>{this.addScene(e)})),t&&this.gltf.extras.binChunkBuffer.finalize()}addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this.addNode(e);t.nodes.push(s)})),this.gltf.scenes.push(t)}addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;(0,m.F)(s,m.G)||(t.translation=(0,m.k)(s));const r=e.rotation;(0,d.N)(r,d.c)||(t.rotation=(0,d.r)(r));const i=e.scale;(0,m.F)(i,m.l)||(t.scale=(0,m.k)(i)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this.addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this.addNode(e);t.children.push(s)}));const n=this.gltf.nodes.length;return this.gltf.nodes.push(t),n}addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras.options.bufferOutputType===r.GLB;let i;i=s?this.gltf.extras.binChunkBuffer:new x(this.gltf);const o=e.clone();this.params.origin||(this.params.origin=function(e){if((0,f.r)(e.transform))return e.transform.getOriginPoint(e.spatialReference);const t=e.extent.xmax-e.extent.width/2,s=e.extent.ymax-e.extent.height/2,r=e.extent.zmin;return new l.b({x:t,y:s,z:r,spatialReference:e.extent.spatialReference})}(o)),o.rotate(-90,0,0,{origin:this.params.origin}),function(e){if(e.components){for(const t of e.components)"smooth"===t.shading&&t.faces&&w(e,t);e.vertexAttributesChanged()}}(o);const h=(0,g.P)(o.vertexAttributes,o.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});o.vertexAttributes.position=h.position,o.vertexAttributes.normal=h.normal,o.vertexAttributes.tangent=h.tangent;const c=i.addBufferView(5126,a.VEC3,n.ARRAY_BUFFER);let u,d,m,p;o.vertexAttributes.normal&&(u=i.addBufferView(5126,a.VEC3,n.ARRAY_BUFFER)),o.vertexAttributes.uv&&(d=i.addBufferView(5126,a.VEC2,n.ARRAY_BUFFER)),o.vertexAttributes.tangent&&(m=i.addBufferView(5126,a.VEC4,n.ARRAY_BUFFER)),o.vertexAttributes.color&&(p=i.addBufferView(5121,a.VEC4,n.ARRAY_BUFFER)),c.startAccessor("POSITION"),u&&u.startAccessor("NORMAL"),d&&d.startAccessor("TEXCOORD_0"),m&&m.startAccessor("TANGENT"),p&&p.startAccessor("COLOR_0");const b=o.vertexAttributes.position.length/3;for(let e=0;e<b;++e)c.push(o.vertexAttributes.position[3*e+0]),c.push(o.vertexAttributes.position[3*e+1]),c.push(o.vertexAttributes.position[3*e+2]),u&&(0,f.r)(o.vertexAttributes.normal)&&(u.push(o.vertexAttributes.normal[3*e+0]),u.push(o.vertexAttributes.normal[3*e+1]),u.push(o.vertexAttributes.normal[3*e+2])),d&&(0,f.r)(o.vertexAttributes.uv)&&(d.push(o.vertexAttributes.uv[2*e+0]),d.push(o.vertexAttributes.uv[2*e+1])),m&&(0,f.r)(o.vertexAttributes.tangent)&&(m.push(o.vertexAttributes.tangent[4*e+0]),m.push(o.vertexAttributes.tangent[4*e+1]),m.push(o.vertexAttributes.tangent[4*e+2]),m.push(o.vertexAttributes.tangent[4*e+3])),p&&(0,f.r)(o.vertexAttributes.color)&&(p.push(o.vertexAttributes.color[4*e+0]),p.push(o.vertexAttributes.color[4*e+1]),p.push(o.vertexAttributes.color[4*e+2]),p.push(o.vertexAttributes.color[4*e+3]));const A=c.endAccessor(),y=this.addAccessor(c.index,A);let E,v,T,R,C;if(u){const e=u.endAccessor();E=this.addAccessor(u.index,e)}if(d){const e=d.endAccessor();v=this.addAccessor(d.index,e)}if(m){const e=m.endAccessor();T=this.addAccessor(m.index,e)}if(p){const e=p.endAccessor();R=this.addAccessor(p.index,e)}o.components&&o.components.length>0&&o.components[0].faces?(C=i.addBufferView(5125,a.SCALAR,n.ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(C,o.components,t,y,E,v,T,R)):this.addMeshVertexNonIndexed(o.components,t,y,E,v,T,R),c.finalize(),u&&u.finalize(),d&&d.finalize(),m&&m.finalize(),C&&C.finalize(),p&&p.finalize(),s||i.finalize();const B=this.gltf.meshes.length;return this.gltf.meshes.push(t),B}addMaterial(e){if(null===e)return;const t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=h.MASK;break;case"auto":case"blend":s.alphaMode=h.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=e=>e**2.1,i=e=>{const t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if((0,f.r)(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=i(e.color)),(0,f.r)(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(e.colorTexture)}),(0,f.r)(e.normalTexture)&&(s.normalTexture={index:this.addTexture(e.normalTexture)}),e instanceof p.c){if((0,f.r)(e.emissiveTexture)&&(s.emissiveTexture={index:this.addTexture(e.emissiveTexture)}),(0,f.r)(e.emissiveColor)){const t=i(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}(0,f.r)(e.occlusionTexture)&&(s.occlusionTexture={index:this.addTexture(e.occlusionTexture)}),(0,f.r)(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1;const n=this.gltf.materials.length;return this.gltf.materials.push(s),this.materialMap.push(e),n}addTexture(e){this.gltf.textures||(this.gltf.textures=[]);const t={sampler:this.addSampler(e),source:this.addImage(e)},s=this.gltf.textures.length;return this.gltf.textures.push(t),s}addImage(e){this.gltf.images||(this.gltf.images=[]);const t={};if(e.url)t.uri=e.url;else{t.extras=e.data;for(let t=0;t<this.gltf.images.length;++t)if(e.data===this.gltf.images[t].extras)return t;switch(this.gltf.extras.options.imageOutputType){case i.GLB:{const s=this.gltf.extras.binChunkBuffer.addBufferView(5121,a.SCALAR);s.writeAsync(R(e.data)).then((()=>{s.finalize()})),t.bufferView=s.index,t.mimeType="image/png";break}case i.DataURI:t.uri=function(e){const t=C(e);return(0,f.r)(t)?t.toDataURL():""}(e.data);break;default:this.gltf.extras.promises.push(R(e.data).then((e=>{t.uri=e})))}}const s=this.gltf.images.length;return this.gltf.images.push(t),s}addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=10497,s=10497;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=33071,s=33071;break;case"mirror":t=33648,s=33648}else{switch(e.wrap.vertical){case"clamp":s=33071;break;case"mirror":s=33648}switch(e.wrap.horizontal){case"clamp":t=33071;break;case"mirror":t=33648}}const r={wrapS:t,wrapT:s};for(let e=0;e<this.gltf.samplers.length;++e)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[e]))return e;const i=this.gltf.samplers.length;return this.gltf.samplers.push(r),i}addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}addMeshVertexIndexed(e,t,s,r,i,n,a,o){for(const h of t){e.startAccessor("INDICES");for(let t=0;t<h.faces.length;++t)e.push(h.faces[t]);const t=e.endAccessor(),c={attributes:{POSITION:r},indices:this.addAccessor(e.index,t),material:this.addMaterial(h.material)};i&&"flat"!==h.shading&&(c.attributes.NORMAL=i),n&&(c.attributes.TEXCOORD_0=n),a&&"flat"!==h.shading&&(c.attributes.TANGENT=a),o&&(c.attributes.COLOR_0=o),s.primitives.push(c)}}addMeshVertexNonIndexed(e,t,s,r,i,n,a){const o={attributes:{POSITION:s}};r&&(o.attributes.NORMAL=r),i&&(o.attributes.TEXCOORD_0=i),n&&(o.attributes.TANGENT=n),a&&(o.attributes.COLOR_0=a),e&&(o.material=this.addMaterial(e[0].material)),t.primitives.push(o)}}class O{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.indexOf(e)>=0)throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){const t=this._scenes.indexOf(e);t>=0&&this._scenes.splice(t,1)}forEachScene(e){this._scenes.forEach(e)}}class L{constructor(){this.name="",this.nodes=[]}addNode(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}forEachNode(e){this.nodes.forEach(e)}}class M{constructor(){this.name="",this.mesh=null,this.translation=(0,m.n)(),this.rotation=(0,d.a)(),this.scale=(0,m.k)(m.l),this.nodes=[]}addNode(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}forEachNode(e){this.nodes.forEach(e)}set rotationAngles(e){(0,d.C)(this.rotation,e[0],e[1],e[2])}}const S="model.glb";function z(e,t){return function(e,t,s){const n=new B(e,t=t||{},s);let a=n.params;a?a.origin||(a.origin=new l.b({x:-1,y:-1,z:-1})):a={origin:new l.b({x:-1,y:-1,z:-1})};const o=a.origin,h=n.gltf,c=h.extras.promises;let f=1,d=1,m=null;return(0,u.A)(c).then((()=>{const e={origin:o};delete h.extras;const s="number"==typeof t.jsonSpacing?t.jsonSpacing:4,n=JSON.stringify(h,((s,n)=>{if("extras"!==s){if(n instanceof ArrayBuffer){if(function(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}(n))switch(t.imageOutputType){case i.DataURI:case i.GLB:break;case i.External:default:{const t=`img${d}.png`;return d++,e[t]=n,t}}switch(t.bufferOutputType){case r.DataURI:return function(e){const t=[],s=new Uint8Array(e);for(let e=0;e<s.length;e++)t.push(String.fromCharCode(s[e]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}(n);case r.GLB:if(m)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(m=n);case r.External:default:{const t=`data${f}.bin`;return f++,e[t]=n,t}}}return n}}),s);return t.bufferOutputType===r.GLB||t.imageOutputType===i.GLB?e[S]=new b(n,m).buffer:e["model.gltf"]=n,e}))}(e,{bufferOutputType:r.GLB,imageOutputType:i.GLB,jsonSpacing:0},t)}class V{constructor(e,t){this.file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this.file)}download(e){return new Promise((()=>{const t=new Blob([this.file.data],{type:this.file.type});let s=e;if(s||(s="model.glb"),"glb"!==s.split(".").pop()&&(s+=".glb"),window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(t,s);else{const e=document.createElement("a"),r=URL.createObjectURL(t);e.href=r,e.download=s,document.body.appendChild(e),e.click(),setTimeout((function(){document.body.removeChild(e),window.URL.revokeObjectURL(r)}),0)}}))}}function I(e,t){const s=new O,r=new L;s.addScene(r);const i=new M;return r.addNode(i),i.mesh=e,z(s,t).then((e=>new V(e[S],e.origin)))}}}]);