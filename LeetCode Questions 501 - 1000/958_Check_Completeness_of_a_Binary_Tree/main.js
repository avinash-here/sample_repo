/*

Given the root of a binary tree, determine if it is a complete binary tree.

In a complete binary tree, every level, except possibly the last, is completely filled, and all 
nodes in the last level are as far left as possible. It can have between 1 and 2h nodes 
inclusive at the last level h.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2018/12/15/complete-binary-tree-1.png
-------------------------------------------------------------------------------------------------
Input: root = [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and 
all nodes in the last level ({4, 5, 6}) are as far left as possible.

Example 2:  Image Link: https://assets.leetcode.com/uploads/2018/12/15/complete-binary-tree-2.png
-------------------------------------------------------------------------------------------------
Input: root = [1,2,3,4,5,null,7]
Output: false
Explanation: The node with value 7 isn't as far left as possible.

*/

var isCompleteTree = function(root) {
    if(root == null) return true;
    let nullNodeFound = false;

    let arr = [];   arr.push(root);
    while(arr.length > 0) {
        let node = arr.shift();
        if(node == null)  nullNodeFound = true;
        else {
            if(nullNodeFound) return false;
            else {
                arr.push(node.left);
                arr.push(node.right);
            }
        }
    }
    return true;
};