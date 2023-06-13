/*  // Question   // Level: Medium

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri 
and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order 
(i.e., an equal array).
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2022/06/01/ex1.jpg
==============================================================================
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2: Image Link: https://assets.leetcode.com/uploads/2022/06/01/ex2.jpg
=============================================================================
Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]

*/

//  Solution

var equalPairs = function(grid) {
    let ans = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid.length; j++) {
            if(grid[i][0] == grid[0][j]) {
                let flag = true;

                for(let k = 1; k < grid.length; k++) {
                    if(grid[i][k] != grid[k][j]) {
                        flag = false;  break;
                    }
                }
                if(flag) ans++;
            }
        }        
    }

    return ans;
};