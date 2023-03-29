#include <iostream>
#include <string>
using namespace std;

int main(){
    string food = "Pizza";
    string* ptr = &food;

    cout << food << endl; // outputs value of food
    cout << &food << endl; // outputs memory address of food
    cout << ptr << endl; // outputs memory address of food with pointer
    cout << *ptr << endl; // dereference: outputs value of food

    // modify pointer value
    *ptr = "Burger";
    
    cout << *ptr << endl;
    cout << food << endl; // changed the value of food variable too
    return 0;
}