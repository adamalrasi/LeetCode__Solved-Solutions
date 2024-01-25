/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

var isValid = function(s) {
    const hashMap = { "(":")", "{":"}", "[":"]"};
    const stack = [];
    for(let char of s){
        if(hashMap[char]){
            stack.push(hashMap[char]);
        } else if(stack.length > 0 && stack[stack.length - 1] === char){
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};

// time complexity = O(n) linear
// Space complexity: O(n) linear