/*  // Question   // Level: Easy

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the 
coordinate of a point. Check if these points make a straight line in the XY plane.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2019/10/15/untitled-diagram-2.jpg
=============================================================================================
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Example 2:  Image Link: https://assets.leetcode.com/uploads/2019/10/09/untitled-diagram-1.jpg
=============================================================================================
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

*/

// Solution

var checkStraightLine = function(coordinates) {
    let x = coordinates[0][0],  y = coordinates[0][1];
    let x_ = true,  y_ = true;
    
    for(let i = 0; i < coordinates.length; i++) {
        if(coordinates[i][0] != x) x_ = false;
        if(coordinates[i][1] != y) y_ = false;
    }
    if(x_ || y_) return true;
    
    let left = [],  right = [];
    for(let i = 1; i < coordinates.length; i++) {
        left.push(coordinates[i][0] - coordinates[i-1][0]);
        right.push(coordinates[i][1] - coordinates[i-1][1]);
    }

    for(let i = 1; i < left.length; i++) {
        if(left[i]/right[i] != left[i-1]/right[i-1])
        return false;
    }
    return true;    
};