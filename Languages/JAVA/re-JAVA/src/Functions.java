import java.util.*;

public class Functions {
    public static void printMyName(String name){
        System.out.println(name);
    }

    public static int sum(int a, int b){
        return a + b;
    }

    public static int factorial(int n){
        int f = 1;
        for (int i = 1; i <= n; i++){
            f *= i;
        }
        return f;
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        printMyName(name);


        int a = sc.nextInt();
        int b = sc.nextInt();
        int sum = sum(a, b);
        System.out.println(sum);


        int n = sc.nextInt();
        System.out.println(factorial(n));
    }
}
