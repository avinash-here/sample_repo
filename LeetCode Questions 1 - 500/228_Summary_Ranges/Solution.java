/*  // Question   // Level: Easy

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, 
each element of nums is covered by exactly one of the ranges, and there is no integer x such that x 
is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:
===========================
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:
=============================
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

*/

// Solution

import java.util.*;

class Solution {
    public List<String> summaryRanges(int[] nums) {
        if(nums.length == 0) return new ArrayList<>();
        
        List<String> ans = new ArrayList<>();  
        int last = nums[0];

        for(int i = 1; i < nums.length; i++) {
            if(nums[i] != nums[i-1]+1) {
                if(last == nums[i-1]) {
                    ans.add(last+"");
                    last = nums[i];
                }
                else {
                    ans.add(last + "->" + nums[i-1]);
                    last = nums[i];
                }
            }
        }
        if(last == nums[nums.length-1]) ans.add(last+"");
        else ans.add(last + "->" + nums[nums.length-1]);

        return ans;
    }
}