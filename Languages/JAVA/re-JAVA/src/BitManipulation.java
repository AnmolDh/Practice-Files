import java.util.*;

public class BitManipulation {
    public static void main(String[] args){
        int n = 5;
        int getMask = 1 << 2;

//        get bit
        if ((getMask & n) == 0){
            System.out.println("bit was 0");
        } else {
            System.out.println("bit was 1");
        }


//        set bit
        int setMask = 1 << 1;
        System.out.println(setMask | n);


//        clear bit
        int clearMask = 1 << 2;
        System.out.println(~clearMask & n);
    }
}
