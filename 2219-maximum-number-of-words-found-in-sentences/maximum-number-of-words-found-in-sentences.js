/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(s) {
    let count = 0 
    
    for(let i = 0 ; i < s.length ; i++){
        let wordsCount = s[i].split(' ').length
        if(wordsCount > count){
            count = wordsCount
        }
    }
    return count
};