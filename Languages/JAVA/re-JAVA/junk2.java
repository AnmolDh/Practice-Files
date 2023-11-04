import java.util.*;

public class junk2{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int x = 0;
    int y = 1;
    for (int i = 0; i < n; i++){
      System.out.println(x);
      int temp = x;
      x = y;
      y = temp+y;
    }
  }
}