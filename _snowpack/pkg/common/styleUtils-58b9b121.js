import { a } from './asyncUtils-015dfd6e.js';
import { a as a$1 } from './promiseUtils-2ff2b194.js';
import { z as t$1 } from './subclass-fe5fcf78.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a$2=await a(s.populateFromStyle());if(a$1(n),!1===a$2.ok){const e=a$2.error;i&&i.messages&&i.messages.push(new t$1("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i.origin);}}}

export { t };
