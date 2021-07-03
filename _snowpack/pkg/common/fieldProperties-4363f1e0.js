import { n } from './Message-70b34921.js';
import { y } from './Field-728fb193.js';
import { e } from './FieldsIndex-f71b4f3d.js';
import { p } from './fieldUtils-22be41cd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s=n.getLogger("esri.layers.support.fieldProperties");function l(){return {fields:{type:[y],value:null},fieldsIndex:{readOnly:!0,get(){return new e(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields");},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return ["*"];if(!this.fields)return e;for(const i of e){this.fieldsIndex.has(i)||s.error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:e});}return p(this.fieldsIndex,e)}}}}

export { l };
