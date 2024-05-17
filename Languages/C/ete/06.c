#include <stdio.h>

int main(){
  int n, k;
  scanf("%d %d", &n, &k);

  int arr[n][n];

  for (int i = 0; i < n; i++){
    for (int j = 0; j < n; j++){
      scanf("%d", &arr[i][j]);
    }
  }

  for (int i = 0; i < n; i++){
    for (int j = 0; j < n; j++){
      if (k == j){
        printf("%d ", arr[i][j]);
      }
    }
    if (k == 0) break;
    k--;
  }
}