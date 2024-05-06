## 2487. Remove Nodes From Linked List
#### Level: Medium


You are given the ```head``` of a linked list.

Remove every node which has a node with a greater value anywhere to the right side of it.

Return the ```head``` of the modified linked list


<br><br>
**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2022/10/02/drawio.png" width="500px"/>

<br>  

```
Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/09/01/node2.jpg" width="300px"/>

<br>   -->

```
Input: head = [1,1,1,1]
Output: [1,1,1,1]
Explanation: Every node has value 1, so no nodes are removed.
```

<br><br>
**Constraints:**
- The number of the nodes in the given list is in the range ```[1, 10^5]```.
- ```1 <= Node.val <= 10^5```


<br>

**Topics** 

##### Linked List, Stack, Recursion, Monotonic Stack


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
var removeNodes = function(head) {
    let stk = [],  cur = head;
    while(cur != null) {
        while(stk.length > 0 && stk[stk.length-1].val < cur.val) stk.pop();        
        stk.push(cur);
        cur = cur.next;
    }

    let res = stk[0];  cur = res;
    for(let i = 1; i < stk.length; i++) {
        cur.next = stk[i];
        cur = cur.next;
    }
    return res;
};
```

