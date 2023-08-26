// Write a function to check whether two given strings are Permutation of each other or not.
// A Permutation of a string is another string that contains same characters, only the order of
// characters can be different.
// For example, “abcd” and “dabc” are Permutation of each other.
// Input format:
// Accept two strings
// Output format:
// 1 if the strings are permutations of each other. 0 if the strings are not permutation of each
// other. As specified in sample Ouput
// Test Cases:
// Input
//  Output
// abc bca
//  1: abc and bca are permutable
// raw was
//  0: raw and was are not permutable


import java.util.*;

public class q03 {
    public static boolean checkP(String str1, String str2) {
        int count1[] = new int[256];
        Arrays.fill(count1, 0);
        int count2[] = new int[256];
        Arrays.fill(count2, 0);


        for (int i = 0; i < str1.length() && i < str2.length(); i++) {
            count1[str1.charAt(i)]++;
            count2[str2.charAt(i)]++;
        }

        if (str1.length() != str2.length()) {
            return false;
        }

        for (int i = 0; i < 256; i++) {
            if (count1[i] != count2[i]) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String str1 = sc.next();
        String str2 = sc.next();

        if (checkP(str1, str2)) {
            System.out.println("1");
        }
        else {
            System.out.println("0");
        }
    }
}
