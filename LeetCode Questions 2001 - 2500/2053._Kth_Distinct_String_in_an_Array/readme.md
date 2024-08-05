## 2053. Kth Distinct String in an Array
#### Level: Easy


A **distinct string** is a string that is present only **once** in an array.

Given an array of strings `arr`, and an integer `k`, return *the *`kth` ***distinct string** present in* `arr`. If there are **fewer** than `k` distinct strings, return *an **empty string*** `""`.

Note that the strings are considered in the **order in which they appear** in the array.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned. 
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: arr = ["aaa","aa","a"], k = 1
Output: "aaa"
Explanation:
All strings in arr are distinct, so the 1st string "aaa" is returned.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: arr = ["a","b","a"], k = 3
Output: ""
Explanation:
The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".
```

<br>


<br>

**Constraints:**

- `1 <= k <= arr.length <= 1000`

- `1 <= arr[i].length <= 5`

- `arr[i]` consists of lowercase English letters.  


<br>

**Topics** 

##### Array, Hash Table, String, Counting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] + 1 || 1;
    }
    let myArr = [];
    for(let k in obj) {
        if(obj[k] == 1) myArr.push(k);
    }
    if(k > myArr.length) return "";
    else return myArr[k-1];
};
```

#### Java
```java
class Solution {
    public String kthDistinct(String[] arr, int k) {
        Map<String, Integer> map = new LinkedHashMap<>();
        for(int i = 0; i < arr.length; i++) {
            map.put(arr[i], map.getOrDefault(arr[i], 0)+1);
        }
        List<String> myArr = new ArrayList<>();
        for(String str : map.keySet()) {
            if(map.get(str) == 1) myArr.add(str);
        }
        if(k > myArr.size()) return "";
        else return myArr.get(k-1);
    }
}
```
