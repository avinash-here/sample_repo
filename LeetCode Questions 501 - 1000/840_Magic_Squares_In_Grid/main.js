/*  // Question  // Level: Medium

A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, 
column, and both diagonals all have the same sum.

Given a row x col grid of integers, how many 3 x 3 "magic square" subgrids are there?  
(Each subgrid is contiguous).
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2020/09/11/magic_main.jpg
=====================================================================================
Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
Output: 1

Explanation: 
The following subgrid is a 3 x 3 magic square: 
Image Link: https://assets.leetcode.com/uploads/2020/09/11/magic_valid.jpg

while this one is not:
Image Link: https://assets.leetcode.com/uploads/2020/09/11/magic_invalid.jpg

In total, there is only one magic square inside the given grid.


Example 2:
===================
Input: grid = [[8]]
Output: 0

*/ 
// Solution 

var numMagicSquaresInside = function(grid) {
    let ans = 0;
    for(let i = 0; i < grid.length-2; i++) {
        for(let j = 0; j < grid[0].length-2; j++) {
            if(check(grid, i, j))  ans += 1;
        }
    }
    return ans;    
};

function check (mat, r, c) {
    let sum = 0;  let set = new Set();
    let fixed = new Set([1,2,3,4,5,6,7,8,9]);

    for(let i = c; i < c+3; i++)  {
        if(set.has(mat[r][i]) || !fixed.has(mat[r][i])) return false;
        sum += mat[r][i];  set.add(mat[r][i]);
    }

    let cur;
    for(let i = r+1; i < r+3; i++) {
        cur = 0;
        for(let j = c; j < c+3; j++) {
            if(!fixed.has(mat[i][j])) return false;
            if(set.has(mat[i][j])) return false;
            cur += mat[i][j];  set.add(mat[i][j]);
        }     
        if(cur != sum) return false;
    }

    for(let i = c; i < c+3; i++) {
        cur = 0;
        for(let j = r; j < r+3; j++)  cur += mat[j][i];     
        if(cur != sum) return false;
    }
    
    cur = 0; let cc = c;
    for(let i = r; i < r+3; i++) {
        cur += mat[i][cc];  cc++;
    }    
    if(cur != sum) return false;

    cur = 0;  cc = c+2;
    for(let i = r; i < r+3; i++) {
        cur += mat[i][cc];  c--;
    }   
    if(cur != sum) return false;
    return true;
} 