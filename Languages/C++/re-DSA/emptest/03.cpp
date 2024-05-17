#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main(){
  int n;
  cin >> n;

  int sum = 0; 

  while (n > 0){
    int ld = n % 10;
    sum += ld;
    n /= 10;
  }

  cout << sum;
}