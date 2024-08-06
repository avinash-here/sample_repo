## 303. Range Sum Query - Immutable
#### Level: Easy


Given an integer array `nums`, handle multiple queries of the following type:
1. Calculate the **sum** of the elements of `nums` between indices `left` and `right` **inclusive** where `left <= right`.

Implement the `NumArray` class:

- `NumArray(int[] nums)` Initializes the object with the integer array `nums`.

- `int sumRange(int left, int right)` Returns the **sum** of the elements of `nums` between indices `left` and `right` **inclusive** (i.e. `nums[left] + nums[left + 1] + ... + nums[right]`).

<br><br>


**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png" width="560px"/>  <br>   -->

```
Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
```

<br> 


<!-- **Example 2:** 

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png" width="420px"/>  <br>

```
Input, Output, and Explanation
```

<br>


**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png" width="540px"/>  <br> 

```
Input, Output, Explanation
```

<br>  -->


<br>

**Constraints:**

- `1 <= nums.length <= 10^4`

- `-10^5 <= nums[i] <= 10^5`

- `0 <= left <= right < nums.length`

- At most `10^4` calls will be made to `sumRange`.  


<br>

**Topics** 

##### Array, Design, Prefix Sum


<br>

### Solutions

#### JavaScript
```javascript
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;   this.arr = [0];  
    
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];   this.arr.push(sum);
    } 
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.arr[right+1] - this.arr[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
```

#### Java
```java
class NumArray {
    int[] arr;
    public NumArray(int[] nums) {
        arr = new int[nums.length+1];
        int sum = 0;
        for(int i = 0; i < nums.length; i++) {
            sum += nums[i];
            arr[i+1] = sum;
        }
    }
    
    public int sumRange(int left, int right) {
        return arr[right+1] - arr[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */
```

#### C++
```c++
class NumArray {
public:
    vector<int> arr;
    NumArray(vector<int>& nums) {
        int sum = 0;  arr.push_back(0);
        for(int i = 0; i < nums.size(); i++) {
            sum += nums[i];
            arr.push_back(sum);
        }
    }
    
    int sumRange(int left, int right) {
        return arr[right+1] - arr[left];
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(left,right);
 */
```