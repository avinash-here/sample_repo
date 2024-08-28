## 1905. Count Sub Islands
#### Level: Medium


You are given two `m x n` binary matrices `grid1` and `grid2` containing only `0`'s (representing water) and `1`'s (representing land). An **island** is a group of `1`'s connected **4-directionally** (horizontal or vertical). Any cells outside of the grid are considered water cells.

An island in `grid2` is considered a **sub-island** if there is an island in `grid1` that contains **all** the cells that make up **this** island in `grid2`.

Return the ***number** of islands in* `grid2` *that are considered **sub-islands.***

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2021/06/10/test1.png" width="500px"/>  <br>  

```
Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
Output: 3
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2021/06/03/testcasex2.png" width="500px"/>  <br>  

```
Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
Output: 2 
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.
```

<br>


<!-- **Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   

```
Input, Output, Explanation
```

<br>  -->


<br>

**Constraints:**

- `m == grid1.length == grid2.length`

- `n == grid1[i].length == grid2[i].length`

- `1 <= m, n <= 500`

- `grid1[i][j]` and `grid2[i][j]` are either `0` or `1`.  


<br>

**Topics** 

##### Array, Depth-First Search, Breadth-First Search, Union Find, Matrix


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let n = grid2.length,  m = grid2[0].length,  res = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid2[i][j] == 1) {
                if(check(i, j, n, m, grid1, grid2))  res++;
                solve(i, j, n, m, grid1, grid2);
            }
        }
    }
    return res;
};

function check(i, j, n, m, g1, g2) {
    if(i < 0 || j < 0 || i >= n || j >= m || g2[i][j] == 0) return true;
    if(g2[i][j] == 1 && g1[i][j] == 0) return false;
    g2[i][j] = 0;
    let res = check(i-1, j, n, m, g1, g2)
    && check(i+1, j, n, m, g1, g2)
    && check(i, j-1, n, m, g1, g2)
    && check(i, j+1, n, m, g1, g2);
    g2[i][j] = 1;
    return res;
}

function solve(i, j, n, m, g1, g2) {
    if(i < 0 || j < 0 || i >= n || j >= m || g2[i][j] == 0) return;
    g2[i][j] = 0;
    solve(i-1, j, n, m, g1, g2);
    solve(i+1, j, n, m, g1, g2);
    solve(i, j-1, n, m, g1, g2);
    solve(i, j+1, n, m, g1, g2);
}
```

#### Java
```java
class Solution {
    public int countSubIslands(int[][] grid1, int[][] grid2) {
        int n = grid2.length,  m = grid2[0].length,  res = 0;
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(grid2[i][j] == 1) {
                    if(check(i, j, n, m, grid1, grid2))  res++;
                    solve(i, j, n, m, grid1, grid2);
                }
            }
        }
        return res;
    }

    boolean check(int i, int j, int n, int m, int[][] g1, int[][] g2) {
        if(i < 0 || j < 0 || i >= n || j >= m || g2[i][j] == 0) return true;
        if(g2[i][j] == 1 && g1[i][j] == 0) return false;
        g2[i][j] = 0;
        boolean res = check(i-1, j, n, m, g1, g2)
        && check(i+1, j, n, m, g1, g2)
        && check(i, j-1, n, m, g1, g2)
        && check(i, j+1, n, m, g1, g2);
        g2[i][j] = 1;
        return res;
    }

    void solve(int i, int j, int n, int m, int[][] g1, int[][] g2) {
        if(i < 0 || j < 0 || i >= n || j >= m || g2[i][j] == 0) return;
        g2[i][j] = 0;
        solve(i-1, j, n, m, g1, g2);
        solve(i+1, j, n, m, g1, g2);
        solve(i, j-1, n, m, g1, g2);
        solve(i, j+1, n, m, g1, g2);
    }
}
```
