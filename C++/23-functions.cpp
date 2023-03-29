#include <iostream>
#include <string>
using namespace std;

void hello(){
    cout << "Hello" << endl;
}

void name(string fname){ // Function Parameter
    cout << fname << endl;
}

void age(int age = 18){ // Default Parameter
    cout << age << endl;
}

void from(string state, string city){ // Multiple Parameters
    cout << city << ", " << state;
}

void bye(); // Function Declaration

int main(){
    hello();
    name("Anmol");
    age();
    from("Chandigarh", "Chandigarh");
    bye();
    return 0;
}

void bye(){ // Function Definition (after main)
    cout << "Bye";
}