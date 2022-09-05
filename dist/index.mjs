import{isUndefined as r}from"lodash";import o from"voca/first.js";import s from"voca/last.js";function t(o,s){for(var t=0,e=["REACT_APP_"+o,o];t<e.length;t++){var n=e[t];if(!r(process.env[n]))return process.env[n]}return s}var e=function(r){var t=process.env.PUBLIC_URL;return"/"===o(r)?r:("/"!==s(t)&&(t+="/"),[t,r].join(""))};export{e as assets,t as env};
//# sourceMappingURL=index.mjs.map
