/*  // Question     // Level: Medium

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s 
with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 

Example 1:
=============================
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
=========================
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
============================
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.

*/  // Solution

class Solution {
    public int maxVowels(String s, int k) {
        int ans = 0,  count = 0;
        for(int i = 0; i < k; i++) {
            if(s.charAt(i)=='a' || s.charAt(i)=='e' || s.charAt(i)=='i' ||
               s.charAt(i)=='o' || s.charAt(i)=='u') count++;
        }
        ans = Math.max(ans, count);

        for(int i = k; i < s.length(); i++) {
            if(s.charAt(i-k) == 'a' || s.charAt(i-k) == 'e' || 
               s.charAt(i-k) == 'i' || s.charAt(i-k) == 'o' ||
               s.charAt(i-k) == 'u') count--;

            if(s.charAt(i)=='a' || s.charAt(i)=='e' || s.charAt(i)=='i' || 
               s.charAt(i)=='o' || s.charAt(i)=='u') count++;

            ans = Math.max(ans, count);
        }
        return ans;
    }
}