## 1945. Sum of Digits of String After Convert
#### Level: Easy


You are given a string `s` consisting of lowercase English letters, and an integer `k`.

First, **convert** `s` into an integer by replacing each letter with its position in the alphabet (i.e., replace `'a'` with `1`, `'b'` with `2`, ..., `'z'` with `26`). Then, **transform** the integer by replacing it with the **sum of its digits**. Repeat the **transform** operation `k` **times** in total.

For example, if `s = "zbax"` and `k = 2`, then the resulting integer would be `8` by the following operations:

- **Convert**: `"zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124`

- **Transform #1**: `262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17`

- **Transform #2**: `17 ➝ 1 + 7 ➝ 8`

Return *the resulting integer after performing the operations described above.*

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: s = "iiii", k = 1
Output: 36
Explanation: The operations are as follows:
- Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
- Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
Thus the resulting integer is 36.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: s = "leetcode", k = 2
Output: 6
Explanation: The operations are as follows:
- Convert: "leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
- Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
- Transform #2: 33 ➝ 3 + 3 ➝ 6
Thus the resulting integer is 6.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: s = "zbax", k = 2
Output: 8
```

<br>


<br>

**Constraints:**

- `1 <= s.length <= 100`

- `1 <= k <= 10`

- `s` consists of lowercase English letters.  


<br>

**Topics** 

##### String, Simulation


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let obj = {},  str = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < str.length; i++) obj[str[i]] = i+1;
    
    let num = "";
    for(let i = 0; i < s.length; i++) num += obj[s[i]]+"";
    
    let newNum = 0;
    while(k-- > 0) {
        for(let i = 0; i < num.length; i++)  newNum += +num[i];
        num = newNum+"";  newNum = 0;
    }
    return num;
};
```

#### Java
```java
class Solution {
    public int getLucky(String s, int k) {
        String str = "abcdefghijklmnopqrstuvwxyz";
        Map<Character, Integer> map = new HashMap<>();
        for(int i = 0; i < str.length(); i++) {
            map.put(str.charAt(i), i+1);
        }
        
        String num = "";
        for(int i = 0; i < s.length(); i++) num += map.get(s.charAt(i));
        
        int newNum = 0;
        while(k-- > 0) {
            for(int i = 0; i < num.length(); i++) {
                newNum += Integer.parseInt(num.charAt(i)+"") ;
            }
            num = newNum+"";  newNum = 0;
        }
        return Integer.parseInt(num);
    }
}
```
