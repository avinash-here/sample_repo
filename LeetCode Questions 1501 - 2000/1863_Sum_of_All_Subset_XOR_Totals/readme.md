## 1863. Sum of All Subset XOR Totals
#### Level: Easy


The **XOR total** of an array is defined as the bitwise `XOR` of **all its elements**, or `0` if the array is **empty**. 

- For example, the **XOR total** of the array `[2,5,6]` is `2 XOR 5 XOR 6 = 1`.

Given an array `nums`, return *the **sum** of all **XOR totals** for every **subset** of* `nums`. 

**Note:** Subsets with the **same** elements should be counted **multiple** times.

An array `a` is a **subset** of an array `b` if `a` can be obtained from `b` by deleting some (possibly zero) elements of `b`.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>

<br>   -->

```
Input: nums = [1,3]
Output: 6
Explanation: The 4 subsets of [1,3] are:
- The empty subset has an XOR total of 0.
- [1] has an XOR total of 1.
- [3] has an XOR total of 3.
- [1,3] has an XOR total of 1 XOR 3 = 2.
0 + 1 + 3 + 2 = 6
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>

<br>   -->

```
Input: nums = [5,1,6]
Output: 28
Explanation: The 8 subsets of [5,1,6] are:
- The empty subset has an XOR total of 0.
- [5] has an XOR total of 5.
- [1] has an XOR total of 1.
- [6] has an XOR total of 6.
- [5,1] has an XOR total of 5 XOR 1 = 4.
- [5,6] has an XOR total of 5 XOR 6 = 3.
- [1,6] has an XOR total of 1 XOR 6 = 7.
- [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28
```

<br>

**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>

<br>   -->

```
Input: nums = [3,4,5,6,7,8]
Output: 480
Explanation: The sum of all XOR totals for every subset is 480.
```

<br>

<br>

**Constraints:**
- `1 <= nums.length <= 12`

- `1 <= nums[i] <= 20`



<br>

**Topics** 

##### Array, Math, Backtracking, Bit Manipulation, Combinatorics, Enumeration


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let res = 0;

    function find (ind, cur) {
        res += cur;
        if(ind >= nums.length) return;
        
        for(let i = ind; i < nums.length; i++) find(i+1, cur ^ nums[i]);
    }
    find(0, 0);

    return res;    
};
```

#### Java
```java
class Solution {
    Integer res = 0;

    public int subsetXORSum(int[] nums) {
        find(0, 0, nums);
        return res;   
    }

    public void find (int ind, int cur, int[] nums) {
        res += cur;
        if(ind >= nums.length) return;
        
        for(int i = ind; i < nums.length; i++) 
            find(i+1, cur ^ nums[i], nums);
    }
}
```

