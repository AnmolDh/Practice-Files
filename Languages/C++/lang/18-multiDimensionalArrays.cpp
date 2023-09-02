#include <iostream>
using namespace std;

int main(){
    char letters2D[2][4] = {
        {'A', 'B', 'C', 'D'},
        {'E', 'F', 'G', 'H'}
    };

    char letters3D[2][2][3] = {
        {
            {'A', 'B', 'C'},
            {'D', 'E', 'F'}
        },
        {
            {'G', 'H', 'I'},
            {'J', 'K', 'L'}
        }
    };

    // Access
    cout << letters2D[0][2] << endl;

    // Change
    letters3D[0][0][0] = 'Z';
    cout << letters3D[0][0][0] << endl;

    // Loop
    for (int i = 0; i < 2; i++){
        for (int j = 0; j < 4; j++){
            cout << letters2D[i][j] << " ";
        }
    }

    return 0;
}