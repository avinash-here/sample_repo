/*  // Question   // Level: Medium

You are given the root of a binary tree.

A ZigZag path for a binary tree is defined as follow:

Choose any node in the binary tree and a direction (right or left).
If the current direction is right, move to the right child of the current node; otherwise, move 
to the left child.
Change the direction from right to left or from left to right.
Repeat the second and third steps until you can't move in the tree.
Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2020/01/22/sample_1_1702.png
========================================================================================
Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
Output: 3
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).

Example 2:  Image Link: https://assets.leetcode.com/uploads/2020/01/22/sample_2_1702.png
========================================================================================
Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).

Example 3:
=================
Input: root = [1]
Output: 0

*/

// Solution

var longestZigZag = function(root) {
    if(root == null) return 0;
    
    dfs(root, true, 0);  dfs(root, false, 0);
    
    let p = pathLength;  pathLength = 0;
    return p;    
};

let pathLength = 0;

function dfs(node, goLeft, steps) {
    if(node == null) return;

    pathLength = Math.max(pathLength, steps);

    if(goLeft) {
        dfs(node.left, false, steps+1);
        dfs(node.right, true, 1);
    }
    else {
        dfs(node.left, false, 1);
        dfs(node.right, true, steps+1);
    }
}