/*  // Question  // Level: Medium

You are given an array of integers nums and an integer target.

Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element 
on it is less or equal to target. Since the answer may be too large, return it modulo 10^9 + 7.
 

Example 1:
===================================
Input: nums = [3,5,6,7], target = 9
Output: 4
Explanation: There are 4 subsequences that satisfy the condition.
[3] -> Min value + max value <= target (3 + 3 <= 9)
[3,5] -> (3 + 5 <= 9)
[3,5,6] -> (3 + 6 <= 9)
[3,6] -> (3 + 6 <= 9)

Example 2:
====================================
Input: nums = [3,3,6,8], target = 10
Output: 6
Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]

Example 3:
========================================
Input: nums = [2,3,3,4,6,7], target = 12
Output: 61
Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
Number of valid subsequences (63 - 2 = 61).
 

Constraints:
========================
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^6
1 <= target <= 10^6

*/
// Solution 

var numSubseq = function(nums, target) {    
    let n = nums.length;
    let mod = 1000000007;
    nums.sort((a,b) => a-b);

    let power = [1];
    for(let k = 1; k < n; k++) power[k] = (power[k-1]*2)% mod;

    let answer = 0;
    for(let i = 0; i < n; i++){
        let m = target-nums[i];
        let right = find(nums, m)-1;
        
        if(i > right) break;        
        else {
            answer += power[right - i];
            answer = answer % mod;
        }        
    }  
    return answer;
};

function find(arr, k) {
    let l = 0, h = arr.length-1;

    while(l <= h) {
        let mid = l + Math.floor((h-l)/2);
        if(arr[mid] <= k) {           
            l = mid+1;
        }
        else h = mid-1;
    }   
    return l;
}