## 2326. Spiral Matrix IV
#### Level: Medium


You are given two integers `m` and `n`, which represent the dimensions of a matrix.

You are also given the `head` of a linked list of integers.

Generate an `m x n` matrix that contains the integers in the linked list presented in **spiral** order **(clockwise)**, starting from the **top-left** of the matrix. If there are remaining empty spaces, fill them with `-1`.

Return *the generated matrix.*

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2022/05/09/ex1new.jpg" width="240px"/>  <br>  

```
Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]

Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]

Explanation: The diagram above shows how the values are printed in the matrix.
Note that the remaining spaces in the matrix are filled with -1.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2022/05/11/ex2.jpg" width="240px"/>  <br>  

```
Input: m = 1, n = 4, head = [0,1,2]

Output: [[0,1,2,-1]]

Explanation: The diagram above shows how the values are printed from left to right in the matrix.
The last space in the matrix is set to -1.
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

- `1 <= m, n <= 10^5`

- `1 <= m * n <= 10^5`

- The number of nodes in the list is in the range `[1, m * n]`.

- `0 <= Node.val <= 1000`  


<br>

**Topics** 

##### Array, Linked List, Matrix, Simulation


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
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    let res = [];
    for(let i = 0; i < m; i++)  res.push(new Array(n).fill(-1));
    let t = 0,  b = m-1,  l = 0,  r = n-1,  cur = head;
    
    while(cur != null) {
        for(let i = l; i <= r; i++) {
            if(cur == null) return res;
            res[t][i] = cur.val;  
            cur = cur.next;
        } 
        t++;

        for(let i = t; i <= b; i++) {
            if(cur == null) return res;
            res[i][r] = cur.val;  
            cur = cur.next;
        } 
        r--;

        for(let i = r; i >= l; i--) {
            if(cur == null) return res;
            res[b][i] = cur.val;  
            cur = cur.next;
        } 
        b--;

        for(let i = b; i >= t; i--) {
            if(cur == null) return res;
            res[i][l] = cur.val;  
            cur = cur.next;
        } 
        l++;
    }
    return res;
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
    public int[][] spiralMatrix(int m, int n, ListNode head) {
        int[][] res = new int[m][n];
        for(int i = 0; i < m; i++) Arrays.fill(res[i], -1);
        ListNode cur = head;
        int t = 0,  b = m-1,  l = 0,  r = n-1;

        while(cur != null) {
            for(int i = l; i <= r; i++) {
                if(cur == null) break;
                res[t][i] = cur.val;
                cur = cur.next;
            }
            t++;

            for(int i = t; i <= b; i++) {
                if(cur == null) break;
                res[i][r] = cur.val;
                cur = cur.next;
            }
            r--;

            for(int i = r; i >= l; i--) {
                if(cur == null) break;
                res[b][i] = cur.val;
                cur = cur.next;
            }
            b--;

            for(int i = b; i >= t; i--) {
                if(cur == null) break;
                res[i][l] = cur.val;
                cur = cur.next;
            }
            l++;
        }
        return res;
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
    vector<vector<int>> spiralMatrix(int m, int n, ListNode* head) {
        vector<vector<int>> res(m, vector<int> (n, -1));
        ListNode* cur = head;
        int t = 0,  b = m-1,  l = 0,  r = n-1;

        while(cur != NULL) {
            for(int i = l; i <= r; i++) {
                if(cur == NULL) break;
                res[t][i] = cur->val;
                cur = cur->next;
            }
            t++;

            for(int i = t; i <= b; i++) {
                if(cur == NULL) break;
                res[i][r] = cur->val;
                cur = cur->next;
            }
            r--;

            for(int i = r; i >= l; i--) {
                if(cur == NULL) break;
                res[b][i] = cur->val;
                cur = cur->next;
            }
            b--;

            for(int i = b; i >= t; i--) {
                if(cur == NULL) break;
                res[i][l] = cur->val;
                cur = cur->next;
            }
            l++;
        }
        return res;
    }
};
```