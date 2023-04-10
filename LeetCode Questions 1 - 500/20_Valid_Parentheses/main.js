/*  // Question   // Level: Easy

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the 
input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
===============
Input: s = "()"
Output: true

Example 2:
===================
Input: s = "()[]{}"
Output: true

Example 3:
===============
Input: s = "(]"
Output: false

*/

// Solution

var isValid = function(s) {
    let arr = [];
    
    for(let i = 0; i < s.length; i++){
        if(arr.length > 0){
            if(s[i] === ")" && arr[arr.length-1] === "(" ||
               s[i] === "}" && arr[arr.length-1] === "{" ||
               s[i] === "]" && arr[arr.length-1] === "[" ){
                arr.pop();
            }
            else  arr.push(s[i]);                
        }else  arr.push(s[i]);        
    }    
    return arr.length === 0;
};