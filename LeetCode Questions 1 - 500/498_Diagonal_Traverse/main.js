/*
Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
Image link: https://assets.leetcode.com/uploads/2021/04/10/diag1-grid.jpg

Example 1:
======================================
Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]

Example 2:
==========================
Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]

*/

var findDiagonalOrder = function(mat) {
    let ans = [];  let i = 0,  j = 0; 
    while(i < mat.length && j < mat[0].length){
        while(i >= 0 && j < mat[0].length){
            ans.push(mat[i][j]);
            i--;  j++;
        }
        if(j == mat[0].length){  i += 2; j--;  }
        else i++;
        while(i < mat.length && j >= 0){
            ans.push(mat[i][j]);
            i++;  j--;
        }
        if(i == mat.length){  i--;  j += 2;  }
        else j++;
    }
    return ans;    
};