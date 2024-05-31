/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr = []
    for(let num of nums){
        if(num%2===0){
            arr.push(num)
    }
    }
    for(let num of nums){
        if(num%2!==0){
            arr.push(num)
        }
    }
    
    return arr
};