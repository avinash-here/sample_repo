## 3110. Score of a String
#### Level: Easy


You are given a string `s`. The **score** of a string is defined as the sum of the absolute difference between the **ASCII** values of adjacent characters.

Return the **score** of `s`.


<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2022/10/02/drawio.png" width="500px"/>

<br>   -->

```
Input: s = "hello"

Output: 13

Explanation:

The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/09/01/node2.jpg" width="300px"/>

<br>   -->

```
Input: s = "zaz"

Output: 50

Explanation:

The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.
```

<br>

<!-- **Example 3:**  -->

<!-- <img src="https://assets.leetcode.com/uploads/2022/10/02/drawio.png" width="500px"/>

<br>   -->

<!-- ```
Input: happiness = [2,3,4,5], k = 1
Output: 5
Explanation: We can pick 1 child in the following way:
- Pick the child with the happiness value == 5. The happiness value of the remaining children becomes [1,2,3].
The sum of the happiness values of the selected children is 5.
``` -->

<!-- <br> -->
<br>

**Constraints:**
- `2 <= s.length <= 100`

- `s` consists only of lowercase English letters.



<br>

**Topics** 

##### String


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let map = {};
    for(let i = 0; i < str.length; i++) map[str[i]] = i;

    let res = 0;
    for(let i = 1; i < s.length; i++) res += Math.abs(map[s[i]] - map[s[i-1]]);
    return res;
};
```

#### Java
```java
class Solution {
    public int scoreOfString(String s) {
        String str = "abcdefghijklmnopqrstuvwxyz";
        Map<Character, Integer> map = new HashMap<>();
        for(int i = 0; i < str.length(); i++) {
            map.put(str.charAt(i), i);
        }
        int res = 0;
        for(int i = 1; i < s.length(); i++) {
            res += Math.abs(map.get(s.charAt(i)) - map.get(s.charAt(i-1)));
        }
        return res;
    }
}
```

