/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

var isPalindrome = function(s) {
    // charCode
    const arr = s.split("")
    const newStrArr = []
    for(let char of arr){
        let charCode = char.toLowerCase().charCodeAt()
        if(charCode >= 97 && charCode <= 122 || charCode >= 48 && charCode <= 57){
        newStrArr.push(char.toLowerCase())
        }
    }
    let normalStr = newStrArr.join("")
    let reversedStr = newStrArr.reverse().join("")
    console.log(normalStr, reversedStr)
    return normalStr === reversedStr ? true : false
};