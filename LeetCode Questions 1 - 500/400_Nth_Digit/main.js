/*  // Question   // Level: Medium

Given an integer n, return the nth digit of the infinite integer 
sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].
 

Example 1:
============
Input: n = 3
Output: 3

Example 2:
=============
Input: n = 11
Output: 0
Explanation: The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, 
which is part of the number 10.

*/
// Solution

var findNthDigit = function(n) {
    let digit = 1, total = 9, count = 0;

    while(true) {
        if(n - (total*digit) < 0) break;
        else {
            n = n - (total*digit);
            digit++;  count += total;  total *= 10;
        }
    }

    if(n == 0) return count.toString()[0];
    while(n > digit) {
        n -= digit;  count++;
    }

    count++;  count = count.toString();
    return count[n-1];    
};