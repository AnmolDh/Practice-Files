#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);

  int arr[n];
  for (int i = 0; i < n; i++){
    scanf("%d", &arr[i]);
  }

  int dec = 0;
  int pow = 1;

  // int t = n-1;
  // while (t--){
  //   pow *= 2;
  // }

  // for (int i = 0; i < n; i++){
  //   if (arr[i] == 1){
  //     dec += pow;
  //   }
  //   pow /= 2;
  // }

  for (int i = n-1; i >= 0; i--){
    if (arr[i] == 1){
      dec += pow;
    }
    pow *= 2;
  }

  printf("%d", dec);
}