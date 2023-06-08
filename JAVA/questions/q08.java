// Anagram is a word or phrase made by transposing the letters of another word or phrase
// The word "secure" is an anagram of "rescue."
// Write a program that takes two strings as input and checks if they are anagrams of each other. The program
// should handle exceptions that may occur during input or processing.
// Input format:
// Two strings separated by a space.
// Output format:
// "YES" if the strings are anagrams of each other, "NO" otherwise as shown in sample test case.
// Test Case 1
//  Test Case 2
// Input
//  listen silent
//  gram arm
// Output
//  YES listen silent are anagram
//  NO gram arm are not anagram


import java.util.*;

public class q08 {
    public static boolean checkA(String str1, String str2) {
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
        try {
            Scanner sc = new Scanner(System.in);
            String str1 = sc.next();
            String str2 = sc.next();
            
            if (checkA(str1, str2)){
                System.out.println("YES " + str1 + " " + str2 + " are anagram");
            }
            else{
                System.out.println("NO " + str1 + " " + str2 + " are not anagram");
            }
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

}
