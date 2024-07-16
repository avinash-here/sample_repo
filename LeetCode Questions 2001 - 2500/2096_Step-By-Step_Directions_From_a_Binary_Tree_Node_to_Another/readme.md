## 2096. Step-By-Step Directions From a Binary Tree Node to Another
#### Level: Medium


You are given the `root` of a **binary tree** with `n` nodes. Each node is uniquely assigned a value from `1` to `n`. You are also given an integer `startValue` representing the value of the start node `s`, and a different integer `destValue` representing the value of the destination node `t`.

Find the **shortest path** starting from node `s` and ending at node `t`. Generate step-by-step directions of such path as a string consisting of only the **uppercase** letters `'L'`, `'R'`, and `'U'`. Each letter indicates a specific direction:

- 'L' means to go from a node to its **left child** node.

- 'R' means to go from a node to its **right child** node.

- 'U' means to go from a node to its **parent** node.

Return *the step-by-step directions of the **shortest path** from node* `s` *to node* `t`.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2021/11/15/eg1.png" width="230px"/>  <br>  

```
Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
Output: "UURL"
Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2021/11/15/eg2.png" width="80px"/>  <br>  

```
Input: root = [2,1], startValue = 2, destValue = 1
Output: "L"
Explanation: The shortest path is: 2 → 1.
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
- The number of nodes in the tree is `n`.

- `2 <= n <= 10^5`

- `1 <= Node.val <= n`

- All the values in the tree are **unique**.

- `1 <= startValue, destValue <= n`

- `startValue != destValue` 


<br>

**Topics** 

##### String, Tree, Depth-First Search, Binary Tree


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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    let start = [],  end = [];
    find(root, startValue, start, "");
    find(root, destValue, end, "");
    start = start[0].split(" ");  end = end[0].split(" ");

    let target = root.val,  ind = 0;
    for(let i = 1; i < start.length && i < end.length; i++) {
        let temp = start[i].split("-"), temp2 = end[i].split("-");
        if(temp[1] == temp2[1]) {
            target = temp[1];   ind = i;
        }
    }

    let res = "";
    for(let i = ind+1; i < start.length; i++)  res += "U";
    for(let i = ind+1; i < end.length; i++)  res += end[i][0];
    return res;
};

function find(root, val, arr, res) {
    if(root == null) return;
    if(root.val == val) {
        arr.push(res+root.val);
        return;
    }
    find(root.left, val, arr, res+root.val+" L-");
    find(root.right, val, arr, res+root.val+" R-");
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
    public String getDirections(TreeNode root, int startValue, int destValue) {
        Stack<String> paths = new Stack<>();
        String[] start = {""},  end = {""};
        
        find(root, startValue, paths, start);
        find(root, destValue, paths, end);
        start = start[0].split(" ");  end = end[0].split(" ");
        
        String target = start[0];  int ind = 0;
        for(int i = 1; i < start.length && i < end.length; i++) {
            String[] temp = start[i].split("-"),  temp2 = end[i].split("-");
            if(temp[1].equals(temp2[1])) {
                target = temp[1];   ind = i;
            }
        }

        String res = "";
        for(int i = ind+1; i < start.length; i++)  res += "U";
        for(int i = ind+1; i < end.length; i++)  res += end[i].charAt(0);
        return res;
    }

    void find(TreeNode root, int val, Stack<String> paths, String[] res) {
        if(root == null) return;
        if(root.val == val) {
            StringBuilder sb = new StringBuilder();
            for(int i = 0; i < paths.size(); i++) sb.append(paths.get(i));
            sb.append(root.val);   res[0] = sb.toString();
            return;
        }
        paths.add(root.val+"");
        paths.add(" L-");  find(root.left, val, paths, res);  paths.pop();
        paths.add(" R-"); find(root.right, val, paths, res);  paths.pop();
        paths.pop();
    }
}
```
