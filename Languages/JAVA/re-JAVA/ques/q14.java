// You have N boxes in a row. Each box contains some balls(possibly 0). The number of balls in the boxes is
// represented by an array A.
// Two balls can make a pair if the absolute difference of their box numbers is at most 1.
// Compute the maximum number of pairs that can be formed, no ball can be used in multiple pairs


import java.util.*;

public class q14{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < n; i++){
      arr[i] = sc.nextInt();
    }
    int noofpairs = 0;
    for (int i = 0; i < n; i++){
      if (arr[i] % 2 == 0){
        noofpairs += arr[i] / 2;
      }else{
        noofpairs += (arr[i]-1)/2;
      }
    }
    System.out.println(noofpairs);
  }
}