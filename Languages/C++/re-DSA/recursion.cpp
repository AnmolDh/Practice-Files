#include <iostream>
using namespace std;

void printCount(int n){
  if (n == 0){
    return;
  }
  printCount(n-1);
  cout << n << " ";
}

int factorial(int n){
  if (n == 0){
    return 1;
  }
  return n * factorial(n-1);
}

int power(int n){
  if (n == 0){
    return 1;
  }
  return 2 * power(n-1);
}

int nthFibbonaci(int n){
  if (n == 0){
    return 0;
  }
  if (n == 1){
    return 1;
  }
  return nthFibbonaci(n-2) + nthFibbonaci(n-1);
}

int main(){
  printCount(20);
  cout << endl;
  cout << factorial(5) << endl;
  cout << power(4) << endl;
  cout << nthFibbonaci(8) << endl;
}