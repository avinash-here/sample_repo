## 648. Replace Words
#### Level: Medium


In English, we have a concept called **root**, which can be followed by some other word to form another longer word - let's call this word **derivative**. For example, when the **root** `"help"` is followed by the word `"ful"`, we can form a derivative `"helpful"`.

Given a `dictionary` consisting of many **roots** and a `sentence` consisting of words separated by spaces, replace all the derivatives in the sentence with the **root** forming it. If a derivative can be replaced by more than one **root**, replace it with the **root** that has **the shortest length**.

Return *the `sentence`* after the replacement.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>

<br>   -->

```
Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>

<br>   -->

```
Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
Output: "a a b c"
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
- `1 <= dictionary.length <= 1000`

- `1 <= dictionary[i].length <= 100`

- `dictionary[i]` consists of only lower-case letters.

- `1 <= sentence.length <= 10^6`

- `sentence` consists of only lower-case letters and spaces.

- The number of words in `sentence` is in the range `[1, 1000]`

- The length of each word in `sentence` is in the range `[1, 1000]`

- Every two consecutive words in `sentence` will be separated by exactly one space.

- `sentence` does not have leading or trailing spaces.



<br>

**Topics** 

##### Array, Hash Table, String, Trie


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let arr = sentence.trim().split(' ');

    for(let i = 0; i < dictionary.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            let d = dictionary[i].length,  w = arr[j].length;
            if(d <= w && arr[j].substring(0, d) == dictionary[i]) {
                arr[j] = dictionary[i];
            }
        } 
    }    
    return arr.join(' ');    
};
```

#### Java
```java
class Solution {
    public String replaceWords(List<String> dictionary, String sentence) {
        String[] arr = sentence.trim().split(" ");

        for(int i = 0; i < dictionary.size(); i++) {
            for(int j = 0; j < arr.length; j++) {
                int d = dictionary.get(i).length(),  w = arr[j].length();
                if(d <= w && arr[j].substring(0, d).equals(dictionary.get(i))) {
                    arr[j] = dictionary.get(i);
                }
            } 
        }    
        return String.join(" ", arr);
    }
}
```

