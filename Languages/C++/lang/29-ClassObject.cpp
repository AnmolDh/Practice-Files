#include <iostream>
#include <string>
using namespace std;

class Car{
    public:
    string brand;
    string model;
};

int main(){
    Car myCar1;
    myCar1.brand = "BMW";
    myCar1.model = "X5";

    Car myCar2;
    myCar2.brand = "Ford";
    myCar2.model = "Mustang";

    cout << myCar1.brand << " " << myCar1.model << endl;
    cout << myCar2.brand << " " << myCar2.model << endl;
    return 0;
}