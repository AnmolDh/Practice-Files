#include <stdio.h>
#include <limits.h>

int main(){
  int n;
  scanf("%d", &n);

  int maxi = INT_MIN;
  int smaxi = INT_MIN;

  int arr[n];
  for (int i = 0; i < n; i++){
    scanf("%d", &arr[i]);
    if (arr[i] > maxi) maxi = arr[i];
  }

  for (int i = 0; i < n; i++){
    if (arr[i] > smaxi && arr[i] != maxi) smaxi = arr[i];
  }

  printf("%d %d", maxi, smaxi);
}