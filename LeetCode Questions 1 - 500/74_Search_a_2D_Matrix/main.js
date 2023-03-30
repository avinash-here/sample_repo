/*  // Question   // Level: Medium

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2020/10/05/mat.jpg
==============================================================================
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:  Image Link: https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg
===============================================================================
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

*/

// Solution

var searchMatrix = function(matrix, target) {
    let arr = [];

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            arr.push(matrix[i][j]);
        }
    }

    let l = 0, r = arr.length-1;  

    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        
        if(arr[mid] == target) return true;
        else if(arr[mid] < target)  l = mid+1;        
        else  r = mid-1;
    }
    return false;
};