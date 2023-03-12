/*

Given an array of integers temperatures represents the daily temperatures, return an array answer such 
that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
If there is no future day for which this is possible, keep answer[i] == 0 instead. 

Example 1:
===============================================
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
===================================
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
================================
Input: temperatures = [30,60,90]
Output: [1,1,0]

*/

var dailyTemperatures = function(temps) {
    let ans = new Array(temps.length);
    let stk = [];    let diff = [];
    for(let i = temps.length-1; i >= 0; i--){
        if(stk.length == 0){
            ans[i] = 0;   diff.push(0);
        }
        else if(stk.length > 0 && stk[stk.length - 1] <= temps[i]){
            let days = 1;
            while(stk[stk.length-1] <= temps[i]){
                stk.pop();
                days += diff.pop();
            }

            if(stk.length == 0){
                ans[i] = 0;  diff.push(0);
            }
            else{
                ans[i] = days;  diff.push(days);
            }
        }
        else {
            ans[i] = 1;   diff.push(1);
        }

        stk.push(temps[i]);
    }
    return ans;    
};