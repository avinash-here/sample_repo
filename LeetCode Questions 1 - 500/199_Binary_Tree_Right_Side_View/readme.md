## 199. Binary Tree Right Side View
#### Level: Medium


Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return *the values of the nodes you can see ordered from top to bottom.*

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2021/02/14/tree.jpg" width="320px"/>  <br>  

```
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: root = [1,null,3]
Output: [1,3]
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(root == null) return [];

    let q = [],  res = [];  q.push(root);
    while(q.length > 0) {
        let n = q.length;
        for(let i = 0; i < n; i++) {
            let cur = q.shift();
            if(i == n-1) res.push(cur.val);

            if(cur.left != null) q.push(cur.left);
            if(cur.right !=null) q.push(cur.right);
        }
    }
    return res;
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
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        Deque<TreeNode> q = new ArrayDeque<>();
        if(root != null) q.add(root);

        while(!q.isEmpty()) {
            int n = q.size();
            for(int i = 0; i < n; i++) {
                TreeNode cur = q.poll();
                if(i == n-1) res.add(cur.val);

                if(cur.left != null) q.add(cur.left);
                if(cur.right !=null) q.add(cur.right);
            }
        }
        return res;
    }
}
```

#### Other Langs
```other

```