## 1518. Water Bottles
#### Level: Easy


There are `numBottles` water bottles that are initially full of water. You can exchange `numExchange` empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers `numBottles` and `numExchange`, *return the **maximum** number of water bottles you can drink.*

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2020/07/01/sample_1_1875.png" width="500px"/>  <br>  

```
Input: numBottles = 9, numExchange = 3
Output: 13
Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
Number of water bottles you can drink: 9 + 3 + 1 = 13.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2020/07/01/sample_2_1875.png" width="500px"/>  <br>  

```
Input: numBottles = 15, numExchange = 4
Output: 19
Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
Number of water bottles you can drink: 15 + 3 + 1 = 19.
```

<br>


<!-- **Example 3:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   

```
Input, Output, Explanation
```

<br>  -->


<br>

**Constraints:**
- `1 <= numBottles <= 100`

- `2 <= numExchange <= 100`


<br>

**Topics** 

##### Math, Simulation


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let res = 0;
    while(numBottles >= numExchange) {
        let temp = Math.floor(numBottles/numExchange);
        res += temp * numExchange;
        numBottles %= numExchange;
        numBottles += temp;
    }
    return res + numBottles;
};
```

#### Java
```java
class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        int res = 0;
        while(numBottles >= numExchange) {
            int temp = numBottles/numExchange;
            res += temp * numExchange;
            numBottles %= numExchange;
            numBottles += temp;
        }
        return res + numBottles;
    }
}
```

#### C++
```c++
class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        int res = 0;
        while(numBottles >= numExchange) {
            int temp = floor(numBottles/numExchange);
            res += temp * numExchange;
            numBottles %= numExchange;
            numBottles += temp;
        }
        return res + numBottles;
    }
};
```