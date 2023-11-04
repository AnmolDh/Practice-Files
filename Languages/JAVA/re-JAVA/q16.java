// You've become involved in a project focused on binary number analysis. Your current assignment revolves around
// creating a Java program that calculates the cumulative count of set bits (bits with a value of 1) across the binary
// representations of numbers ranging from 1 to a designated positive integer A. Your goal is to develop a program
// that efficiently carries out this computation.
// Write a Java program that takes a positive integer A as input and calculates the total number of set bits in the binary
// representation of all the numbers from 1 to A.


import java.util.*;

public class q16{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int set = 0;
    for (int i = 1; i <= n; i++){
      String bin = Integer.toBinaryString(i);
      for (int j = 0; j < bin.length(); j++){
        if (bin.charAt(j) == '1') set++;
      }
    }
    System.out.println(set);
  }
}