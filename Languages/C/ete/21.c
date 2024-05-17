#include <stdio.h>

int main(){
  int c, n, m;
  scanf("%d %d %d", &c, &n, &m);

  int arr1[c][c];
  for (int i = 0; i < c; i++){
    for (int j = 0; j < c; j++){
      scanf("%d", &arr1[i][j]);
    }
  }

  int arr2[c][c];
  for (int i = 0; i < c; i++){
    for (int j = 0; j < c; j++){
      scanf("%d", &arr2[i][j]);
    }
  }

  int t = 0;

  t += arr1[n-1][m-1];
  t += arr2[n-1][m-1];

  printf("%d", t);
}