#include <iostream>
using namespace std;

int main(){
    for (int i = 0; i < 5; i++){
        if (i == 3){
            break;
        }
        cout << i << endl;
    }

    for (int j = 0; j < 5; j++){
        if (j == 3){
            continue;
        }
        cout << j << endl;
    }
    return 0;
}