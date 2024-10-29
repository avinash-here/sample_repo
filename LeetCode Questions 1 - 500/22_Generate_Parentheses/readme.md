## 22. Generate Parentheses
#### Level: Medium


Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses.*

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: n = 1
Output: ["()"]
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

- `1 <= n <= 8`  


<br>

**Topics** 

##### String, Dynamic Programming, Backtracking


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let o = n,  c = n;
    let res = [];
    generate(o, c, res, "");
    return res;
};

function generate(o, c, res, str) {
    if(o < 0 || c < 0) return;
    if(o == 0 && c == 0) {
        res.push(str);  return;
    }
    generate(o-1, c, res, str+'(');
    if(o < c) generate(o, c-1, res, str+')');
}
```

#### Java
```java
class Solution {
    public List<String> generateParenthesis(int n) {
        int o = n,  c = n;
        List<String> res = new ArrayList<>();
        generate(o, c, res, "");
        return res;
    }

    void generate(int o, int c, List<String> res, String str) {
        if(o < 0 || c < 0) return;
        if(o == 0 && c == 0) {
            res.add(str);  return;
        }
        generate(o-1, c, res, str+"(");
        if(o < c) generate(o, c-1, res, str+")");
    }
}
```

#### C++
```c++
class Solution {
public:
    void generate(int o, int c, vector<string> &res, string s) {
        if(o < 0 || c < 0) return;
        if(o == 0 && c == 0) {
            res.push_back(s);  return;
        }
        generate(o-1, c, res, s+"(");
        if(o < c) generate(o, c-1, res, s+")");
    }

    vector<string> generateParenthesis(int n) {
        vector<string> res;
        int o = n,  c = n;
        generate(o, c, res, "");
        return res;
    }
};
```