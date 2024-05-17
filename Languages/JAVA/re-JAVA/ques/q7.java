// You are tasked with creating a Java program that reverses a given string while preserving the
// positions of spaces within the string. Your program should take a user-provided string as input
// and then output the reversed string with spaces preserved.


import java.util.*;

public class q7 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String s = sc.nextLine();
    ArrayList<Integer> spaces = new ArrayList<>();
    StringBuilder ws = new StringBuilder();
    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == ' ') {
        spaces.add(i);
        continue;
      }
      ws.append(s.charAt(i));
    }
    ws.reverse();
    StringBuilder ans = new StringBuilder();
    int k = 0;
    for (int i = 0; i < s.length(); i++) {
      if (k < spaces.size() && i == spaces.get(k)) {
        ans.append(" ");
        k++;
        continue;
      }
      ans.append(ws.charAt(i-k));
    }
    System.out.println(ans);
  }
}