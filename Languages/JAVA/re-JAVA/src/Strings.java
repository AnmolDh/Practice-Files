import java.util.*;

public class Strings {
    public static void main(String[] args){
//        Scanner sc = new Scanner(System.in);
//        String name = sc.nextLine();
//        System.out.println("Your Name is " + name);

//        concat
        String firstName = "huh";
        String lastName = "ebeep";
        String fullName = firstName + " " + lastName;
        System.out.println(fullName.length());

//        charAt
        for (int i = 0; i < fullName.length(); i++){
            System.out.print(fullName.charAt(i) + " ");
        }
        System.out.println();

//        compare
        String name1 = "Huh";
        String name2 = "Huh";
        if (name1.compareTo(name2) == 0){
            System.out.println("strings are equal");
        } else{
            System.out.println("strings are NOT equal");
        }

        if (new String("hello") == new String("hello")){
            System.out.println("strings are equal");
        } else{
            System.out.println("strings are NOT equal");
        }

//        substring
        String sentance = "My name is IDK";
        String name = sentance.substring(11, sentance.length());
        System.out.println(name);
    }
}
