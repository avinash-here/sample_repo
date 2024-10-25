## 1. Two Sum
#### Level: Easy


Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`.*

You may assume that each input would have ***exactly*** **one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

<br>


<br>

**Constraints:**

- `2 <= nums.length <= 10^4`

- `-10^9 <= nums[i] <= 10^9`

- `-10^9 <= target <= 10^9`

- **Only one valid answer exists.**  


<br>

**Topics** 

##### Array, Hash Table


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = [];
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(obj[target-nums[i]] != undefined) {
            res.push(obj[target-nums[i]]);  
            res.push(i);
        }
        else obj[nums[i]] = i;
    } 
    return res;
};
```

#### Java
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] res = new int[2];
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            if(map.containsKey(target - nums[i])) {
                res[0] = map.get(target - nums[i]);
                res[1] = i;
            }
            else map.put(nums[i], i);
        }
        return res;
    }
}
```

#### C++
```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> res;  
        map<int, int> mp;
        for(int i = 0; i < nums.size(); i++) {
            if(mp.contains(target-nums[i])) {
                res.push_back(mp[target-nums[i]]);
                res.push_back(i);
            }
            else mp[nums[i]] = i;
        }
        return res;
    }
};
```