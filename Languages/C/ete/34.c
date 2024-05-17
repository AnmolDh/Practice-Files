#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);

  int p = 1;
  for (int i = 1; i <= n; i++){
    if (i % 2 == 0){
      p *= i;
    }
  }

  printf("%d", p);
}