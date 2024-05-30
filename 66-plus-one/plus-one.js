/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
 let variable = BigInt(digits.join(''))
 variable++
 console.log(variable)
 return variable.toString().split('')
};