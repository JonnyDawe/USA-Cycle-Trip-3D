import { s } from './promiseUtils-2ff2b194.js';
import { n } from './Message-70b34921.js';
import { K, A } from './Utils-12055aa8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=n.getLogger("esri.views.2d.engine.webgl");function o(s$1){return K(s$1.minDataValue)&&K(s$1.maxDataValue)&&null!=s$1.minSize&&null!=s$1.maxSize?A.SIZE_MINMAX_VALUE:(s$1.expression&&"view.scale"===s$1.expression||s$1.valueExpression&&"$view.scale"===s$1.valueExpression)&&Array.isArray(s$1.stops)?A.SIZE_SCALE_STOPS:(null!=s$1.field||s$1.expression&&"view.scale"!==s$1.expression||s$1.valueExpression&&"$view.scale"!==s$1.valueExpression)&&(Array.isArray(s$1.stops)||"levels"in s$1&&s$1.levels)?A.SIZE_FIELD_STOPS:(null!=s$1.field||s$1.expression&&"view.scale"!==s$1.expression||s$1.valueExpression&&"$view.scale"!==s$1.valueExpression)&&null!=s$1.valueUnit?A.SIZE_UNIT_VALUE:(l.error(new s("mapview-bad-type","Found invalid size VisualVariable",s$1)),A.NONE)}

export { o };
