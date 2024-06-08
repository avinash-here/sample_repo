## 523. Continuous Subarray Sum
#### Level: Medium


### Problem Statement

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>

<br>   -->

```

```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>

<br>   -->

```

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
- 



<br>

**Topics** 

##### 


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let arr = [0],  mods = [0],  sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        arr.push(sum);
        mods.push(sum % k);
    }
    
    let obj = {};
    for(let i = 0; i < mods.length; i++) {
        if(obj[mods[i]] == undefined) obj[mods[i]] = i;
        else if(i - obj[mods[i]] >= 2) return true;
    }
    return false;
};
```

#### Java
```java

```

