## 1155. Number of Dice Rolls With Target Sum
#### Level: Medium


You have `n` dice, and each dice has `k` faces numbered from `1` to `k`.

Given three integers `n`, `k`, and `target`, return *the number of possible ways (out of the k<sup>n</sup> total ways) to roll the dice, so the sum of the face-up numbers equals* `target`. Since the answer may be too large, return it **modulo** `10^9 + 7`.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: n = 1, k = 6, target = 3
Output: 1
Explanation: You throw one die with 6 faces.
There is only one way to get a sum of 3.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: n = 2, k = 6, target = 7
Output: 6
Explanation: You throw two dice, each with 6 faces.
There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: n = 30, k = 30, target = 500
Output: 222616187
Explanation: The answer must be returned modulo 10^9 + 7.
```

<br>


<br>

**Constraints:**

- `1 <= n, k <= 30`

- `1 <= target <= 1000` 


<br>

**Topics** 

##### Dynamic Programming


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    let res = [];
    for(let i = 0; i <= n; i++) {
        res.push(new Array(target+1).fill(-1));
    }
    res[0][0] = 1;
    return solve(n, k, target, res);
};

function solve(n, k, tar, res) {
    if(tar < 0) return 0;
    else if(n == 0 && tar != 0) return 0;
    else if(n != 0 && tar == 0) return 0;
    else if(n == 0 && tar == 0) return 1;
    else if(res[n][tar] != -1) return res[n][tar];
    
    let ans = 0;
    for(let i = 1; i <= k; i++) {
        ans = (ans + solve(n-1, k, tar-i, res)) % 1000000007;
    }
    return res[n][tar] = ans; 
}
```

#### Java
```java
class Solution {
    public int numRollsToTarget(int n, int k, int target) {
        int[][] dp = new int[n+1][target+1];
        for(int i = 0; i <= n; i++) Arrays.fill(dp[i], -1);
        dp[0][0] = 1;
        
        return solve(n, k, target, dp);
    }

    int solve(int n, int k, int tar, int[][] dp) {
        if(tar < 0) return 0;
        else if(n == 0 && tar != 0) return 0;
        else if(n != 0 && tar == 0) return 0;
        else if(n == 0 && tar == 0) return 1;
        else if(dp[n][tar] != -1) return dp[n][tar];

        int ans = 0;
        for(int i = 1; i <= k; i++) {
            ans = (ans + solve(n-1, k, tar-i, dp)) % 1000000007;
        } 
        return dp[n][tar] = ans;
    }
}
```
