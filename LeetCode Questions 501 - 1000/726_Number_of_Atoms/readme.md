## 726. Number of Atoms
#### Level: Hard


Given a string `formula` representing a chemical formula, return *the count of each atom*.

The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

One or more digits representing that element's count may follow if the count is greater than `1`. If the count is `1`, no digits will follow.

- For example, `"H2O"` and `"H2O2"` are possible, but `"H1O2"` is impossible.

Two formulas are concatenated together to produce another formula.

- For example, `"H2O2He3Mg4"` is also a formula.

A formula placed in parentheses, and a count (optionally added) is also a formula.

- For example, `"(H2O2)"` and `"(H2O2)3"` are formulas.

Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than `1`), followed by the second name (in sorted order), followed by its count (if that count is more than `1`), and so on.

The test cases are generated so that all the values in the output fit in a **32-bit** integer.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: formula = "H2O"
Output: "H2O"
Explanation: The count of elements are {'H': 2, 'O': 1}.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: formula = "K4(ON(SO3)2)2"
Output: "K4N2O14S4"
Explanation: The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
```

<br>


<br>

**Constraints:**
- `1 <= formula.length <= 1000`

- `formula` consists of English letters, digits, `'('`, and `')'`.

- `formula` is always valid.  


<br>

**Topics** 

##### Hash Table, String, Stack, Sorting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    let stk = [];
    for(let i = 0; i < formula.length; i++) {
        let ch = formula[i];
        if(ch >= 'A' && ch <= 'Z') {
            let name = ch,  nxt_ch = formula[i+1];
            if(nxt_ch >= 'a' && nxt_ch <= 'z') {
                i++;  stk.push(name + nxt_ch);
            }
            else stk.push(name);
            
            nxt_ch = formula[i+1];
            let num = "";
            while(nxt_ch >= '0' && nxt_ch <= '9') {
                num += nxt_ch;
                i++;
                nxt_ch = formula[i+1];
            }                        
            stk.push(num == "" ? 1 : Number(num));
        }
        else if(ch == '(')  stk.push('(');
        else if(ch == ')') {
            nxt_ch = formula[i+1];
            let num = "";
            while(nxt_ch >= '0' && nxt_ch <= '9') {
                num += nxt_ch;
                i++;
                nxt_ch = formula[i+1];
            }

            num = num == "" ? 1 : Number(num);
            let x = stk.length-1;
            while(true) {
                if(typeof(stk[x]) == "number") {
                    stk[x] = stk[x]*num;
                }
                else if(stk[x] == '(') {
                    stk[x] = "";
                    break;
                }
                x--;
            }            
        }
    }

    let obj = {};
    for(let i = 0; i < stk.length; i++) {
        if(stk[i] == "") continue;
        if(obj[stk[i]]) obj[stk[i]] += stk[i+1];
        else obj[stk[i]] = stk[i+1];   i++;
    }
    let keys = Object.keys(obj).sort();
    let res = "";
    for(let key of keys) {
        res += key;   if(obj[key] > 1) res += obj[key];
    }
    return res;
}
```

#### Java
```java
class Solution {
    Integer ind = 0;

    public String countOfAtoms(String formula) {
        Map<String, Integer> map = solve(formula);
        Map<String, Integer> sorted = new TreeMap<>(map);
        StringBuilder res = new StringBuilder();
        for(String s : sorted.keySet()) {
            res.append(s);
            if(sorted.get(s) > 1) res.append(sorted.get(s));
        }
        return res.toString();        
    }

    Map<String, Integer> solve(String formula) {
        Map<String, Integer> map = new HashMap<>();
        String name = new String(),  num = new String();

        while(ind < formula.length()) {
            char ch = formula.charAt(ind);
            if(Character.isUpperCase(ch)) {  // Uppercase letters
                if(!name.isEmpty()) {
                    if(num.isEmpty()) {
                        map.put(name, map.getOrDefault(name, 0)+1);
                    }
                    else map.put(name, map.getOrDefault(name, 0)+Integer.parseInt(num));
                }
                name = String.valueOf(ch);  
                num = "";   
                ind++;
            }
            else if(Character.isLowerCase(ch)) {  // Lowercase letters
                name += formula.charAt(ind);
                ind++;
            }
            else if(Character.isDigit(ch)) {  // digits
                num += formula.charAt(ind);
                ind++;
            }
            else if(ch == '(') {   // (
                ind++;
                Map<String, Integer> nested = solve(formula);
                for(String s : nested.keySet()) {
                    map.put(s, map.getOrDefault(s, 0) + nested.get(s));
                }
            } 
            else if(ch == ')') {   // )
                if(!name.isEmpty()) {
                    if(num.isEmpty()) {
                        map.put(name, map.getOrDefault(name, 0)+1);
                    }
                    else map.put(name, map.getOrDefault(name, 0)+Integer.parseInt(num));
                }
                ind++;
                StringBuilder sb = new StringBuilder();
                while(ind < formula.length() && 
                Character.isDigit(formula.charAt(ind))) {
                    sb.append(formula.charAt(ind));
                    ind++;
                }
                if(sb.length() > 0) {
                    int n = Integer.parseInt(sb.toString());
                    for(String s : map.keySet()) {
                        map.put(s, map.get(s) * n);
                    }
                }                
                
                return map;
            }
            
        }
        if(!name.isEmpty()) {
            if(num.isEmpty()) {
                map.put(name, map.getOrDefault(name, 0)+1);
            }
            else map.put(name, map.getOrDefault(name, 0)+Integer.parseInt(num));
        }

        return map;
    }
}
```
