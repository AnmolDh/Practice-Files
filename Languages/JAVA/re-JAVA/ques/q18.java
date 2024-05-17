// PrepBuddy is now tired of long problem statements of questions so he will provide you a simple question.
// You are given a number N, you have to find the largest number less than or equal to N which fulfills the following
// criteria.
// Every digit of the number should be greater than or equal to its preceding digit


import java.util.*;

public class q18{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int t = sc.nextInt();
    while (t > 0){
      int n = sc.nextInt();
      while (n > 0){
        String s = Integer.toString(n);
        boolean isFunny = true;
        for (int i = 0; i < s.length()-1; i++){
          if ((s.charAt(i)-'0') > (s.charAt(i+1)-'0')){
            isFunny = false;
            break;
          }
        }
        if (isFunny){
          System.out.println(s);
          break;
        }
        n--;
      }
      t--;
    }
  }
}