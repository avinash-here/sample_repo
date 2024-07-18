## 1530. Number of Good Leaf Nodes Pairs
#### Level: Medium


You are given the `root` of a binary tree and an integer `distance`. A pair of two different **leaf** nodes of a binary tree is said to be good if the length of **the shortest path** between them is less than or equal to `distance`.

Return *the number of good leaf node pairs* in the tree.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2020/07/09/e1.jpg" width="200px"/>  <br>  

```
Input: root = [1,2,3,null,4], distance = 3
Output: 1
Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2020/07/09/e2.jpg" width="280px"/>  <br>  

```
Input: root = [1,2,3,4,5,6,7], distance = 3
Output: 2
Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
Output: 1
Explanation: The only good pair is [2,5].
```

<br>


<br>

**Constraints:**
- The number of nodes in the `tree` is in the range `[1, 2^10]`.

- `1 <= Node.val <= 100`

- `1 <= distance <= 10`



<br>

**Topics** 

##### Tree, Depth-First Search, Binary Tree


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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let arr = [];
    getDistance(root, distance, arr);
    return arr.length;
};

var getDistance = function(root, dis, arr) {
    if(root == null) return [];
    if(root.left == null && root.right == null) return [0];

    let l = getDistance(root.left, dis, arr);
    let r = getDistance(root.right, dis, arr);
    if(l == -1 || r == -1) return l == -1 ? [r+1] : [l+1]; 
    else {
        for(let a of l) {
            for(let b of r)  if(a+b+2 <= dis) arr.push(1);
        }
        let ar = [];
        for(let a of l) ar.push(a+1);
        for(let b of r) ar.push(b+1);
        return ar;
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
    public int countPairs(TreeNode root, int distance) {
        List<Integer> arr = new ArrayList<>();
        getDistance(root, distance, arr);
        return arr.size();
    }

    List<Integer> getDistance(TreeNode root, int dis, List<Integer> arr) {
        List<Integer> res;
        if(root == null) {
            res = new ArrayList<>();  return res;
        }
        if(root.left == null && root.right == null) {
            res = new ArrayList<>();  res.add(0);  return res;
        }

        List<Integer> l = getDistance(root.left, dis, arr);
        List<Integer> r = getDistance(root.right, dis, arr);
        if(l.size() == 0) {
            res = new ArrayList<>();
            for(int a : r) res.add(a+1);  return res;
        }
        else if(r.size() == 0) {
            res = new ArrayList<>();
            for(int b : l) res.add(b+1);  return res;
        } 
        else {
            for(int a : l) {
                for(int b : r)  if(a+b+2 <= dis) arr.add(1);
            }
            res = new ArrayList<>();
            for(int a : l) res.add(a+1);
            for(int b : r) res.add(b+1); 
            return res;
        }        
    }
}
```
