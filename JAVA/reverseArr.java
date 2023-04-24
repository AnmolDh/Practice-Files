import java.util.Scanner;

public class reverseArr {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int n = input.nextInt();
        int[] arr = new int[n];
        int[] rev = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = input.nextInt();
        }

        int j = n;
        for (int i = 0; i < n; i++) {
            rev[j - 1] = arr[i];
            j = j - 1;
        }

        for (int i = 0; i < n; i++) {
            System.out.println(rev[i]);
        }
    }
}
