import java.util.Scanner;

public class arrInput {
    public static void main(String[] args) {
        int[] arr = new int[10];

        Scanner input = new Scanner(System.in);

        int n = input.nextInt();

        for (int i = 0; i < n; i++) {
            arr[i] = input.nextInt();
        }

        for (int i = 0; i < n; i++) {
            System.out.println(arr[i]);
        }
    }
}