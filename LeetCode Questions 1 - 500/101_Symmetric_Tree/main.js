/*

Given the root of a binary tree, check whether it is a mirror of itself 
(i.e., symmetric around its center).
 

Example 1:  Image link: https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg
===================================================================================
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:  Image link: https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg
===================================================================================
Input: root = [1,2,2,null,3,null,3]
Output: false

*/

var isSymmetric = function(r) {
    if(r == null || (r.left == null && r.right == null)) return true;
    else if (r.left == null || r.right == null) return false;
    else if (r.left.val != r.right.val) return false;
    return checkIt(r.left, r.right);
};

function checkIt(l, r){
    if(l == null && r == null) return true;
    else if (l == null || r == null) return false;
    else if(l.val != r.val) return false;
    return checkIt(l.left, r.right) && checkIt(l.right, r.left);
}