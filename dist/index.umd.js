!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lodash"),require("voca/first.js"),require("voca/last.js"),require("numeral")):"function"==typeof define&&define.amd?define(["exports","lodash","voca/first.js","voca/last.js","numeral"],t):t((e||self).fuseUtils={},e.lodash,e.first,e.last,e.numeral)}(this,function(e,t,n,r,o){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=/*#__PURE__*/s(n),i=/*#__PURE__*/s(r),u=/*#__PURE__*/s(o);e.assets=function(e){var t=process.env.PUBLIC_URL;return"/"===f.default(e)?e:("/"!==i.default(t)&&(t+="/"),[t,e].join(""))},e.env=function(e,n){for(var r=0,o=["REACT_APP_"+e,e];r<o.length;r++){var s=o[r];if(!t.isUndefined(process.env[s]))return process.env[s]}return n},e.formatNumber=function(e,t){return void 0===t&&(t="0,0"),u.default(e).format(t)},e.sleep=function(e){return new Promise(function(t){return setTimeout(t,e)})},e.toBool=function(e){return t.isString(e)?"0"!==(e=e.toLowerCase())&&""!==e&&"false"!==e:!!e}});
//# sourceMappingURL=index.umd.js.map
