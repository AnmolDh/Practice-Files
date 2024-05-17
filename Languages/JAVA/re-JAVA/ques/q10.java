// given an array ‘arr’ consisting of ‘N’ elements, and an integer ‘s’. A non-empty subarray of ‘arr’ is good if it
// contains exactly ‘s’ distinct integers. Your task is to return the number of good subarrays in the given array.



import java.util.*;

public class q10{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int s = sc.nextInt();
    ArrayList<Integer> arr = new ArrayList<>();

    for (int i = 0; i < n; i++){
      arr.add(sc.nextInt());
    }

    ArrayList<ArrayList<Integer>> sa = new ArrayList<>();
    for (int i = 0; i < n; i++){
      for (int j = i; j < n; j++){
        ArrayList<Integer> temp = new ArrayList<>();
        for (int k = i; k <= j; k++){
          temp.add(arr.get(k));
          // System.out.print(arr.get(k));
        }
        sa.add(temp);
        // System.out.println();
      }
    }

    ArrayList<ArrayList<Integer>> rmdup = new ArrayList<>();
    for (int i = 0; i < sa.size(); i++){
      ArrayList<Integer> temp = new ArrayList<>();
      for (int j = 0; j < sa.get(i).size(); j++){
        boolean same = false;
        for (int k = 0; k < temp.size(); k++){
          if (sa.get(i).get(j) == temp.get(k)){
            same = true;
          }
        }
        if (!same){
          temp.add(sa.get(i).get(j));
          // System.out.print(sa.get(i).get(j));
        }
      }
      rmdup.add(temp);
      // System.out.println();
    }

    ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
    for (int i = 0; i < rmdup.size(); i++){
      if (rmdup.get(i).size() == s){
        ans.add(sa.get(i));
      }
    }
    System.out.println(ans);
  }
}