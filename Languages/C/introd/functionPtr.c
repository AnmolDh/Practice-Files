#include <stdio.h>

int fun(char ch){
    return ch - '0';
}

int main(){
    int (*ptr_fun)(char) = &fun;
    int x = (*ptr_fun)('5');
    printf("%d\n", x);
    return 0;
}