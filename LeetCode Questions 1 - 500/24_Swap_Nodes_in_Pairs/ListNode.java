/*  // Question   // Level: Medium

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem 
without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 
Example 1:  Image Link: https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg
===================================================================================
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
================
Input: head = []
Output: []

Example 3:
=================
Input: head = [1]
Output: [1]

*/  

// Definition for singly-linked list.
public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode cur = head;
        while(cur != null && cur.next != null) {
            int temp = cur.val;
            cur.val = cur.next.val;
            cur.next.val = temp;

            cur = cur.next.next;
        }
        return head;        
    }
}