// #include <stdio.h>

// struct emp{
//     int empid;
//     char name[20];
//     char des[20];
//     char dept[20];
//     int salary;
// };

// int main(){
//     struct emp e1;

//     scanf("%d", &e1.empid);
//     scanf("%s", &e1.name);
//     scanf("%s", &e1.des);
//     scanf("%s", &e1.dept);
//     scanf("%d", &e1.salary);

//     printf("\n%d", e1.empid);
//     printf("\n%s", e1.name);
//     printf("\n%s", e1.des);
//     printf("\n%s", e1.dept);
//     printf("\n%d", e1.salary);
// }

// #include <stdio.h>

// int nat(int n, int i){
//     if (i >= n){
//         printf("%d\n", n);
//         nat(n+1, i);
//     }
// }

// int main(){
//     int n = 1;
//     int i = 20;
//     nat(n, i);
// }

// #include <stdio.h>

// struct acc{
//     int accno;
//     char name[20];
//     int bal;
// }b[3];

// int check(struct acc b[]){
//     int c = 0;
//     for (int i = 0; i < 3; i++){
//         if (b[i].bal < 1000){
//             printf("%s\n", b[i].name);
//             c++;
//         }
//     }
//     if (c == 0){
//         printf("None");
//     }
// }

// int main(){
//     for (int i = 0; i < 3; i++){
//         scanf("%d", &b[i].accno);
//         scanf("%s", &b[i].name);
//         scanf("%d", &b[i].bal);
//     }

//     check(b);
// }

// #include <stdio.h>
// #include <string.h>

// struct student
// {
//     char name[20];
//     char city[20];
// } s[50];

// int main()
// {
//     struct student t;
//     int n;
//     scanf("%d", &n);

//     for (int i = 0; i < n; i++)
//     {
//         scanf("%s", s[i].name);
//         scanf("%s", s[i].city);
//     }

//     for (int i = 0; i < n; i++)
//     {
//         for (int j = i + 1; j < n; j++)
//         {
//             if (strcmp(s[i].name, s[j].name) > 0)
//             {
//                 t = s[i];
//                 s[i] = s[j];
//                 s[j] = t;
//             }
//         }
//     }

//     for (int i = 0; i < n; i++)
//     {
//         printf("%s %s\n", s[i].name, s[i].city);
//     }
//     return 0;
// }

// #include <stdio.h>
// #include <string.h>

// struct emp{
//     char name[20];
//     int wage;
//     int days;
// };

// int main(){
//     struct emp e1, e2;

//     scanf("%s", &e1.name);
//     scanf("%d", &e1.wage);
//     scanf("%d", &e1.days);
//     scanf("%s", &e2.name);
//     scanf("%d", &e2.wage);
//     scanf("%d", &e2.days);

//     int tp = (e1.wage*e1.days) + (e2.wage*e2.days);

//     printf("%d", tp);
// }

// #include <stdio.h>

// int sum(int n){
//     if (n != 0){
//         return n + sum(n-1);
//     }
//     else return n;
// }

// int main(){
//     int n;
//     scanf("%d", &n);

//     printf("%d", sum(n));
// }

#include <stdio.h>

int gr(int arr[], int i, int n, int hstno)
{
    if (i < n)
    {
        if (hstno < arr[i])
        {
            hstno = arr[i];
            i++;
            gr(arr, i, n, hstno);
        }
    }
    return hstno;
}

int main()
{
    int arr[100], hstno, i, n;
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    hstno = gr(arr, i, n, hstno);
    printf("%d", hstno);
    return 0;
}
