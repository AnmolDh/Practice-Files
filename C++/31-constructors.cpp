#include <iostream>
#include <string>
using namespace std;

class myClass{
    public:
    myClass(){ // constructor
        cout << "Hello\n";
    }
};

class Car{
    public:
    string brand;
    string model;
    Car(string x, string y){
        brand = x;
        model = y;
    }
};

int main(){
    myClass myObj; // creates an object (this will call the constructor)

    Car myCar("BMW", "X5"); // call and pass parameter to constructor
    cout << myCar.brand << " " << myCar.model << endl;
    return 0;
}