#include <stdio.h>

void main(){
    printf("Enter Character: ");
    char ch = getc(stdin);
    putc(ch, stdout);

    printf("Enter a String: ");
    char cha[10];
    gets(cha);
    puts(ch);
}