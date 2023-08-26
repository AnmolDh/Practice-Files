import java.util.Arrays;
import java.util.Scanner;

public class maxNum {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int n = input.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = input.nextInt();
            }

            Arrays.sort(arr);

            System.out.println(arr[n - 1]);
        }
    }
}
