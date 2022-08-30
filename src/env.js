import {isUndefined} from 'lodash'

function env(key, _default){
    const keys = [`REACT_APP_${key}`, key]

    for (const envKey of keys) {
        if(!isUndefined(process.env[envKey])) return process.env[envKey]
    }

    return _default
}


export default env