/*  // Question   // Level: Medium

You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that 
on that cell there is a server and 0 means that it is no server. Two servers are said to communicate 
if they are on the same row or on the same column.

Return the number of servers that communicate with any other server.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2019/11/14/untitled-diagram-6.jpg
=============================================================================================
Input: grid = [[1,0],[0,1]]
Output: 0
Explanation: No servers can communicate with others.

Example 2:  Image Link: https://assets.leetcode.com/uploads/2019/11/13/untitled-diagram-4.jpg
=============================================================================================
Input: grid = [[1,0],[1,1]]
Output: 3
Explanation: All three servers can communicate with at least one other server.

Example 3:  Image Link: https://assets.leetcode.com/uploads/2019/11/14/untitled-diagram-1-3.jpg
===============================================================================================
Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
Output: 4
Explanation: The two servers in the first row can communicate with each other. The two servers in the third column can communicate with each other. The server at right bottom corner can't communicate with any other server.

-> Hint: Servers on the same row or column can communicate even if they are not placed continuously. 

*/

// Solution

var countServers = function(grid) {
    let r = grid.length,  c = grid[0].length;
    
    for(let i = 0; i < r; i++) {
        let x = -1, y = -1;
        for(let j = 0; j < c; j++) {
            if(grid[i][j] != 0) {
                if(x == -1) {   x = i;  y = j;   }
                else {
                    grid[i][j] = 5;  grid[x][y] = 5;
                }
            }          
        }
    }

    for(let j = 0; j < c; j++) {
        let x = -1, y = -1;
        for(let i = 0; i < r; i++) {
            if(grid[i][j] != 0) {
                if(x == -1) {   x = i;  y = j;   }
                else {
                    grid[i][j] = 5; grid[x][y] = 5;
                }
            }           
        }
    }
   
    let ans = 0;
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            if(grid[i][j] == 5) ans++;
        }
    }
    return ans;
};