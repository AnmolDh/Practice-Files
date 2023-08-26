class Veh {
    protected String manuf = "Ford";
}

public class subClass extends Veh {
    public static void main(String[] args) {
        subClass myCar = new subClass();
        System.out.println(myCar.manuf);
    }
}
