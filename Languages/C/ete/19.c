#include <stdio.h>
#include <limits.h>

int mima(int n, int m, int arr[]){
  int min = INT_MAX;
  int max = INT_MIN;

  for (int i = 0; i < n; i++){
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  if (m == 1) return min;
  return max;
}

int main(){
  int n, m;
  scanf("%d %d", &n, &m);

  int arr[n];
  for (int i = 0; i < n; i++){
    scanf("%d", &arr[i]);
  }

  printf("%d", mima(n, m, arr));

}