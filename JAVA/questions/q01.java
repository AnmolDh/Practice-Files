// Given a string S, find length of the longest substring with all distinct characters.
// Input format:
// Input will consist of string.
// Output format:
// The output will be a single integer denoting the length of the longest substring.
// Sample Input:
// Chitkara
// Sample Output:
// 7
// Sample Input:
// acfagg
// Sample Output:
// 4

import java.util.Scanner;

class sol{
    static int lsdc(String s) {
        int n = s.length();
        if (n == 0) {
            return 0;
        }

        int maxLen = 1;
        for (int i = 0; i < n - 1; i++) {
            boolean[] visited = new boolean[128];
            visited[s.charAt(i)] = true;
            for (int j = i + 1; j < n; j++) {
                if (visited[s.charAt(j)]) {
                    break;
                } else {
                    visited[s.charAt(j)] = true;
                    maxLen = Math.max(maxLen, j - i + 1);
                }
            }
        }
        return maxLen;
    }
}

public class q01{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();

        int result = sol.lsdc(s);
        System.out.println(result);
    }
}