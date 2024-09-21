/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const countMap = {}
    let goodPairs = 0 
    nums.forEach(num=> {
        countMap[num] = (countMap[num] || 0 ) + 1
    })
    for(let count of Object.values(countMap)){
        if(count > 1){
            goodPairs += (count * (count - 1)) / 2 ;
        }
    }

    return goodPairs
};