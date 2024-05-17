#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);

  int arr[n];
  for (int i = 0; i < n; i++){
    scanf("%d", &arr[i]);
  }

  int res = 0;

  for (int i = 1; i < n-1; i++){
    int left = arr[i];
    for (int j = 0; j < i; j++){
      if (left < arr[j]) left = arr[j];
    }

    int right = arr[i];
    for (int j = i; j < n; j++){
      if (right < arr[j]) right = arr[j];
    }

    if (left < right){
      res += left - arr[i];
    } else {
      res += right - arr[i];
    }
  }

  printf("%d", res);
}