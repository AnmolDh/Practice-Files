public class threadTimer {
    public static void main(String[] args) {
        Thread countThread = new Thread(new countTimer());
        countThread.start();

        try {
            countThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Timer complete!");
    }

    static class countTimer implements Runnable {
        public void run() {
            for (int i = 10; i > 0; i--) {
                System.out.println(i);

                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
} 