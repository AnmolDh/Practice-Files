// Write a Java program that takes a message as input and removes all spaces present in the message, including
// any extra spaces that might occur after any word. In case of empty String, it should not return anything.


import java.util.*;

public class q4{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    String str = sc.nextLine();
    String ans = "";
    for (int i = 0; i < str.length(); i++){
      if (str.charAt(i) == ' ') continue;
      ans += str.charAt(i);
    }
    System.out.println(ans);
  }
}