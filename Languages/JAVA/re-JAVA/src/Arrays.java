import java.util.*;

public class Arrays {
    public static void main(String[] args){
        int[] marks = {12, 31, 21};
        for (int i = 0; i < 3; i++){
            System.out.println(marks[i]);
        }

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] numbers = new int[n];
        for (int i = 0; i < n; i++){
            numbers[i] = sc.nextInt();
        }
        for (int i = 0; i < n; i++){
            System.out.println(numbers[i]);
        }
    }
}
