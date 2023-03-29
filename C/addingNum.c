#include <stdio.h>

void main(){
    int x, y, z;
    printf("Enter three values: ");
    scanf("%d %d %d", &x, &y, &z);
    int sum = x + y + z;
    printf("Sum: %d", sum);
    printf("\n");
    printf("x + y + z: %d", x+y+z);
}