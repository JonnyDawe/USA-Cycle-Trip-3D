/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(){t=function(t,e){return new c(t,void 0,e)};var n=RegExp.prototype,o=new WeakMap;function c(t,e,n){var u=new RegExp(t,e);return o.set(u,n||o.get(t)),r(u,c.prototype)}function u(t,e){var r=o.get(e);return Object.keys(r).reduce((function(e,n){return e[n]=t[r[n]],e}),Object.create(null))}return e(c,RegExp),c.prototype.exec=function(t){var e=n.exec.call(this,t);return e&&(e.groups=u(e,this)),e},c.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var r=o.get(this);return n[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return "$"+r[e]})))}if("function"==typeof e){var c=this;return n[Symbol.replace].call(this,t,(function(){var t=arguments;return "object"!=typeof t[t.length-1]&&(t=[].slice.call(t)).push(u(t,c)),e.apply(this,t)}))}return n[Symbol.replace].call(this,t,e)},t.apply(this,arguments)}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e);}function r(t,e){return (r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}

export { t };
