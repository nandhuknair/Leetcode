/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let XOR = 0
    for(let i = 0 ; i < n ; i++){
        console.log(XOR)
        XOR ^= start + 2 * i 
    }
    return XOR
};