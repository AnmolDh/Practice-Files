#include <stdio.h>
#include <stdlib.h>

int comp(const void* num1, const void* num2){
  return *(int*) num1 - *(int*) num2;
}

int main(){
  int n, m;
  scanf("%d", &n);
  int arr1[n];

  for (int i = 0; i < n; i++){
    scanf("%d", &arr1[i]);
  }

  scanf("%d", &m);
  int arr2[m];
  for (int i = 0; i < m; i++){
    scanf("%d", &arr2[i]);
  }

  int v[m+n];

  for (int i = 0; i < n; i++){
    v[i] = arr1[i];
  }

  int x = 0;
  for (int i = n; i < m+n; i++){
    v[i] = arr2[x];
    x++;
  }

  qsort(v, m+n, sizeof(v[0]), comp);

  for (int i = 0; i < n+m; i++){
    printf("%d ", v[i]);
  }

}