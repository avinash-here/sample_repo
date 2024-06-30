## 108. Convert Sorted Array to Binary Search Tree
#### Level: Easy


Given an integer array `nums` where the elements are sorted in **ascending order**, convert *it to a
**height-balanced** binary search tree*.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg" width="300px"/>  <br>  

```
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:
```
<img src="https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg" width="300px" />

<br> <br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2021/02/18/btree.jpg" width="300px"/>  <br>  

```
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
```

<br>



<br>

**Constraints:**
- `1 <= nums.length <= 10^4`

- `-10^4 <= nums[i] <= 10^4`

- `nums` is sorted in a strictly **increasing order**.


<br>

**Topics** 

##### Array, Divide and Conquer, Tree, Binary Search Tree, Binary Tree


<br>

### Solutions

#### JavaScript
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return solve(0, nums.length-1, nums);
};

function solve(l, r, arr) {
    if(l > r) return null;
    let mid = l + Math.floor((r-l)/2);
    let node = new TreeNode(arr[mid]);
    node.left = solve(l, mid-1, arr);
    node.right = solve(mid+1, r, arr);
    return node;
}
```

#### Java
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        return solve(0, nums.length-1, nums);
    }

    TreeNode solve(int l, int r, int[] arr) {
        if(l > r) return null;
        int mid = l + (r-l)/2;
        TreeNode node = new TreeNode(arr[mid]);
        node.left = solve(l, mid-1, arr);
        node.right = solve(mid+1, r, arr);
        return node;
    }
}
```
