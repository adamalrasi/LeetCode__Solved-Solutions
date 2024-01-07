/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

*/

var groupAnagrams = function(strs) {
    const ordered = strs.map(str => str.split("").sort().join(""))
    const map = {}
    for(let i = 0; i < strs.length; i++){
        map[ordered[i]] 
        ? map[ordered[i]].push(strs[i])
        : map[ordered[i]] = [strs[i]]
    }
    return Object.values(map)
};

// Time complexity: O(n * m * log(m))
// Space complexity: O(n)