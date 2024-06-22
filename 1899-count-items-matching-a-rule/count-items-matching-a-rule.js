/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0
    let searchIndex = 0
    if(ruleKey === "color"){
        searchIndex = 1
    }
    if(ruleKey === "name") {
        searchIndex = 2
    }

    for(let i = 0 ; i < items.length ;i++){
        if(items[i][searchIndex]=== ruleValue){
            count++
        }
    }

    return count
};