#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() {
  int n;
  cin >> n;
  
  while (n > 1){
    bool isPrime = true;
    for (int i = 2; i < n; i++){
      if (n % i == 0){
        isPrime = false;
        break;
      }
    }
    if (isPrime){
      cout << n << " ";
    }
    n--;
  }
}