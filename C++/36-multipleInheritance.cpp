#include <iostream>
#include <string>
using namespace std;

class base1{
    public:
    void myFun(){
        cout << "Parent\n";
    }
};

class base2{
    public:
    void myOtherFun(){
        cout << "Other Parent\n";
    }
};

class child : public base1, public base2{
};

int main(){
    child myObj;
    myObj.myFun();
    myObj.myOtherFun();
    return 0;
}