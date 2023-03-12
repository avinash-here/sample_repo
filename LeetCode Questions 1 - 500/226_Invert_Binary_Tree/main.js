/*

Given the root of a binary tree, invert the tree, and return its root.
 

Example 1:  Reference image link: https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg
=============================
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
=====================
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
================
Input: root = []
Output: []

*/

var invertTree = function(root) {
    solve(root);
    return root;    
};

function solve(root){
    if(root == null) return;

    let node = root.left;
    root.left = root.right;
    root.right = node;

    solve(root.left);  solve(root.right);
}