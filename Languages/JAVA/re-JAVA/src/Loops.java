import java.util.*;

public class Loops {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
//        for loop
        for (int i = 0; i <= 3; i++){
            System.out.println(i);
        }

//        while loop
        int j = 0;
        while (j <= 3){
            System.out.println(j);
            j++;
        }

//        do while loop
        int k = 0;
        do {
            System.out.println(k);
            k++;
        } while (k <= 3);

//        sum of first n natural numbers
        int n = sc.nextInt();
        int sum = 0;
        for (int i = 1; i <= n; i++){
            sum += i;
        }
        System.out.println(sum);

//        table of input t
        int t = sc.nextInt();
        for (int i = 1; i <= 10; i++){
            System.out.println(t*i);
        }
    }
}
