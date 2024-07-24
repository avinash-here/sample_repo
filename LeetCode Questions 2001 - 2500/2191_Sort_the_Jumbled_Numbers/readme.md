## 2191. Sort the Jumbled Numbers
#### Level: Medium


You are given a **0-indexed** integer array `mapping` which represents the mapping rule of a shuffled decimal system. `mapping[i] = j` means digit `i` should be mapped to digit `j` in this system.

The **mapped value** of an integer is the new integer obtained by replacing each occurrence of digit `i` in the integer with `mapping[i]` for all `0 <= i <= 9`.

You are also given another integer array `nums`. Return *the array* `nums` *sorted in **non-decreasing order** based on the **mapped values** of its elements.*

**Notes:**

- Elements with the same mapped values should appear in the **same relative order** as in the input.
- The elements of `nums` should only be sorted based on their mapped values and **not be replaced** by them.

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input: mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]
Output: [338,38,991]
Explanation: 
Map the number 991 as follows:
1. mapping[9] = 6, so all occurrences of the digit 9 will become 6.
2. mapping[1] = 9, so all occurrences of the digit 1 will become 9.
Therefore, the mapped value of 991 is 669.
338 maps to 007, or 7 after removing the leading zeros.
38 maps to 07, which is also 7 after removing leading zeros.
Since 338 and 38 share the same mapped value, they should remain in the same relative order, so 338 comes before 38.
Thus, the sorted array is [338,38,991].
```

<br> 


**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>   -->

```
Input: mapping = [0,1,2,3,4,5,6,7,8,9], nums = [789,456,123]
Output: [123,456,789]
Explanation: 789 maps to 789, 456 maps to 456, and 123 maps to 123. Thus, the sorted array is [123,456,789].
```

<br>


<!-- **Example 3:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br>  

```
Input, Output, Explanation
```

<br>   -->


<br>

**Constraints:**

- `mapping.length == 10`

- `0 <= mapping[i] <= 9`

- All the values of `mapping[i]` are **unique**.

- `1 <= nums.length <= 3 * 10^4`

- `0 <= nums[i] < 10^9`



<br>

**Topics** 

##### Array, Sorting


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    let arr = [];
    for(let i = 0; i < nums.length; i++) {
        let cur = "",  num = nums[i];
        if(num < 10) cur = mapping[num];
        else {        
            while(num > 0) {
                let rem = num % 10;
                cur = mapping[rem] + cur;
                num = Math.floor(num/10);
            }
        }
        arr.push(Number(cur));
    }

    sort(arr, nums, 0, arr.length-1);
    return nums;
};

function sort(arr, nums, l, r) {
    if (l < r) {
        let m = l + Math.floor((r - l) / 2);
        sort(arr, nums, l, m);
        sort(arr, nums, m+1, r);
        merge(arr, nums, l, m, r);
    }
}

function merge(arr, nums, l, m, r) {
    let n1 = m-l+1,  n2 = r-m;

    let L = [],  R = [], LN = [],  RN = [];

    for (let i = 0; i < n1; i++) {
        L.push(arr[l+i]);
        LN.push(nums[l+i]);
    }
    for (let j = 0; j < n2; j++) {
        R.push(arr[m+1+j]);
        RN.push(nums[m+1+j]);
    }

    let i = 0,  j = 0,  k = l;
    while (i < n1 && j < n2) {
        if(L[i] <= R[j]) {
            arr[k] = L[i];
            nums[k] = LN[i];
            i++;
        }
        else {
            arr[k] = R[j];  
            nums[k] = RN[j];
            j++;
        }
        k++;
    }
    while(i < n1) {
        arr[k] = L[i];
        nums[k] = LN[i];
        i++;  k++;
    }
    while(j < n2) {
        arr[k] = R[j];
        nums[k] = RN[j];
        j++;  k++;
    }
}
```

#### Java
```java
class Solution {
    public int[] sortJumbled(int[] mapping, int[] nums) {
        int[] arr = new int[nums.length];
        for(int i = 0; i < nums.length; i++) {
            String cur = "";  int num = nums[i];
            if(num < 10) cur = mapping[num]+"";
            else {        
                while(num > 0) {
                    int rem = num % 10;
                    cur = mapping[rem] + cur;
                    num = (int)Math.floor(num/10);
                }
            }
            arr[i] = Integer.parseInt(cur);
        }

        sort(arr, nums, 0, arr.length-1);
        return nums;    
    }

    void sort(int[] arr, int[] nums, int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;
            sort(arr, nums, l, m);
            sort(arr, nums, m+1, r);
            merge(arr, nums, l, m, r);
        }
    }

    void merge(int[] arr, int[] nums, int l, int m, int r) {
        int n1 = m-l+1,  n2 = r-m;

        int[] L = new int[n1],  R = new int[n2];
        int[] LN = new int[n1],  RN = new int[n2];

        for (int i = 0; i < n1; i++) {
            L[i] = arr[l+i];  LN[i] = nums[l+i];
        }
        for (int j = 0; j < n2; j++) {
            R[j] = arr[m+1+j];  RN[j] = nums[m+1+j];
        }

        int i = 0,  j = 0,  k = l;
        while (i < n1 && j < n2) {
            if(L[i] <= R[j]) {
                arr[k] = L[i];
                nums[k] = LN[i];
                i++;
            }
            else {
                arr[k] = R[j];  
                nums[k] = RN[j];
                j++;
            }
            k++;
        }
        while(i < n1) {
            arr[k] = L[i];
            nums[k] = LN[i];
            i++;  k++;
        }
        while(j < n2) {
            arr[k] = R[j];
            nums[k] = RN[j];
            j++;  k++;
        }
    }
}
```
