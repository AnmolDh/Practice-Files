// You are given an integer A. Your task is to find the Ath number whose binary representation is a palindrome.
// Consider that the first number with a palindrome binary representation is 1, instead of 0. When counting these
// numbers, do not consider leading zeros in the binary representation.
// Write a Java program to solve this problem and find the Ath binary palindrome number.

import java.util.*;

public class q17{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    ArrayList<Integer> arr = new ArrayList<>();
    for (int i = 1; arr.size() != a; i++){
      String bin = Integer.toBinaryString(i);
      String rev = "";
      for (int j = 0; j < bin.length(); j++){
        char ch = bin.charAt(j);
        rev = ch+rev;
      }
      if (bin.equals(rev)){
        arr.add(Integer.parseInt(bin, 2));
      }
    }
    System.out.println(arr);
  }
}