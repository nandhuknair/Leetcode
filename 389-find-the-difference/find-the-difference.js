/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let charCodeOfS = 0;
    let charCodeOfT = 0

    for(let char of s){
        charCodeOfS += char.charCodeAt(0)
    }

    for(let char of t){
        charCodeOfT += char.charCodeAt(0)
    }

    console.log(charCodeOfS)
    console.log(charCodeOfT)


    return String.fromCharCode(charCodeOfT - charCodeOfS)
};