/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length < 2){
        return nums
    }
    let mid = Math.floor((nums.length)/2)
    let left = nums.slice(0,mid)
    let right = nums.slice(mid)
    return merge(sortArray(left),sortArray(right))

};

var merge = function (left,right) {

    let sortedArr =[]

    while(left.length && right.length){
        if(left[0] < right[0]){
        sortedArr.push(left.shift())
        }else{
        sortedArr.push(right.shift())
    }
   
}
    return [...sortedArr,...left,...right]
}