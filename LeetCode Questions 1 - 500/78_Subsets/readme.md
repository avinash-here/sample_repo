## 78. Subsets
#### Level: Medium


Given an integer array `nums` of **unique** elements, return *all possible subsets (the power set)*.

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>

<br>   -->

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>

<br>   -->

```
Input: nums = [0]
Output: [[],[0]]
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
- `1 <= nums.length <= 10`

- `-10 <= nums[i] <= 10`

- All the numbers of `nums` are **unique**.



<br>

**Topics** 

##### Array, Backtracking, Bit Manipulation


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    solve(0, nums, [], res);
    return res;
};

function solve(ind, arr, ans, res) {
    res.push([...ans]);
    if(ind >= arr.length)  return;

    for(let i = ind; i < arr.length; i++) {
        ans.push(arr[i]);
        solve(i+1, arr, ans, res);
        ans.pop();
    }
}
```

#### Java
```java
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        solve(0, nums, res, new ArrayList<>());
        return res;
    }

    public void solve(int ind, int[] arr, List<List<Integer>> res, List<Integer> cur) {
        res.add(cur);

        for(int i = ind; i < arr.length; i++) {            
            cur.add(arr[i]);
            solve(i+1, arr, res, new ArrayList(cur));
            cur.remove(cur.size()-1);
        }        
    }
}
```

