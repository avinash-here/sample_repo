## 1552. Magnetic Force Between Two Balls
#### Level: Medium


In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has `n` empty baskets, the `ith` basket is at `position[i]`, Morty has `m` balls and needs to distribute the balls into the baskets such that the **minimum magnetic force** between any two balls is **maximum**.

Rick stated that magnetic force between two different balls at positions `x` and `y` is `|x - y|`.

Given the integer array `position` and the integer `m`. Return *the required force*.

<br><br>


**Example 1:** 

<img src="https://assets.leetcode.com/uploads/2020/08/11/q3v1.jpg" width="500px"/>  <br>  

```
Input: position = [1,2,3,4,7], m = 3
Output: 3
Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.
```

<br> 


**Example 2:**

<!-- <img src="put_image_link_here" width="400px"/>  <br>   -->

```
Input: position = [5,4,3,2,1,1000000000], m = 2
Output: 999999999
Explanation: We can use baskets 1 and 1000000000.
```

<br>


<br>

**Constraints:**
- `n == position.length`

- `2 <= n <= 10^5`

- `1 <= position[i] <= 10^9`

- All integers in `position` are **distinct**.

- `2 <= m <= position.length`


<br>

**Topics** 

##### Array, Binary Search, Sorting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a,b) => a-b);
    let l = 1,  r = position[position.length-1] - position[0];
    let res = -1;
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        let count = find(position, mid);
        if(count >= m) {
            res = mid;
            l = mid + 1;
        }
        else r = mid - 1;
    }
    return res;
};

function find(arr, target) {
    let count = 1,  last = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if((arr[i] - last) >= target) {
            count++;
            last = arr[i];
        }
    }
    return count;
}
```

#### Java
```java
class Solution {
    public int maxDistance(int[] position, int m) {
        Arrays.sort(position);
        int l = 1,  r = position[position.length-1] - position[0];
        int res = -1;
        while(l <= r) {
            int mid = l + (r-l)/2;
            int count = find(position, mid);
            if(count >= m) {
                res = mid;
                l = mid + 1;
            }
            else r = mid - 1;
        }
        return res;
    }

    public int find(int[] arr, int target) {
        int count = 1,  last = arr[0];
        for(int i = 1; i < arr.length; i++) {
            if((arr[i] - last) >= target) {
                count++;
                last = arr[i];
            }
        }
        return count;
    }
}
```

#### C++
```c++
class Solution {
public:
    int maxDistance(vector<int>& position, int m) {
        sort(position.begin(), position.end());
        int l = 1,  r = position[position.size()-1] - position[0];
        int res = -1;
        while(l <= r) {
            int mid = l + (r-l)/2;
            int count = find(position, mid);
            if(count >= m) {
                res = mid;
                l = mid + 1;
            }
            else r = mid - 1;
        }
        return res;
    }

    int find(vector<int> arr, int target) {
        int count = 1,  last = arr[0];
        for(int i = 1; i < arr.size(); i++) {
            if((arr[i] - last) >= target) {
                count++;
                last = arr[i];
            }
        }
        return count;
    }
};
    
```