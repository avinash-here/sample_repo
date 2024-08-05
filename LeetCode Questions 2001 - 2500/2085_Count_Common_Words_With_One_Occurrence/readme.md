## 2085. Count Common Words With One Occurrence
#### Level: Easy


Given two string arrays `words1` and `words2`, return *the number of strings that appear **exactly once** in **each** of the two arrays.*

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
Output: 2
Explanation:
- "leetcode" appears exactly once in each of the two arrays. We count this string.
- "amazing" appears exactly once in each of the two arrays. We count this string.
- "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
- "as" appears once in words1, but does not appear in words2. We do not count this string.
Thus, there are 2 strings that appear exactly once in each of the two arrays.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
Output: 0
Explanation: There are no strings that appear in each of the two arrays.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
Output: 1
Explanation: The only string that appears exactly once in each of the two arrays is "ab".
```

<br>


<br>

**Constraints:**

- `1 <= words1.length, words2.length <= 1000`

- `1 <= words1[i].length, words2[j].length <= 30`

- `words1[i]` and `words2[j]` consists only of lowercase English letters.  


<br>

**Topics** 

##### Array, Hash Table, String, Counting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let obj1 = {},  obj2 = {};
    for(let i = 0; i < words1.length; i++) {
        obj1[words1[i]] = obj1[words1[i]] + 1 || 1;
    }
    for(let i = 0; i < words2.length; i++) {
        obj2[words2[i]] = obj2[words2[i]] + 1 || 1;
    }

    let res = 0;
    for(let key in obj1) {
        if(obj1[key] == 1 && obj2[key] == 1) res++;
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int countWords(String[] words1, String[] words2) {
        Map<String, Integer> map1 = new HashMap<>();
        Map<String, Integer> map2 = new HashMap<>();
        for(int i = 0; i < words1.length; i++) {
            map1.put(words1[i], map1.getOrDefault(words1[i], 0)+1);
        }
        for(int i = 0; i < words2.length; i++) {
            map2.put(words2[i], map2.getOrDefault(words2[i], 0)+1);
        }

        int res = 0;
        for(String key : map1.keySet()) {
            if(map1.get(key) == 1 && map2.containsKey(key) && map2.get(key) == 1) res++;
        }
        return res;
    }
}
```
