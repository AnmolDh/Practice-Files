#include <stdio.h>
#include <limits.h>

void main(){
    printf("sizeof(int) in byte: %lu \n", sizeof(int));
    printf("sizeof(long) in byte: %lu \n", sizeof(long));
    printf("sizeof(char) in byte: %lu \n", sizeof(char));
    printf("sizeof(float) in byte: %lu \n", sizeof(float));
    printf("sizeof(double) in byte: %lu \n", sizeof(double));

    printf("\nRange of Datatype");
    printf("\nChar Min Value: %d", SCHAR_MIN);
    printf("\nChar Max Value: %d", SCHAR_MAX);
    printf("\nInt Min Value: %d", INT_MIN);
    printf("\nInt Max Value: %d", INT_MAX);
    printf("\nLong Min Value: %d", LONG_MAX);
    printf("\nLong Max Value: %ld", LONG_MAX);
    printf("\nFloat Min Value: %e", __FLT_MIN__);
    printf("\nFloat Max Value: %e", __FLT_MAX__);
    printf("\nDouble Min Value: %e", __DBL_MIN__);
    printf("\nDouble Max Value: %e", __DBL_MAX__);
}