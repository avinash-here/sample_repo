## 912. Sort an Array
#### Level: Medium


Given an array of integers `nums`, sort the array in ascending order and return it.

You must solve the problem **without using any built-in** functions in `O(nlog(n))` time complexity and with the smallest space complexity possible.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
```

<br>


<!-- **Example 3:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>   

```
Input, Output, Explanation
```

<br> -->


<br>

**Constraints:**

- `1 <= nums.length <= 5 * 10^4`

- `-5 * 10^4 <= nums[i] <= 5 * 10^4`  


<br>

**Topics** 

##### Array, Divide and Conquer, Sorting, Heap (Priority Queue), Merge Sort, Bucket Sort, Radix Sort, Counting Sort


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    sort(nums, 0, nums.length-1);
    return nums;
};

function sort(arr, l, r) {
    if(l < r) {
        let m = l + Math.floor((r-l)/2);
        sort(arr, l, m);
        sort(arr, m+1, r);
        merge(arr, l, m, r);
    }
}

function merge(arr, l, m, r) {
    let n1 = m-l+1,  n2 = r-m;
    let lt = [],  rt = [];

    for(let i = l; i <= m; i++) lt.push(arr[i]);
    for(let i = m+1; i <= r; i++) rt.push(arr[i]);

    let i = 0,  j = 0,  k = l;
    while(i < lt.length && j < rt.length) {
        if(lt[i] <= rt[j]) {
            arr[k] = lt[i];  i++;  k++;
        }
        else {
            arr[k] = rt[j];  j++;  k++;
        }
    }
    while(i < lt.length) {
        arr[k] = lt[i];  i++;  k++;
    }
    while(j < rt.length) {
        arr[k] = rt[j];  j++;  k++;
    }
}
```

#### Java
```java
class Solution {
    public int[] sortArray(int[] nums) {
        sort(nums, 0, nums.length-1);
        return nums;
    }

    void sort(int[] arr, int l, int r) {
        if(l < r) {
            int m = l + (r-l)/2;
            sort(arr, l, m);
            sort(arr, m+1, r);
            merge(arr, l, m, r);
        }
    }

    void merge(int[] arr, int l, int m, int r) {
        int n1 = m-l+1,  n2 = r-m;
        int[] lt = new int[n1],  rt = new int[n2];

        for(int i = l; i <= m; i++) lt[i-l] = arr[i];
        for(int i = m+1; i <= r; i++) rt[i-m-1] = arr[i];

        int i = 0,  j = 0,  k = l;
        while(i < lt.length && j < rt.length) {
            if(lt[i] <= rt[j]) {
                arr[k] = lt[i];  i++;  k++;
            }
            else {
                arr[k] = rt[j];  j++;  k++;
            }
        }
        while(i < lt.length) {
            arr[k] = lt[i];  i++;  k++;
        }
        while(j < rt.length) {
            arr[k] = rt[j];  j++;  k++;
        }
    }
}
```

#### C++
```c++
class Solution {
public:
    void merge(vector<int>& arr, int l, int m, int r) {
        int n1 = m-l+1,  n2 = r-m;
        vector<int> lt, rt;
        
        for(int i = 0; i < n1; i++) lt.push_back(arr[i+l]);
        for(int i = 0; i < n2; i++) rt.push_back(arr[m+1+i]);
        
        int i = 0,  j = 0,  k = l;
        while(i < lt.size() && j < rt.size()) {
            if(lt[i] <= rt[j]) {
                arr[k] = lt[i];  i++;  k++;
            }
            else {
                arr[k] = rt[j];  j++;  k++;
            }
        }
        while(i < lt.size()) {
            arr[k] = lt[i];  i++;  k++;
        }
        while(j < rt.size()) {
            arr[k] = rt[j];  j++;  k++;
        } 
    }
    
    void sort(vector<int>& arr, int l, int r) {
        if(l < r) {
            int m = l + (r-l)/2;
            sort(arr, l, m);
            sort(arr, m+1, r);
            merge(arr, l, m, r);
        }
    }
    
    vector<int> sortArray(vector<int>& nums) {
        sort(nums, 0, nums.size()-1);
        return nums;
    }
};
```