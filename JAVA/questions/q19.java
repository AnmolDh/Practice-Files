// An e-commerce store's daily sales are stored in the form of a string S tagged 'a-z' or 'A-Z' in
// the company's database online. Each character in the string represents the product code. The ascii
// value of the product code represents the sale count of that product. The company wishes to find
// out the total sale count of N desired products. The total sale count of desired products is the sum
// of ascii values of occurrence of all the desired products in the string S. If a particular product
// occurs k times in the string then it’s ascii value is added k times while calculating the total sale
// count.
// Write a JAVA program to help the company find out the total sale count of the desired N products.
// Note: The characters in the product Code are always unique.
// Input Format
// First line of input consists of a string - sale, representing the daily sales of the company(S).
// Second line of input consists of an integer size representing the number of product codes
// shortlisted by the company (N).
// Third line of input consists of N space-separated characters - productCode, representing the
// desired product code.
// Output Format
// Print an integer representing the total sales count of the shortlisted products.
// Sample Input 1
// aAbcDbfdab
// 3
// a A b
// Sample Output 2
// 553
// Explanation:
// 'a' occurs 2 times i.e. 2 * 97 = 194
// 'A' occurs 1 time i.e. 65.
// 'b' occurs 3 times i.e. 3 * 98 = 294
// Total sales count is 194+65+294 = 553.
// Hence the output is 553.
// Sample Input 2
// iamneo
// 2
// a e
// Sample Output 2
// 198

import java.util.Scanner;

public class q19 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        int n = sc.nextInt();
        char[] c = new char[n];
        int sum = 0;
        int count = 0;
        

        for (int i = 0; i < c.length; i++) {
            c[i] = sc.next().charAt(0);
        }

        for (int i = 0; i < n; i++) {
            count = 0;
            for (int j = 0; j < s.length(); j++) {
                if (c[i] == s.charAt(j)) {
                    count++;
                }
            }
            sum = sum + ((int) c[i] * count);
        }
        System.out.println(sum);
    }
}
