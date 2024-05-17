#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(){
  int n;
  scanf("%d", &n);

  // char *arr[n];
  // for (int i = 0; i < n; i++){
  //   arr[i] = malloc(sizeof(char)*100);
  //   scanf("%s", arr[i]);
  // }

  // for (int i = 0; i < n-1; i++){
  //   for (int j = 0; j < n-i-1; j++){
  //     if (strcmp(arr[j], arr[j+1]) > 0){
  //       char *temp = arr[j];
  //       arr[j] = arr[j+1];
  //       arr[j+1] = temp;
  //     }
  //   }
  // }

  char arr[n][100];
  for (int i = 0; i < n; i++){
    scanf("%s", arr[i]);
  }

  for (int i = 0; i < n-1; i++){
    for (int j = 0; j < n-i-1; j++){
      if (strcmp(arr[j], arr[j+1]) > 0){
        char temp[100];
        strcpy(temp, arr[j]);
        strcpy(arr[j], arr[j+1]);
        strcpy(arr[j+1], temp);
      }
    }
  }

  for (int i = 0; i < n; i++){
    printf("%s ", arr[i]);
  }
}