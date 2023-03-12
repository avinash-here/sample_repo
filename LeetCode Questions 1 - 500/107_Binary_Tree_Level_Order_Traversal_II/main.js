/*

Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. 
(i.e., from left to right, level by level from leaf to root).
 

Example 1:
=====================================
Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]

Example 2:
=================
Input: root = [1]
Output: [[1]]

Example 3:
================
Input: root = []
Output: []

*/

var levelOrderBottom = function(root) {
    let ans = [];
    if(root == null) return ans;
    let q = [];  q.push(root);

    while(q.length > 0){
        let n = q.length;
        let ar = [];
        for(let i = 0; i < n; i++){
            let node = q.shift();
            ar.push(node.val);
            if(node.left != null) q.push(node.left);
            if(node.right != null) q.push(node.right);
        }
        ans.push(ar);
    }
    return ans.reverse();    
};