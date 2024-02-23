class Solution {
    // 주어진 숫자 배열에서 삼총사가 될 수 있는 조합의 수를 반환하는 메서드
    public int solution(int[] number) {
        int count = 0;
        List<List<Integer>> combos = combinations(number, 3); // 세 명의 학생을 선택하는 모든 조합 생성
        for (List<Integer> combo : combos) {
            if (sumList(combo) == 0) { // 조합의 합이 0인 경우 count 증가
                count++;
            }
        }
        return count;
    }
    
    // 숫자 배열에서 가능한 모든 조합을 생성하는 메서드
    private List<List<Integer>> combinations(int[] nums, int k) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), nums, k, 0);
        return result;
    }
    
    // 조합을 생성하는 재귀적인 메서드
    private void backtrack(List<List<Integer>> result, List<Integer> tempList, int[] nums, int k, int start) {
        if (tempList.size() == k) {
            result.add(new ArrayList<>(tempList));
        } else {
            for (int i = start; i < nums.length; i++) {
                tempList.add(nums[i]);
                backtrack(result, tempList, nums, k, i + 1);
                tempList.remove(tempList.size() - 1);
            }
        }
    }
    
    // 리스트의 합을 계산하는 메서드
    private int sumList(List<Integer> list) {
        int sum = 0;
        for (int num : list) {
            sum += num;
        }
        return sum;
    }
}