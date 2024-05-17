#include <stdio.h>

int main(){
  char arr[50];
  scanf("%s", arr);

  int i = 0;
  int num = 0;
  while (arr[i] != '.'){
    int r = arr[i] - '0';
    num = num * 10 + r;
    i++;
  }


  if(num >= 0 && num <= 127){
    printf("Class A IP Address");
  }
  else if(num >=128 && num <= 191){
    printf("Class B IP Address");
  }
  else if(num >=192 && num <= 224){
    printf("Class C IP Address");
  }
  else if(num >=225 && num <= 240){
    printf("Class D IP Address");
  }
  else{
    printf("Class E IP Address");
  }
}