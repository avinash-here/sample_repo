/*  // Question   // Level: Easy

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the 
values of any two different nodes in the tree.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg
===============================================================================
Input: root = [4,2,6,1,3]
Output: 1

Example 2:  Image Link: https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg
===============================================================================
Input: root = [1,0,48,null,null,12,49]
Output: 1

*/

// Solution

var getMinimumDifference = function(root) {
    let arr = [];
    traverse(root, arr);

    let ans = Infinity;
    for(let i = 1; i < arr.length; i++) {
        if((arr[i]-arr[i-1]) < ans) ans = arr[i]-arr[i-1];
    }
    return ans;
};

function traverse(node, arr) {
    if(node == null) return;

    traverse(node.left, arr);
    arr.push(node.val);
    traverse(node.right, arr);
}