## 75. Sort Colors
#### Level: Medium


Given an array `nums` with `n` objects colored red, white, or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

<br>


<br>

**Constraints:**
- `n == nums.length`

- `1 <= n <= 300`

- `nums[i]` is either `0`, `1`, or `2`.
  


<br>

**Topics** 

##### Array, Two Pointers, Sorting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let z = 0,  o = 0,  t = 0;
    for(let i of nums) {
        if(i == 0) z++;
        else if (i == 1) o++;
        else t++;
    }
    for(let i = 0; i < nums.length; i++) {
        if(z > 0) { nums[i] = 0;  z--; }
        else if(o > 0) { nums[i] = 1;  o--; }
        else nums[i] = 2;
    }
};
```

#### Java
```java
class Solution {
    public void sortColors(int[] nums) {
        int z = 0,  o = 0,  t = 0;
        for(int i : nums) {
            if(i == 0) z++;
            else if (i == 1) o++;
            else t++;
        }
        for(int i = 0; i < nums.length; i++) {
            if(z > 0) { nums[i] = 0;  z--; }
            else if(o > 0) { nums[i] = 1;  o--; }
            else nums[i] = 2;
        }
    }
}
```

#### C++
```c++
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int z = 0,  o = 0,  t = 0;
        for(int i = 0; i < nums.size(); i++) {
            if(nums[i] == 0) z++;
            else if (nums[i] == 1) o++;
            else t++;
        }
        for(int i = 0; i < nums.size(); i++) {
            if(z > 0) { nums[i] = 0;  z--; }
            else if(o > 0) { nums[i] = 1;  o--; }
            else nums[i] = 2;
        }
    }
};
```