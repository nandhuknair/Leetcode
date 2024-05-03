/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b)=> a-b).reverse()
    let numSet = new Set (nums)

    if(nums.length === 0) return null
    if(numSet.size < 3){
        return Math.max(...numSet)
    }else{
        return Array.from(numSet)[2]
    }

}