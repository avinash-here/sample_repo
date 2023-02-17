/*

Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two 
different nodes in the tree.
 

Example 1:
=========================
Input: root = [4,2,6,1,3]
Output: 1

Example 2:
======================================
Input: root = [1,0,48,null,null,12,49]
Output: 1

*/

var minDiffInBST = function(root) {
    let arr = [];
    traverse(root, arr);

    let ans = Infinity;
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(Math.abs(arr[i]-arr[j]) < ans) ans = Math.abs(arr[i]-arr[j]);
        }
    }
    return ans;
};

function traverse(root, arr){
    if(root == null) return;
    arr.push(root.val);
    traverse(root.left, arr);
    traverse(root.right, arr);
}