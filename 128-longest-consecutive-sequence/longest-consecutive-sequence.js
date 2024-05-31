/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length) return 0
    nums = new Set(nums)
    nums = Array.from(nums)
    nums.sort((a,b)=> a-b)

    let count = 1
    let longestSequence = 0
    for(let i = 0 ; i < nums.length ; i++){
        let dif = nums[i+1]-nums[i]
      if(dif === 1){
        count ++
      }else{
        if(count > longestSequence){
            longestSequence = count
        }
        count = 1
      }
    }
     return longestSequence
};