/*

You are given a binary string s. In one second, all occurrences of "01" are simultaneously replaced with 
"10". This process repeats until no occurrences of "01" exist.

Return the number of seconds needed to complete this process.
 

Example 1:
====================
Input: s = "0110101"
Output: 4
Explanation: 
After one second, s becomes "1011010".
After another second, s becomes "1101100".
After the third second, s becomes "1110100".
After the fourth second, s becomes "1111000".
No occurrence of "01" exists any longer, and the process needed 4 seconds to complete,
so we return 4.

Example 2:
==================
Input: s = "11100"
Output: 0
Explanation:
No occurrence of "01" exists in s, and the processes needed 0 seconds to complete,
so we return 0.

*/

var secondsToRemoveOccurrences = function(s) {
    let count = 0;    let str = "";
    if(s.indexOf('0') == -1) return 0;

    while(s.lastIndexOf('1') > s.indexOf('0')) {
        for(let i = 0; i < s.length; i++){
            if(s[i] == '0' && s[i+1] == '1'){
                str += '10';   i++;
            }
            else str += s[i];
        }
        count++;   s = str;   str = "";
    }    
    return count;   
};