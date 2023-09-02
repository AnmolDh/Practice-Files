#include <iostream>
#include <string>
using namespace std;

class Vehicle{
    public:
    Vehicle(){
        cout << "Vehicle\n";
    }
};

class Fare{
};

class Car : public Vehicle{
};

class Bus :public Vehicle, public Fare{
};

int main(){
    return 0;
}