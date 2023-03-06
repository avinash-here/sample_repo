/*

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.
 

Example 1:
================================
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer
is 9.

Example 2:
=============================
Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

*/

var findKthPositive = function(arr, k) {
    let ans = [],  arR = [];
    for(let i = arr.length-1; i >= 0; i--)  arR.push(arr[i]);
    
    for(let i = 1; i <= arr[arr.length-1]; i++){
        if(arR[arR.length-1] == i)  arR.pop();        
        else  ans.push(i);
    }
        
    if(ans.length >= k) return ans[k-1];
    else {
        if(ans.length == 0) return arr[arr.length-1] + k;
        else return arr[arr.length-1] + (k-ans.length);
    }       
};