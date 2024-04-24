/*  1137. N-th Tribonacci Number  // Level: Easy

The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.
 

Example 1:
============
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

Example 2:
=============
Input: n = 25
Output: 1389537

*/

var tribonacci = function(n) {    
    let ans = new Array(n);
    ans[0] = 0, ans[1] = 1, ans[2] = 1;
    for(let i = 3;  i <= n; i++){
        let num = ans[i-1] + ans[i-2] + ans[i-3];
        ans[i] = num;
    }
    return ans[n];    
};