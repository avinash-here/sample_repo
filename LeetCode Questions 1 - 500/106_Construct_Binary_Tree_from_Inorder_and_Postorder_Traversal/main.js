/*

Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree 
and postorder is the postorder traversal of the same tree, construct and return the binary tree.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2021/02/19/tree.jpg
-------------------------------------------------------------------------------
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

Example 2:
=======================================
Input: inorder = [-1], postorder = [-1]
Output: [-1]

*/

var buildTree = function(inorder, postorder) {
    return createTree(inorder, 0, inorder.length-1, postorder, 0, postorder.length-1);    
};

function createTree(inO, inS, inE, post, postS, postE){
    if(inS > inE ) return null;
    
    let root = new TreeNode(post[postE]);
    let ind = inO.indexOf(post[postE]);
    let len = ind - inS;

    root.left = createTree(inO, inS, ind-1, post, postS, postS + len -1);
    root.right = createTree(inO, ind+1, inE, post, postS + len, postE-1);    
    return root;
}