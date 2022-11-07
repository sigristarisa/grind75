"use strict";
// --- 1. Two Sum --- //
/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.*/
const twoSum = (nums, target) => {
    const answer = [];
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        for (let j = 0; j < nums.length; j++) {
            let num2 = nums[j];
            if (num1 + num2 === target && i !== j) {
                answer.push(i, j);
            }
        }
    }
    return answer;
};
const twoSumPaulo = (nums, target) => {
    const numsMap = {};
    numsMap[nums[0]] = 0;
    for (let i = 1; i < nums.length; i++) {
        const pairValue = target - nums[i];
        if (pairValue in numsMap) {
            return [numsMap[pairValue], i];
        }
        numsMap[nums[i]] = i;
    }
};
function twoSumAlexJ(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let targetSecondNumber = target - nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (i === j)
                continue;
            if (nums[j] === targetSecondNumber)
                return [i, j];
        }
        continue;
    }
}
