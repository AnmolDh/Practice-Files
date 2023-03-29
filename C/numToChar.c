#include <stdio.h>
#include <stdlib.h>

void main(){
    long int n, sum = 0, r;
    system("clear");
    puts("Enter the Number: ");
    scanf("%d", &n);



    n = sum;
    while (n > 0){
        r = n % 10;
        switch(r){
            case 1: printf("\nOne"); break;
            case 2: printf("\nTwo"); break;
            case 3: printf("\nThree"); break;
            case 4: printf("\nFour"); break;
            case 5: printf("\nFive"); break;
            case 6: printf("\nSix"); break;
            case 7: printf("\nSeven"); break;
            case 8: printf("\nEight"); break;
            case 9: printf("\nNine"); break;
            case 0: printf("\nZero"); break;
            default:printf("Invalid"); break;
        }
        n = n /10;
    }
} 