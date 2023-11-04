import java.util.*;

public class junk3{
  static void rec(int n, int s, int e){
    if (n <= 0){
      return;
    }
    System.out.println(s);
    int temp = s;
    s = e;
    e = temp+s;
    rec(n-1, s, e);
  }

  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    rec(n, 0, 1);
  }
}