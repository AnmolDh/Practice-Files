#include <iostream>
#include <string>
using namespace std;

int main(){
    string greeting = "Hello, ";
    cout << greeting;

    // String Concatenation
    string fName = "Anmol";
    string lName = "Dhiman";
    cout << fName + " " + lName << endl;

    // Append
    cout << greeting + fName.append(lName) << endl;
    
    // Length
    cout << greeting.length() << endl;

    // Access
    cout << greeting[0] << endl;
    
    // Change
    greeting[0] = 'B';
    cout << greeting << endl;

    // User Input
    string fullName;
    // cout << "type full name: ";
    // cin >> fullName; // will take whitespace as termination.
    // cout << "your full name: " << fullName << endl;

    // getline() User Input
    cout << "type full name: ";
    getline(cin, fullName);
    cout << "your full name: " << fullName << endl;

    return 0;
}