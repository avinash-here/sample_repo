## 2337. Move Pieces to Obtain a String
#### Level: Medium


You are given two strings `start` and `target`, both of length `n`. Each string consists **only** of the characters `'L'`, `'R'`, and `'_'` where:

- The characters `'L'` and `'R'` represent pieces, where a piece `'L'` can move to the **left** only if there is a **blank** space directly to its left, and a piece `'R'` can move to the **right** only if there is a **blank** space directly to its right.

- The character `'_'` represents a blank space that can be occupied by **any** of the `'L'` or `'R'` pieces.

Return `true` *if it is possible to obtain the string* `target` *by moving the pieces of the string* `start` ***any** number of times*. Otherwise, return `false`.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: start = "_L__R__R_", target = "L______RR"
Output: true
Explanation: We can obtain the string target from start by doing the following moves:
- Move the first piece one step to the left, start becomes equal to "L___R__R_".
- Move the last piece one step to the right, start becomes equal to "L___R___R".
- Move the second piece three steps to the right, start becomes equal to "L______RR".
Since it is possible to get the string target from start, we return true.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: start = "R_L_", target = "__LR"
Output: false
Explanation: The 'R' piece in the string start can move one step to the right to obtain "_RL_".
After that, no pieces can move anymore, so it is impossible to obtain the string target from start.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: start = "_R", target = "R_"
Output: false
Explanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start.
```

<br>


<br>

**Constraints:**
- `n == start.length == target.length`

- `1 <= n <= 10^5`

- `start` and `target` consist of the characters `'L'`, `'R'`, and `'_'`.
 


<br>

**Topics** 

##### Two Pointers, String


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    let s = [],  t = [],  str1 = "",  str2 = "";
    for(let i = 0; i < start.length; i++) {
        if(start[i] != '_') {
            s.push([start[i], i]);  str1 += start[i];
        }
        if(target[i]!= '_') {
            t.push([target[i],i]);  str2 += target[i];
        }
    }
    if(str1 != str2) return false;
    for(let i = 0; i < s.length; i++) {
        if(s[i][0] == 'L' && t[i][1] > s[i][1]) return false;
        if(s[i][0] == 'R' && t[i][1] < s[i][1]) return false; 
    }
    return true;
};
```

#### Java
```java

```
