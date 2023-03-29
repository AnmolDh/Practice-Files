#include <iostream>
using namespace std;

class baseClass{
    public:
    void myFun(){
        cout << "Parent\n";
    }
};

class childClass : public baseClass{
};

class grandChildClass : public childClass{
};

int main(){
    grandChildClass myObj;
    myObj.myFun();
    return 0;
}