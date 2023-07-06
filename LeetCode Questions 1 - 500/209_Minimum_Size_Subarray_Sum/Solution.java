/*

Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


Example 1:
=======================================
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
=================================
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
============================================
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

*/// Solution: 

class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int l = 0,  r = 0,  sum = 0;
        int count = 0,  res = Integer.MAX_VALUE;

        while(r < nums.length) {
            sum += nums[r];
            r++;  count++;

            if(sum >= target) res = Math.min(res, count);

            while(sum >= target) {
                sum -= nums[l];
                l++;  count--;
                if(sum >= target) res = Math.min(res, count);
            }
        }

        if(res == Integer.MAX_VALUE) return 0;
        return res;        
    }
}