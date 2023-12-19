/*
9. Palindrome Number
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */


function isPalindrome(x) {
  const reversed = Number(x.toString().split("").reverse().join(""));
  if (reversed == null) return false;
  if (reversed === x) {
    return true;
  } else {
    return false;
  }
}

// Without using a string
function isPal(x) {
    if(x <= 0) return false
    let reversed = 0
    for(let i = x; i >= 1; i = Math.floor(i/10)){
        reversed = reversed * 10 + i % 10
    }
    return reversed === x
};


console.log(isPal(121)) // true
console.log(isPal(123)) // false
console.log(isPal(-121)) // false
console.log(isPal(0)) // false
