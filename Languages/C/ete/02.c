#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);

  int arr[n];

  for (int i = 0; i < n; i++){
    scanf("%d", &arr[i]);
  }

  int r = 1;

  for (int i = 1; i < n; i++){
    if (arr[i-1] > arr[i]) break;
    r++;
    if (r == n) r = 0;
  }

  printf("%d", r);
}