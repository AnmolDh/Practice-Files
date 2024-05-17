#include <stdio.h>

int main(){
  char c;
  scanf("%c", &c);

  char a = 'A';

  int an = a;
  for (int i = 0; i < c-a+1; i++){
    for (int j = 0; j < i+1; j++){
      printf("%c ", an);
    }
    an++;
    printf("\n");
  }
}