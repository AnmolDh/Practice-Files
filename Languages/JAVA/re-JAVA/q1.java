// Write a Java program that takes input from the user to create a Array of strings and then
// removes all the elements of the Array that are less than or equal to a given string.


import java.util.*;

public class q1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();

    ArrayList<String> str = new ArrayList<>();
    for (int i = 0; i < n; i++){
      str.add(sc.next());
    }

    String x = sc.next();
    
    for (int i = 0; i < str.size(); i++){
      if (str.get(i).compareTo(x) <= 0){
        str.remove(i);
        i--;
      }
    }

    System.out.println(str.toString());
  }
}
