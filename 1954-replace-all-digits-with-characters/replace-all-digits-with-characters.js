/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let sArray = s.split('');
    
    for (let i = 1; i < sArray.length; i += 2) {
        let precedingChar = sArray[i - 1];
        let digit = parseInt(sArray[i], 10);
        let newChar = String.fromCharCode(precedingChar.charCodeAt(0) + digit);
        sArray[i] = newChar;
    }
    
    return sArray.join('');
};