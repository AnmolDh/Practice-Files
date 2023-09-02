#include <iostream>
using namespace std;

class myClass{
    public:
    void myMethod(){
        cout << "Hello" << endl;
    }

    void outsideClass();
};

void myClass :: outsideClass(){
    cout << "Hellu" << endl;
}

int main(){
    myClass myObj;
    myObj.myMethod();
    myObj.outsideClass();
    return 0;
}