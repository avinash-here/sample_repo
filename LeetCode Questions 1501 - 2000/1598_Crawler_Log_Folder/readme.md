## 1598. Crawler Log Folder
#### Level: Easy


The Leetcode file system keeps a log each time some user performs a change folder operation.

The operations are described below:

- `"../"` : Move to the parent folder of the current folder. (If you are already in the main folder, **remain in the same folder**).

- `"./"` : Remain in the same folder.

- `"x/"` : Move to the child folder named `x` (This folder is **guaranteed to always exist**).

You are given a list of strings `logs` where `logs[i]` is the operation performed by the user at the `ith` step.

The file system starts in the main folder, then the operations in `logs` are performed.

Return *the minimum number of operations needed to go back to the main folder after the change folder operations.*

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2020/09/09/sample_11_1957.png" width="560px"/>  <br>  

```
Input: logs = ["d1/","d2/","../","d21/","./"]
Output: 2
Explanation: Use this change folder operation "../" 2 times and go back to the main folder.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2020/09/09/sample_22_1957.png" width="560px"/>  <br>  

```
Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
Output: 3
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: logs = ["d1/","../","../","../"]
Output: 0
```

<br>


<br>

**Constraints:**

- `1 <= logs.length <= 10^3`

- `2 <= logs[i].length <= 10`

- `logs[i]` contains lowercase English letters, digits, `'.'`, and `'/'`.

- `logs[i]` follows the format described in the statement.

- Folder names consist of lowercase English letters and digits.  


<br>

**Topics** 

##### Array, String, Stack


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let arr = [];
    for(let i = 0; i < logs.length; i++) {
        if(logs[i] == "./") {}
        else if(logs[i] == "../") {
            if(arr.length > 0) arr.pop();
        }
        else { arr.push(logs[i]); }
    }
    return arr.length;    
};
```

#### Java
```java
class Solution {
    public int minOperations(String[] logs) {
        Stack<String> stk = new Stack<>();
        for(int i = 0; i < logs.length; i++) {
            if(logs[i].equals("./")) {}
            else if(logs[i].equals("../")) {
                if(stk.size() > 0) stk.pop();
            }
            else { stk.push(logs[i]); }
        }
        return stk.size();
    }
}
```