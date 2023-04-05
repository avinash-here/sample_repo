/*  // Question   // Level: Medium

Given an array of distinct integers candidates and a target integer target, return a list of all unique 
combinations of candidates where the chosen numbers sum to target. You may return the combinations in 
any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique 
if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less 
than 150 combinations for the given input.

 
Example 1:
=========================================
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:
=======================================
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:
===================================
Input: candidates = [2], target = 1
Output: []

*/

// Solution

var combinationSum = function(candidates, target) {
    let ans = [];       
    
    function comb(arr, sum, cur, ind){        
        if(sum > target) return;
        if(sum == target){            
            ans.push([...cur]);
            return;
        }

        for(let i = ind; i < arr.length; i++){
            cur.push(arr[i]);
            comb(arr, sum+arr[i], cur, i);
            cur.pop();            
        }
    }

    comb(candidates, 0, [], 0);
    let x = [];
    for(let i = 0; i < ans.length; i++) {
        ans[i].sort((a,b) => (a-b));
        x.push(ans[i].join(""));
    }

    let ans2 = [];
    for(let i = 0; i < x.length; i++) {
        let flag = false;
        for(let j = i+1; j < x.length; j++) {
            if(x[i] == x[j]) {
                flag = true;  break;
            }
        }
        if(!flag) ans2.push(ans[i]);
    }
    return ans2;    
};