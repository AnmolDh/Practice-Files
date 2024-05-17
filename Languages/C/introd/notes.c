// #include <stdio.h>

// void countNote(int amount){
//     int note1, note2, note5, note10, note20, note50, note100, note500;
//     note1 = note2 = note5 = note10 = note20 = note50 = note100 = note500 = 0;

//     if (amount >= 500){
//         note500 = amount/500;
//         amount -= note500*500;
//     }

//     if (amount >= 100){
//         note100 = amount/100;
//         amount -= note100*100;
//     }

//     if (amount >= 50){
//         note50 = amount/50;
//         amount -= note50*50;
//     }

//     if (amount >= 20){
//         note20 = amount/20;
//         amount -= note20*20;
//     }

//     if (amount >= 10){
//         note10 = amount/10;
//         amount -= note10*10;
//     }

//     if (amount >= 5){
//         note5 = amount/5;
//         amount -= note5*5;
//     }

//     if (amount >= 2){
//         note10 = amount/2;
//         amount -= note2*2;
//     }

//     if (amount >= 1){
//         note10 = amount/1;
//         amount -= note10*1;
//     }

//     printf("Total number of notes: ");
//     printf("\n500 = %d", note500);
//     printf("\n100 = %d", note100);
//     printf("\n50 = %d", note50);
//     printf("\n20 = %d", note20);
//     printf("\n10 = %d", note10);
//     printf("\n5 = %d", note5);
//     printf("\n2 = %d", note2);
//     printf("\n1 = %d", note1);
// }

// void main(){
//     int amount;
//     printf("\nEnter Amount: ");
//     scanf("%d", &amount);
//     fflush(stdin);
//     countNote(amount);
// }

#include <stdio.h>

int main(){
    int percent = 10;
    printf("attendance is %d", percent);
}