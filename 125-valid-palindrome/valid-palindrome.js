/**
 * @param {string} s
 * @return {boolean}
 */
 
function isPalindrome(s) {
    // Helper function to remove non-alphanumeric characters and convert to lowercase
    function cleanString(str) {
        return str.replace(/[^a-z0-9]/ig, '').toLowerCase();
    }

    // Helper function to check if a string is a palindrome
    function checkPalindrome(str) {
        if (str.length <= 1) {
            return true;
        }
        if (str[0] === str[str.length - 1]) {
            return checkPalindrome(str.slice(1, -1));
        } else {
            return false;
        }
    }

    // Main function logic
    const cleanedString = cleanString(s);
    return checkPalindrome(cleanedString);
}

