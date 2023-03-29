#include <iostream>
#include <string>
using namespace std;

int main(){
    int x, y;
    cin >> x >> y;

    if(x < y){
        cout << "x < y" << endl;
    } else if (x > y){
        cout << "x > y" << endl;
    } else{
        cout << "x = y" << endl;
    }

    // short hand if...else
    int time = 20;
    string result = (time < 18) ? "Good Day" : "Good Evening";
    cout << result;
    return 0;
}