#include <iostream>
using namespace std;

int plusFun(int x, int y){
    return x + y;
}

double plusFun(double x, double y){
    return x + y;
}

int main(){
    cout << "int: " << plusFun(8, 5) << endl;
    cout << "double: " << plusFun(4.22, 2.21) << endl;
    return 0;
}