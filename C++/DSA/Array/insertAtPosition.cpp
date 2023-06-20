#include <iostream>
using namespace std;

int main(){
    int arr[20], i, elem, pos, tot;
    cout << "enter the size of array: ";
    cin >> tot;

    for (int i = 0; i < tot; i++){
        cin >> arr[i];
    }

    cout << "enter pos: ";
    cin >> pos;

    cout << "enter elem: ";
    cin >> elem;

    for (i = tot; i > pos; i--){
        arr[i] = arr[i - 1];
    }

    arr[i] = elem;
        tot++;

    cout<<"\nThe New Array is:\n";
    for(i=0; i<tot; i++)
        cout<<arr[i]<<"  ";
    cout<<endl;

    return 0;
}