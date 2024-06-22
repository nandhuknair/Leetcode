/**
 * @param {string} s
 * @return {string}
 */
 const isChar =(char)=> {
        return /[a-zA-Z]/.test(char)
    }
var reverseOnlyLetters = function(s) {
    
    s = s.split('')
    let left = 0
    let right = s.length-1

    while(left < right){
        if(!isChar(s[left])){
            left++
            continue
        }
        if(!isChar(s[right])){
            right--
            continue
        }
        [s[left],s[right]] = [s[right],s[left]]
        left++
        right--
    }
        
        return s.join('')
};