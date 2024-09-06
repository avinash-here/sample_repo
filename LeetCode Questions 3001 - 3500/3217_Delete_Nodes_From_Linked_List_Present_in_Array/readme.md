## 3217. Delete Nodes From Linked List Present in Array
#### Level: Medium


You are given an array of integers `nums` and the `head` of a linked list. Return the `head` of the modified linked list after **removing** all nodes from the linked list that have a value that exists in `nums`.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2024/06/11/linkedlistexample0.png" width="400px"/>  <br>  

```
Input: nums = [1,2,3], head = [1,2,3,4,5]

Output: [4,5]

Explanation: Remove the nodes with values 1, 2, and 3.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2024/06/11/linkedlistexample1.png" width="480px"/>  <br>  

```
Input: nums = [1], head = [1,2,1,2,1,2]

Output: [2,2,2]

Explanation: Remove the nodes with value 1.
```

<br>


**Example 3:**

<img src="https://assets.leetcode.com/uploads/2024/06/11/linkedlistexample2.png" width="320px"/>  <br>  

```
Input: nums = [5], head = [1,2,3,4]

Output: [1,2,3,4]

Explanation: No node has value 5.
```

<br>


<br>

**Constraints:**

- `1 <= nums.length <= 10^5`

- `1 <= nums[i] <= 10^5`

- All elements in `nums` are unique.

- The number of nodes in the given list is in the range `[1, 10^5]`.

- `1 <= Node.val <= 10^5`

- The input is generated such that there is at least one node in the linked list that has a value not present in `nums`. 


<br>

**Topics** 

##### Array, Hash Table, Linked List


<br>

### Solutions

#### JavaScript
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) obj[nums[i]] = 1;
    let newHead = new ListNode(0, head);
    let cur = newHead;
    while(cur.next != null) {
        if(obj[cur.next.val]) cur.next = cur.next.next;
        else cur = cur.next;
    }
    return newHead.next;    
};
```

#### Java
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode modifiedList(int[] nums, ListNode head) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++) map.put(nums[i], 1);
        ListNode newHead = new ListNode(0, head);
        ListNode cur = newHead;
        while(cur.next != null) {
            if(map.containsKey(cur.next.val)) cur.next = cur.next.next;
            else cur = cur.next;
        }
        return newHead.next;   
    }
}
```
