## 113. Path Sum II
#### Level: Medium


Given the `root` of a binary tree and an integer `targetSum`, return *all **root-to-leaf** paths where the sum of the node values in the path equals* `targetSum`. *Each path should be returned as a list of the node **values**, not node references*.

A **root-to-leaf** path is a path starting from the root and ending at any leaf node. A **leaf** is a node with no children.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg" width="400px"/>  <br>  

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg" width="150px"/>  <br>  

```
Input: root = [1,2,3], targetSum = 5
Output: []
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: root = [1,2], targetSum = 0
Output: []
```

<br>


<br>

**Constraints:**

- The number of nodes in the tree is in the range `[0, 5000]`.

- `-1000 <= Node.val <= 1000`

- `-1000 <= targetSum <= 1000`
 


<br>

**Topics** 

##### Backtracking, Tree, Depth-First Search, Binary Tree


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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];
    solve(root, res, [], 0, targetSum);
    return res;
};

function solve(root, res, list, sum, target) {
    if(root == null) return;
    if(root.left == null && root.right == null) {
        if(sum + root.val == target) {
            list.push(root.val);
            res.push([...list]);
            list.pop();
            return;
        }
    }
    list.push(root.val);
    solve(root.left, res, list, sum+root.val, target);
    solve(root.right, res, list, sum+root.val, target);
    list.pop();
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
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<List<Integer>> res = new ArrayList<>();
        solve(root, res, new ArrayList<Integer>(), 0, targetSum);
        return res;
    }

    void solve(TreeNode root, List<List<Integer>> res, List<Integer> list, int sum, int target) {
        if(root == null) return;
        if(root.left == null && root.right == null) {
            if(sum + root.val == target) {
                list.add(root.val);
                res.add(new ArrayList<>(list));
                list.remove(list.size()-1);
                return;
            }
        }
        list.add(root.val);
        solve(root.left, res, list, sum+root.val, target);
        solve(root.right, res, list, sum+root.val, target);
        list.remove(list.size()-1);
    }
}
```
