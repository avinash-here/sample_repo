/*  623. Add One Row to Tree  // Level: Medium

Given the root of a binary tree and two integers val and depth, add a row of nodes with value val
at the given depth depth.

Note that the root node is at depth 1.

The adding rule is:

Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree
nodes with value val as cur's left subtree root and right subtree root.
cur's original left subtree should be the left subtree of the new left subtree root.
cur's original right subtree should be the right subtree of the new right subtree root.
If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val
as the new root of the whole original tree, and the original tree is the new root's left subtree.
 

Example 1: Image Link: https://assets.leetcode.com/uploads/2021/03/15/addrow-tree.jpg
=====================================================================================
Input: root = [4,2,6,3,1,5], val = 1, depth = 2
Output: [4,1,1,2,null,null,6,3,1,5]

Example 2: Image Link: https://assets.leetcode.com/uploads/2021/03/11/add2-tree.jpg
===================================================================================
Input: root = [4,2,null,3,1], val = 1, depth = 3
Output: [4,2,null,1,1,3,null,null,1]
 

Constraints:
============
The number of nodes in the tree is in the range [1, 10^4].
The depth of the tree is in the range [1, 10^4].
-100 <= Node.val <= 100
-10^5 <= val <= 10^5
1 <= depth <= the depth of tree + 1

*/

// Solution

var addOneRow = function(root, val, depth) {
    if(depth == 1) {
        let newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }
    let q = [],  d = 2;
    q.push(root);
    
    while(q.length > 0 && d < depth) {
        let n = q.length;
        for(let i = 0; i < n; i++) {
            let cur = q.shift();

            if(cur.left != null) q.push(cur.left);
            if(cur.right != null) q.push(cur.right);
        }
        d++;
        if(d == depth) break;
    }

    let len = q.length;
    for(let i = 0; i < len; i++) {
        let cur = q.shift();
        let l = cur.left,  r = cur.right;

        cur.left = new TreeNode(val);
        cur.left.left = l;
        cur.right = new TreeNode(val);
        cur.right.right = r;
    }
    return root;
};