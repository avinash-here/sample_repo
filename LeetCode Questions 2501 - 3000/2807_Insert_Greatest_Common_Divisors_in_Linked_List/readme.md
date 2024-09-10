## 2807. Insert Greatest Common Divisors in Linked List
#### Level: Medium


Given the head of a linked list `head`, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the **greatest common divisor** of them.

Return *the linked list after insertion.*

The **greatest common divisor** of two numbers is the largest positive integer that evenly divides both numbers.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2023/07/18/ex1_copy.png" width="560px"/>  <br>  

```
Input: head = [18,6,10,3]

Output: [18,6,6,2,10,1,3]

Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
- We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
- We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
- We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
There are no more adjacent nodes, so we return the linked list.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2023/07/18/ex2_copy1.png" width="50px"/>  <br>  

```
Input: head = [7]

Output: [7]

Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
There are no pairs of adjacent nodes, so we return the initial linked list.
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

- The number of nodes in the list is in the range `[1, 5000]`.

- `1 <= Node.val <= 1000`  


<br>

**Topics** 

##### Linked List, Math, Number Theory


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
var insertGreatestCommonDivisors = function(head) {
    let cur = head,  nxt = head.next;
    while(nxt != null) {
        let a = cur.val,  b = nxt.val;
        let val = gcd(a, b);
        cur.next = new ListNode(val, nxt);
        cur = nxt;  nxt = nxt.next;
    }
    return head;
};

function gcd(a, b) {
    if(a == 0) return b;
    else if(b == 0) return a;
    else if(a == b) return a;
    else if(a > b) return gcd(b, a%b);
    else return gcd(a, b%a);
}
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
    public ListNode insertGreatestCommonDivisors(ListNode head) {
        ListNode cur = head,  nxt = head.next;
        while(nxt != null) {
            int a = cur.val,  b = nxt.val;
            int val = gcd(a, b);
            cur.next = new ListNode(val, nxt);
            cur = nxt;  nxt = nxt.next;
        }
        return head;
    }

    int gcd(int a, int b) {
        if(a == 0) return b;
        if(b == 0) return a;
        if(a == b) return a;
        if(a > b) return gcd(b, a%b);
        else return gcd(a, b%a);
    }
}
```

#### C++
```c++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    int gcd(int a, int b) {
        if(a == 0) return b;
        if(b == 0) return a;
        if(a == b) return a;
        if(a > b) return gcd(b, a%b);
        else return gcd(a, b%a);
    }
    
    ListNode* insertGreatestCommonDivisors(ListNode* head) {
        ListNode* cur = head;  ListNode* nxt = head->next;
        while(nxt != NULL) {
            int a = cur->val,  b = nxt->val;
            int val = gcd(a, b);
            cur->next = new ListNode(val, nxt);
            cur = nxt;  nxt = nxt->next;
        }
        return head;
    }
};
```