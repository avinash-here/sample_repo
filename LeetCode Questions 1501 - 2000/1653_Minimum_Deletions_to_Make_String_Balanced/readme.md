## 1653. Minimum Deletions to Make String Balanced
#### Level: Medium


You are given a string `s` consisting only of characters `'a'` and `'b'`​​​​.

You can delete any number of characters in `s` to make `s` **balanced**. `s` is **balanced** if there is no pair of indices `(i,j)` such that `i < j` and `s[i] = 'b'` and `s[j]= 'a'`.

Return *the **minimum** number of deletions needed to make* `s` ***balanced***.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: s = "aababbab"
Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: s = "bbaaaaabb"
Output: 2
Explanation: The only solution is to delete the first two characters.
```

<br>


<!-- **Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>

```
Input, Output, Explanation
```

<br>     -->


<br>

**Constraints:**

- `1 <= s.length <= 10^5`

- `s[i]` is `'a'` or `'b'`​​.  


<br>

**Topics** 

##### String, Dynamic Programming, Stack


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let cur = 0,  lt = [0],  rt = [0];
    for(let i = 0; i < s.length-1; i++) {
        if(s[i] == 'b') cur++;   
        lt.push(cur);
    } 
    cur = 0;
    for(let i = s.length-1; i > 0; i--) {
        if(s[i] == 'a') cur++;
        rt.push(cur);
    }
    rt.reverse();
    let res = 100000;
    for(let i = 0; i < lt.length; i++) res = Math.min(res, lt[i]+rt[i]);
    return res;
};
```

#### Java
```java
class Solution {
    public int minimumDeletions(String s) {
        int cur = 0,  n = s.length();
        int[] lt = new int[n],  rt = new int[n];
        for(int i = 0; i < n-1; i++) {
            if(s.charAt(i) == 'b') cur++;   
            lt[i+1] = cur;
        } 
        cur = 0;
        for(int i = n-1; i > 0; i--) {
            if(s.charAt(i) == 'a') cur++;
            rt[i-1] = cur;
        }
        int res = 100000;
        for(int i = 0; i < n; i++) res = Math.min(res, lt[i]+rt[i]);
        return res;
    }
}
```

#### C++
```c++
class Solution {
public:
    int minimumDeletions(string s) {
        int cur = 0,  n = s.length();
        vector<int> lt, rt;
        lt.push_back(0);  rt.push_back(0);
        for(int i = 0; i < n-1; i++) {
            if(s[i] == 'b') cur++;   
            lt.push_back(cur);
        } 
        cur = 0;
        for(int i = n-1; i > 0; i--) {
            if(s[i] == 'a') cur++;
            rt.push_back(cur);
        }
        int res = 100000;
        for(int i = 0; i < n; i++) res = min(res, lt[i]+rt[n-1-i]);
        return res;
    }
};
```