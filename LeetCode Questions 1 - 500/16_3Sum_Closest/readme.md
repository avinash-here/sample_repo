## 16. 3Sum Closest
#### Level: Medium


Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.

Return *the sum of the three integers.*

You may assume that each input would have exactly one solution.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
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

- `3 <= nums.length <= 500`

- `-1000 <= nums[i] <= 1000`

- `-10^4 <= target <= 10^4`  


<br>

**Topics** 

##### Array, Two Pointers, Sorting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let ans = nums[0] + nums[1] + nums[2];
    let res = Math.abs(target - ans);
    
    for(let i = 0; i < nums.length-2; i++) {
        let l = i+1,  r = nums.length-1;
        while(l < r) {
            let cur = nums[i] + nums[l] + nums[r];
            if(target < cur) {
                if(cur - target < res) {
                    res = cur - target;
                    ans = cur;   
                }  
                r--;
            }
            else {
                if(target - cur < res) {
                    res  = target - cur;
                    ans = cur;   
                }  
                l++;
            }
        }
    }
    return ans;
};
```

#### Java
```java
class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int ans = nums[0] + nums[1] + nums[2];
        int res = Math.abs(target - ans);
        
        for(int i = 0; i < nums.length-2; i++) {
            int l = i+1,  r = nums.length-1;
            while(l < r) {
                int cur = nums[i] + nums[l] + nums[r];
                if(target < cur) {
                    if(cur - target < res) {
                        res = cur - target;
                        ans = cur;   
                    }  
                    r--;
                }
                else {
                    if(target - cur < res) {
                        res  = target - cur;
                        ans = cur;   
                    }  
                    l++;
                }
            }
        }
        return ans;
    }
}
```
