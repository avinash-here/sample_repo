/*

Given two strings s and goal, return true if and only if s can become goal after some 
number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:
==================================
Input: s = "abcde", goal = "cdeab"
Output: true

Example 2:
==================================
Input: s = "abcde", goal = "abced"
Output: false

*/
var rotateString = function(s, goal) {    
    let ar1 = s.split('');   let ar2 = goal.split('');
    if(ar1.length != ar2.length) return false;

    let i = 0;    let ch = "";
    while(i < s.length){
        ch = ar2.pop() + ch;        
        if(ch + ar2.join("") == ar1.join("")) return true;
        i++;
    }
    return false;
};