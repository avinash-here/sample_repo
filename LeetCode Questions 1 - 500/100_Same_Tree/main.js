/* Same Tree      // Level: Easy

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, 
and the nodes have the same value.


Example 1: Image Link: https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg
=============================================================================
Input: p = [1,2,3], q = [1,2,3]
Output: true


Example 2: Image Link: https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg
=============================================================================
Input: p = [1,2], q = [1,null,2]
Output: false


Example 3: Image Link: https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg
=============================================================================
Input: p = [1,2,1], q = [1,1,2]
Output: false
*/


// Solution

var isSameTree = function(p, q) {
    if(p == null && q == null) return true;
    else if(p == null) return false;
    else if(q == null) return false;
    else if(p.val != q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};