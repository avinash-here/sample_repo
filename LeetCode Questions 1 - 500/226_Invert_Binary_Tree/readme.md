## 226. Invert Binary Tree
#### Level: Easy


Given the `root` of a binary tree, invert the tree, and return *its root*.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg" width="480px"/>  <br>  

```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg" width="420px"/>  <br>  

```
Input: root = [2,1,3]
Output: [2,3,1]
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: root = []
Output: []
```

<br>


<br>

**Constraints:**

- The number of nodes in the tree is in the range `[0, 100]`.

- `-100 <= Node.val <= 100`  


<br>

**Topics** 

##### Tree, Depth-First Search, Breadth-First Search, Binary Tree


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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root == null) return root;
    let lft = root.left;
    root.left = root.right;
    root.right = lft;
    invertTree(root.left);  invertTree(root.right);
    return root;
};
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
    public TreeNode invertTree(TreeNode root) {
        if(root == null) return root;
        TreeNode lft = root.left;
        root.left = root.right;
        root.right = lft;
        invertTree(root.left);  invertTree(root.right);
        return root;
    }
}
```

#### C++
```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if(root == nullptr) return root;
        TreeNode* lft = root->left;
        root->left = root->right;
        root->right = lft;
        invertTree(root->left);   invertTree(root->right);
        return root;
    }
};
```