import java.util.*;

public class StrBuilder {
    public static void main(String[] args){
        StringBuilder sb = new StringBuilder("Hello");
        System.out.println(sb);

//        char at index i
        System.out.println(sb.charAt(0));

//        set char at index i
        sb.setCharAt(0, 'B');
        System.out.println(sb);

//        insert at index i
        sb.insert(0, "H");
        System.out.println(sb);

//        delete at index i
        sb.delete(1, 2);
        System.out.println(sb);

//        append at last
        sb.append("o");
        System.out.println(sb);


//        reverse sb
        int start = 0;
        int end = sb.length()-1;

        while (start < end){
            char temp = sb.charAt(start);
            sb.setCharAt(start, sb.charAt(end));
            sb.setCharAt(end, temp);
            start++;
            end--;
        }
        System.out.println(sb);

    }
}
