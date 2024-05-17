// Write a Java program that takes input from the user of strings and then finds and prints the
// length of the longest string


import java.util.*;

public class q2{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    String s = sc.nextLine();
    int maxi = -1;

    String[] arr = s.split(" ");
    
    for (int i = 0; i < arr.length; i++){
      if (arr[i].length() > maxi){
        maxi = arr[i].length();
      }
    }

    System.out.println(maxi);
  }
}