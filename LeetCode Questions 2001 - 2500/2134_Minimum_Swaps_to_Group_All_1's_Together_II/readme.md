## 2134. Minimum Swaps to Group All 1's Together II
#### Level: Medium


A **swap** is defined as taking two **distinct** positions in an array and swapping the values in them.

A **circular** array is defined as an array where we consider the **first** element and the **last** element to be **adjacent**.

Given a **binary circular** array `nums`, return *the minimum number of swaps required to group all* `1`*'s present in the array together at **any location***.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [0,1,0,1,1,0,0]
Output: 1
Explanation: Here are a few of the ways to group all the 1's together:
[0,0,1,1,1,0,0] using 1 swap.
[0,1,1,1,0,0,0] using 1 swap.
[1,1,0,0,0,0,1] using 2 swaps (using the circular property of the array).
There is no way to group all 1's together with 0 swaps.
Thus, the minimum number of swaps required is 1.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [0,1,1,1,0,0,1,1,0]
Output: 2
Explanation: Here are a few of the ways to group all the 1's together:
[1,1,1,0,0,0,0,1,1] using 2 swaps (using the circular property of the array).
[1,1,1,1,1,0,0,0,0] using 2 swaps.
There is no way to group all 1's together with 0 or 1 swaps.
Thus, the minimum number of swaps required is 2.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: nums = [1,1,0,0,1]
Output: 0
Explanation: All the 1's are already grouped together due to the circular property of the array.
Thus, the minimum number of swaps required is 0.
```

<br>


<br>

**Constraints:**

- `1 <= nums.length <= 10^5`

- `nums[i]` is either `0` or `1`.  


<br>

**Topics** 

##### Array, Sliding Window


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let total = 0;
    for(let i = 0; i < nums.length; i++) if(nums[i] == 1) total++;

    let swaps = 0;
    for(let i = 0; i < total; i++) if(nums[i] == 0) swaps++;
    
    let res = swaps;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) swaps--;
        if(nums[(i+total) % nums.length] == 0) swaps++;
        res = Math.min(res, swaps);
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int minSwaps(int[] nums) {
        int total = 0;
        for(int i = 0; i < nums.length; i++) if(nums[i] == 1) total++;

        int swaps = 0;
        for(int i = 0; i < total; i++) if(nums[i] == 0) swaps++;
        
        int res = swaps;
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == 0) swaps--;
            if(nums[(i+total) % nums.length] == 0) swaps++;
            res = Math.min(res, swaps);
        }
        return res;
    }
}
```

#### C++
```c++
class Solution {
public:
    int minSwaps(vector<int>& nums) {
        int total = 0;
        for(int i = 0; i < nums.size(); i++) if(nums[i] == 1) total++;

        int swaps = 0;
        for(int i = 0; i < total; i++) if(nums[i] == 0) swaps++;
        
        int res = swaps;
        for(int i = 0; i < nums.size(); i++) {
            if(nums[i] == 0) swaps--;
            if(nums[(i+total) % nums.size()] == 0) swaps++;
            res = min(res, swaps);
        }
        return res;
    }
};
```