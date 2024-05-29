## 1404. Number of Steps to Reduce a Number in Binary Representation to One
#### Level: Medium


Given the binary representation of an integer as a string `s`, return *the number of steps to reduce it to* `1` *under the following rules*:

- If the current number is even, you have to divide it by `2`.

- If the current number is odd, you have to add `1` to it.

It is guaranteed that you can always reach one for all test cases.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree1.jpg" width="400px"/>

<br>   -->

```
Input: s = "1101"
Output: 6
Explanation: "1101" corressponds to number 13 in their decimal representation.
Step 1) 13 is odd, add 1 and obtain 14. 
Step 2) 14 is even, divide by 2 and obtain 7.
Step 3) 7 is odd, add 1 and obtain 8.
Step 4) 8 is even, divide by 2 and obtain 4.  
Step 5) 4 is even, divide by 2 and obtain 2. 
Step 6) 2 is even, divide by 2 and obtain 1.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree2.jpg" width="400px"/>

<br>   -->

```
Input: s = "10"
Output: 1
Explanation: "10" corressponds to number 2 in their decimal representation.
Step 1) 2 is even, divide by 2 and obtain 1. 
```

<br>

**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree3.jpg" width="400px"/>

<br>   -->

```
Input: s = "1"
Output: 0
```

<br>

<br>

**Constraints:**
- `1 <= s.length <= 500`

- `s` consists of characters '0' or '1'

- `s[0] == '1'`




<br>

**Topics** 

##### String, Bit Manipulation


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let arr = s.split(''), count = 0;
    while(arr.length > 1) {
        let flag = true;
        if(arr[arr.length-1] == 0) { arr.pop(); flag = false; }
        else {
            for(let i = arr.length-1; i >= 0; i--) {
                if(arr[i] == 0) { arr[i] = 1; flag = false; break; }
                else arr[i] = 0;
            }
        }
        count++;
        if(flag) arr.unshift(1);
    }
    return count;
};
```

#### Java
```java
class Solution {
    public int numSteps(String s) {
        LinkedList<Integer> arr = new LinkedList<>();  int count = 0;
        for(int i = 0; i < s.length(); i++) arr.add(Integer.parseInt(s.charAt(i)+""));
        
        while(arr.size() > 1) {
            boolean flag = true;
            if(arr.getLast() == 0)  { arr.removeLast();  flag = false; }
            else {
                for(int i = arr.size()-1; i >= 0; i--) {
                    if(arr.get(i) == 0) { arr.set(i, 1);  flag = false;  break; }
                    else arr.set(i, 0);
                }
            }
            count++;
            if(flag) arr.addFirst(1);
        }
        return count;
    }
}
```

