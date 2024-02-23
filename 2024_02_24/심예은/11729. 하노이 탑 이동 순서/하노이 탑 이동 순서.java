import java.util.Scanner;

public class Main {
    static StringBuilder sb = new StringBuilder();
    static int count = 0;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        scanner.close();

        hanoi(N, 1, 3, 2);
        System.out.println(count);
        System.out.println(sb.toString());
    }

    static void hanoi(int n, int start, int end, int auxiliary) {
        if (n == 1) {
            sb.append(start).append(' ').append(end).append('\n');
            count++;
            return;
        }
        hanoi(n-1, start, auxiliary, end);
        sb.append(start).append(' ').append(end).append('\n');
        count++;
        hanoi(n-1, auxiliary, end, start);
    }
}