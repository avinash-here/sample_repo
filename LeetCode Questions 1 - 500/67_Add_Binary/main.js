/*

Given two binary strings a and b, return their sum as a binary string.
 

Example 1:
========================
Input: a = "11", b = "1"
Output: "100"

Example 2:
=============================
Input: a = "1010", b = "1011"
Output: "10101"

*/

var addBinary = function(a, b) {    
    if(a == "0" && b == "0") return "0";
    else if(a == "0") return b;
    else if(b == "0") return a;
           
    let l = a.length - 1,  r = b.length - 1;
    let ans = [];    let carry = 0;
    
    while(a[l] != undefined || b[r] != undefined){
        let one = a[l] !== undefined ? +a[l] : 0;
        let two = b[r] !== undefined ? +b[r] : 0;        
        let final = one+two+carry;

        if(final == 3){
            ans.push(1);  carry = 1;
        }
        else if(final == 2){
            ans.push(0);  carry = 1;
        }        
        else if(final == 1){
            ans.push(1);  carry = 0;
        }
        else if(final == 0){
            ans.push(0);  carry = 0;
        }
        l--; r--;
        
    }    
    if(carry != 0) ans.push(carry);
    ans = ans.reverse();
    
    return ans.join('');    
};