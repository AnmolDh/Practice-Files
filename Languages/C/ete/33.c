#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);
  
  int ld = n % 10;
  int fd;

  while (n != 0){
    if (n / 10 == 0){
      fd = n % 10;
    }
    n /= 10;
  }

  printf("%d %d", fd, ld);
}