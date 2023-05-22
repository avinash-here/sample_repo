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

import java.util.*;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new LinkedHashMap<>();
        for(int i = 0; i < nums.length; i++) {
            if(!map.containsKey(nums[i])) map.put(nums[i], 1);
            else map.put(nums[i], map.get(nums[i]) + 1);
        }

        int[][] res = new int[map.keySet().size()][2];  int ind = 0;
        for(Integer i : map.keySet()) {
            int[] arr = new int[2];
            arr[0] = i;  arr[1] = map.get(i);
            res[ind] = arr;  ind++;
        }
        Arrays.sort(res, (a,b) -> b[1]-a[1]);

        int[] ans = new int[k];
        for(int i = 0; i < k; i++) ans[i] = res[i][0];
        return ans;
    }
}