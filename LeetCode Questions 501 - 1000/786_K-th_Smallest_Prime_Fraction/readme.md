## 786. K-th Smallest Prime Fraction
#### Level: Medium


You are given a sorted integer array ```arr``` containing ```1``` and **prime** numbers, where all the integers of ```arr``` are unique. You are also given an integer ```k```.

For every ```i``` and ```j``` where ```0 <= i < j < arr.length```, we consider the fraction ```arr[i] / arr[j]```.

Return *the* `kth` *smallest fraction* considered. Return your answer as an array of integers of size `2`, where `answer[0] == arr[i]` and `answer[1] == arr[j]`.


<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2022/10/02/drawio.png" width="500px"/>

<br>   -->

```
Input: arr = [1,2,3,5], k = 3
Output: [2,5]
Explanation: The fractions to be considered in sorted order are:
1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
The third fraction is 2/5.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/09/01/node2.jpg" width="300px"/>

<br>   -->

```
Input: arr = [1,7], k = 1
Output: [1,7]
```

<br><br>

**Constraints:**
- ```2 <= arr.length <= 1000```.

- ```1 <= arr[i] <= 3 * 10^4```

- ```arr[0] == 1```

- `arr[i]` is a **prime** number for `i > 0`.

- All the numbers of `arr` are **unique** and sorted in **strictly increasing** order.

- `1 <= k <= arr.length * (arr.length - 1) / 2`


<br>

**Topics** 

##### Array - Two Pointers - Binary Search - Sorting - Heap(Priority Queue)


<br>

### Solution
```java
class Data {
    double div;
    int f;
    int s;

    public Data(double div, int f, int s) {
        this.div = div;
        this.f = f;
        this.s = s;
    }
}

class Solution {
    public int[] kthSmallestPrimeFraction(int[] arr, int k) {
        List<Data> list = new ArrayList<>();
        
        for(int i = 0; i < arr.length; i++) {
            for(int j = i+1; j < arr.length; j++) {
                list.add(new Data((double)arr[i]/arr[j], arr[i], arr[j]));
            }
        }

        list.sort((a,b) -> a.div > b.div ? 1 : -1);
        
        int[] res = {list.get(k-1).f, list.get(k-1).s};
        return  res;
    }
}
```

