#include <iostream>
#include <string>
using namespace std;

int main(){
    string cars[2] = {"BMW", "Ford"};
    cout << cars[0] << endl;

    cars[1] = "mcLaren";
    
    for (int i = 0; i < 2; i++){
        cout << cars[i] << endl;
    }

    cout << sizeof(cars) / sizeof(string) << endl;
    return 0;
}