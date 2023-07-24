#include <iostream>
using namespace std;

void bubbleSort(int arr[]){
    int counter = 1;
    while (counter < 5-1){
        for (int i = 0; i < 5 - counter; i++){
            if (arr[i] > arr[i+1]){
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        counter++;
    }
}

int main(){
    int arr[5] = {3, 21, 44, 11, 23};
    bubbleSort(arr);

    for (int i = 0; i < 5; i++){
        cout << arr[i] << " ";
    }
    return 0;
}