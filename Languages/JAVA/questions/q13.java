// In a manufacturing company while registering the names of the employees the clerk made
// some typing mistakes like he entered the names with the punctuation marks in it. So, help the
// organization to find the proper names from the mistaken names. Write a JAVA program to remove
// punctuations from a given string.
// Input Format
// The input consists of string containing punctuations in it.
// Output Format
// The output consists of string without any punctuations.
// Sample Input 1
// My!@#Ana%*#tomy
// Sample Output 1
// MyAnatomy
// Sample Input 2
// Ch!@it#ka%^ra
// Sample Output 2
// Chitkara

import java.util.Scanner;

public class q13 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        s = s.replaceAll("\\p{Punct}", "");
        System.out.println(s);
    }
}
