#include <stdio.h>

int main(){
  int n, t;
  scanf("%d %d", &n, &t);

  int arr[n];
  for (int i = 0; i < n; i++){
    scanf("%d", &arr[i]);
  }

  int cnt = 0;
  for (int i = 0; i < n; i++){
    int sum = 0;
    for (int j = i+1; j < n; j++){
      sum = arr[i] + arr[j];
      if (sum == t){
        cnt++;
      }
    }
  }

  printf("%d", cnt);
}