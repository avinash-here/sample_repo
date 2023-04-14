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

var swapNodes = function(head, k) {
    let arr = [],  cur = head;

    while(cur != null) {
        arr.push(cur.val);   cur = cur.next;
    }

    let temp = arr[k-1];
    arr[k-1] = arr[arr.length-k];
    arr[arr.length-k] = temp;

    head = new ListNode(arr[0]);
    cur = head;
    for(let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return head;
};