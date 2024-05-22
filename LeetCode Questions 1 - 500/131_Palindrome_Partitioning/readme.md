## 131. Palindrome Partitioning
#### Level: Medium


Given a string `s`, partition `s` such that every substring of the partition is a **palindrome**. Return *all possible palindrome partitioning of* `s`.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>

<br>   -->

```
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>

<br>   -->

```
Input: s = "a"
Output: [["a"]]
```

<br>

<!-- **Example 3:**

<img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>

<br>  

```
Input: root = [1,2,null,2,null,2], target = 2
Output: [1]
Explanation: Leaf nodes in green with value (target = 2) are removed at each step.
```

<br> -->

<br>

**Constraints:**
- `1 <= s.length <= 16`

- `s` contains only lowercase English letters.



<br>

**Topics** 

##### String, Dynamic Programming, Backtracking


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    solve(s, 0, [], res);
    return res;
};

function solve(str, ind, ans, res) {
    if(ind >= str.length) {
        res.push([...ans]);
        return;
    }

    for(let i = ind; i < str.length; i++) {
        let sub = str.substring(ind, i+1);
        if(check(sub)) {
            ans.push(sub);
            solve(str, i+1, ans, res);
            ans.pop();
        }
    }
}

function check(str) {
    let l = 0,  r = str.length-1;
    while(l < r) {
        if(str[l] != str[r]) return false;
        l++;  r--;
    }
    return true;
}
```

#### Java
```java
class Solution {
    List<List<String>> res = new ArrayList<>();

    public List<List<String>> partition(String s) {
        List<String> list = new ArrayList<>();
        solve(s, 0, list);
        return res;
    }

    public void solve(String str, int ind, List<String> ans) {
        if(ind >= str.length()) {
            res.add(ans);
            return;
        }

        for(int i = ind; i < str.length(); i++) {
            String sub = str.substring(ind, i+1);
            if(check(sub)) {
                ans.add(sub);
                solve(str, i+1, new ArrayList<>(ans));
                ans.remove(ans.size()-1);
            }
        }
    }

    public boolean check (String str) {
        int l = 0,  r = str.length()-1;
        while(l < r) {
            if(str.charAt(l) != str.charAt(r)) return false;
            l++;  r--;
        }
        return true;
    }
}
```

