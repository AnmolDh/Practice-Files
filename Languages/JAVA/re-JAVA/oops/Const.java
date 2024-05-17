class Pen{
  String brand;
  String type;
  String colour;

  Pen(String b, String t, String c){
    this.brand = b;
    this.type = t;
    this.colour = c;
  }

  void getPenDetails(){
    System.out.println("Brand: " + this.brand);
    System.out.println("Type: " + this.type);
    System.out.println("Colour: " + this.colour);
  }
}


public class Const{
  public static void main(String[] args){
    Pen pen1 = new Pen("Flair", "Ball", "Black");
    pen1.getPenDetails();
  }
}