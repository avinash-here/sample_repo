## 987. Vertical Order Traversal of a Binary Tree
#### Level: Hard


Given the `root` of a binary tree, calculate the **vertical order traversal** of the binary tree.

For each node at position `(row, col)`, its left and right children will be at positions `(row + 1, col - 1)` and `(row + 1, col + 1)` respectively. The root of the tree is at `(0, 0)`.

The **vertical order traversal** of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Return *the **vertical order traversal** of the binary tree*.

<br><br>
**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2021/01/29/vtree1.jpg" width="400px"/>

<br>  

```
Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
Explanation:
Column -1: Only node 9 is in this column.
Column 0: Nodes 3 and 15 are in this column in that order from top to bottom.
Column 1: Only node 20 is in this column.
Column 2: Only node 7 is in this column.
```

<br> 

**Example 2:**

<img src="https://assets.leetcode.com/uploads/2021/01/29/vtree2.jpg" width="400px"/>

<br>  

```
Input: root = [1,2,3,4,5,6,7]
Output: [[4],[2],[1,5,6],[3],[7]]
Explanation:
Column -2: Only node 4 is in this column.
Column -1: Only node 2 is in this column.
Column 0: Nodes 1, 5, and 6 are in this column.
          1 is at the top, so it comes first.
          5 and 6 are at the same position (2, 0), so we order them by their value, 5 before 6.
Column 1: Only node 3 is in this column.
Column 2: Only node 7 is in this column.
```

<br>

**Example 3:**

<img src="https://assets.leetcode.com/uploads/2021/01/29/vtree3.jpg" width="400px"/>

<br>  

```
Input: root = [1,2,3,4,6,5,7]
Output: [[4],[2],[1,5,6],[3],[7]]
Explanation:
This case is the exact same as example 2, but with nodes 5 and 6 swapped.
Note that the solution remains the same since 5 and 6 are in the same location and should be ordered by their values.
```

<br>

<br>

**Constraints:**
- The number of nodes in the tree is in the range `[1, 1000]`.

- `0 <= Node.val <= 1000`



<br>

**Topics** 

##### Hash Table, Tree, Depth-First Search, Breadth-First Search, Sorting, Binary Tree


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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    let cur = root,  minC = 0,  maxC = 0,  maxR = 0;

    function find(root, col, row) {
        if(root == null) return;
        
        minC = Math.min(minC, col);  
        maxC = Math.max(maxC, col);
        maxR = Math.max(maxR, row);
        
        find(root.left, col-1, row+1);
        find(root.right, col+1, row+1);
    }
    find(root, 0, 0);
    
    let cols = Math.abs(minC-maxC)+1,  rows = maxR+1, center = Math.abs(minC);
    let res = [];
    for(let i = 0; i < rows; i++) {
        let ar = []
        for(let j = 0; j < cols; j++)  ar.push([]);
        res.push(ar);
    }

    function set(root, level, r) {
        if(root == null) return;
        res[r][center + level].push(root.val);
        set(root.left, level-1, r+1);
        set(root.right, level+1, r+1);
    }
    set(root, 0, 0);
    
    for(let i = 0; i < res.length; i++) {
        for(let j = 0; j < res[i].length; j++) res[i][j].sort((a,b) => a-b);
    } 

    let ans = [];
    for(let i = 0; i < res[0].length; i++) {
        let ar = [];
        for(let j = 0; j < res.length; j++) ar = [...ar, ...res[j][i]];
        ans.push(ar);
    }
    
    return ans;
};
```

#### Java
```java

```

