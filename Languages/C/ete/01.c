#include <stdio.h>

int main(){
  int bin;
  scanf("%d", &bin);

  int power = 1;
  int sum = 0;

  while (bin != 0){
    int ld = bin % 10;
    sum += ld * power;
    power *= 2;
    bin /= 10;
  }

  printf("%d", sum);
  
  return 0;
}