// Write a program that takes a string input and returns the number of vowels in the string. The program
// should handle exceptions that may occur during input or processing.
// Input format:
// A single string input.
// Output format:
// An integer representing the number of vowels in the input string.
// Sample Input 1:
// "Hello, World!"
// Sample Output 1:
// 3
// Sample Input 2:
// "bcd"
// Sample Output 2:
// 0


import java.util.Scanner;

public class q02 {
    public static int countV(String s) {
        int n = s.length();
        int count = 0;
        for (int i = 0; i < n; i++) {
            char c = Character.toLowerCase(s.charAt(i));
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                count++;
            }
        }
        return count;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        try{
            String s = sc.nextLine();
            int numV = countV(s);
            System.out.println(numV);
        }
        catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
