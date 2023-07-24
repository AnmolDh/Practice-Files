#include <stdio.h>
#include <stdlib.h>

void main(){
    char str[20];
    puts("Enter String: ");
    fgets(str, 20, stdin);
    printf("User entered string is: %s", str);
}