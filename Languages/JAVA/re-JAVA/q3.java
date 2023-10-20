// Imagine you are developing a text processing tool, and you need to implement a Java program
// that removes duplicate characters from a given input string. Write a program that takes user
// input for a string and uses recursion to remove duplicate characters.


import java.util.*;

public class q3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String str = sc.next();
    String s = "";
    
    for (int i = 0; i < str.length(); i++){
      boolean doesExists = false;
      for (int j = 0; j < s.length(); j++){
        if (str.charAt(i) == s.charAt(j)) doesExists = true;
      }
      if (!doesExists) s += str.charAt(i);
    }

    System.out.println(s);
  }
}