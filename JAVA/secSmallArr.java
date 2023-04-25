import java.util.Arrays;
import java.util.Scanner;

public class secSmallArr {

    static void findSecSmall(int[] arr) {
        Arrays.sort(arr);
        System.out.println(arr[1]);
    }

    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int n = input.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = input.nextInt();
            }

            findSecSmall(arr);
        }
    }
}
