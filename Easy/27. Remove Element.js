/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

*/
var removeElement = function(nums, val) {
    let count = 0
    nums.filter(idx => idx !== val ? nums[count++] = idx : [] )
    return count
};