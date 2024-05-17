class Student{
  int id;
  String name;

  Student(int id, String name){
    this.id = id;
    this.name = name;
  }

  void getInfo(int id){
    System.out.println(id);
  }

  void getInfo(int id, String name){
    System.out.println(id + ": " + name);
  }
}

public class Poly{
  public static void main(String[] args){
    Student s1 = new Student(213, "helo");

    s1.getInfo(s1.id);
    s1.getInfo(s1.id, s1.name);
  }
}