/*

You are given a string s of even length. Split this string into two halves of equal lengths, and let a be 
the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 
'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.
 

Example 1:
=================
Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:
=====================
Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.

*/

var halvesAreAlike = function(s) {
    let e1 = 0,  e2 = 0;
    let obj = {
        'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1, 'u' : 1,
        'A' : 1, 'E' : 1, 'I' : 1, 'O' : 1, 'U' : 1
    }

    for(let i = 0; i < s.length; i++){
        if(i < s.length/2 && obj[s[i]] != undefined) e1++;
        else if(obj[s[i]] != undefined) e2++;
    }
    return e1 == e2;
};