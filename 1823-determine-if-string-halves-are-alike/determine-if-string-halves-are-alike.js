/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowel = ['a','e','i','o','u','A','E','I','O','U']
     let countA = 0
     let countB = 0
     let mid = Math.floor(s.length/2)
    
    
    for (let i = 0 ; i < s.length ; i++){
        if(vowel.includes(s[i])){
            if(i<mid){
                countA++
            }else{
                countB++
            }
        }
    }
    return countA === countB
};