class Solution {
    public String solution(String phone_number) {
        int index = phone_number.length();
        int starIndex = index -4 -1;
        
        String answer = "";
        
        for(int i=0; i<=starIndex; i++){
            answer += "*";    
        }
        
        answer += phone_number.substring(starIndex+1, index);
        
        return answer;
    }
}