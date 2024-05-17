#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);

  int arr[n];
  for (int i = 0; i < n; i++){
    scanf("%d", &arr[i]);
  }

  for (int i = 0; i < n; i++){
    int temp = arr[i];
    int sum = 0;
    while (temp != 0){
      int ld = temp % 10;
      sum = (sum * 10) + ld;
      temp /= 10;
    }
    while (sum != 0){
      int ld = sum % 10;
      printf("%d ", ld);
      sum /= 10;
    }
  }
}