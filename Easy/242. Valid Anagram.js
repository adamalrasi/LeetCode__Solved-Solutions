/*
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */

function isAnagram(str1, str2) {
    if(str1.length !== str2.length) return false
    // Frequency counter pattern
    // create new objects
    const obj1 = {}
    const obj2 = {}
    // store string in to objects: obj1[key(a):value(1)]
    for(let val of str1) obj1[val] = (obj1[val] || 0) + 1
    for(let val of str2) obj2[val] = (obj2[val] || 0) + 1

    // for loop obj1
    for(let key in obj1){
        // if key is not EQUAL obj2[key]: return false
        if(!(key in obj2)) return false
        // if obj1[key].value is not EQUAL obj2[key].value: return false
        if(!(obj1[key] == obj2[key])) return false
    }
    // return true 
    return true
}

// Time complexity: O(n) Linear 
// Space complexity: O(n) Linear