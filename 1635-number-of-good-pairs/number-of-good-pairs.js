/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
 
    let count =  0;
    const map = new Map()
    for( const num of nums){
        if(map.has(num)){
            count += map.get(num)
            map.set(num,map.get(num)+1)
        }
        else {
            map.set(num,1)
        }
    }
    return count 
};