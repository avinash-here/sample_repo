## 2419. Longest Subarray With Maximum Bitwise AND
#### Level: Medium


You are given an integer array `nums` of size `n`.

Consider a **non-empty** subarray from `nums` that has the **maximum** possible **bitwise AND**.

- In other words, let `k` be the maximum value of the bitwise AND of **any** subarray of `nums`. Then, only subarrays with a bitwise AND equal to `k` should be considered.

Return *the length of the **longest** such subarray.*

The bitwise AND of an array is the bitwise AND of all the numbers in it.

A **subarray** is a contiguous sequence of elements within an array.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [1,2,3,3,2,2]
Output: 2

Explanation:
The maximum possible bitwise AND of a subarray is 3.
The longest subarray with that value is [3,3], so we return 2.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [1,2,3,4]
Output: 1

Explanation:
The maximum possible bitwise AND of a subarray is 4.
The longest subarray with that value is [4], so we return 1.
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

- `1 <= nums.length <= 10^5`

- `1 <= nums[i] <= 10^6`  


<br>

**Topics** 

##### Array, Bit Manipulation, Brainteaser


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let max = nums[0];
    for(let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }
    let res = 1,  cur = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == max) cur++;
        else cur = 0;
        res = Math.max(res, cur);        
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int longestSubarray(int[] nums) {
        int max = nums[0];
        for(int i = 1; i < nums.length; i++) {
            max = Math.max(max, nums[i]);
        }
        int res = 1,  cur = 0;
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == max) cur++;
            else cur = 0;
            res = Math.max(res, cur);        
        }
        return res;
    }
}
```

#### C++
```c++
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int maxVal = nums[0];
        for(int i = 1; i < nums.size(); i++) {
            maxVal = max(maxVal, nums[i]);
        }
        int res = 1,  cur = 0;
        for(int i = 0; i < nums.size(); i++) {
            if(nums[i] == maxVal) cur++;
            else cur = 0;
            res = max(res, cur);        
        }
        return res;
    }
};
```