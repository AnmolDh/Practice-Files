// You are developing a drawing application that supports different shapes such as rectangles
// and circles. Implement an abstract class to represent a shape and its specific subclasses for
// rectangles and circles. Prompt the user to enter the dimensions and properties of a shape and
// display its area and perimeter.
// abstract class will hold gerArea() and getPerimeter() method.
// Input Format
// First line input consists integer value, that is choice of shape (1. Rectangle, 2. Circle)
// Second line input consists of double values (for Rectangle it will be 2 space separated values that
// is Length and Width, for Circle it will be only 1 value that is Radius, fi choice is 3 print “Invalid
// Choice”).
// Output Format
// Output will be lines separated double values showing the Area and Perimeter/ Circumference of
// the chosen shape.
// Sample Input 1
// 1
// 5.2
// 3.7
// Sample Output 1
// Area: 19.24
// Perimeter: 17.80
// Sample Input 2
// 2
// 4.5
// Sample Output 2
// Area: 63.62
// Circumference: 28.27
// Sample Input 2
// 3
// Sample Output 2
// Invalid choice!

import java.util.*;

public class q05 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice = sc.nextInt();
        switch(choice)
        {
            case 1:
                double length = sc.nextDouble();
                double width = sc.nextDouble();
                Rectangle rectangle = new Rectangle(length, width);
                System.out.printf("Area: %.2f", rectangle.getArea());
                System.out.printf("\nPerimeter: %.2f", rectangle.getPerimeter());
                break;

            case 2:
                double radius = sc.nextDouble();
                Circle circle = new Circle(radius);
                System.out.printf("Area: %.2f", circle.getArea());
                System.out.printf("\nCircumference: %.2f", circle.getPerimeter());
                break;
            default:
                System.out.println("Invalid choice!");
                break;
        }
        sc.close();
    }
}


abstract class shape {
    public abstract double getArea();

    public abstract double getPerimeter();
}

class Rectangle extends shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    public double getArea() {
        return length * width;
    }

    public double getPerimeter() {
        return 2 * (length + width);
    }
}

class Circle extends shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }

    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
}