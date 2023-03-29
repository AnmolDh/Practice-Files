#include <stdio.h>

void main(){
    int num;
    printf("Enter Deccimal Number: ");
    scanf("%d", &num);

    for (int loop = 15; loop >= 0; loop--){
        if ((1<<loop)&num){
            printf("1");
        }
        else {printf("0");}
    }
}