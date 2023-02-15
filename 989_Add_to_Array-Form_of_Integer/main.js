/*

The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
 

Example 1:
==============================
Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Example 2:
=============================
Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

Example 3:
=============================
Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021

*/

var addToArrayForm = function(num, k) {
    let ans = [];
    let karr = (k+"").split('').map(Number);

    let i = num.length-1,  j = karr.length-1;
    let carry = 0;
    while(i >= 0 || j >= 0){
        let a = num[i] == undefined ? 0 : num[i];
        let b = karr[j] == undefined ? 0 : karr[j];
        let final = a + b + carry;
        let n = final % 10;
        carry = Math.floor(final/10);

        ans.push(n);    i--;  j--;
    }
    if(carry != 0) ans.push(carry);
    return ans.reverse();
};