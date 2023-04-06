/*  // Question   // Level: Medium

Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected 
group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2019/10/31/sample_3_1610.png
=========================================================================================================
Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).

Example 2:  Image Link: https://assets.leetcode.com/uploads/2019/10/31/sample_4_1610.png
========================================================================================
Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1

Example 3:
===============================
Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2

*/

// Solution

var closedIsland = function(grid) {
    let count = 0;

    for(let i = 1;  i < grid.length-1; i++) {
        for(let j = 1; j < grid[i].length-1; j++) {           
            if(grid[i][j] === 0) {                
                if(solve(grid, i, j))  count++; 
            }
        }
    }  
    return count;    
};

function solve(grid, i, j) {    
    if(i < 0 || j < 0 || 
       i >= grid.length || j >= grid[0].length) return false;
    if(grid[i][j] === 1) return true;
    
    grid[i][j] = 1;    
    let a = solve(grid, i-1, j);
    let b = solve(grid, i, j-1);
    let c = solve(grid, i+1, j);
    let d = solve(grid, i, j+1);   
    
    return a && b && c && d;    
}