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

import java.util.*;

// Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode() {}    
    TreeNode(int val) { this.val = val; }
    
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public int getMinimumDifference(TreeNode root) {
        List<Integer> arr = new ArrayList<>();
        traverse(root, arr);

        int ans = Integer.MAX_VALUE;
        for(int i = 1; i < arr.size(); i++) {
            if((arr.get(i)-arr.get(i-1) < ans)) ans = arr.get(i)-arr.get(i-1);
        }
        return ans;
    }

    public static void traverse(TreeNode node, List<Integer> arr) {
        if(node == null) return;

        traverse(node.left, arr);
        arr.add(node.val);
        traverse(node.right, arr);
    }
}