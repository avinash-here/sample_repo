/*

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
 

Example 1:
======================================
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
=================
Input: lists = []
Output: []

Example 3:
===================
Input: lists = [[]]
Output: []

*/

var mergeKLists = function(lists) {   
    let arr = [];
    for(let i = 0; i < lists.length; i++){
        let cur = lists[i];
        while(cur != null){
            arr.push(cur.val);
            cur = cur.next;
        }
    }
    if(arr.length == 0) return null;
    arr.sort((a,b) => (a-b));
    
    let head = new ListNode(arr[0]);
    let cur = head;
    for(let i = 1; i < arr.length; i++){
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
        cur.next = null;
    } 
    return head;   
};
