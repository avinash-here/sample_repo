## 840. Magic Squares In Grid
#### Level: Medium


A `3 x 3` **magic square** is a `3 x 3` grid filled with distinct numbers **from** 1 **to** 9 such that each row, column, and both diagonals all have the same sum.

Given a `row x col` `grid` of integers, how many `3 x 3` contiguous magic square subgrids are there?

Note: while a magic square can only contain numbers from 1 to 9, `grid` may contain numbers up to 15.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2020/09/11/magic_main.jpg" width="280px"/>  <br>  

```
Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
Output: 1
Explanation: 
The following subgrid is a 3 x 3 magic square:
```
<img src="https://assets.leetcode.com/uploads/2020/09/11/magic_valid.jpg" width="210px" /> <br>
```while this one is not: ``` <br> 
<img src="https://assets.leetcode.com/uploads/2020/09/11/magic_invalid.jpg" width="210px" /> <br>
```In total, there is only one magic square inside the given grid. ``` 

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: grid = [[8]]
Output: 0
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

- `row == grid.length`

- `col == grid[i].length`

- `1 <= row, col <= 10`

- `0 <= grid[i][j] <= 15`  


<br>

**Topics** 

##### Array, Hash Table, Math, Matrix


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let res = 0;
    for(let i = 0; i < grid.length-2; i++) {
        for(let j = 0; j < grid[i].length-2; j++) {
            if(check(i, j, grid)) res++;
        }
    }
    return res;
};

function check(i, j, grid) {
    let obj = {};
    for(let row = i; row < i+3; row++) {
        for(let col = j; col < j+3; col++) {
            if(grid[row][col] > 9 || grid[row][col] < 1) return false;
            if(obj[grid[row][col]]) return false;
            obj[grid[row][col]] = 1;
        }
    }
    
    let sum = 0;
    for(let row = i; row < i+3; row++) sum += grid[row][j];
    
    for(let row = i; row < i+3; row++) {
        let curSum = 0;
        for(let col = j; col < j+3; col++) curSum += grid[row][col];
        if(curSum != sum) return false;
    }
    for(let col = j; col < j+3; col++) {
        let curSum = 0;
        for(let row = i; row < i+3; row++) curSum += grid[row][col];
        if(curSum != sum) return false;
    }
    
    let d1 = 0,  d2 = 0;
    d1 = grid[i][j] + grid[i+1][j+1] + grid[i+2][j+2];
    d2 = grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j];
    if(sum != d1 || sum != d2) return false;
    
    return true;
}
```

#### Java
```java
class Solution {
    public int numMagicSquaresInside(int[][] grid) {
        int res = 0;
        for(int i = 0; i < grid.length-2; i++) {
            for(int j = 0; j < grid[i].length-2; j++) {
                if(check(i, j, grid)) res++;
            }
        }
        return res;
    }

    boolean check(int i, int j, int[][] grid) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int row = i; row < i+3; row++) {
            for(int col = j; col < j+3; col++) {
                if(grid[row][col] > 9 || grid[row][col] < 1) return false;
                if(map.containsKey(grid[row][col])) return false;
                map.put(grid[row][col], 1);
            }
        }
        
        int sum = 0;
        for(int row = i; row < i+3; row++) sum += grid[row][j];
        
        for(int row = i; row < i+3; row++) {
            int curSum = 0;
            for(int col = j; col < j+3; col++) curSum += grid[row][col];
            if(curSum != sum) return false;
        }
        for(int col = j; col < j+3; col++) {
            int curSum = 0;
            for(int row = i; row < i+3; row++) curSum += grid[row][col];
            if(curSum != sum) return false;
        }
        
        int d1 = 0,  d2 = 0;
        d1 = grid[i][j] + grid[i+1][j+1] + grid[i+2][j+2];
        d2 = grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j];
        if(sum != d1 || sum != d2) return false;
        
        return true;
    }
}
```
