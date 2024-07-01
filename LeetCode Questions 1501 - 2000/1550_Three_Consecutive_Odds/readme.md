## 1550. Three Consecutive Odds
#### Level: Easy


Given an integer array `arr`, return `true` if there are three consecutive odd numbers in the array. Otherwise, return `false`.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
```

<br>


<!-- **Example 3:**

<img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>

```
Input, Output, Explanation
```

<br>  -->


<br>

**Constraints:**
- `1 <= arr.length <= 1000`

- `1 <= arr[i] <= 1000`


<br>

**Topics** 

##### Array


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for(let i = 1; i < arr.length-1; i++) {
        if(arr[i] % 2 != 0 && arr[i-1] % 2 != 0 && arr[i+1] % 2 != 0)
            return true;
    }
    return false;
};
```

#### Java
```java
class Solution {
    public boolean threeConsecutiveOdds(int[] arr) {
        for(int i = 1; i < arr.length-1; i++) {
            if(arr[i] % 2 != 0 && arr[i-1] % 2 != 0 && arr[i+1] % 2 != 0)
                return true;
        }
        return false;
    }
}
```

#### C++
```c++
class Solution {
public:
    bool threeConsecutiveOdds(vector<int>& arr) {
        for(int i = 1; i < arr.size()-1; i++) {
            if(arr[i] % 2 != 0 && arr[i-1] % 2 != 0 && arr[i+1] % 2 != 0) 
                return true;
        }
        return false;
    }
};
```

#### Python 
```python
class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        for i in range(1, len(arr)-1) :
            if arr[i] % 2 != 0 and arr[i-1] % 2 != 0 and arr[i+1] % 2 != 0 :
                return True;
        return False;
```