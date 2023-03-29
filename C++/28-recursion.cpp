#include <iostream>
using namespace std;

int sum(int k){
    if (k > 0){
        return k + sum(k - 1); // making function call itself
    } else{
        return 0;
    }
}

int main(){
    int result = sum(10);
    cout << result;
    return 0;
}