#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);

  int arr[n];
  for (int i = 0; i < n; i++){
    scanf("%d", &arr[i]);
  }

  int s = 0;
  int e = n-1;

  while (s <= e){
    int temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
  }

  for (int i = 0; i < n; i++){
    printf("%d ", arr[i]);
  }
}