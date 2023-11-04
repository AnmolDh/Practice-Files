// phone keypad combinations

import java.util.*;

public class q13{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    String digits = sc.nextLine();
    if (digits.length() == 0) System.out.println(new ArrayList<>());
    ArrayList<String> ans = new ArrayList<>();
    String[] hash = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

    ArrayList<String> temp = new ArrayList<>();
    for (int i = 0; i < digits.length(); i++){
        temp.add(hash[(digits.charAt(i)-'0')-2]);
    }

    for (int i = 0; i < temp.get(0).length(); i++){
        if (digits.length() >= 2){
            for (int j = 0; j < temp.get(1).length(); j++){
                if (digits.length() >= 3){
                    for (int k = 0; k < temp.get(2).length(); k++){
                      if (digits.length() == 4){
                        for (int l = 0; l < temp.get(3).length(); l++){
                          String a = Character.toString(temp.get(0).charAt(i));
                          String b = Character.toString(temp.get(1).charAt(j));
                          String c = Character.toString(temp.get(2).charAt(k));
                          String d = Character.toString(temp.get(3).charAt(l));
                          ans.add(a+b+c+d);
                        }
                      }else{
                        String a = Character.toString(temp.get(0).charAt(i));
                        String b = Character.toString(temp.get(1).charAt(j));
                        String c = Character.toString(temp.get(2).charAt(k));
                        ans.add(a+b+c);
                      }
                    }
                } else{
                  String a = Character.toString(temp.get(0).charAt(i));
                  String b = Character.toString(temp.get(1).charAt(j));
                  ans.add(a+b);
                }
            }
        }else{
          String a = Character.toString(temp.get(0).charAt(i));
          ans.add(a);
        }   
    }
    System.out.println(ans);
  }
}