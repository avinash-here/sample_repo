/*  // Question   // Level: Medium

You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally) land cell or 
walking off the boundary of the grid.

Return the number of land cells in grid for which we cannot walk off the boundary of the grid in 
any number of moves.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2021/02/18/enclaves1.jpg
====================================================================================
Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.

Example 2:  Image Link: https://assets.leetcode.com/uploads/2021/02/18/enclaves2.jpg
====================================================================================
Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: All 1s are either on the boundary or can reach the boundary.

*/

// Solution

var numEnclaves = function(grid) {
    let n = grid.length,  m = grid[0].length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(i == 0 || j == 0 || i == n-1 || j == m-1) {
                if(grid[i][j] == 1) solve(i, j, grid, n, m);
            }
        }
    }

    let count = 0;
    for(let i = 1; i < n-1; i++) {
        for(let j = 1; j < m-1; j++) {
            if(grid[i][j] == 1) count++;
        }
    }
    return count;
};

function solve(i, j, grid, n, m) {
    if(i < 0 || j < 0 || i >= n || j >= m) return;
    if(grid[i][j] == 0) return;

    grid[i][j] = 0;
    solve(i-1, j, grid, n, m);
    solve(i, j-1, grid, n, m);
    solve(i+1, j, grid, n, m);
    solve(i, j+1, grid, n, m);
}