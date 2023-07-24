// Write a program in Java to implement an integer array and perform following operations in form
// of functions one after another in same sequence as mentioned:
// (Applying, Evaluating)
// 1. Create an integer array having length of five (05) elements.
// 2. Input all five elements one after another.
// 3. Find maximum element from the input array.
// 4. Find minimum element from the input array.
// 5. Find Subtraction of all elements of the input array consecutively. Subtract first element
// from second, second element from third and so on. Subtraction starts from index 0 to index
// 4.
// a. Raise exception “Subtract is greater than equal to Zero”, if subtraction result is in
// positive or zero.
// b. Raise exception “Subtract is less than Zero”, if subtraction result is zero.
// Input format:
// Each line of the input contains array of five integers separated with a space.
// Constraints:
// Entered elements should be greater than 0 and lesser than 10
// (1>= Arr[i] >= 9)
// Output format:
// Each line of the output contains the result
// 1. Maximum integer of input array,
// 2. Minimum integer of input array,
// 3. Subtract all integers in input array as discussed above,
// a. If subtraction result is in zero or positive, then raise exception “Subtract is greater than
// equal to Zero”, and
// b. If subtraction result is in negative, then raise exception “Subtract is less than Zero”,
// Sample Input:
// 1 2 3 4 5
// Sample Output:
// 5
// 1
// -13
// java.lang.Exception:
//  Subtract
//  is
//  less
//  than
//  Zero
// Explanation:
// 1.
//  Code should be able to identify maximum and minimum elements of input array as 5 and 1
// shown in above example.
// 2.
//  Code should be able to find subtraction and also be able to raise exceptions as discussed
// above. For example: If array elements are 1 2 3 4 5 then
// 1 - 2 = - 1
// -1 - 3 = - 4
// -4 - 4 = - 8
// -8 - 5 = - 13


import java.util.Scanner;

public class q17 {
    public static void main(String[] args) {
        try{
            Scanner sc = new Scanner(System.in);
            int[] arr = new int[5];
            int max = -999;
            int min = 999;
            int sub;

            for (int i = 0; i < 5; i++) {
                arr[i] = sc.nextInt();
                max = Math.max(max, arr[i]);
                min = Math.min(min, arr[i]);
            }

            sub = arr[0];
            for (int i = 1; i < 5; i++) {
                sub -= arr[i];
            }

            System.out.println(max);
            System.out.println(min);
            System.out.println(sub);
            
            if (sub >= 0) {
                throw new subException("Subtract is greater than equal to Zero");
            }
            if (sub < 0){
                throw new subException("Subtract is less than Zero");
            }
        }
        catch(subException e){
            System.out.println(e.getMessage());
        }
    }
}

class subException extends Exception {
    public subException(String msg) {
        super(msg);
    }
}