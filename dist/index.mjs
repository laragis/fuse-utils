import{isUndefined as r}from"lodash";function e(e,o){for(var n=0,t=["REACT_APP_"+e,e];n<t.length;n++){var s=t[n];if(!r(process.env[s]))return process.env[s]}return o}export{e as env};
//# sourceMappingURL=index.mjs.map
