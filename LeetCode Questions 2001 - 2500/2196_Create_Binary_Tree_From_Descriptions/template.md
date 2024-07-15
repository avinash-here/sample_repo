## 2196. Create Binary Tree From Descriptions
#### Level: Medium


You are given a 2D integer array `descriptions` where `descriptions[i] = [parenti, childi, isLefti]` indicates that `parenti` is the **parent** of `childi` in a **binary** tree of **unique** values. Furthermore,

- If `isLefti == 1`, then `childi` is the left child of `parenti`.

- If `isLefti == 0`, then `childi` is the right child of `parenti`.

Construct the binary tree described by `descriptions` and return *its **root***.

The test cases will be generated such that the binary tree is **valid**.



<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2022/02/09/example1drawio.png" width="280px"/>  <br>  

```
Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
Output: [50,20,80,15,17,19]
Explanation: The root node is the node with value 50 since it has no parent.
The resulting binary tree is shown in the diagram.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2022/02/09/example2drawio.png" width="110px"/>  <br>  

```
Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]
Output: [1,2,null,null,3,4]
Explanation: The root node is the node with value 1 since it has no parent.
The resulting binary tree is shown in the diagram.
```

<br>


<!-- **Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   

```
Input, Output, Explanation
```

<br>  -->


<br>

**Constraints:**
- `1 <= descriptions.length <= 10^4`

- `descriptions[i].length == 3`

- `1 <= parenti, childi <= 10^5`

- `0 <= isLefti <= 1`

- The binary tree described by `descriptions` is valid.



<br>

**Topics** 

##### Array, Hash Table, Tree, Binary Tree


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
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let desc = descriptions,  nodes = {},  par = {},  chi = {};
    
    for(let i = 0; i < desc.length; i++) {
        if(!nodes[desc[i][0]]) {
            nodes[desc[i][0]] = new TreeNode(desc[i][0]);
        }
        if(!nodes[desc[i][1]]) {
            nodes[desc[i][1]] = new TreeNode(desc[i][1]);
        }

        if(desc[i][2] == 1) {
            nodes[desc[i][0]].left = nodes[desc[i][1]];
        }
        else nodes[desc[i][0]].right = nodes[desc[i][1]];

        par[desc[i][0]] = par[desc[i][0]] + 1 || 1;
        chi[desc[i][1]] = chi[desc[i][1]] + 1 || 1;
    }
    
    for(let key in par) {
        if(chi[key] == undefined) return nodes[key];
    }
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
    public TreeNode createBinaryTree(int[][] descriptions) {
        int[][] desc = descriptions;  
        Map<Integer, TreeNode> nodes = new HashMap<>();
        Map<Integer, Integer> par = new HashMap<>(), chi = new HashMap<>();
  
        for(int i = 0; i < desc.length; i++) {
            int a = desc[i][0],  b = desc[i][1],  c = desc[i][2];
            if(!nodes.containsKey(a)) {
                nodes.put(a, new TreeNode(a));
            }
            if(!nodes.containsKey(b)) {
                nodes.put(b, new TreeNode(b));
            }

            if(c == 1) {
                nodes.get(a).left = nodes.get(b);
            }
            else nodes.get(a).right = nodes.get(b);

            par.put(a, par.getOrDefault(a, 0) + 1);
            chi.put(b, chi.getOrDefault(b, 0) + 1);
        }

        for(int i : par.keySet()) {
            if(!chi.containsKey(i)) return nodes.get(i);
        }
        return null;
    }
}
```
