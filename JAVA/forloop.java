public class forloop {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }

        // Nested Outer Loop
        for (int i = 0; i < 5; i++) {
            System.out.println("Outer: " + i);
            // Nested Inner Loop
            for (int j = 0; j < 5; j++) {
                System.out.println("Inner: " + j);
            }
        }
    }
}
