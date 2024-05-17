#include <stdio.h>

int main(){
  int r, c;
  scanf("%d %d", &r, &c);

  int arr[r][c];

  int zeror;

  for (int i = 0; i < r; i++){
    for (int j = 0; j < c; j++){
      int t;
      scanf("%d", &t);
      arr[i][j] = t;
      if (t == 0){
        zeror = i;
      }
    }
  }

  for (int i = 0; i < c; i++){
    arr[zeror][i] = 0;
  }

  for (int i = 0; i < r; i++){
    for (int j = 0; j < c; j++){
      printf("%d ", arr[i][j]);
    }
    printf("\n");
  }
}