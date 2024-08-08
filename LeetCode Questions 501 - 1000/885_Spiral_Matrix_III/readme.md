## 885. Spiral Matrix III
#### Level: Medium


You start at the cell `(rStart, cStart)` of an `rows x cols` grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.

You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all `rows * cols` spaces of the grid.

Return *an array of coordinates representing the positions of the grid in the order you visited them.*

<br><br>


**Example 1:** 

<img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/24/example_1.png" width="200px"/>  <br>  

```
Input: rows = 1, cols = 4, rStart = 0, cStart = 0
Output: [[0,0],[0,1],[0,2],[0,3]]
```

<br> 


**Example 2:**

<img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/24/example_2.png" width="240px"/>  <br>  

```
Input: rows = 5, cols = 6, rStart = 1, cStart = 4
Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
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

- `1 <= rows, cols <= 100`

- `0 <= rStart < rows`

- `0 <= cStart < cols`  


<br>

**Topics** 

##### Array, Matrix, Simulation


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let res = [[rStart, cStart]],   count = 1;  
    let n = rows*cols,  len = 2,  row = rStart,  col = cStart+1;

    while(count < n) {
        for(let j = 0; j < len; j++) {
            if(row >= 0 && row < rows && col >= 0 && col < cols) {
                res.push([row, col]);  count++;
            }
            row++;  if(count == n) return res;
        }
        row--;  col--;
        
        for(let j = 0; j < len; j++) {
            if(row >= 0 && row < rows && col >= 0 && col < cols) {
                res.push([row, col]);  count++;
            }
            col--;  if(count == n) return res;
        }
        col++;  row--;
        
        for(let j = 0; j < len; j++) {
            if(row >= 0 && row < rows && col >= 0 && col < cols) {
                res.push([row, col]);  count++;
            }
            row--;  if(count == n) return res;
        }
        row++;  col++;
        
        for(let j = 0; j < len; j++) {
            if(row >= 0 && row < rows && col >= 0 && col < cols) {
                res.push([row, col]);  count++;
            }
            col++;  if(count == n) return res;
        }
        len += 2;
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int[][] spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        int n = rows*cols,  len=2,  count=1,  row=rStart, col=cStart+1;
        int[][] res = new int[n][2];  
        res[0][0] = rStart;  res[0][1] = cStart;
        
        while(count < n) {
            for(int j = 0; j < len; j++) {
                if(row >= 0 && row < rows && col >= 0 && col < cols) {
                    res[count][0] = row;  res[count][1] = col;  
                    count++;
                }
                row++;  if(count == n) return res;
            }
            row--;  col--;
            
            for(int j = 0; j < len; j++) {
                if(row >= 0 && row < rows && col >= 0 && col < cols) {
                    res[count][0] = row;  res[count][1] = col;  
                    count++;
                }
                col--;  if(count == n) return res;
            }
            col++;  row--;
            
            for(int j = 0; j < len; j++) {
                if(row >= 0 && row < rows && col >= 0 && col < cols) {
                    res[count][0] = row;  res[count][1] = col;  
                    count++;
                }
                row--;  if(count == n) return res;
            }
            row++;  col++;
            
            for(int j = 0; j < len; j++) {
                if(row >= 0 && row < rows && col >= 0 && col < cols) {
                    res[count][0] = row;  res[count][1] = col;  
                    count++;
                }
                col++;  if(count == n) return res;
            }
            len += 2;
        }
        return res;
    }
}
```

#### C++
```c++
class Solution {
public:
    vector<vector<int>> spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        vector<vector<int>> res = {};   
        res.push_back({rStart, cStart});  int count = 1;  
        int n = rows*cols,  len = 2,  row = rStart,  col = cStart+1;

        while(count < n) {
            for(int j = 0; j < len; j++) {
                if(row >= 0 && row < rows && col >= 0 && col < cols) {
                    res.push_back({row, col});  count++;
                }
                row++;  if(count == n) return res;
            }
            row--;  col--;
            
            for(int j = 0; j < len; j++) {
                if(row >= 0 && row < rows && col >= 0 && col < cols) {
                    res.push_back({row, col});  count++;
                }
                col--;  if(count == n) return res;
            }
            col++;  row--;
            
            for(int j = 0; j < len; j++) {
                if(row >= 0 && row < rows && col >= 0 && col < cols) {
                    res.push_back({row, col});  count++;
                }
                row--;  if(count == n) return res;
            }
            row++;  col++;
            
            for(int j = 0; j < len; j++) {
                if(row >= 0 && row < rows && col >= 0 && col < cols) {
                    res.push_back({row, col});  count++;
                }
                col++;  if(count == n) return res;
            }
            len += 2;
        }
        return res;
    }
};
```