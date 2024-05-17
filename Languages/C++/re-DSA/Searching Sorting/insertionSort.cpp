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

  for (int i = 1; i < s;  i++){
    int j = i-1;
    int temp = arr[i];
    while (j >= 0){
      if (arr[j] > arr[i]){
        arr[j+1] = arr[j];
      } else{
        break;
      }
      j--;
    }
    arr[j+1] = temp;
  }

  cout << "Sorted Array: ";
  for (int i = 0; i < s; i++){
    cout << arr[i] << " ";
  }
}