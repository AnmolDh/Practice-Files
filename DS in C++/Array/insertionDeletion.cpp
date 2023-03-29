#include <iostream>
using namespace std;

int main(){
    int n;
    int value = 0;
    int position;

    cin >> n;
    int arr[n];

    for (int i = 0; i < n; i++){
        cin >> arr[i];
    }

    cout << "enter value to be inserted: " << endl;
    cin >> value;
    cout << "enter position: " << endl;
    cin >> position;

    for (int i = 0; i < n; i++){
        arr[position] = value;
        cout << arr[i] << " ";
    }

    return 0;
}