#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);

  int fac = 1;
  for (int i = n; i > 1; i--){
    fac *= i;
  }

  printf("%d", fac);
}