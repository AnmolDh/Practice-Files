#include <stdio.h>

int main(){
  char c;
  scanf("%c", &c);

  int a = 'A';
  int cn = c;

  for (int i = 0; i < cn-a+1; i++){
    int an = a;
    for (int j = 0; j < i+1; j++){
      printf("%c ", an);
      an++;
    }
    printf("\n");
  }
}