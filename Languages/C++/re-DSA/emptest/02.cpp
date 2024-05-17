#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main(){
  int m, n;
  cin >> m >> n;
  int gcd;

  for (int i = 1; i <= m && i <= n; i++){
    if (m % i == 0 && n % i == 0){
      gcd = i;
    }
  }

  cout << gcd;
}