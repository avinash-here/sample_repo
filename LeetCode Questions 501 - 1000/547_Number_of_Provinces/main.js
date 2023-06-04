/*  // Question   // Level: Medium

There are n cities. Some of them are connected, while some are not. If city a is connected 
directly with city b, and city b is connected directly with city c, then city a is connected 
indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside 
of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and 
the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg
=================================================================================
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Example 2: Image Link: https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg
================================================================================
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3

*/

// Solution

var findCircleNum = function(isConnected) {
    
    let obj = {},  n = isConnected.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(isConnected[i][j] == 1) {
                if(!obj[i])  obj[i] = [];                     
                obj[i].push(j);
            }
        }
    }
    
    let checked = {};
    function check(cur) {
        if(checked[cur]) return;

        checked[cur] = true;
        if(obj[cur]) {
            for(let k of obj[cur]) check(k);
        }
    }
    
    let ans = 0;
    for(let i = 0; i < n; i++) {
        if(!checked[i]) {
            ans++; 
            check(i);
        }
    }
    return ans;    
};