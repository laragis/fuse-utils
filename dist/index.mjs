import{isUndefined as r,isString as o}from"lodash";import t from"voca/first.js";import n from"voca/last.js";import e from"numeral";function s(o,t){for(var n=0,e=["REACT_APP_"+o,o];n<e.length;n++){var s=e[n];if(!r(process.env[s]))return process.env[s]}return t}var a=function(r){var o=process.env.PUBLIC_URL;return"/"===t(r)?r:("/"!==n(o)&&(o+="/"),[o,r].join(""))};function f(r,o){return void 0===o&&(o="0,0"),e(r).format(o)}function i(r){return o(r)?"0"!==(r=r.toLowerCase())&&""!==r&&"false"!==r:!!r}export{a as assets,s as env,f as formatNumber,i as toBool};
//# sourceMappingURL=index.mjs.map
