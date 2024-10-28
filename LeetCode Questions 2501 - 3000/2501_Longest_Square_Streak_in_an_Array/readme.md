## 2501. Longest Square Streak in an Array
#### Level: Medium


You are given an integer array `nums`. A subsequence of `nums` is called a **square streak** if:

- The length of the subsequence is at least `2`, and

- **after** sorting the subsequence, each element (except the first element) is the **square** of the previous number.

Return *the length of the **longest square streak** in* `nums`*, or return* `-1` *if there is no **square streak***.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [4,3,6,16,8,2]
Output: 3
Explanation: Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].
- 4 = 2 * 2.
- 16 = 4 * 4.
Therefore, [4,16,2] is a square streak.
It can be shown that every subsequence of length 4 is not a square streak.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [2,3,5,6,7]
Output: -1
Explanation: There is no square streak in nums so return -1.
```

<br>


<!-- **Example 3:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   

```
Input, Output, Explanation
```

<br> -->


<br>

**Constraints:**

- `2 <= nums.length <= 10^5`

- `2 <= nums[i] <= 10^5`  


<br>

**Topics** 

##### Array, Hash Table, Binary Search, Dynamic Programming, Sorting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    nums.sort((a,b) => a-b);
    let obj = {};
    for(let i = 0; i < nums.length; i++) obj[nums[i]] = 1;
    let max = -1;
    for(let i = 0; i < nums.length; i++) {
        let count = 1,  target = nums[i] * nums[i];
        while(obj[target] != undefined) {
            count++;
            target *= target;
        }
        if(count > 1 && count > max) max = count;
    }
    return max;
};
```

#### Java
```java

```

#### Other Langs
```other

```