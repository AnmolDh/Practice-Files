#include <stdio.h>
#include <string.h>

typedef struct employee
{
    char name[50];
    int salary;
} emp;


void main(){
    emp e1;
    printf("enter employee record: ");
    printf("\nemployee name: ");
    scanf("%s", e1.name);
    printf("\nenter employee salary: ");
    scanf("%d", &e1.salary);
    printf("\nstudent name is %s", e1.name);
    printf("\nroll is %d", e1.salary);
}