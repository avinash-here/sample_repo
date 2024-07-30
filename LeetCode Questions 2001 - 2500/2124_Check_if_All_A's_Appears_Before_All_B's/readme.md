## 2124. Check if All A's Appears Before All B's
#### Level: Easy


Given a string `s` consisting of **only** the characters `'a'` and `'b'`, return `true` *if **every*** `'a'` *appears before every* `'b'` *in the string*. Otherwise, return `false`.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: s = "aaabbb"
Output: true
Explanation:
The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
Hence, every 'a' appears before every 'b' and we return true.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: s = "abab"
Output: false
Explanation:
There is an 'a' at index 2 and a 'b' at index 1.
Hence, not every 'a' appears before every 'b' and we return false.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: s = "bbb"
Output: true
Explanation:
There are no 'a's, hence, every 'a' appears before every 'b' and we return true.
```

<br>


<br>

**Constraints:**

- `1 <= s.length <= 100`

- `s[i]` is either `'a'` or `'b'`.  


<br>

**Topics** 

##### String


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let flag = true;
    for(let i = 0; i < s.length; i++) {
        if(flag) {
            if(s[i] == 'b') flag = false;
        }
        else if(s[i] == 'a') return false;
    }
    return true;
};
```

#### Java
```java
class Solution {
    public boolean checkString(String s) {
        boolean flag = true;
        for(int i = 0; i < s.length(); i++) {
            if(flag) {
                if(s.charAt(i) == 'b') flag = false;
            }
            else if(s.charAt(i) == 'a') return false;
        }
        return true;
    }
}
```

#### C++
```c++
class Solution {
public:
    bool checkString(string s) {
        bool flag = true;
        for(int i = 0; i < s.length(); i++) {
            if(flag) {
                if(s[i] == 'b') flag = false;
            }
            else if(s[i] == 'a') return false;
        }
        return true;
    }
};
```