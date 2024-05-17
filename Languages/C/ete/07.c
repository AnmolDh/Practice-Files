#include <stdio.h>

int main(){
  int m, n;
  scanf("%d %d", &m, &n);

  int arr[m][n];

  for (int i = 0; i < m; i++){
    for (int j = 0; j < n; j++){
      scanf("%d", &arr[i][j]);
    }
  }

  int sum[n];
  int k = 0;

  for (int i = 0; i < n; i++){
    int t = 0;
    for (int j = 0; j < m; j++){
      t += arr[j][i];
    }
    sum[k] = t;
    k++;
  }

  for (int i = 0; i < n; i++){
    printf("%d ", sum[i]);
  }
}