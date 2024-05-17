class Pen{
  String brand;
  String type;
  String colour;

  void getPenDetails(){
    System.out.println(this.brand);
    System.out.println(this.type);
    System.out.println(this.colour);
  }
}


public class OOPS{
  public static void main(String[] args){
    Pen pen1 = new Pen();
    pen1.brand = "cello";
    pen1.type = "gel";
    pen1.colour = "blue";

    pen1.getPenDetails();

  }
}