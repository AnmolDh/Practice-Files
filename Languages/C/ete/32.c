#include <stdio.h>

int main(){
  int n;
  scanf("%d", &n);

  int s1 = 0;
  int s2 = 1;

  for (int i = 0; i < n-2; i++){
    int temp = s2;
    s2 = s2 + s1;
    s1 = temp;
  }

  printf("%d", s2);
}