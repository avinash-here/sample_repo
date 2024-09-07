## 1367. Linked List in Binary Tree
#### Level: Medium


Given a binary tree `root` and a linked list with `head` as the first node. 

Return True if all the elements in the linked list starting from the `head` correspond to some *downward path* connected in the binary tree otherwise return False.

In this context downward path means a path that starts at some node and goes downwards.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2020/02/12/sample_1_1720.png" width="280px"/>  <br>  

```
Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]

Output: true

Explanation: Nodes in blue form a subpath in the binary Tree.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2020/02/12/sample_2_1720.png" width="280px"/>  <br>  

```
Input: head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]

Output: true
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]

Output: false

Explanation: There is no path in the binary tree that contains all the elements of the linked list from head.
```

<br>


<br>

**Constraints:**

- The number of nodes in the tree will be in the range `[1, 2500]`.

- The number of nodes in the list will be in the range `[1, 100]`.

- `1 <= Node.val <= 100` for each node in the linked list and binary tree.  


<br>

**Topics** 

##### Linked List, Tree, Depth-First Search, Breadth-First Search, Binary Tree


<br>

### Solutions

#### JavaScript
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    let arr = [];
    find(root, head.val, arr);
    for(let i = 0; i < arr.length; i++) {
        if(check(arr[i], head)) return true;
    }
    return false;
};

function find(root, value, arr) {
    if(root == null) return;
    if(root.val == value) arr.push(root);
    
    find(root.left, value, arr);
    find(root.right, value, arr);
}

function check(root, cur) {
    if(cur == null) return true;
    else if(root == null) return false;
    if(root.val != cur.val) return false;
    return check(root.left, cur.next) || check(root.right, cur.next);
}
```

#### Java
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
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
    public boolean isSubPath(ListNode head, TreeNode root) {
        List<TreeNode> list = new ArrayList<>();
        collect(root, head.val, list);
        for(int i = 0; i < list.size(); i++) {
            if(check(list.get(i), head)) return true;
        }
        return false;
    }

    void collect(TreeNode root, int value, List<TreeNode> list) {
        if(root == null) return;
        if(root.val == value) list.add(root);

        collect(root.left, value, list);
        collect(root.right, value, list);
    }

    boolean check(TreeNode root, ListNode cur) {
        if(cur == null) return true;
        else if(root == null) return false;
        else if(root.val != cur.val) return false;
        return check(root.left, cur.next) || check(root.right, cur.next);
    }
}
```
