## 1380. Lucky Numbers in a Matrix
#### Level: Easy


Given an `m x n` matrix of **distinct** numbers, return *all **lucky numbers** in the matrix in **any** order.*

A **lucky number** is an element of the matrix such that it is the minimum element in its row and maximum in its column.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
Output: [12]
Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: matrix = [[7,8],[1,2]]
Output: [7]
Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.
```

<br>


<br>

**Constraints:**
- `m == mat.length`

- `n == mat[i].length`

- `1 <= n, m <= 50`

- `1 <= matrix[i][j] <= 10^5`

- All elements in the matrix are distinct. 


<br>

**Topics** 

##### Array, Matrix


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let res = [];
    for(let i = 0; i < matrix.length; i++) {
        let min = matrix[i][0],  ind = 0;
        for(let j = 1; j < matrix[i].length; j++) {
            if(matrix[i][j] < min) {
                min = matrix[i][j];  ind = j;
            }
        }
        let flag = true;
        for(let j = 0; j < matrix.length; j++) {
            if(matrix[j][ind] > min) { flag = false;  break; }
        }
        if(flag) res.push(min);
    }
    return res;
};
```

#### Java
```java
class Solution {
    public List<Integer> luckyNumbers (int[][] matrix) {
        List<Integer> res = new ArrayList<>();
        for(int i = 0; i < matrix.length; i++) {
            int min = matrix[i][0],  ind = 0;
            for(int j = 1; j < matrix[i].length; j++) {
                if(matrix[i][j] < min) {
                    min = matrix[i][j];  ind = j;
                }
            }
            boolean flag = true;
            for(int j = 0; j < matrix.length; j++) {
                if(matrix[j][ind] > min) { flag = false;  break; }
            }
            if(flag) res.add(min);
        }
        return res;
    }
}
```

#### C++
```c++
class Solution {
public:
    vector<int> luckyNumbers (vector<vector<int>>& matrix) {
        vector<int> res;
        for(int i = 0; i < matrix.size(); i++) {
            int min = matrix[i][0],  ind = 0;
            for(int j = 1; j < matrix[i].size(); j++) {
                if(matrix[i][j] < min) {
                    min = matrix[i][j];  ind = j;
                }
            }
            bool flag = true;
            for(int j = 0; j < matrix.size(); j++) {
                if(matrix[j][ind] > min) { flag = false;  break; }
            }
            if(flag) res.push_back(min);
        }
        return res;
    }
};
```