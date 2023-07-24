// In a thermos steel company while entering the names of the employees in the excel file the
// clerk made a mistake. Some leading and trailing spaces have been added by mistake. Now the
// company wants the final fair sheet of the names. So, help the company with the same.
// Write a JAVA program to remove all the leading and trailing spaces from the names.
// Input Format
// The input consists of string followed by leading and trailing whitespaces.
// Output Format
// The output consists of string with no leading and trailing whitespaces.
// Sample Input 1
// Welcome
// Sample Output 1
// Welcome
// Sample Input 2
// Chitkara
// Sample Output 2
// Chitkara

import java.util.Scanner;

public class q06 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        System.out.println(str.trim());
    }
}
