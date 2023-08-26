// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at
// least one space. Print a string of the words in reverse order concatenated by a single space.
// Please note that the input string s may contain leading or trailing spaces, or multiple spaces
// between two words. However, the output string should only have a single space separating the
// words, without any extra spaces.
// Input format:
// Accept a string
// Output format:
// Print the string of the words in reverse order
// Sample Input 1:
// Chitkara is best
// Sample Output 1:
// best is Chitkara
// Sample Input 2:
// I am the last of the stars
// Sample Output 2:
// stars the of last the am I
// Sample Input 3:
// the happy ending
// Sample Output 3:
// ending happy the


import java.util.Scanner;

public class q18 {
    public static String reverse(String str) {
        String rev = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            rev += str.charAt(i);
        }
        return rev;
    }

    public static String reverseWords(String str) {
        int i = str.length() - 1;
        String res = "";

        while (i >= 0) {
            while (i >= 0 && str.charAt(i) == ' ') {
                i--;
            }

            String word = "";
            while (i >= 0 && str.charAt(i) != ' ') {
                word += str.charAt(i);
                i--;
            }

            res += reverse(word);

            if (word.length() != 0) {
                res += " ";
            }
        }
        return res.substring(0, res.length() - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        System.out.print(reverseWords(str));
    }
}
