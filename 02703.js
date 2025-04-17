/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let count = 0;
    for(let arg in args){
        arg = 1;
        count = count + arg;
    }
    return count;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */