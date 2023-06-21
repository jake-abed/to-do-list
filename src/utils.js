'use strict';

const isJson = (potentialJson) => {
    try {
        JSON.parse(potentialJson);
    } catch {
        return false;
    }
    return true;
}

export {
    isJson
}
