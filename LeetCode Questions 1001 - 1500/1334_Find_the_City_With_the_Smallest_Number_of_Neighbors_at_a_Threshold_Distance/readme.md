## 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
#### Level: Medium


There are `n` cities numbered from `0` to `n-1`. Given the array `edges` where `edges[i] = [fromi, toi, weighti]` represents a bidirectional and weighted edge between cities `fromi` and `toi`, and given the integer `distanceThreshold`.

Return the city with the smallest number of cities that are reachable through some path and whose distance is **at most** `distanceThreshold`, If there are multiple such cities, return the city with the greatest number.

Notice that the distance of a path connecting cities ***i*** and ***j*** is equal to the sum of the edges' weights along that path.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2020/01/16/find_the_city_01.png" width="300px"/>  <br>  

```
Input: n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
Output: 3
Explanation: The figure above describes the graph. 
The neighboring cities at a distanceThreshold = 4 for each city are:
City 0 -> [City 1, City 2] 
City 1 -> [City 0, City 2, City 3] 
City 2 -> [City 0, City 1, City 3] 
City 3 -> [City 1, City 2] 
Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.
```

<br> 


**Example 2:**

<img src="https://assets.leetcode.com/uploads/2020/01/16/find_the_city_02.png" width="320px"/>  <br>  

```
Input: n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2
Output: 0
Explanation: The figure above describes the graph. 
The neighboring cities at a distanceThreshold = 2 for each city are:
City 0 -> [City 1] 
City 1 -> [City 0, City 4] 
City 2 -> [City 3, City 4] 
City 3 -> [City 2, City 4]
City 4 -> [City 1, City 2, City 3] 
The city 0 has 1 neighboring city at a distanceThreshold = 2.
```

<br>


<!-- **Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>

```
Input, Output, Explanation
```

<br>    -->


<br>

**Constraints:**

- `2 <= n <= 100`

- `1 <= edges.length <= n * (n - 1) / 2`

- `edges[i].length == 3`

- `0 <= fromi < toi < n`

- `1 <= weighti, distanceThreshold <= 10^4`

- All pairs `(fromi, toi)` are distinct.  


<br>

**Topics** 

##### Dynamic Programming, Graph, Shortest Path


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    let graph = [];
    for(let i = 0; i < n; i++) graph.push(new Array(n).fill(-1));
    for(let i = 0; i < n; i++) graph[i][i] = 0;
    
    for(let i = 0; i < edges.length; i++) {
        let l = edges[i][0],  r = edges[i][1];
        graph[l][r] = edges[i][2];
        graph[r][l] = edges[i][2];
    }
    
    for(let via = 0; via < n; via++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(i == via || j == via || i == j) {}
                else {
                    if(graph[i][via] == -1 || graph[via][j] == -1) {}
                    else {
                        let temp = graph[i][via] + graph[via][j];
                        if(graph[i][j] == -1) graph[i][j] = temp;
                        else graph[i][j] = Math.min(graph[i][j], temp);
                    }
                }
            }
        }
    }
    
    let obj = {};
    for(let i = 0; i < n; i++) {
        obj[i] = 0;
        for(let j = 0; j < n; j++) {
            if(graph[i][j] <= distanceThreshold) obj[i]++;
        }
    }
    let res = 0,  min = obj[0];
    for(let key in obj) {
        if(obj[key] < min) {
            res = key;  min = obj[key];
        }
        else if(obj[key] == min) {
            res = Math.max(res, +key);
        }
    }
    return res;
};

```

#### Java
```java
class Solution {
    public int findTheCity(int n, int[][] edges, int distanceThreshold) {
        int[][] graph = new int[n][n];
        for(int i = 0; i < n; i++) Arrays.fill(graph[i], -1);
        for(int i = 0; i < n; i++) graph[i][i] = 0;
        
        for(int i = 0; i < edges.length; i++) {
            int l = edges[i][0],  r = edges[i][1];
            graph[l][r] = edges[i][2];
            graph[r][l] = edges[i][2];
        }
        
        for(int via = 0; via < n; via++) {
            for(int i = 0; i < n; i++) {
                for(int j = 0; j < n; j++) {
                    if(i == via || j == via || i == j) {}
                    else {
                        if(graph[i][via] == -1 || graph[via][j] == -1) {}
                        else {
                            int temp = graph[i][via] + graph[via][j];
                            if(graph[i][j] == -1) graph[i][j] = temp;
                            else graph[i][j] = Math.min(graph[i][j], temp);
                        }
                    }
                }
            }
        }
        
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < n; i++) {
            map.put(i, 0);
            for(int j = 0; j < n; j++) {
                if(graph[i][j] <= distanceThreshold) map.put(i, map.get(i)+1);
            }
        }
        int res = 0,  min = map.get(0);
        for(int key : map.keySet()) {
            if(map.get(key) < min) {
                res = key;  min = map.get(key);
            }
            else if(map.get(key) == min) {
                res = Math.max(res, key);
            }
        }
        return res;
    }
}
```
