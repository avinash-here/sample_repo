## 1255. Maximum Score Words Formed by Letters
#### Level: Hard


Given a list of `words`, list of  single `letters` (might be repeating) and `score` of every character.

Return the maximum score of **any** valid set of words formed by using the given letters (`words[i]` cannot be used two or more times).

It is not necessary to use all characters in `letters` and each letter can only be used once. Score of letters `'a'`, `'b'`, `'c'`, ... ,`'z'` is given by `score[0]`, `score[1]`, ... , `score[25]` respectively.

<br><br>
**Example 1:** 

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree1.jpg" width="400px"/>

<br>   -->

```
Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
Output: 23
Explanation:
Score  a=1, c=9, d=5, g=3, o=2
Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
Words "dad" and "dog" only get a score of 21.
```

<br> 

**Example 2:**

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree2.jpg" width="400px"/>

<br>   -->

```
Input: words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
Output: 27
Explanation:
Score  a=4, b=4, c=4, x=5, z=10
Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
Word "xxxz" only get a score of 25.
```

<br>

**Example 3:**

<!-- <img src="https://assets.leetcode.com/uploads/2021/01/29/vtree3.jpg" width="400px"/>

<br>   -->

```
Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
Output: 0
Explanation:
Letter "e" can only be used once.
```

<br>

<br>

**Constraints:**
- `1 <= words.length <= 14`

- `1 <= words[i].length <= 15`

- `1 <= letters.length <= 100`

- `letters[i].length == 1`

- `score.length == 26`

- `0 <= score[i] <= 10`

- `words[i]`, `letters[i]` contains only lower case English letters.



<br>

**Topics** 

##### Array, String, Dynamic Programming, Backtracking, Bit Manipulation, Bitmask


<br>

### Solution
#### JavaScript
```javascript
/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    let scores = {},  str = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < 26; i++) scores[str[i]] = score[i];

    let count = {};
    for(let i = 0; i < 26; i++) count[str[i]] = 0;
    for(let i = 0; i < letters.length; i++) count[letters[i]]++;

    let maxScore = 0;
    function sets(ind, arr, ans, scor) {
        maxScore = Math.max(maxScore, scor);
        if(ind >= arr.length) return;

        for(let i = ind; i < arr.length; i++) {
            if(check(arr[i], count)) {
                ans.push(arr[i]);  let sc = getScore(arr[i]);
                sets(i+1, arr, ans, scor+sc);
                remove(arr[i], count);  ans.pop();
            }            
        }
    }
    sets(0, words, [], 0);
    return maxScore;


    function check (word, availability) {
        let curWord = {};
        for(let i = 0; i < word.length; i++) {
            if(curWord[word[i]] == undefined) curWord[word[i]] = 1;
            else curWord[word[i]]++;
        }

        for(let key in curWord) if(curWord[key] > availability[key]) return false;
        
        for(let key in curWord) availability[key] -= curWord[key];
        
        return true;
    }


    function remove (word, availability) {
        let curWord = {};
        for(let i = 0; i < word.length; i++) {
            if(curWord[word[i]] == undefined) curWord[word[i]] = 1;
            else curWord[word[i]]++;
        }

        for(let key in curWord) availability[key] += curWord[key];
    }


    function getScore(word) {
        let sc = 0;
        for(let ch of word)  sc += scores[ch];
        return sc;
    }
};
```

#### Java
```java

```

