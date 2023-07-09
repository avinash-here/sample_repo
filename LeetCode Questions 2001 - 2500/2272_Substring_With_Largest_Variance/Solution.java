/*  // Question   // Level: Hard

The variance of a string is defined as the largest difference between the number of occurrences of 
any 2 characters present in the string. Note the two characters may or may not be the same.

Given a string s consisting of lowercase English letters only, return the largest variance possible 
among all substrings of s.

A substring is a contiguous sequence of characters within a string.
 

Example 1:
====================
Input: s = "aababbb"
Output: 3
Explanation:
All possible variances along with their respective substrings are listed below:
- Variance 0 for substrings "a", "aa", "ab", "abab", "aababb", "ba", "b", "bb", and "bbb".
- Variance 1 for substrings "aab", "aba", "abb", "aabab", "ababb", "aababbb", and "bab".
- Variance 2 for substrings "aaba", "ababbb", "abbb", and "babb".
- Variance 3 for substring "babbb".
Since the largest possible variance is 3, we return it.

Example 2:
==================
Input: s = "abcde"
Output: 0
Explanation:
No letter occurs more than once in s, so the variance of every substring is 0.
 

Constraints:
1 <= s.length <= 10^4
s consists of lowercase English letters.

*/

class Solution {
    public int largestVariance(String s) {

        int res = 0;
        String str = "abcdefghijklmnopqrstuvwxyz";

        for(int i = 0; i < 26; i++) {
            for(int j = 0; j < 26; j++) {

                char a = str.charAt(i),  b = str.charAt(j);
                int ac = 0,  bc = 0;

                for(int k = 0; k < s.length(); k++) {
                    if(s.charAt(k) == a) ac++;
                    if(s.charAt(k) == b) bc++;

                    if(ac < bc) {
                        ac = 0;  bc = 0; 
                    }

                    if(ac > 0 && bc > 0) res = Math.max(res, (ac-bc));
                }

                ac = 0;  bc = 0;
                for(int k = s.length()-1; k >= 0; k--) {
                    if(s.charAt(k) == a) ac++;
                    if(s.charAt(k) == b) bc++;

                    if(ac < bc) {
                        ac = 0;  bc = 0; 
                    }

                    if(ac > 0 && bc > 0) res = Math.max(res, (ac-bc));
                }
            }
        }        
        return res;        
    }
}