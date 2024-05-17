## 1325. Delete Leaves With a Given Value
#### Level: Medium


Given a binary tree `root` and an integer `target`, delete all the **leaf nodes** with value `target`.

Note that once you delete a leaf node with value `target`, if its parent node becomes a leaf node and has the value `target`, it should also be deleted (you need to continue doing that until you cannot).

<br><br>
**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>

<br>  

```
Input: root = [1,2,3,2,null,2,4], target = 2
Output: [1,null,3,null,4]
Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left). 
After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).
```

<br> 

**Example 2:**

<img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>

<br>  

```
Input: root = [1,3,3,3,2], target = 3
Output: [1,3,null,null,2]
```

<br>

**Example 3:**

<img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>

<br>  

```
Input: root = [1,2,null,2,null,2], target = 2
Output: [1]
Explanation: Leaf nodes in green with value (target = 2) are removed at each step.
```

<br>

<br>

**Constraints:**
- The number of nodes in the tree is in the range `[1, 3000]`.

- `1 <= Node.val, target <= 1000`



<br>

**Topics** 

##### Tree, Depth-First Search, Binary Tree


<br>

### Solution
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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    if(root == null) return;
    removeLeafNodes(root.left, target);
    removeLeafNodes(root.right, target);
    if(check(root.left, target)) root.left = null;
    if(check(root.right, target)) root.right = null;
    if(check(root, target)) root = null;
    return root;
};

function check (rt, tar) {
    if(rt == null) return false;
    if(rt.left == null && rt.right == null && rt.val == tar) return true;
    else return false;
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
    public TreeNode removeLeafNodes(TreeNode root, int target) {
        if(root == null) return root;
        removeLeafNodes(root.left, target);
        removeLeafNodes(root.right, target);
        if(check(root.left, target)) root.left = null;
        if(check(root.right, target)) root.right = null;
        if(check(root, target)) root = null;
        return root;
    }

    public boolean check (TreeNode tn, int target) {
        if(tn == null) return false;
        if(tn.left == null && tn.right == null && tn.val == target) return true;
        return false;
    }
}
```

