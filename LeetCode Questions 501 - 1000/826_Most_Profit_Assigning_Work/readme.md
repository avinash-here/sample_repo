## 826. Most Profit Assigning Work
#### Level: Medium


You have `n` jobs and `m` workers. You are given three arrays: `difficulty`, `profit`, and `worker` where:

- `difficulty[i]` and `profit[i]` are the difficulty and the profit of the `ith` job, and

- `worker[j]` is the ability of `jth` worker (i.e., the `jth` worker can only complete a job with difficulty at most `worker[j]`).

Every worker can be assigned **at most one job**, but one job can be **completed multiple times**.

- For example, if three workers attempt the same job that pays `$1`, then the total profit will be `$3`. If a worker cannot complete any job, their profit is `$0`.

Return the maximum profit we can achieve after assigning the workers to the jobs.

<br><br>


**Example 1:** 

```
Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
Output: 100
Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.
```

<br> 


**Example 2:**

```
Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
Output: 0
```

<br>

<br>


**Constraints:**
- `n == difficulty.length`

- `n == profit.length`

- `m == worker.length`

- `1 <= n, m <= 10^4`

- `1 <= difficulty[i], profit[i], worker[i] <= 10^5`

<br>


**Topics** 

##### Array, Two Pointers, Binary Search, Greedy, Sorting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let arr = [];
    for(let i = 0; i < profit.length; i++) arr.push([difficulty[i], profit[i]]);
    
    arr.sort((a,b) => b[1] - a[1]);
    worker.sort((a,b) => b-a);

    let res = 0,  j = 0;
    for(let i = 0; i < worker.length && j < arr.length; i++) {
        if(worker[i] >= arr[j][0]) res += arr[j][1];
        else { i--;  j++; }
    }
    return res;
};
```

#### Java
```java
class Solution {
    public int maxProfitAssignment(int[] difficulty, int[] profit, int[] worker) {
        List<List<Integer>> arr = new ArrayList<>();
        for(int i = 0; i < profit.length; i++) arr.add(Arrays.asList(profit[i], difficulty[i]));
        
        arr.sort((a,b) -> b.get(0) - a.get(0));
        Arrays.sort(worker);

        int res = 0,  j = 0;
        for(int i = worker.length-1; i >= 0 && j < arr.size(); i--) {
            if(worker[i] >= arr.get(j).get(1)) res += arr.get(j).get(0);
            else { i++;  j++; }
        }
        return res;
    }
}
```
