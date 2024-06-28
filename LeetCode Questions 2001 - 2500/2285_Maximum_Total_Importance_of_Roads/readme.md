## 2285. Maximum Total Importance of Roads
#### Level: Medium


You are given an integer `n` denoting the number of cities in a country. The cities are numbered from `0` to `n - 1`.

You are also given a 2D integer array `roads` where `roads[i] = [ai, bi]` denotes that there exists a **bidirectional** road connecting cities `ai` and `bi`.

You need to assign each city with an integer value from `1` to `n`, where each value can only be used **once**. The **importance** of a road is then defined as the **sum** of the values of the two cities it connects.

Return *the **maximum total importance** of all roads possible after assigning the values optimally*.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2022/04/07/ex1drawio.png" width="300px"/>  <br>  

```
Input: n = 5, roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
Output: 43
Explanation: The figure above shows the country and the assigned values of [2,4,5,3,1].
- The road (0,1) has an importance of 2 + 4 = 6.
- The road (1,2) has an importance of 4 + 5 = 9.
- The road (2,3) has an importance of 5 + 3 = 8.
- The road (0,2) has an importance of 2 + 5 = 7.
- The road (1,3) has an importance of 4 + 3 = 7.
- The road (2,4) has an importance of 5 + 1 = 6.
The total importance of all roads is 6 + 9 + 8 + 7 + 7 + 6 = 43.
It can be shown that we cannot obtain a greater total importance than 43.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2022/04/07/ex2drawio.png" width="300px"/>  <br>  

```
Input: n = 5, roads = [[0,3],[2,4],[1,3]]
Output: 20
Explanation: The figure above shows the country and the assigned values of [4,3,2,5,1].
- The road (0,3) has an importance of 4 + 5 = 9.
- The road (2,4) has an importance of 2 + 1 = 3.
- The road (1,3) has an importance of 3 + 5 = 8.
The total importance of all roads is 9 + 3 + 8 = 20.
It can be shown that we cannot obtain a greater total importance than 20.
```

<br>



<br>

**Constraints:**
- `2 <= n <= 5 * 10^4`

- `1 <= roads.length <= 5 * 10^4`

- `roads[i].length == 2`

- `0 <= ai, bi <= n - 1`

- `ai != bi`

- There are no duplicate roads. 


<br>

**Topics** 

##### Greedy, Graph, Sorting, Heap (Priority Queue)


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    let obj = {};
    for(let el of roads) {
        obj[el[0]] = obj[el[0]] + 1 || 1;
        obj[el[1]] = obj[el[1]] + 1 || 1
    }
    let vals = Object.values(obj).sort((a,b) => b-a);

    let res = 0;
    for(let i = 0; i < vals.length; i++) res += vals[i] * (n-i);
    return res;
};
```

#### Java
```java
class Solution {
    public long maximumImportance(int n, int[][] roads) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < roads.length; i++) {
            int t1 = roads[i][0],  t2 = roads[i][1];
            map.put(roads[i][0], map.containsKey(t1) ? map.get(t1)+1 : 1);
            map.put(roads[i][1], map.containsKey(t2) ? map.get(t2)+1 : 1);
        }
        long[] arr = new long[n];
        for(int i : map.keySet()) arr[i] = map.get(i);        
        Arrays.sort(arr);

        long res = 0;
        for(int i = arr.length-1; i >= 0 ; i--) res += arr[i] * (i+1);
        return res;
    }
}
```
