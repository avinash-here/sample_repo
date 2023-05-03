/*  // Question  // Level: Easy

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
 

Example 1:
=======================================
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not 
present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not 
present in nums2. Therefore, answer[1] = [4,6].

Example 2:
===========================================
Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is 
only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

*/ // Solution

var findDifference = function(nums1, nums2) {
    let obj1 = {},  obj2 = {};

    for(let i = 0; i < nums1.length; i++) obj1[nums1[i]] = 1;
    for(let i = 0; i < nums2.length; i++) obj2[nums2[i]] = 1;

    let first = Object.keys(obj1).map(Number);  
    let second = Object.keys(obj2).map(Number);
    
    let ans = [[],[]];
    for(let i = 0; i < first.length; i++) {
        if(!(nums2.includes(first[i]))) ans[0].push(first[i]);
    }
    for(let i = 0; i < second.length; i++) {
        if(!(nums1.includes(second[i]))) ans[1].push(second[i]);
    }   
    return ans;    
};