// Madhav is a goverment employee and he is given a task that he need to visit N houses in the area. But he is
// confused that he has to visit which houses.
// He is weak in math but his boss is super expert in Maths. He told madhav to visit houses whose house number
// satisfy the equation (3k+2) and also give one more hurdle that that number also must not divisible by M.write
// thecode to print those house numbers which he should visit


import java.util.*;

public class q11{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int m = sc.nextInt();

    int k = 0
    for (int i = 1; k != n; i++){
      int eq = 3*i+2;
      if (eq % m != 0){
        System.out.println(eq);
        k++;
      }
    }
  }
}