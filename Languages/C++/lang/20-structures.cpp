#include <iostream>
#include <string>
using namespace std;

// structure
struct{
    int myNum;
    string myTxt;
} myStructure;

// multiple variables in one structure
struct{
    string brand;
} myCar1, myCar2;

// named structures
struct car{
    string model;
};

int main(){
    myStructure.myNum = 10;
    myStructure.myTxt = "Hello";
    cout << myStructure.myNum << endl;
    cout << myStructure.myTxt << endl;

    myCar1.brand = "BMW";
    myCar2.brand = "Ford";
    cout << myCar1.brand << endl;
    cout << myCar2.brand << endl;

    car myCar1;
    myCar1.model = "X5";
    car myCar2;
    myCar2.model = "Mustang";
    cout << myCar1.model << endl;
    cout << myCar2.model << endl;
    return 0;
}