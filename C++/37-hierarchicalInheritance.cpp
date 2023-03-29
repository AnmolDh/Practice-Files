#include <iostream>
#include <string>
using namespace std;

class Vehicle{
    public:
    Vehicle(){
        cout << "Vehicle\n";
    }
};

class Car : public Vehicle{
};

class Bus :public Vehicle{
};

int main(){
    return 0;
}