import java.util.*;

public class junk1{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    ArrayList<Integer> arr = new ArrayList<>();
    arr.add(0);
    arr.add(1);

    for (int i = 0; i < n-2; i++){
      arr.add(arr.get(i) + arr.get(i+1));
    }

    System.out.println(arr.toString());
  }
}