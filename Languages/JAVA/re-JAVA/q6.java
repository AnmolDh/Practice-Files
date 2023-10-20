// Imagine you are working on a text analysis project, and you have a large body of text as a
// single string. You want to search for specific words or phrases within this text. You've written a
// Java program that takes the input of the larger text and the target word or phrase. The
// program does not uses recursion to find all occurrences of the target word or phrase within the larger
// text and then displays the positions (indices) where each occurrence is found.


import java.util.*;

public class q6{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    String s1 = sc.nextLine();
    String s2 = sc.nextLine();
    ArrayList<Integer> arr = new ArrayList<>();
    int index = s1.indexOf(s2);
    while (index != -1){
      arr.add(index);
      index = s1.indexOf(s2, index+1);
    }
    if (arr.size() == 0){
      System.out.println("-1");
    }else{
      System.out.println(arr.toString());
    }
  }
}