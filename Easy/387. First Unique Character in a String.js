/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
*/

var firstUniqChar = function(s) {
    const map = {};
    for(let char of s) map[char] = (map[char] || 0) + 1
    console.log(map)
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] == 1) return i
    }
    return -1
};

// Big o = o(n)