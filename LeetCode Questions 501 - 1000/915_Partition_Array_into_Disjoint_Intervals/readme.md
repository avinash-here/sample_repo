## 915. Partition Array into Disjoint Intervals
#### Level: Medium


Given an integer array `nums`, partition it into two (contiguous) subarrays `left` and `right` so that:

- Every element in `left` is less than or equal to every element in `right`.

- `left` and `right` are non-empty.

- `left` has the smallest possible size.

Return *the length of* `left` *after such a partitioning.*

Test cases are generated such that partitioning exists.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [1,1,1,0,6,12]
Output: 4
Explanation: left = [1,1,1,0], right = [6,12]
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

- `0 <= nums[i] <= 10^6`

- There is at least one valid answer for the given input.  


<br>

**Topics** 

##### Array


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    let maxArr = [],  max = nums[0];
    for(let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        maxArr.push(max);
    }
    
    let minArr = [],  min = nums[nums.length-1];
    for(let i = nums.length-1; i >= 0; i--) {
        minArr.push(min);
        min = Math.min(min, nums[i]);
    }
    minArr.reverse();
    
    for(let i = 0; i < nums.length-1; i++) {
        if(maxArr[i] <= minArr[i]) return i+1;
    }
};
```

#### Java
```java
class Solution {
    public int partitionDisjoint(int[] nums) {
        int n = nums.length;
        int[] maxArr = new int[n];  int max = nums[0];
        for(int i = 0; i < n; i++) {
            max = Math.max(max, nums[i]);
            maxArr[i] = max;
        }
        
        int[] minArr = new int[n];  int min = nums[n-1];
        for(int i = n-1; i >= 0; i--) {
            minArr[i] = min;
            min = Math.min(min, nums[i]);
        }

        for(int i = 0; i < n-1; i++) {
            if(maxArr[i] <= minArr[i]) return i+1;
        }
        return -1;
    }
}
```

#### C++
```c++
class Solution {
public:
    int partitionDisjoint(vector<int>& nums) {
        int n = nums.size();
        int maxArr[n];  int maxVal = nums[0];
        for(int i = 0; i < n; i++) {
            maxVal = max(maxVal, nums[i]);
            maxArr[i] = maxVal;
        }
        
        int minArr[n];  int minVal = nums[n-1];
        for(int i = n-1; i >= 0; i--) {
            minArr[i] = minVal;
            minVal = min(minVal, nums[i]);
        }

        for(int i = 0; i < n-1; i++) {
            if(maxArr[i] <= minArr[i]) return i+1;
        }
        return -1;
    }
};
```