/*  // Question   // Level: Medium

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg
===============================================================================
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:  Image Link: https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg
===============================================================================
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

*/

// Solution

var setZeroes = function(matrix) {
    let mat = [];
    for(let i = 0; i < matrix.length; i++) {
        let arr = [];
        for(let j = 0; j < matrix[i].length; j++)  arr.push(matrix[i][j]);
        mat.push(arr);
    }

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(mat[i][j] == 0) {
                for(let r = 0; r < matrix[i].length; r++)  matrix[i][r] = 0;
                for(let c = 0; c < matrix.length; c++)  matrix[c][j] = 0;
            }
        }
    }    
};