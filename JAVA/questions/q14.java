// You are working on a calculator program that accepts two integer numbers and performs
// various mathematical operations. Implement exception handling to handle the case when the user
// enters invalid input, such as zero or non-numeric values.
// Input Format
// First line of input consists integer value, that is num1,
// Second line of input consists integer value, that is num2.
// Output Format
// Output will be dependent on input,
// If user enters num1 < 0, it should print – “First number is Zero”
// If user enters num2 < 0, it should print – “Second number is Zero”
// If user enters non integer value handle the related java exception,
// If no exception found, print addition, subtraction, multiplication, division of num1, num2 each in
// new line.
// Sample Input 1
// 0
// 1111
// Sample Output 1
// First number is Zero
// Sample Input 2
// 1111
// 0
// Sample Output 2
// Second number is Zero

import java.util.Scanner;

public class q14 {
    public static void main(String[] args) {
        try{
            Scanner sc = new Scanner(System.in);
            int num1 = sc.nextInt();
            int num2 = sc.nextInt();

            if (num1 < 0) {
                System.out.println("First Number is Zero");
            }
            if (num2 < 0) {
                System.out.println("Second Number is Zero");
            }

            System.out.println(num1 + num2);
            System.out.println(num1 - num2);
            System.out.println(num1 * num2);
            System.out.println(num1 / num2);
        }
        catch (Exception e) {
            System.out.println("Invalid Integer");
        }
    }
}
