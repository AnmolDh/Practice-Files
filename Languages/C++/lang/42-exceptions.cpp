#include <iostream>
using namespace std;

int main(){
    try{
        int age = 15;
        if (age >= 18){
            cout << "Access Granted\n";
        } else{
            throw(age);
        }
    }

    catch (int num){
        cout << "Access Denied\n";
        cout << "Age: " << num;
    }
    return 0;
}