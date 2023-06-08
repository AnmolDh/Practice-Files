// You are given provided with a string S and you have to take all even-indexed characters and
// odd-indexed characters from a string and concatenates them together.
// Input Format
// The first line of the input contains the string S.
// Output format
// Print the string after merging.
// Constraints
// 1 <= S <=1000
// Time Limit
// 1 second
// Sample Input
// abcdefg
// Sample Output
// acegbdf

import java.util.Scanner;

public class q15 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        String s1 = "";
        String s2 = "";

        for (int i = 0; i < s.length(); i++) {
            if (i % 2 == 0) {
                s1 += s.charAt(i);
            } else {
                s2 += s.charAt(i);
            }
        }
        
        System.out.println(s1 + s2);
    }
}
