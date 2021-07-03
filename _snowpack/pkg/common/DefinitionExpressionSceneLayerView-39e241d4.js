import { e } from './JSONSupport-9346590f.js';
import { n } from './Message-70b34921.js';
import { y, n as n$1 } from './subclass-fe5fcf78.js';
import { WhereClause as f } from './WhereClause-55dc94e0.js';
import { o as oe } from './I3SUtil-acd66c30.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t=n.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),p=e$1=>{let p=class extends e$1{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=r=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&t.error("Error while evaluating definitionExpression: "+r),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&t.error("Further errors are ignored");};}get parsedDefinitionExpression(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{const r=f.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!r.isStandardized)return t.error("definitionExpression is using non standard function"),null;const e=[],i=r.fieldNames;return oe(i,this.i3slayer.fields,{missingFields:e}),e.length>0?(t.error(`definitionExpression references unknown fields: ${e.join(", ")}`),null):(this._definitionExpressionErrors=0,r)}catch(r){return t.error("Failed to parse definitionExpression: "+r),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}_evaluateClause(r,e){try{return r.testFeature(e)}catch(i){return this.logError(i),!1}}_addDefinitionExpressionToQuery(r){if(!this.parsedDefinitionExpression)return r;const e=this.i3slayer.definitionExpression,i=r.clone();return i.where?i.where=`(${e}) AND (${i.where})`:i.where=e,i}};return e([y()],p.prototype,"i3slayer",void 0),e([y({readOnly:!0})],p.prototype,"parsedDefinitionExpression",null),e([y({readOnly:!0})],p.prototype,"definitionExpressionFields",null),p=e([n$1("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],p),p};

export { p };
