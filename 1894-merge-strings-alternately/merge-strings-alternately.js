/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ans = []
    let length = Math.max(word1.length,word2.length)
    for(let i = 0 ; i < length ; i++){
        ans.push(word1[i])
        ans.push(word2[i])
    }
    return ans.join("")
};