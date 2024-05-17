#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);

  int sum = 0;
  int p = 2;

  while (n != 0){
    int ld = n % 10;
    if (p % 2 == 0){
      sum -= ld;
    }else{
      sum += ld;
    }
    p++;
    n /= 10;
  }

  printf("%d", sum);
}