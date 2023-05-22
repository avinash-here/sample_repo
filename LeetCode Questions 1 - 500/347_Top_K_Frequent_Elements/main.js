/*  // Question   // Level: Medium

Given an integer array nums and an integer k, return the k most frequent elements. You may return 
the answer in any order.
 

Example 1:
==================================
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
========================
Input: nums = [1], k = 1
Output: [1]

*/
// Solution

var topKFrequent = function(nums, k) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]] == undefined) obj[nums[i]] = 1;
        else obj[nums[i]]++;
    }

    let res = [];
    for(let key in obj)  res.push([key, obj[key]]);    
    res.sort((a,b) => b[1]-a[1]);
    
    let ans = [];
    for(let i = 0; i < k; i++)  ans.push(res[i][0]);    
    return ans;    
};