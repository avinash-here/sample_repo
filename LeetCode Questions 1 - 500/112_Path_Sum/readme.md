## 112. Path Sum
#### Level: Easy


Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.

A **leaf** is a node with no children.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg" width="400px"/>  <br>  

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg" width="150px"/>  <br>  

```
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
```

<br>


<br>

**Constraints:**

- The number of nodes in the tree is in the range `[0, 5000]`.

- `-1000 <= Node.val <= 1000`

- `-1000 <= targetSum <= 1000`
 


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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    return findsum(root, 0, targetSum);
};

function findsum(root, sum, targetSum){
    if(root === null) return false;
    
    if(root.left === null && root.right === null) {
        sum += root.val;
        if(sum === targetSum) return true;
        else if (sum > targetSum) return false;
    }
    
    sum += root.val;    
    return findsum(root.left, sum, targetSum) || findsum(root.right, sum, targetSum);    
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
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if(root == null) return false;
        Set<Integer> nums = new HashSet<>();
        find(root, 0, nums);
        return nums.contains(targetSum);
    }

    void find(TreeNode root, int sum, Set<Integer> set) {
        if(root == null) return;
        if(root.left == null && root.right == null) { 
            set.add(sum+root.val);  return; 
        }
        find(root.left, sum+root.val, set);
        find(root.right,sum+root.val, set);
    }
}
```
