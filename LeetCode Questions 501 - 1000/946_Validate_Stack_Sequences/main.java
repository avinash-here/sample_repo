/*  // Question   // Level: Medium

Given two integer arrays pushed and popped each with distinct values, return true if this could have been 
the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.


Example 1:
=================================================
Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

Example 2:
=================================================
Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.

*/

// Solution

class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        Stack<Integer> stk = new Stack<>();  int j = 0;

        for(int i = 0; i < popped.length; i++) {
            if(stk.size() > 0 && popped[i] != stk.get(stk.size()-1)) {
                while(popped[i] != stk.get(stk.size()-1)) {
                    if(j >= popped.length) return false;
                    stk.push(pushed[j]);  j++;
                }
                i--;
            }
            else if(stk.isEmpty()) {
                stk.push(pushed[j]);  j++;  i--; 
            }
            else {
                stk.pop();                
            }
        }

        return true;        
    }
}