// you are given 2 numbers as N1,N2.write a program to calculate the smallest number which is divisible by these two
// numbers.


import java.util.*;

public class q15{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();
    int i = 1;
    while (true){
      if (i % a == 0 && i % b == 0){
        System.out.println(i);
        break;
      }
      i++;
    }
  }
}