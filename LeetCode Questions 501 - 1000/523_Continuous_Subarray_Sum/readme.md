## 523. Continuous Subarray Sum
#### Level: Medium


Given an integer array `nums` and an integer `k`, return `true` *if* `nums` *has a **good subarray** or* `false` *otherwise*.

A **good subarray** is a subarray where:
- its length is **at least two**, and

- the sum of the elements of the subarray is a multiple of `k`.

**Note** that:
- A **subarray** is a contiguous part of the array.

- An integer `x` is a multiple of `k` if there exists an integer `n` such that `x = n * k`. `0` is **always** a multiple of `k`.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>

<br>   -->

```
Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>

<br>   -->

```
Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
```

<br>

**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: nums = [23,2,6,4,7], k = 13
Output: false
```

<br>

<br>

**Constraints:**
- `1 <= nums.length <= 10^5`

- `0 <= nums[i] <= 10^9`

- `0 <= sum(nums[i]) <= 2^31 - 1`

- `1 <= k <= 2^31 - 1`



<br>

**Topics** 

##### Array, Hash Table, Math, Prefix Sum


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let arr = [0],  mods = [0],  sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        arr.push(sum);
        mods.push(sum % k);
    }
    
    let obj = {};
    for(let i = 0; i < mods.length; i++) {
        if(obj[mods[i]] == undefined) obj[mods[i]] = i;
        else if(i - obj[mods[i]] >= 2) return true;
    }
    return false;
};
```

#### Java
```java
class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        int[] arr = new int[nums.length+1],  mods = new int[nums.length+1];
        int sum = 0;
        for(int i = 0; i < nums.length; i++) {
            sum += nums[i];
            arr[i+1] = sum;
            mods[i+1] = sum % k;
        }
        
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < mods.length; i++) {
            if(!map.containsKey(mods[i])) map.put(mods[i], i);
            else if(i - map.get(mods[i]) >= 2) return true;
        }
        return false;
    }
}
```

