## 1395. Count Number of Teams
#### Level: Medium


There are `n` soldiers standing in a line. Each soldier is assigned a **unique** `rating` value.

You have to form a team of 3 soldiers amongst them under the following rules:

- Choose 3 soldiers with index (`i`, `j`, `k`) with rating (`rating[i]`, `rating[j]`, `rating[k]`).

- A team is valid if: (`rating[i] < rating[j] < rating[k]`) or (`rating[i] > rating[j] > rating[k]`) where (`0 <= i < j < k < n`).

Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: rating = [2,1,3]
Output: 0
Explanation: We can't form any team given the conditions.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: rating = [1,2,3,4]
Output: 4
```

<br>


<br>

**Constraints:**

- `n == rating.length`

- `3 <= n <= 1000`

- `1 <= rating[i] <= 10^5`

- All the integers in `rating` are **unique**.  


<br>

**Topics** 

##### Array, Dynamic Programming, Binary Indexed Tree


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let res = 0;

    for(let i = 1; i < rating.length-1; i++) {
        let lS = 0,  rS = 0,  lG = 0,  rG = 0;
        for(let j = i-1; j >= 0; j--) {
            if(rating[j] > rating[i]) lG++;
            if(rating[j] < rating[i]) lS++;
        }
        for(let j = i+1; j < rating.length; j++) {
            if(rating[j] > rating[i]) rG++;
            if(rating[j] < rating[i]) rS++;
        }
        res += lS*rG;  res += lG*rS;
    }
    return res;    
};
```

#### Java
```java
class Solution {
    public int numTeams(int[] rating) {
        int res = 0;

        for(int i = 1; i < rating.length-1; i++) {
            int lS = 0,  rS = 0,  lG = 0,  rG = 0;
            for(int j = i-1; j >= 0; j--) {
                if(rating[j] > rating[i]) lG++;
                if(rating[j] < rating[i]) lS++;
            }
            for(int j = i+1; j < rating.length; j++) {
                if(rating[j] > rating[i]) rG++;
                if(rating[j] < rating[i]) rS++;
            }
            res += lS*rG;  res += lG*rS;
        }
        return res; 
    }
}
```

#### C++
```c++
class Solution {
public:
    int numTeams(vector<int>& rating) {
        int res = 0;

        for(int i = 1; i < rating.size()-1; i++) {
            int lS = 0,  rS = 0,  lG = 0,  rG = 0;
            for(int j = i-1; j >= 0; j--) {
                if(rating[j] > rating[i]) lG++;
                if(rating[j] < rating[i]) lS++;
            }
            for(int j = i+1; j < rating.size(); j++) {
                if(rating[j] > rating[i]) rG++;
                if(rating[j] < rating[i]) rS++;
            }
            res += lS*rG;  res += lG*rS;
        }
        return res; 
    }
};
```