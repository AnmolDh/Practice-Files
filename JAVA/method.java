package JAVA;

public class method {

    static void myMethod() {
        System.out.println("Hello World");
    }

    static void name(String fname) {
        System.out.println(fname + " Dhiman");
    }

    static int rtn(int x) {
        return 5 + x;
    }

    public static void main(String[] args) {
        myMethod();
        name("Anmol");
        System.out.println(rtn(3));
    }
}
