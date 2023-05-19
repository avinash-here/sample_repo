/* // Question  // Level: Easy

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order 
of characters. No two characters may map to the same character, but a character may map to itself.
 

Example 1:
===========================
Input: s = "egg", t = "add"
Output: true

Example 2:
===========================
Input: s = "foo", t = "bar"
Output: false

Example 3:
===============================
Input: s = "paper", t = "title"
Output: true

*/  // Solution  

var isIsomorphic = function(s, t) {
    let obj = {};
    for(let i = 0; i < s.length; i++) {
        if(obj[s[i]] == undefined)  obj[s[i]] = t[i];        
        else  if(obj[s[i]] != t[i]) return false;        
    }
    obj = {};
    for(let i = 0; i < t.length; i++) {
        if(obj[t[i]] == undefined)  obj[t[i]] = s[i];
        else  if(obj[t[i]] != s[i]) return false;
    }
    return true;
};