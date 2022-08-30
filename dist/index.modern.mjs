import{isUndefined as o}from"lodash";function r(r,n){const e=[`REACT_APP_${r}`,r];for(const r of e)if(!o(process.env[r]))return process.env[r];return n}export{r as env};
//# sourceMappingURL=index.modern.mjs.map
