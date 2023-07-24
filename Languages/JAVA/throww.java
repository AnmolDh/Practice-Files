public class throww {
    public static void main(String[] args) {
        int age = 16;

        if (age < 18) {
            throw new ArithmeticException("You must be atleast 18 Years old");
        } else {
            System.out.println("wooh");
        }
    }
}
