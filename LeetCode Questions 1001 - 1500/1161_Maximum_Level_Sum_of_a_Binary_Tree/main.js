/*  // Question   // Level: Medium

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2019/05/03/capture.JPG
==================================================================================
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:
=================================================================
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2

*/

// Solution

var maxLevelSum = function(root) {
    let q = [],   arr = [];
    q.push(root);
    
    while(q.length > 0) {
        let n = q.length,  sum = 0;
        for(let i = 0; i < n; i++) {
            let node = q.shift();
            sum += node.val;

            if(node.left != null) q.push(node.left);
            if(node.right != null) q.push(node.right);
        }
        arr.push(sum);
    }

    let ans = 1,  max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            ans = i+1;  max = arr[i];
        }
    }
    return ans;    
};