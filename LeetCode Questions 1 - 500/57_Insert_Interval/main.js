/*

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent
the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are 
also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and 
intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.
 

Example 1:
=====================================================
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
==========================================================================
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

*/

var insert = function(inters, newI) {
    
    if(inters.length == 0 || newI[0] > inters[inters.length-1][1]){
        inters.push(newI);   return inters;
    }
    else if(newI[1] < inters[0][0]){
        inters.unshift(newI);   return inters;
    }

    let tar;
    for(let i = 0; i < inters.length-1; i++){
        if(newI[0] > inters[i][1] && newI[1] < inters[i+1][0])
        tar = i+1;
    }
    if(tar != undefined){
        let ans = [];
        for(let i = 0; i <= inters.length; i++){
            if(i == tar){ ans.push(newI); }
            else if(i > tar) ans.push(inters[i-1]);
            else ans.push(inters[i]);
        }
        return ans;
    }
    
    let s;  let e;
    for(let i = 0; i < inters.length; i++){
        if(newI[0] <= inters[i][1]){
            if(newI[0] < inters[i][0]){
                inters[i][0] = newI[0];
            } 
            s = i;  break;
        }
    }
    for(let i = inters.length-1; i >= 0; i--){
        if(newI[1] >= inters[i][0]){
            if(newI[1] > inters[i][1]){
                inters[i][1] = newI[1];
            } 
            e = i;  break;
        }        
    }
    
    let ans = [];
    for(let i = 0; i < inters.length; i++) {
        if(i == s){
            let arr = [];
            arr.push(inters[s][0]); arr.push(inters[e][1]);
            ans.push(arr);
            i = e;
        }
        else ans.push(inters[i]);
    }
    return ans;    
};