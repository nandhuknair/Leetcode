/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
   
    let jewelSet = new Set(jewels)
    for(let stone of stones){
        if(jewelSet.has(stone)){
            count ++
        }
    }
    return count
};