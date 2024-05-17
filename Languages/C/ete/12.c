#include <stdio.h>
#include <limits.h>

int main(){
  int n;
  scanf("%d", &n);

  int arr[n];

  for (int i = 0; i < n; i++){
    scanf("%d", &arr[i]);
  }

  int maxi = INT_MIN;
  int mini = INT_MAX;
  for (int i = 0; i < n; i++){
    if (maxi < arr[i]) maxi = arr[i];
    if (mini > arr[i]) mini = arr[i];
  }

  int smaxi = INT_MIN;
  int smini = INT_MAX;
  for (int i = 0; i < n; i++){
    if (smaxi < arr[i] && arr[i] != maxi) smaxi = arr[i];
    if (smini > arr[i] && arr[i] != mini) smini = arr[i];
  }

  printf("%d", smaxi-smini);
}