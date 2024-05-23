## 2597. The Number of Beautiful Subsets
#### Level: Medium


You are given an array `nums` of positive integers and a **positive** integer `k`.

A subset of `nums` is **beautiful** if it does not contain two integers with an absolute difference equal to `k`.

Return *the number of **non-empty beautiful** subsets of the array* `nums`.

A **subset** of `nums` is an array that can be obtained by deleting some (possibly none) elements from `nums`. Two subsets are different if and only if the chosen indices to delete are different.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>

<br>   -->

```
Input: nums = [2,4,6], k = 2
Output: 4
Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
It can be proved that there are only 4 beautiful subsets in the array [2,4,6].
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>

<br>   -->

```
Input: nums = [1], k = 1
Output: 1
Explanation: The beautiful subset of the array nums is [1].
It can be proved that there is only 1 beautiful subset in the array [1].
```

<br>

<!-- **Example 3:**

<img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>

<br>  

```
Input: root = [1,2,null,2,null,2], target = 2
Output: [1]
Explanation: Leaf nodes in green with value (target = 2) are removed at each step.
```

<br> -->

<br>

**Constraints:**
- `1 <= nums.length <= 20`.

- `1 <= nums[i], k <= 1000`



<br>

**Topics** 

##### Array, Dynamic Programming, Backtracking, Sorting


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    let count = [];
    nums.sort((a,b) => a-b);
    subsets(0, nums, [], k, count);   
    return count.length; 
};

function subsets(ind, arr, ans, k, count) {
    if(ans.length > 0)  count.push(1);

    for(let i = ind; i < arr.length; i++) {
        if(check(ans, arr[i], k)) {
            ans.push(arr[i]);
            subsets(i+1, arr, ans, k, count);
            ans.pop();
        }
    }
}

function check(arr, target, k) {
    let l = 0,  r = arr.length-1;
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        let temp = target - arr[mid];
        
        if(temp == k)  return false;
        else if(temp > k)  l = mid+1;
        else  r = mid-1;
    }
    return true;
}
```

#### Java
```java
class Solution {
    public int beautifulSubsets(int[] nums, int k) {
        List<Integer> count = new ArrayList<>();
        Arrays.sort(nums);
        subsets(0, nums, new ArrayList<>(), k, count);
        return count.size();         
    }

    public void subsets(int ind, int[] arr, List<Integer> ans, int k, List<Integer> count) {
        if(ans.size() > 0)  count.add(1);

        for(int i = ind; i < arr.length; i++) {
            if(check(ans, arr[i], k)) {
                ans.add(arr[i]);
                subsets(i+1, arr, ans, k, count);
                ans.remove(ans.size()-1);
            }
        }
    }

    public boolean check(List<Integer> arr, int target, int k) {
        int l = 0,  r = arr.size()-1;
        while(l <= r) {
            int mid = l + (int)Math.floor((r-l)/2);
            int temp = target - arr.get(mid);
            
            if(temp == k)  return false;
            else if(temp > k)  l = mid+1;
            else  r = mid-1;
        }
        return true;
    }
}
```

