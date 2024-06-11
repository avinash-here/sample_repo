## 1002. 1122. Relative Sort Array
#### Level: Easy


Given two arrays `arr1` and `arr2`, the elements of `arr2` are distinct, and all elements in `arr2` are also in `arr1`.

Sort the elements of `arr1` such that the relative ordering of items in `arr1` are the same as in `arr2`. Elements that do not appear in `arr2` should be placed at the end of `arr1` in **ascending** order.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree1.jpg" width="400px"/>

<br>   -->

```
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree2.jpg" width="400px"/>

<br>   -->

```
Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]
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
- `1 <= arr1.length, arr2.length <= 1000`

- `0 <= arr1[i], arr2[i] <= 1000`

- All the elements of `arr2` are **distinct**.

- Each `arr2[i]` is in `arr1`.



<br>

**Topics** 

##### Array, Hash Table, Sorting, Counting Sort


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let obj = {};
    for(let i = 0; i < arr1.length; i++) obj[arr1[i]] = obj[arr1[i]] + 1 || 1;

    let res = [],  i = 0;
    for(let e of arr2) {
        while(obj[e] > 0) { res.push(e); obj[e]--; }
        i++;
    }
    for(let key in obj) {
        while(obj[key] > 0) { res.push(key);  obj[key]--; }
    }

    return res;
};
```

#### Java
```java

```

