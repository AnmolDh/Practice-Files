// A company has to tag it’s products. Each product has an associated product type which is used
// to tag the products. Product type is a sequence of lower-case letters from the English
// alphabet. The company wants to have an algorithm for their system which takes the product
// type and outputs the tag. To generate the tag, pairs of adjacent characters are formed from
// the start of the product type. From each pair, the lexicographically smallest character will be
// removed. If a character will be left unpaired then that character will be taken as it is in the tag.


import java.util.*;

public class q8{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    String str = sc.nextLine();
    String ans = "";
    
    for (int i = 0; i < str.length()-1; i=i+2){
      if (str.charAt(i) >= str.charAt(i+1)){
        ans += str.charAt(i);
      }else{
        ans += str.charAt(i+1);
      }
    }
    if (str.length() % 2 != 0){
      ans += str.charAt(str.length()-1);
    }
    System.out.println(ans);
  }
}