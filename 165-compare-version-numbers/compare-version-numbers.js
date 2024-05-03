/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
       const revs1 = version1.split(".");
    const revs2 = version2.split(".");
    
    // Iterate through revisions
    for (let i = 0; i < Math.max(revs1.length, revs2.length); i++) {
        // Convert each revision to integer, ignoring leading zeros
        const num1 = parseInt(revs1[i] || "0", 10);
        const num2 = parseInt(revs2[i] || "0", 10);
        
        // Compare revisions
        if (num1 < num2) return -1;
        else if (num1 > num2) return 1;
    }
    
    // If all revisions are equal, return 0
    return 0;
};