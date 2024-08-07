/*  2370. Longest Ideal Subsequence  // Level: Medium

You are given a string s consisting of lowercase letters and an integer k. We call a string t ideal
if the following conditions are satisfied:

t is a subsequence of the string s.
The absolute difference in the alphabet order of every two adjacent letters in t is <= to k.
Return the length of the longest ideal string.

A subsequence is a string that can be derived from another string by deleting some or no characters
without changing the order of the remaining characters.

Note that the alphabet order is not cyclic. For example, the absolute difference in the alphabet 
order of 'a' and 'z' is 25, not 1.


Example 1:
==========>
Input: s = "acfgbd", k = 2
Output: 4
Explanation: The longest ideal string is "acbd". The length of this string is 4, so 4 is returned.
Note that "acfgbd" is not ideal because 'c' and 'f' have a difference of 3 in alphabet order.

Example 2:
==========>
Input: s = "abcd", k = 3
Output: 4
Explanation: The longest ideal string is "abcd". The length of this string is 4, so 4 is returned.
 

Constraints:
============>
1 <= s.length <= 10^5
0 <= k <= 25
s consists of lowercase English letters.

*/

// Solution

var longestIdealString = function(s, k) {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    for(let i = 0; i < str.length; i++) obj[str[i]] = i;
    
    let resArr = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++) {
        let temp = obj[s[i]];
        let st = Math.max(0, temp-k),  e = Math.min(25, temp+k);
        
        let max = 0;
        for(let j = st; j <= e; j++) max = Math.max(max, resArr[j]);
        resArr[temp] = max+1;
    }    
    let max = 0;
    for(let i = 0; i < 26; i++) max = Math.max(max, resArr[i]);
    
    return max;    
};