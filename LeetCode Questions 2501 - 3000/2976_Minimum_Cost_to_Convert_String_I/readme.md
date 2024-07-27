## 2976. Minimum Cost to Convert String I
#### Level: Medium


You are given two **0-indexed** strings `source` and `target`, both of length `n` and consisting of **lowercase** English letters. You are also given two **0-indexed** character arrays `original` and `changed`, and an integer array `cost`, where `cost[i]` represents the cost of changing the character `original[i]` to the character `changed[i]`.

You start with the string `source`. In one operation, you can pick a character `x` from the string and change it to the character `y` at a cost of `z` **if** there exists **any** index `j` such that `cost[j] == z`, `original[j] == x`, and `changed[j] == y`.

Return *the **minimum** cost to convert the string* `source` *to the string* `target` *using **any** number of operations. If it is impossible to convert* `source` *to* `target`*, return* `-1`.

**Note** that there may exist indices `i`, `j` such that `original[j] == original[i]` and `changed[j] == changed[i]`.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]
Output: 28
Explanation: To convert the string "abcd" to string "acbe":
- Change value at index 1 from 'b' to 'c' at a cost of 5.
- Change value at index 2 from 'c' to 'e' at a cost of 1.
- Change value at index 2 from 'e' to 'b' at a cost of 2.
- Change value at index 3 from 'd' to 'e' at a cost of 20.
The total cost incurred is 5 + 1 + 2 + 20 = 28.
It can be shown that this is the minimum possible cost.
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: source = "aaaa", target = "bbbb", original = ["a","c"], changed = ["c","b"], cost = [1,2]
Output: 12
Explanation: To change the character 'a' to 'b' change the character 'a' to 'c' at a cost of 1, followed by changing the character 'c' to 'b' at a cost of 2, for a total cost of 1 + 2 = 3. To change all occurrences of 'a' to 'b', a total cost of 3 * 4 = 12 is incurred.
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   -->

```
Input: source = "abcd", target = "abce", original = ["a"], changed = ["e"], cost = [10000]
Output: -1
Explanation: It is impossible to convert source to target because the value at index 3 cannot be changed from 'd' to 'e'.
```

<br>


<br>

**Constraints:**

- `1 <= source.length == target.length <= 10^5`

- `source`, `target` consist of lowercase English letters.

- `1 <= cost.length == original.length == changed.length <= 2000`

- `original[i]`, `changed[i]` are lowercase English letters.

- `1 <= cost[i] <= 10^6`

- `original[i] != changed[i]`  


<br>

**Topics** 

##### Array, String, Graph, Shortest Path


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    let obj = {}, str = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < 26; i++) obj[str[i]] = i;
    
    let mat = [];
    for(let i = 0; i < 26; i++) mat.push(new Array(26).fill(-1));
    for(let i = 0; i < 26; i++) mat[i][i] = 0;

    for(let i = 0; i < original.length; i++) {
        let from = original[i],  to = changed[i],  c = cost[i];
        from = obj[from];  to = obj[to];

        if(mat[from][to] == -1) mat[from][to] = c;
        else mat[from][to] = Math.min(mat[from][to], c);
    }

    for(let i = 0; i < 26; i++) {
        for(let j = 0; j < 26; j++) {
            for(let k = 0; k < 26; k++) {
                if(j == i || k == i) {}
                else if(mat[j][obj[str[i]]] == -1) {}
                else if(mat[obj[str[i]]][k] == -1) {}
                else {
                    let temp = mat[j][obj[str[i]]] + mat[obj[str[i]]][k];
                    if(mat[j][k] == -1) mat[j][k] = temp;
                    else mat[j][k] = Math.min(mat[j][k], temp);
                }
            }
        }
    }

    let res = 0;
    for(let i = 0; i < source.length; i++) {
        if(source[i] != target[i]) {
            let l = obj[source[i]], r = obj[target[i]];
            if(mat[l][r] == -1) return -1;
            else res += mat[l][r];
        }
    }
    return res;    
};
```

#### Java
```java
class Solution {
    public long minimumCost(String source, String target, char[] original, char[] changed, int[] cost) {
        Map<Character, Integer> map = new HashMap<>(); 
        String str = "abcdefghijklmnopqrstuvwxyz";
        for(int i = 0; i < 26; i++) map.put(str.charAt(i), i);
        
        int[][] mat = new int[26][26];        
        for(int i = 0; i < 26; i++) Arrays.fill(mat[i], -1);
        for(int i = 0; i < 26; i++) mat[i][i] = 0;

        for(int i = 0; i < original.length; i++) {
            char from = original[i],  to = changed[i];
            int f = map.get(from),  t = map.get(to);

            if(mat[f][t] == -1) mat[f][t] = cost[i];
            else mat[f][t] = Math.min(mat[f][t], cost[i]);
        }

        for(int i = 0; i < 26; i++) {
            for(int j = 0; j < 26; j++) {
                for(int k = 0; k < 26; k++) {
                    if(j == i || k == i) {}
                    else if(mat[j][map.get(str.charAt(i))] == -1) {}
                    else if(mat[map.get(str.charAt(i))][k] == -1) {}
                    else {
                        int temp = mat[j][map.get(str.charAt(i))] + mat[map.get(str.charAt(i))][k];
                        if(mat[j][k] == -1) mat[j][k] = temp;
                        else mat[j][k] = Math.min(mat[j][k], temp);
                    }
                }
            }
        }

        long res = 0;
        for(int i = 0; i < source.length(); i++) {
            if(source.charAt(i) != target.charAt(i)) {
                int l = map.get(source.charAt(i)),  r = map.get(target.charAt(i));
                if(mat[l][r] == -1) return -1;
                else res += mat[l][r];
            }
        }
        return res;    
    }
}
```
