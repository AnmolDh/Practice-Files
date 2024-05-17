// You are given a string containing only '1' and '0'. You can delete either the "10" or "00" substring from the string,
// and after deletion, the remaining string gets concatenated.
// Find the length of the shortest string that you can make by performing the above operation any number of times.


import java.util.*;

public class q12 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int t = sc.nextInt();
    sc.nextLine();
    while (t > 0) {
      String s = sc.nextLine();
      int count10 = 0, count00 = 0;
      for (int i = 0; i < s.length() - 1; i++) {
        if (s.charAt(i) == '1' && s.charAt(i + 1) == '0') {
          count10++;
        } else if (s.charAt(i) == '0' && s.charAt(i + 1) == '0') {
          count00++;
        }
      }
      StringBuilder ans = new StringBuilder(s);
      while (count10 > 0 || count00 > 0) {
        if (count10 > count00) {
          int index = ans.indexOf("10");
          if (index == -1) {
            break;
          }
          ans.delete(index, index + 2);
          count10--;
        } else {
          int index = ans.indexOf("00");
          if (index == -1) {
            break;
          }
          ans.delete(index, index + 2);
          count00--;
        }
      }
      System.out.println(ans.length());
      t--;
    }
  }
}