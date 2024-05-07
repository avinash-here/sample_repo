## 2816. Double a Number Represented as a Linked List
#### Level: Medium

You are given the ```head``` of a **non-empty** linked list representing a non-negative integer without leading zeroes.

Return the ```head``` of the linked list after **doubling** it.

<br><br>
**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2023/05/28/example.png" width="320px"/>

<br>  

```
Input: head = [1,8,9]
Output: [3,7,8]
Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.
```

<br> 

**Example 2:**

<img src="https://assets.leetcode.com/uploads/2023/05/28/example2.png" width="320px"/>

<br>  

```
Input: head = [9,9,9]
Output: [1,9,9,8]
Explanation: The figure above corresponds to the given linked list which represents the number 999. Hence, the returned linked list reprersents the number 999 * 2 = 1998.
```

<br><br>
**Constraints:**
- The number of nodes in the list is in the range ```[1, 10^4]```.
- ```0 <= Node.val <= 9```
- The input is generated such that the list represents a number that does not have leading zeros, except the number ```0``` itself.


<br>

**Topics** 

##### Linked List, Math, Stack


<br>

### Solution
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
var doubleIt = function(head) {
    let arr = [],  cur = head;
    while(cur != null) {
        arr.push(cur.val);  cur = cur.next;
    }
    arr.reverse();

    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i]*2;
        arr[i] = total % 10;
        total = Math.floor(total/10);
    }
    if(total != 0) arr.push(total);
    arr.reverse();

    let res = new ListNode(arr[0]);  cur = res;
    for(let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);  cur = cur.next;
    }
    return res;
};
```
