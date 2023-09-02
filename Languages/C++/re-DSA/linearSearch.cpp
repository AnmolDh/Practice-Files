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

  int k;
  cout << "Enter Search Key: ";
  cin >> k;

  for (int i = 0; i < s; i++){
    if (arr[i] == k){
      cout << "Element found at index " << i;
      break;
    }
  }
}