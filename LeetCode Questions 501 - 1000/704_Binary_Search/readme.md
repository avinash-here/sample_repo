## 704. Binary Search
#### Level: Easy


Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
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

- `1 <= nums.length <= 10^4`

- `-10^4 < nums[i], target < 10^4`

- All the integers in `nums` are **unique**.

- `nums` is sorted in ascending order.  


<br>

**Topics** 

##### Array, Binary Search


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0,  r = nums.length-1;
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target) l = mid+1;
        else r = mid-1;
    }
    return -1;
};
```

#### Java
```java
class Solution {
    public int search(int[] nums, int target) {
        int l = 0,  r = nums.length-1;
        while(l <= r) {
            int mid = l + (int)Math.floor((r-l)/2);
            if(nums[mid] == target) return mid;
            else if(nums[mid] < target) l = mid+1;
            else r = mid-1;
        }
        return -1;
    }
}
```

#### C++
```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int l = 0,  r = nums.size()-1;
        while(l <= r) {
            int mid = l + (r-l)/2;
            if(nums[mid] == target) return mid;
            else if(nums[mid] > target) r = mid-1;
            else l = mid+1;
        }
        return -1;
    }
};
```