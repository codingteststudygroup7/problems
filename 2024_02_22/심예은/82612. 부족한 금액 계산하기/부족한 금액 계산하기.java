class Solution {
    public long solution(int price, int money, int count) {
        long currPrice = (long)price * count * (count + 1) / 2;
            
        long answer = money - currPrice;
        
        if(answer >= 0) return 0;
        
        return -answer;
    }
}