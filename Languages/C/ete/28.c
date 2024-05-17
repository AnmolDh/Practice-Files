#include <stdio.h>

int main(){
  int n, sum = 0, e_sum;
  scanf("%d", &n);

  int arr[n];
  for (int i = 0; i < n-1; i++){
    scanf("%d", &arr[i]);
    sum += arr[i];
  }

  e_sum = n*(n+1)/2;

  printf("%d", e_sum-sum);
}