## 1608. Special Array With X Elements Greater Than or Equal X
#### Level: Easy


You are given an array `nums` of non-negative integers. `nums` is considered **special** if there exists a number `x` such that there are **exactly** `x` numbers in `nums` that are **greater than or equal to** `x`.

Notice that `x` **does not** have to be an element in `nums`.

Return `x` *if the array is **special**, otherwise, return* `-1`. It can be proven that if `nums` is special, the value for `x` is **unique**.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree1.jpg" width="400px"/>

<br>   -->

```
Input: nums = [3,5]
Output: 2
Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree2.jpg" width="400px"/>

<br>   -->

```
Input: nums = [0,0]
Output: -1
Explanation: No numbers fit the criteria for x.
If x = 0, there should be 0 numbers >= x, but there are 2.
If x = 1, there should be 1 number >= x, but there are 0.
If x = 2, there should be 2 numbers >= x, but there are 0.
x cannot be greater since there are only 2 numbers in nums.
```

<br>

**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree3.jpg" width="400px"/>

<br>   -->

```
Input: nums = [0,4,3,0,4]
Output: 3
Explanation: There are 3 values that are greater than or equal to 3.
```

<br>

<br>

**Constraints:**
- `1 <= nums.length <= 100`

- `0 <= nums[i] <= 1000`



<br>

**Topics** 

##### Array, Binary Search, Sorting


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]] == undefined) obj[nums[i]] = 1;
        else obj[nums[i]]++;
    }

    let obj2 = {};  obj2[1001] = 0;
    for(let i = 1000; i > 0; i--) {
        if(obj[i] != undefined) obj2[i] = obj[i] + obj2[i+1];
        else obj2[i] = obj2[i+1];
    }

    for(let i = 1000; i > 0; i--)  if(i == obj2[i]) return i;
    return -1;
};
```

#### Java
```java

```

