/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityNum = null
    let count = 0 

    for(let num of nums ){
        if(count === 0 ){
            majorityNum = num
        }
        count += (num === majorityNum)? 1 : -1 
    }
    return majorityNum
};