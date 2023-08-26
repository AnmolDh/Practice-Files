import java.util.*;

public class Conditions {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

//        check if adult or not
        int age = sc.nextInt();
        if (age >= 18){
            System.out.println("Adult");
        } else{
            System.out.println("Not Adult");
        }

//         check if even or odd
        int num = sc.nextInt();
        if (num % 2 == 0){
            System.out.println("EVEN");
        } else{
            System.out.println("ODD");
        }

//         check greater, lesser, or equal
        int a = sc.nextInt();
        int b = sc.nextInt();
        if (a > b){
            System.out.println("a is greater than b");
        } else if (a < b){
            System.out.println("a is lesser than b");
        } else{
            System.out.println("a is equal than b");
        }

//        switch statement
        int s = sc.nextInt();
        switch (s){
            case 1:
                System.out.println("Hello");
                break;
            case 2:
                System.out.println("Bello");
                break;
            case 3:
                System.out.println("Tello");
                break;
        }

    }
}
