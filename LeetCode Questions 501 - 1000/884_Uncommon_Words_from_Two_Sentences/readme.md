## 884. Uncommon Words from Two Sentences
#### Level: Easy


A **sentence** is a string of single-space separated words where each word consists only of lowercase letters.

A word is **uncommon** if it appears exactly once in one of the sentences, and **does not appear** in the other sentence.

Given two **sentences** `s1` and `s2`, return *a list of all the **uncommon words***. You may return the answer in **any order**.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]
```

<br>


<!-- **Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   

```
Input, Output, Explanation
```

<br>  -->


<br>

**Constraints:**

- `1 <= s1.length, s2.length <= 200`

- `s1` and `s2` consist of lowercase English letters and spaces.

- `s1` and `s2` do not have leading or trailing spaces.

- All the words in `s1` and `s2` are separated by a single space.  


<br>

**Topics** 

##### Hash Table, String


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let arr1 = s1.split(" "),  arr2 = s2.split(" ");
    let obj1 = {},  obj2 = {};

    for(let i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = obj1[arr1[i]] + 1 || 1;
    }
    for(let i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] = obj2[arr2[i]] + 1 || 1;
    }

    let res = [];
    for(let key in obj1) if(obj1[key] == 1 && !obj2[key]) res.push(key); 
    for(let key in obj2) if(obj2[key] == 1 && !obj1[key]) res.push(key);
    return res; 
};
```

#### Java
```java
class Solution {
    public String[] uncommonFromSentences(String s1, String s2) {
        String[] arr1 = s1.split(" "),  arr2 = s2.split(" ");
        Map<String, Integer> map1 = new HashMap<>();
        Map<String, Integer> map2 = new HashMap<>();

        for(int i = 0; i < arr1.length; i++) {
            map1.put(arr1[i], map1.getOrDefault(arr1[i], 0)+1);
        }
        for(int i = 0; i < arr2.length; i++) {
            map2.put(arr2[i], map2.getOrDefault(arr2[i], 0)+1);
        }

        int res = 0;  List<String> li = new ArrayList<>();
        for(String k : map1.keySet()) 
            if(map1.get(k) == 1 && !map2.containsKey(k)) {
                res++;  li.add(k);
            } 
        for(String k : map2.keySet()) 
            if(map2.get(k) == 1 && !map1.containsKey(k)) {
                res++;  li.add(k); 
            }

        String[] arr = new String[res];
        for(int i = 0; i < res; i++) arr[i] = li.get(i);
        return arr;
    }
}
```