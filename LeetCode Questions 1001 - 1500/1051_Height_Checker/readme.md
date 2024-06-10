## 1051. Height Checker
#### Level: Easy


A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in **non-decreasing order** by height. Let this ordering be represented by the integer array `expected` where `expected[i]` is the expected height of the `ith` student in line.

You are given an integer array `heights` representing the **current order** that the students are standing in. Each `heights[i]` is the height of the `ith` student in line (**0-indexed**).

Return *the **number of indices** where* `heights[i] != expected[i]`.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>

<br>   -->

```
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>

<br>   -->

```
Input: heights = [5,1,2,3,4]
Output: 5
Explanation:
heights:  [5,1,2,3,4]
expected: [1,2,3,4,5]
All indices do not match.
```

<br>

**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>

<br>   -->

```
Input: heights = [1,2,3,4,5]
Output: 0
Explanation:
heights:  [1,2,3,4,5]
expected: [1,2,3,4,5]
All indices match.
```

<br>

<br>

**Constraints:**
- `1 <= heights.length <= 100`

- `1 <= heights[i] <= 100`



<br>

**Topics** 

##### Array, Sorting, Counting Sort


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = [...heights];
    expected.sort((a,b) => a-b);
    
    let res = 0;
    for(let i = 0; i < heights.length; i++) {
        if(heights[i] != expected[i]) res++;
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int heightChecker(int[] heights) {
        int[] expected = new int[heights.length];
        for(int i = 0; i < heights.length; i++) expected[i] = heights[i];
        Arrays.sort(expected);
        
        int res = 0;
        for(int i = 0; i < heights.length; i++) {
            if(heights[i] != expected[i]) res++;
        }
        return res;
    }
}
```

