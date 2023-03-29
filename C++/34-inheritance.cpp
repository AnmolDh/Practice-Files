#include <iostream>
#include <string>
using namespace std;

class Vehicle{
    public:
    string brand = "Ford";

    void honk(){
        cout << "Bonk! Honk!\n";
    }
};

class Car : public Vehicle{
    public:
    string model = "Mustang";

};

int main(){
    Car myCar;
    myCar.honk();
    cout << myCar.brand << " " << myCar.model;
    return 0;
}