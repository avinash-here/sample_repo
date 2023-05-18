/*  // Question   // Level: Medium

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
horizontally or vertically neighboring. The same letter cell may not be used more than once.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2020/11/04/word2.jpg
=======================================================================================
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:  Image Link: https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg
====================================================================================
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:  Image Link: https://assets.leetcode.com/uploads/2020/10/15/word3.jpg
=====================================================================================
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

*/
// Solution

var exist = function(board, word) {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] == word[0])
            if(solve(board, i, j, word, 0)) return true;
        }
    }
    return false;
};

function solve(board, i, j, word, k) {
    if(k == word.length) return true;

    if(i < 0 || j < 0 || i >= board.length || j >= board[0].length) 
    return false;

    if(board[i][j] != word[k]) return false;

    let temp = board[i][j];
    board[i][j] = ' ';

    let ans = solve(board, i+1, j, word, k+1) || 
              solve(board, i-1, j, word, k+1) ||
              solve(board, i, j+1, word, k+1) ||
              solve(board, i, j-1, word, k+1);

    board[i][j] = temp;
    return ans;
}