/*  // Question   // Level: Medium

Given the head of a singly linked list, group all the nodes with odd indices together followed by the 
nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.


Example 1: Image Link: https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg
=============================================================================================
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Example 2: Image Link: https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg
==============================================================================================
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

*/

// Solution

var oddEvenList = function(head) {
    let odd = [],  even = [];

    let cur = head,  od = true;
    while(cur != null) {
        if(od) {
            odd.push(cur.val);
            cur = cur.next;
            od = false;
        }
        else {
            even.push(cur.val);
            cur = cur.next;
            od = true;
        }
    }
    
    cur = head;
    for(let i = 0; i < odd.length; i++) {
        cur.val = odd[i];
        cur = cur.next;
    }
    for(let i = 0; i < even.length; i++) {
        cur.val = even[i];
        cur = cur.next;
    }
    return head;
};