(self.webpackChunk=self.webpackChunk||[]).push([[2327],{62327:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Blur:()=>o});var r=s(93875),i=(s(80219),s(14215),s(26799));s(20215),s(60816),s(43356),s(86897),s(5772),s(78155),s(88903),s(79766),s(71391),s(83731),s(40130),s(80987),s(98548),s(20736),s(4169),s(92858),s(31531),s(36845),s(55688),s(15015),s(31516),s(95629),s(9612),s(52109),s(6585),s(3621),s(63358),s(76326),s(4807),s(17762),s(30316),s(29126),s(61888),s(18559),s(32769),s(42296),s(17331),s(41290),s(62121),s(91236),s(82906),s(52957),s(82361),s(65352),s(71394),s(73574),s(81135),s(94527),s(29832),s(89710),s(13564),s(95559),s(68631),s(56803),s(18143),s(47365),s(67079),s(2903),s(85570),s(71470),s(80136),s(91507),s(85289),s(98843),s(91790),s(52737),s(29831),s(16040),s(34396),s(5250),s(49878),s(84271),s(48643),s(4618),s(80657),s(94449),s(97325),s(3629),s(79506),s(26779),s(98420),s(54223),s(8725),s(51218),s(21793),s(13895),s(15576),s(28941),s(19438),s(15022),s(56416),s(92758),s(78435),s(53902),s(40481),s(78730),s(2570),s(71666),s(72257),s(41822),s(99987),s(11838),s(39068),s(24776),s(95186),s(67726),s(59312),s(2098),s(78191);const a=[1,0],n=[0,1];class o{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,s){const{context:r}=e,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(e),this._quad||(this._quad=new i.r(r,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(e,t,n):this._radialBlur(e,t),o.unbind()}_gaussianBlur(e,t,s){const{context:r,state:i,painter:o,pixelRatio:u}=e,{size:l}=i,{materialManager:d}=o,h=this._programDesc,c=this._quad,p=[Math.round(u*l[0]),Math.round(u*l[1])],b=this._blurFBO,_=d.getProgram(e,h.gaussianBlur,[{name:"radius",value:Math.ceil(s)}]);r.useProgram(_),r.setBlendingEnabled(!1),r.bindFramebuffer(b),r.bindTexture(t.colorTexture,4),_.setUniform1i("u_colorTexture",4),_.setUniform2fv("u_texSize",p),_.setUniform2fv("u_direction",a),_.setUniform1f("u_sigma",s),c.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.bindTexture(b.colorTexture,5),_.setUniform1i("u_colorTexture",5),_.setUniform2fv("u_direction",n),c.draw(),r.setBlendingEnabled(!0),r.setBlendFunction(1,771),r.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:s,painter:r}=e,{materialManager:i}=r,a=this._programDesc,n=this._quad,o=this._blurFBO;s.bindFramebuffer(o);const u=i.getProgram(e,a.radialBlur);s.useProgram(u),s.setBlendingEnabled(!1),s.bindTexture(t.colorTexture,4),u.setUniform1i("u_colorTexture",4),n.draw(),s.bindFramebuffer(t),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1),s.setBlendingEnabled(!0);const l=i.getProgram(e,a.blit);s.useProgram(l),s.bindTexture(o.colorTexture,5),l.setUniform1i("u_texture",5),s.setBlendFunction(1,771),n.draw()}_createOrResizeResources(e){const{context:t,state:s,pixelRatio:i}=e,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new r.o(t,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}))}}}}]);