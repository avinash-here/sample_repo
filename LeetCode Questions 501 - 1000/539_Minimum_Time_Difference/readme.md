## 539. Minimum Time Difference
#### Level: Medium


Given a list of 24-hour clock time points in **"HH:MM"** format, return *the minimum **minutes** difference between any two time-points in the list.*

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: timePoints = ["23:59","00:00"]
Output: 1
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: timePoints = ["00:00","23:59","00:00"]
Output: 0
```

<br>


<!-- **Example 3:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>

```
Input, Output, Explanation
```

<br>   -->


<br>

**Constraints:**

- `2 <= timePoints.length <= 2 * 10^4`

- `timePoints[i]` is in the format **"HH:MM"**.  


<br>

**Topics** 

##### Array, Math, String, Sorting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let arr = [],  res = Infinity;
    for(let i = 0; i < timePoints.length; i++) {
        let strArr = timePoints[i].split(":");
        arr.push(Number(strArr[0]) * 60 + Number(strArr[1]));
    }

    arr.sort((a,b) => a-b);
    for(let i = 1; i < arr.length; i++) {
        res = Math.min(res, arr[i]-arr[i-1]);
    }
    res = Math.min(1440 + arr[0]-arr[arr.length-1], res);
    return res;
};
```

#### Java
```java
class Solution {
    public int findMinDifference(List<String> timePoints) {
        List<Integer> arr = new ArrayList<>();
        int res = Integer.MAX_VALUE;
        for(int i = 0; i < timePoints.size(); i++) {
            String[] str = timePoints.get(i).split(":");
            arr.add(Integer.parseInt(str[0])*60 + Integer.parseInt(str[1]));
        }

        arr.sort((a,b) -> a-b);
        for(int i = 1; i < arr.size(); i++) {
            res = Math.min(res, arr.get(i) - arr.get(i-1));
        }
        res = Math.min(1440 + arr.get(0)-arr.get(arr.size()-1), res);
        return res;
    }
}
```
