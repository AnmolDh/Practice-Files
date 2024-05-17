class Pen{
  String brand;
  String type;
  String colour;

  Pen(Pen s1){
    this.brand = s1.brand;
    this.type = s1.type;
    this.colour = s1.colour;
  }

  Pen(){

  }

  void getPenDetails(){
    System.out.println("Brand: " + this.brand);
    System.out.println("Type: " + this.type);
    System.out.println("Colour: " + this.colour);
  }
}

public class CopyConst{
  public static void main(String[] args){
    Pen pen1 = new Pen();
    pen1.brand = "cello";
    pen1.type = "ball";
    pen1.colour = "red";

    Pen pen2 = new Pen(pen1);

    pen2.getPenDetails();
  }
}