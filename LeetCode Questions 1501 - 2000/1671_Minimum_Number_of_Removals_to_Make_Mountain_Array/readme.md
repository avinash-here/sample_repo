## 1671. Minimum Number of Removals to Make Mountain Array
#### Level: Hard


You may recall that an array `arr` is a **mountain array** if and only if:

- `arr.length >= 3`

- There exists some index `i` (**0-indexed**) with `0 < i < arr.length - 1` such that:

    - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`

    - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`

Given an integer array `nums​​​`, return *the **minimum** number of elements to remove to make* `nums`​​​ *a **mountain array**.*

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [1,3,1]
Output: 0
Explanation: The array itself is a mountain array so we do not need to remove any elements.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [2,1,1,5,6,2,3,1]
Output: 3
Explanation: One solution is to remove the elements at indices 0, 1, and 5, making the array nums = [1,5,6,3,1].
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

- `3 <= nums.length <= 1000`

- `1 <= nums[i] <= 10^9`

- It is guaranteed that you can make a mountain array out of `nums`.  


<br>

**Topics** 

##### Array, Binary Search, Dynamic Programming, Greedy


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    let inc = new Array(nums.length).fill(1);
    let dec = new Array(nums.length).fill(1);
    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                inc[i] = Math.max(inc[i], inc[j]+1); 
            }
        }
    }
    for(let i = nums.length-2; i >= 0; i--) {
        for(let j = nums.length-1; j > i; j--) {
            if(nums[i] > nums[j]) {
                dec[i] = Math.max(dec[i], dec[j]+1); 
            }
        }
    }

    let res = Infinity;
    for(let i = 1; i < inc.length-1; i++) {
        if(inc[i] == 1 || dec[i] == 1) continue;
        let temp = inc.length - (inc[i] + dec[i] - 1);
        if(temp < res) res = temp;
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int minimumMountainRemovals(int[] nums) {
        int[] inc = new int[nums.length], dec = new int[nums.length];
        Arrays.fill(inc, 1);   Arrays.fill(dec, 1);
        for(int i = 1; i < nums.length; i++) {
            for(int j = 0; j < i; j++) {
                if(nums[i] > nums[j]) {
                    inc[i] = Math.max(inc[i], inc[j]+1);
                }
            }
        }
        for(int i = nums.length-2; i >= 0; i--) {
            for(int j = nums.length-1; j > i; j--) {
                if(nums[i] > nums[j]) {
                    dec[i] = Math.max(dec[i], dec[j]+1);
                }
            }
        }

        int res = Integer.MAX_VALUE;
        for(int i = 0; i < nums.length; i++) {
            if(inc[i] == 1 || dec[i] == 1) continue;
            int temp = nums.length - (inc[i] + dec[i] - 1);
            if(temp < res) res = temp;
        }
        return res;
    }
}
```

#### C++
```c++
class Solution {
public:
    int minimumMountainRemovals(vector<int>& nums) {
        vector<int> inc(nums.size(), 1),  dec(nums.size(), 1);
        for(int i = 1; i < inc.size(); i++) {
            for(int j = 0; j < i; j++) {
                if(nums[i] > nums[j]) {
                    inc[i] = max(inc[i], inc[j]+1);
                }
            }
        }
        for(int i = nums.size()-2; i >= 0; i--) {
            for(int j = nums.size()-1; j > i; j--) {
                if(nums[i] > nums[j]) {
                    dec[i] = max(dec[i], dec[j]+1);
                }
            }
        }

        int res = nums.size();
        for(int i = 0; i < inc.size(); i++) {
            if(inc[i] == 1 || dec[i] == 1) continue;
            int temp = nums.size() - (inc[i] + dec[i] - 1);
            if(temp < res) res = temp;
        }
        return res;
    }
};
```