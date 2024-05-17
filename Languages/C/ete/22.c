#include <stdio.h>
#include <stdbool.h>

int main(){
  int arr[5][5];
  for (int i = 0; i < 5; i++){
    for (int j = 0; j < 5; j++){
      scanf("%d", &arr[i][j]);
    }
  }

  bool tor = true;
  int chk = arr[0][0];
  int j = 1;
  for (int i = 1; i < 5; i++){
    if (arr[i][j] != chk){
      tor = false;
      break;
    }
    if (j >= 5) break;
    j++;
  }

  printf("%d", tor);
}