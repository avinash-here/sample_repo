## 260. Single Number III
#### Level: Medium


Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in **any order**.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree1.jpg" width="400px"/>

<br>   -->

```
Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree2.jpg" width="400px"/>

<br>   -->

```
Input: nums = [-1,0]
Output: [-1,0]
```

<br>

**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree3.jpg" width="400px"/>

<br>   -->

```
Input: nums = [0,1]
Output: [1,0]
```

<br>

<br>

**Constraints:**
- `2 <= nums.length <= 3 * 10^4`

- `-2^31 <= nums[i] <= 2^31 - 1`

- Each integer in `nums` will appear twice, only two integers will appear once.




<br>

**Topics** 

##### Array, Bit Manipulation


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]] == undefined) obj[nums[i]] = 1;
        else obj[nums[i]]++;
    }
    let res = [];
    for(let key in obj)  if(obj[key] == 1) res.push(key);
    return res;
};
```

#### Java
```java
class Solution {
    public int[] singleNumber(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            if(map.containsKey(nums[i])) map.put(nums[i], map.get(nums[i])+1);
            else map.put(nums[i], 1);
        }        
        int[] res = new int[2];  int ind = 0;
        for(int i : map.keySet()) if(map.get(i) == 1) { res[ind] = i; ind++; }
        return res;
    }
}
```

