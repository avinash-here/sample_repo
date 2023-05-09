/*  // Question  // Level: Medium

Given an m x n matrix, return all elements of the matrix in spiral order.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg
==================================================================================
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:  Image Link: https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg
=================================================================================
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

// Solution
var spiralOrder = function(matrix) {
    let t = 0, b = matrix.length-1, l = 0, r = matrix[0].length-1;
    let res = [], count = (b+1)*(r+1);

    while(t <= b || l <= r) {
        for(let i = l; i <= r && count > 0; i++) {
            res.push(matrix[t][i]);  count--;
        }
        t++;

        for(let i = t; i <= b && count > 0; i++) {
            res.push(matrix[i][r]);  count--;
        }
        r--;

        for(let i = r; i >= l && count > 0; i--) {
            res.push(matrix[b][i]);  count--;
        }
        b--;

        for(let i = b; i >= t && count > 0; i--) {
            res.push(matrix[i][l]); count--;
        }
        l++;
    }
    return res;    
};