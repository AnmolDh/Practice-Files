import java.util.*;

public class q19{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    String str = sc.nextLine();
    int d = sc.nextInt();

    String left = str.substring(d) + str.substring(0, d);
    String right = str.substring(str.length()-d) + str.substring(0, str.length()-d);

    System.out.println(left);
    System.out.println(right);
  }
}