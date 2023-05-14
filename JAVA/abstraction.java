abstract class Animal {
    public abstract void sound();

    public void sleep() {
        System.out.println("zzz zzz");
    }
}

class pig extends Animal {
    public void sound() {
        System.out.println("wee wee");
    }
}

class abstraction {
    public static void main(String[] args) {
        pig mypig = new pig();
        mypig.sound();
        mypig.sleep();
    }
}