import java.util.Scanner;

public class missingNum {

    static int fun(int[] arr, int n) {
        for (int i : arr) {
            if (i % (n + 1) < n) {
                arr[i % (n + 1) - 1] += n + 1;
            }
        }
        for (int i = 0; i < n; i++) {
            if (arr[i] / (n + 1) == 0) {
                return i + 1;
            }
        }
        return n;
    }

    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int n = input.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = input.nextInt();
            }
            System.out.println(fun(arr, n));
        }

    }
}