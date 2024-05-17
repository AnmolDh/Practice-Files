#include <stdio.h>

int main(){
  int arr[7];
  for (int i = 0; i < 7; i++){
    scanf("%d", &arr[i]);
  }

  for (int i = 1; i <= 7; i++){
    for (int j = 0; j < 7; j++){
      if (i == arr[j]){
        printf("%d ", j);
        for (int in = j; in < 7; in++){
          arr[in] = arr[in+1];
        }
      }
    }
  }
}