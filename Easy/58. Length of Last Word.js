/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

*/

var lengthOfLastWord = function(s) {
    if(!s || s === "") return 0
    const lastWord = s.trim().split(" ").map((char) => char != "" ? char : null)
    .filter(x => x)
    return lastWord[lastWord.length - 1]?.split("").length
};

// Time complexity: O(n)
// Space complexity: O(1)