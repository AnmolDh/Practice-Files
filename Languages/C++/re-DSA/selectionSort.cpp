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

  for (int i = 0; i < s-1; i++){
    for (int j = i+1; j < s; j++){
      if (arr[i] > arr[j]){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  cout << "Sorted Array: ";
  for (int i = 0; i < s; i++){
    cout << arr[i] << " ";
  }
}