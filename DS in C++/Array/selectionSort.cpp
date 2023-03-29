#include <iostream>
using namespace std;

class array{
    int arr[10];
    int n;

    public:
    void inputArr(){
        cin >> n;
        for (int i = 0; i < n; i++){
            cin >> arr[i];
        }
    }

    void selectionSort(){
        for (int i = 0; i < n-1; i++){
            for (int j = i+1; j < n; j++){
                if (arr[j] < arr[i]){
                    int temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp; 
                }
            }
        }
    }

    void printArr(){
        for (int i = 0; i < n; i++){
            cout << arr[i] << " ";
        }
    }
};

int main(){
    array a1;

    a1.inputArr();
    a1.selectionSort();
    a1.printArr();
    return 0;
}