class Solution {
    public int maxConsecutiveAnswers(String answerKey, int k) {

        int l = 0,  count = 0,  res = 0;
        for(int i = 0; i < answerKey.length(); i++) {
            if(answerKey.charAt(i) == 'F')  count++;

            if(count <= k)  res = Math.max(res, (i-l+1));
            else {
                while(count > k) {
                    if(answerKey.charAt(l) == 'F') count--;
                    l++;
                }
            }
        }
        
        l = 0;  count = 0;
        for(int i = 0; i < answerKey.length(); i++) {
            if(answerKey.charAt(i) == 'T')  count++;       

            if(count <= k)  res = Math.max(res, (i-l+1));
            else {
                while(count > k) {
                    if(answerKey.charAt(l) == 'T') count--;
                    l++;
                }
            }
        }
        
        return res;        
    }
}