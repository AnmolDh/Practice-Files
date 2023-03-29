#include <iostream>
using namespace std;

void swapNum(int &x, int &y){
    int z = x;
    y = z;
    x = y;
}

int main(){
    int fNum = 10;
    int sNum = 20;

    cout << fNum << " " << sNum << endl;

    swapNum(fNum, sNum);

    cout << fNum << " " << sNum << endl;
    return 0;
}