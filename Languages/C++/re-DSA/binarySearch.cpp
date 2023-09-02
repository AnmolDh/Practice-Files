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


  int start = 0;
  int end = s-1;
  while (start <= end){
    int mid = start + (end - start)/2;
    if (arr[mid] > k){
      mid = end - 1;
    } else if (arr[mid] < k){
      mid = start + 1;
    } else {
      cout << mid;
      break;
    }
  }
}