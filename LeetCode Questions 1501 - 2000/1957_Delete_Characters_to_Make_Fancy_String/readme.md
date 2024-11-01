## 1957. Delete Characters to Make Fancy String
#### Level: Easy


A **fancy string** is a string where no **three consecutive** characters are equal.

Given a string `s`, delete the **minimum** possible number of characters from `s` to make it **fancy**.

Return *the final string after the deletion.* It can be shown that the answer will always be **unique**.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: s = "leeetcode"
Output: "leetcode"
Explanation:
Remove an 'e' from the first group of 'e's to create "leetcode".
No three consecutive characters are equal, so return "leetcode".
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: s = "aaabaaaa"
Output: "aabaa"
Explanation:
Remove an 'a' from the first group of 'a's to create "aabaaaa".
Remove two 'a's from the second group of 'a's to create "aabaa".
No three consecutive characters are equal, so return "aabaa".
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: s = "aab"
Output: "aab"
Explanation: No three consecutive characters are equal, so return "aab".
```

<br>


<br>

**Constraints:**

- `1 <= s.length <= 10^5`

- `s` consists only of lowercase English letters.  


<br>

**Topics** 

##### String


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let str = "",   last = s[0],   count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] == last) {
            if(count < 2) {
                count++;  
                str += s[i];
            }
        }
        else {
            last = s[i];  
            count = 1;  
            str += s[i];
        }
    }
    return str;
};
```

#### Java
```java
class Solution {
    public String makeFancyString(String s) {
        StringBuilder res = new StringBuilder();  
        char last = s.charAt(0);  
        int count = 0;
        
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == last) {
                if(count < 2) {
                    count++;  
                    res.append(last+"");
                }
            }
            else {
                last = s.charAt(i);  
                count = 1;  
                res.append(last+"");
            }
        }
        return res.toString();
    }
}
```

#### C++
```cpp
class Solution {
public:
    string makeFancyString(string s) {
        string res = "";
        char last = s[0];
        int count = 0;

        for(int i = 0; i < s.size(); i++) {
            if(s[i] == last) {
                if(count < 2) {
                    count++;
                    res += last;
                }
            }
            else {
                count = 1;
                last = s[i];
                res += last;
            }
        }
        return res;
    }
};
```