## 200. Number of Islands
#### Level: Medium


Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return *the number of islands.*

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
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

- `m == grid.length`

- `n == grid[i].length`

- `1 <= m, n <= 300`

- `grid[i][j]` is `'0'` or `'1'`. 


<br>

**Topics** 

##### Array, Depth-First Search, Breadth-First Search, Union Find, Matrix


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == '1') {
                count++;
                collect(i, j);
            }
        }
    }

    function collect(i, j) {
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
        if(grid[i][j] == '0') return;

        grid[i][j] = '0';
        collect(i-1, j);
        collect(i+1, j);
        collect(i, j-1);
        collect(i, j+1);
    }
    
    return count;
};

```

#### Java
```java
class Solution {
    public int numIslands(char[][] grid) {
        int res = 0,  n = grid.length,  m = grid[0].length;
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(grid[i][j] == '1') {
                    res++;  changeOnesToZeros(i, j, n, m, grid);
                }
            }
        }
        return res;
    }

    void changeOnesToZeros(int i, int j, int n, int m, char[][] grid) {
        if(i < 0 || j < 0 || i >= n || j >= m || grid[i][j] == '0') return;
        grid[i][j] = '0';
        changeOnesToZeros(i-1, j, n, m, grid);
        changeOnesToZeros(i+1, j, n, m, grid);
        changeOnesToZeros(i, j-1, n, m, grid);
        changeOnesToZeros(i, j+1, n, m, grid);
    }
}
```
