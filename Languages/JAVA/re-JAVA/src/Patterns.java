import java.util.*;

public class Patterns {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

//        solid rectangle
        for (int i = 0; i < n; i++){
            for (int j = 0; j < n; j++){
                System.out.print("*");
            }
            System.out.println();
        }

//        hollow rectangle
        for (int i = 0; i < n; i++){
            for (int j = 0; j < n; j++){
                if (i == 0 || i == n-1 || j == 0 || j == n-1){
                    System.out.print("*");
                } else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }

//        half pyramid
        for (int i = 0; i < n; i++){
            for (int j = 0; j <= i; j++){
                System.out.print("*");
            }
            System.out.println();
        }

//        inverted half pyramid
        for (int i = 0; i < n; i++){
            for (int j = n; j > i; j--){
                System.out.print("*");
            }
            System.out.println();
        }

//        inverted half pyramid (rotated by 180deg)
        for (int i = 0; i < n; i++){
            for (int j = 0; j < n-i-1; j++){
                System.out.print(" ");
            }
            for (int j = 0; j < i+1; j++){
                System.out.print("*");
            }
            System.out.println();
        }

//        half pyramid with numbers
        for (int i = 1; i <= n; i++){
            for (int j = 1; j <= i; j++){
                System.out.print(j + " ");
            }
            System.out.println();
        }

//        inverted half pyramid with numbers
        for (int i = n; i > 0; i--){
            for (int j = 1; j <= i; j++){
                System.out.print(j + " ");
            }
            System.out.println();
        }

//        floyd's triangle
        int k = 1;
        for (int i = 1; i <= n; i++){
            for (int j = 1; j <= i; j++){
                System.out.print(k + " ");
                k++;
            }
            System.out.println();
        }

//        0-1 triangle
        for (int i = 1; i <= n; i++){
            for (int j = 1; j <= i; j++){
                if ((i+j) % 2 == 0) {
                    System.out.print("1");
                } else {
                    System.out.print("0");
                }
            }
            System.out.println();
        }
    }
}
