import java.util.ArrayList;
import java.util.Collections;

public class ArrList {
    public static void main(String[] args){
//        declare arraylist
        ArrayList<Integer> list = new ArrayList<Integer>();

//        add element
        list.add(0);
        list.add(8);
        list.add(10);
        System.out.println(list);


//        get element
        System.out.println(list.get(1));


//        add element in between
        list.add(1, 3);
        System.out.println(list);


//        set element
        list.set(0, 5);
        System.out.println(list);


//        delete element
        list.remove(3);
        System.out.println(list);


//        size of arraylist
        System.out.println(list.size());


//        sorting
        Collections.sort(list);
        System.out.println(list);
    }
}
