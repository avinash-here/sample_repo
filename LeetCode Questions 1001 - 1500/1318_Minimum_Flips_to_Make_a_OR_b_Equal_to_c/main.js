/*  // Question   // Level: Medium

Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to 
make ( a OR b == c ). (bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary 
representation.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2020/01/06/sample_3_1676.png
========================================================================================
Input: a = 2, b = 6, c = 5
Output: 3
Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)

Example 2:
==========================
Input: a = 4, b = 2, c = 7
Output: 1

Example 3:
==========================
Input: a = 1, b = 2, c = 3
Output: 0
 

Constraints:
==============
1 <= a <= 10^9
1 <= b <= 10^9
1 <= c <= 10^9

*/

// Solution

var minFlips = function(a, b, c) {
    let ba = binary(a),  bb = binary(b),  bc = binary(c);
    let la = ba.length,  lb = bb.length,  lc = bc.length;    
    let max = Math.max(la, lb, lc);
    
    if(ba.length != max) {
        for(let i = 0; i < max-la; i++)  ba = 0 + ba;
    }
    if(bb.length != max) {
        for(let i = 0; i < max-lb; i++)  bb = 0 + bb;
    }
    if(bc.length != max) {
        for(let i = 0; i < max-lc; i++)  bc = 0 + bc;
    }

    let ans = 0;
    for(let i = max-1; i >= 0; i--) {
        if(bc[i] == '0') {
            if(ba[i] != bb[i]) ans++;
            else if(ba[i] == '1') ans += 2;
        }
        else {
            if(ba[i] != bb[i]) {}
            else if(ba[i] == '0') ans ++;
        }
    }

    return ans;    
};

function binary(n) {
    let str = '';
    while(n > 0) {
        if(n % 2 == 0) str = 0 + str;
        else str = 1 + str;
        n = Math.floor(n/2);
    }
    return str;
}