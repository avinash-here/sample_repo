## 1002. Find Common Characters
#### Level: Easy


Given a string array `words`, return *an array of all characters that show up in all strings within the* `words` *(including duplicates).* You may return the answer in **any order**.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree1.jpg" width="400px"/>

<br>   -->

```
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree2.jpg" width="400px"/>

<br>   -->

```
Input: words = ["cool","lock","cook"]
Output: ["c","o"]
```

<!-- <br>

**Example 3:**

<img src="https://assets.leetcode.com/uploads/2021/01/29/vtree3.jpg" width="400px"/>

<br>  

```
Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
Output: 0
Explanation:
Letter "e" can only be used once.
```

<br> -->

<br>

**Constraints:**
- `1 <= words.length <= 100`

- `1 <= words[i].length <= 100`

- `words[i]` consists of lowercase English letters.



<br>

**Topics** 

##### Array, Hash Table, String


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let arr = [];
    for(let i = 0; i < words.length; i++) {
        let obj = {};
        for(let j = 0; j < words[i].length; j++) {
            if(obj[words[i][j]] == undefined) obj[words[i][j]] = 1;
            else obj[words[i][j]]++;
        }
        arr.push(obj);
    }
    
    let res = [],  str = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < 26; i++) {
        let min = Infinity;
        for(let j = 0; j < arr.length; j++) {
            if(arr[j][str[i]] == undefined) {
                min = 0;  break;
            }
            else min = Math.min(min, arr[j][str[i]]);
        }
        for(let k = 0; k < min; k++) res.push(str[i]);
    }
    return res;
};
```

#### Java
```java
class Solution {
    public List<String> commonChars(String[] words) {
        List<Map<Character, Integer>> list = new ArrayList<>();
        for(int i = 0; i < words.length; i++) {
            Map<Character, Integer> map = new HashMap<>();
            for(int j = 0; j < words[i].length(); j++) {
                if(!map.containsKey(words[i].charAt(j))) map.put(words[i].charAt(j), 1);
                else map.put(words[i].charAt(j), map.get(words[i].charAt(j))+1);
            }
            list.add(map);
        }
        
        List<String> res = new ArrayList<>();  
        String str = "abcdefghijklmnopqrstuvwxyz";
        for(int i = 0; i < 26; i++) {
            int min = 100;
            for(int j = 0; j < list.size(); j++) {
                if(!list.get(j).containsKey(str.charAt(i))) {
                    min = 0;  break;
                }
                else min = Math.min(min, list.get(j).get(str.charAt(i)));
            }
            for(int k = 0; k < min; k++) res.add(str.charAt(i)+"");
        }
        return res;
    }
}
```

