## 2181. Merge Nodes in Between Zeros
#### Level: Medium


You are given the `head` of a linked list, which contains a series of integers **separated** by `0`'s. The **beginning** and **end** of the linked list will have `Node.val == 0`.

For **every** two consecutive `0`'s, **merge** all the nodes lying in between them into a single node whose value is the **sum** of all the merged nodes. The modified list should not contain any `0`'s.

Return *the* `head` *of the modified linked list.*

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2022/02/02/ex1-1.png" width="560px"/>  <br>  

```
Input: head = [0,3,1,0,4,5,2,0]
Output: [4,11]
Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 3 + 1 = 4.
- The sum of the nodes marked in red: 4 + 5 + 2 = 11.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2022/02/02/ex2-1.png" width="560px"/>  <br>  

```
Input: head = [0,1,0,3,0,2,2,0]
Output: [1,3,4]
Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 1 = 1.
- The sum of the nodes marked in red: 3 = 3.
- The sum of the nodes marked in yellow: 2 + 2 = 4.
```

<br>


<!-- **Example 3:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   

```
Input, Output, Explanation
```

<br>  -->


<br>

**Constraints:**
- The number of nodes in the list is in the range `[3, 2 * 10^5]`.

- `0 <= Node.val <= 1000`

- There are **no** two consecutive nodes with `Node.val == 0`.

- The **beginning** and **end** of the linked list have `Node.val == 0`.


<br>

**Topics** 

##### Linked List, Simulation


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
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let cur1 = head,  cur2 = head.next,  prev = null,  sum = 0;
    while(cur2 != null) {
        if(cur2.val == 0) {
            cur1.val = sum;
            prev = cur1;  cur1 = cur1.next;  cur2 = cur2.next;
            sum = 0;
        }
        else {
            sum += cur2.val;
            cur2 = cur2.next;
        }
    }
    prev.next = null;
    return head;
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
    public ListNode mergeNodes(ListNode head) {
        ListNode cur1 = head,  cur2 = head.next,  prev = null;
        int sum = 0;
        while(cur2 != null) {
            if(cur2.val == 0) {
                cur1.val = sum;
                prev = cur1;  cur1 = cur1.next;  cur2 = cur2.next;
                sum = 0;
            }
            else {
                sum += cur2.val;
                cur2 = cur2.next;
            }
        }
        prev.next = null;
        return head;
    }
}
```
