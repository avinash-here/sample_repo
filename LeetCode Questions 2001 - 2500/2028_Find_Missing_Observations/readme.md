## 2028. Find Missing Observations
#### Level: Medium


You have observations of `n + m` **6-sided** dice rolls with each face numbered from `1` to `6`. `n` of the observations went missing, and you only have the observations of `m` rolls. Fortunately, you have also calculated the **average value** of the `n + m` rolls.

You are given an integer array `rolls` of length `m` where `rolls[i]` is the value of the `ith` observation. You are also given the two integers `mean` and `n`.

Return *an array of length* `n` *containing the missing observations such that the **average value** of the* `n + m` *rolls is **exactly*** `mean`. If there are multiple valid answers, return *any of them*. If no such array exists, return *an empty array.*

The **average value** of a set of `k` numbers is the sum of the numbers divided by `k`.

Note that `mean` is an integer, so the sum of the `n + m` rolls should be divisible by `n + m`.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: rolls = [3,2,4,3], mean = 4, n = 2
Output: [6,6]
Explanation: The mean of all n + m rolls is (3 + 2 + 4 + 3 + 6 + 6) / 6 = 4.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: rolls = [1,5,6], mean = 3, n = 4
Output: [2,3,2,2]
Explanation: The mean of all n + m rolls is (1 + 5 + 6 + 2 + 3 + 2 + 2) / 7 = 3.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: rolls = [1,2,3,4], mean = 6, n = 4
Output: []
Explanation: It is impossible for the mean to be 6 no matter what the 4 missing rolls are.
```

<br>


<br>

**Constraints:**

- `m == rolls.length`

- `1 <= n, m <= 10^5`

- `1 <= rolls[i], mean <= 6`  


<br>

**Topics** 

##### Array, Math, Simulation


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    let sum = 0,  m = rolls.length;
    for(let i = 0; i < m; i++) sum += rolls[i];
    let totalSum = (m + n) * mean,  sumLeft = totalSum - sum;
    if(sumLeft < n || sumLeft > n*6) return [];

    let avg = sumLeft/n,  res = [],  leftRolls = n-1;
    for(let i = 0; i < n; i++) {
        let cur = sumLeft - Math.ceil(leftRolls * avg);
        res.push(cur);
        sumLeft -= cur;  leftRolls--;
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int[] missingRolls(int[] rolls, int mean, int n) {
        int sum = 0,  m = rolls.length;
        for(int i = 0; i < m; i++) sum += rolls[i];
        int totalSum = (m+n) * mean,  sumLeft = totalSum - sum;
        if(sumLeft < n || sumLeft > n*6) return new int[0];
        
        double avg = (double)sumLeft/n;  int leftRolls = n-1;
        int[] res = new int[n];
        for(int i = 0; i < n; i++) {
            int cur = (int)(sumLeft - Math.ceil(leftRolls * avg));
            res[i] = cur;
            sumLeft -= cur;  leftRolls--;
        }
        return res;
    }
}
```
