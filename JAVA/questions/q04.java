// Given total runs scored and total overs faced as the input. Write a program to calculate the
// run rate with the formula, Run rate= total runs scored/total overs faced.
// Use Scanner class to get the inputs from user. 
// This program may generate Arithmetic Exception / InputMismatchException.
// Use exception handling mechanisms to handle this exception.Use a single catch block.
// In the catch block,print the class name of the exception thrown.


import java.util.*;

public class q04 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try{
        int runs = sc.nextInt();
        int overs = sc.nextInt();

        int runrate = runs / overs;
        System.out.println(runrate);
        }
        catch (Exception e) {
            System.out.println(e.getClass().getName());
        }
    }
}
