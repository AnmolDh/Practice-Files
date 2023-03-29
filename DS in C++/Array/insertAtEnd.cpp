#include <iostream>
using namespace std;

int main(){
    int n, even = 0, odd = 0;
    cin >> n;
    int arr[n];

    for (int i = 0; i < n; i++){
        cin >> arr[i];

        if (arr[i] % 2 == 0){
            even = even + arr[i];
        }
        if (arr[i] % 2 != 0){
            odd = odd + arr[i];
        }
    }

    cout << odd - even;

    return 0;
}