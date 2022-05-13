
/**
 * Gets the obj[key] property, returns undefined if it doesn't exists.
 * @param {object} obj 
 * @param {string} key 
 * @returns 
 */
function get (obj, key) {
    return (obj && obj[key] !== null && obj[key] !== undefined)
        ? obj[key]
        : undefined
}

/**
 * Access deep properties on object going through the given path
 * @param {string} path 
 * @param {object} data 
 */
function deepGet (path, data) {
    if (typeof path != 'string' || typeof data != 'object') {
        return
    }

    let newPath = path
    if (path.match(/[[\]]/)) {
        newPath = path.replace('[', '.').replace(']', '')
    }
    return newPath && newPath.split('.').reduce(get, data)
}

module.exports = deepGet
