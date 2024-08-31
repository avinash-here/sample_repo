## 51. N-Queens
#### Level: Hard


The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.

Given an integer `n`, return *all distinct solutions to the **n-queens puzzle***. You may return the answer in **any order**.

Each solution contains a distinct board configuration of the n-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space, respectively.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2020/11/13/queens.jpg" width="480px"/>  <br>  

```
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: n = 1
Output: [["Q"]]
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

- `1 <= n <= 9`
  


<br>

**Topics** 

##### Array, Backtracking


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [],  str = [],  cur = [];
    for(let i = 0; i < n; i++) str.push(".");
    for(let i = 0; i < n; i++) cur.push([...str]);

    solve(0, cur, res);
    return res;
};

function solve(row, board, res) {
    if(row == board.length) {
        let ans = [];
        for(let i = 0; i < board.length; i++) {
            ans.push(board[i].join(""));
        }
        res.push(ans);  return;
    }
    for(let i = 0; i < board[row].length; i++) {
        if(check(board, row, i)) {
            board[row][i] = "Q";
            solve(row+1, board, res);
            board[row][i] = ".";
        }
    }
}

function check(board, r, c) {
    for(let j = 0; j < board.length; j++) {
        if(board[j][c] != '.') return false;
    }
    for(let j = 0; j < board[r].length; j++) {
        if(board[r][j] != '.') return false;
    }
    let i = r,  j = c;
    while(i >= 0 && j >= 0) {
        if(board[i][j] != '.') return false;
        i--;  j--;
    }
    i = r;  j = c;
    while(i < board.length && j < board[r].length) {
        if(board[i][j] != '.') return false;
        i++;  j++;
    }
    i = r;  j = c;
    while(i < board.length && j >= 0) {
        if(board[i][j] != '.') return false;
        i++;  j--;
    }
    i = r;  j = c;
    while(i >= 0 && j < board[r].length) {
        if(board[i][j] != '.') return false;
        i--;  j++;
    }
    return true;
}
```

#### Java
```java
class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        String[][] board = new String[n][n];
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) board[i][j] = ".";
        }

        solve(0, board, res);
        return res;
    }

    void solve(int row, String[][] board, List<List<String>> res) {
        if(row == board.length) {
            List<String> ans = new ArrayList<>();
            for(int i = 0; i < board.length; i++) {
                ans.add(String.join("", board[i]));
            }
            res.add(ans);  return;
        }
        for(int i = 0; i < board[row].length; i++) {
            if(check(board, row, i)) {
                board[row][i] = "Q";
                solve(row+1, board, res);
                board[row][i] = ".";
            }
        }
    }

    boolean check(String[][] board, int r, int c) {
        for(int j = 0; j < board.length; j++) {
            if(board[j][c].charAt(0) != '.') return false;
        }
        for(int j = 0; j < board[r].length; j++) {
            if(board[r][j].charAt(0) != '.') return false;
        }
        int i = r,  j = c;
        while(i >= 0 && j >= 0) {
            if(board[i][j].charAt(0) != '.') return false;
            i--;  j--;
        }
        i = r;  j = c;
        while(i < board.length && j < board[r].length) {
            if(board[i][j].charAt(0) != '.') return false;
            i++;  j++;
        }
        i = r;  j = c;
        while(i < board.length && j >= 0) {
            if(board[i][j].charAt(0) != '.') return false;
            i++;  j--;
        }
        i = r;  j = c;
        while(i >= 0 && j < board[r].length) {
            if(board[i][j].charAt(0) != '.') return false;
            i--;  j++;
        }
        return true;
    }
}
```
