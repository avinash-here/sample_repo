/*  // Question   // Level: Medium

You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and 
the kth node from the end (the list is 1-indexed).


Example 1:  Image Link: https://assets.leetcode.com/uploads/2020/09/21/linked1.jpg
==================================================================================
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Example 2:
==========================================
Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]

*/

// Solution

import java.util.*;

public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public ListNode swapNodes(ListNode head, int k) {
        List<Integer> list = new ArrayList<>();

        ListNode cur = head;
        while(cur != null) {
            list.add(cur.val);
            cur = cur.next;
        }

        int temp = list.get(k-1);
        list.set(k-1, list.get(list.size()-k));
        list.set(list.size()-k, temp);

        cur = new ListNode(list.get(0));
        head = cur;

        int i = 1;
        while(i < list.size()) {
            cur.next = new ListNode(list.get(i));
            cur = cur.next;
            i++;
        }
        return head;        
    }
}