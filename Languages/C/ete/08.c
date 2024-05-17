#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);

  float sum = 1;

  for (int i = 2; i <= n; i++){
    float r = i;
    if (i % 2 == 0){
      sum -= 1/r;
    } else{
      sum += 1/r;
    }
  }

  printf("%0.4lf", sum);
}