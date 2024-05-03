/**
 * @param {string} s
 * @return {boolean}
 */
 
function isPalindrome(s) {
   
    const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    

    return cleanString === cleanString.split("").reverse().join("");
}
