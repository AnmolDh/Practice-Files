#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main(){
  int n;
  cin >> n;
  vector<vector<int>> w;

  for (int i = 0; i < n; i++){
    vector<int> temp;
    for (int j = 0; j < 2; j++){
      int x;
      cin >> x;
      temp.push_back(x);
    }
    w.push_back(temp);
  }

  int c;
  cin >> c;


  vector<vector<int>> pw;

  for (int i = 0; i < w.size()-1; i++){
    for (int j = i+1; j < w.size(); j++){
      if (w[i][0] + w[j][0] <= c){
        vector<int> temp;
        temp.push_back(i);
        temp.push_back(j);
        pw.push_back(temp);
      }
    }
  }

  int mp = INT_MIN;

  for (int i = 0; i < pw.size(); i++){
    if (w[pw[i][0]][1] + w[pw[i][1]][1] >= mp){
        mp = w[pw[i][0]][1] + w[pw[i][1]][1];
      }
  }

  cout << mp << endl;
}