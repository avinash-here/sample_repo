## 2576. Find the Maximum Number of Marked Indices
#### Level: Medium


You are given a **0-indexed** integer array `nums`.

Initially, all of the indices are unmarked. You are allowed to make this operation any number of times:

- Pick two **different unmarked** indices `i` and `j` such that `2 * nums[i] <= nums[j]`, then mark `i` and `j`.

Return *the maximum possible number of marked indices in `nums` using the above operation any number of times.*

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [3,5,2,4]
Output: 2
Explanation: In the first operation: pick i = 2 and j = 1, the operation is allowed because 2 * nums[2] <= nums[1]. Then mark index 2 and 1.
It can be shown that there's no other valid operation so the answer is 2.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [9,2,5,4]
Output: 4
Explanation: In the first operation: pick i = 3 and j = 0, the operation is allowed because 2 * nums[3] <= nums[0]. Then mark index 3 and 0.
In the second operation: pick i = 1 and j = 2, the operation is allowed because 2 * nums[1] <= nums[2]. Then mark index 1 and 2.
Since there is no other operation, the answer is 4.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: nums = [7,6,8]
Output: 0
Explanation: There is no valid operation to do, so the answer is 0.
```

<br>


<br>

**Constraints:**

- `1 <= nums.length <= 10^5`

- `1 <= nums[i] <= 10^9`  


<br>

**Topics** 

##### Array, Two Pointers, Binary Search, Greedy, Sorting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
    nums.sort((a,b) => a-b);
    let l = 0,  r = -1;
    for(let i = Math.floor(nums.length/2); i < nums.length; i++) {
        if(nums[i] >= nums[l]*2) {
            r = i;  break;
        }
    }
    if(r == -1) return 0;
    
    let res = 0;
    while(r < nums.length) {
        if(nums[l] == -1) l++;
        else if(nums[l]*2 <= nums[r]) {
            res += 2;  nums[l] = -1;  nums[r] = -1;
            l++;  r++;
        }
        else r++;
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int maxNumOfMarkedIndices(int[] nums) {
        Arrays.sort(nums);
        int l = 0,  r = -1;
        for(int i = nums.length/2; i < nums.length; i++) {
            if(nums[i] >= nums[l] * 2) {
                r = i;  break;
            }
        }
        if(r == -1) return 0;

        int res = 0;
        while(r < nums.length) {
            if(nums[l] == -1) l++;
            else if(nums[l]*2 <= nums[r]) {
                res += 2;  nums[l] = -1;  nums[r] = -1;
                l++;  r++;
            }
            else r++;
        }
        return res;
    }
}
```

#### C++
```c++
class Solution {
public:
    int maxNumOfMarkedIndices(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int l = 0,  r = -1;
        for(int i = nums.size()/2; i < nums.size(); i++) {
            if(nums[i] >= nums[l]*2) {
                r = i;  break;
            }
        }
        if(r == -1) return 0;

        int res = 0;
        while(r < nums.size()) {
            if(nums[l] == -1) l++;
            else if(nums[l]*2 <= nums[r]) {
                res += 2;  nums[l] = -1;  nums[r] = -1;
                l++;  r++;
            }
            else r++;
        }
        return res;
    }
};
```