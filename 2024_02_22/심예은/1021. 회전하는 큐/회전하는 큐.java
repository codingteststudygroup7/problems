import java.util.*;

class Main {
    public static int minMoves(int N, int[] positions) {
        Deque<Integer> queue = new LinkedList<>();
        for (int i = 1; i <= N; i++) {
            queue.add(i);
        }
        int moves = 0;
        for (int pos : positions) {
            int index = 0;
            for (int i = 0; i < queue.size(); i++) {
                if (queue.toArray()[i].equals(pos)) {
                    index = i;
                    break;
                }
            }
            moves += Math.min(index, queue.size() - index);
            for (int i = 0; i < index; i++) {
                queue.addLast(queue.pollFirst());
            }
            queue.pollFirst();
        }
        return moves;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        int M = scanner.nextInt();
        int[] positions = new int[M];
        for (int i = 0; i < M; i++) {
            positions[i] = scanner.nextInt();
        }
        System.out.println(minMoves(N, positions));
        scanner.close();
    }
}
