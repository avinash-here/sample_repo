/*

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
 

Example 1:
=====================
Input: nums = [1,2,3]
Output: 6


Example 2:
=======================
Input: nums = [1,2,3,4]
Output: 24


Example 3:
========================
Input: nums = [-1,-2,-3]
Output: -6

*/

var maximumProduct = function(nums) {

    nums.sort((a,b) => (b-a));
    let n = nums.length;

    let n1 = nums[0] * nums[1] * nums[2];
    let n2 = nums[n-1] * nums[n-2] * nums[0];

    return n2 > n1 ? n2 : n1;    
};