import{isUndefined as o}from"lodash";import r from"voca/first.js";import s from"voca/last.js";function t(r,s){const t=[`REACT_APP_${r}`,r];for(const r of t)if(!o(process.env[r]))return process.env[r];return s}var e=o=>{let t=process.env.PUBLIC_URL;return"/"===r(o)?o:("/"!==s(t)&&(t=`${t}/`),[t,o].join(""))};export{e as assets,t as env};
//# sourceMappingURL=index.modern.mjs.map
