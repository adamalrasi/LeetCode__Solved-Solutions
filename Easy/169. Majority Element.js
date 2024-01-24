/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

var majorityElement = function(nums) {
    const map = {};
    for(let i = 0; i < nums.length; i++) map[nums[i]] = (map[nums[i]] || 0) + 1;

    let max = 0;
    let maxKey = "";

    for(let num in map){
        if(map[num] > max){
            max = map[num];
            maxKey = num;
        }
    }
    return maxKey;
};
// Time complexity: o(n)
// space complexity: o(n)