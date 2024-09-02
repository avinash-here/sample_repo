## 1894. Find the Student that Will Replace the Chalk
#### Level: Medium


There are `n` students in a class numbered from `0` to `n - 1`. The teacher will give each student a problem starting with the student number `0`, then the student number `1`, and so on until the teacher reaches the student number `n - 1`. After that, the teacher will restart the process, starting with the student number `0` again.

You are given a **0-indexed** integer array `chalk` and an integer `k`. There are initially `k` pieces of chalk. When the student number `i` is given a problem to solve, they will use `chalk[i]` pieces of chalk to solve that problem. However, if the current number of chalk pieces is **strictly less** than `chalk[i]`, then the student number `i` will be asked to **replace** the chalk.

Return *the **index** of the student that will **replace** the chalk pieces.*

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: chalk = [5,1,5], k = 22
Output: 0
Explanation: The students go in turns as follows:
- Student number 0 uses 5 chalk, so k = 17.
- Student number 1 uses 1 chalk, so k = 16.
- Student number 2 uses 5 chalk, so k = 11.
- Student number 0 uses 5 chalk, so k = 6.
- Student number 1 uses 1 chalk, so k = 5.
- Student number 2 uses 5 chalk, so k = 0.
Student number 0 does not have enough chalk, so they will have to replace it.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: chalk = [3,4,1,2], k = 25
Output: 1
Explanation: The students go in turns as follows:
- Student number 0 uses 3 chalk so k = 22.
- Student number 1 uses 4 chalk so k = 18.
- Student number 2 uses 1 chalk so k = 17.
- Student number 3 uses 2 chalk so k = 15.
- Student number 0 uses 3 chalk so k = 12.
- Student number 1 uses 4 chalk so k = 8.
- Student number 2 uses 1 chalk so k = 7.
- Student number 3 uses 2 chalk so k = 5.
- Student number 0 uses 3 chalk so k = 2.
Student number 1 does not have enough chalk, so they will have to replace it.
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

- `chalk.length == n`

- `1 <= n <= 10^5`

- `1 <= chalk[i] <= 10^5`

- `1 <= k <= 10^9`  


<br>

**Topics** 

##### Array, Binary Search, Simulation, Prefix Sum


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let sum = 0; 
    for(let i = 0; i < chalk.length; i++) sum += chalk[i];
    if(k >= sum) k = k % sum;

    let i = 0;
    while(i < chalk.length) {
        if(chalk[i] > k) return i;
        else  k -= chalk[i];
        i++; 
    }
    return i;
};
```

#### Java
```java
class Solution {
    public int chalkReplacer(int[] chalk, int k) {
        long sum = 0; 
        for(int i = 0; i < chalk.length; i++) sum += chalk[i];
        if(k >= sum) k = (int)(k % sum);

        int i = 0;
        while(i < chalk.length) {
            if(chalk[i] > k) return i;
            else  k -= chalk[i];
            i++; 
        }
        return i;
    }
}
```

#### C++
```c++
class Solution {
public:
    int chalkReplacer(vector<int>& chalk, int k) {
        long sum = 0; 
        for(int i = 0; i < chalk.size(); i++) sum += chalk[i];
        if(k >= sum) k = (int)(k % sum);
        
        int i = 0;
        while(i < chalk.size()) {
            if(chalk[i] > k) return i;
            else  k -= chalk[i];
            i++;
        }
        return i;
    }
};
```