## 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
#### Level: Medium


Given an array of integers `nums` and an integer `limit`, return the size of the longest **non-empty** subarray such that the absolute difference between any two elements of this subarray is less than or equal to `limit`.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/mple_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4. 
Therefore, the size of the longest subarray is 2.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4 
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
```

<br>


**Example 3:**

<!-- <img src="https://assets/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3
```

<br>


<br>

**Constraints:**
- `1 <= nums.length <= 10^5`

- `1 <= nums[i] <= 10^9`

- `0 <= limit <= 10^9`
  


<br>

**Topics** 

##### Array, Queue, Sliding Window, Heap (Priority Queue), Ordered Set, Monotonic Queue


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let res = 1;
    let max = [0],  min = [0], s = 0;

    for(let i = 1; i < nums.length; i++) {
        while(nums[min[min.length-1]] > nums[i]) min.pop();
        min.push(i);

        while(nums[max[max.length-1]] < nums[i]) max.pop();
        max.push(i);

        while(Math.abs(nums[max[0]] - nums[min[0]]) > limit) {
            s++;
            if(min[0] < s) min.shift();
            if(max[0] < s) max.shift();
        }
        res = Math.max(res, i-s+1);
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int longestSubarray(int[] nums, int limit) {
        int res = 1;
        Deque<Integer> max = new ArrayDeque<>(),  min = new ArrayDeque<>();
        max.add(0);  min.add(0);   int s = 0;

        for(int i = 1; i < nums.length; i++) {
            while(min.size() > 0 && nums[min.peekLast()] > nums[i]) min.pollLast();
            min.offer(i);

            while(max.size() > 0 && nums[max.peekLast()] < nums[i]) max.pollLast();
            max.offer(i);

            while(min.size() > 0 && max.size() > 0 && Math.abs(nums[max.peek()] - nums[min.peek()]) > limit) {
                s++;
                if(min.peek() < s) min.poll();
                if(max.peek() < s) max.poll();
            }
            res = Math.max(res, i-s+1);
        }
        return res;
    }
}
```

