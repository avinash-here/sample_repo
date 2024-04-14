/*  404. Sum of Left Leaves  // Level: Easy

Given the root of a binary tree, return the sum of all left leaves.
A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg
=======================================================================================
Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

Example 2:
==========
Input: root = [1]
Output: 0
 

Constraints:
============
The number of nodes in the tree is in the range [1, 1000].
-1000 <= Node.val <= 1000

*/

// Solution

var sumOfLeftLeaves = function(root) {
    if(root == null) return 0;
    let sum = 0;
    sum += collect(root.left);  
    sum += sumOfLeftLeaves(root.right);   
    return sum; 
};

function collect (left) {
    if(left == null) return 0;
    else if(left.left == null && left.right == null) return left.val;
    else if(left.left == null) return sumOfLeftLeaves(left.right);
    else if(left.right == null) return collect(left.left);
    return sumOfLeftLeaves(left.right) + collect(left.left);
}