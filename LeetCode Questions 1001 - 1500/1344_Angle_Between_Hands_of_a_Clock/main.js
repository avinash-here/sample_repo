/*  // Question

Given two numbers, hour and minutes, return the smaller angle (in degrees) formed between the hour and 
the minute hand.

Answers within 10-5 of the actual value will be accepted as correct.
 

Example 1:  Image Link: https://assets.leetcode.com/uploads/2019/12/26/sample_1_1673.png
========================================================================================
Input: hour = 12, minutes = 30
Output: 165

Example 2:  Image Link: https://assets.leetcode.com/uploads/2019/12/26/sample_2_1673.png
========================================================================================
Input: hour = 3, minutes = 30
Output: 75

Example 3:  Image Link: https://assets.leetcode.com/uploads/2019/12/26/sample_3_1673.png
========================================================================================
Input: hour = 3, minutes = 15
Output: 7.5

*/

// Solution

var angleClock = function(hour, minutes) {
    if(minutes == 0) return 30*Math.min(hour, 12-hour);
    
    let mh = minutes/5;  
    if(hour == 12) hour = 0;
    
    let t = Math.abs(hour-mh);    
    
    if(hour < mh ) {
        let ans = t*30 - minutes/2; 
        return (ans > 180) ? 360-ans : ans < 0 ? -ans : ans;
    }
    else if(hour >= mh) {
        let ans = t*30 + minutes/2;  
        return (ans > 180) ? 360-ans : ans < 0 ? -ans : ans;
    }    
};