class Shape{
  String colour;
}

class Triangle extends Shape{
  void area(int l, int h){
    System.out.println((l*h)/2);
  }
}

class EquilatTriangle extends Triangle{
  void area(int l, int h){
    System.out.println((l*h)/2);
  }
}

class Circle extends Shape{
  void area(int r){
    System.out.println((3.14)*r*r);
  }
}

public class Inherit{
  public static void main(String[] args){
    Triangle t1 = new Triangle();
    t1.area(20, 20);

    Circle c1 = new Circle();
    c1.area(20);
  }
}