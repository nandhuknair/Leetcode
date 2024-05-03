/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {


    let maxK = -1
    let numSet = new Set (nums)
    for(let num of nums){
        if(numSet.has(-num)){
            maxK = Math.max(maxK,Math.abs(num))
        }
    }
    return maxK
};