/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

var canConstruct = function(ransomNote, magazine) {
    const map = {}
    for(let char of magazine) map[char] = (map[char] || 0) + 1
    return ransomNote.split("").map((char, idx) => map[char] ? map[char] = map[char] -1 : false).includes(false) ? false : true
  };

// Time complexity: O(n + m)
// space complexity: O(m) 