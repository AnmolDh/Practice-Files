#include <stdio.h>
#include <stdbool.h>

int main(){
  int n;
  scanf("%d", &n);

  int f = 0;
  int f1 = 1;
  bool exists = false;
  while (f < n){
    int temp = f;
    f = f1;
    f1 = temp + f1;

    if (f1 == n){
      exists = true;
      break;
    };
  }
  printf("%d", exists);
}