/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
   let minDistance = Infinity ;
   for(let i = 0 ; i < nums.length ; i++){
    if(nums[i]===target){
        let distance = Math.abs(i-start)
        if(distance < minDistance){
            minDistance = distance
        }
    }
   }
   return minDistance ;
};