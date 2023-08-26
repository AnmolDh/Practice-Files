import java.util.*;

public class Variables {
    public static void main(String[] args){
        // variable
        String a = "Blah Blah";
        char b = 'a';
        int c = 10;
        double d = 20.5;
        byte e = 1;

        // redeclare
        c = 99;
        a = "hehe";

        // input
        Scanner sc = new Scanner(System.in);
        String name = sc.next(); // takes only one word skips everthing after space
        System.out.println(name);
//        nextLine() takes everything until next line
//        nextInt() takes integer input
//        nextFloat() takes floating input
//        nextLong()
//        nextLong()

        int x = sc.nextInt();
        int y = sc.nextInt();
        int sum = x + y;
        System.out.println(sum);
    }
}
