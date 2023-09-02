#include <iostream>
using namespace std;

int main(){
  int s;
  cout << "Enter Size of Array: ";
  cin >> s;

  int arr[s];
  cout << "Enter " << s << " Elements: ";
  for (int i = 0; i < s; i++){
    cin >> arr[i];
  }


  bool swapped = false;
  for (int i = 0; i < s-1; i++){
    for (int j = 0; j < s-i-1; j++){
      if (arr[j] > arr[j+1]){
        int temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) break;
  }

  cout << "Sorted Array: ";
  for (int i = 0; i < s; i++){
    cout << arr[i] << " ";
  }
}