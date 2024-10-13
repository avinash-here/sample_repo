## 222. Count Complete Tree Nodes
#### Level: Easy


Given the `root` of a **complete** binary tree, return the number of the nodes in the tree.

According to **Wikipedia**, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between `1` and `2^h` nodes inclusive at the last level h.

Design an algorithm that runs in less than `O(n)` time complexity.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2021/01/14/complete.jpg" width="320px"/>  <br>  

```
Input: root = [1,2,3,4,5,6]
Output: 6
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: root = []
Output: 0
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: root = [1]
Output: 1
```

<br>


<br>

**Constraints:**
- The number of nodes in the tree is in the range `[0, 5 * 10^4]`.

- `0 <= Node.val <= 5 * 10^4`

- The tree is guaranteed to be **complete**.  


<br>

**Topics** 

##### Binary Search, Bit Manipulation, Tree, Binary Tree


<br>

### Solutions

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
    public int countNodes(TreeNode root) {
        if(root == null) return 0;
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
}
```

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
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(root == null) return 0;
    return 1 + countNodes(root.left) + countNodes(root.right);
};
```
