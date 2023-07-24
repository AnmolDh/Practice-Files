interface animal {
    public void sound();

    public void run();
}

class pigf implements animal {
    public void sound() {
        System.out.println("wee wee");
    }

    public void run() {
        System.out.println("tata tata");
    }
}

public class interfacee {
    public static void main(String[] args) {
        pigf mypig = new pigf();
        mypig.sound();
        mypig.run();
    }
}
