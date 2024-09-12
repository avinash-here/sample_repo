## 1684. Count the Number of Consistent Strings
#### Level: Easy


You are given a string `allowed` consisting of **distinct** characters and an array of strings `words`. A string is **consistent** if all characters in the string appear in the string `allowed`.

Return *the number of **consistent** strings in the array* `words`.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
```

<br>


<br>

**Constraints:**

- `1 <= words.length <= 10^4`

- `1 <= allowed.length <= 26`

- `1 <= words[i].length <= 10`

- The characters in `allowed` are **distinct**.

- `words[i]` and `allowed` contain only lowercase English letters.  


<br>

**Topics** 

##### Array, Hash Table, String, Bit Manipulation, Counting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let obj = {};
    for(let i = 0; i < allowed.length; i++) {
        obj[allowed[i]] = 1;
    }

    let res = 0;
    for(let i = 0; i < words.length; i++) {
        let flag = true;
        for(let j = 0; j < words[i].length; j++) {
            if(!obj[words[i][j]]) {
                flag = false; break;
            }
        }
        if(flag) res++;
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int countConsistentStrings(String allowed, String[] words) {
        Map<Character, Integer> map = new HashMap<>();
        for(int i = 0; i < allowed.length(); i++) {
            map.put(allowed.charAt(i), 1);
        }

        int res = 0;
        for(int i = 0; i < words.length; i++) {
            boolean flag = true;
            for(int j = 0; j < words[i].length(); j++) {
                if(!map.containsKey(words[i].charAt(j))) {
                    flag = false; break;
                }
            }
            if(flag) res++;
        }
        return res;
    }
}
```
