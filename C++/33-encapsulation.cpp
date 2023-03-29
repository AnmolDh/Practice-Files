#include <iostream>
using namespace std;

// access private members
class Employee{
    private:
    int salary;

    public:
    void setSalary(int s){
        salary = s;
    }

    int getSalary(){
        return salary;
    }
};

int main(){
    Employee myObj;
    myObj.setSalary(500000);
    cout << myObj.getSalary();
    return 0;
}