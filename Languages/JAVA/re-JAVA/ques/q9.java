// Given three array, say a, b and c, find one node from each list such that the sum of the values of the nodes is
// equal to a given number, say, Target. As any number of answers can be possible, return the first one you get while
// traversing.


import java.util.*;

public class q9{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int m = sc.nextInt();
    int o = sc.nextInt();
    ArrayList<Integer> na = new ArrayList<>();
    ArrayList<Integer> ma = new ArrayList<>();
    ArrayList<Integer> oa = new ArrayList<>();

    for (int i = 0; i < n; i++){
      na.add(sc.nextInt());
    }
    for (int i = 0; i < m; i++){
      ma.add(sc.nextInt());
    }
    for (int i = 0; i < o; i++){
      oa.add(sc.nextInt());
    }

    int target = sc.nextInt();

    for (int i = 0; i < n; i++){
      for (int j = 0; j < m; j++){
        for (int k = 0; k < o; k++){
          if (target == (na.get(i)+ma.get(j)+oa.get(k))){
            System.out.println(na.get(i) + " " + ma.get(j) + " " + oa.get(k));
          }
        }
      }
    }
  }
}