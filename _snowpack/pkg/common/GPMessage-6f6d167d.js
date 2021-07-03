import { e, a as a$1 } from './JSONSupport-9346590f.js';
import { o } from './jsonMap-e142bd84.js';
import { y, n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p=new o({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let i=class extends a$1{constructor(e){super(e),this.description=null,this.type=null;}};e([y({type:String,json:{write:!0}})],i.prototype,"description",void 0),e([y({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=e([n("esri.rest.support.GPMessage")],i);var a=i;

export { a };
