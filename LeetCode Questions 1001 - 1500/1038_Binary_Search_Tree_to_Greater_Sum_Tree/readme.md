## 1038. Binary Search Tree to Greater Sum Tree
#### Level: Medium


Given the `root` of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a *binary search tree* is a tree that satisfies these constraints:

- The left subtree of a node contains only nodes with keys **less than** the node's key.

- The right subtree of a node contains only nodes with keys **greater than** the node's key.

- Both the left and right subtrees must also be binary search trees.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2019/05/02/tree.png" width="400px"/>  <br>  

```
Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: root = [0,null,1]
Output: [1,null,1]
```

<br>


<br>

**Constraints:**
- The number of nodes in the tree is in the range `[1, 100]`.

- `0 <= Node.val <= 100`

- All the values in the tree are **unique**.


<br>

**Topics** 

##### Tree, Depth-First Search, Binary Search Tree, Binary Tree


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
var bstToGst = function(root) {
    let arr = [];
    collect(arr, root);
    
    let sum = arr[arr.length-1];
    for(let i = arr.length-2; i >= 0; i--) {
        sum += arr[i];   arr[i] = sum;
    }
    
    set([0], arr, root);
    
    return root;
};

function collect(arr, root) {
    if(root == null) return;
    collect(arr, root.left);
    arr.push(root.val);
    collect(arr, root.right);
}

function set(ind, arr, root) {
    if(root == null) return;
    set(ind, arr, root.left);
    root.val = arr[ind[0]];   ind[0]++;
    set(ind, arr, root.right);
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
    public TreeNode bstToGst(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        collect(list, root);
        
        int sum = list.get(list.size()-1);
        for(int i = list.size()-2; i >= 0; i--) {
            sum += list.get(i);    list.set(i, sum);
        }

        int[] ind = {0};
        set(ind, list, root);
        
        return root;
    }

    void collect(List<Integer> list, TreeNode root) {
        if(root == null) return;
        collect(list, root.left);
        list.add(root.val);
        collect(list, root.right); 
    }

    void set(int[] ind, List<Integer> list, TreeNode root) {
        if(root == null) return;
        set(ind, list, root.left);
        root.val = list.get(ind[0]);   ind[0]++;
        set(ind, list, root.right);
    }
}
```

