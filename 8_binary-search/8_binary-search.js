"use strict";
// --- 8. Binary Search --- //
/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.*/
var search = function (nums, target) {
    var firstIndex = 0;
    var lastIndex = nums.length - 1;
    while (firstIndex <= lastIndex) {
        var middleIndex = firstIndex + Math.floor((lastIndex - firstIndex) / 2);
        if (nums[middleIndex] < target) {
            firstIndex = middleIndex + 1;
        }
        else if (nums[middleIndex] > target) {
            lastIndex = middleIndex - 1;
        }
        else {
            return middleIndex;
        }
    }
    return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
