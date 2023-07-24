#include <iostream>
using namespace std;

class myClass{
    public:
    int x;

    private:
    int y;
};

int main(){
    myClass myObj;
    myObj.x = 10;
    // myObj.y = 15; will throw error because y is private.
    return 0;
}