/*  Valid Parenthesis String   // Level: Medium

Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' 
or an empty string "".
 

Example 1:
==========
Input: s = "()"
Output: true

Example 2:
==========
Input: s = "(*)"
Output: true

Example 3:
==========
Input: s = "(*))"
Output: true
 

Constraints:
============
1 <= s.length <= 100
s[i] is '(', ')' or '*'.

*/

// Solution 

var checkValidString = function(s) {
    let left = [],  star = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(') left.push(i);
        else if(s[i] == '*') star.push(i);
        else {
            if(left.length > 0) left.pop();
            else if(star.length > 0) star.pop();
            else return false;
        }
    }
    while(left[left.length-1] < star[star.length-1]) {
        left.pop();  star.pop();
    }
    if(left.length > 0) return false;
    return true;
};