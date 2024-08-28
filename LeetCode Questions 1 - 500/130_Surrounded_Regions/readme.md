## 130. Surrounded Regions
#### Level: Medium


You are given an `m x n` matrix `board` containing **letters** `'X'` and `'O'`, **capture regions** that are **surrounded**:

- **Connect**: A cell is connected to adjacent cells horizontally or vertically.

- **Region**: To form a region **connect every** `'O'` cell.

- **Surround**: The region is surrounded with `'X'` cells if you can **connect the region** with `'X'` cells and none of the region cells are on the edge of the `board`.

A **surrounded region is captured** by replacing all `'O'`s with `'X'`s in the input matrix `board`.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg" width="400px"/>  <br>  

```
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Explanation:
In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: board = [["X"]]

Output: [["X"]]
```

<br>


<!-- **Example 3:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>

```
Input, Output, Explanation
```

<br>     -->


<br>

**Constraints:**

- `m == board.length`

- `n == board[i].length`

- `1 <= m, n <= 200`

- `board[i][j]` is `'X'` or `'O'`.  


<br>

**Topics** 

##### Array, Depth-First Search, Breadth-First Search, Union Find, Matrix


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let n = board.length,  m = board[0].length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(i == 0 || j == 0 || i == n-1 || j == m-1) {
                if(board[i][j] == 'O') neutralize(i, j, n, m, board);
            }
        }
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] == 'O') board[i][j] = 'X';
            if(board[i][j] == 'N') board[i][j] = 'O';
        }
    }
};

function neutralize(i, j, n, m, board) {
    if(i < 0 || j < 0 || i >= n || j >= m || board[i][j] != 'O') return;
    board[i][j] = 'N';
    neutralize(i-1, j, n, m, board);
    neutralize(i+1, j, n, m, board);
    neutralize(i, j-1, n, m, board);
    neutralize(i, j+1, n, m, board);
}
```

#### Java
```java
class Solution {
    public void solve(char[][] board) {
        int n = board.length,  m = board[0].length;
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(i == 0 || j == 0 || i == n-1 || j == m-1) {
                    if(board[i][j] == 'O') neutralize(i, j, n, m, board);
                }
            }
        }
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(board[i][j] == 'O') board[i][j] = 'X';
                if(board[i][j] == 'N') board[i][j] = 'O';
            }
        }
    }

    void neutralize(int i, int j, int n, int m, char[][] board) {
        if(i < 0 || j < 0 || i >= n || j >= m || board[i][j] != 'O') return;
        board[i][j] = 'N';
        neutralize(i-1, j, n, m, board);
        neutralize(i+1, j, n, m, board);
        neutralize(i, j-1, n, m, board);
        neutralize(i, j+1, n, m, board);
    }
}
```

