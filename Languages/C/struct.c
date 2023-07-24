#include <stdio.h>
#include <string.h>

struct Student{
    char name[25];
    int rollnum;
    char branch[10];
} S1, S2;

void main(){
    struct Student S3;
    strcpy(S1.name, "Avantika");
    S1.rollnum = 55;
    strcpy(S1.branch, "CSE");
    printf("%s %d %s", S1.name, S1.rollnum, S1.branch);
}