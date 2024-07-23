## 1636. Sort Array by Increasing Frequency
#### Level: Easy


Given an array of integers `nums`, sort the array in **increasing** order based on the frequency of the values. If multiple values have the same frequency, sort them in **decreasing** order.

Return the *sorted array.*

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
```

<br>


<br>

**Constraints:**
- `1 <= nums.length <= 100`

- `-100 <= nums[i] <= 100`  



<br>

**Topics** 

##### Array, Hash Table, Sorting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) obj[nums[i]] = obj[nums[i]]+1 || 1;
    let arr = [];
    for(let key in obj)arr.push([obj[key], key]);
    arr.sort((a,b) => a[0] == b[0] ? b[1]-a[1] : a[0]-b[0]);
    
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i][0]; j++) res.push(arr[i][1]);
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int[] frequencySort(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            if(!map.containsKey(nums[i])) map.put(nums[i], 1);
            else map.put(nums[i], map.get(nums[i])+1);
        }
        List<List<Integer>> list = new ArrayList<>();
        for(int key : map.keySet()) {
            List<Integer> li = Arrays.asList(map.get(key), key);
            list.add(li);
        }
        list.sort((a,b) -> {
            if(a.get(0) == b.get(0)) return b.get(1) - a.get(1);
            else return a.get(0) - b.get(0);
        });
        
        int i = 0, k = 0;
        while(i < nums.length) {
            for(int j = 0; j < list.get(k).get(0); j++) {
                nums[i] = list.get(k).get(1);  i++;
            }
            k++;
        }
        return nums;
    }
}
```