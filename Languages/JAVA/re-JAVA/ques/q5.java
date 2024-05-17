// Find the kth element from last without computing the length of the array


import java.util.*;

public class q5{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    ArrayList<Integer> arr = new ArrayList<>();
    while (true){
      int x = sc.nextInt();
      if (x == -1) break;
      arr.add(x);
    }
    int k = sc.nextInt();

    int z = 1;
    for (int i = arr.size()-1; i >= 0; i--){
      if (z == k){
        System.out.println(arr.get(i));
        break;
      }
      z++;
    }
  }
}