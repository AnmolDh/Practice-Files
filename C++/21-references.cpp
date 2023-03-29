#include <iostream>
#include <string>
using namespace std;

int main(){
    string food = "Pizza";
    string &meal = food;

    cout << food << endl;
    cout << meal << endl;

    cout << &food << endl; // outputs memory address
    return 0;
}