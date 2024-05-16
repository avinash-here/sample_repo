## 2331. Evaluate Boolean Binary Tree
#### Level: Easy


You are given the `root` of a **full binary tree** with the following properties:

- **Leaf nodes** have either the value `0` or `1`, where `0` represents `False` and `1` represents `True`.

- **Non-leaf nodes** have either the value `2` or `3`, where `2` represents the boolean `OR` and `3` represents the boolean `AND`.

The **evaluation** of a node is as follows:

- If the node is a leaf node, the evaluation is the **value** of the node, i.e. `True` or `False`.

- Otherwise, **evaluate** the node's two children and **apply** the boolean operation of its value with the children's evaluations.

Return *the boolean result of **evaluating** the* `root` *node.*

A **full binary tree** is a binary tree where each node has either `0` or `2` children.

A **leaf node** is a node that has zero children.

<br><br>
**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2022/05/16/example1drawio1.png" width="500px"/>

<br>  

```
Input: root = [2,1,3,null,null,0,1]
Output: true
Explanation: The above diagram illustrates the evaluation process.
The AND node evaluates to False AND True = False.
The OR node evaluates to True OR False = True.
The root node evaluates to True, so we return true.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2022/07/02/ex2new2.png" width="440px"/>

<br>   -->

```
Input: root = [0]
Output: false
Explanation: The root node is a leaf node and it evaluates to false, so we return false.
```

<br>

<br>

**Constraints:**
- The number of nodes in the tree is in the range `[1, 1000]`.

- `0 <= Node.val <= 3`

- Every node has either `0` or `2` children.

- Leaf nodes have a value of `0` or `1`.

- Non-leaf nodes have a value of `2` or `3`.


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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    solve(root);
    return root.val == 1;
};

function solve(root) {
    if(root.val == 0 || root.val == 1) return;
    
    solve(root.left);  solve(root.right);

    let oprtr = root.val,  l = root.left.val,  r = root.right.val;
    let res = oprtr == 2 ? l || r : l && r;

    root.val = res ? 1 : 0;
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
    public boolean evaluateTree(TreeNode root) {
        solve(root);
        return root.val == 1;
    }

    public void solve(TreeNode root) {
        if(root.val == 0 || root.val == 1) return;
        
        solve(root.left);  solve(root.right);

        int oprtr = root.val;  
        boolean l = root.left.val == 1,  r = root.right.val == 1;
        boolean res = oprtr == 2 ? (l || r) : (l && r);

        root.val = res ? 1 : 0;
    }
}
```

