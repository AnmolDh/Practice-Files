//program to validate date
#include <stdio.h>
void main(){
    int dd,mm,yy;
    printf("\nEnter date in format DD MM YYYY: ");
    scanf("%d %d %d", &dd, &mm, &yy);

    //check year
    if (yy >= 1990 && yy <= 9999){
     if (mm >= 1 && mm <= 12){
        if ((dd >= 1 && dd <= 31) && (mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12)){
            printf("\nDate is Valid.");
        }
        else if ((dd >= 1 && dd <= 30) && (mm == 4 || mm == 6 || mm == 9 || mm == 11)){
            printf("\nDate is Valid.");
        }
        else if ((dd >= 1 && dd <= 28) && (mm == 2)){
            printf("\nDate is Valid.");
        }
        else {
            printf("Date is not Valid.");
        }
     }  
     else {
        printf("\nMonth is not Valid.");
     } 
    }
    else{
        printf("\nYear is not Valid.");
    }
}