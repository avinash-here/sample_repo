/*  // Question  // Level: Medium

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg
==================================================================================
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:
============
Input: n = 1
Output: [[1]]

*/

// Solution  (2nd attempt)

var generateMatrix = function(n) {
/*
    let ans = [];
    for(let i = 0; i < n; i++){
        let arr = new Array(n);
        ans.push(arr);
    }

    let num = 1;     
    let top = 0,  right = n-1,  bottom = n-1, left = 0;
    while(left <= right && top <= right){

        for(let i = left; i <= right; i++){
            ans[top][i] = num;  num++;
        }
        top++;
        for(let i = top; i <= bottom; i++){
            ans[i][right] = num;  num++;
        }
        right--;
        for(let i = right; i >= left; i--){
            ans[bottom][i] = num;  num++;
        }
        bottom--;
        for(let i = bottom; i >= top; i--){
            ans[i][left] = num;  num++;
        }
        left++;

    }
    return ans;
*/

    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(new Array(n));
    }

    let value = 1;
    let left = 0, right = n-1, top = 0, bottom = n-1;

    while(left <= right && top <= bottom) {
        for(let i = left; i <= right; i++) {
            arr[top][i] = value; value++;
        }
        top++;

        for(let i = top; i <= bottom; i++) {
            arr[i][right] = value; value++;
        }
        right--;

        for(let i = right; i >= left; i--) {
            arr[bottom][i] = value; value++;
        }
        bottom--;

        for(let i = bottom; i >= top; i--) {
            arr[i][left] = value; value++;
        }
        left++;
    }
    return arr;
};