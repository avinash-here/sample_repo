## 506. Relative Ranks
#### Level: Easy


You are given an integer array ```score``` of size ```n```, where ```score[i]``` is the score of the ```ith``` athlete in a competition. All the scores are guaranteed to be **unique**.

The athletes are **placed** based on their scores, where the ```1st``` place athlete has the highest score, the ```2nd``` place athlete has the ```2nd``` highest score, and so on. The placement of each athlete determines their rank:

- The ```1st``` place athlete's rank is ```"Gold Medal"```.
- The ```2nd``` place athlete's rank is ```"Silver Medal"```.
- The ```3rd``` place athlete's rank is ```"Bronze Medal"```.
- For the ```4th``` place to the ```nth``` place athlete, their rank is their placement number (i.e., the ```xth``` place athlete's rank is ```"x"```).

Return an array ```answer``` of size ```n``` where ```answer[i]``` is the **rank** of the ```ith``` athlete.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2022/10/02/drawio.png" width="500px"/>

<br>   -->

```
Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/09/01/node2.jpg" width="300px"/>

<br>   -->

```
Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].
```

<br><br>
**Constraints:**
- ```n == score.length```
- ```1 <= n <= 10^4```
- ```0 <= score[i] <= 10^6```
- All the values in ```score``` are **unique**.


<br>

**Topics** 

##### Array, Sorting, Heap (Priority Queue)


<br>

### Solution
```javascript
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let arr = [],  arr2 = [];

    for(let i = 0; i < score.length; i++) arr.push(score[i]);
    arr.sort((a,b) => (b-a));

    for(let i = 0; i < score.length; i++){
        if(i == 0) arr2.push("Gold Medal");
        else if(i == 1) arr2.push("Silver Medal");
        else if(i == 2) arr2.push("Bronze Medal");
        else arr2.push(i+1+"");
    }

    let ans = [];
    for(let i = 0; i < score.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(score[i] == arr[j]){
                ans.push(arr2[j]);
                break;
            }
        }
    }

    return ans;    
};
```

