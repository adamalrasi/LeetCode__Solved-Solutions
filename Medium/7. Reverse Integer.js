/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 
*/

var reverse = function(x) {
    const sign = Math.sign(x);
    const result = sign * Math.abs(x).toString().split("").reverse().join("");
    const limit = Math.pow(2, 31);
    return result <= -limit || result > limit ? 0 : result;
};
// Time complexity: o(n)
// Space complexity: o(1) 