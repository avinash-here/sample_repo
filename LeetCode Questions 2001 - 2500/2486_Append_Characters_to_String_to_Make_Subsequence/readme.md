## 2486. Append Characters to String to Make Subsequence
#### Level: Medium


You are given two strings `s` and `t` consisting of only lowercase English letters.

Return *the minimum number of characters that need to be appended to the end of* `s` *so that* `t` *becomes a **subsequence** of* `s`.

A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2022/06/21/ex1.png" width="400px"/>

<br>   -->

```
Input: s = "coaching", t = "coding"
Output: 4
Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
Now, t is a subsequence of s ("coachingding").
It can be shown that appending any 3 characters to the end of s will never make t a subsequence.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2022/07/02/ex2new2.png" width="440px"/>

<br>   -->

```
Input: s = "abcde", t = "a"
Output: 0
Explanation: t is already a subsequence of s ("abcde").
```

<br>

**Example 3:** 

<!-- <img src="https://assets.leetcode.com/uploads/2022/06/21/ex1.png" width="400px"/>

<br>   -->

```
Input: s = "z", t = "abcde"
Output: 5
Explanation: Append the characters "abcde" to the end of s so that s = "zabcde".
Now, t is a subsequence of s ("zabcde").
It can be shown that appending any 4 characters to the end of s will never make t a subsequence.
```

<br> 

<br>

**Constraints:**
- `1 <= s.length, t.length <= 10^5`

- `s` and `t` consist only of lowercase English letters.


<br>

**Topics** 

##### Two Pointers, String, Greedy


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let j = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] == t[j]) j++;
    }
    return t.length - j;
};
```

#### Java
```java
class Solution {
    public int appendCharacters(String s, String t) {
        int j = 0;
        for(int i = 0; i < s.length() && j < t.length(); i++) {
            if(s.charAt(i) == t.charAt(j)) j++;
        }
        return t.length() - j;
    }
}
```
