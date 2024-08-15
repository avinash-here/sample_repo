## 860. Lemonade Change
#### Level: Easy


At a lemonade stand, each lemonade costs `$5`. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a `$5`, `$10`, or `$20` bill. You must provide the correct change to each customer so that the net transaction is that the customer pays `$5`.

Note that you do not have any change in hand at first.

Given an integer array `bills` where `bills[i]` is the bill the `ith` customer pays, return `true` *if you can provide every customer with the correct change, or* `false` *otherwise.*

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: bills = [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: bills = [5,5,10,10,20]
Output: false
Explanation: 
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can not give the change of $15 back because we only have two $10 bills.
Since not every customer received the correct change, the answer is false.
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

- `1 <= bills.length <= 10^5`

- `bills[i]` is either `5`, `10`, or `20`. 


<br>

**Topics** 

##### Array, Greedy


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    if(bills[0] != 5) return false;

    let fives = 0,  tens = 0;
    for(let i = 0; i < bills.length; i++) {
        if(bills[i] == 5) fives++;
        else if(bills[i] == 10) {
            if(fives > 0) {
                fives--;  tens++;
            }
            else return false;
        }
        else {
            if(tens > 0 && fives > 0) {
                tens--;  fives--; 
            }
            else if(fives > 2) fives -= 3;
            else return false;
        }
    }
    return true;
};
```

#### Java
```java
class Solution {
    public boolean lemonadeChange(int[] bills) {
        if(bills[0] != 5) return false;

        int fives = 0,  tens = 0;
        for(int i = 0; i < bills.length; i++) {
            if(bills[i] == 5) fives++;
            else if(bills[i] == 10) {
                if(fives > 0) {
                    fives--;  tens++;
                }
                else return false;
            }
            else {
                if(tens > 0 && fives > 0) {
                    tens--;  fives--; 
                }
                else if(fives > 2) fives -= 3;
                else return false;
            }
        }
        return true;
    }
}
```

#### C++
```c++
class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        if(bills[0] != 5) return false;

        int fives = 0,  tens = 0;
        for(int i = 0; i < bills.size(); i++) {
            if(bills[i] == 5) fives++;
            else if(bills[i] == 10) {
                if(fives > 0) {
                    fives--;  tens++;
                }
                else return false;
            }
            else {
                if(tens > 0 && fives > 0) {
                    tens--;  fives--; 
                }
                else if(fives > 2) fives -= 3;
                else return false;
            }
        }
        return true;
    }
};
```