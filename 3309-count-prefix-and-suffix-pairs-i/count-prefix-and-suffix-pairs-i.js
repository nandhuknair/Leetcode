/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let count = 0;
    const n = words.length
     for(let i = 0 ; i < n ; i++){
        for(let j = i+1 ; j < n ; j++){
            const f = words[i] ; 
            const s = words[j] ;
            if(s.startsWith(f) && s.endsWith(f)){
                count ++
            }
        }
     }
     return count

};