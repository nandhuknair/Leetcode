/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
   let curMax = 0
   let globalMax = nums[0]

   let total = 0

   let curMin = 0
   let globalMin = nums[0]

   for(let num of nums){
        curMax = Math.max(curMax+num, num)
        globalMax = Math.max(globalMax,curMax)

        total += num 

        curMin = Math.min(curMin+num, num)
        globalMin  = Math.min(globalMin,curMin)
   }
    if(globalMax > 0 ){
        return Math.max(globalMax, total-globalMin)
    }else{
        return globalMax
    }
};