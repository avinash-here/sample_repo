## 409. Longest Palindrome
#### Level: Easy


Given a string `s` which consists of lowercase or uppercase letters, return the length of the **longest palindrome** that can be built with those letters.

Letters are **case sensitive**, for example, `"Aa"` is not considered a palindrome.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>

<br>   -->

```
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>

<br>   -->

```
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
```

<br>

<!-- **Example 3:**

<img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>

<br>  

```
Input: root = [1,2,null,2,null,2], target = 2
Output: [1]
Explanation: Leaf nodes in green with value (target = 2) are removed at each step.
```

<br> -->

<br>

**Constraints:**
- `1 <= s.length <= 2000`

- `s` consists of lowercase **and/or** uppercase English letters only.



<br>

**Topics** 

##### Hash Table, String, Greedy


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {};
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] == undefined) map[s[i]] = 1;
        else map[s[i]]++;
    }
    let res = 0;
    for(let key in map) {
        if(map[key] % 2 == 0) res += map[key];
        else if (res % 2 == 0) res += map[key]; 
        else res += map[key] - 1;
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int longestPalindrome(String s) {
        Map<Character, Integer> map = new HashMap<>();
        for(int i = 0; i < s.length(); i++) {
            if(!map.containsKey(s.charAt(i))) map.put(s.charAt(i), 1);
            else map.put(s.charAt(i), map.get(s.charAt(i))+1);
        }
        int res = 0;
        for(char c : map.keySet()) {
            if(map.get(c) % 2 == 0) res += map.get(c);
            else if(res % 2 == 0) res += map.get(c);
            else res += map.get(c) - 1;
        }
        return res;
    }
}
```

