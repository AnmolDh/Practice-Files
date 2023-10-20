import java.util.*;

public class q7{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    String s = sc.nextLine();
    ArrayList<Integer> spaces = new ArrayList<>();
    StringBuilder ws = new StringBuilder();
    for (int i = 0; i < s.length(); i++){
      if (s.charAt(i) == ' '){
        spaces.add(i);
        continue;
      }
      ws.append(s.charAt(i));
    }
    ws.reverse();
    StringBuilder ans = new StringBuilder();
    int k = 0;
    for (int i = 0; i < ws.length(); i++){
      if (k < spaces.size() && i == spaces.get(k)){
        ans.append(" ");
        k++;
      }
      ans.append(ws.charAt(i));
    }
    System.out.println(ans);
    System.out.println(spaces.toString());
  }
}