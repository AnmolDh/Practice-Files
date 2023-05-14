interface animal {
    public void sound();

    public void run();
}

class pig implements animal {
    public void sound() {
        System.out.println("wee wee");
    }

    public void run() {
        System.out.println("tata tata");
    }
}

public class interfacee {
    public static void main(String[] args) {
        pig mypig = new pig();
        mypig.sound();
        mypig.run();
    }
}
