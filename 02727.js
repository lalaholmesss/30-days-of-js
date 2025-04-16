/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(!Object.keys(obj).length){ // has keys or not, since all are objects in js
        return true;
    } else return false;
};