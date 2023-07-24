#include <stdio.h>

void main(){
    float p, r, t;
    printf("Enter P R T: ");
    scanf("%f %f %f", &p, &r, &t);
    float intrest = p*r*t/100;
    printf("Total Intrest: %.2f", intrest);
}